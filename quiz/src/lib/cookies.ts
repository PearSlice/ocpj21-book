// Cookie helpers. All values are JSON-serialized and URI-encoded.
// setChunkedJSON splits large payloads across `${prefix}_0`, `${prefix}_1`, ...
// with `${prefix}_meta` storing { chunks: N }.

type WriteOpts = { days?: number; maxBytesPerCookie?: number };

const DEFAULT_DAYS = 365;
const DEFAULT_MAX = 3500; // conservative under the 4096-byte per-cookie limit
const COOKIE_ATTRS = 'path=/; SameSite=Lax';

function daysFromNow(days: number): string {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  return d.toUTCString();
}

function writeRawCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${daysFromNow(days)}; ${COOKIE_ATTRS}`;
}

function readRawCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const target = encodeURIComponent(name) + '=';
  const parts = document.cookie.split(';');
  for (const p of parts) {
    const c = p.trim();
    if (c.startsWith(target)) return decodeURIComponent(c.slice(target.length));
  }
  return null;
}

function deleteRawCookie(name: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ${COOKIE_ATTRS}`;
}

export function getJSON<T>(name: string): T | null {
  const raw = readRawCookie(name);
  if (raw == null) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function setJSON<T>(name: string, value: T, opts: WriteOpts = {}): void {
  const days = opts.days ?? DEFAULT_DAYS;
  writeRawCookie(name, JSON.stringify(value), days);
}

export function setChunkedJSON<T>(prefix: string, value: T, opts: WriteOpts = {}): void {
  const days = opts.days ?? DEFAULT_DAYS;
  const max = opts.maxBytesPerCookie ?? DEFAULT_MAX;
  const serialized = JSON.stringify(value);
  // Slice at code-point boundaries; encodeURIComponent will expand non-ASCII
  // bytes so we budget in raw-string chunk length against the max byte target.
  const chunks: string[] = [];
  let i = 0;
  while (i < serialized.length) {
    // Pick a slice whose encoded size fits in max. Shrink until it fits.
    let end = Math.min(i + max, serialized.length);
    let slice = serialized.slice(i, end);
    while (encodeURIComponent(slice).length > max && end > i + 1) {
      end -= 64;
      if (end <= i) end = i + 1;
      slice = serialized.slice(i, end);
    }
    chunks.push(slice);
    i = end;
  }

  const prevMeta = getJSON<{ chunks: number }>(`${prefix}_meta`);
  chunks.forEach((c, idx) => writeRawCookie(`${prefix}_${idx}`, c, days));
  writeRawCookie(`${prefix}_meta`, JSON.stringify({ chunks: chunks.length }), days);
  if (prevMeta && prevMeta.chunks > chunks.length) {
    for (let k = chunks.length; k < prevMeta.chunks; k++) {
      deleteRawCookie(`${prefix}_${k}`);
    }
  }
}

export function getChunkedJSON<T>(prefix: string): T | null {
  const meta = getJSON<{ chunks: number }>(`${prefix}_meta`);
  if (!meta || !meta.chunks) return null;
  let acc = '';
  for (let k = 0; k < meta.chunks; k++) {
    const part = readRawCookie(`${prefix}_${k}`);
    if (part == null) return null;
    acc += part;
  }
  try {
    return JSON.parse(acc) as T;
  } catch {
    return null;
  }
}

export function clearAll(prefixes: string[], singles: string[]): void {
  for (const name of singles) deleteRawCookie(name);
  for (const prefix of prefixes) {
    const meta = getJSON<{ chunks: number }>(`${prefix}_meta`);
    if (meta) {
      for (let k = 0; k < meta.chunks; k++) deleteRawCookie(`${prefix}_${k}`);
    }
    deleteRawCookie(`${prefix}_meta`);
  }
}
