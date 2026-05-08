var Xs=Object.defineProperty;var Ks=(s,e,n)=>e in s?Xs(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Ue=(s,e,n)=>Ks(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function $(){}function Hs(s){return s()}function as(){return Object.create(null)}function me(s){s.forEach(Hs)}function Xe(s){return typeof s=="function"}function be(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function Qs(s){return Object.keys(s).length===0}function Fs(s,...e){if(s==null){for(const t of e)t(void 0);return $}const n=s.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ps(s,e,n){s.$$.on_destroy.push(Fs(e,n))}function o(s,e){s.appendChild(e)}function q(s,e,n){s.insertBefore(e,n||null)}function A(s){s.parentNode&&s.parentNode.removeChild(s)}function zs(s,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].d(e)}function u(s){return document.createElement(s)}function He(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function C(s){return document.createTextNode(s)}function y(){return C(" ")}function Ns(){return C("")}function ce(s,e,n,t){return s.addEventListener(e,n,t),()=>s.removeEventListener(e,n,t)}function c(s,e,n){n==null?s.removeAttribute(e):s.getAttribute(e)!==n&&s.setAttribute(e,n)}function Ms(s){return s===""?null:+s}function en(s){return Array.from(s.childNodes)}function R(s,e){e=""+e,s.data!==e&&(s.data=e)}function os(s,e){s.value=e??""}function Me(s,e,n,t){n==null?s.style.removeProperty(e):s.style.setProperty(e,n,"")}function K(s,e,n){s.classList.toggle(e,!!n)}let Ie;function De(s){Ie=s}function Rs(){if(!Ie)throw new Error("Function called outside component initialization");return Ie}function sn(s){Rs().$$.on_mount.push(s)}function nn(s){Rs().$$.on_destroy.push(s)}const Se=[],ls=[];let Ce=[];const cs=[],tn=Promise.resolve();let Ye=!1;function an(){Ye||(Ye=!0,tn.then(Vs))}function $e(s){Ce.push(s)}const Ge=new Set;let ve=0;function Vs(){if(ve!==0)return;const s=Ie;do{try{for(;ve<Se.length;){const e=Se[ve];ve++,De(e),on(e.$$)}}catch(e){throw Se.length=0,ve=0,e}for(De(null),Se.length=0,ve=0;ls.length;)ls.pop()();for(let e=0;e<Ce.length;e+=1){const n=Ce[e];Ge.has(n)||(Ge.add(n),n())}Ce.length=0}while(Se.length);for(;cs.length;)cs.pop()();Ye=!1,Ge.clear(),De(s)}function on(s){if(s.fragment!==null){s.update(),me(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach($e)}}function ln(s){const e=[],n=[];Ce.forEach(t=>s.indexOf(t)===-1?e.push(t):n.push(t)),n.forEach(t=>t()),Ce=e}const Pe=new Set;let je;function Ve(){je={r:0,c:[],p:je}}function We(){je.r||me(je.c),je=je.p}function ee(s,e){s&&s.i&&(Pe.delete(s),s.i(e))}function ie(s,e,n,t){if(s&&s.o){if(Pe.has(s))return;Pe.add(s),je.c.push(()=>{Pe.delete(s),t&&(n&&s.d(1),t())}),s.o(e)}else t&&t()}function ue(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ws(s,e){s.d(1),e.delete(s.key)}function cn(s,e){ie(s,1,1,()=>{e.delete(s.key)})}function Ke(s,e,n,t,a,l,i,p,d,r,g,f){let b=s.length,m=l.length,h=b;const j={};for(;h--;)j[s[h].key]=h;const x=[],S=new Map,v=new Map,w=[];for(h=m;h--;){const D=f(a,l,h),T=n(D);let N=i.get(T);N?w.push(()=>N.p(D,e)):(N=r(T,D),N.c()),S.set(T,x[h]=N),T in j&&v.set(T,Math.abs(h-j[T]))}const I=new Set,_=new Set;function k(D){ee(D,1),D.m(p,g),i.set(D.key,D),g=D.first,m--}for(;b&&m;){const D=x[m-1],T=s[b-1],N=D.key,E=T.key;D===T?(g=D.first,b--,m--):S.has(E)?!i.has(N)||I.has(N)?k(D):_.has(E)?b--:v.get(N)>v.get(E)?(_.add(N),k(D)):(I.add(E),b--):(d(T,i),b--)}for(;b--;){const D=s[b];S.has(D.key)||d(D,i)}for(;m;)k(x[m-1]);return me(w),x}function Ae(s){s&&s.c()}function ye(s,e,n){const{fragment:t,after_update:a}=s.$$;t&&t.m(e,n),$e(()=>{const l=s.$$.on_mount.map(Hs).filter(Xe);s.$$.on_destroy?s.$$.on_destroy.push(...l):me(l),s.$$.on_mount=[]}),a.forEach($e)}function we(s,e){const n=s.$$;n.fragment!==null&&(ln(n.after_update),me(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rn(s,e){s.$$.dirty[0]===-1&&(Se.push(s),an(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function qe(s,e,n,t,a,l,i=null,p=[-1]){const d=Ie;De(s);const r=s.$$={fragment:null,ctx:[],props:l,update:$,not_equal:a,bound:as(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:as(),dirty:p,skip_bound:!1,root:e.target||d.$$.root};i&&i(r.root);let g=!1;if(r.ctx=n?n(s,e.props||{},(f,b,...m)=>{const h=m.length?m[0]:b;return r.ctx&&a(r.ctx[f],r.ctx[f]=h)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](h),g&&rn(s,f)),b}):[],r.update(),g=!0,me(r.before_update),r.fragment=t?t(r.ctx):!1,e.target){if(e.hydrate){const f=en(e.target);r.fragment&&r.fragment.l(f),f.forEach(A)}else r.fragment&&r.fragment.c();e.intro&&ee(s.$$.fragment),ye(s,e.target,e.anchor),Vs()}De(d)}class xe{constructor(){Ue(this,"$$");Ue(this,"$$set")}$destroy(){we(this,1),this.$destroy=$}$on(e,n){if(!Xe(n))return $;const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const a=t.indexOf(n);a!==-1&&t.splice(a,1)}}$set(e){this.$$set&&!Qs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pn);const Te=[];function dn(s,e){return{subscribe:Js(s,e).subscribe}}function Js(s,e=$){let n;const t=new Set;function a(p){if(be(s,p)&&(s=p,n)){const d=!Te.length;for(const r of t)r[1](),Te.push(r,s);if(d){for(let r=0;r<Te.length;r+=2)Te[r][0](Te[r+1]);Te.length=0}}}function l(p){a(p(s))}function i(p,d=$){const r=[p,d];return t.add(r),t.size===1&&(n=e(a,l)||$),p(s),()=>{t.delete(r),t.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:i}}function hn(s,e,n){const t=!Array.isArray(s),a=t?[s]:s;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return dn(n,(i,p)=>{let d=!1;const r=[];let g=0,f=$;const b=()=>{if(g)return;f();const h=e(t?r[0]:r,i,p);l?i(h):f=Xe(h)?h:$},m=a.map((h,j)=>Fs(h,x=>{r[j]=x,g&=~(1<<j),d&&b()},()=>{g|=1<<j}));return d=!0,b(),function(){me(m),f(),d=!1}})}const un=[{id:"ch01",title:"Chapter ONE",subtitle:"Utilizing Java Object-Oriented Approach - Part 1",count:24},{id:"ch02",title:"Chapter TWO",subtitle:"Utilizing Java Object-Oriented Approach - Part 2",count:16},{id:"ch03",title:"Chapter THREE",subtitle:"Working with Records and Enums",count:7},{id:"ch04",title:"Chapter FOUR",subtitle:"Working with Data",count:5},{id:"ch05",title:"Chapter FIVE",subtitle:"Controlling Program Flow",count:10},{id:"ch06",title:"Chapter SIX",subtitle:"Arrays, Generics, and Collections",count:8},{id:"ch07",title:"Chapter SEVEN",subtitle:"Error Handling and Exceptions",count:8},{id:"ch08",title:"Chapter EIGHT",subtitle:"Functional Interfaces and Lambda Expressions",count:5},{id:"ch09",title:"Chapter NINE",subtitle:"Streams",count:9},{id:"ch10",title:"Chapter TEN",subtitle:"Concurrency and Multithreading",count:9},{id:"ch11",title:"Chapter ELEVEN",subtitle:"The Date/Time API",count:15},{id:"ch12",title:"Chapter TWELVE",subtitle:"File I/O",count:9},{id:"ch13",title:"Chapter THIRTEEN",subtitle:"The Java Platform Module System",count:13},{id:"ch14",title:"Chapter FOURTEEN",subtitle:"Localization",count:7}],mn=[{id:"ch01-q1",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:1,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">StringBuilder</span> <span class="hljs-variable">sb1</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">StringBuilder</span>(<span class="hljs-string">&quot;Java&quot;</span>);
        <span class="hljs-type">StringBuilder</span> <span class="hljs-variable">sb2</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">StringBuilder</span>(<span class="hljs-string">&quot;Python&quot;</span>);
        sb1 = sb2;
        <span class="hljs-comment">// More code here</span>
    }
}
</code></pre><p>After the execution of the above code, which of the following statements is true regarding garbage collection?</p>
`,options:[{letter:"A",html:`<p>Both <code>sb1</code> and <code>sb2</code> are eligible for garbage collection.</p>
`},{letter:"B",html:`<p>Only the <code>StringBuilder</code> object initially referenced by <code>sb1</code> is eligible for garbage collection.</p>
`},{letter:"C",html:`<p>Only the <code>StringBuilder</code> object initially referenced by <code>sb2</code> is eligible for garbage collection.</p>
`},{letter:"D",html:`<p>Neither of the <code>StringBuilder</code> objects are eligible for garbage collection.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Both <code>sb1</code> and <code>sb2</code> are eligible for garbage collection.</p>
<ul>
<li>This option is incorrect because <code>sb2</code> still holds a reference to the <code>StringBuilder</code> object it was initially assigned. Therefore, it is not eligible for garbage collection.</li>
</ul>
</li>
<li><p><strong>B)</strong> Only the <code>StringBuilder</code> object initially referenced by <code>sb1</code> is eligible for garbage collection.</p>
<ul>
<li>This option is correct. After <code>sb1</code> is reassigned to reference the same object as <code>sb2</code>, the original <code>StringBuilder</code> object created with <code>new StringBuilder(&quot;Java&quot;)</code> and initially referenced by <code>sb1</code> is no longer accessible. Since there are no references pointing to it, it becomes eligible for garbage collection.</li>
</ul>
</li>
<li><p><strong>C)</strong> Only the <code>StringBuilder</code> object initially referenced by <code>sb2</code> is eligible for garbage collection.</p>
<ul>
<li>This option is incorrect because after the assignment <code>sb1 = sb2;</code>, both <code>sb1</code> and <code>sb2</code> reference the same object (<code>new StringBuilder(&quot;Python&quot;)</code>). This object is still accessible through <code>sb2</code> (and now <code>sb1</code> as well), so it is not eligible for garbage collection.</li>
</ul>
</li>
<li><p><strong>D)</strong> Neither of the <code>StringBuilder</code> objects are eligible for garbage collection.</p>
<ul>
<li>This option is incorrect because, as explained, the object initially referenced by <code>sb1</code> becomes eligible for garbage collection after <code>sb1</code> is reassigned to <code>sb2</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q2",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:2,multiSelect:!0,stemHtml:`<p>Which of the following are reserved keywords in Java? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p><code>implement</code></p>
`},{letter:"B",html:`<p><code>array</code></p>
`},{letter:"C",html:`<p><code>volatile</code></p>
`},{letter:"D",html:`<p><code>extends</code></p>
`}],correct:["C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>implement</code> is incorrect. The correct keyword for implementing an interface in Java is <code>implements</code>.</p>
</li>
<li><p><strong>B)</strong> <code>array</code> is incorrect. Java does not have a reserved keyword named <code>array</code>. Arrays are declared with square brackets <code>[ ]</code>.</p>
</li>
<li><p><strong>C)</strong> <code>volatile</code> is correct. <code>volatile</code> is a reserved keyword that is used to indicate that a variable&#39;s value will be modified by different threads.</p>
</li>
<li><p><strong>D)</strong> <code>extends</code> is correct. <code>extends</code> is a reserved keyword used in class declarations to inherit from a superclass.</p>
</li>
</ul>
`},{id:"ch01-q3",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:3,multiSelect:!0,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-number">1.</span> <span class="hljs-comment">// calculates the sum of numbers</span>
<span class="hljs-number">2.</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Calculator</span> {
<span class="hljs-number">3.</span>     <span class="hljs-comment">/* Adds two numbers
4.      * @param a the first number
5.      * @param b the second number
6.      * @return the sum of a and b
7.      */</span>
<span class="hljs-number">8.</span>     <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">add</span><span class="hljs-params">(<span class="hljs-type">int</span> a, <span class="hljs-type">int</span> b)</span> {
<span class="hljs-number">9.</span>         <span class="hljs-comment">// return the sum</span>
<span class="hljs-number">10.</span>        <span class="hljs-keyword">return</span> a + b;
<span class="hljs-number">11.</span>    }
<span class="hljs-number">12.</span>    <span class="hljs-comment">//<span class="hljs-doctag">TODO:</span> Implement subtract method</span>
<span class="hljs-number">13.</span>}
</code></pre><p>Which of the following statements are true about the comments in the above code? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>Line 1 is an example of a single-line comment.</p>
`},{letter:"B",html:`<p>Lines 3-7 demonstrate the use of a javadoc comment.</p>
`},{letter:"C",html:`<p>Line 9 uses a javadoc comment to explain the <code>add</code> method.</p>
`},{letter:"D",html:`<p>Line 12 uses a special <code>TODO</code> comment, different from a single-line comment.</p>
`},{letter:"E",html:`<p>Lines 3-7 is a block comment that is used as if it were a javadoc comment.</p>
`}],correct:["A","E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Line 1 is an example of a single-line comment.</p>
<ul>
<li>This option is correct. Line 1 uses <code>//</code> to start a single-line comment, which is a common way to add notes or explain a part of code that does not affect the execution.</li>
</ul>
</li>
<li><p><strong>B)</strong> Lines 3-7 demonstrate the use of a javadoc comment.</p>
<ul>
<li>This option is incorrect. Lines 3-7 use a block comment. Javadoc comments start with <code>/**</code> and end with <code>*/</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> Line 9 uses a javadoc comment to explain the <code>add</code> method.</p>
<ul>
<li>This option is incorrect. Line 9 is a single-line comment, not a javadoc comment. Javadoc comments in Java are defined with <code>/**</code> at the beginning and <code>*/</code> at the end, and are specifically used to describe classes, methods, and fields.</li>
</ul>
</li>
<li><p><strong>D)</strong> Line 12 uses a special <code>TODO</code> comment, different from a single-line comment.</p>
<ul>
<li>This option is incorrect. Line 12 uses a <code>TODO</code> comment, which is a convention many developers follow to mark parts of the code that require further development or attention but is still a single-line comment.</li>
</ul>
</li>
<li><p><strong>E)</strong> Lines 3-7 is a block comment that is used as if it were a javadoc comment.</p>
<ul>
<li>This option is correct. Lines 3-7 use a block comment, which is not processed by javadoc tools and therefore not suitable for generating official documentation.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q4",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:4,multiSelect:!0,stemHtml:`<p>Consider you have the following two Java files located in the same directory:</p>
<pre><code class="hljs language-java"><span class="hljs-comment">// File 1: Calculator.java</span>
<span class="hljs-keyword">package</span> math;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Calculator</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">add</span><span class="hljs-params">(<span class="hljs-type">int</span> a, <span class="hljs-type">int</span> b)</span> {
        <span class="hljs-keyword">return</span> a + b;
    }
}

<span class="hljs-comment">// File 2: Application.java</span>
<span class="hljs-keyword">package</span> app;

<span class="hljs-keyword">import</span> math.Calculator;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Application</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Calculator</span> <span class="hljs-variable">calc</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Calculator</span>();
        System.out.println(calc.add(<span class="hljs-number">5</span>, <span class="hljs-number">3</span>));
    }
}
</code></pre><p>Which of the following statements is true regarding the <code>package</code> and <code>import</code> statements in Java?</p>
`,options:[{letter:"A",html:`<p>The <code>import</code> statement in <code>Application.java</code> is unnecessary because both classes are in the same directory.</p>
`},{letter:"B",html:`<p>The <code>import</code> statement in <code>Application.java</code> is necessary for using the <code>Calculator</code> class because they belong to different packages.</p>
`},{letter:"C",html:`<p>The <code>Calculator</code> class will not be accessible in <code>Application.java</code> due to being in a different directory.</p>
`},{letter:"D",html:`<p>Removing the <code>package</code> statement from both files will allow <code>Application.java</code> to use <code>Calculator</code> without an <code>import</code> statement, regardless of directory structure.</p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>import</code> statement in <code>Application.java</code> is unnecessary because both classes are in the same directory.</p>
<ul>
<li>This option is incorrect. In Java, the <code>import</code> statement is used to bring a class or an entire package into visibility, and its necessity is determined by the package membership of the classes, not their directory location. Even if classes are in the same directory, if they belong to different packages, the <code>import</code> statement is required to use one in the other.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>import</code> statement in <code>Application.java</code> is necessary for using the <code>Calculator</code> class because they belong to different packages.</p>
<ul>
<li>This is the correct answer. The <code>Calculator</code> class is in the <code>math</code> package, and the <code>Application</code> class is in the <code>app</code> package. Despite being in the same directory, the different packages require an <code>import</code> statement to use <code>Calculator</code> in <code>Application</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Calculator</code> class will not be accessible in <code>Application.java</code> due to being in a different directory.</p>
<ul>
<li>This option is incorrect. Java&#39;s access control is not based on the directory structure but on the <code>package</code> and <code>import</code> declarations. As long as the classes are correctly packaged and imported, they can be accessed across different directories.</li>
</ul>
</li>
<li><p><strong>D)</strong> Removing the <code>package</code> statement from both files will allow <code>Application.java</code> to use <code>Calculator</code> without an <code>import</code> statement, regardless of directory structure.</p>
<ul>
<li>This option is correct. Removing the <code>package</code> statement from both files will place them in the default package, and they will be able to access each other without an <code>import</code> statement. However, this is not recommended for anything beyond very simple or temporary code due to namespace management and readability concerns.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q5",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:5,multiSelect:!0,stemHtml:`<p>Consider the default access levels provided by Java&#39;s four access modifiers: <code>public</code>, <code>protected</code>, <code>default</code> (no modifier), and <code>private</code>. Which of the following statements correctly describe the access levels granted by these modifiers? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>A <code>public</code> class or member can be accessed by any other class in the same package or in any other package.</p>
`},{letter:"B",html:`<p>A <code>protected</code> member can be accessed by any class in its own package, but from outside the package, only by classes that extend the class containing the <code>protected</code> member.</p>
`},{letter:"C",html:`<p>A member with <code>default</code> (no modifier) access can be accessed by any class in the same package but not from a class in a different package.</p>
`},{letter:"D",html:`<p>A <code>private</code> member can be accessed only by methods that are members of the same class or within the same file.</p>
`},{letter:"E",html:`<p>A <code>protected</code> member can be accessed by any class in the Java program, regardless of package.</p>
`}],correct:["A","B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A <code>public</code> class or member can be accessed by any other class in the same package or in any other package.</p>
<ul>
<li>This is correct. The <code>public</code> modifier grants the highest level of access. A <code>public</code> class or member is accessible from any other class, regardless of the packages they belong to.</li>
</ul>
</li>
<li><p><strong>B)</strong> A <code>protected</code> member can be accessed by any class in its own package, but from outside the package, only by classes that extend the class containing the protected member.</p>
<ul>
<li>This is correct. The <code>protected</code> access level allows a member to be accessed within its own package and by subclasses in any package. It offers a more restrictive level of access than <code>public</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> A member with <code>default</code> (no modifier) access can be accessed by any class in the same package but not from a class in a different package.</p>
<ul>
<li>This is correct. If no access modifier (also known as <code>default</code> access level) is specified, the member is accessible only within classes in the same package. This is more restrictive than <code>protected</code> and <code>public</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> A <code>private</code> member can be accessed only by methods that are members of the same class or within the same file.</p>
<ul>
<li>This option is incorrect because <code>private</code> members can be accessed only within the same class. It&#39;s not about being within the same file, as Java allows only one public top-level class per file.</li>
</ul>
</li>
<li><p><strong>E)</strong> A <code>protected</code> member can be accessed by any class in the Java program, regardless of package.</p>
<ul>
<li>This is incorrect. <code>Protected</code> access does not grant universal access across all classes in a program. Access from outside the package is limited to subclasses only.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q6",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:6,multiSelect:!1,stemHtml:`<p>Which of the following class declarations correctly demonstrates the use of access modifiers, <code>class</code> keyword, and class naming conventions in Java?</p>
`,options:[{letter:"A",html:`<p><code>class public Vehicle { }</code></p>
`},{letter:"B",html:`<p><code>public class vehicle { }</code></p>
`},{letter:"C",html:`<p><code>Public class Vehicle { }</code></p>
`},{letter:"D",html:`<p><code>public class Vehicle { }</code></p>
`},{letter:"E",html:`<p><code>classVehicle public { }</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>class public Vehicle { }</code></p>
<ul>
<li>This option is incorrect because the syntax is wrong. The correct order is the access modifier followed by the <code>class</code> keyword, and then the class name.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>public class vehicle { }</code></p>
<ul>
<li>This option is incorrect mainly due to the class naming convention. In Java, class names should start with an uppercase letter, so <code>vehicle</code> should be <code>Vehicle</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Public class Vehicle { }</code></p>
<ul>
<li>This option is incorrect because <code>Public</code> is incorrectly capitalized. Java is case-sensitive, and the correct keyword is <code>public</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>public class Vehicle { }</code></p>
<ul>
<li>This is the correct answer. The syntax follows the proper order: the access modifier (<code>public</code>), followed by the <code>class</code> keyword, and then the class name (<code>Vehicle</code>), which correctly starts with an uppercase letter as per Java naming conventions.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>classVehicle public { }</code></p>
<ul>
<li>This option is incorrect due to several reasons: the syntax order is wrong, there is no space between <code>class</code> and the class name, and the access modifier&#39;s position is incorrect.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q7",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:7,multiSelect:!0,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Counter</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> <span class="hljs-variable">COUNT</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
    
    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Counter</span><span class="hljs-params">()</span> {
        COUNT++;
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">resetCount</span><span class="hljs-params">()</span> {
        COUNT = <span class="hljs-number">0</span>;
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">getCount</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> COUNT;
    }
}
</code></pre><p>Which of the following statements are true about <code>static</code> and instance members within the <code>Counter</code> class? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>The <code>COUNT</code> variable can be accessed directly using the class name without creating an instance of <code>Counter</code>.</p>
`},{letter:"B",html:`<p>The <code>getCount()</code> method is an example of a static method because it returns the value of a static variable.</p>
`},{letter:"C",html:`<p>Every time a new instance of <code>Counter</code> is created, the <code>COUNT</code> variable is incremented.</p>
`},{letter:"D",html:`<p>The <code>resetCount()</code> method resets the <code>COUNT</code> variable to 0 for all instances of <code>Counter</code>.</p>
`}],correct:["A","C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>COUNT</code> variable can be accessed directly using the class name without creating an instance of <code>Counter</code>.</p>
<ul>
<li>This option is correct. Static variables belong to the class and can be accessed directly with the class name, such as <code>Counter.COUNT</code>, without needing to instantiate the class.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>getCount()</code> method is an example of a static method because it returns the value of a static variable.</p>
<ul>
<li>This option is incorrect. Although <code>getCount()</code> returns a static variable&#39;s value, it is not defined as a static method. Static methods are declared using the <code>static</code> modifier. The method&#39;s instance or non-static nature does not change based on the variables it accesses or returns.</li>
</ul>
</li>
<li><p><strong>C)</strong> Every time a new instance of <code>Counter</code> is created, the <code>COUNT</code> variable is incremented.</p>
<ul>
<li>This option is correct. The constructor increments the <code>COUNT</code> variable by 1 each time a new instance of <code>Counter</code> is created, demonstrating the shared nature of static variables across all instances.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>resetCount()</code> method resets the <code>COUNT</code> variable to 0 for all instances of <code>Counter</code>.</p>
<ul>
<li>This option is correct. The <code>resetCount()</code> static method sets the <code>COUNT</code> variable to zero. Since <code>COUNT</code> is static, this change affects all instances of the class, as there is only one <code>COUNT</code> variable shared among them.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q8",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:8,multiSelect:!0,stemHtml:`<p>Which of the following are valid field name identifiers in Java? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p><code>int _age;</code></p>
`},{letter:"B",html:`<p><code>double 2ndValue;</code></p>
`},{letter:"C",html:`<p><code>boolean is_valid;</code></p>
`},{letter:"D",html:`<p><code>String $name;</code></p>
`},{letter:"E",html:`<p><code>char #char;</code></p>
`}],correct:["A","C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>int _age;</code> is correct. Identifiers in Java can begin with a letter, an underscore (_), or a dollar sign ($). Therefore, <code>_age</code> is a valid identifier.</p>
</li>
<li><p><strong>B)</strong> <code>double 2ndValue;</code> is incorrect. Identifiers cannot start with a digit. The correct format would be to start with a letter or a non-digit character such as an underscore or a dollar sign.</p>
</li>
<li><p><strong>C)</strong> <code>boolean is_valid;</code> is correct. Similar to <code>_age</code>, <code>is_valid</code> is a valid identifier because it starts with a letter and can contain underscores.</p>
</li>
<li><p><strong>D)</strong> <code>String $name;</code> is correct. Identifiers can also start with a dollar sign ($), making <code>$name</code> a valid identifier.</p>
</li>
<li><p><strong>E)</strong> <code>char #char;</code> is incorrect. The hash (#) character is not allowed as a starting character in identifiers. Identifiers can only start with letters, <code>$</code>, or <code>_</code>.</p>
</li>
</ul>
`},{id:"ch01-q9",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:9,multiSelect:!1,stemHtml:`<p>Consider the syntax used to declare methods in a class. Which of the following method declarations is correct according to Java syntax rules?</p>
`,options:[{letter:"A",html:`<p><code>int public static final computeSum(int num1, int num2) { return num1 + num2 }</code></p>
`},{letter:"B",html:`<p><code>private void updateRecord(int id) throws IOException {}</code></p>
`},{letter:"C",html:`<p><code>synchronized boolean checkStatus [int status] { return status == 1; }</code></p>
`},{letter:"D",html:`<p><code>float calculateArea() {}</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>int public static final computeSum(int num1, int num2)  { return num1 + num2 }</code> is incorrect because the return type in method declarations goes right before the name of the method, not at the beginning.</p>
</li>
<li><p><strong>B)</strong> <code>private void updateRecord(int id) throws IOException {}</code> is correct. This method declaration is syntactically correct in Java. It uses the <code>private</code> access modifier, specifies a return type (<code>void</code>), includes an exception (<code>IOException</code>) that this method might throw, and correctly defines the parameter list.</p>
</li>
<li><p><strong>C)</strong> <code>synchronized boolean checkStatus [int status] { return status == 1; }</code> Correct syntax requires parentheses for the parameter list, even when there are no parameters, making the correct declaration <code>synchronized boolean checkStatus(int status)</code>.</p>
</li>
<li><p><strong>D)</strong> <code>float calculateArea() {}</code> is incorrect because a method that returns <code>float</code> cannot have an empty method body.</p>
</li>
</ul>
`},{id:"ch01-q10",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:10,multiSelect:!0,stemHtml:`<p>Given the method declarations below, which of them have the same method signature?</p>
`,options:[{letter:"A",html:`<p><code>public void update(int id, String value)</code></p>
`},{letter:"B",html:`<p><code>private void update(int identifier, String data)</code></p>
`},{letter:"C",html:`<p><code>public boolean update(String value, int id)</code></p>
`},{letter:"D",html:`<p><code>void update(String value, int id)</code></p>
`},{letter:"E",html:`<p><code>protected void update(int id, int value) throws IOException</code></p>
`}],correct:["A","B","C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<p>In Java, a method signature consists of the method name and the parameter list. The return type, access modifier, and exception list are not considered part of the method signature.</p>
<ul>
<li><p><strong>A)</strong> (<code>public void update(int id, String value)</code>) </p>
</li>
<li><p><strong>B)</strong> (<code>private void update(int identifier, String data)</code>) </p>
<ul>
<li>The above options have the same method signature (<code>update(int, String)</code>) because they both have the same method name and parameter list (an <code>int</code> and a <code>String</code>, in that order). The difference in parameter names (<code>id</code> vs. <code>identifier</code> and <code>value</code> vs. <code>data</code>) does not affect the method signature.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>public boolean update(String value, int id)</code> </p>
</li>
<li><p><strong>D)</strong> <code>void update(String value, int id)</code></p>
<ul>
<li>This option has the same method signature (<code>update(String, int)</code>) as C because they both have the same method name and parameter list (a <code>String</code> and an <code>int</code>, in that order). The different access modifier and return type does not affect the method signature.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>protected void update(int id, int value) throws IOException</code></p>
<ul>
<li>This option also has a different parameter list (<code>update(int, int)</code>).</li>
</ul>
</li>
</ul>
`},{id:"ch01-q11",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:11,multiSelect:!0,stemHtml:`<p>Given this class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccountManager</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">resetAccountPassword</span><span class="hljs-params">(String accountId)</span> {
        <span class="hljs-comment">// Implementation code here</span>
    }
    
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">auditTrail</span><span class="hljs-params">(String accountId)</span> {
        <span class="hljs-comment">// Implementation code here</span>
    }
    
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">notifyAccountChanges</span><span class="hljs-params">(String accountId)</span> {
        <span class="hljs-comment">// Implementation code here</span>
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">updateAccountInformation</span><span class="hljs-params">(String accountId)</span> {
        <span class="hljs-comment">// Implementation code here</span>
    }
}
</code></pre><p>Which of the following statements correctly describe the accessibility of the methods within the <code>AccountManager</code> class from a class in the same package and from a class in a different package?</p>
`,options:[{letter:"A",html:`<p>The <code>resetAccountPassword</code> method can be accessed from any class within the same package but not from a class in a different package.</p>
`},{letter:"B",html:`<p>The <code>auditTrail</code> method can be accessed from any class within the same package and from subclasses in different packages.</p>
`},{letter:"C",html:`<p>The <code>notifyAccountChanges</code> method can be accessed from any class within the same package and from subclasses in different packages.</p>
`},{letter:"D",html:`<p>The <code>updateAccountInformation</code> method can be accessed from any class, regardless of its package.</p>
`}],correct:["C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>resetAccountPassword</code> method can be accessed from any class within the same package but not from a class in a different package.</p>
<ul>
<li>This option is incorrect. The <code>resetAccountPassword</code> method has <code>private</code> access, which means it is accessible only within the <code>AccountManager</code> class itself, not from any class, even within the same package. The initial statement was slightly incorrect in suggesting package-level access for a <code>private</code> method.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>auditTrail</code> method can be accessed from any class within the same package and from subclasses in different packages.</p>
<ul>
<li>This option is incorrect because the <code>auditTrail</code> method has package-private access (no access modifier), which means it is accessible from any class within the same package but not from subclasses in different packages unless they are also within the same package.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>notifyAccountChanges</code> method can be accessed from any class within the same package and from subclasses in different packages.</p>
<ul>
<li>This option is correct. The <code>notifyAccountChanges</code> method has <code>protected</code> access, meaning it can be accessed within the same package and by subclasses, even if the subclasses are in different packages.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>updateAccountInformation</code> method can be accessed from any class, regardless of its package.</p>
<ul>
<li>This option is correct. The <code>updateAccountInformation</code> method is <code>public</code>, so it can be accessed from any class, regardless of the package it belongs to.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q12",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:12,multiSelect:!1,stemHtml:`<p>What will be the output of this program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestPassByValue</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">originalValue</span> <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
        <span class="hljs-type">TestPassByValue</span> <span class="hljs-variable">test</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">TestPassByValue</span>();
        System.out.println(<span class="hljs-string">&quot;Before calling changeValue: &quot;</span> + originalValue);
        test.changeValue(originalValue);
        System.out.println(<span class="hljs-string">&quot;After calling changeValue: &quot;</span> + originalValue);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">changeValue</span><span class="hljs-params">(<span class="hljs-type">int</span> value)</span> {
        value = <span class="hljs-number">20</span>;
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code>Before calling changeValue: 10
After calling changeValue: 20
</code></pre>`},{letter:"B",html:`<pre><code>Before calling changeValue: 10
After calling changeValue: 10
</code></pre>`},{letter:"C",html:`<pre><code>Before calling changeValue: 20
After calling changeValue: 20
</code></pre>`},{letter:"D",html:`<pre><code>Before calling changeValue: 20
After calling changeValue: 10
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<p>Java is strictly pass-by-value. This means that when passing a variable to a method, Java passes a copy of the variable&#39;s value, not the variable itself. Changes to the parameter inside the method do not affect the original variable.</p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>Before calling changeValue: 10  
After calling changeValue: 20  
</code></pre><ul>
<li><p>This option is incorrect because, although the <code>changeValue</code> method changes the <code>value</code> parameter to 20, this change does not affect the original variable <code>originalValue</code> outside the method. The change to <code>value</code> is made on its copy, not on <code>originalValue</code> itself.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>Before calling changeValue: 10  
After calling changeValue: 10  
</code></pre><ul>
<li><p>This is the correct answer. <code>originalValue</code> is passed by value to the <code>changeValue</code> method. Thus, modifications to <code>value</code> inside <code>changeValue</code> do not affect <code>originalValue</code>. The output confirms that <code>originalValue</code> remains unchanged after the method call.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>Before calling changeValue: 20  
After calling changeValue: 20  
</code></pre><ul>
<li><strong>D)</strong></li>
</ul>
<pre><code>Before calling changeValue: 20  
After calling changeValue: 10  
</code></pre><ul>
<li>These options are incorrect as they suggest changes to the method parameters can affect the original variables, which is not how Java&#39;s pass-by-value semantics work.</li>
</ul>
`},{id:"ch01-q13",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:13,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Test</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        print(<span class="hljs-literal">null</span>);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">print</span><span class="hljs-params">(Object o)</span> {
        System.out.println(<span class="hljs-string">&quot;Object&quot;</span>);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">print</span><span class="hljs-params">(String s)</span> {
        System.out.println(<span class="hljs-string">&quot;String&quot;</span>);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Object</code></p>
`},{letter:"B",html:`<p><code>String</code></p>
`},{letter:"C",html:`<p>Compilation fails</p>
`},{letter:"D",html:`<p>A runtime exception is thrown</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Object</code></p>
<ul>
<li>This option is incorrect because Java uses the most specific method that is applicable to the parameters. In this case, <code>String</code> is more specific than <code>Object</code>, so the <code>print(String s)</code> method is called.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>String</code></p>
<ul>
<li>This option is correct. Even though <code>null</code> can be assigned to any reference type, Java prefers the most specific method applicable to the method parameters. Since <code>String</code> is a more specific type than <code>Object</code>, the <code>print(String s)</code> method is chosen over the <code>print(Object o)</code> method.</li>
</ul>
</li>
<li><p><strong>C)</strong> Compilation fails</p>
<ul>
<li>Compilation does not fail because both <code>print</code> methods are correctly defined and can potentially match the call <code>print(null)</code>. Java&#39;s method overloading mechanism allows this to compile without any issues.</li>
</ul>
</li>
<li><p><strong>D)</strong> A runtime exception is thrown</p>
<ul>
<li>No runtime exception is thrown because the method call to <code>print</code> successfully resolves to the <code>print(String s)</code> method at compile time. Since the method is correctly invoked, and there is no other code that could cause a runtime exception, this program runs successfully.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q14",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:14,multiSelect:!0,stemHtml:`<p>Which of the following method declarations correctly uses varargs? Choose all that apply.</p>
`,options:[{letter:"A",html:`<p><code>public void print(String... messages, int count)</code></p>
`},{letter:"B",html:`<p><code>public void print(int count, String... messages)</code></p>
`},{letter:"C",html:`<p><code>public void print(String messages...)</code></p>
`},{letter:"D",html:`<p><code>public void print(String[]... messages)</code></p>
`},{letter:"E",html:`<p><code>public void print(String... messages, String lastMessage)</code></p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>public void print(String... messages, int count)</code></p>
<ul>
<li>This option is incorrect because varargs (variable arguments) must be the last parameter in a method&#39;s parameter list. Having <code>int count</code> after <code>String... messages</code> violates this rule.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>public void print(int count, String... messages)</code></p>
<ul>
<li>This option is correct. It correctly places the varargs parameter <code>String... messages</code> at the end of the method&#39;s parameter list, which is the required syntax for using varargs.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>public void print(String messages...)</code></p>
<ul>
<li>This option is incorrect because the syntax <code>String messages...</code> is invalid. The correct syntax for varargs is to place the ellipsis (<code>...</code>) after the type and before the variable name, like <code>String... messages</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>public void print(String[]... messages)</code></p>
<ul>
<li>This option is correct. It demonstrates the use of varargs with an array type, which is allowed. Here, each argument passed to <code>messages</code> can itself be an array of <code>String</code>, and <code>messages</code> will be treated as an array of arrays (<code>String[][]</code>).</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>public void print(String... messages, String lastMessage)</code></p>
<ul>
<li>This option is incorrect, similar to option A, because varargs must be the last parameter in the method&#39;s parameter list. Having another parameter after the varargs parameter is not allowed.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q15",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:15,multiSelect:!1,stemHtml:`<p>Given the class <code>Vehicle</code>:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Vehicle</span> {
    <span class="hljs-keyword">private</span> String type;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> maxSpeed;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Vehicle</span><span class="hljs-params">(String type)</span> {
        <span class="hljs-built_in">this</span>.type = type;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Vehicle</span><span class="hljs-params">(<span class="hljs-type">int</span> maxSpeed)</span> {
        <span class="hljs-built_in">this</span>.maxSpeed = maxSpeed;
    }

    <span class="hljs-comment">// Additional methods here</span>
}
</code></pre><p>Which of the following statements is true regarding its constructors?</p>
`,options:[{letter:"A",html:`<p>The class <code>Vehicle</code> demonstrates constructor overloading by having multiple constructors with different parameter lists.</p>
`},{letter:"B",html:`<p>The class <code>Vehicle</code> will compile with an error because it does not provide a default constructor.</p>
`},{letter:"C",html:`<p>It is possible to create an instance of <code>Vehicle</code> with both <code>type</code> and <code>maxSpeed</code> set to specific values through a single constructor call.</p>
`},{letter:"D",html:`<p>Calling either constructor will initialize both <code>type</code> and <code>maxSpeed</code> fields of the <code>Vehicle</code> class.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The class <code>Vehicle</code> demonstrates constructor overloading by having multiple constructors with different parameter lists.</p>
<ul>
<li>This option is correct. Constructor overloading in Java is a technique of having more than one constructor with different parameter lists in the same class. It allows objects of the class to be initialized in different ways. The <code>Vehicle</code> class has two constructors, one that takes a <code>String</code> (for the vehicle type) and another that takes an <code>int</code> (for the max speed), which is a perfect example of constructor overloading.</li>
</ul>
</li>
<li><p><strong>B)</strong> The class <code>Vehicle</code> will compile with an error because it does not provide a default constructor.</p>
<ul>
<li>This option is incorrect. Java does not require an explicit default constructor if the class provides any other constructors. The absence of a default constructor (one that takes no arguments) is not a compilation error; it simply means that the programmer cannot instantiate the class using a no-argument constructor unless it&#39;s explicitly defined.</li>
</ul>
</li>
<li><p><strong>C)</strong> It is possible to create an instance of <code>Vehicle</code> with both <code>type</code> and <code>maxSpeed</code> set to specific values through a single constructor call.</p>
<ul>
<li>This option is incorrect because none of the existing constructors accept both a <code>String</code> and an <code>int</code> parameter. Each constructor only sets one field to a caller-specified value; the other field retains its default value (<code>null</code> or <code>0</code>).</li>
</ul>
</li>
<li><p><strong>D)</strong> Calling either constructor will initialize both <code>type</code> and <code>maxSpeed</code> fields of the <code>Vehicle</code> class.</p>
<ul>
<li>This option is incorrect. Calling either constructor only initializes the parameter that is provided to it. The first constructor initializes the <code>type</code>, and the second initializes the <code>maxSpeed</code>. Without additional code, such as a constructor that accepts both parameters or setter methods, there&#39;s no way for either constructor alone to initialize both fields.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q16",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:16,multiSelect:!0,stemHtml:`<p>Consider the following class with an instance initializer block:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Library</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> bookCount;
    <span class="hljs-keyword">private</span> List&lt;String&gt; books;

    {
        books = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ArrayList</span>&lt;&gt;();
        books.add(<span class="hljs-string">&quot;Book 1&quot;</span>);
        books.add(<span class="hljs-string">&quot;Book 2&quot;</span>);
        <span class="hljs-comment">// Instance initializer block</span>
    }

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Library</span><span class="hljs-params">(<span class="hljs-type">int</span> bookCount)</span> {
        <span class="hljs-built_in">this</span>.bookCount = bookCount + books.size();
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">getBookCount</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> bookCount;
    }

    <span class="hljs-comment">// Additional methods here</span>
}
</code></pre><p>Given the <code>Library</code> class above, which of the following statements accurately describe the role and effect of the instance initializer block?</p>
`,options:[{letter:"A",html:`<p>The instance initializer block is executed before the constructor, initializing the <code>books</code> list and adding two books to it.</p>
`},{letter:"B",html:`<p>The instance initializer block replaces the need for a constructor in the <code>Library</code> class.</p>
`},{letter:"C",html:`<p>Instance initializer blocks cannot initialize instance variables like <code>books</code>.</p>
`},{letter:"D",html:`<p>If multiple instances of <code>Library</code> are created, the instance initializer block will execute each time before the constructor, ensuring the <code>books</code> list is initialized and populated for each object.</p>
`}],correct:["A","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The instance initializer block is executed before the constructor, initializing the <code>books</code> list and adding two books to it.</p>
<ul>
<li>This option is correct. The instance initializer block is executed each time an instance of the class is created, before the constructor code runs. It initializes the <code>books</code> list and adds two books to it.</li>
</ul>
</li>
<li><p><strong>B)</strong> The instance initializer block replaces the need for a constructor in the <code>Library</code> class.</p>
<ul>
<li>This option is incorrect. The instance initializer block does not replace the need for a constructor. It is used in addition to constructors, often to initialize common parts of various constructors in a class.</li>
</ul>
</li>
<li><p><strong>C)</strong> Instance initializer blocks cannot initialize instance variables like <code>books</code>. </p>
<ul>
<li>This option is incorrect. Instance initializer blocks can indeed initialize instance variables. In this case, the <code>books</code> list is an instance variable that is being initialized and populated within the instance initializer block.</li>
</ul>
</li>
<li><p><strong>D)</strong> If multiple instances of <code>Library</code> are created, the instance initializer block will execute each time before the constructor, ensuring the <code>books</code> list is initialized and populated for each object.</p>
<ul>
<li>This option is correct. For each new instance of the <code>Library</code> class, the instance initializer block runs before the constructor is invoked. This ensures that the <code>books</code> list is initialized and populated with <code>&quot;Book 1&quot;</code> and <code>&quot;Book 2&quot;</code> for every <code>Library</code> object created.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q17",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:17,multiSelect:!1,stemHtml:`<p>Consider the following Java class with a <code>static</code> initializer block:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Configuration</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> Map&lt;String, String&gt; settings;
    
    <span class="hljs-keyword">static</span> {
        settings = <span class="hljs-keyword">new</span> <span class="hljs-title class_">HashMap</span>&lt;&gt;();
        settings.put(<span class="hljs-string">&quot;url&quot;</span>, <span class="hljs-string">&quot;https://eherrera.net&quot;</span>);
        settings.put(<span class="hljs-string">&quot;timeout&quot;</span>, <span class="hljs-string">&quot;30&quot;</span>);
        <span class="hljs-comment">// Static initializer block</span>
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> String <span class="hljs-title function_">getSetting</span><span class="hljs-params">(String key)</span> {
        <span class="hljs-keyword">return</span> settings.get(key);
    }

    <span class="hljs-comment">// Additional methods here</span>
}
</code></pre><p>Given the <code>Configuration</code> class above, which of the following statements accurately describe the role and effect of the <code>static</code> initializer block?</p>
`,options:[{letter:"A",html:`<p>The <code>static</code> initializer block is executed only once when the class is first loaded into memory, initializing the <code>settings</code> map with default values.</p>
`},{letter:"B",html:`<p>The <code>static</code> initializer block allows instance methods to modify the <code>settings</code> map without creating an instance of the <code>Configuration</code> class.</p>
`},{letter:"C",html:`<p><code>static</code> initializer blocks are executed each time a new instance of the <code>Configuration</code> class is created.</p>
`},{letter:"D",html:`<p>The <code>static</code> initializer block is executed before any instance initializer blocks or constructors, when an instance of the class is created.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>static</code> initializer block is executed only once when the class is first loaded into memory, initializing the <code>settings</code> map with default values.</p>
<ul>
<li>This option is correct. Static initializer blocks are executed a single time, when the class is first loaded into the JVM memory. In this case, it initializes the <code>settings</code> map with default configuration values.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>static</code> initializer block allows instance methods to modify the <code>settings</code> map without creating an instance of the <code>Configuration</code> class.</p>
<ul>
<li>This option is misleading. While static methods like <code>getSetting</code> can access and modify static fields like <code>settings</code> without needing an instance of the class, this capability is not due to the static initializer block itself but rather the nature of static fields and methods.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>static</code> initializer blocks are executed each time a new instance of the <code>Configuration</code> class is created.</p>
<ul>
<li>This option is incorrect. Static initializer blocks are not executed each time a new instance of the class is created. They are executed only once: when the class is first loaded.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>static</code> initializer block is executed before any instance initializer blocks or constructors, when an instance of the class is created.</p>
<ul>
<li>This statement is partially correct in that static initializer blocks are executed before any instance initializer blocks or constructors, but it&#39;s misleading as it implies a sequence with instance creation. The key point is that static initializer blocks run once upon class loading, irrespective of the creation of any instances.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q18",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:18,multiSelect:!1,stemHtml:`<p>Consider the following class definition:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">InitializationOrder</span> {
    <span class="hljs-keyword">static</span> {
        System.out.println(<span class="hljs-string">&quot;1. Static initializer&quot;</span>);
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> <span class="hljs-variable">staticValue</span> <span class="hljs-operator">=</span> initializeStaticValue();

    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> <span class="hljs-variable">instanceValue</span> <span class="hljs-operator">=</span> initializeInstanceValue();

    {
        System.out.println(<span class="hljs-string">&quot;3. Instance initializer&quot;</span>);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">InitializationOrder</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;4. Constructor&quot;</span>);
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> <span class="hljs-title function_">initializeStaticValue</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;2. Static value initializer&quot;</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> <span class="hljs-title function_">initializeInstanceValue</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;3. Instance value initializer&quot;</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">new</span> <span class="hljs-title class_">InitializationOrder</span>();
    }
}
</code></pre><p>When the <code>main</code> method of the <code>InitializationOrder</code> class is executed, what is the correct order of execution for the initialization blocks, method calls, and constructor?</p>
`,options:[{letter:"A",html:`<pre><code>   1. Static initializer
   2. Static value initializer
   3. Instance initializer
   3. Instance value initializer
   4. Constructor
</code></pre>`},{letter:"B",html:`<pre><code>   1. Static initializer
   2. Static value initializer
   3. Instance value initializer
   3. Instance initializer
   4. Constructor
</code></pre>`},{letter:"C",html:`<pre><code>   1. Static initializer
   3. Instance initializer
   2. Static value initializer
   3. Instance value initializer
   4. Constructor
</code></pre>`},{letter:"D",html:`<pre><code>   2. Static value initializer
   1. Static initializer
   3. Instance value initializer
   3. Instance initializer
   4. Constructor
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<p>In Java, the order of initialization when a class is loaded and an instance of that class is created is as follows:</p>
<ol>
<li><p><strong>Static fields and static initializers</strong> are processed in the order they appear in the class definition. First, the static initializer block prints <code>&quot;1. Static initializer&quot;</code>. Then, the static field <code>staticValue</code> is initialized by calling <code>initializeStaticValue()</code>, which prints <code>&quot;2. Static value initializer&quot;.</code></p>
</li>
<li><p><strong>Instance fields and instance initializers</strong> are processed in the order they appear when an instance of the class is created. First, the instance field <code>instanceValue</code> is initialized by calling <code>initializeInstanceValue()</code>, which prints <code>&quot;3. Instance value initializer&quot;</code>. Then, the instance initializer block prints <code>&quot;3. Instance initializer&quot;</code>.</p>
</li>
<li><p><strong>Constructors</strong> are executed after all fields and instance initializers have been processed. The constructor in this case prints <code>&quot;4. Constructor&quot;</code>.</p>
</li>
</ol>
<p>The numbering of the output for <code>&quot;3. Instance initializer&quot;</code> and <code>&quot;3. Instance value initializer&quot;</code> in the question might seem to suggest they are executed simultaneously or out of order, but it&#39;s important to remember that instance fields and instance initializers execute in the order they appear in the class, before the constructor is executed. The duplicate numbering means that instance field initializers run first, followed by instance initializers, and finally, the constructor runs.</p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>1. Static initializer
2. Static value initializer
3. Instance initializer
3. Instance value initializer
4. Constructor 
</code></pre><ul>
<li><p>This option is incorrect.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>1. Static initializer
2. Static value initializer
3. Instance value initializer
3. Instance initializer
4. Constructor
</code></pre><ul>
<li><p>This option is correct.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>1. Static initializer
3. Instance initializer
2. Static value initializer
3. Instance value initializer
4. Constructor
</code></pre><ul>
<li><p>This option is incorrect. </p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>2. Static value initializer
1. Static initializer
3. Instance value initializer
3. Instance initializer
4. Constructor 
</code></pre><ul>
<li>This option is incorrect.</li>
</ul>
`},{id:"ch01-q19",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:19,multiSelect:!0,stemHtml:`<p>Consider a class <code>CustomObject</code> that does not explicitly override any methods from <code>java.lang.Object</code>:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomObject</span> {
    <span class="hljs-comment">// Class implementation goes here</span>
}
</code></pre><p>Which of the following statements correctly reflect the outcomes when methods from <code>java.lang.Object</code> are used with instances of <code>CustomObject</code>? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>Invoking <code>toString()</code> on an instance of <code>CustomObject</code> will return a <code>String</code> that includes the class name followed by the <code>@</code> symbol and the object&#39;s hashcode.</p>
`},{letter:"B",html:`<p>Calling <code>equals(Object obj)</code> on two different instances of <code>CustomObject</code> that have identical content will return <code>true</code> because they are instances of the same class.</p>
`},{letter:"C",html:`<p>Using <code>hashCode()</code> on any instance of <code>CustomObject</code> will generate a unique integer that remains consistent across multiple invocations within the same execution of a program.</p>
`},{letter:"D",html:`<p>The <code>clone()</code> method can be used to create a shallow copy of an instance of <code>CustomObject</code> without the need for <code>CustomObject</code> to implement the <code>Cloneable</code> interface.</p>
`}],correct:["A","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Invoking <code>toString()</code> on an instance of <code>CustomObject</code> will return a <code>String</code> that includes the class name followed by the <code>@</code> symbol and the object&#39;s hashcode.</p>
<ul>
<li>This option is correct. The <code>toString()</code> method in <code>java.lang.Object</code> returns a string that includes the class name, the <code>@</code> symbol, and the object&#39;s hashcode in hexadecimal. If <code>CustomObject</code> does not override <code>toString()</code>, this default format is used.</li>
</ul>
</li>
<li><p><strong>B)</strong> Calling <code>equals(Object obj)</code> on two different instances of <code>CustomObject</code> that have identical content will return <code>true</code> because they are instances of the same class. </p>
<ul>
<li>This option is incorrect. The default implementation of <code>equals(Object obj)</code> in <code>java.lang.Object</code> checks for reference equality, meaning it returns <code>true</code> only if both references point to the exact same object. Without overriding <code>equals</code>, two different instances of <code>CustomObject</code>, even with identical content, would not be considered equal.</li>
</ul>
</li>
<li><p><strong>C)</strong> Using <code>hashCode()</code> on any instance of <code>CustomObject</code> will generate a unique integer that remains consistent across multiple invocations within the same execution of a program.  </p>
<ul>
<li>This option is correct. The <code>hashCode()</code> method is designed to return an integer representation of the object&#39;s memory address or a value derived from it. While the exact implementation is not specified and can vary, it is consistent during the execution of a program for any given object.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>clone()</code> method can be used to create a shallow copy of an instance of <code>CustomObject</code> without the need for <code>CustomObject</code> to implement the <code>Cloneable</code> interface. </p>
<ul>
<li>This option is incorrect. The <code>clone()</code> method in <code>java.lang.Object</code> is protected, and it throws a <code>CloneNotSupportedException</code> unless the class implements the <code>Cloneable</code> interface. Without <code>CustomObject</code> explicitly implementing <code>Cloneable</code> and overriding <code>clone()</code> to make it <code>public</code>, it cannot be used to clone instances of <code>CustomObject</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q20",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:20,multiSelect:!1,stemHtml:`<p>Consider the code snippet below that demonstrates the use of a static nested class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">OuterClass</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-type">String</span> <span class="hljs-variable">message</span> <span class="hljs-operator">=</span> <span class="hljs-string">&quot;Hello, World!&quot;</span>;

    <span class="hljs-keyword">static</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NestedClass</span> {
        <span class="hljs-keyword">void</span> <span class="hljs-title function_">printMessage</span><span class="hljs-params">()</span> {
            <span class="hljs-comment">// Note: A static nested class can access the static members of its outer class.</span>
            System.out.println(message);
        }
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        OuterClass.<span class="hljs-type">NestedClass</span> <span class="hljs-variable">nested</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">OuterClass</span>.NestedClass();
        nested.printMessage();
    }
}
</code></pre><p>Which of the following statements is true regarding static nested classes in Java?</p>
`,options:[{letter:"A",html:`<p>A static nested class can access both static and non-static members of its enclosing class directly.</p>
`},{letter:"B",html:`<p>Instances of a static nested class can exist without an instance of its enclosing class.</p>
`},{letter:"C",html:`<p>A static nested class can only be instantiated within the static method of its enclosing class.</p>
`},{letter:"D",html:`<p>Static nested classes are not considered members of their enclosing class and cannot access any members of the enclosing class.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A static nested class can access both static and non-static members of its enclosing class directly. </p>
<ul>
<li>This option is incorrect because a static nested class cannot directly access non-static members of its enclosing class. It can only access static members directly.</li>
</ul>
</li>
<li><p><strong>B)</strong> Instances of a static nested class can exist without an instance of its enclosing class.</p>
<ul>
<li>This is the correct answer. A static nested class is associated with its outer class, and unlike inner classes, it does not need an instance of the outer class to be instantiated. This makes it useful for grouping classes that will be used in a static context.</li>
</ul>
</li>
<li><p><strong>C)</strong> A static nested class can only be instantiated within the static method of its enclosing class.</p>
<ul>
<li>This option is incorrect. A static nested class can be instantiated from any context (static or non-static) as long as it is accessible (i.e., visibility allows it).</li>
</ul>
</li>
<li><p><strong>D)</strong> Static nested classes are not considered members of their enclosing class and cannot access any members of the enclosing class.</p>
<ul>
<li>This option is incorrect. Static nested classes are indeed considered members of their enclosing class and can access its static members and static methods. However, they do not have access to non-static members of the enclosing class unless they instantiate the enclosing class.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q21",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:21,multiSelect:!1,stemHtml:`<p>Consider the following code snippet that demonstrates the use of a non-static nested (inner) class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">OuterClass</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">String</span> <span class="hljs-variable">message</span> <span class="hljs-operator">=</span> <span class="hljs-string">&quot;Hello, World!&quot;</span>;

    <span class="hljs-keyword">class</span> <span class="hljs-title class_">InnerClass</span> {
        <span class="hljs-keyword">void</span> <span class="hljs-title function_">printMessage</span><span class="hljs-params">()</span> {
            System.out.println(message);
        }
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">OuterClass</span> <span class="hljs-variable">outer</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">OuterClass</span>();
        OuterClass.<span class="hljs-type">InnerClass</span> <span class="hljs-variable">inner</span> <span class="hljs-operator">=</span> outer.<span class="hljs-keyword">new</span> <span class="hljs-title class_">InnerClass</span>();
        inner.printMessage();
    }
}
</code></pre><p>Which of the following statements is true regarding non-static nested (inner) classes in Java?</p>
`,options:[{letter:"A",html:`<p>A non-static nested class can directly access both static and non-static members of its enclosing class.</p>
`},{letter:"B",html:`<p>Instances of a non-static nested class can exist independently of an instance of its enclosing class.</p>
`},{letter:"C",html:`<p>A non-static nested class cannot access the non-static members of its enclosing class directly.</p>
`},{letter:"D",html:`<p>Non-static nested classes must be declared static to access the static members of their enclosing class.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A non-static nested class can directly access both static and non-static members of its enclosing clas</p>
<ul>
<li>This option is correct. A non-static nested class, or inner class, has access to all members (including both static and non-static) of its enclosing class, as demonstrated in the code snippet where <code>InnerClass</code> accesses the non-static <code>message</code> field of <code>OuterClass</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> Instances of a non-static nested class can exist independently of an instance of its enclosing class. </p>
<ul>
<li>This option is incorrect. Instances of a non-static nested class (inner class) are implicitly associated with an instance of the enclosing class. Therefore, they cannot exist independently of an instance of the enclosing class. In the provided code snippet, the <code>InnerClass</code> instance is created through an instance of <code>OuterClass</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> A non-static nested class cannot access the non-static members of its enclosing class directly.</p>
<ul>
<li>This option is incorrect. As stated above, an inner class can directly access both static and non-static members of its enclosing class.</li>
</ul>
</li>
<li><p><strong>D)</strong> Non-static nested classes must be declared static to access the static members of their enclosing class.</p>
<ul>
<li>This option is incorrect. Non-static nested classes (inner classes) are designed to access members of their enclosing class directly without needing to be declared static. Declaring a nested class as static changes its type to a static nested class, which has different access properties from an inner class.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q22",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:22,multiSelect:!0,stemHtml:`<p>Consider the following code snippet demonstrating the use of a local class within a method:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">LocalClassExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printEvenNumbers</span><span class="hljs-params">(<span class="hljs-type">int</span>[] numbers, <span class="hljs-type">int</span> max)</span> {
        <span class="hljs-keyword">class</span> <span class="hljs-title class_">EvenNumberPrinter</span> {
            <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">print</span><span class="hljs-params">()</span> {
                <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> number : numbers) {
                    <span class="hljs-keyword">if</span> (number % <span class="hljs-number">2</span> == <span class="hljs-number">0</span> &amp;&amp; number &lt;= max) {
                        System.out.println(number);
                    }
                }
            }
        }
        <span class="hljs-type">EvenNumberPrinter</span> <span class="hljs-variable">printer</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">EvenNumberPrinter</span>();
        printer.print();
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">LocalClassExample</span> <span class="hljs-variable">example</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">LocalClassExample</span>();
        <span class="hljs-type">int</span>[] numbers = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>};
        example.printEvenNumbers(numbers, <span class="hljs-number">6</span>);
    }
}
</code></pre><p>Which of the following statements correctly describe local classes in Java, based on the example provided?</p>
`,options:[{letter:"A",html:`<p>Local classes can be declared within any block that precedes a statement.</p>
`},{letter:"B",html:`<p>Instances of a local class can be created and used outside of the block where the local class is defined.</p>
`},{letter:"C",html:`<p>Local classes are a type of static nested class and can access both static and non-static members of the enclosing class directly.</p>
`},{letter:"D",html:`<p>Local classes can access local variables and parameters of the enclosing block only if they are declared <code>final</code> or effectively final.</p>
`}],correct:["A","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Local classes can be declared within any block that precedes a statement.</p>
<ul>
<li>This option is correct. Local classes in Java can indeed be declared within any block that precedes a statement, such as a method body, a <code>for</code> loop, or an <code>if</code> statement.</li>
</ul>
</li>
<li><p><strong>B)</strong> Instances of a local class can be created and used outside of the block where the local class is defined.</p>
<ul>
<li>This option is incorrect. Instances of local classes cannot be created and used outside the block where they are defined. Their scope is limited to the block in which they are declared.</li>
</ul>
</li>
<li><p><strong>C)</strong> Local classes are a type of static nested class and can access both static and non-static members of the enclosing class directly.</p>
<ul>
<li>This option is incorrect. Local classes are not static; they are associated with an instance of the enclosing class and have access to its instance members. They do not have the static context that static nested classes have, and thus they can access both static and non-static members of the enclosing class.</li>
</ul>
</li>
<li><p><strong>D)</strong> Local classes can access local variables and parameters of the enclosing block only if they are declared <code>final</code> or effectively final.</p>
<ul>
<li>This is correct. Local classes can access local variables and parameters of the method (or any enclosing block) in which they are defined, but those variables must be declared <code>final</code> or effectively final (which means their values do not change after they are initialized).</li>
</ul>
</li>
</ul>
`},{id:"ch01-q23",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:23,multiSelect:!1,stemHtml:`<p>Consider the following Java code snippet demonstrating the use of an anonymous class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">HelloWorld</span> {
    <span class="hljs-keyword">interface</span> <span class="hljs-title class_">HelloWorldInterface</span> {
        <span class="hljs-keyword">void</span> <span class="hljs-title function_">greet</span><span class="hljs-params">()</span>;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">sayHello</span><span class="hljs-params">()</span> {
        <span class="hljs-type">HelloWorldInterface</span> <span class="hljs-variable">myGreeting</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">HelloWorldInterface</span>() {
            <span class="hljs-meta">@Override</span>
            <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">greet</span><span class="hljs-params">()</span> {
                System.out.println(<span class="hljs-string">&quot;Hello, world!&quot;</span>);
            }
        };
        myGreeting.greet();
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">new</span> <span class="hljs-title class_">HelloWorld</span>().sayHello();
    }
}
</code></pre><p>Which of the following statements is true about anonymous classes in Java?</p>
`,options:[{letter:"A",html:`<p>Anonymous classes can implement interfaces and extend classes without the need to declare a named class.</p>
`},{letter:"B",html:`<p>An anonymous class must override all methods in the superclass or interface it declares it is implementing or extending.</p>
`},{letter:"C",html:`<p>Anonymous classes can have constructors as named classes do.</p>
`},{letter:"D",html:`<p>Instances of anonymous classes cannot be passed as arguments to methods.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Anonymous classes can implement interfaces and extend classes without the need to declare a named class.</p>
<ul>
<li>This option is correct. Anonymous classes are a way to extend existing classes or implement interfaces on the spot without the need for a formal class declaration. This makes them useful for creating quick, one-off implementations.</li>
</ul>
</li>
<li><p><strong>B)</strong> An anonymous class must override all methods in the superclass or interface it declares it is implementing or extending.</p>
<ul>
<li>This option is incorrect. An anonymous class only needs to override abstract methods of the superclass or interface it extends or implements. If the superclass or interface has no abstract methods, then the anonymous class does not need to override any methods.</li>
</ul>
</li>
<li><p><strong>C)</strong> Anonymous classes can have constructors as named classes do.</p>
<ul>
<li>This option is incorrect. Anonymous classes do not have named constructors because they do not have names themselves. Instead, any initialization is done through an instance initializer block.</li>
</ul>
</li>
<li><p><strong>D)</strong> Instances of anonymous classes cannot be passed as arguments to methods.</p>
<ul>
<li>This option is incorrect. Instances of anonymous classes can indeed be passed as arguments to methods. They are useful for creating on-the-fly implementations for interfaces or subclasses that are required for a method call.</li>
</ul>
</li>
</ul>
`},{id:"ch01-q24",chapter:"ch01",chapterTitle:"Chapter ONE",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 1",number:24,multiSelect:!1,stemHtml:`<p>Which of the following statements accurately reflects a valid rule regarding how classes and source files are organized?</p>
`,options:[{letter:"A",html:`<p>A source file can contain multiple public classes.</p>
`},{letter:"B",html:`<p>Private classes can be declared at the top level in a source file.</p>
`},{letter:"C",html:`<p>A <code>public</code> class must be declared in a source file that has the same name as the class.</p>
`},{letter:"D",html:`<p>If a source file contains more than one class, none of the classes can be <code>public</code>.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A source file can contain multiple public classes.</p>
<ul>
<li>This option is incorrect. A Java source file cannot contain more than one <code>public</code> class. If a class is declared <code>public</code>, it must be the only <code>public</code> class in the file, and the file name must match the class name.</li>
</ul>
</li>
<li><p><strong>B)</strong> Private classes can be declared at the top level in a source file.</p>
<ul>
<li>This option is incorrect. Java does not allow classes to be declared as <code>private</code> at the top level. Only <code>public</code>, or package-private (no access modifier) classes can be defined at the top level. Inner classes can be <code>private</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> A <code>public</code> class must be declared in a source file that has the same name as the class.</p>
<ul>
<li>This is correct. According to Java&#39;s rules, if a class is declared <code>public</code>, the source file in which it is defined must have the same name as the class, followed by the <code>.java</code> extension. This is a strict rule that helps the Java compiler easily locate source files.</li>
</ul>
</li>
<li><p><strong>D)</strong> If a source file contains more than one class, none of the classes can be <code>public</code>.</p>
<ul>
<li>This is incorrect. While it is true that if a source file contains a <code>public</code> class, the source file must be named after that <code>public</code> class, it is not true that none of the classes can be <code>public</code> if a source file contains more than one class. A source file can contain multiple classes, but only one of them can be <code>public</code>, and the source file must be named after that <code>public</code> class. The statement could imply that multiple non-public top-level classes are a common scenario without the context of the <code>public</code> class naming rule.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q1",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:1,multiSelect:!1,stemHtml:`<p>What is the result of compiling and executing the following code?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">void</span> <span class="hljs-title function_">myMethod</span><span class="hljs-params">()</span> {
    <span class="hljs-type">int</span> <span class="hljs-variable">x</span> <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">0</span>) { 
        <span class="hljs-type">int</span> <span class="hljs-variable">y</span> <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        System.out.println(x + y);
    }
    System.out.println(x);
    System.out.println(y);
}
</code></pre>`,options:[{letter:"A",html:`<p>The code compiles and outputs <code>3</code> followed by <code>1</code>.</p>
`},{letter:"B",html:`<p>The code compiles and outputs <code>3</code> followed by <code>1</code> and an undefined value for <code>y</code>.</p>
`},{letter:"C",html:`<p>The code does not compile because <code>y</code> is accessed outside of its scope.</p>
`},{letter:"D",html:`<p>The code compiles but throws a runtime exception when trying to print <code>y</code>.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The code compiles and outputs <code>3</code> followed by <code>1</code>.</p>
<ul>
<li>This option is incorrect because, although the code prints <code>3</code> followed by <code>1</code> due to <code>x</code> being in scope, attempting to access <code>y</code> outside of its declaring block (the <code>if</code> block) will cause a compile-time error.</li>
</ul>
</li>
<li><p><strong>B)</strong> The code compiles and outputs <code>3</code> followed by <code>1</code> and an undefined value for <code>y</code>.</p>
<ul>
<li>This option is incorrect because Java does not allow access to local variables (<code>y</code> in this case) outside of their scope. The notion of an &quot;undefined value for <code>y</code>&quot; is not applicable here; the compiler will simply not compile the code.</li>
</ul>
</li>
<li><p><strong>C)</strong> The code does not compile because <code>y</code> is accessed outside of its scope.</p>
<ul>
<li>This is the correct option. Local variable <code>y</code> is declared inside the <code>if</code> block, and thus, it is only accessible within that block. Trying to access it outside of its scope, as done in the last <code>System.out.println(y);</code>, causes a compile-time error, specifically saying that <code>y</code> cannot be found.</li>
</ul>
</li>
<li><p><strong>D)</strong> The code compiles but throws a runtime exception when trying to print <code>y</code>.</p>
<ul>
<li>This option is incorrect because the issue with the code is at compile time, not runtime. The compiler will not allow the code to compile due to the scope violation of the local variable <code>y</code>, hence a runtime exception regarding <code>y</code> is out of the question.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q2",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:2,multiSelect:!0,stemHtml:`<p>Which of the following variable declarations statements are valid? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p><code>double x, double y;</code></p>
`},{letter:"B",html:`<p><code>int i = 0, String s = &quot;hello&quot;;</code></p>
`},{letter:"C",html:`<p><code>float f1 = 3.14f, f2 = 6.28f;</code></p>
`},{letter:"D",html:`<p><code>char a = &#39;A&#39;, b, c = &#39;C&#39;;</code></p>
`}],correct:["C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>double x, double y;</code></p>
<ul>
<li>This option is incorrect because when declaring multiple variables of the same type in a single statement, you do not repeat the type before each variable. The correct syntax would be <code>double x, y;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>int i = 0, String s = &quot;hello&quot;;</code></p>
<ul>
<li>This option is incorrect for the same reason as A; you cannot declare variables of different types (<code>int</code> and <code>String</code> in this case) in a single statement.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>float f1 = 3.14, f2 = 6.28f;</code></p>
<ul>
<li>This is correct. You can declare multiple variables of the same type (<code>float</code> in this case) in a single statement, and it&#39;s also fine to initialize them with values in the same statement.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>char a = &#39;A&#39;, b, c = &#39;C&#39;;</code></p>
<ul>
<li>This is correct. It&#39;s valid to declare multiple variables of the same type (<code>char</code> in this case), and initialize some, all, or none of them in the same statement.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q3",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:3,multiSelect:!0,stemHtml:`<p>Which of the following statements are true regarding the use of <code>var</code> in Java? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p><code>var</code> can be used to declare both local variables within methods and instance variables within classes.</p>
`},{letter:"B",html:`<p>The use of <code>var</code> is restricted to local variables within methods, constructors, or initializer blocks.</p>
`},{letter:"C",html:`<p><code>var</code> can be used to declare method parameters.</p>
`},{letter:"D",html:`<p><code>var</code> enhances readability by inferring types where it&#39;s clear from the context, but it&#39;s not allowed in method signatures to maintain clarity.</p>
`},{letter:"E",html:`<p><code>var</code> can be used to declare class (static) variables.</p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>var</code> can be used to declare both local variables within methods and instance variables within classes.</p>
<ul>
<li>This option is incorrect because <code>var</code> cannot be used to declare instance variables. It is specifically restricted to local variables within methods, constructors, or initializer blocks, as using <code>var</code> for fields would reduce the clarity of a class&#39;s public API.</li>
</ul>
</li>
<li><p><strong>B)</strong> The use of <code>var</code> is restricted to local variables within methods, constructors, or initializer blocks.</p>
<ul>
<li>This option is correct. <code>var</code> is intended for local variable type inference, significantly reducing the verbosity of Java code in scenarios where the compiler can easily determine the type of the local variable from its initializer. Its use is restricted to ensure clarity and prevent ambiguity in more complex constructs like class fields or method parameters.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>var</code> can be used to declare method parameters.</p>
<ul>
<li>This option is incorrect. The example clearly demonstrates that <code>var</code> cannot be used to declare method parameters. This limitation ensures that method signatures remain explicit in their type requirements, a critical aspect of a class&#39;s contract with its callers.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>var</code> enhances readability by inferring types where it&#39;s clear from the context, but it&#39;s not allowed in method signatures to maintain clarity.</p>
<ul>
<li>This option is correct. While <code>var</code> is primarily used to improve code readability by reducing the need for explicit type declarations where the type can be inferred from the context, it is not allowed in method signatures. This restriction ensures that the types of parameters in methods are always explicitly defined, aiding in the readability and maintainability of public APIs.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>var</code> can be used to declare class (static) variables.</p>
<ul>
<li>This option is incorrect. Similar to instance variables, <code>var</code> is not permissible for declaring class (<code>static</code>) variables. The rationale behind this restriction aligns with the goal of maintaining explicit type declarations in the class&#39;s structure, ensuring the class&#39;s design remains clear and unambiguous to both the compiler and developers.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q4",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:4,multiSelect:!0,stemHtml:`<p>Which of the following statements correctly describe the use of inheritance in Java? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>Subclasses can only access <code>protected</code> and <code>public</code> members of their superclass directly.</p>
`},{letter:"B",html:`<p>In Java, a class can extend multiple classes to achieve multiple inheritance.</p>
`},{letter:"C",html:`<p>The <code>extends</code> keyword is used in Java to create a subclass that inherits from a superclass.</p>
`},{letter:"D",html:`<p>A subclass in Java can directly access <code>private</code> members of its superclass.</p>
`}],correct:["A","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>extends</code> keyword is used in Java to create a subclass that inherits from a superclass.</p>
<ul>
<li>This option is correct. Subclasses can directly access <code>protected</code> and <code>public</code> members of their superclass. This accessibility allows subclasses to leverage and extend the functionality provided by the superclass while maintaining encapsulation of <code>private</code> members.</li>
</ul>
</li>
<li><p><strong>B)</strong> In Java, a class can extend multiple classes to achieve multiple inheritance.</p>
<ul>
<li>This option is incorrect. Java does not support multiple inheritance for classes. A class in Java can only extend one other class, preventing complications like the diamond problem and the complexity associated with multiple inheritance.</li>
</ul>
</li>
<li><p><strong>C)</strong> Subclasses can only access <code>protected</code> and <code>public</code> members of their superclass directly.</p>
<ul>
<li>This option is correct. The <code>extends</code> keyword is indeed used to define a subclass that inherits properties and behaviors from a single superclass, establishing an <em>is-a</em> relationship between the subclass and the superclass. This is a fundamental concept in Java&#39;s implementation of inheritance.</li>
</ul>
</li>
<li><p><strong>D)</strong> A subclass in Java can directly access <code>private</code> members of its superclass.</p>
<ul>
<li>This option is incorrect. A subclass cannot directly access <code>private</code> members of its superclass. Instead, it can access them through <code>public</code> or <code>protected</code> accessors provided by the superclass. This encapsulation principle ensures a controlled interaction with the superclass&#39;s state.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q5",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:5,multiSelect:!0,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">abstract</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">abstract</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">eat</span><span class="hljs-params">()</span>;
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">eat</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Dog eats&quot;</span>);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Cat</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">eat</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Cat eats&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Test</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Animal</span> <span class="hljs-variable">myAnimal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Dog</span>();
        myAnimal.eat();
    }
}
</code></pre><p>Which of the following statements is true regarding the above code? Choose all that apply.</p>
`,options:[{letter:"A",html:`<p>The code will compile and print <code>&quot;Dog eats&quot;</code> when executed.</p>
`},{letter:"B",html:`<p>The <code>Animal</code> class can be instantiated.</p>
`},{letter:"C",html:`<p>Removing the <code>eat</code> method from the <code>Dog</code> class will cause a compilation error.</p>
`},{letter:"D",html:`<p>The <code>Cat</code> class is necessary for the code to compile and run.</p>
`}],correct:["A","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The code will compile and print <code>&quot;Dog eats&quot;</code> when executed.</p>
<ul>
<li>This option is correct. The <code>Dog</code> class has provided an implementation for the <code>eat</code> method, which is abstract in the superclass <code>Animal</code>. Since <code>myAnimal</code> is of type <code>Animal</code> but instantiated as a <code>Dog</code>, it will call the overridden <code>eat</code> method in the <code>Dog</code> class, printing <code>&quot;Dog eats&quot;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>Animal</code> class can be instantiated.</p>
<ul>
<li>This option is incorrect. The <code>Animal</code> class is abstract and cannot be instantiated. Attempting to create an instance of <code>Animal</code> directly (<code>new Animal()</code>) would result in a compilation error.</li>
</ul>
</li>
<li><p><strong>C)</strong> Removing the <code>eat</code> method from the <code>Dog</code> class will cause a compilation error.</p>
<ul>
<li>This option is correct. Since <code>Dog</code> extends the abstract class <code>Animal</code> and <code>Animal</code> has an abstract <code>eat</code> method, <code>Dog</code> must provide an implementation for <code>eat</code>. Failing to do so will prevent the code from compiling because <code>Dog</code> would also be considered abstract.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Cat</code> class is necessary for the code to compile and run.</p>
<ul>
<li>This option is incorrect. The <code>Cat</code> class is not referenced in the <code>main</code> method or anywhere else in the provided code snippet. Thus, it is unnecessary for the compilation and execution of the given code segment.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q6",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:6,multiSelect:!0,stemHtml:`<p>Consider the following interfaces:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">Walkable</span> {
    <span class="hljs-type">int</span> <span class="hljs-variable">distance</span> <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">walk</span><span class="hljs-params">()</span>;
}

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Runnable</span> {
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">run</span><span class="hljs-params">()</span>;
    <span class="hljs-keyword">default</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">getSpeed</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Default speed&quot;</span>);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Person</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Walkable</span>, Runnable {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">walk</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Walking...&quot;</span>);
    }
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">run</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Running...&quot;</span>);
    }
}
</code></pre><p>Which of the following statements is true?</p>
`,options:[{letter:"A",html:`<p>The <code>Person</code> class must override the <code>getSpeed</code> method.</p>
`},{letter:"B",html:`<p>The <code>distance</code> variable in the <code>Walkable</code> interface is implicitly <code>public</code>, <code>static</code>, and <code>final</code>.</p>
`},{letter:"C",html:`<p>A <code>Person</code> object can call the <code>getSpeed</code> method without any implementation in the <code>Person</code> class.</p>
`},{letter:"D",html:`<p>The <code>Runnable</code> interface causes a compilation error due to a naming conflict with <code>java.lang.Runnable</code>.</p>
`}],correct:["B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Person</code> class must override the <code>getSpeed</code> method.</p>
<ul>
<li>This option is incorrect. The <code>Person</code> class is not required to override the <code>getSpeed</code> method because it is a default method in the <code>Runnable</code> interface. Default methods provide an implementation that can be used or overridden by implementing classes, but overriding is not mandatory.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>distance</code> variable in the <code>Walkable</code> interface is implicitly <code>public</code>, <code>static</code>, and <code>final</code>. </p>
<ul>
<li>This option is correct. In Java, all variables declared in an interface are implicitly <code>public</code>, <code>static</code>, and <code>final</code>. This means the <code>distance</code> variable in the <code>Walkable</code> interface is a constant and must be initialized at the point of declaration. It is accessible with the interface name, like <code>Walkable.distance</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> A <code>Person</code> object can call the <code>getSpeed</code> method without any implementation in the <code>Person</code> class.</p>
<ul>
<li>This option is correct. Since the <code>Runnable</code> interface provides a default implementation for the <code>getSpeed</code> method, a <code>Person</code> object can call the <code>getSpeed</code> method without any additional implementation in the <code>Person</code> class itself. The default implementation from the interface will be used.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Runnable</code> interface causes a compilation error due to a naming conflict with <code>java.lang.Runnable</code>.</p>
<ul>
<li>This option is incorrect because Java fully supports namespace resolution. The <code>Runnable</code> interface declared in the code snippet and <code>java.lang.Runnable</code> exist in different packages. There is no compilation error unless there&#39;s an attempt to import both in the same file without using a fully qualified name. Plus, this situation does not directly relate to the functionality or declaration of interfaces per the exam&#39;s focus.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q7",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:7,multiSelect:!1,stemHtml:`<p>Consider the following code snippet related to sealed classes:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">sealed</span> <span class="hljs-keyword">abstract</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Shape</span> <span class="hljs-keyword">permits</span> Circle, Square {
    <span class="hljs-keyword">abstract</span> <span class="hljs-type">double</span> <span class="hljs-title function_">area</span><span class="hljs-params">()</span>;
}

<span class="hljs-keyword">final</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Circle</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Shape</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> <span class="hljs-type">double</span> radius;

    Circle(<span class="hljs-type">double</span> radius) {
        <span class="hljs-built_in">this</span>.radius = radius;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">double</span> <span class="hljs-title function_">area</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> Math.PI * radius * radius;
    }
}

<span class="hljs-keyword">non-sealed</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Square</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Shape</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> <span class="hljs-type">double</span> side;

    Square(<span class="hljs-type">double</span> side) {
        <span class="hljs-built_in">this</span>.side = side;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">double</span> <span class="hljs-title function_">area</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> side * side;
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestShapes</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Shape</span> <span class="hljs-variable">shape</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Circle</span>(<span class="hljs-number">10</span>);
        System.out.println(<span class="hljs-string">&quot;Area: &quot;</span> + shape.area());
    }
}
</code></pre><p>Which of the following statements is true?</p>
`,options:[{letter:"A",html:`<p>The <code>Shape</code> class is correctly defined as a sealed class, allowing only specified classes to extend it.</p>
`},{letter:"B",html:`<p>The <code>Square</code> class does not correctly extend the <code>Shape</code> class because it is not marked as <code>final</code>.</p>
`},{letter:"C",html:`<p>The <code>Circle</code> class can be further extended by other classes.</p>
`},{letter:"D",html:`<p>The <code>area</code> method in the <code>Shape</code> class must provide a default implementation.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Shape</code> class is correctly defined as a sealed class, allowing only specified classes to extend it.</p>
<ul>
<li>This option is correct. The <code>Shape</code> class is declared as a sealed class, which means it can be extended only by the classes it explicitly permits through the <code>permits</code> clause. In this case, <code>Shape</code> permits <code>Circle</code> and <code>Square</code> to extend it, and both classes are correctly defined as permitted subclasses.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>Square</code> class does not correctly extend the <code>Shape</code> class because it is not marked as <code>final</code>. </p>
<ul>
<li>This option is incorrect. There&#39;s no requirement for classes extending a sealed class to be marked as <code>final</code> if they are non-sealed. The keyword <code>non-sealed</code> explicitly allows the <code>Square</code> class to extend the sealed <code>Shape</code> class without being final, indicating it can be further extended.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Circle</code> class can be further extended by other classes. </p>
<ul>
<li>This option is incorrect. The <code>Circle</code> class is declared as <code>final</code>, which means it cannot be extended further and aligning with the constraints of extending a sealed class where the permitted subclass can be final, sealed, or non-sealed.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>area</code> method in the <code>Shape</code> class must provide a default implementation.</p>
<ul>
<li>This option is incorrect. Abstract classes like <code>Shape</code> are not required to provide implementations for their abstract methods. The purpose of an abstract class is to define a template that its subclasses will follow, which includes implementing any abstract methods declared in the abstract class.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q8",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:8,multiSelect:!1,stemHtml:`<p>Consider the following class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Widget</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> size;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Widget</span><span class="hljs-params">()</span> {
        <span class="hljs-built_in">this</span>(<span class="hljs-number">10</span>); <span class="hljs-comment">// Line 5</span>
    }

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Widget</span><span class="hljs-params">(<span class="hljs-type">int</span> size)</span> {
        <span class="hljs-built_in">this</span>.size = size;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">resize</span><span class="hljs-params">(<span class="hljs-type">int</span> size)</span> {
        <span class="hljs-keyword">if</span> (size &gt; <span class="hljs-built_in">this</span>.size) {
            <span class="hljs-built_in">this</span>.size = size; <span class="hljs-comment">// Line 14</span>
            updateWidget();
        }
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">updateWidget</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Widget updated to size &quot;</span> + <span class="hljs-built_in">this</span>.size);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Widget</span> <span class="hljs-variable">widget</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Widget</span>();
        widget.resize(<span class="hljs-number">15</span>);
    }
}
</code></pre><p>In line 114, what does the <code>this</code> keyword represent in the context of the <code>Widget</code> class?</p>
`,options:[{letter:"A",html:`<p>A reference to the <code>static</code> context of the class, allowing access to static methods and fields.</p>
`},{letter:"B",html:`<p>A special variable that stores the return value of a method.</p>
`},{letter:"C",html:`<p>An optional keyword that can always be omitted without affecting the functionality of the code.</p>
`},{letter:"D",html:`<p>A reference to the current object, whose instance variable is being called.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A reference to the <code>static</code> context of the class, allowing access to static methods and fields.</p>
<ul>
<li>This option is incorrect. The <code>this</code> keyword does not refer to the static context of the class. It specifically refers to the current instance of the class. Static methods and fields belong to the class itself and are not part of any instance, so they cannot be accessed through <code>this</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> A special variable that stores the return value of a method.</p>
<ul>
<li>This option is incorrect. The <code>this</code> keyword does not store the return value of a method. It is used within an instance method or a constructor to refer to the current object the method or constructor is being invoked upon.</li>
</ul>
</li>
<li><p><strong>C)</strong> An optional keyword that can always be omitted without affecting the functionality of the code.</p>
<ul>
<li>This option is incorrect. While it is true that in some cases <code>this</code> can be omitted (for example, when accessing instance fields or methods without any naming conflict), its use is necessary for situations like constructor chaining (<code>this()</code> call) or when the method parameter names shadow the instance field names. In such scenarios, <code>this</code> clarifies to which variable the code is referring.</li>
</ul>
</li>
<li><p><strong>D)</strong> A reference to the current object, whose instance variable is being called.</p>
<ul>
<li>This option is correct. The <code>this</code> keyword in Java is used to refer to the current object—the object whose instance variable, method, or constructor is being called. You can see its usage in line 5 to call another constructor within the same class, in line 14 to differentiate between the method parameter <code>size</code> and the instance variable <code>size</code>, and in the <code>updateWidget</code> method to access the instance variable <code>size</code>. This usage demonstrates <code>this</code> as a way to refer explicitly to properties or methods of the current object.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q9",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:9,multiSelect:!0,stemHtml:`<p>Consider the following classes:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {
    String name;

    Animal(String name) {
        <span class="hljs-built_in">this</span>.name = name;
    }

    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">eat</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Animal eats&quot;</span>);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Animal</span> {
    Dog(String name) {
        <span class="hljs-built_in">super</span>(name);
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">eat</span><span class="hljs-params">()</span> {
        <span class="hljs-built_in">super</span>.eat();
        System.out.println(name + <span class="hljs-string">&quot; (Dog) eats&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestAnimal</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Animal</span> <span class="hljs-variable">myDog</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Dog</span>(<span class="hljs-string">&quot;Buddy&quot;</span>);
        myDog.eat();
    }
}
</code></pre><p>Which of the following statements are true regarding the use of <code>super</code> in the above code? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>The <code>super</code> keyword is used in the <code>Dog</code> constructor to call the superclass constructor.</p>
`},{letter:"B",html:`<p>The <code>eat</code> method in the <code>Dog</code> class uses <code>super</code> to invoke the superclass&#39;s <code>eat</code> method.</p>
`},{letter:"C",html:`<p>Removing the <code>super.eat();</code> call in the <code>Dog</code> class&#39;s <code>eat</code> method will prevent the <code>Dog</code> class from compiling.</p>
`},{letter:"D",html:`<p>The <code>super</code> keyword can be used to access <code>static</code> methods from the superclass.</p>
`}],correct:["A","B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>super</code> keyword is used in the <code>Dog</code> constructor to call the superclass constructor.</p>
<ul>
<li>This optional is correct. In the <code>Dog</code> constructor, <code>super(name);</code> is used to call the superclass (<code>Animal</code>) constructor with the <code>name</code> parameter. This is necessary to initialize the <code>name</code> field inherited from the <code>Animal</code> class in the <code>Dog</code> instance.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>eat</code> method in the <code>Dog</code> class uses <code>super</code> to invoke the superclass&#39;s <code>eat</code> method.</p>
<ul>
<li>This optional is correct. The <code>eat</code> method in the <code>Dog</code> class calls <code>super.eat();</code> to invoke the <code>eat</code> method defined in the superclass (<code>Animal</code>). This allows the <code>Dog</code> class to extend the functionality of the <code>eat</code> method beyond what is defined in the superclass, demonstrating method overriding and use of <code>super</code> to access the overridden method.</li>
</ul>
</li>
<li><p><strong>C)</strong> Removing the <code>super.eat();</code> call in the <code>Dog</code> class&#39;s <code>eat</code> method will prevent the <code>Dog</code> class from compiling.</p>
<ul>
<li>This optional is incorrect. Removing the <code>super.eat();</code> call from the <code>Dog</code> class&#39;s <code>eat</code> method would not prevent the class from compiling. It would simply mean that the <code>Dog</code> class&#39;s <code>eat</code> method no longer calls the superclass&#39;s <code>eat</code> method, altering the program&#39;s behavior but not its compilability.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>super</code> keyword can be used to access <code>static</code> methods from the superclass.</p>
<ul>
<li>This optional is incorrect. While <code>super</code> can indeed be used to access superclass methods, it&#39;s not specifically used or necessary for accessing static methods. Static methods belong to the class, not to instances, and should be invoked using the class name. <code>super</code> is used primarily for instance methods and constructors.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q10",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:10,multiSelect:!1,stemHtml:`<p>Consider the following classes:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Vehicle</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">drive</span><span class="hljs-params">(<span class="hljs-type">int</span> speed)</span> {
        System.out.println(<span class="hljs-string">&quot;Vehicle driving at speed: &quot;</span> + speed);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Car</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Vehicle</span> {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">drive</span><span class="hljs-params">(<span class="hljs-type">long</span> speed)</span> {
        System.out.println(<span class="hljs-string">&quot;Car driving at speed: &quot;</span> + speed);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestDrive</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Vehicle</span> <span class="hljs-variable">myCar</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Car</span>();
        myCar.drive(<span class="hljs-number">60</span>);
    }
}
</code></pre><p>What is the result of compiling and executing the above code?</p>
`,options:[{letter:"A",html:`<p>It compiles and prints <code>&quot;Car driving at speed: 60&quot;</code>.</p>
`},{letter:"B",html:`<p>It does not compile because the <code>drive</code> method cannot be called using a <code>Vehicle</code> reference.</p>
`},{letter:"C",html:`<p>It does not compile because the <code>drive</code> method in the <code>Car</code> class does not properly override the <code>drive</code> method in the <code>Vehicle</code> class.</p>
`},{letter:"D",html:`<p>It compiles and prints <code>&quot;Vehicle driving at speed: 60&quot;</code> because the <code>drive</code> method in the <code>Car</code> class is an overload, not an override.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> It compiles and prints <code>&quot;Car driving at speed: 60&quot;</code>.</p>
<ul>
<li>This option is incorrect because the <code>drive</code> method in the <code>Car</code> class has a different parameter type (<code>long</code>) than the method in the <code>Vehicle</code> class (<code>int</code>). Due to the difference in parameter types, the <code>Car</code> class&#39;s <code>drive</code> method does not override but rather overloads the <code>Vehicle</code> class&#39;s <code>drive</code> method. Since the method is called on a <code>Vehicle</code> reference, the <code>Vehicle</code> class&#39;s <code>drive</code> method is invoked.</li>
</ul>
</li>
<li><p><strong>B)</strong> It does not compile because the <code>drive</code> method cannot be called using a <code>Vehicle</code> reference. </p>
<ul>
<li>This option is incorrect because <code>Vehicle</code> defines the <code>drive</code> method correctly.</li>
</ul>
</li>
<li><p><strong>C)</strong> It does not compile because the <code>drive</code> method in the <code>Car</code> class does not properly override the <code>drive</code> method in the <code>Vehicle</code> class.</p>
<ul>
<li>This option is incorrect because the code does compile. The <code>@Override</code> annotation does not cause a compile-time error here because it is not strictly enforced in terms of method overloading (changing the parameter type creates a new method signature, making this a valid overload).</li>
</ul>
</li>
<li><p><strong>D)</strong> It compiles and prints <code>&quot;Vehicle driving at speed: 60&quot;</code> because the <code>drive</code> method in the <code>Car</code> class is an overload, not an override.</p>
<ul>
<li>This option is correct. The <code>drive</code> method in the <code>Car</code> class has a different signature from the <code>drive</code> method in the <code>Vehicle</code> class due to the parameter type (<code>int</code> vs. <code>long</code>). Therefore, the <code>drive</code> method in the <code>Car</code> class overloads the superclass method rather than overriding it. When a <code>Vehicle</code> reference calls the <code>drive</code> method with an <code>int</code> argument, it invokes the <code>Vehicle</code> class&#39;s <code>drive</code> method, not the <code>Car</code> class&#39;s method.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q11",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:11,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Fruit</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">flavor</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Fruit flavor&quot;</span>);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Apple</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Fruit</span> {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">flavor</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Apple flavor&quot;</span>);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">color</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Red&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestFruit</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Fruit</span> <span class="hljs-variable">myFruit</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Apple</span>();
        myFruit.flavor();
        <span class="hljs-comment">// myFruit.color();</span>
    }
}
</code></pre><p>If the commented line <code>// myFruit.color();</code> is uncommented, what will be the result of compiling and executing the above code?</p>
`,options:[{letter:"A",html:`<p>It compiles and prints <code>&quot;Apple flavor&quot;</code> followed by <code>&quot;Red&quot;</code>.</p>
`},{letter:"B",html:`<p>It compiles and prints <code>&quot;Fruit flavor&quot;</code>.</p>
`},{letter:"C",html:`<p>It compiles but throws a runtime exception when attempting to call <code>color()</code>.</p>
`},{letter:"D",html:`<p>It does not compile because <code>Apple</code> is not a valid type of <code>Fruit</code>.</p>
`},{letter:"E",html:`<p>It does not compile because the <code>color</code> method is not defined in the <code>Fruit</code> class.</p>
`}],correct:["E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> It compiles and prints <code>&quot;Apple flavor&quot;</code> followed by <code>&quot;Red&quot;</code>.</p>
<ul>
<li>This option is incorrect because, while the <code>flavor</code> method will indeed print <code>&quot;Apple flavor&quot;</code> due to polymorphism (the <code>Apple</code> class overrides the <code>flavor</code> method of <code>Fruit</code>), the code will not compile if the <code>color()</code> method is called on a <code>Fruit</code> reference. This is because the <code>color</code> method is not part of the <code>Fruit</code> class&#39;s interface.</li>
</ul>
</li>
<li><p><strong>B)</strong> It compiles and prints <code>&quot;Fruit flavor&quot;</code>.</p>
<ul>
<li>This option is incorrect for a similar reason to A. The <code>flavor</code> method would print <code>&quot;Apple flavor&quot;</code> because of the overridden method in the <code>Apple</code> class, not <code>&quot;Fruit flavor&quot;</code>. However, the presence of the <code>color()</code> method call would still prevent compilation.</li>
</ul>
</li>
<li><p><strong>C)</strong> It compiles but throws a runtime exception when attempting to call <code>color()</code>.</p>
<ul>
<li>This option is incorrect because the issue occurs at compile time, not runtime. The Java compiler will not allow a method to be called on a reference type if that method is not defined in the reference type&#39;s class or its superclass hierarchy.</li>
</ul>
</li>
<li><p><strong>D)</strong> It does not compile because <code>Apple</code> is not a valid type of <code>Fruit</code>.</p>
<ul>
<li>This option is incorrect. <code>Apple</code> is a valid type of <code>Fruit</code> due to inheritance (<code>Apple extends Fruit</code>). This relationship allows an <code>Apple</code> object to be referenced by a <code>Fruit</code> variable.</li>
</ul>
</li>
<li><p><strong>E)</strong> It does not compile because the <code>color</code> method is not defined in the <code>Fruit</code> class.</p>
<ul>
<li>This option is correct. The <code>color</code> method is only defined in the <code>Apple</code> class and not in the <code>Fruit</code> class. Since the reference type of <code>myFruit</code> is <code>Fruit</code>, which does not have a <code>color</code> method, attempting to call <code>myFruit.color()</code> will result in a compilation error. This illustrates a key principle of polymorphism: the type of the reference (not the object) determines what methods can be called.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q12",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:12,multiSelect:!0,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">bark</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Woof&quot;</span>);
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Cat</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">meow</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Meow&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestCasting</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Dog</span>();
        ((Dog)animal).bark();

        <span class="hljs-type">Animal</span> <span class="hljs-variable">anotherAnimal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>();
        <span class="hljs-comment">// Line 1</span>
    }
}
</code></pre><p>Which of the following lines of code, if inserted independently at Line 1, will compile without causing a runtime exception? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p><code>((Dog)anotherAnimal).bark();</code></p>
`},{letter:"B",html:`<p><code>if (anotherAnimal instanceof Dog) ((Dog)anotherAnimal).bark();</code></p>
`},{letter:"C",html:`<p><code>((Cat)animal).meow();</code></p>
`},{letter:"D",html:`<p><code>if (anotherAnimal instanceof Cat) ((Cat)anotherAnimal).meow();</code></p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>((Dog)anotherAnimal).bark();</code></p>
<ul>
<li>This option is incorrect because it tries to cast <code>anotherAnimal</code> to <code>Dog</code> without checking its actual type first. Since <code>anotherAnimal</code> is an instance of <code>Animal</code> (not <code>Dog</code>), attempting this cast will compile, but it will cause a <code>ClassCastException</code> at runtime.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>if (anotherAnimal instanceof Dog) ((Dog)anotherAnimal).bark();</code> </p>
<ul>
<li>This option is correct. It uses <code>instanceof</code> to check whether <code>anotherAnimal</code> is an instance of <code>Dog</code> before attempting the cast and calling <code>bark()</code>. In this case, since <code>anotherAnimal</code> is not an instance of <code>Dog</code>, the check prevents the cast and method call, avoiding a <code>ClassCastException</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>((Cat)animal).meow();</code></p>
<ul>
<li>This option is incorrect because it casts <code>animal</code> to <code>Cat</code> and attempts to call <code>meow()</code>. Since <code>animal</code> is actually an instance of <code>Dog</code>, this cast will compile but will result in a <code>ClassCastException</code> at runtime.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>if (anotherAnimal instanceof Cat) ((Cat)anotherAnimal).meow();</code></p>
<ul>
<li>This option is correct. It checks if <code>anotherAnimal</code> is an instance of <code>Cat</code> before casting it to <code>Cat</code> and calling <code>meow()</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q13",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:13,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AdvancedPatternMatching</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">process</span><span class="hljs-params">(Object input)</span> {
        <span class="hljs-keyword">if</span> (input <span class="hljs-keyword">instanceof</span> String s &amp;&amp; s.contains(<span class="hljs-string">&quot;Java&quot;</span>)) {
            System.out.println(<span class="hljs-string">&quot;String with Java: &quot;</span> + s);
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (input <span class="hljs-keyword">instanceof</span> Integer i &amp;&amp; i &gt; <span class="hljs-number">10</span>) {
            System.out.println(<span class="hljs-string">&quot;Integer greater than 10: &quot;</span> + i);
        }
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        process(<span class="hljs-string">&quot;Hello Java!&quot;</span>);
        process(<span class="hljs-number">15</span>);
        process(<span class="hljs-string">&quot;Just a string&quot;</span>);
        process(<span class="hljs-number">5</span>);
    }
}
</code></pre><p>Given the above code, which statement accurately describes its execution result?</p>
`,options:[{letter:"A",html:`<p>It compiles and prints <code>&quot;String with Java: Hello Java!&quot;</code> followed by <code>&quot;Integer greater than 10: 15&quot;</code>.</p>
`},{letter:"B",html:`<p>It compiles but only prints <code>&quot;String with Java: Hello Java!&quot;</code> because integers are not supported with pattern matching.</p>
`},{letter:"C",html:`<p>It does not compile because pattern matching in <code>instanceof</code> cannot be combined with logical operators like <code>&amp;&amp;</code>.</p>
`},{letter:"D",html:`<p>It compiles but prints all four lines due to incorrect use of pattern matching that always evaluates to <code>true</code>.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> It compiles and prints <code>&quot;String with Java: Hello Java!&quot;</code> followed by <code>&quot;Integer greater than 10: 15&quot;</code>.</p>
<ul>
<li>This option is correct. The code snippet effectively demonstrates the use of pattern matching with the <code>instanceof</code> operator for both <code>String</code> and <code>Integer</code> types. The pattern matching feature checks if <code>input</code> is an instance of <code>String</code> or <code>Integer</code> and binds it to a variable (<code>s</code> for <code>String</code> and <code>i</code> for <code>Integer</code>) within the scope of the <code>if</code> and <code>else if</code> blocks. The logical operator <code>&amp;&amp;</code> is correctly used to further conditionally check properties of the variables (<code>s.contains(&quot;Java&quot;)</code> and <code>i &gt; 10</code>). Thus, the method <code>process</code> prints output for inputs that are a <code>String</code> containing <code>&quot;Java&quot;</code> and an <code>Integer</code> greater than <code>10</code>, respectively.</li>
</ul>
</li>
<li><p><strong>B)</strong> It compiles but only prints <code>&quot;String with Java: Hello Java!&quot;</code> because integers are not supported with pattern matching.</p>
<ul>
<li>This option is incorrect because pattern matching works for any reference type, including <code>Integer</code>. The code does support integers and performs additional checks using pattern matching correctly.</li>
</ul>
</li>
<li><p><strong>C)</strong> It does not compile because pattern matching in <code>instanceof</code> cannot be combined with logical operators like <code>&amp;&amp;</code>.</p>
<ul>
<li>This option is incorrect. The code will compile and run as expected. Pattern matching in <code>instanceof</code> can indeed be combined with logical operators like <code>&amp;&amp;</code> for additional checks in the same conditional statement, as demonstrated in the code snippet.</li>
</ul>
</li>
<li><p><strong>D)</strong> It compiles but prints all four lines due to incorrect use of pattern matching that always evaluates to <code>true</code>.</p>
<ul>
<li>This option is incorrect because the use of pattern matching in the provided code is correct and does not always evaluate to <code>true</code>. The code correctly prints specific messages only for the inputs that match the given conditions.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q14",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:14,multiSelect:!1,stemHtml:`<p>Consider the encapsulation practices in the following class structure:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">package</span> store;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Product</span> {
    <span class="hljs-keyword">private</span> String name;
    <span class="hljs-keyword">private</span> <span class="hljs-type">double</span> price;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> stock;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Product</span><span class="hljs-params">(String name, <span class="hljs-type">double</span> price, <span class="hljs-type">int</span> stock)</span> {
        setName(name);
        setPrice(price);
        setStock(stock);
    }

    <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getName</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> name;
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">setName</span><span class="hljs-params">(String name)</span> {
        <span class="hljs-built_in">this</span>.name = name;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">double</span> <span class="hljs-title function_">getPrice</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> price;
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">setPrice</span><span class="hljs-params">(<span class="hljs-type">double</span> price)</span> {
        <span class="hljs-keyword">if</span> (price &gt;= <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">this</span>.price = price;
        }
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">getStock</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> stock;
    }

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">setStock</span><span class="hljs-params">(<span class="hljs-type">int</span> stock)</span> {
        <span class="hljs-keyword">if</span> (stock &gt;= <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">this</span>.stock = stock;
        }
    }
}
</code></pre><p>Which statement is true regarding the encapsulation of the <code>Product</code> class?</p>
`,options:[{letter:"A",html:`<p>Making the <code>setName</code>, <code>setPrice</code>, and <code>setStock</code> methods <code>public</code> would enhance the class&#39;s encapsulation.</p>
`},{letter:"B",html:`<p>The class is not encapsulated because the <code>Product</code> class&#39;s fields are <code>private</code>.</p>
`},{letter:"C",html:`<p>Encapsulation is weakened because the constructor allows direct setting of fields without validation.</p>
`},{letter:"D",html:`<p>The <code>Product</code> class should have package-private getters to improve encapsulation.</p>
`},{letter:"E",html:`<p>The class is properly encapsulated by providing <code>public</code> getters for all fields and <code>private</code> setters with validation, ensuring control over the state of its objects.</p>
`}],correct:["E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Making the <code>setName</code>, <code>setPrice</code>, and <code>setStock</code> methods public would enhance the class&#39;s encapsulation.</p>
<ul>
<li>This option is incorrect. Making the setters public would actually reduce the class&#39;s encapsulation by allowing external classes to modify the fields without restriction, potentially bypassing any validation logic contained within the setters.</li>
</ul>
</li>
<li><p><strong>B)</strong> The class is not encapsulated because the <code>Product</code> class&#39;s fields are <code>private</code>. </p>
<ul>
<li>This option is incorrect. The use of <code>private</code> fields is a fundamental aspect of encapsulation. It prevents external classes from directly accessing and modifying the object&#39;s state, thus enforcing encapsulation.</li>
</ul>
</li>
<li><p><strong>C)</strong> Encapsulation is weakened because the constructor allows direct setting of fields without validation.</p>
<ul>
<li>This option is incorrect. The constructor does not weaken encapsulation; instead, it uses <code>private</code> setters that contain validation logic. This ensures that the object&#39;s state is correctly managed and validated upon creation.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Product</code> class should have package-private getters to improve encapsulation.</p>
<ul>
<li>This option is incorrect. Making getters package-private would limit the class&#39;s usability and does not inherently improve encapsulation. Public getters are necessary for external classes to view (but not modify) the object&#39;s state.</li>
</ul>
</li>
<li><p><strong>E)</strong> The class is properly encapsulated by providing public getters for all fields and private setters with validation, ensuring control over the state of its objects.</p>
<ul>
<li>This option is correct. The <code>Product</code> class demonstrates proper encapsulation practices by making its fields <code>private</code> and controlling access to them through <code>public</code> getters and <code>private</code> setters. The setters include validation logic, ensuring that only valid states are assigned to the fields. This design pattern ensures that the internal state of <code>Product</code> instances is both protected and correctly managed.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q15",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:15,multiSelect:!0,stemHtml:`<p>Consider the following classes defined in the same package:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Account</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">double</span> balance;
    
    Account(<span class="hljs-type">double</span> initialBalance) {
        <span class="hljs-keyword">if</span> (initialBalance &gt; <span class="hljs-number">0</span>) {
            balance = initialBalance;
        }
    }
    
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">deposit</span><span class="hljs-params">(<span class="hljs-type">double</span> amount)</span> {
        <span class="hljs-keyword">if</span> (amount &gt; <span class="hljs-number">0</span>) {
            balance += amount;
        }
    }
    
    <span class="hljs-keyword">protected</span> <span class="hljs-type">double</span> <span class="hljs-title function_">getBalance</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> balance;
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SavingsAccount</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Account</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">double</span> interestRate;
    
    <span class="hljs-keyword">public</span> <span class="hljs-title function_">SavingsAccount</span><span class="hljs-params">(<span class="hljs-type">double</span> initialBalance, <span class="hljs-type">double</span> interestRate)</span> {
        <span class="hljs-built_in">super</span>(initialBalance);
        <span class="hljs-built_in">this</span>.interestRate = interestRate;
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">applyInterest</span><span class="hljs-params">()</span> {
        <span class="hljs-type">double</span> <span class="hljs-variable">interest</span> <span class="hljs-operator">=</span> getBalance() * interestRate / <span class="hljs-number">100</span>;
        deposit(interest);
    }
}
</code></pre><p>Which statement(s) about encapsulation principles and the use of access modifiers accurately describes the code above? Choose all tha apply.</p>
`,options:[{letter:"A",html:`<p>The <code>SavingsAccount</code> class cannot access the <code>balance</code> field directly due to its <code>private</code> access modifier in the <code>Account</code> class.</p>
`},{letter:"B",html:`<p>The <code>getBalance</code> method should be <code>public</code> to allow <code>SavingsAccount</code> to access the account balance.</p>
`},{letter:"C",html:`<p>The <code>deposit</code> method in the <code>Account</code> class should be marked as <code>final</code> to prevent overriding.</p>
`},{letter:"D",html:`<p>The <code>interestRate</code> field in the <code>SavingsAccount</code> class violates encapsulation principles by being <code>private</code>.</p>
`},{letter:"E",html:`<p>The <code>Account</code> class correctly encapsulates the <code>balance</code> field, and <code>SavingsAccount</code> adheres to encapsulation by accessing <code>balance</code> through <code>getBalance</code> and <code>deposit</code>.</p>
`}],correct:["A","E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>SavingsAccount</code> class cannot access the <code>balance</code> field directly due to its <code>private</code> access modifier in the <code>Account</code> class.</p>
<ul>
<li>This option is correct. The design intentionally restricts direct access to the <code>balance</code> field to maintain encapsulation.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>getBalance</code> method should be <code>public</code> to allow <code>SavingsAccount</code> to access the account balance.</p>
<ul>
<li>This option is incorrect. Making <code>getBalance</code> <code>public</code> would increase its visibility unnecessarily. <code>protected</code> is sufficient for subclass access, and this change is not required for <code>SavingsAccount</code> to function correctly, making this statement incorrect.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>deposit</code> method in the <code>Account</code> class should be marked as <code>final</code> to prevent overriding.</p>
<ul>
<li>This option is incorrect. Marking <code>deposit</code> as <code>final</code> would prevent it from being overridden in subclasses, which is not a requirement or suggestion indicated by the given code. The decision to make a method <code>final</code> should be based on the specific design needs rather than a general principle of encapsulation.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>interestRate</code> field in the <code>SavingsAccount</code> class violates encapsulation principles by being <code>private</code>.</p>
<ul>
<li>This option is incorrect. Using a <code>private</code> access modifier for <code>interestRate</code> in <code>SavingsAccount</code> is an example of proper encapsulation. It restricts access to the field from outside the class, which is aligned with encapsulation principles, making this option incorrect.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>Account</code> class correctly encapsulates the <code>balance</code> field, and <code>SavingsAccount</code> adheres to encapsulation by accessing <code>balance</code> through <code>getBalance</code> and <code>deposit</code>.</p>
<ul>
<li>This option is correct. The <code>Account</code> class uses <code>private</code> access for the <code>balance</code> field to encapsulate its state, providing <code>protected</code> and package-private methods (<code>getBalance</code> and <code>deposit</code>) for controlled access and modification. <code>SavingsAccount</code> respects this encapsulation by using these methods to interact with the <code>balance</code> field, demonstrating a proper understanding and application of encapsulation principles. This design allows <code>SavingsAccount</code> to leverage functionality provided by <code>Account</code> without breaking encapsulation, which is a key objective in object-oriented design.</li>
</ul>
</li>
</ul>
`},{id:"ch02-q16",chapter:"ch02",chapterTitle:"Chapter TWO",chapterSubtitle:"Utilizing Java Object-Oriented Approach - Part 2",number:16,multiSelect:!1,stemHtml:`<p>Consider the following class:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">final</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Contact</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> String name;
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> String email;
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> Address address;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Contact</span><span class="hljs-params">(String name, String email, Address address)</span> {
        <span class="hljs-built_in">this</span>.name = name;
        <span class="hljs-built_in">this</span>.email = email;
        <span class="hljs-built_in">this</span>.address = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Address</span>(address.getStreet(), address.getCity());
    }

    <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getName</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> name;
    }

    <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getEmail</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> email;
    }

    <span class="hljs-keyword">public</span> Address <span class="hljs-title function_">getAddress</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Address</span>(address.getStreet(), address.getCity());
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Address</span> {
        <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> String street;
        <span class="hljs-keyword">private</span> <span class="hljs-keyword">final</span> String city;

        <span class="hljs-keyword">public</span> <span class="hljs-title function_">Address</span><span class="hljs-params">(String street, String city)</span> {
            <span class="hljs-built_in">this</span>.street = street;
            <span class="hljs-built_in">this</span>.city = city;
        }

        <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getStreet</span><span class="hljs-params">()</span> {
            <span class="hljs-keyword">return</span> street;
        }

        <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getCity</span><span class="hljs-params">()</span> {
            <span class="hljs-keyword">return</span> city;
        }
    }
}
</code></pre><p>Given the above implementation, which statement accurately describes the <code>Contact</code> object?</p>
`,options:[{letter:"A",html:`<p>The <code>Contact</code> object is mutable because the <code>Address</code> class is not <code>final</code>.</p>
`},{letter:"B",html:`<p>The <code>Contact</code> object is immutable, but only because it does not provide setters.</p>
`},{letter:"C",html:`<p>The <code>Contact</code> object is immutable, and it properly prevents leakage of mutable internal state through defensive copying.</p>
`},{letter:"D",html:`<p>The <code>Contact</code> object is mutable because the <code>Address</code> object can be changed via the <code>getAddress</code> method.</p>
`},{letter:"E",html:`<p>The <code>Contact</code> object is immutable but fails to prevent access to its mutable internal state.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Contact</code> object is mutable because the <code>Address</code> class is not <code>final</code>.</p>
<ul>
<li>This option is incorrect because the <code>Address</code> class does not directly impact the immutability of the <code>Contact</code> object. The <code>Contact</code> class ensures its immutability by not providing setters and by making deep copies of mutable objects, such as <code>Address</code>, both in the constructor and the getter.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>Contact</code> object is immutable, but only because it does not provide setters.</p>
<ul>
<li>This option is incorrect. While it&#39;s true that it does not provide setters, this option does not fully capture the essence of immutability. Thus, it doesn&#39;t highlight the fact that all fields in <code>Contact</code> are <code>final</code> and the defensive copying strategy.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Contact</code> object is immutable, and it properly prevents leakage of mutable internal state through defensive copying.</p>
<ul>
<li>This is the correct option. The <code>Contact</code> class is immutable because it meets all criteria for immutability: the class is declared as <code>final</code> (preventing subclassing), all its fields are <code>private</code> and <code>final</code>, and it does not provide any setters. Also, it implements defensive copying for the mutable <code>Address</code> field to ensure that the internal state cannot be altered by external changes to <code>Address</code> objects passed in or returned. This prevents the leakage of its mutable internal state.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Contact</code> object is mutable because the <code>Address</code> object can be changed via the <code>getAddress</code> method. </p>
<ul>
<li>This option is incorrect because the <code>Contact</code> object&#39;s immutability is maintained through defensive copying. The <code>getAddress</code> method returns a new <code>Address</code> instance each time it is called, ensuring that the original <code>Address</code> object&#39;s state cannot be altered from outside the <code>Contact</code> object.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>Contact</code> object is immutable but fails to prevent access to its mutable internal state.</p>
<ul>
<li>This option is incorrect because the <code>Contact</code> object does implement a strategy to prevent access to its mutable internal state: it uses defensive copying for the <code>Address</code> object in both the constructor and the getter method, which ensures that the internal state remains unchanged from outside modifications.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q1",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:1,multiSelect:!1,stemHtml:`<p>Consider the following record definition:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">record</span> <span class="hljs-title class_">Employee</span><span class="hljs-params">(String name, <span class="hljs-type">int</span> age)</span> {}
</code></pre><p>Which of the following statements is true about the <code>Employee</code> record?</p>
`,options:[{letter:"A",html:`<p>The <code>Employee</code> record explicitly defines a public constructor that initializes its fields.</p>
`},{letter:"B",html:`<p>The fields <code>name</code> and <code>age</code> can be reassigned to new values after an <code>Employee</code> object is created.</p>
`},{letter:"C",html:`<p>The <code>Employee</code> record implicitly creates a public constructor and private final fields for <code>name</code> and <code>age</code>.</p>
`},{letter:"D",html:`<p>It is mandatory to define getters for the fields <code>name</code> and <code>age</code> in the <code>Employee</code> record.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Employee</code> record explicitly defines a public constructor that initializes its fields. </p>
<ul>
<li>This option is incorrect because the record <code>Employee</code> does not explicitly define a <code>public</code> constructor. Records automatically generate a <code>public</code> constructor with the same parameters as the record&#39;s declaration.</li>
</ul>
</li>
<li><p><strong>B)</strong> The fields <code>name</code> and <code>age</code> can be reassigned to new values after an <code>Employee</code> object is created.</p>
<ul>
<li>This option is incorrect as the fields within a record are <code>final</code>, which means they cannot be reassigned to new values after an <code>Employee</code> object has been created. This immutability is one of the key characteristics of records.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Employee</code> record implicitly creates a <code>public</code> constructor and <code>private</code> <code>final</code> fields for <code>name</code> and <code>age</code>.</p>
<ul>
<li>This is the correct option. Records implicitly create a public constructor for the record&#39;s fields and also make these fields <code>private</code> and <code>final</code>. This means you don&#39;t have to manually write boilerplate code for constructor, getters, or to ensure immutability.</li>
</ul>
</li>
<li><p><strong>D)</strong> It is mandatory to define getters for the fields <code>name</code> and <code>age</code> in the <code>Employee</code> record.</p>
<ul>
<li>This option is incorrect because records automatically generate public methods to access the fields, known as accessor methods, which essentially act as getters. Therefore, it is not mandatory (or even possible) to define separate getters for the fields.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q2",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:2,multiSelect:!1,stemHtml:`<p>Given the record definition below:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">record</span> <span class="hljs-title class_">Account</span><span class="hljs-params">(String id, <span class="hljs-type">double</span> balance)</span> {}
</code></pre><p>Which statement accurately describes the immutability of records?</p>
`,options:[{letter:"A",html:`<p>The <code>balance</code> field can be modified using a public setter method within the <code>Account</code> record.</p>
`},{letter:"B",html:`<p>Once an <code>Account</code> object is created, its <code>id</code> and <code>balance</code> cannot be changed.</p>
`},{letter:"C",html:`<p>Immutability of records can be bypassed by you define custom setter methods for the <code>id</code> and <code>balance</code> fields.</p>
`},{letter:"D",html:`<p>Records allow field values to be modified if accessed directly, without using setter methods.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>balance</code> field can be modified using a public setter method within the <code>Account</code> record.</p>
<ul>
<li>This option is incorrect because records in Java do not support public setter methods for their fields. The fields of a record are <code>final</code> and cannot be modified after the object&#39;s construction, which is a key aspect of their design to enforce immutability.</li>
</ul>
</li>
<li><p><strong>B)</strong> Once an <code>Account</code> object is created, its <code>id</code> and <code>balance</code> cannot be changed.</p>
<ul>
<li>This is the correct option. Records are immutable by design, meaning that once a record object is created, the values of its fields (<code>id</code> and <code>balance</code> in this case) cannot be changed. This immutability is ensured by making the fields <code>private</code> and <code>final</code>, and by not providing setter methods.</li>
</ul>
</li>
<li><p><strong>C)</strong> Immutability of records can be bypassed by you define custom setter methods for the <code>id</code> and <code>balance</code> fields. </p>
<ul>
<li>This option is incorrect. Custom setter methods cannot be defined for the record fields because records do not allow defining mutators for their components.</li>
</ul>
</li>
<li><p><strong>D)</strong> Records allow field values to be modified if accessed directly, without using setter methods.</p>
<ul>
<li>This option is incorrect because the fields in a record are implicitly <code>final</code> and private, which means they cannot be modified directly or through setter methods. The design of records enforces this immutability to ensure that instances of records act as true carriers of immutable data.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q3",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:3,multiSelect:!1,stemHtml:`<p>Consider the following record declaration:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">record</span> <span class="hljs-title class_">Product</span><span class="hljs-params">(<span class="hljs-type">int</span> id, String name, <span class="hljs-type">double</span> price)</span> {}
</code></pre><p>How can you correctly initialize an instance of the <code>Product</code> record?</p>
`,options:[{letter:"A",html:`<p><code>Product p = new Product();</code></p>
`},{letter:"B",html:`<p><code>Product p = Product(101, &quot;Coffee&quot;, 15.99);</code></p>
`},{letter:"C",html:`<p><code>Product p = {101, &quot;Coffee&quot;, 15.99};</code></p>
`},{letter:"D",html:`<p><code>Product p = new Product(101, &quot;Coffee&quot;, 15.99);</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Product p = new Product();</code></p>
<ul>
<li>This option is incorrect because the default constructor without parameters does not exist for records in Java. Records require all their fields to be specified at the time of instantiation.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Product p = Product(101, &quot;Coffee&quot;, 15.99);</code></p>
<ul>
<li>This option is incorrect because the syntax used here is not valid for creating a new instance of a record in Java. The correct syntax for instantiating a record involves using the <code>new</code> keyword followed by the record name and the parameters in parentheses.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Product p = {101, &quot;Coffee&quot;, 15.99};</code></p>
<ul>
<li>This option is incorrect as it mistakenly uses the syntax for array initialization. In Java, objects, including records, cannot be instantiated using curly braces without the <code>new</code> keyword and proper constructor.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Product p = new Product(101, &quot;Coffee&quot;, 15.99);</code></p>
<ul>
<li>This is the correct option. Records in Java are instantiated using the <code>new</code> keyword followed by the record&#39;s constructor, which requires passing all the fields defined in the record. This syntax correctly creates a new <code>Product</code> record with the given <code>id</code>, <code>name</code>, and <code>price</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q4",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:4,multiSelect:!1,stemHtml:`<p>Consider a record that needs to implement the <code>Comparable</code> interface to allow sorting based on one of its fields. Given the following record definition:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">record</span> <span class="hljs-title class_">Item</span><span class="hljs-params">(<span class="hljs-type">int</span> id, String name, <span class="hljs-type">double</span> price)</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Comparable</span>&lt;Item&gt; {
    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">compareTo</span><span class="hljs-params">(Item other)</span> {
        <span class="hljs-keyword">return</span> Double.compare(<span class="hljs-built_in">this</span>.price, other.price);
    }
}
</code></pre><p>Which statement correctly describes how records can be customized by implementing interfaces?</p>
`,options:[{letter:"A",html:`<p>Records cannot implement interfaces because they are <code>final</code> and immutable by design, which prevents any form of behavior customization.</p>
`},{letter:"B",html:`<p>This record correctly implements the <code>Comparable</code> interface, allowing <code>Item</code> objects to be sorted based on their <code>price</code>.</p>
`},{letter:"C",html:`<p>Implementing interfaces in records is restricted only to functional interfaces due to their immutable nature.</p>
`},{letter:"D",html:`<p>The <code>compareTo</code> method cannot be overridden in records because method overriding is not supported in record types.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Records cannot implement interfaces because they are <code>final</code> and immutable by design, which prevents any form of behavior customization.</p>
<ul>
<li>This option is incorrect. Records in Java can implement interfaces. The finality and immutability of records do not preclude them from implementing interfaces, which can be used to add behaviors or contractual obligations to a record.</li>
</ul>
</li>
<li><p><strong>B)</strong> This record correctly implements the <code>Comparable</code> interface, allowing <code>Item</code> objects to be sorted based on their <code>price</code>.</p>
<ul>
<li>This is the correct option. The provided record definition correctly implements the <code>Comparable&lt;Item&gt;</code> interface by overriding the <code>compareTo</code> method. This customization allows instances of the <code>Item</code> record to be sorted based on the <code>price</code> field, demonstrating that records can indeed implement interfaces and override their methods as needed.</li>
</ul>
</li>
<li><p><strong>C)</strong> Implementing interfaces in records is restricted only to functional interfaces due to their immutable nature.</p>
<ul>
<li>This option is incorrect. There is no such restriction that limits records to implementing only functional interfaces. Records can implement any interface, including those with multiple abstract methods, as long as the record provides implementations for the abstract methods defined in the interface.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>compareTo</code> method cannot be overridden in records because method overriding is not supported in record types.</p>
<ul>
<li>This option is incorrect. Records can override methods from the interfaces they implement, including the <code>compareTo</code> method from the <code>Comparable</code> interface in this example. Method overriding is a key aspect of implementing interfaces and is fully supported by record types in Java.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q5",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:5,multiSelect:!0,stemHtml:`<p>Consider the ways to declare enums in Java. Which of the following declarations are valid? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Day</span> {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Month</span> {
    <span class="hljs-keyword">private</span> JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER;
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">protected</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Season</span> {
    WINTER, SPRING, SUMMER, FALL
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Status</span> {
    ACTIVE, INACTIVE, DELETED;

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printStatus</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Current status: &quot;</span> + <span class="hljs-built_in">this</span>);
    }
}
</code></pre>`}],correct:["A","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Day</span> {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
</code></pre><ul>
<li><p>This option is correct. It demonstrates a valid declaration of an enum in Java. Enums are used to define a set of named constants, and this syntax is the standard way to declare them. The <code>public</code> access modifier makes this enum accessible from any other class.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Month</span> {
    <span class="hljs-keyword">private</span> JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER;
}
</code></pre><ul>
<li><p>This option is incorrect. Enums cannot have <code>private</code> access modifiers for their constants. Enum constants are implicitly <code>public</code>, <code>static</code>, and <code>final</code> and should be declared without access modifiers.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">protected</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Season</span> {
    WINTER, SPRING, SUMMER, FALL
}
</code></pre><ul>
<li><p>This option is incorrect because enums cannot be declared with <code>protected</code> or <code>private</code> access levels. Enums are implicitly <code>public</code> if they are defined outside of a class. If defined within a class, they can have any access level, but the <code>protected</code> keyword cannot be used at the enum level itself.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Status</span> {
    ACTIVE, INACTIVE, DELETED;

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printStatus</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Current status: &quot;</span> + <span class="hljs-built_in">this</span>);
    }
}
</code></pre><ul>
<li>This option is correct. It shows an enum <code>Status</code> with a method <code>printStatus()</code>. Enums in Java can contain methods, fields, constructors, and implement interfaces. This demonstrates the ability of enums to have methods, making this declaration valid.</li>
</ul>
`},{id:"ch03-q6",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:6,multiSelect:!1,stemHtml:`<p>Consider the following enum declaration:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Color</span> {
    RED, GREEN, BLUE;
}
</code></pre><p>What is the result of calling <code>Color.GREEN.ordinal()</code>?</p>
`,options:[{letter:"A",html:`<p><code>1</code></p>
`},{letter:"B",html:`<p><code>2</code></p>
`},{letter:"C",html:`<p><code>0</code></p>
`},{letter:"D",html:`<p><code>Color.GREEN</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>1</code></p>
<ul>
<li>This option is correct. The <code>ordinal()</code> method returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero). Since <code>GREEN</code> is the second enum constant declared in the <code>Color</code> enum, its ordinal value is 1.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>2</code></p>
<ul>
<li>This option is incorrect. The ordinal value of <code>BLUE</code> would be 2, not <code>GREEN</code>, because <code>BLUE</code> is the third declared constant in the <code>Color</code> enum.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>0</code></p>
<ul>
<li>This option is incorrect. The ordinal value of <code>RED</code> is 0, as it is the first declared constant in the <code>Color</code> enum.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Color.GREEN</code></p>
<ul>
<li>This option is incorrect. The <code>ordinal()</code> method returns an integer representing the position of the enum constant in the declaration, not the enum constant itself.</li>
</ul>
</li>
</ul>
`},{id:"ch03-q7",chapter:"ch03",chapterTitle:"Chapter THREE",chapterSubtitle:"Working with Records and Enums",number:7,multiSelect:!1,stemHtml:`<p>Consider an enum that needs to provide a custom method to display a message based on the enum constant. Which of the following implementations correctly defines such an enum?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Size</span> {
    SMALL, MEDIUM, LARGE;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printSize</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;The size is &quot;</span> + <span class="hljs-built_in">this</span>.name());
    }
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Flavor</span> {
    CHOCOLATE, VANILLA, STRAWBERRY;
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">printFlavor</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Flavor: &quot;</span> + Flavor.name);
    }
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">protected</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Direction</span> {
    NORTH, SOUTH, EAST, WEST;
    <span class="hljs-keyword">private</span> <span class="hljs-title function_">printDirection</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Going &quot;</span> + <span class="hljs-built_in">this</span>.toString());
    }
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Season</span> {
    WINTER, SPRING, SUMMER, FALL;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printSeason</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;The season is &quot;</span> + <span class="hljs-built_in">this</span>.name());
    }
}
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Size</span> {
    SMALL, MEDIUM, LARGE;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printSize</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;The size is &quot;</span> + <span class="hljs-built_in">this</span>.name());
    }
}
</code></pre><ul>
<li><p>This option is incorrect because the method <code>printSize()</code> is defined as <code>static</code>, which means it cannot access the <code>this</code> reference. Static methods in enums can&#39;t directly access the enum constants without specifying the constant explicitly or being passed a reference.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Flavor</span> {
    CHOCOLATE, VANILLA, STRAWBERRY;
    <span class="hljs-keyword">void</span> <span class="hljs-title function_">printFlavor</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Flavor: &quot;</span> + Flavor.name);
    }
}
</code></pre><ul>
<li><p>This option is incorrect because the <code>name</code> property of an enum constant is <code>private</code>. You can only access it using the <code>this</code> reference and the <code>name()</code> method (<code>this.name()</code>).</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">protected</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Direction</span> {
    NORTH, SOUTH, EAST, WEST;
    <span class="hljs-keyword">private</span> <span class="hljs-title function_">printDirection</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;Going &quot;</span> + <span class="hljs-built_in">this</span>.toString());
    }
}
</code></pre><ul>
<li><p>This option is incorrect for two reasons. First, <code>protected</code> is not a valid access modifier for a top-level enum, top-level enums can only be <code>public</code> or package-private (no modifier). Second, <code>printDirection()</code> method is missing a return type (e.g., <code>void</code>).</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">Season</span> {
    WINTER, SPRING, SUMMER, FALL;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printSeason</span><span class="hljs-params">()</span> {
        System.out.println(<span class="hljs-string">&quot;The season is &quot;</span> + <span class="hljs-built_in">this</span>.name());
    }
}
</code></pre><ul>
<li>This is the correct option. The <code>printSeason()</code> method is properly defined: it&#39;s <code>public</code>, non-static, and utilizes the <code>this</code> reference to access the name of the current enum constant. This method correctly provides custom behavior for each enum constant, allowing it to print a message indicating the current season.</li>
</ul>
`},{id:"ch04-q1",chapter:"ch04",chapterTitle:"Chapter FOUR",chapterSubtitle:"Working with Data",number:1,multiSelect:!1,stemHtml:`<p>Which of the following statements about Java primitive and reference data types is true?</p>
`,options:[{letter:"A",html:`<p>A <code>double</code> can be directly assigned to a <code>float</code> without casting.</p>
`},{letter:"B",html:`<p>A <code>boolean</code> can be cast to an <code>int</code>.</p>
`},{letter:"C",html:`<p>A <code>String</code> can be assigned to an <code>Object</code> reference variable.</p>
`},{letter:"D",html:`<p>A <code>char</code> is a reference data type.</p>
`},{letter:"E",html:`<p>An <code>int</code> can store a <code>long</code> value without any explicit casting.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A <code>double</code> can be directly assigned to a <code>float</code> without casting. </p>
<ul>
<li>This option is incorrect. A <code>double</code> cannot be directly assigned to a <code>float</code> without casting because <code>double</code> has a larger range and precision than a <code>float</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> A <code>boolean</code> can be cast to an <code>int</code>.</p>
<ul>
<li>This option is incorrect. <code>boolean</code> values cannot be cast to <code>int</code> in Java. They are not compatible types.</li>
</ul>
</li>
<li><p><strong>C)</strong> A <code>String</code> can be assigned to an <code>Object</code> reference variable.</p>
<ul>
<li>This option is correct. A <code>String</code> is an instance of the <code>Object</code> class, and hence it can be assigned to an <code>Object</code> reference variable.</li>
</ul>
</li>
<li><p><strong>D)</strong> A <code>char</code> is a reference data type. </p>
<ul>
<li>This option is incorrect. <code>char</code> is a primitive data type, not a reference data type.</li>
</ul>
</li>
<li><p><strong>E)</strong> An <code>int</code> can store a <code>long</code> value without any explicit casting.</p>
<ul>
<li>This option is incorrect. an <code>int</code> cannot store a <code>long</code> value without explicit casting because <code>long</code> has a larger range than <code>int</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch04-q2",chapter:"ch04",chapterTitle:"Chapter FOUR",chapterSubtitle:"Working with Data",number:2,multiSelect:!1,stemHtml:`<p>What is the output of the following code snippet?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">OperatorTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">a</span> <span class="hljs-operator">=</span> <span class="hljs-number">5</span>;
        <span class="hljs-type">int</span> <span class="hljs-variable">b</span> <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
        <span class="hljs-type">int</span> <span class="hljs-variable">c</span> <span class="hljs-operator">=</span> <span class="hljs-number">15</span>;
        <span class="hljs-type">int</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> a + b * c / a - b;
        System.out.println(result);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>25</code></p>
`},{letter:"B",html:`<p><code>35</code></p>
`},{letter:"C",html:`<p><code>20</code></p>
`},{letter:"D",html:`<p><code>15</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<p>Let&#39;s break down the expression <code>a + b * c / a - b</code> step-by-step according to the order of operations:</p>
<ol>
<li><p><strong>Multiplication and Division</strong> are performed first from left to right:</p>
<ul>
<li><code>b * c</code> = <code>10 * 15</code> = <code>150</code></li>
<li><code>150 / a</code> = <code>150 / 5</code> = <code>30</code></li>
</ul>
</li>
<li><p><strong>Addition and Subtraction</strong> are performed next from left to right:</p>
<ul>
<li><code>a + 30</code> = <code>5 + 30</code> = <code>35</code></li>
<li><code>35 - b</code> = <code>35 - 10</code> = <code>25</code></li>
</ul>
</li>
</ol>
<p>So, the value of <code>result</code> is <code>25</code>, and the program prints <code>25</code>.</p>
<ul>
<li><p><strong>A)</strong> <code>25</code></p>
<ul>
<li>This option is correct.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>35</code></p>
<ul>
<li>This option is incorrect.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>20</code> </p>
<ul>
<li>This option is incorrect.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>15</code> </p>
<ul>
<li>This option is incorrect.</li>
</ul>
</li>
</ul>
`},{id:"ch04-q3",chapter:"ch04",chapterTitle:"Chapter FOUR",chapterSubtitle:"Working with Data",number:3,multiSelect:!1,stemHtml:`<p>Which of the following statements about <code>String</code> and <code>StringBuilder</code> is true?</p>
`,options:[{letter:"A",html:`<p><code>StringBuilder</code> objects are immutable.</p>
`},{letter:"B",html:`<p><code>String</code> objects can be modified after they are created.</p>
`},{letter:"C",html:`<p><code>StringBuilder</code> is synchronized and thread-safe.</p>
`},{letter:"D",html:`<p><code>StringBuilder</code> provides methods for mutable sequence of characters.</p>
`},{letter:"E",html:`<p><code>String</code> and <code>StringBuilder</code> have the same performance characteristics for string manipulation.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>StringBuilder</code> objects are immutable.</p>
<ul>
<li>This option is incorrect. <code>StringBuilder</code> objects are mutable, meaning they can be changed after they are created.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>String</code> objects can be modified after they are created. </p>
<ul>
<li>This option is incorrect. <code>String</code> objects are immutable, meaning once a <code>String</code> object is created, it cannot be modified. Any modification results in a new <code>String</code> object.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>StringBuilder</code> is synchronized and thread-safe.</p>
<ul>
<li>This option is incorrect. <code>StringBuilder</code> is not synchronized and is not thread-safe. If synchronization is required, <code>StringBuffer</code> should be used instead.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>StringBuilder</code> provides methods for mutable sequence of characters.</p>
<ul>
<li>This option is correct. <code>StringBuilder</code> provides methods for a mutable sequence of characters, allowing for modification of the object without creating new instances.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>String</code> and <code>StringBuilder</code> have the same performance characteristics for string manipulation.</p>
<ul>
<li>This option is incorrect. <code>String</code> and <code>StringBuilder</code> do not have the same performance characteristics for string manipulation. <code>StringBuilder</code> is generally more efficient for such operations because it is mutable and does not create new instances with each modification.</li>
</ul>
</li>
</ul>
`},{id:"ch04-q4",chapter:"ch04",chapterTitle:"Chapter FOUR",chapterSubtitle:"Working with Data",number:4,multiSelect:!0,stemHtml:`<p>Which of the following statements about text blocks are true? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>Text blocks can span multiple lines without needing escape sequences for new lines.</p>
`},{letter:"B",html:`<p>Text blocks preserve the exact format, including whitespace, of the code as written.</p>
`},{letter:"C",html:`<p>Text blocks can only be used within methods.</p>
`},{letter:"D",html:`<p>Text blocks automatically trim leading and trailing whitespace from each line.</p>
`},{letter:"E",html:`<p>Text blocks require a minimum indentation level of one space.</p>
`}],correct:["A","B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Text blocks can span multiple lines without needing escape sequences for new lines.</p>
<ul>
<li>This option is correct. Text blocks can indeed span multiple lines without needing escape sequences for new lines, making it easier to work with multi-line strings.</li>
</ul>
</li>
<li><p><strong>B)</strong> Text blocks preserve the exact format, including whitespace, of the code as written.</p>
<ul>
<li>This option is correct. Text blocks preserve the exact format, including whitespace, of the code as written. This is useful for maintaining the original layout of the text.</li>
</ul>
</li>
<li><p><strong>C)</strong> Text blocks can only be used within methods.</p>
<ul>
<li>This option is incorrect. Text blocks can be used anywhere a regular <code>String</code> can be used, not just within methods. They can be part of class fields, method parameters, etc.</li>
</ul>
</li>
<li><p><strong>D)</strong> Text blocks automatically trim leading and trailing whitespace from each line. </p>
<ul>
<li>This option is incorrect. Text blocks do not automatically trim leading and trailing whitespace from each line. They preserve the exact whitespace as written in the code.</li>
</ul>
</li>
<li><p><strong>E)</strong> Text blocks require a minimum indentation level of one space.</p>
<ul>
<li>This option is incorrect. Text blocks do not require a minimum indentation level of one space. The leading indentation common to all lines is removed automatically, but lines within the text block can have zero or more leading spaces.</li>
</ul>
</li>
</ul>
`},{id:"ch04-q5",chapter:"ch04",chapterTitle:"Chapter FOUR",chapterSubtitle:"Working with Data",number:5,multiSelect:!1,stemHtml:`<p>Which of the following statements about the <code>Math</code> class is true?</p>
`,options:[{letter:"A",html:`<p>The <code>Math.round()</code> method returns a <code>double</code>.</p>
`},{letter:"B",html:`<p>The <code>Math.random()</code> method returns a random integer.</p>
`},{letter:"C",html:`<p>The <code>Math.max()</code> method can only be used with integers.</p>
`},{letter:"D",html:`<p>The <code>Math.pow()</code> method returns the result of raising the first argument to the power of the second argument.</p>
`},{letter:"E",html:`<p>The <code>Math.abs()</code> method can only be used with positive numbers.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Math.round()</code> method returns a <code>double</code>.</p>
<ul>
<li>This option is incorrect. The <code>Math.round()</code> method returns a <code>long</code> when given a <code>double</code> argument and an <code>int</code> when given a <code>float</code> argument.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>Math.random()</code> method returns a random integer.</p>
<ul>
<li>This option is incorrect. The <code>Math.random()</code> method returns a <code>double</code> value between 0.0 (inclusive) and 1.0 (exclusive).</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Math.max()</code> method can only be used with integers.</p>
<ul>
<li>This option is incorrect. The <code>Math.max()</code> method can be used with various numeric types, including <code>int</code>, <code>long</code>, <code>float</code>, and <code>double</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Math.pow()</code> method returns the result of raising the first argument to the power of the second argument.</p>
<ul>
<li>This option is correct. The <code>Math.pow()</code> method returns the result of raising the first argument to the power of the second argument. Both arguments are of type <code>double</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>Math.abs()</code> method can only be used with positive numbers.</p>
<ul>
<li>This option is incorrect. The <code>Math.abs()</code> method can be used with negative numbers to return their absolute value, and it works with various numeric types including <code>int</code>, <code>long</code>, <code>float</code>, and <code>double</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q1",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:1,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">IfStatementTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">x</span> <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
        <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">5</span>) {
            <span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">20</span>) {
                System.out.println(<span class="hljs-string">&quot;x is between 5 and 20&quot;</span>);
            }
        } <span class="hljs-keyword">else</span> {
            System.out.println(<span class="hljs-string">&quot;x is 5 or less&quot;</span>);
        }
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>x is between 5 and 20</code></p>
`},{letter:"B",html:`<p><code>x is 5 or less</code></p>
`},{letter:"C",html:`<p><code>x is greater than 20</code></p>
`},{letter:"D",html:`<p>The program does not compile</p>
`},{letter:"E",html:`<p>The program compiles but does not produce any output</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>x is between 5 and 20</code></p>
<ul>
<li>This option is correct. The value of <code>x</code> is 10, which satisfies both conditions in the nested <code>if</code> statements (<code>x &gt; 5</code> and <code>x &lt; 20</code>). Therefore, the program prints <code>&quot;x is between 5 and 20&quot;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>x is 5 or less</code> </p>
<ul>
<li>This option is incorrect. The value of <code>x</code> is 10, which does not satisfy the condition <code>x &lt;= 5</code> in the <code>else</code> block. Therefore, this message will not be printed.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>x is greater than 20</code></p>
<ul>
<li>This option is incorrect. The value of <code>x</code> is 10, which does not satisfy the condition <code>x &gt; 20</code>. Therefore, this message will not be printed.</li>
</ul>
</li>
<li><p><strong>D)</strong> The program does not compile </p>
<ul>
<li>This option is incorrect. The program compiles successfully without any errors.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program compiles but does not produce any output</p>
<ul>
<li>This option is incorrect. The program produces output because the value of <code>x</code> satisfies the conditions within the nested <code>if</code> statements, leading to the output <code>&quot;x is between 5 and 20&quot;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q2",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:2,multiSelect:!1,stemHtml:`<p>Given the following code:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">record</span> <span class="hljs-title class_">Person</span><span class="hljs-params">(String name, <span class="hljs-type">int</span> age)</span> {}
<span class="hljs-keyword">record</span> <span class="hljs-title class_">Employee</span><span class="hljs-params">(<span class="hljs-type">int</span> id, Person person)</span> {}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RecordPattern</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Employee</span> <span class="hljs-variable">emp</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Employee</span>(<span class="hljs-number">1001</span>, <span class="hljs-keyword">new</span> <span class="hljs-title class_">Person</span>(<span class="hljs-string">&quot;Alice&quot;</span>, <span class="hljs-number">30</span>));
                                            
        <span class="hljs-comment">// Insert code here</span>
    }
}
</code></pre><p>Which of the following options correctly uses record pattern matching in an <code>if</code> statement to extract and print the name and age of a <code>Person</code> record in Java 21?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> Employee) {
    <span class="hljs-keyword">var</span> (id, Person(name, age)) = emp;
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(_, Person(<span class="hljs-keyword">var</span> name, <span class="hljs-keyword">var</span> age)</span>)) {
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> Employee e) {
    System.out.println(e.person().name() + <span class="hljs-string">&quot; is &quot;</span> + e.person().age() + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(<span class="hljs-keyword">var</span> id, Person(<span class="hljs-keyword">var</span> name, <span class="hljs-keyword">var</span> age)</span>)) {
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre>`},{letter:"E",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(<span class="hljs-keyword">var</span> id, <span class="hljs-keyword">var</span> person)</span>) {
    System.out.println(person.name() + <span class="hljs-string">&quot; is &quot;</span> + person.age() + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> Employee) {
    <span class="hljs-keyword">var</span> (id, Person(name, age)) = emp;
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre><ul>
<li><p>This option is incorrect. While it attempts to use destructuring, this syntax is not valid in Java. Java doesn&#39;t support destructuring assignment in this way.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(_, Person(<span class="hljs-keyword">var</span> name, <span class="hljs-keyword">var</span> age)</span>)) {
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre><ul>
<li><p>This option is incorrect. It uses the underscore (<code>_</code>) to ignore the <code>id</code> field, which is not a valid technique in Java 21.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> Employee e) {
    System.out.println(e.person().name() + <span class="hljs-string">&quot; is &quot;</span> + e.person().age() + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre><ul>
<li><p>This option is incorrect. It uses traditional <code>instanceof</code> without pattern matching, relying on accessor methods to extract the data.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(<span class="hljs-keyword">var</span> id, Person(<span class="hljs-keyword">var</span> name, <span class="hljs-keyword">var</span> age)</span>)) {
    System.out.println(name + <span class="hljs-string">&quot; is &quot;</span> + age + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre><ul>
<li><p>This option is correct. It uses nested record pattern matching to extract both the <code>Employee</code> and <code>Person</code> data in a single step. It uses <code>var</code> for type inference and correctly names the variables <code>name</code> and <code>age</code> as required.</p>
</li>
<li><p><strong>E)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">if</span> (emp <span class="hljs-keyword">instanceof</span> <span class="hljs-title function_">Employee</span><span class="hljs-params">(<span class="hljs-keyword">var</span> id, <span class="hljs-keyword">var</span> person)</span>) {
    System.out.println(person.name() + <span class="hljs-string">&quot; is &quot;</span> + person.age() + <span class="hljs-string">&quot; years old.&quot;</span>);
}
</code></pre><ul>
<li>This option is incorrect. While it uses pattern matching for the <code>Employee</code> record, it doesn&#39;t nest the pattern matching for the <code>Person</code> record, so it still requires calling accessor methods on <code>person</code>.</li>
</ul>
`},{id:"ch05-q3",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:3,multiSelect:!1,stemHtml:`<p>Which of the following code snippets compile without error?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FlowScopingTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">x</span> <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
        <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">5</span>) {
            <span class="hljs-type">int</span> <span class="hljs-variable">y</span> <span class="hljs-operator">=</span> x * <span class="hljs-number">2</span>;
        }
        <span class="hljs-comment">// Code snippet 1</span>
        System.out.println(y);

        <span class="hljs-keyword">if</span> (x &lt; <span class="hljs-number">20</span>) {
            <span class="hljs-type">int</span> <span class="hljs-variable">z</span> <span class="hljs-operator">=</span> x + <span class="hljs-number">5</span>;
        }
        <span class="hljs-comment">// Code snippet 2</span>
        z += <span class="hljs-number">5</span>;

        <span class="hljs-type">int</span> <span class="hljs-variable">a</span> <span class="hljs-operator">=</span> <span class="hljs-number">5</span>;
        <span class="hljs-keyword">if</span> (a &gt; <span class="hljs-number">0</span>) {
            a = <span class="hljs-number">15</span>;
        }
        <span class="hljs-comment">// Code snippet 3</span>
        System.out.println(a);

        <span class="hljs-keyword">if</span> (x &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-type">int</span> <span class="hljs-variable">b</span> <span class="hljs-operator">=</span> x + <span class="hljs-number">3</span>;
            <span class="hljs-keyword">if</span> (b &gt; <span class="hljs-number">15</span>) {
                b -= <span class="hljs-number">2</span>;
            }
        }
        <span class="hljs-comment">// Code snippet 4</span>
        System.out.println(b);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p>Code snippet 1</p>
`},{letter:"B",html:`<p>Code snippet 2</p>
`},{letter:"C",html:`<p>Code snippet 3</p>
`},{letter:"D",html:`<p>None of the above</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Code snippet 1</p>
<ul>
<li>This option is incorrect. The variable <code>y</code> is declared inside the first <code>if</code> statement and is not accessible outside its block. Therefore, trying to print <code>y</code> outside its scope results in a compilation error.</li>
</ul>
</li>
<li><p><strong>B)</strong> Code snippet 2</p>
<ul>
<li>This option is incorrect. The variable <code>z</code> is declared inside the second <code>if</code> statement and is not accessible outside its block. Therefore, attempting to use <code>z</code> outside its scope results in a compilation error.</li>
</ul>
</li>
<li><p><strong>C)</strong> Code snippet 3</p>
<ul>
<li>This option is correct. The variable <code>a</code> is declared outside the <code>if</code> statement, so it is accessible both inside and outside the <code>if</code> block. Reassigning a inside the <code>if</code> block is allowed.</li>
</ul>
</li>
<li><p><strong>D)</strong> None of the above</p>
<ul>
<li>This option is incorrect. While it&#39;s true that code snippets 1, 2 and 4 will not compile, code snippet 3 does compile without any errors. Therefore, the answer cannot be &quot;none of the above&quot;.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q4",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:4,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">dayOfWeek</span> <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        String dayType;
        <span class="hljs-keyword">switch</span> (dayOfWeek) {
            <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
            <span class="hljs-keyword">case</span> <span class="hljs-number">7</span>:
                dayType = <span class="hljs-string">&quot;Weekend&quot;</span>;
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
            <span class="hljs-keyword">case</span> <span class="hljs-number">3</span>:
            <span class="hljs-keyword">case</span> <span class="hljs-number">4</span>:
            <span class="hljs-keyword">case</span> <span class="hljs-number">5</span>:
            <span class="hljs-keyword">case</span> <span class="hljs-number">6</span>:
                dayType = <span class="hljs-string">&quot;Weekday&quot;</span>;
                <span class="hljs-keyword">break</span>;
            <span class="hljs-keyword">default</span>:
                dayType = <span class="hljs-string">&quot;Invalid day&quot;</span>;
        }
        System.out.println(dayType);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Weekend</code></p>
`},{letter:"B",html:`<p><code>Invalid day</code></p>
`},{letter:"C",html:`<p><code>Weekday</code></p>
`},{letter:"D",html:`<p>The program does not compile</p>
`},{letter:"E",html:`<p>The program compiles but does not produce any output</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Weekend</code> </p>
<ul>
<li>This option is incorrect. The value of <code>dayOfWeek</code> is 3, which does not match cases 1 or 7, so it does not print <code>&quot;Weekend&quot;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Invalid day</code></p>
<ul>
<li>This option is incorrect. The default case is not executed because the value of <code>dayOfWeek</code> matches one of the specific cases (2, 3, 4, 5, or 6).</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Weekday</code></p>
<ul>
<li>This option is correct. The value of <code>dayOfWeek</code> is 3, which matches case 3. Therefore, the variable <code>dayType</code> is set to <code>&quot;Weekday&quot;</code>, and this value is printed.</li>
</ul>
</li>
<li><p><strong>D)</strong> The program does not compile</p>
<ul>
<li>This option is incorrect. The program compiles without errors.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program compiles but does not produce any output</p>
<ul>
<li>This option is incorrect. The program compiles and produces output, which is <code>&quot;Weekday&quot;</code> based on the given <code>dayOfWeek</code> value.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q5",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:5,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchExpressionTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">score</span> <span class="hljs-operator">=</span> <span class="hljs-number">85</span>;
        <span class="hljs-type">String</span> <span class="hljs-variable">grade</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">switch</span> (score) {
            <span class="hljs-keyword">case</span> <span class="hljs-number">90</span>, <span class="hljs-number">100</span> -&gt; <span class="hljs-string">&quot;A&quot;</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-number">80</span>, <span class="hljs-number">89</span> -&gt; <span class="hljs-string">&quot;B&quot;</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-number">70</span>, <span class="hljs-number">79</span> -&gt; <span class="hljs-string">&quot;C&quot;</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-number">60</span>, <span class="hljs-number">69</span> -&gt; <span class="hljs-string">&quot;D&quot;</span>;
            <span class="hljs-keyword">default</span> -&gt; <span class="hljs-string">&quot;F&quot;</span>;
        };
        System.out.println(grade);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>A</code></p>
`},{letter:"B",html:`<p><code>F</code></p>
`},{letter:"C",html:`<p>The program does not compile</p>
`},{letter:"D",html:`<p><code>B</code></p>
`},{letter:"E",html:`<p>The program compiles but does not produce any output</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>A</code></p>
<ul>
<li>This option is incorrect. The value of <code>score</code> is 85, which does not match the cases for 90 or 100. Therefore, it does not print <code>&quot;A&quot;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>F</code></p>
<ul>
<li>This option is correct. The default case is executed because the value of <code>score</code> doesn&#39;t match any of the other <code>case</code> statements.</li>
</ul>
</li>
<li><p><strong>C)</strong> The program does not compile </p>
<ul>
<li>This option is incorrect. The program uses a <code>switch</code> expression correctly, compiling without errors.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>B</code></p>
<ul>
<li>This option is incorrect. The value of <code>score</code> is 85, which doesn&#39;t match the case for 80 or 89.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program compiles but does not produce any output</p>
<ul>
<li>This option is incorrect. The program compiles and produces output, which is <code>&quot;F&quot;</code> based on the given <code>score</code> value.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q6",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:6,multiSelect:!1,stemHtml:`<p>Given the following code:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchEnums</span> {
    <span class="hljs-keyword">sealed</span> <span class="hljs-keyword">interface</span> <span class="hljs-title class_">Vehicle</span> <span class="hljs-keyword">permits</span> CarType {}
    <span class="hljs-keyword">enum</span> <span class="hljs-title class_">CarType</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Vehicle</span> { SEDAN, SUV, HATCHBACK, CONVERTIBLE }

    <span class="hljs-keyword">void</span> <span class="hljs-title function_">processVehicle</span><span class="hljs-params">(Vehicle v)</span> {
        <span class="hljs-keyword">switch</span>(v) {
            <span class="hljs-comment">// Insert case statements here</span>
        }
    }
}
</code></pre><p>Which of the following <code>case</code> statements are valid in Java 21 when inserted in the <code>switch</code> expression?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> CarType.SEDAN, CarType.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> SEDAN, HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> CarType.SEDAN || CarType.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Vehicle.SEDAN, Vehicle.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> Vehicle.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> Vehicle.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre>`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> CarType.SEDAN, CarType.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre><ul>
<li><p>This option is correct. In Java 21, you can use fully qualified names of enum constants in switch statements, even when the selector expression is of a type that&#39;s assignment-compatible with the enum type (in this case, <code>Vehicle</code> is assignment-compatible with <code>CarType</code>).</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> SEDAN, HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre><ul>
<li><p>This option is incorrect. When using an interface type (<code>Vehicle</code>) as the selector expression, you must use fully qualified names for the enum constants. Using unqualified names (<code>SEDAN</code>, <code>HATCHBACK</code>, etc.) will result in a compilation error.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> CarType.SEDAN || CarType.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> CarType.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre><ul>
<li><p>This option is incorrect. It attempts to use the logical OR operator (<code>||</code>) in the case label, which is not valid syntax for switch statements. Multiple case labels should be separated by commas, not logical operators.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Vehicle.SEDAN, Vehicle.HATCHBACK -&gt; System.out.println(<span class="hljs-string">&quot;Compact vehicle&quot;</span>);
<span class="hljs-keyword">case</span> Vehicle.SUV -&gt; System.out.println(<span class="hljs-string">&quot;Large vehicle&quot;</span>);
<span class="hljs-keyword">case</span> Vehicle.CONVERTIBLE -&gt; System.out.println(<span class="hljs-string">&quot;Open-top vehicle&quot;</span>);
</code></pre><ul>
<li>This option is incorrect. Although it uses fully qualified names, it incorrectly prefixes the enum constants with <code>Vehicle</code> instead of <code>CarType</code>. The enum constants belong to the <code>CarType</code> enum, not the <code>Vehicle</code> interface, so this will result in a compilation error.</li>
</ul>
`},{id:"ch05-q7",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:7,multiSelect:!1,stemHtml:`<p>Given the following code:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">sealed</span> <span class="hljs-keyword">interface</span> <span class="hljs-title class_">Shape</span> <span class="hljs-keyword">permits</span> Circle, Square, Triangle {}
<span class="hljs-keyword">record</span> <span class="hljs-title class_">Circle</span><span class="hljs-params">(<span class="hljs-type">double</span> radius)</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Shape</span> {}
<span class="hljs-keyword">record</span> <span class="hljs-title class_">Square</span><span class="hljs-params">(<span class="hljs-type">double</span> side)</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Shape</span> {}
<span class="hljs-keyword">record</span> <span class="hljs-title class_">Triangle</span><span class="hljs-params">(<span class="hljs-type">double</span> base, <span class="hljs-type">double</span> height)</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Shape</span> {}

<span class="hljs-type">Shape</span> <span class="hljs-variable">shape</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Circle</span>(<span class="hljs-number">5</span>);
<span class="hljs-type">double</span> <span class="hljs-variable">area</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">switch</span> (shape) {
    <span class="hljs-comment">// Insert case statements here</span>
};
</code></pre><p>Which of the following <code>case</code> statements correctly implements pattern matching for the <code>Shap</code>e hierarchy when inserted in the <code>switch</code> expression?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> <span class="hljs-literal">null</span> -&gt; <span class="hljs-number">0</span>;
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">default</span> -&gt; <span class="hljs-number">0</span>;
<span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> Triangle t -&gt; <span class="hljs-number">0.5</span> * t.base() * t.height();
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Circle -&gt;
        Math.PI * ((Circle)s).radius() * ((Circle)s).radius();
<span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Square -&gt;
        ((Square)s).side() * ((Square)s).side();
<span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Triangle -&gt;
        <span class="hljs-number">0.5</span> * ((Triangle)s).base() * ((Triangle)s).height();
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> Triangle t -&gt; <span class="hljs-number">0.5</span> * t.base() * t.height();
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> <span class="hljs-literal">null</span> -&gt; <span class="hljs-number">0</span>;
</code></pre><ul>
<li><p>This option is incorrect. It doesn&#39;t compile because the <code>switch</code> expression is not exhaustive, it does not cover all possible <code>Shape</code> values.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">default</span> -&gt; <span class="hljs-number">0</span>;
<span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> Triangle t -&gt; <span class="hljs-number">0.5</span> * t.base() * t.height();
</code></pre><ul>
<li><p>This option is incorrect. It doesn&#39;t compile because the (unnecessary) <code>default</code> case comes before the rest of the <code>case</code> statements.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Circle -&gt;
        Math.PI * ((Circle)s).radius() * ((Circle)s).radius();
<span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Square -&gt;
        ((Square)s).side() * ((Square)s).side();
<span class="hljs-keyword">case</span> Shape s <span class="hljs-keyword">when</span> s <span class="hljs-keyword">instanceof</span> Triangle -&gt;
        <span class="hljs-number">0.5</span> * ((Triangle)s).base() * ((Triangle)s).height();
</code></pre><ul>
<li><p>This option is incorrect. It doesn&#39;t compile because it&#39;s not exhaustive. Since it uses verbose <code>instanceof</code> checks instead of leveraging pattern matching, it&#39;s missing a <code>default</code> branch.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">case</span> Circle c -&gt; Math.PI * c.radius() * c.radius();
<span class="hljs-keyword">case</span> Square s -&gt; s.side() * s.side();
<span class="hljs-keyword">case</span> Triangle t -&gt; <span class="hljs-number">0.5</span> * t.base() * t.height();
</code></pre><ul>
<li>This option is correct. It covers all possible subtypes of the sealed <code>Shape</code> interface without an unnecessary <code>default</code> case.</li>
</ul>
`},{id:"ch05-q8",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:8,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">LabeledBreakTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">count</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        outerLoop:
        <span class="hljs-keyword">while</span> (count &lt; <span class="hljs-number">5</span>) {
            <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
                count++;
                <span class="hljs-keyword">if</span> (count == <span class="hljs-number">3</span>) {
                    <span class="hljs-keyword">break</span> outerLoop;
                }
            }
        }
        System.out.println(count);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>2</code></p>
`},{letter:"B",html:`<p><code>3</code></p>
`},{letter:"C",html:`<p><code>4</code></p>
`},{letter:"D",html:`<p><code>5</code></p>
`},{letter:"E",html:`<p>The program does not compile</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>2</code></p>
<ul>
<li>This option is incorrect. The value of <code>count</code> is incremented until it reaches 3. The labeled <code>break</code> statement breaks out of the outer loop when <code>count</code> equals 3.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>3</code></p>
<ul>
<li>This option is correct. The value of <code>count</code> is incremented inside the inner <code>while</code> loop. When <code>count</code> reaches 3, the labeled <code>break</code> statement (<code>break outerLoop</code>) is executed, causing the control to exit the outer loop. Therefore, <code>count</code> is 3 when printed.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>4</code></p>
<ul>
<li>This option is incorrect. The loop does not continue incrementing <code>count</code> to 4 because the labeled <code>break</code> statement exits the loop when <code>count</code> is 3.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>5</code></p>
<ul>
<li>This option is incorrect. The loop does not continue incrementing <code>count</code> to 5 because the labeled <code>break</code> statement exits the loop when <code>count</code> is 3.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program does not compile</p>
<ul>
<li>This option is incorrect. The program compiles successfully and runs without errors.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q9",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:9,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ForLoopTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {
            sum += i;
        }
        System.out.println(sum);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>5</code></p>
`},{letter:"B",html:`<p><code>10</code></p>
`},{letter:"C",html:`<p><code>15</code></p>
`},{letter:"D",html:`<p><code>20</code></p>
`},{letter:"E",html:`<p>The program does not compile</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>5</code></p>
<ul>
<li>This option is incorrect. The value 5 is just the upper limit of the loop and not the sum of the integers from 1 to 5.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>10</code></p>
<ul>
<li>This option is incorrect. The value 10 is less than the sum of the integers from 1 to 5.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>15</code></p>
<ul>
<li>This option is correct. The loop iterates from 1 to 5, adding each value of <code>i</code> to <code>sum</code>. The calculations are as follows: 1 + 2 + 3 + 4 + 5 = 15.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>20</code></p>
<ul>
<li>This option is incorrect. The value 20 is more than the sum of the integers from 1 to 5.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program does not compile</p>
<ul>
<li>This option is incorrect. The program compiles successfully and runs without errors.</li>
</ul>
</li>
</ul>
`},{id:"ch05-q10",chapter:"ch05",chapterTitle:"Chapter FIVE",chapterSubtitle:"Controlling Program Flow",number:10,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">EnhancedForLoopTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span>[] numbers = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>};
        <span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> num : numbers) {
            <span class="hljs-keyword">if</span> (num % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>) {
                <span class="hljs-keyword">continue</span>;
            }
            sum += num;
        }
        System.out.println(sum);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>9</code></p>
`},{letter:"B",html:`<p><code>10</code></p>
`},{letter:"C",html:`<p><code>12</code></p>
`},{letter:"D",html:`<p><code>15</code></p>
`},{letter:"E",html:`<p>The program does not compile</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>9</code></p>
<ul>
<li>This option is correct. The <code>continue</code> statement skips the current iteration when the number is even (<code>num % 2 == 0</code>). The odd numbers in the array are 1, 3, and 5. Their sum is 1 + 3 + 5 = 9.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>10</code></p>
<ul>
<li>This option is incorrect. The sum of the odd numbers (1, 3, and 5) is 9, not 10.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>12</code></p>
<ul>
<li>This option is incorrect. The sum of the odd numbers (1, 3, and 5) is 9, not 12.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>15</code></p>
<ul>
<li>This option is incorrect. The sum of all the numbers in the array (1 + 2 + 3 + 4 + 5) is 15, but the <code>continue</code> statement causes the loop to skip adding the even numbers.</li>
</ul>
</li>
<li><p><strong>E)</strong> The program does not compile</p>
<ul>
<li>This option is incorrect. The program compiles successfully and runs without errors.</li>
</ul>
</li>
</ul>
`},{id:"ch06-q1",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:1,multiSelect:!1,stemHtml:`<p>What is the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MultiDimArray</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span>[][] arr = <span class="hljs-keyword">new</span> <span class="hljs-title class_">int</span>[<span class="hljs-number">2</span>][<span class="hljs-number">3</span>];
        <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i &lt; arr.length; i++) {
            <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">j</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; j &lt; arr[i].length; j++) {
                arr[i][j] = i + j;
            }
        }
        <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i &lt; arr.length; i++) {
            <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">j</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; j &lt; arr[i].length; j++) {
                System.out.print(arr[i][j] + <span class="hljs-string">&quot; &quot;</span>);
            }
            System.out.println();
        }
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code>0 0 0
0 0 0
</code></pre>`},{letter:"B",html:`<pre><code>0 1 2
0 1 2
</code></pre>`},{letter:"C",html:`<pre><code>0 0 0
1 1 1
</code></pre>`},{letter:"D",html:`<pre><code>0 1 2
1 2 3
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>0 0 0 
0 0 0 
</code></pre><ul>
<li><p>This option is incorrect because the array elements are initialized and modified within the loops. The values are not all zeros.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>0 1 2 
0 1 2 
</code></pre><ul>
<li><p>This option is incorrect because each row is initialized with incremental values based on the sum of indices, not identical for both rows.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>0 0 0 
1 1 1 
</code></pre><ul>
<li><p>This option is incorrect because the values should be the sum of the row index and the column index, not all zeros or all ones for the second row.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>0 1 2 
1 2 3 
</code></pre><ul>
<li>This is the correct answer. Each element of the array is set to the sum of its indices. So, <code>arr[0][0] = 0 + 0 = 0</code>, <code>arr[0][1] = 0 + 1 = 1</code>, <code>arr[0][2] = 0 + 2 = 2</code>, <code>arr[1][0] = 1 + 0 = 1</code>, <code>arr[1][1] = 1 + 1 = 2</code>, <code>arr[1][2] = 1 + 2 = 3</code>.</li>
</ul>
`},{id:"ch06-q2",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:2,multiSelect:!1,stemHtml:`<p>Which of the following generic method definitions correctly declares a method that returns the first element of a given array?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> T <span class="hljs-title function_">getFirstElement</span><span class="hljs-params">(T[] array)</span> {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; T <span class="hljs-title function_">getFirstElement</span><span class="hljs-params">(T[] array)</span> {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; getFirstElement(T[] array) {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; T[] getFirstElement(T[] array) {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> T <span class="hljs-title function_">getFirstElement</span><span class="hljs-params">(T[] array)</span> {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre><ul>
<li><p>This option is incorrect because the generic type <code>&lt;T&gt;</code> is missing before the return type <code>T</code>.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; T <span class="hljs-title function_">getFirstElement</span><span class="hljs-params">(T[] array)</span> {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre><ul>
<li><p>This is the correct answer. The generic type <code>&lt;T&gt;</code> is correctly declared before the return type <code>T</code>.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; getFirstElement(T[] array) {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre><ul>
<li><p>This option is incorrect because the return type <code>T</code> is missing.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> &lt;T&gt; T[] getFirstElement(T[] array) {
    <span class="hljs-keyword">return</span> array[<span class="hljs-number">0</span>];
}
</code></pre><ul>
<li>This option is incorrect because the return type is <code>T[]</code>, which does not match the intended method return type.</li>
</ul>
`},{id:"ch06-q3",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:3,multiSelect:!1,stemHtml:`<p>What is the result of compiling and running the following code?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">WildcardTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">printList</span><span class="hljs-params">(List&lt;? extends Number&gt; list)</span> {
        <span class="hljs-keyword">for</span> (Number n : list) {
            System.out.print(n + <span class="hljs-string">&quot; &quot;</span>);
        }
        System.out.println();
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;Integer&gt; ints = Arrays.asList(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);
        List&lt;Double&gt; doubles = Arrays.asList(<span class="hljs-number">1.1</span>, <span class="hljs-number">2.2</span>, <span class="hljs-number">3.3</span>);
        List&lt;String&gt; strings = Arrays.asList(<span class="hljs-string">&quot;one&quot;</span>, <span class="hljs-string">&quot;two&quot;</span>, <span class="hljs-string">&quot;three&quot;</span>);
        
        printList(ints);
        printList(doubles);
        printList(strings);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p>The code compiles and prints:</p>
<pre><code>1 2 3
1.1 2.2 3.3
one two three
</code></pre>`},{letter:"B",html:`<p>The code compiles and prints:</p>
<pre><code>1 2 3
1.1 2.2 3.3
</code></pre>`},{letter:"C",html:`<p>The code does not compile due to an error in the <code>printList</code> method.</p>
`},{letter:"D",html:`<p>The code does not compile due to an error in the <code>main</code> method.</p>
`},{letter:"E",html:`<p>The code compiles but throws a runtime exception when executed.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<p><strong>A)</strong> The code compiles and prints:</p>
<pre><code>1 2 3
1.1 2.2 3.3
one two three
</code></pre><ul>
<li>This option is incorrect. The code does not compile, so it cannot produce any output.</li>
</ul>
<p><strong>B)</strong> The code compiles and prints:</p>
<pre><code>1 2 3
1.1 2.2 3.3
</code></pre><ul>
<li>This option is incorrect. While this would be the output if the <code>printList(strings)</code> line were removed, the code as written does not compile.</li>
</ul>
<p><strong>C)</strong> The code does not compile due to an error in the <code>printList</code> method.</p>
<ul>
<li>This option is incorrect. The <code>printList</code> method is correctly defined using an upper bound wildcard <code>&lt;? extends Number&gt;</code>.</li>
</ul>
<p><strong>D)</strong> The code does not compile due to an error in the <code>main</code> method.</p>
<ul>
<li>This option is correct. The code fails to compile due to an error in the <code>main</code> method. <code>printList(strings)</code> causes a compilation error because <code>String</code> is not a subclass of <code>Number</code>.</li>
</ul>
<p><strong>E)</strong> The code compiles but throws a runtime exception when executed.</p>
<ul>
<li>This option is incorrect. The code fails to compile so it cannot be executed.</li>
</ul>
`},{id:"ch06-q4",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:4,multiSelect:!1,stemHtml:`<p>What is the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ListExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ArrayList</span>&lt;&gt;(Arrays.asList(<span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;B&quot;</span>, <span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;D&quot;</span>));
        list.add(<span class="hljs-number">2</span>, <span class="hljs-string">&quot;E&quot;</span>);
        System.out.println(list);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>[A, B, E, C, D]</code></p>
`},{letter:"B",html:`<p><code>[A, E, B, C, D]</code></p>
`},{letter:"C",html:`<p><code>[A, B, C, E, D]</code></p>
`},{letter:"D",html:`<p><code>[A, B, C, D, E]</code></p>
`},{letter:"E",html:`<p><code>[A, C, B, E, D]</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>[A, B, E, C, D]</code></p>
<ul>
<li>This option is correct. The <code>add</code> method with an index parameter inserts the specified element at the specified position in the list. All elements after the specified position are shifted to the right. Hence, <code>&quot;E&quot;</code> is inserted at index 2, pushing <code>&quot;C&quot;</code> and <code>&quot;D&quot;</code> to the right.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>[A, E, B, C, D]</code></p>
<ul>
<li>This option is incorrect. This would be the result if <code>&quot;E&quot;</code> were added at index 1, not index 2.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>[A, B, C, E, D]</code></p>
<ul>
<li>This option is incorrect. This would be the result if <code>&quot;E&quot;</code> were added at index 3, not index 2.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>[A, B, C, D, E]</code></p>
<ul>
<li>This option is incorrect. This would be the result if <code>&quot;E&quot;</code> were added at the end of the list, not at index 2.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>[A, C, B, E, D]</code></p>
<ul>
<li>This option is incorrect. This sequence does not follow the proper behavior of the <code>add</code> method with index 2. It seems like a random shuffle and doesn&#39;t correspond to how elements are shifted when a new element is added.</li>
</ul>
</li>
</ul>
`},{id:"ch06-q5",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:5,multiSelect:!0,stemHtml:`<p>Which of the following statements about the <code>Set</code> interface are true? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>A <code>Set</code> allows duplicate elements.</p>
`},{letter:"B",html:`<p>Elements in a <code>Set</code> are maintained in the order they were inserted.</p>
`},{letter:"C",html:`<p>The <code>Set</code> interface includes methods for adding, removing, and checking the presence of elements.</p>
`},{letter:"D",html:`<p>The <code>Set</code> interface is implemented by classes like <code>HashSet</code>, <code>LinkedHashSet</code>, and <code>TreeSet</code>.</p>
`},{letter:"E",html:`<p>A <code>Set</code> guarantees constant-time performance for the basic operations (add, remove, contains).</p>
`}],correct:["C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A <code>Set</code> allows duplicate elements.</p>
<ul>
<li>This option is incorrect. One of the primary characteristics of a <code>Set</code> is that it does not allow duplicate elements. Each element must be unique.</li>
</ul>
</li>
<li><p><strong>B)</strong> Elements in a <code>Set</code> are maintained in the order they were inserted.</p>
<ul>
<li>This option is incorrect. The ordering of elements depends on the specific implementation of the <code>Set</code> interface. For example, <code>HashSet</code> does not maintain any order, while <code>LinkedHashSet</code> maintains insertion order, and <code>TreeSet</code> maintains a sorted order.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>Set</code> interface includes methods for adding, removing, and checking the presence of elements.</p>
<ul>
<li>This option is correct. The <code>Set</code> interface provides methods such as <code>add()</code>, <code>remove()</code>, and <code>contains()</code> to manage its elements.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>Set</code> interface is implemented by classes like <code>HashSet</code>, <code>LinkedHashSet</code>, and <code>TreeSet</code>.</p>
<ul>
<li>This option is correct. <code>HashSet</code>, <code>LinkedHashSet</code>, and <code>TreeSet</code> are all concrete implementations of the <code>Set</code> interface, each with different characteristics regarding order and performance.</li>
</ul>
</li>
<li><p><strong>E)</strong> A <code>Set</code> guarantees constant-time performance for the basic operations (add, remove, contains).</p>
<ul>
<li>This option is incorrect. This statement is true for <code>HashSet</code> specifically, which provides average constant-time performance for these operations. However, it is not true for all <code>Set</code> implementations. For example, <code>TreeSet</code> provides logarithmic time performance for these operations because it is based on a Red-Black tree.</li>
</ul>
</li>
</ul>
`},{id:"ch06-q6",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:6,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DequeExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        Deque&lt;String&gt; deque = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ArrayDeque</span>&lt;&gt;();
        deque.addFirst(<span class="hljs-string">&quot;A&quot;</span>);
        deque.addLast(<span class="hljs-string">&quot;B&quot;</span>);
        deque.addFirst(<span class="hljs-string">&quot;C&quot;</span>);
        deque.addLast(<span class="hljs-string">&quot;D&quot;</span>);

        System.out.println(deque);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>[A, B, C, D]</code></p>
`},{letter:"B",html:`<p><code>[C, B, A, D]</code></p>
`},{letter:"C",html:`<p><code>[C, A, B, D]</code></p>
`},{letter:"D",html:`<p><code>[D, B, A, C]</code></p>
`},{letter:"E",html:`<p><code>[A, C, B, D]</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>[A, B, C, D]</code></p>
<ul>
<li>This option is incorrect.This option ignores the order in which elements are added to the deque. It simply lists elements in the order they appear to be added without considering the <code>addFirst</code> and <code>addLast</code> methods.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>[C, B, A, D]</code></p>
<ul>
<li>This option is incorrect. This option incorrectly assumes <code>&quot;A&quot;</code> is added after <code>&quot;B&quot;</code>, howerver, <code>addFirst(&quot;A&quot;)</code> puts <code>&quot;A&quot;</code> at the second position.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>[C, A, B, D]</code></p>
<ul>
<li>This option is correct. This is indeed the correct output. The method <code>addFirst(&quot;C&quot;)</code> puts &quot;C&quot; at the front, <code>addFirst(&quot;A&quot;)</code> puts <code>&quot;A&quot;</code> at the second position, <code>addLast(&quot;B&quot;)</code> adds <code>&quot;B&quot;</code> after <code>&quot;A&quot;</code>, and <code>addLast(&quot;D&quot;)</code> adds <code>&quot;D&quot;</code> at the end. Thus, the final order is <code>[C, A, B, D]</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>[D, B, A, C]</code></p>
<ul>
<li>This option is incorrect. This option shows the reverse order, which does not match how elements are actually added to the deque.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>[A, C, B, D]</code></p>
<ul>
<li>This option is incorrect. This option incorrectly assumes <code>&quot;A&quot;</code> is added before <code>&quot;C&quot;</code> despite <code>addFirst(&quot;C&quot;)</code> being called after <code>addFirst(&quot;A&quot;)</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch06-q7",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:7,multiSelect:!1,stemHtml:`<p>What will be the output of the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MapExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        Map&lt;Integer, String&gt; map = <span class="hljs-keyword">new</span> <span class="hljs-title class_">HashMap</span>&lt;&gt;();
        map.put(<span class="hljs-number">1</span>, <span class="hljs-string">&quot;A&quot;</span>);
        map.put(<span class="hljs-number">2</span>, <span class="hljs-string">&quot;B&quot;</span>);
        map.put(<span class="hljs-number">3</span>, <span class="hljs-string">&quot;C&quot;</span>);
        map.put(<span class="hljs-number">2</span>, <span class="hljs-string">&quot;D&quot;</span>);

        System.out.println(map);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>{1=A, 2=B, 3=C, 2=D}</code></p>
`},{letter:"B",html:`<p><code>{1=A, 2=B, 3=C}</code></p>
`},{letter:"C",html:`<p><code>{1=A, 2=D, 3=C, 2=D}</code></p>
`},{letter:"D",html:`<p><code>{1=A, 2=D, 3=C}</code></p>
`},{letter:"E",html:`<p><code>{1=A, 3=C, 2=B}</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>{1=A, 2=B, 3=C, 2=D}</code></p>
<ul>
<li>This option is incorrect. This option suggests that the map would keep duplicate keys, which is not true for a <code>Map</code>. A key can only have one value associated with it at a time.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>{1=A, 2=B, 3=C}</code></p>
<ul>
<li>This option is incorrect. This option ignores the fact that the value associated with key <code>2</code> is updated from <code>&quot;B&quot;</code> to <code>&quot;D&quot;</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>{1=A, 2=D, 3=C, 2=D}</code></p>
<ul>
<li>This option is incorrect. This option again suggests that the map can have duplicate keys, which it cannot.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>{1=A, 2=D, 3=C}</code></p>
<ul>
<li>This option is correct. The <code>put</code> method updates the value associated with a key if the key already exists in the map. Therefore, the value associated with key <code>2</code> is updated from <code>&quot;B&quot;</code> to <code>&quot;D&quot;</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>{1=A, 3=C, 2=B}</code></p>
<ul>
<li>This option is incorrect. This option ignores the update to the value associated with key <code>2</code> from <code>&quot;B&quot;</code> to <code>&quot;D&quot;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch06-q8",chapter:"ch06",chapterTitle:"Chapter SIX",chapterSubtitle:"Arrays, Generics, and Collections",number:8,multiSelect:!1,stemHtml:`<p>What is the result of running the following program?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ComparableExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;Person&gt; people = <span class="hljs-keyword">new</span> <span class="hljs-title class_">ArrayList</span>&lt;&gt;();
        people.add(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Person</span>(<span class="hljs-string">&quot;Alice&quot;</span>, <span class="hljs-number">30</span>));
        people.add(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Person</span>(<span class="hljs-string">&quot;Bob&quot;</span>, <span class="hljs-number">25</span>));
        people.add(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Person</span>(<span class="hljs-string">&quot;Charlie&quot;</span>, <span class="hljs-number">35</span>));

        Collections.sort(people);

        <span class="hljs-keyword">for</span> (Person p : people) {
            System.out.println(p.getName() + <span class="hljs-string">&quot; &quot;</span> + p.getAge());
        }
    }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">Person</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Comparable</span>&lt;Person&gt; {
    <span class="hljs-keyword">private</span> String name;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Person</span><span class="hljs-params">(String name, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.name = name;
        <span class="hljs-built_in">this</span>.age = age;
    }

    <span class="hljs-keyword">public</span> String <span class="hljs-title function_">getName</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> name;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">getAge</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> age;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">compareTo</span><span class="hljs-params">(Person other)</span> {
        <span class="hljs-keyword">return</span> Integer.compare(<span class="hljs-built_in">this</span>.age, other.age);
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code>Alice 30
Bob 25
Charlie 35
</code></pre>`},{letter:"B",html:`<pre><code>Charlie 35
Alice 30
Bob 25
</code></pre>`},{letter:"C",html:`<pre><code>Bob 25
Alice 30
Charlie 35
</code></pre>`},{letter:"D",html:`<pre><code>Bob 25
Charlie 35
Alice 30
</code></pre>`},{letter:"E",html:`<pre><code>Alice 30
Charlie 35
Bob 25
</code></pre>`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>Alice 30  
Bob 25  
Charlie 35
</code></pre><ul>
<li><p>This option is incorrect. This option lists the elements in their original order, not the sorted order based on age.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>Charlie 35  
Alice 30  
Bob 25
</code></pre><ul>
<li><p>This option is incorrect. This option lists the elements in descending order of age, but the <code>compareTo</code> method sorts in ascending order of age.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>Bob 25  
Alice 30  
Charlie 35
</code></pre><ul>
<li><p>This option is correct. The <code>compareTo</code> method sorts the <code>Person</code> objects in ascending order based on their age. Hence, the sorted order is <code>Bob (25)</code>, <code>Alice (30)</code>, and <code>Charlie (35)</code>.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>Bob 25  
Charlie 35  
Alice 30
</code></pre><ul>
<li><p>This option is incorrect. This option does not correctly follow the ascending order of age.</p>
</li>
<li><p><strong>E)</strong></p>
</li>
</ul>
<pre><code>Alice 30  
Charlie 35  
Bob 25
</code></pre><ul>
<li>This option is incorrect. This option does not correctly follow the ascending order of age.</li>
</ul>
<p><strong>9 .The correct answer is A.</strong></p>
<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>Bob 25  
Alice 30  
Charlie 35
</code></pre><ul>
<li><p>This option is incorrect. The <code>AgeComparator</code> sorts the <code>Person</code> objects in ascending order based on their age. Hence, the sorted order is <code>Bob (25)</code>, <code>Alice (30)</code>, and <code>Charlie (35)</code>.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>Charlie 35  
Alice 30  
Bob 25
</code></pre><ul>
<li><p>This option is incorrect. This option lists the elements in descending order of age, but the <code>AgeComparator</code> sorts in ascending order of age.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>Alice 30  
Bob 25  
Charlie 35
</code></pre><ul>
<li><p>This option is incorrect. This option does not correctly follow the ascending order of age.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>Bob 25  
Charlie 35  
Alice 30
</code></pre><ul>
<li><p>This option is incorrect. This option does not correctly follow the ascending order of age.</p>
</li>
<li><p><strong>E)</strong></p>
</li>
</ul>
<pre><code>Alice 30  
Charlie 35  
Bob 25
</code></pre><ul>
<li>This option is incorrect. This option does not correctly follow the ascending order of age.</li>
</ul>
`},{id:"ch07-q1",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:1,multiSelect:!1,stemHtml:`<p>Which of the following statements correctly describes a checked exception in Java?</p>
`,options:[{letter:"A",html:`<p>A checked exception is a type of exception that inherits from the <code>java.lang.RuntimeException</code> class.</p>
`},{letter:"B",html:`<p>A checked exception must be either caught or declared in the method signature using the <code>throws</code> keyword.</p>
`},{letter:"C",html:`<p>A checked exception is an error that is typically caused by the environment in which the application is running, and it cannot be handled by the application.</p>
`},{letter:"D",html:`<p>A checked exception can be thrown by the Java Virtual Machine when a severe error occurs, such as an out-of-memory error.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> A checked exception is a type of exception that inherits from the <code>java.lang.RuntimeException</code> class.</p>
<ul>
<li>This option is incorrect. A checked exception does not inherit from <code>java.lang.RuntimeException</code>. Checked exceptions are subclasses of <code>java.lang.Exception</code> but not of <code>java.lang.RuntimeException</code>.</li>
</ul>
</li>
<li><p><strong>B.</strong> A checked exception must be either caught or declared in the method signature using the <code>throws</code> keyword.</p>
<ul>
<li>This option is correct. Checked exceptions must be either caught using a <code>try-catch</code> block or declared in the method signature with the <code>throws</code> keyword. This is to ensure that the exception is properly handled at some point in the code.</li>
</ul>
</li>
<li><p><strong>C.</strong> A checked exception is an error that is typically caused by the environment in which the application is running, and it cannot be handled by the application.</p>
<ul>
<li>This option is incorrect. It describes errors more accurately than checked exceptions. Errors are typically caused by the environment and are not expected to be handled by the application.</li>
</ul>
</li>
<li><p><strong>D.</strong> A checked exception can be thrown by the Java Virtual Machine when a severe error occurs, such as an out-of-memory error.</p>
<ul>
<li>This option is incorrect. It describes errors rather than checked exceptions. Errors like out-of-memory errors are thrown by the JVM and are not meant to be caught or handled by applications in most cases.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q2",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:2,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly defines and throws a custom checked exception?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomException</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">Exception</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-title function_">CustomException</span><span class="hljs-params">(String message)</span> {
        <span class="hljs-built_in">super</span>(message);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TestCustomException</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">try</span> {
            methodThatThrowsException();
        } <span class="hljs-keyword">catch</span> (CustomException e) {
            System.out.println(e.getMessage());
        }
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">methodThatThrowsException</span><span class="hljs-params">()</span> <span class="hljs-keyword">throws</span> CustomException {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">CustomException</span>(<span class="hljs-string">&quot;This is a custom checked exception&quot;</span>);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p>This code defines a custom checked exception and correctly throws and handles it.</p>
`},{letter:"B",html:`<p>This code defines a custom unchecked exception.</p>
`},{letter:"C",html:`<p>This code will not compile because the custom exception is not declared correctly in the method signature.</p>
`},{letter:"D",html:`<p>This code will compile but will not throw the custom exception at runtime.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> This code defines a custom checked exception and correctly throws and handles it.</p>
<ul>
<li>This option is correct. The code defines a custom checked exception by extending <code>Exception</code>. The <code>methodThatThrowsException</code> method throws this custom exception, which is then caught and handled in the <code>main</code> method.</li>
</ul>
</li>
<li><p><strong>B.</strong> This code defines a custom unchecked exception. </p>
<ul>
<li>This option is incorrect. The code extends <code>Exception</code>, not <code>RuntimeException</code>, making it a checked exception rather than an unchecked one.</li>
</ul>
</li>
<li><p><strong>C.</strong> This code will not compile because the custom exception is not declared correctly in the method signature.</p>
<ul>
<li>This option is incorrect. The custom exception is correctly declared in the method signature of <code>methodThatThrowsException</code>, so it will compile without issues.</li>
</ul>
</li>
<li><p><strong>D.</strong> This code will compile but will not throw the custom exception at runtime.</p>
<ul>
<li>This option is incorrect. The code will throw the custom exception at runtime as expected, and it will be caught and handled in the <code>catch</code> block.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q3",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:3,multiSelect:!1,stemHtml:`<p>Given the following class, what is the result?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">protected</span> <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> <span class="hljs-title function_">myMethod</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">RuntimeException</span>();
        } <span class="hljs-keyword">catch</span>(RuntimeException e) {
             <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        } <span class="hljs-keyword">finally</span> {
             <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    }
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        System.out.println(myMethod());
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>1</code></p>
`},{letter:"B",html:`<p><code>2</code></p>
`},{letter:"C",html:`<p>Compilation fails</p>
`},{letter:"D",html:`<p>An exception occurs at runtime</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> <code>1</code></p>
<ul>
<li>This option is incorrect. Although the <code>catch</code> block returns <code>1</code>, the <code>finally</code> block will override this return value with <code>2</code>.</li>
</ul>
</li>
<li><p><strong>B.</strong> <code>2</code></p>
<ul>
<li>This option is correct. The <code>finally</code> block always executes and its return value overrides the return value from the <code>catch</code> block, resulting in <code>2</code> being printed.</li>
</ul>
</li>
<li><p><strong>C.</strong> Compilation fails</p>
<ul>
<li>This option is incorrect. The code compiles without any errors.</li>
</ul>
</li>
<li><p><strong>D.</strong> An exception occurs at runtime</p>
<ul>
<li>This option is incorrect. While a <code>RuntimeException</code> is thrown in the <code>try</code> block, it is caught by the <code>catch</code> block, and no exception propagates to cause a runtime error.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q4",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:4,multiSelect:!1,stemHtml:`<p>Given the following class, which of the following statement is true?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">try</span> {
            <span class="hljs-comment">// Do nothing</span>
        } <span class="hljs-keyword">finally</span> {
            <span class="hljs-comment">// Do nothing</span>
        }
    }
}
</code></pre>`,options:[{letter:"A",html:`<p>The code doesn&#39;t compile correctly.</p>
`},{letter:"B",html:`<p>The code would compile correctly if we add a <code>catch</code> block.</p>
`},{letter:"C",html:`<p>The code would compile correctly if we remove the <code>finally</code> block.</p>
`},{letter:"D",html:`<p>The code compiles correctly as it is.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> The code doesn&#39;t compile correctly.</p>
<ul>
<li>This option is incorrect. The code does compile correctly. A <code>try</code> block can be followed by a <code>finally</code> block without a <code>catch</code> block.</li>
</ul>
</li>
<li><p><strong>B.</strong> The code would compile correctly if we add a <code>catch</code> block.</p>
<ul>
<li>This option is incorrect. While adding a <code>catch</code> block is valid, it is not necessary for the code to compile. The <code>try</code> block can be used with only a <code>finally</code> block.</li>
</ul>
</li>
<li><p><strong>C.</strong> The code would compile correctly if we remove the <code>finally</code> block.</p>
<ul>
<li>This option is incorrect. Removing the <code>finally</code> block is not necessary for the code to compile. The code is valid with the <code>finally</code> block present.</li>
</ul>
</li>
<li><p><strong>D.</strong> The code compiles correctly as it is.</p>
<ul>
<li>This option is correct. The code compiles correctly as it is. A <code>try</code> block must be followed by either a <code>catch</code> block, a <code>finally</code> block, or both.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q5",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:5,multiSelect:!0,stemHtml:`<p>Which of the following statements are true? (Choose all that apply)</p>
`,options:[{letter:"A",html:`<p>In a <code>try-with-resources</code>, the <code>catch</code> block is required.</p>
`},{letter:"B",html:`<p>The <code>throws</code> keyword is used to throw an exception.</p>
`},{letter:"C",html:`<p>In a <code>try-with-resources</code> block, if you declare more than one resource, they have to be separated by a semicolon.</p>
`},{letter:"D",html:`<p>If a <code>catch</code> block is defined for an exception that couldn&#39;t be thrown by the code in the <code>try</code> block, a compile-time error is generated.</p>
`}],correct:["C","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> In a <code>try-with-resources</code>, the <code>catch</code> block is required.</p>
<ul>
<li>This option is incorrect. In a <code>try-with-resources</code> statement, the catch block is optional. The primary purpose of <code>try-with-resources</code> is to ensure that each resource is closed at the end of the statement, whether an exception is thrown or not.</li>
</ul>
</li>
<li><p><strong>B.</strong> The <code>throws</code> keyword is used to throw an exception. </p>
<ul>
<li>This option is incorrect. The <code>throws</code> keyword is used in method declarations to specify that the method can throw an exception, not to throw an exception. The <code>throw</code> keyword is used to actually throw an exception.</li>
</ul>
</li>
<li><p><strong>C.</strong> In a <code>try-with-resources</code> block, if you declare more than one resource, they have to be separated by a semicolon.</p>
<ul>
<li>This option is correct. In a <code>try-with-resources</code> block, if you declare more than one resource, they must be separated by a semicolon.</li>
</ul>
</li>
<li><p><strong>D.</strong> If a <code>catch</code> block is defined for an exception that couldn&#39;t be thrown by the code in the <code>try</code> block, a compile-time error is generated.</p>
<ul>
<li>This option is correct. If a <code>catch</code> block is defined for an exception that cannot be thrown by the code in the <code>try</code> block, the compiler will generate an error because the <code>catch</code> block is unreachable.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q6",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:6,multiSelect:!1,stemHtml:`<p>Given the following class, what is the result?:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Connection</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">java</span>.io.Closeable {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">close</span><span class="hljs-params">()</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IOException</span>(<span class="hljs-string">&quot;Close Exception&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">try</span> (<span class="hljs-type">Connection</span> <span class="hljs-variable">c</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Connection</span>()) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">RuntimeException</span>(<span class="hljs-string">&quot;RuntimeException&quot;</span>);
        } <span class="hljs-keyword">catch</span> (IOException e) {
            System.err.println(e.getMessage());
        }
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Close Exception</code></p>
`},{letter:"B",html:`<p><code>RuntimeException</code></p>
`},{letter:"C",html:`<p><code>RuntimeException</code> and then <code>CloseException</code></p>
`},{letter:"D",html:`<p>Compilation fails</p>
`},{letter:"E",html:`<p>The stack trace of an uncaught exception is printed</p>
`}],correct:["E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> <code>Close Exception</code></p>
<ul>
<li>This option is incorrect. While the <code>IOException</code> from <code>close()</code> will occur, it will be suppressed by the <code>RuntimeException</code>.</li>
</ul>
</li>
<li><p><strong>B.</strong> <code>RuntimeException</code></p>
<ul>
<li>This option is incorrect. The primary exception is <code>RuntimeException</code>, but it will not print its message directly because the catch block does not handle it.</li>
</ul>
</li>
<li><p><strong>C.</strong> <code>RuntimeException</code> and then <code>CloseException</code> </p>
<ul>
<li>This option is incorrect. Although both exceptions occur, the <code>RuntimeException</code> is primary, and the <code>IOException</code> is suppressed. Both messages are not printed in sequence.</li>
</ul>
</li>
<li><p><strong>D.</strong> Compilation fails</p>
<ul>
<li>This option is incorrect. The code compiles without any errors.</li>
</ul>
</li>
<li><p><strong>E.</strong> The stack trace of an uncaught exception is printed.</p>
<ul>
<li>This option is correct. The <code>RuntimeException</code> thrown in the try block is not caught by the <code>catch (IOException e)</code> block. Hence, the stack trace of the <code>RuntimeException</code> is printed.</li>
</ul>
</li>
</ul>
`},{id:"ch07-q7",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:7,multiSelect:!0,stemHtml:`<p>Which of the following exceptions are direct subclasses of <code>RuntimeException</code>?</p>
`,options:[{letter:"A",html:`<p><code>java.io.FileNotFoundException</code></p>
`},{letter:"B",html:`<p><code>java.lang.ArithmeticException</code></p>
`},{letter:"C",html:`<p><code>java.lang.ClassCastException</code></p>
`},{letter:"D",html:`<p><code>java.lang.InterruptedException</code></p>
`}],correct:["B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> <code>java.io.FileNotFoundException</code> is incorrect. It is a subclass of <code>java.io.IOException</code>, which in turn is a subclass of <code>java.lang.Exception</code>, making it a checked exception.</p>
</li>
<li><p><strong>B.</strong> <code>java.lang.ArithmeticException</code> is correct. It is a direct subclass of <code>java.lang.RuntimeException</code> and represents arithmetic errors such as division by zero.</p>
</li>
<li><p><strong>C.</strong> <code>java.lang.ClassCastException</code> is correct. It is a direct subclass of <code>java.lang.RuntimeException</code> and indicates an invalid cast operation.</p>
</li>
<li><p><strong>D.</strong> <code>java.lang.InterruptedException</code> is incorrect. It is a direct subclass of <code>java.lang.Exception</code>, making it a checked exception. It indicates that a thread has been interrupted.</p>
</li>
</ul>
`},{id:"ch07-q8",chapter:"ch07",chapterTitle:"Chapter SEVEN",chapterSubtitle:"Error Handling and Exceptions",number:8,multiSelect:!1,stemHtml:`<p>Given the following code, what is the result?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">MyResource</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">AutoCloseable</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">close</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">RuntimeException</span>(<span class="hljs-string">&quot;Close Exception&quot;</span>);
    }
}

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-keyword">try</span> (<span class="hljs-type">MyResource</span> <span class="hljs-variable">resource</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">MyResource</span>()) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">RuntimeException</span>(<span class="hljs-string">&quot;Try Block Exception&quot;</span>);
        } <span class="hljs-keyword">catch</span> (RuntimeException e) {
            Throwable[] suppressed = e.getSuppressed();
            <span class="hljs-keyword">if</span> (suppressed.length &gt; <span class="hljs-number">0</span>) {
                <span class="hljs-keyword">for</span> (Throwable t : suppressed) {
                    System.out.println(<span class="hljs-string">&quot;Suppressed: &quot;</span> + t.getMessage());
                }
            } <span class="hljs-keyword">else</span> {
                System.out.println(e.getMessage());
            }
        }
    }
}
</code></pre>`,options:[{letter:"A",html:`<p>Only <code>&quot;Try Block Exception&quot;</code> is printed.</p>
`},{letter:"B",html:`<p>Only <code>&quot;Close Exception&quot;</code> is printed.</p>
`},{letter:"C",html:`<p>Both <code>&quot;Try Block Exception&quot;</code> and <code>&quot;Close Exception&quot;</code> are printed.</p>
`},{letter:"D",html:`<p><code>&quot;Suppressed: Close Exception&quot;</code> is printed.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A.</strong> Only <code>&quot;Try Block Exception&quot;</code> is printed.</p>
<ul>
<li>This option is incorrect. The <code>Try Block Exception</code> is the main exception and is not directly printed because the <code>catch</code> block checks for suppressed exceptions first.</li>
</ul>
</li>
<li><p><strong>B.</strong> Only <code>&quot;Close Exception&quot;</code> is printed.</p>
<ul>
<li>This option is incorrect. The <code>Close Exception</code> is not directly printed; it is suppressed and accessed via the <code>getSuppressed</code> method.</li>
</ul>
</li>
<li><p><strong>C.</strong> Both <code>&quot;Try Block Exception&quot;</code> and <code>&quot;Close Exception&quot;</code> are printed.</p>
<ul>
<li>This option is incorrect. The code only prints suppressed exceptions, not the main exception message directly.</li>
</ul>
</li>
<li><p><strong>D.</strong> <code>&quot;Suppressed: Close Exception&quot;</code> is printed.</p>
<ul>
<li>This option is correct. The <code>RuntimeException</code> thrown in the <code>try</code> block is the main exception, and the <code>RuntimeException</code> from the <code>close</code> method is suppressed. The <code>catch</code> block prints the suppressed exception message, <code>&quot;Suppressed: Close Exception&quot;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch08-q1",chapter:"ch08",chapterTitle:"Chapter EIGHT",chapterSubtitle:"Functional Interfaces and Lambda Expressions",number:1,multiSelect:!0,stemHtml:`<p>Which of the following statements are true about functional interfaces in Java? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>A functional interface can have multiple <code>abstract</code> methods.</p>
`},{letter:"B",html:`<p>A functional interface can have default and <code>static</code> methods.</p>
`},{letter:"C",html:`<p>The <code>@FunctionalInterface</code> annotation is mandatory to declare a functional interface.</p>
`},{letter:"D",html:`<p>Lambda expressions can be used to instantiate functional interfaces.</p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A functional interface can have multiple <code>abstract</code> methods.</p>
<ul>
<li>This option is incorrect. A functional interface can have only one abstract method. Having multiple abstract methods would disqualify it from being a functional interface.</li>
</ul>
</li>
<li><p><strong>B)</strong> A functional interface can have default and <code>static</code> methods.</p>
<ul>
<li>This option is correct. A functional interface is allowed to have default and static methods, which are not counted as abstract methods.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>@FunctionalInterface</code> annotation is mandatory to declare a functional interface. </p>
<ul>
<li>This option is incorrect. The <code>@FunctionalInterface</code> annotation is not mandatory; it is only a marker to indicate that the interface is intended to be a functional interface. An interface can be a functional interface without this annotation as long as it has exactly one abstract method.</li>
</ul>
</li>
<li><p><strong>D)</strong> Lambda expressions can be used to instantiate functional interfaces.</p>
<ul>
<li>This option is correct. Lambda expressions are used to provide implementations for the single abstract method of a functional interface, making them a key feature for functional programming in Java.</li>
</ul>
</li>
</ul>
`},{id:"ch08-q2",chapter:"ch08",chapterTitle:"Chapter EIGHT",chapterSubtitle:"Functional Interfaces and Lambda Expressions",number:2,multiSelect:!1,stemHtml:`<p>Which of the following lambda expressions correctly implements the <code>Comparator&lt;String&gt;</code> interface?</p>
<pre><code class="hljs language-java">Comparator&lt;String&gt; comparator = <span class="hljs-comment">/* lambda expression */</span>;
</code></pre>`,options:[{letter:"A",html:`<p><code>(s1, s2) -&gt; s1.compareTo(s2)</code></p>
`},{letter:"B",html:`<p><code>(String s1, s2) -&gt; s1.compareTo(s2)</code></p>
`},{letter:"C",html:`<p><code>s1, s2 -&gt; s1.compareTo(s2)</code></p>
`},{letter:"D",html:`<p><code>(s1, s2) -&gt; return s1.compareTo(s2);</code></p>
`},{letter:"E",html:`<p><code>(s1, s2) -&gt; { s1.compareTo(s2); }</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>(s1, s2) -&gt; s1.compareTo(s2)</code></p>
<ul>
<li>This option is correct. This lambda expression correctly implements the <code>Comparator&lt;String&gt;</code> interface. It uses the correct syntax for a lambda expression, with parameters enclosed in parentheses and a single expression for the body.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>(String s1, s2) -&gt; s1.compareTo(s2)</code></p>
<ul>
<li>This option is incorrect. The syntax is invalid because if you specify the type of one parameter, you must specify the type for all parameters. It should be <code>(String s1, String s2)</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>s1, s2 -&gt; s1.compareTo(s2)</code></p>
<ul>
<li>This option is incorrect. Parameters must be enclosed in parentheses. The correct syntax is <code>(s1, s2)</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>(s1, s2) -&gt; return s1.compareTo(s2);</code></p>
<ul>
<li>This option is incorrect. When using a return statement, you must also include curly braces.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>(s1, s2) -&gt; { s1.compareTo(s2); }</code></p>
<ul>
<li>This option is incorrect. When using curly braces, you must include a return statement for expressions that return a value. The correct syntax would be <code>(s1, s2) -&gt; { return s1.compareTo(s2); }</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch08-q3",chapter:"ch08",chapterTitle:"Chapter EIGHT",chapterSubtitle:"Functional Interfaces and Lambda Expressions",number:3,multiSelect:!1,stemHtml:`<p>Which of the following Java built-in lambda interfaces represents a function that accepts two arguments and produces a result?</p>
`,options:[{letter:"A",html:`<p><code>java.util.function.Function</code></p>
`},{letter:"B",html:`<p><code>java.util.function.BiFunction</code></p>
`},{letter:"C",html:`<p><code>java.util.function.Supplier</code></p>
`},{letter:"D",html:`<p><code>java.util.function.Consumer</code></p>
`},{letter:"E",html:`<p><code>java.util.function.Predicate</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>java.util.function.Function</code></p>
<ul>
<li>This option is incorrect. <code>Function</code> represents a function that takes one argument and produces a result.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>java.util.function.BiFunction</code></p>
<ul>
<li>This option is correct. <code>BiFunction</code> represents a function that takes two arguments and produces a result.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>java.util.function.Supplier</code></p>
<ul>
<li>This option is incorrect. <code>Supplier</code> represents a function that takes no arguments and produces a result.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>java.util.function.Consumer</code></p>
<ul>
<li>This option is incorrect. <code>Consumer</code> represents a function that takes one argument and does not produce a result.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>java.util.function.Predicate</code></p>
<ul>
<li>This option is incorrect. <code>Predicate</code> represents a function that takes one argument and returns a <code>boolean</code> value.</li>
</ul>
</li>
</ul>
`},{id:"ch08-q4",chapter:"ch08",chapterTitle:"Chapter EIGHT",chapterSubtitle:"Functional Interfaces and Lambda Expressions",number:4,multiSelect:!1,stemHtml:`<p>What is the output of the following code?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.function.Function;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        Function&lt;Integer, Integer&gt; multiplyByTwo = x -&gt; x * <span class="hljs-number">2</span>;
        Function&lt;Integer, Integer&gt; addThree = x -&gt; x + <span class="hljs-number">3</span>;

        Function&lt;Integer, Integer&gt; combinedFunction = multiplyByTwo.andThen(addThree);

        System.out.println(combinedFunction.apply(<span class="hljs-number">5</span>));
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>13</code></p>
`},{letter:"B",html:`<p><code>16</code></p>
`},{letter:"C",html:`<p><code>10</code></p>
`},{letter:"D",html:`<p><code>11</code></p>
`},{letter:"E",html:`<p><code>8</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>13</code></p>
<ul>
<li>This option is correct. The <code>combinedFunction</code> first multiplies 5 by 2 to get 10, then adds 3, resulting in 13.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>16</code></p>
<ul>
<li>This option is incorrect. It incorrectly assumes that 5 is added after doubling and doubling again.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>10</code></p>
<ul>
<li>This option is incorrect. It represents only the result of the first function without applying the second function.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>11</code></p>
<ul>
<li>This option is incorrect. It seems to mistakenly represent 5 plus the first function (double).</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>8</code></p>
<ul>
<li>This option is incorrect. It seems to incorrectly represent the input value doubled without adding 3.</li>
</ul>
</li>
</ul>
`},{id:"ch08-q5",chapter:"ch08",chapterTitle:"Chapter EIGHT",chapterSubtitle:"Functional Interfaces and Lambda Expressions",number:5,multiSelect:!1,stemHtml:`<p>Which of the following method references correctly replaces the lambda expression in the code below?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.function.Function;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        Function&lt;String, Integer&gt; func = str -&gt; Integer.parseInt(str);
        System.out.println(func.apply(<span class="hljs-string">&quot;123&quot;</span>));
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>String::valueOf</code></p>
`},{letter:"B",html:`<p><code>Integer::valueOf</code></p>
`},{letter:"C",html:`<p><code>Integer::parseInt</code></p>
`},{letter:"D",html:`<p><code>String::parseInt</code></p>
`},{letter:"E",html:`<p><code>Integer::toString</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>String::valueOf</code> </p>
<ul>
<li>This option is incorrect. <code>String::valueOf</code> converts an integer to a string, not a string to an integer.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Integer::valueOf</code></p>
<ul>
<li>This option is incorrect. <code>Integer::valueOf</code> returns an <code>Integer</code> object, while the lambda returns an <code>int</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Integer::parseInt</code></p>
<ul>
<li>This option is correct. <code>Integer::parseInt</code> is a method reference that matches the lambda expression <code>str -&gt; Integer.parseInt(str)</code> which converts a string to an integer.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>String::parseInt</code></p>
<ul>
<li>This option is incorrect. <code>String</code> class does not have a <code>parseInt</code> method.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Integer::toString</code></p>
<ul>
<li>This option is incorrect. <code>Integer::toString</code> converts an integer to a string, not a string to an integer.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q1",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:1,multiSelect:!1,stemHtml:`<p>Which of the following lines of code demonstrates the use of the <code>Optional</code> class to handle a potentially <code>null</code> value to avoid an exception?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.Optional;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">String</span> <span class="hljs-variable">value</span> <span class="hljs-operator">=</span> getValue();
        <span class="hljs-comment">// Insert code here</span>
    }
    
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> String <span class="hljs-title function_">getValue</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>; <span class="hljs-comment">// This method may return null</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Optional&lt;String&gt; optional = new Optional&lt;&gt;(value);</code></p>
`},{letter:"B",html:`<p><code>Optional&lt;String&gt; optional = Optional.of(value);</code></p>
`},{letter:"C",html:`<p><code>Optional&lt;String&gt; optional = Optional.ofNullable(value);</code></p>
`},{letter:"D",html:`<p><code>Optional&lt;String&gt; optional = Optional.empty(value);</code></p>
`},{letter:"E",html:`<p><code>Optional&lt;String&gt; optional = Optional.nullable(value);</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Optional&lt;String&gt; optional = new Optional&lt;&gt;(value);</code></p>
<ul>
<li>This option is incorrect because <code>Optional</code> does not have a public constructor. Instead, static factory methods like <code>of</code> and <code>ofNullable</code> should be used.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Optional&lt;String&gt; optional = Optional.of(value);</code></p>
<ul>
<li>This option is incorrect because <code>Optional.of(value)</code> throws a <code>NullPointerException</code> if <code>value</code> is <code>null</code>. In this scenario, since <code>getValue()</code> can return <code>null</code>, this line could lead to an exception.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Optional&lt;String&gt; optional = Optional.ofNullable(value);</code></p>
<ul>
<li>This option is correct because <code>Optional.ofNullable(value)</code> will return an <code>Optional</code> describing the specified value if non-null, or an empty <code>Optional</code> if the value is <code>null</code>. This is the appropriate way to handle a potentially <code>null</code> value.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Optional&lt;String&gt; optional = Optional.empty(value);</code></p>
<ul>
<li>This option is incorrect because <code>Optional.empty()</code> does not accept any arguments. It simply returns an empty <code>Optional</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Optional&lt;String&gt; optional = Optional.nullable(value);</code></p>
<ul>
<li>This option is incorrect because there is no method <code>nullable</code> in the <code>Optional</code> class. The correct method for this purpose is <code>ofNullable</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q2",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:2,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly demonstrates the use of a terminal operation?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = List.of(<span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;banana&quot;</span>, <span class="hljs-string">&quot;cherry&quot;</span>, <span class="hljs-string">&quot;date&quot;</span>);

        Stream&lt;String&gt; stream = list.stream()
                                    .filter(s -&gt; s.length() &gt; <span class="hljs-number">5</span>)
                                    .peek(System.out::println)
                                    .map(String::toUpperCase);

        <span class="hljs-comment">// Insert terminal operation here</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>stream.filter(s -&gt; s.contains(&quot;A&quot;));</code></p>
`},{letter:"B",html:`<p><code>stream.map(String::toLowerCase);</code></p>
`},{letter:"C",html:`<p><code>stream.distinct();</code></p>
`},{letter:"D",html:`<p><code>stream.limit(2);</code></p>
`},{letter:"E",html:`<p><code>stream.collect(Collectors.toList());</code></p>
`}],correct:["E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>stream.filter(s -&gt; s.contains(&quot;A&quot;));</code> </p>
<ul>
<li>This option is incorrect because <code>filter</code> is an intermediate operation. It returns a new stream with elements that match the given predicate.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>stream.map(String::toLowerCase);</code></p>
<ul>
<li>This option is incorrect because <code>map</code> is an intermediate operation. It returns a new stream with elements that are the results of applying the given function.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>stream.distinct();</code></p>
<ul>
<li>This option is incorrect because <code>distinct</code> is an intermediate operation. It returns a new stream with distinct elements.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>stream.limit(2);</code></p>
<ul>
<li>This option is incorrect because <code>limit</code> is an intermediate operation. It returns a new stream that is truncated to be no longer than the given size.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>stream.collect(Collectors.toList());</code></p>
<ul>
<li>This option is correct because <code>collect</code> is a terminal operation. It triggers the processing of the stream and collects the elements into a <code>List</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q3",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:3,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly uses a primitive stream to calculate the sum of an array of integers?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.stream.IntStream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">int</span>[] numbers = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>};

        <span class="hljs-comment">// Insert code here to calculate sum</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>int sum = numbers.stream().sum();</code></p>
`},{letter:"B",html:`<p><code>int sum = IntStream.range(0, numbers.length).sum();</code></p>
`},{letter:"C",html:`<p><code>int sum = IntStream.from(numbers).sum();</code></p>
`},{letter:"D",html:`<p><code>int sum = IntStream.of(numbers).sum();</code></p>
`},{letter:"E",html:`<p><code>int sum = IntStream.range(numbers).sum();</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>int sum = numbers.stream().sum();</code> </p>
<ul>
<li>This option is incorrect because arrays do not have a <code>stream</code> method directly on them. You need to use a method from a utility class like <code>IntStream</code> to create a stream.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>int sum = IntStream.range(0, numbers.length).sum();</code> </p>
<ul>
<li>This option is incorrect because <code>IntStream.range(0, numbers.length)</code> generates a stream of integers from 0 to the length of the array, not the elements of the array itself.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>int sum = IntStream.from(numbers).sum();</code></p>
<ul>
<li>This option is incorrect because <code>IntStream</code> does not have a <code>from</code> method. The correct method is <code>of</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>int sum = IntStream.of(numbers).sum();</code></p>
<ul>
<li>This option is correct because <code>IntStream.of(numbers).sum()</code> correctly creates an <code>IntStream</code> from the array and calculates the sum of its elements.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>int sum = IntStream.range(numbers).sum();</code></p>
<ul>
<li>This option is incorrect because <code>IntStream.range</code> requires two arguments (a start and an end index) and is used to generate a stream of numbers within a range, not to sum an array.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q4",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:4,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly filters a stream to include only strings with a length greater than 3?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = List.of(<span class="hljs-string">&quot;one&quot;</span>, <span class="hljs-string">&quot;two&quot;</span>, <span class="hljs-string">&quot;three&quot;</span>, <span class="hljs-string">&quot;four&quot;</span>);

        Stream&lt;String&gt; stream = list.stream();

        <span class="hljs-comment">// Insert code here to filter the stream</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Stream&lt;String&gt; filteredStream = stream.filter(s -&gt; s.length() &gt; 3);</code></p>
`},{letter:"B",html:`<p><code>Stream&lt;String&gt; filteredStream = stream.map(s -&gt; s.length() &gt; 3);</code></p>
`},{letter:"C",html:`<p><code>Stream&lt;String&gt; filteredStream = stream.collect(Collectors.filtering(s -&gt; s.length() &gt; 3));</code></p>
`},{letter:"D",html:`<p><code>Stream&lt;String&gt; filteredStream = stream.filtering(s -&gt; s.length() &gt; 3);</code></p>
`},{letter:"E",html:`<p><code>Stream&lt;String&gt; filteredStream = stream.filterByLength(3);</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Stream&lt;String&gt; filteredStream = stream.filter(s -&gt; s.length() &gt; 3);</code>  </p>
<ul>
<li>This option is correct because <code>filter</code> is the correct intermediate operation to apply a predicate to each element of the stream and return a new stream containing only elements that match the predicate.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Stream&lt;String&gt; filteredStream = stream.map(s -&gt; s.length() &gt; 3);</code> </p>
<ul>
<li>This option is incorrect because <code>map</code> is used to transform elements of the stream and does not filter them. The result would be a stream of <code>Boolean</code> values instead of the original strings.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Stream&lt;String&gt; filteredStream = stream.collect(Collectors.filtering(s -&gt; s.length() &gt; 3));</code> </p>
<ul>
<li>This option is incorrect because <code>Collectors.filtering</code> is not a valid method. Filtering is done through the <code>filter</code> method on the stream itself, not via collectors.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Stream&lt;String&gt; filteredStream = stream.filtering(s -&gt; s.length() &gt; 3);</code> </p>
<ul>
<li>This option is incorrect because there is no <code>filtering</code> method on the stream. The correct method is <code>filter</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Stream&lt;String&gt; filteredStream = stream.filterByLength(3);</code></p>
<ul>
<li>This option is incorrect because there is no <code>filterByLength</code> method on the stream. The correct method to use is <code>filter</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q5",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:5,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly maps a stream of strings to their lengths?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = List.of(<span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;banana&quot;</span>, <span class="hljs-string">&quot;cherry&quot;</span>, <span class="hljs-string">&quot;date&quot;</span>);

        Stream&lt;String&gt; stream = list.stream();

        <span class="hljs-comment">// Insert code here to map the stream</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Stream&lt;String&gt; lengthStream = stream.map(s -&gt; s.length());</code></p>
`},{letter:"B",html:`<p><code>Stream&lt;String&gt; lengthStream = stream.mapToInt(s -&gt; s.length());</code></p>
`},{letter:"C",html:`<p><code>Stream&lt;Integer&gt; lengthStream = stream.map(s -&gt; s.length());</code></p>
`},{letter:"D",html:`<p><code>IntStream lengthStream = stream.map(s -&gt; s.length());</code></p>
`},{letter:"E",html:`<p><code>Stream&lt;String&gt; lengthStream = stream.flatMap(s -&gt; Stream.of(s.length()));</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Stream&lt;String&gt; lengthStream = stream.map(s -&gt; s.length());</code></p>
<ul>
<li>This option is incorrect because the <code>map</code> method will transform the elements to <code>Integer</code>, not <code>String</code>. The correct type for the resulting stream should be <code>Stream&lt;Integer&gt;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Stream&lt;String&gt; lengthStream = stream.mapToInt(s -&gt; s.length());</code></p>
<ul>
<li>This option is incorrect because <code>mapToInt</code> produces an <code>IntStream</code>, not a <code>Stream&lt;String&gt;</code>. Additionally, the resulting stream type would not be <code>Stream&lt;String&gt;</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Stream&lt;Integer&gt; lengthStream = stream.map(s -&gt; s.length());</code></p>
<ul>
<li>This option is correct because <code>map</code> transforms each string in the stream to its length, resulting in a <code>Stream&lt;Integer&gt;</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>IntStream lengthStream = stream.map(s -&gt; s.length());</code> </p>
<ul>
<li>This option is incorrect because <code>map</code> produces a <code>Stream&lt;R&gt;</code>, not an <code>IntStream</code>. The correct method for producing an <code>IntStream</code> would be <code>mapToInt</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Stream&lt;String&gt; lengthStream = stream.flatMap(s -&gt; Stream.of(s.length()));</code></p>
<ul>
<li>This option is incorrect because <code>flatMap</code> is used to flatten nested streams and not simply map to another type. Additionally, the resulting stream type would not be <code>Stream&lt;String&gt;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q6",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:6,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly limits the stream to the first 3 elements after skipping the first 2 elements?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = List.of(<span class="hljs-string">&quot;one&quot;</span>, <span class="hljs-string">&quot;two&quot;</span>, <span class="hljs-string">&quot;three&quot;</span>, <span class="hljs-string">&quot;four&quot;</span>, <span class="hljs-string">&quot;five&quot;</span>, <span class="hljs-string">&quot;six&quot;</span>);

        Stream&lt;String&gt; stream = list.stream();

        <span class="hljs-comment">// Insert code here to skip and limit the stream</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Stream&lt;String&gt; resultStream = stream.skip(2).limit(3);</code></p>
`},{letter:"B",html:`<p><code>Stream&lt;String&gt; resultStream = stream.limit(3).skip(2);</code></p>
`},{letter:"C",html:`<p><code>Stream&lt;String&gt; resultStream = stream.skip(3).limit(2);</code></p>
`},{letter:"D",html:`<p><code>Stream&lt;String&gt; resultStream = stream.limit(2).skip(3);</code></p>
`},{letter:"E",html:`<p><code>Stream&lt;String&gt; resultStream = stream.slice(2, 5);</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Stream&lt;String&gt; resultStream = stream.skip(2).limit(3);</code></p>
<ul>
<li>This option is correct because <code>skip(2)</code> skips the first 2 elements of the stream, and <code>limit(3)</code> limits the stream to the next 3 elements. Therefore, the resulting stream will contain the 3rd, 4th, and 5th elements of the original list.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Stream&lt;String&gt; resultStream = stream.limit(3).skip(2);</code></p>
<ul>
<li>This option is incorrect because <code>limit(3)</code> first limits the stream to the first 3 elements, and then <code>skip(2)</code> skips 2 of those elements, resulting in a stream with only the 3rd element.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Stream&lt;String&gt; resultStream = stream.skip(3).limit(2);</code></p>
<ul>
<li>This option is incorrect because <code>skip(3)</code> skips the first 3 elements, and <code>limit(2)</code> then limits the stream to the next 2 elements, resulting in a stream with the 4th and 5th elements.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Stream&lt;String&gt; resultStream = stream.limit(2).skip(3);</code></p>
<ul>
<li>This option is incorrect because <code>limit(2)</code> first limits the stream to the first 2 elements, and then <code>skip(3)</code> would attempt to skip more elements than are available, resulting in an empty stream.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Stream&lt;String&gt; resultStream = stream.slice(2, 5);</code></p>
<ul>
<li>This option is incorrect because there is no <code>slice</code> method in the Stream API. The correct methods to achieve the desired result are <code>skip</code> and <code>limit</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q7",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:7,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly concatenates two streams?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list1 = List.of(<span class="hljs-string">&quot;one&quot;</span>, <span class="hljs-string">&quot;two&quot;</span>, <span class="hljs-string">&quot;three&quot;</span>);
        List&lt;String&gt; list2 = List.of(<span class="hljs-string">&quot;four&quot;</span>, <span class="hljs-string">&quot;five&quot;</span>, <span class="hljs-string">&quot;six&quot;</span>);

        Stream&lt;String&gt; stream1 = list1.stream();
        Stream&lt;String&gt; stream2 = list2.stream();

        <span class="hljs-comment">// Insert code here to concatenate the streams</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Stream&lt;String&gt; resultStream = Stream.concat(stream1, stream2.collect(Collectors.toList()));</code></p>
`},{letter:"B",html:`<p><code>Stream&lt;String&gt; resultStream = Stream.concat(stream1, stream2);</code></p>
`},{letter:"C",html:`<p><code>Stream&lt;String&gt; resultStream = stream1.concat(stream2);</code></p>
`},{letter:"D",html:`<p><code>Stream&lt;String&gt; resultStream = stream1.merge(stream2);</code></p>
`},{letter:"E",html:`<p><code>Stream&lt;String&gt; resultStream = Stream.of(stream1, stream2);</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Stream&lt;String&gt; resultStream = Stream.concat(stream1, stream2.collect(Collectors.toList()));</code></p>
<ul>
<li>This option is incorrect because <code>Stream.concat</code> expects two streams as arguments. <code>stream2.collect(Collectors.toList())</code> converts <code>stream2</code> into a <code>List</code>, not a <code>Stream</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Stream&lt;String&gt; resultStream = Stream.concat(stream1, stream2);</code></p>
<ul>
<li>This option is correct because <code>Stream.concat(stream1, stream2)</code> correctly concatenates the two streams into a single stream containing all elements from both streams.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Stream&lt;String&gt; resultStream = stream1.concat(stream2);</code></p>
<ul>
<li>This option is incorrect because <code>Stream</code> does not have an instance method <code>concat</code>. The <code>concat</code> method is a static method of the <code>Stream</code> class.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Stream&lt;String&gt; resultStream = stream1.merge(stream2);</code></p>
<ul>
<li>This option is incorrect because there is no <code>merge</code> method in the <code>Stream</code> API. The correct method for concatenating streams is <code>Stream.concat</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Stream&lt;String&gt; resultStream = Stream.of(stream1, stream2);</code></p>
<ul>
<li>This option is incorrect because <code>Stream.of(stream1, stream2)</code> creates a stream of streams, resulting in <code>Stream&lt;Stream&lt;String&gt;&gt;</code> rather than a single concatenated <code>Stream&lt;String&gt;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q8",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:8,multiSelect:!1,stemHtml:`<p>Which of the following lines of code uses the reduce method to correctly calculate the product of all elements in a stream of integers?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.stream.Stream;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;Integer&gt; numbers = List.of(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>);

        Stream&lt;Integer&gt; stream = numbers.stream();

        <span class="hljs-comment">// Insert code here to calculate the product</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>int product = stream.reduce(1, (a, b) -&gt; a + b);</code></p>
`},{letter:"B",html:`<p><code>int product = stream.reduce((a, b) -&gt; a * b);</code></p>
`},{letter:"C",html:`<p><code>int product = stream.reduce(0, (a, b) -&gt; a * b);</code></p>
`},{letter:"D",html:`<p><code>Optional&lt;Integer&gt; product = stream.reduce(1, (a, b) -&gt; a * b);</code></p>
`},{letter:"E",html:`<p><code>int product = stream.reduce(1, (a, b) -&gt; a * b, (a, b) -&gt; a * b);</code></p>
`}],correct:["E"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>int product = stream.reduce(1, (a, b) -&gt; a + b);</code></p>
<ul>
<li>This option is incorrect because the reduction operation is using addition instead of multiplication. The correct operation for calculating the product should be <code>(a, b) -&gt; a * b</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>int product = stream.reduce((a, b) -&gt; a * b);</code></p>
<ul>
<li>This option is incorrect because it does not provide an identity value, which is necessary for the reduction operation when dealing with an empty stream. Without an identity value, the result is an <code>Optional&lt;Integer&gt;</code> rather than an <code>int</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>int product = stream.reduce(0, (a, b) -&gt; a * b);</code></p>
<ul>
<li>This option is incorrect because the identity value for multiplication should be <code>1</code>, not <code>0</code>. Using <code>0</code> as the identity value would result in a product of <code>0</code> regardless of the stream elements.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Optional&lt;Integer&gt; product = stream.reduce(1, (a, b) -&gt; a * b);</code></p>
<ul>
<li>This option is incorrect because the correct use of the <code>reduce</code> method with an identity value does not return an <code>Optional</code>. It should return the result directly as <code>int</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>int product = stream.reduce(1, (a, b) -&gt; a * b, (a, b) -&gt; a * b);</code></p>
<ul>
<li>This option is correct because it correctly uses the <code>reduce</code> method with an identity value of <code>1</code> and a combiner function that multiplies the results. This form of <code>reduce</code> is suitable for parallel processing as well, ensuring the product is correctly calculated across multiple segments of the stream.</li>
</ul>
</li>
</ul>
`},{id:"ch09-q9",chapter:"ch09",chapterTitle:"Chapter NINE",chapterSubtitle:"Streams",number:9,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly collects the elements of a stream into a <code>Set</code> and also ensures that the original order of the elements is maintained?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.List;
<span class="hljs-keyword">import</span> java.util.Set;
<span class="hljs-keyword">import</span> java.util.stream.Collectors;
<span class="hljs-keyword">import</span> java.util.stream.Stream;
<span class="hljs-keyword">import</span> java.util.LinkedHashSet;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;String&gt; list = List.of(<span class="hljs-string">&quot;apple&quot;</span>, <span class="hljs-string">&quot;banana&quot;</span>, <span class="hljs-string">&quot;cherry&quot;</span>, <span class="hljs-string">&quot;date&quot;</span>);

        Stream&lt;String&gt; stream = list.stream();

        <span class="hljs-comment">// Insert code here to collect the elements into a Set while maintaining order</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toSet());</code></p>
`},{letter:"B",html:`<p><code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toCollection(LinkedHashSet::new));</code></p>
`},{letter:"C",html:`<p><code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toCollection(TreeSet::new));</code></p>
`},{letter:"D",html:`<p><code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toList());</code></p>
`},{letter:"E",html:`<p><code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toMap());</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toSet());</code> </p>
<ul>
<li>This option is incorrect because <code>Collectors.toSet()</code> does not guarantee the order of the elements. The implementation returned by this collector does not preserve the order of insertion.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toCollection(LinkedHashSet::new));</code></p>
<ul>
<li>This option is correct because <code>Collectors.toCollection(LinkedHashSet::new)</code> collects the elements into a <code>LinkedHashSet</code>, which maintains the order of insertion.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toCollection(TreeSet::new));</code> </p>
<ul>
<li>This option is incorrect because <code>TreeSet</code> sorts the elements according to their natural ordering (or by a comparator, if provided). This does not necessarily preserve the original order of the stream elements.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toList());</code> </p>
<ul>
<li>This option is incorrect because <code>Collectors.toList()</code> collects the elements into a <code>List</code>, not a <code>Set</code>.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Set&lt;String&gt; resultSet = stream.collect(Collectors.toMap());</code></p>
<ul>
<li>This option is incorrect because <code>Collectors.toMap()</code> is used to collect the elements into a <code>Map</code>, not a <code>Set</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q1",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:1,multiSelect:!1,stemHtml:`<p>Which of the following lines of code correctly creates and starts a new virtual thread?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Runnable</span> <span class="hljs-variable">task</span> <span class="hljs-operator">=</span> () -&gt; {
            <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">5</span>; i++) {
                System.out.println(<span class="hljs-string">&quot;Task is running&quot;</span>);
            }
        };
        <span class="hljs-comment">// Insert code here to create and start a new virtual thread</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>Thread thread = Thread.ofVirtual(); thread.start(task);</code></p>
`},{letter:"B",html:`<p><code>Thread thread = Thread.ofVirtual().unstarted(task).run();</code></p>
`},{letter:"C",html:`<p><code>Thread thread = Thread.ofVirtual().start(task);</code></p>
`},{letter:"D",html:`<p><code>Thread thread = Thread.ofVirtual(); task.run();</code></p>
`},{letter:"E",html:`<p><code>Thread thread = Thread.start(task);</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>Thread thread = Thread.ofVirtual(); thread.start(task);</code></p>
<ul>
<li>This option is incorrect because <code>Thread.ofVirtual()</code> returns a <code>Thread.Builder</code>, not a <code>Thread</code>. The <code>start()</code> method on <code>Thread.Builder</code> takes a <code>Runnable</code>, but this syntax is incorrect.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>Thread thread = Thread.ofVirtual().unstarted(task).run();</code></p>
<ul>
<li>This option is incorrect because calling <code>run()</code> directly does not start a new thread. It executes the task in the current thread.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Thread thread = Thread.ofVirtual().start(task);</code></p>
<ul>
<li>This option is correct. It uses the new thread builder API in Java 21 to create and start a virtual thread in one step.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>Thread thread = Thread.ofVirtual(); task.run();</code></p>
<ul>
<li>This option is incorrect because it doesn&#39;t actually start a new thread. It creates a thread builder but doesn&#39;t use it, and then runs the task in the current thread.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>Thread thread = Thread.start(task);</code></p>
<ul>
<li>This option is incorrect because <code>Thread.start(task)</code> is not a valid static method in Java 21.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q2",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:2,multiSelect:!1,stemHtml:`<p>Which of the options correctly uses a <code>synchronized</code> block to ensure that only one thread at a time can execute a critical section that increments a shared counter?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Main</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-type">int</span> <span class="hljs-variable">counter</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Runnable</span> <span class="hljs-variable">task</span> <span class="hljs-operator">=</span> () -&gt; {
            <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> <span class="hljs-variable">i</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">1000</span>; i++) {
                <span class="hljs-comment">// Insert synchronized block here</span>
            }
        };
        <span class="hljs-type">Thread</span> <span class="hljs-variable">thread1</span> <span class="hljs-operator">=</span> Thread.ofPlatform().start(task);
        <span class="hljs-type">Thread</span> <span class="hljs-variable">thread2</span> <span class="hljs-operator">=</span> Thread.ofPlatform().start(task);
        <span class="hljs-keyword">try</span> {
            thread1.join();
            thread2.join();
        } <span class="hljs-keyword">catch</span> (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(<span class="hljs-string">&quot;Final counter value: &quot;</span> + counter);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>synchronized (this) { counter++; }</code></p>
`},{letter:"B",html:`<p><code>synchronized (Main.class) { counter++; }</code></p>
`},{letter:"C",html:`<p><code>synchronized (task) { counter++; }</code></p>
`},{letter:"D",html:`<p><code>synchronized (counter) { counter++; }</code></p>
`},{letter:"E",html:`<p><code>synchronized (System.out) { counter++; }</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>synchronized (this) { counter++; }</code></p>
<ul>
<li>This option is incorrect because <code>this</code> cannot be used in a static context. In the <code>main</code> method, <code>this</code> is not available. For a static field like <code>counter</code>, you need to synchronize on a static object or class.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>synchronized (Main.class) { counter++; }</code></p>
<ul>
<li>This option is correct because synchronizing on <code>Main.class</code> ensures that only one thread can enter the synchronized block at a time for all instances of <code>Main</code>, which is appropriate for protecting static fields like <code>counter</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>synchronized (task) { counter++; }</code></p>
<ul>
<li>This option is incorrect because <code>task</code> is a <code>Runnable</code> object, and synchronizing on it does not effectively control access to the shared static field <code>counter</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>synchronized (counter) { counter++; }</code></p>
<ul>
<li>This option is incorrect because <code>counter</code> is a primitive type (<code>int</code>), and you cannot synchronize on a primitive type. Synchronization requires an object.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>synchronized (System.out) { counter++; }</code></p>
<ul>
<li>This option is incorrect because synchronizing on <code>System.out</code> is not related to controlling access to <code>counter</code>. It would also interfere with other potential uses of <code>System.out</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q3",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:3,multiSelect:!0,stemHtml:`<p>Which of the following statements about atomic classes is correct? (Choose all that apply)</p>
`,options:[{letter:"A",html:`<p><code>AtomicInteger</code> is part of the <code>java.util.concurrent.atomic</code> package, but it does not provide atomic operations for increment and decrement.</p>
`},{letter:"B",html:`<p><code>AtomicReference</code> can only be used with reference types, not primitive types.</p>
`},{letter:"C",html:`<p><code>AtomicLong</code> supports atomic operations on <code>long</code> values, including <code>getAndIncrement()</code> and <code>compareAndSet()</code> methods.</p>
`},{letter:"D",html:`<p><code>AtomicBoolean</code> can be used to perform atomic arithmetic operations on <code>boolean</code> values.</p>
`}],correct:["B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>AtomicInteger</code> is part of the <code>java.util.concurrent.atomic</code> package, but it does not provide atomic operations for increment and decrement.</p>
<ul>
<li>This statement is incorrect. <code>AtomicInteger</code> provides atomic operations for increment and decrement, such as <code>incrementAndGet()</code> and <code>decrementAndGet()</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>AtomicReference</code> can only be used with reference types, not primitive types.</p>
<ul>
<li>This statement is correct. <code>AtomicReference</code> is designed to work with reference types and cannot be used with primitive types directly.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>AtomicLong</code> supports atomic operations on <code>long</code> values, including <code>getAndIncrement()</code> and <code>compareAndSet()</code> methods. </p>
<ul>
<li>This statement is correct. <code>AtomicLong</code> provides atomic operations on <code>long</code> values, including <code>getAndIncrement()</code> and <code>compareAndSet()</code> methods.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>AtomicBoolean</code> can be used to perform atomic arithmetic operations on <code>boolean</code> values.</p>
<ul>
<li>This statement is incorrect. <code>AtomicBoolean</code> is used for atomic updates to <code>boolean</code> values, but it does not support atomic arithmetic operations.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q4",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:4,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly uses the <code>Lock</code> interface to ensure thread-safe access to a shared resource?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.concurrent.locks.Lock;
<span class="hljs-keyword">import</span> java.util.concurrent.locks.ReentrantLock;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Counter</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> <span class="hljs-variable">count</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
    <span class="hljs-keyword">private</span> <span class="hljs-type">Lock</span> <span class="hljs-variable">lock</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ReentrantLock</span>();

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">increment</span><span class="hljs-params">()</span> {
        <span class="hljs-comment">// Insert code here</span>
    }

    <span class="hljs-keyword">public</span> <span class="hljs-type">int</span> <span class="hljs-title function_">getCount</span><span class="hljs-params">()</span> {
        <span class="hljs-keyword">return</span> count;
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code class="hljs language-java">lock.lock();
<span class="hljs-keyword">try</span> {
    count++;
} <span class="hljs-keyword">finally</span> {
    lock.unlock();
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java">lock.lock();
count++;
lock.unlock();
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> {
    lock.lock(() -&gt; {
        count++;
    });
} <span class="hljs-keyword">finally</span> {
    lock.unlock();
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">synchronized</span>(lock) {
    count++;
}
</code></pre>`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java">lock.lock();
<span class="hljs-keyword">try</span> {
    count++;
} <span class="hljs-keyword">finally</span> {
    lock.unlock();
}
</code></pre><ul>
<li><p>This option correctly acquires the lock before modifying the shared resource and ensures the lock is released in the <code>finally</code> block, which is the proper use of the <code>Lock</code> interface.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java">lock.lock();
count++;
lock.unlock();
</code></pre><ul>
<li><p>This option is incorrect because if an exception occurs between <code>lock.lock()</code> and <code>lock.unlock()</code>, the lock will not be released, potentially causing a deadlock.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> {
    lock.lock(() -&gt; {
        count++;
    });
} <span class="hljs-keyword">finally</span> {
    lock.unlock();
}
</code></pre><ul>
<li><p>This option is incorrect because that&#39;s not a valid <code>lock.lock()</code> call.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">synchronized</span>(lock) {
    count++;
}
</code></pre><ul>
<li>This option is incorrect because the <code>synchronized</code> block is used with the <code>lock</code> object itself, which is not the correct usage of the <code>Lock</code> interface and does not provide the intended functionality.</li>
</ul>
`},{id:"ch10-q5",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:5,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly demonstrates the usage of an <code>ExecutorService</code> with a <code>try-with-resources</code> block?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.concurrent.ExecutorService;
<span class="hljs-keyword">import</span> java.util.concurrent.Executors;
<span class="hljs-keyword">import</span> java.util.concurrent.TimeUnit;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ExecutorExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-comment">// Insert code here to create and use an ExecutorService with try-with-resources</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
} <span class="hljs-keyword">finally</span> {
    executor.shutdown();
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor();
<span class="hljs-keyword">try</span> {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
} <span class="hljs-keyword">finally</span> {
    executor.close();
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
    executor.awaitTermination(<span class="hljs-number">1</span>, TimeUnit.SECONDS);
}
</code></pre>`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
}
</code></pre><ul>
<li><p>This option is correct. It uses the <code>try-with-resources</code> block with the new <code>Executors.newVirtualThreadPerTaskExecutor()</code> method introduced in Java 21. The <code>ExecutorService</code> will be automatically closed when the <code>try</code> block exits, eliminating the need for explicit shutdown calls.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
} <span class="hljs-keyword">finally</span> {
    executor.shutdown();
}
</code></pre><ul>
<li><p>This option is incorrect because it unnecessarily calls <code>shutdown()</code> in the finally block. With <code>try-with-resources</code>, the <code>ExecutorService</code> is automatically closed, making the explicit <code>shutdown()</code> call redundant and potentially harmful.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor();
<span class="hljs-keyword">try</span> {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
} <span class="hljs-keyword">finally</span> {
    executor.close();
}
</code></pre><ul>
<li><p>This option is incorrect because it doesn&#39;t use <code>the try-with-resources</code> syntax. While it does correctly close the <code>ExecutorService</code>, it doesn&#39;t take advantage of the automatic resource management provided by <code>try-with-resources</code>.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(<span class="hljs-string">&quot;Task executed&quot;</span>));
    executor.awaitTermination(<span class="hljs-number">1</span>, TimeUnit.SECONDS);
}
</code></pre><ul>
<li>This option is incorrect because it unnecessarily calls <code>awaitTermination()</code>. In a <code>try-with-resources</code> block, the <code>ExecutorService</code> is automatically closed when the block exits, making the explicit wait for termination unnecessary and potentially causing the thread to block for 1 second.</li>
</ul>
`},{id:"ch10-q6",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:6,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly demonstrates how to get a result from a <code>Callable</code> task using an <code>ExecutorService</code> with <code>try-with-resources</code>?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.concurrent.Callable;
<span class="hljs-keyword">import</span> java.util.concurrent.ExecutionException;
<span class="hljs-keyword">import</span> java.util.concurrent.ExecutorService;
<span class="hljs-keyword">import</span> java.util.concurrent.Executors;
<span class="hljs-keyword">import</span> java.util.concurrent.Future;
<span class="hljs-keyword">import</span> java.util.concurrent.TimeUnit;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CallableExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        Callable&lt;Integer&gt; task = () -&gt; {
            <span class="hljs-keyword">return</span> <span class="hljs-number">123</span>;
        };
        <span class="hljs-comment">// Insert code here</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    System.out.println(future.get());
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    <span class="hljs-type">Integer</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> future.get(<span class="hljs-number">1</span>, TimeUnit.SECONDS);
    System.out.println(result);
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    executor.shutdown();
    System.out.println(future.get());
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    <span class="hljs-keyword">try</span> {
        <span class="hljs-type">Integer</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> future.get();
        System.out.println(result);
    } <span class="hljs-keyword">catch</span> (InterruptedException | ExecutionException e) {
        <span class="hljs-comment">// Handle exceptions</span>
    }
}
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    System.out.println(future.get());
}
</code></pre><ul>
<li><p>This option is incorrect because it doesn&#39;t handle the potential <code>InterruptedException</code> and <code>ExecutionException</code> that <code>future.get()</code> can throw.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    <span class="hljs-type">Integer</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> future.get(<span class="hljs-number">1</span>, TimeUnit.SECONDS);
    System.out.println(result);
}
</code></pre><ul>
<li><p>This option is incorrect because it doesn&#39;t handle the potential exceptions (<code>InterruptedException</code>, <code>ExecutionException</code>, and <code>TimeoutException</code>) that <code>future.get(long, TimeUnit)</code> can throw.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">ExecutorService</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    executor.shutdown();
    System.out.println(future.get());
}
</code></pre><ul>
<li><p>This option is incorrect because it unnecessarily calls <code>executor.shutdown()</code>. In a <code>try-with-resources</code> block, the <code>ExecutorService</code> is automatically closed when the block exits. Also, it doesn&#39;t handle the potential exceptions from <code>future.get()</code>.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-keyword">try</span> (<span class="hljs-type">var</span> <span class="hljs-variable">executor</span> <span class="hljs-operator">=</span> Executors.newVirtualThreadPerTaskExecutor()) {
    Future&lt;Integer&gt; future = executor.submit(task);
    <span class="hljs-keyword">try</span> {
        <span class="hljs-type">Integer</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> future.get();
        System.out.println(result);
    } <span class="hljs-keyword">catch</span> (InterruptedException | ExecutionException e) {
        e.printStackTrace();
    }
}
</code></pre><ul>
<li>This option is correct. It uses <code>try-with-resources</code> to automatically close the <code>ExecutorService</code>, properly submits the <code>Callable</code> task, retrieves the result using <code>Future.get()</code>, and handles the potential <code>InterruptedException</code> and <code>ExecutionException</code> that might be thrown.</li>
</ul>
`},{id:"ch10-q7",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:7,multiSelect:!1,stemHtml:`<p>Which of the following statements about Java&#39;s concurrent collections is correct?</p>
`,options:[{letter:"A",html:`<p><code>ConcurrentHashMap</code> allows concurrent read and write operations, and retrieval operations do not block even when updates are being made.</p>
`},{letter:"B",html:`<p><code>CopyOnWriteArrayList</code> is optimized for scenarios with a high number of write operations compared to read operations.</p>
`},{letter:"C",html:`<p><code>ConcurrentSkipListSet</code> does not kept elements sorted.</p>
`},{letter:"D",html:`<p><code>BlockingQueue</code> implementations like <code>LinkedBlockingQueue</code> allow elements to be added and removed concurrently without any internal locking mechanisms.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>ConcurrentHashMap</code> allows concurrent read and write operations, and retrieval operations do not block even when updates are being made.</p>
<ul>
<li>This statement is correct. <code>ConcurrentHashMap</code> is designed to handle concurrent access, allowing multiple threads to read and write simultaneously without blocking read operations during updates.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>CopyOnWriteArrayList</code> is optimized for scenarios with a high number of write operations compared to read operations. </p>
<ul>
<li>This statement is incorrect. <code>CopyOnWriteArrayList</code> is optimized for scenarios where read operations are far more frequent than write operations because it creates a new copy of the array on each write, which can be costly if writes are frequent.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>ConcurrentSkipListSet</code> does not kept elements sorted.</p>
<ul>
<li>This statement is incorrect. <code>ConcurrentSkipListSet</code> keep elements according to their natural ordering, or by a <code>Comparator</code> provided at set creation time.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>BlockingQueue</code> implementations like <code>LinkedBlockingQueue</code> allow elements to be added and removed concurrently without any internal locking mechanisms.</p>
<ul>
<li>This statement is incorrect. <code>BlockingQueue</code> implementations like <code>LinkedBlockingQueue</code> do use internal locking mechanisms to handle concurrent access safely.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q8",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:8,multiSelect:!1,stemHtml:`<p>Which of the following statements about parallel streams is correct?</p>
`,options:[{letter:"A",html:`<p>Parallel streams always improve the performance of a program by utilizing multiple threads.</p>
`},{letter:"B",html:`<p>Parallel streams can lead to incorrect results if the operations performed are not thread-safe.</p>
`},{letter:"C",html:`<p>The order of elements in a parallel stream is always preserved compared to the original stream.</p>
`},{letter:"D",html:`<p>Using parallel streams guarantees that the operations on elements will execute in a fixed order.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Parallel streams always improve the performance of a program by utilizing multiple threads.</p>
<ul>
<li>This statement is incorrect because parallel streams do not always improve performance. The overhead of managing multiple threads can sometimes outweigh the benefits, especially for small datasets or simple operations.</li>
</ul>
</li>
<li><p><strong>B)</strong> Parallel streams can lead to incorrect results if the operations performed are not thread-safe.</p>
<ul>
<li>This statement is correct. When using parallel streams, care must be taken to ensure that the operations performed on the elements are thread-safe. Failure to do so can lead to race conditions and incorrect results.</li>
</ul>
</li>
<li><p><strong>C)</strong> The order of elements in a parallel stream is always preserved compared to the original stream.</p>
<ul>
<li>This statement is incorrect. The order of elements in a parallel stream is not guaranteed to be the same as in the original stream unless special care is taken to preserve the order, such as using ordered stream operations.</li>
</ul>
</li>
<li><p><strong>D)</strong> Using parallel streams guarantees that the operations on elements will execute in a fixed order.</p>
<ul>
<li>This statement is incorrect because parallel streams do not guarantee the order of execution of operations on elements. The operations may execute in a non-deterministic order due to the concurrent nature of parallel processing.</li>
</ul>
</li>
</ul>
`},{id:"ch10-q9",chapter:"ch10",chapterTitle:"Chapter TEN",chapterSubtitle:"Concurrency and Multithreading",number:9,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly demonstrates how to reduce a parallel stream to compute the sum of its elements?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.Arrays;
<span class="hljs-keyword">import</span> java.util.List;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ParallelStreamExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        List&lt;Integer&gt; numbers = Arrays.asList(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);
        <span class="hljs-comment">// Insert code here</span>
    }
}
</code></pre>`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().reduce(<span class="hljs-number">1</span>, Integer::sum);
System.out.println(sum);
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().reduce(<span class="hljs-number">0</span>, Integer::sum);
System.out.println(sum);
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.stream().reduce(<span class="hljs-number">0</span>, Integer::sum);
System.out.println(sum);
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().collect(reduce(<span class="hljs-number">0</span>, Integer::sum));
System.out.println(sum);
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().reduce(<span class="hljs-number">1</span>, Integer::sum);
System.out.println(sum);
</code></pre><ul>
<li><p>This option is incorrect because it uses <code>1</code> as the identity value. The identity value for sum should be <code>0</code>, as it is the neutral element for addition. Starting the reduction with <code>1</code> will result in an incorrect sum that is incremented by <code>1</code>.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().reduce(<span class="hljs-number">0</span>, Integer::sum).collect();
System.out.println(sum);
</code></pre><ul>
<li><p>This option is correct. It correctly uses <code>parallelStream()</code> to create a parallel stream and the <code>reduce</code> method with the identity value <code>0</code> and the method reference <code>Integer::sum</code> to sum the elements.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.stream().reduce(<span class="hljs-number">0</span>, Integer::sum);
System.out.println(sum);
</code></pre><ul>
<li><p>This option is incorrect because it uses a sequential stream (<code>stream()</code>) instead of a parallel stream. While it correctly sums the elements, it does not demonstrate the use of a parallel stream as specified in the question.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">int</span> <span class="hljs-variable">sum</span> <span class="hljs-operator">=</span> numbers.parallelStream().collect(reduce(<span class="hljs-number">0</span>, Integer::sum));
System.out.println(sum);
</code></pre><ul>
<li>This option is incorrect because it attempts to use the <code>collect()</code> method in combination with <code>reduce()</code>, which is not the correct syntax. The <code>collect()</code> method is used for mutable reduction and is typically used with collectors, not with the <code>reduce()</code> operation directly.</li>
</ul>
`},{id:"ch11-q1",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:1,multiSelect:!1,stemHtml:`<p>Which of the following are valid ways to create a <code>LocalDate</code> object?</p>
`,options:[{letter:"A",html:`<p><code>LocalDate.of(2014);</code></p>
`},{letter:"B",html:`<p><code>LocalDate.with(2014, 1, 30);</code></p>
`},{letter:"C",html:`<p><code>LocalDate.of(2014, 0, 30);</code></p>
`},{letter:"D",html:`<p><code>LocalDate.now().plusDays(5);</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>LocalDate.of(2014);</code> </p>
<ul>
<li>This option is incorrect. The <code>LocalDate.of()</code> method requires a year, month, and day to be specified. Providing only a year will result in a compilation error.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>LocalDate.with(2014, 1, 30);</code></p>
<ul>
<li>This option is incorrect. The <code>LocalDate</code> class does not have a <code>with()</code> method that takes three int arguments for year, month, and day. The correct method to use is <code>LocalDate.of(int year, int month, int dayOfMonth)</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>LocalDate.of(2014, 0, 30);</code></p>
<ul>
<li>This option is incorrect. The month value is 0, but months in the <code>LocalDate</code> class are indexed starting from 1. Valid month values are from 1 to 12, so using 0 will throw a <code>DateTimeException</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>LocalDate.now().plusDays(5);</code></p>
<ul>
<li>This option is correct. It accurately obtains the current date using <code>LocalDate.now()</code> and then adds 5 days to it using the <code>plusDays()</code> method. This will create a new <code>LocalDate</code> object representing the date 5 days from now.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q2",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:2,multiSelect:!1,stemHtml:`<p>Which of the following options is the result of executing this line?</p>
<pre><code class="hljs language-java">LocalDate.of(<span class="hljs-number">2014</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>).atTime(<span class="hljs-number">14</span>, <span class="hljs-number">30</span>, <span class="hljs-number">59</span>, <span class="hljs-number">999999</span>)
</code></pre>`,options:[{letter:"A",html:`<p>A <code>LocalDate</code> instance representing <code>2014-01-02</code></p>
`},{letter:"B",html:`<p>A <code>LocalTime</code> instance representing <code>14:30:59:999999</code></p>
`},{letter:"C",html:`<p>A <code>LocalDateTime</code> instance representing <code>2014-01-02 14:30:59:999999</code></p>
`},{letter:"D",html:`<p>An exception is thrown</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> A <code>LocalDate</code> instance representing <code>2014-01-02</code> </p>
<ul>
<li>This option is incorrect. The <code>atTime</code> method does not return a <code>LocalDate</code>, but rather combines the <code>LocalDate</code> with the provided time parameters to create a <code>LocalDateTime</code> object.</li>
</ul>
</li>
<li><p><strong>B)</strong> A <code>LocalTime</code> instance representing <code>14:30:59:999999</code></p>
<ul>
<li>This option is incorrect. The <code>atTime</code> method does not return a <code>LocalTime</code>, but rather combines the <code>LocalDate</code> with the provided time parameters to create a <code>LocalDateTime</code> object. Additionally, <code>LocalTime</code> does not have nanosecond precision, so <code>999999</code> nanoseconds would be an invalid <code>LocalTime</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> A <code>LocalDateTime</code> instance representing <code>2014-01-02 14:30:59:999999</code> </p>
<ul>
<li>This option is correct. The <code>atTime</code> method takes a <code>LocalDate</code> and combines it with the provided hour, minute, second, and nanosecond parameters to create a <code>LocalDateTime</code> object representing that date and time. The resulting <code>LocalDateTime</code> will be <code>2014-01-02 14:30:59:999999</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> An exception is thrown</p>
<ul>
<li>This option is incorrect. The provided parameters of 14 for hour, 30 for minute, 59 for second, and 999999 for nanosecond are all valid values for their respective fields, so combining them with the <code>LocalDate</code> will not throw an exception.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q3",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:3,multiSelect:!0,stemHtml:`<p>Which of the following are valid <code>ChronoUnit</code> values for <code>LocalTime</code>? (Choose all that apply)**</p>
`,options:[{letter:"A",html:`<p><code>YEAR</code></p>
`},{letter:"B",html:`<p><code>NANOS</code></p>
`},{letter:"C",html:`<p><code>DAY</code></p>
`},{letter:"D",html:`<p><code>HALF_DAYS</code></p>
`}],correct:["B","D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>YEAR</code></p>
<ul>
<li>This option is incorrect. <code>YEAR</code> is not a valid <code>ChronoUnit</code> for <code>LocalTime</code>. <code>LocalTime</code> represents a time of day without any date information, so units of <code>YEAR</code> do not apply.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>NANOS</code></p>
<ul>
<li>This option is correct. <code>NANOS</code> is a valid <code>ChronoUnit</code> for <code>LocalTime</code>. <code>LocalTime</code> has nanosecond precision, so you can perform operations on <code>LocalTime</code> using the <code>NANOS</code> unit.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>DAY</code></p>
<ul>
<li>This option is incorrect. <code>DAY</code> is not a valid <code>ChronoUnit</code> for <code>LocalTime</code>. Similar to <code>YEAR</code>, <code>LocalTime</code> has no concept of days since it only represents a time, not a date.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>HALF_DAYS</code></p>
<ul>
<li>This option is correct. <code>HALF_DAYS</code> is a valid <code>ChronoUnit</code> for <code>LocalTime</code>. A day can be divided into two 12-hour periods (AM and PM), so <code>HALF_DAYS</code> can be used with <code>LocalTime</code> to represent a difference or addition of 12 hour chunks of time.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q4",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:4,multiSelect:!0,stemHtml:`<p>Which of the following statements are true? (Choose all that apply)**</p>
`,options:[{letter:"A",html:`<p><code>java.time.Period</code> implements <code>java.time.temporal.Temporal</code></p>
`},{letter:"B",html:`<p><code>java.time.Instant</code> implements <code>java.time.temporal.Temporal</code></p>
`},{letter:"C",html:`<p><code>LocalDate</code> and <code>LocalTime</code> are thread-safe</p>
`},{letter:"D",html:`<p><code>LocalDateTime.now()</code> will return the current time in UTC zone</p>
`}],correct:["B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>java.time.Period</code> implements <code>java.time.temporal.Temporal</code></p>
<ul>
<li>This option is incorrect. <code>java.time.Period</code> does not implement the <code>java.time.temporal.Temporal</code> interface. <code>Period</code> represents a span of time between two dates and is not itself a temporal object.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>java.time.Instant</code> implements <code>java.time.temporal.Temporal</code></p>
<ul>
<li>This option is correct. <code>java.time.Instant</code> does implement the <code>java.time.temporal.Temporal</code> interface. <code>Instant</code> represents a point in time on the timeline and can be thought of as a temporal object.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>LocalDate</code> and <code>LocalTime</code> are thread-safe.</p>
<ul>
<li>This option is correct. <code>LocalDate</code> and <code>LocalTime</code> are indeed thread-safe. All the core Java Time classes, including <code>LocalDate</code>, <code>LocalTime</code>, <code>LocalDateTime</code>, <code>Instant</code>, etc., are designed to be immutable and thread-safe.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>LocalDateTime.now()</code> will return the current time in UTC zone</p>
<ul>
<li>This option is incorrect. <code>LocalDateTime.now()</code> returns the current date and time using the system clock in the default time zone, not necessarily in the UTC zone. To get the current time in UTC, you would use <code>LocalDateTime.now(ZoneOffset.UTC)</code> or <code>Instant.now()</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q5",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:5,multiSelect:!1,stemHtml:`<p>Which of the following options is a valid way to get the nanoseconds part of an <code>Instant</code> object referenced by <code>i</code>?**</p>
`,options:[{letter:"A",html:`<p><code>int nanos = i.getNano();</code></p>
`},{letter:"B",html:`<p><code>long nanos = i.get(ChronoField.NANOS);</code></p>
`},{letter:"C",html:`<p><code>long nanos = i.get(ChronoUnit.NANOS);</code></p>
`},{letter:"D",html:`<p><code>int nanos = i.getEpochNano();</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>int nanos = i.getNano();</code></p>
<ul>
<li>This option is correct. The <code>Instant</code> class does have a <code>getNano()</code> method that returns the nanosecond part of the <code>Instant</code> as an <code>int</code>. This is a valid way to get the nanoseconds.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>long nanos = i.get(ChronoField.NANOS);</code></p>
<ul>
<li>This option is incorrect. You can use the <code>get(TemporalField)</code> method of <code>Instant</code> to get the value of a specific <code>ChronoField</code>. Passing <code>ChronoField.NANO_OF_SECOND</code> (not <code>ChronoField.NANO</code>) will return the nanosecond part of the <code>Instant</code> as a <code>long</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>long nanos = i.get(ChronoUnit.NANOS);</code></p>
<ul>
<li>This option is incorrect. While <code>Instant</code> does have a <code>get(TemporalUnit)</code> method, <code>ChronoUnit.NANOS</code> is not a valid argument for it. <code>ChronoUnit</code> values are used for durations and periods, not for fields of a temporal object.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>int nanos = i.getEpochNano();</code></p>
<ul>
<li>This option is incorrect. The <code>Instant</code> class does have a <code>getEpochSecond()</code> method that returns the number of seconds since the Unix epoch, but there is no corresponding <code>getEpochNano()</code> method.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q6",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:6,multiSelect:!1,stemHtml:`<p>Which of the following options is the result of executing this line?</p>
<pre><code class="hljs language-java">System.out.println(
   Period.between(
       LocalDate.of(<span class="hljs-number">2025</span>, <span class="hljs-number">3</span>, <span class="hljs-number">20</span>),
       LocalDate.of(<span class="hljs-number">2025</span>, <span class="hljs-number">2</span>, <span class="hljs-number">20</span>))
);
</code></pre>`,options:[{letter:"A",html:`<p><code>P29D</code></p>
`},{letter:"B",html:`<p><code>P-29D</code></p>
`},{letter:"C",html:`<p><code>P1M</code></p>
`},{letter:"D",html:`<p><code>P-1M</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>P29D</code></p>
<ul>
<li>This option is incorrect. The <code>Period.between</code> method calculates the period between the second date and the first date, in that order. Since the first date (2025-03-20) is later than the second date (2025-02-20), the resulting period will be negative, not positive.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>P-29D</code></p>
<ul>
<li>This option is incorrect. While the resulting period will be negative, it will not be represented as <code>-29D</code>. A <code>Period</code> first counts the number of complete months, then the remaining days.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>P1M</code></p>
<ul>
<li>This option is incorrect. The resulting period will be negative because the first date is later than the second date.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>P-1M</code></p>
<ul>
<li>This option is correct. The <code>Period.between</code> method subtracts the second date from the first date. In this case, <code>2025-03-20</code> minus <code>2025-02-20</code> results in a period of -1 month, which is represented as <code>P-1M</code>. The <code>Period</code> class first calculates the difference in complete months, and then any remaining days. Since the difference is exactly one month, the result is <code>P-1M</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q7",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:7,multiSelect:!1,stemHtml:`<p>Which of the following options is the result of executing this line?** </p>
<pre><code class="hljs language-java">System.out.println(
   Duration.between(
       LocalDateTime.of(<span class="hljs-number">2025</span>, <span class="hljs-number">3</span>, <span class="hljs-number">20</span>, <span class="hljs-number">18</span>, <span class="hljs-number">0</span>),
       LocalTime.of(<span class="hljs-number">18</span>, <span class="hljs-number">5</span>) )
);
</code></pre>`,options:[{letter:"A",html:`<p><code>PT5M</code></p>
`},{letter:"B",html:`<p><code>PT-5M</code></p>
`},{letter:"C",html:`<p><code>PT300S</code></p>
`},{letter:"D",html:`<p>An exception is thrown</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>PT5M</code></p>
<ul>
<li>This option is incorrect. <code>PT5M</code> represents a duration of 5 minutes, which would be the result if the second time point was 5 minutes after the first. However, since <code>LocalTime.of(18, 5)</code> is being compared to a <code>LocalDateTime</code>, this causes an issue because they are not of the same type.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>PT-5M</code></p>
<ul>
<li>This option is incorrect. <code>PT-5M</code> represents a duration of negative 5 minutes. Similar to option A, this would only be the case if the second time point was before the first. The main issue is that there is a type mismatch between <code>LocalDateTime</code> and <code>LocalTime</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>PT300S</code></p>
<ul>
<li>This option is incorrect. <code>PT300S</code> represents a duration of 300 seconds (or 5 minutes), which again would be the result if the second time point was 5 minutes after the first. However, this still doesn&#39;t resolve the type mismatch issue between <code>LocalDateTime</code> and <code>LocalTime</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> An exception is thrown</p>
<ul>
<li>This option is correct. An exception is thrown because there is a type mismatch between <code>LocalDateTime.of(2025, 3, 20, 18, 0)</code> and <code>LocalTime.of(18, 5)</code>. The <code>Duration.between</code> method requires two temporal objects of the same type.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q8",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:8,multiSelect:!0,stemHtml:`<p>Which of the following are valid <code>ChronoField</code> values for <code>LocalDate</code>?**</p>
`,options:[{letter:"A",html:`<p><code>DAY_OF_WEEK</code></p>
`},{letter:"B",html:`<p><code>HOUR_OF_DAY</code></p>
`},{letter:"C",html:`<p><code>DAY_OF_MONTH</code></p>
`},{letter:"D",html:`<p><code>MILLI_OF_SECOND</code></p>
`}],correct:["A","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>DAY_OF_WEEK</code></p>
<ul>
<li>This option is correct. <code>DAY_OF_WEEK</code> is a valid <code>ChronoField</code> value for <code>LocalDate</code>. It represents the day of the week, an integer from 1 (Monday) to 7 (Sunday), which can be extracted from a <code>LocalDate</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>HOUR_OF_DAY</code></p>
<ul>
<li>This option is incorrect. <code>HOUR_OF_DAY</code> is not a valid <code>ChronoField</code> value for <code>LocalDate</code>. <code>HOUR_OF_DAY</code> pertains to <code>LocalTime</code> or <code>LocalDateTime</code>, which include time components, whereas <code>LocalDate</code> only deals with date components.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>DAY_OF_MONTH</code></p>
<ul>
<li>This option is correct. <code>DAY_OF_MONTH</code> is a valid <code>ChronoField</code> value for <code>LocalDate</code>. It represents the day of the month, which can be extracted from a <code>LocalDate</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>MILLI_OF_SECOND</code></p>
<ul>
<li>This option is incorrect. <code>MILLI_OF_SECOND</code> is not a valid <code>ChronoField</code> value for <code>LocalDate</code>. <code>MILLI_OF_SECOND</code> pertains to time components, specifically for <code>LocalTime</code> or <code>LocalDateTime</code>, and <code>LocalDate</code> only deals with date components.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q9",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:9,multiSelect:!1,stemHtml:`<p>Which of the following are valid ways to create a <code>ZoneId</code> object?**</p>
`,options:[{letter:"A",html:`<p><code>ZoneId.ofHours(2);</code></p>
`},{letter:"B",html:`<p><code>ZoneId.of(&quot;2&quot;);</code></p>
`},{letter:"C",html:`<p><code>ZoneId.of(&quot;-1&quot;);</code></p>
`},{letter:"D",html:`<p><code>ZoneId.of(&quot;America/Canada&quot;);</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>ZoneId.ofHours(2);</code></p>
<ul>
<li>This option is incorrect. The method <code>ofHours(int)</code> belongs to the <code>ZoneOffset</code> class, not <code>ZoneId</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>ZoneId.of(&quot;2&quot;);</code></p>
<ul>
<li>This option is incorrect. The format of the offset is incorrect for <code>ZoneId</code>. It should be a proper time-zone ID or start with a sign (<code>+</code> or <code>-</code>).</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>ZoneId.of(&quot;-1&quot;);</code></p>
<ul>
<li>This option is correct. <code>ZoneId.of(&quot;-1&quot;)</code> is valid since it follows the correct format for time-zone offsets.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>ZoneId.of(&quot;America/Canada&quot;);</code></p>
<ul>
<li>This option is incorrect. The format for zone regions should be in the <code>&quot;Area/City&quot;</code> format, not <code>&quot;Area/Country&quot;</code>. A valid example would be <code>&quot;America/Montreal&quot;</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q10",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:10,multiSelect:!1,stemHtml:`<p>Which of the following options is the result of executing these lines?</p>
<pre><code class="hljs language-java"><span class="hljs-type">ZoneOffset</span> <span class="hljs-variable">offset</span> <span class="hljs-operator">=</span> ZoneOffset.of(<span class="hljs-string">&quot;Z&quot;</span>);
System.out.println(
   offset.get(ChronoField.HOUR_OF_DAY)
);
</code></pre>`,options:[{letter:"A",html:`<p><code>0</code></p>
`},{letter:"B",html:`<p><code>1</code></p>
`},{letter:"C",html:`<p><code>12:00</code></p>
`},{letter:"D",html:`<p>An exception is thrown</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>0</code></p>
<ul>
<li>This option is incorrect. The method <code>offset.get(ChronoField.HOUR_OF_DAY)</code> does not return the hour value of the <code>ZoneOffset</code>. <code>ZoneOffset</code> represents a time-zone offset from UTC/Greenwich, and calling <code>get(ChronoField.HOUR_OF_DAY)</code> on it is not appropriate.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>1</code></p>
<ul>
<li>This option is incorrect. Similar to option A, the <code>get</code> method of <code>ZoneOffset</code> with <code>ChronoField.HOUR_OF_DAY</code> does not produce this result. The <code>ZoneOffset</code> class is not meant to provide such a field directly.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>12:00</code></p>
<ul>
<li>This option is incorrect. <code>12:00</code> is not a valid response for the method call as it implies a time representation, while <code>ZoneOffset</code> is dealing with offset values rather than specific time of day values.</li>
</ul>
</li>
<li><p><strong>D)</strong> An exception is thrown</p>
<ul>
<li>This option is correct. An exception is thrown because <code>ZoneOffset</code> does not support the field <code>ChronoField.HOUR_OF_DAY</code>. The <code>ZoneOffset</code> class provides offset values in terms of seconds rather than specific chrono fields like hour of day.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q11",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:11,multiSelect:!1,stemHtml:`<p>Assuming a local time zone of <code>+2:00</code>, which of the following options is the result of executing these lines?</p>
<pre><code class="hljs language-java"><span class="hljs-type">ZonedDateTime</span> <span class="hljs-variable">zdt</span> <span class="hljs-operator">=</span>
   ZonedDateTime.of(<span class="hljs-number">2025</span>, <span class="hljs-number">02</span>, <span class="hljs-number">28</span>, <span class="hljs-number">5</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,
       ZoneId.of(<span class="hljs-string">&quot;+05:00&quot;</span>));
System.out.println(zdt.toLocalTime());
</code></pre>`,options:[{letter:"A",html:`<p><code>05:00</code></p>
`},{letter:"B",html:`<p><code>17:00</code></p>
`},{letter:"C",html:`<p><code>02:00</code></p>
`},{letter:"D",html:`<p><code>03:00</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>05:00</code> </p>
<ul>
<li>This option is correct. <code>ZonedDateTime.of(2025, 02, 28, 5, 0, 0, 0, ZoneId.of(&quot;+05:00&quot;))</code> creates a <code>ZonedDateTime</code> instance with the specified date, time, and time zone offset of +05:00. Calling <code>toLocalTime()</code> on this instance returns the local time, which is <code>05:00</code>, as no conversion to the local time zone of +2:00 is done in this code snippet.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>17:00</code></p>
<ul>
<li>This option is incorrect. <code>17:00</code> would be the time if the code converted the given time (05:00) from the +05:00 time zone to the local time zone of +02:00, which it does not.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>02:00</code></p>
<ul>
<li>This option is incorrect. <code>02:00</code> does not correspond to any logical result based on the given time and time zone offset.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>03:00</code></p>
<ul>
<li>This option is incorrect. <code>03:00</code> also does not correspond to any logical result based on the given time and time zone offset.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q12",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:12,multiSelect:!1,stemHtml:`<p>Assuming that DST starts on October, 4, 2025 at 0:00:00, which of the following is the result of executing the above lines?</p>
<pre><code class="hljs language-java"><span class="hljs-type">ZonedDateTime</span> <span class="hljs-variable">zdt</span> <span class="hljs-operator">=</span>
    ZonedDateTime.of(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">4</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,
        ZoneId.of(<span class="hljs-string">&quot;America/Asuncion&quot;</span>))
    .plus(Duration.ofHours(<span class="hljs-number">1</span>));
System.out.println(zdt);
</code></pre>`,options:[{letter:"A",html:`<p><code>2025-10-04T00:00-03:00[America/Asuncion]</code></p>
`},{letter:"B",html:`<p><code>2025-10-04T01:00-03:00[America/Asuncion]</code></p>
`},{letter:"C",html:`<p><code>2025-10-04T02:00-03:00[America/Asuncion]</code></p>
`},{letter:"D",html:`<p><code>2025-10-03T23:00-03:00[America/Asuncion]</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>2025-10-04T00:00-03:00[America/Asuncion]</code> </p>
<ul>
<li>This option is incorrect. The initial time is <code>2025-10-04T00:00-03:00[America/Asuncion]</code> before DST starts. When 1 hour is added, the time will shift forward by 1 hour, but since DST starts at this moment, the offset will change.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>2025-10-04T01:00-03:00[America/Asuncion]</code> </p>
<ul>
<li>This option is incorrect. Adding 1 hour to the initial time <code>2025-10-04T00:00-03:00[America/Asuncion]</code> while considering the start of DST (which typically adds 1 hour to the local time) means that the effective time would be adjusted by the DST transition.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>2025-10-04T02:00-03:00[America/Asuncion]</code></p>
<ul>
<li>This option is correct. Initially, the time is <code>2025-10-04T00:00-03:00[America/Asuncion]</code>. With the addition of 1 hour and considering the DST start at <code>2025-10-04T00:00</code>, the time advances to <code>2025-10-04T02:00-03:00[America/Asuncion]</code>, as it effectively skips the 01:00 hour.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>2025-10-03T23:00-03:00[America/Asuncion]</code></p>
<ul>
<li>This option is incorrect. The date and time <code>2025-10-03T23:00-03:00[America/Asuncion]</code> does not correlate correctly with the 1 hour addition from the initial time and does not account for the DST transition.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q13",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:13,multiSelect:!0,stemHtml:`<p>Which of the following statements are true? (Choose all that apply)</p>
`,options:[{letter:"A",html:`<p><code>java.time.ZoneOffset</code> is a subclass of <code>java.time.ZoneId</code>.</p>
`},{letter:"B",html:`<p><code>java.time.Instant</code> can be obtained from <code>java.time.ZonedDateTime</code>.</p>
`},{letter:"C",html:`<p><code>java.time.ZoneOffset</code> can manage DST.</p>
`},{letter:"D",html:`<p><code>java.time.OffsetDateTime</code> represents a point in time in the UTC time zone.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>java.time.ZoneOffset</code> is a subclass of <code>java.time.ZoneId</code>.</p>
<ul>
<li>This option is incorrect. <code>java.time.ZoneOffset</code> is not a subclass of <code>java.time.ZoneId</code>. <code>java.time.ZoneOffset</code> is a final class that extends <code>java.time.ZoneId</code> but it is not a subclass.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>java.time.Instant</code> can be obtained from <code>java.time.ZonedDateTime</code>. </p>
<ul>
<li>This option is correct. <code>java.time.Instant</code> can indeed be obtained from <code>java.time.ZonedDateTime</code> using the <code>toInstant()</code> method.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>java.time.ZoneOffset</code> can manage DST.</p>
<ul>
<li>This option is incorrect. <code>java.time.ZoneOffset</code> represents a fixed offset from UTC and does not manage Daylight Saving Time (DST). DST is managed by <code>java.time.ZoneId</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>java.time.OffsetDateTime</code> represents a point in time in the UTC time zone.</p>
<ul>
<li>This option is incorrect. <code>java.time.OffsetDateTime</code> represents a date-time with an offset from UTC, but it does not necessarily represent a point in the UTC time zone. The offset can be any valid <code>ZoneOffset</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q14",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:14,multiSelect:!1,stemHtml:`<p>Which of the following options is the result of executing these lines?</p>
<pre><code class="hljs language-java"><span class="hljs-type">DateTimeFormatter</span> <span class="hljs-variable">formatter</span> <span class="hljs-operator">=</span>
   DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT);
System.out.println(
   formatter
   .withLocale(Locale.ENGLISH)
   .format(LocalDateTime.of(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">16</span>, <span class="hljs-number">0</span>))
);
</code></pre>`,options:[{letter:"A",html:`<p><code>5/7/15 4:00 PM</code></p>
`},{letter:"B",html:`<p><code>5/7/15</code></p>
`},{letter:"C",html:`<p><code>4:00 PM</code></p>
`},{letter:"D",html:`<p><code>4:00:00 PM</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>5/7/15 4:00 PM</code></p>
<ul>
<li>This option is incorrect. The <code>DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)</code> method is used to format only the time portion of a <code>LocalDateTime</code> object, and it does not include the date. Therefore, the output will not include <code>5/7/15</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>5/7/15</code></p>
<ul>
<li>This option is incorrect. As mentioned earlier, the <code>DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)</code> formats only the time portion and does not include the date. Thus, the output <code>5/7/15</code> is not possible.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>4:00 PM</code></p>
<ul>
<li>This option is correct. The <code>DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)</code> formats the time portion of the <code>LocalDateTime</code> object in a short style. Given the input time <code>16:00</code>, in the <code>Locale.ENGLISH</code>, the formatted output is <code>4:00 PM</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>4:00:00 PM</code></p>
<ul>
<li>This option is incorrect. The <code>DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)</code> formats the time portion without including seconds. Therefore, the output will not include <code>4:00:00 PM</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch11-q15",chapter:"ch11",chapterTitle:"Chapter ELEVEN",chapterSubtitle:"The Date/Time API",number:15,multiSelect:!1,stemHtml:`<p>Which of the following statements is true about these lines?</p>
<pre><code class="hljs language-java"><span class="hljs-type">DateTimeFormatter</span> <span class="hljs-variable">formatter</span> <span class="hljs-operator">=</span>
   DateTimeFormatter.ofPattern(<span class="hljs-string">&quot;HH:mm:ss X&quot;</span>);
<span class="hljs-type">OffsetDateTime</span> <span class="hljs-variable">odt</span> <span class="hljs-operator">=</span>
   OffsetDateTime.parse(<span class="hljs-string">&quot;11:50:20 Z&quot;</span>, formatter);
</code></pre>`,options:[{letter:"A",html:`<p>The pattern <code>HH:mm:ss X</code> is invalid.</p>
`},{letter:"B",html:`<p>An <code>OffsetDateTime</code> is created successfully.</p>
`},{letter:"C",html:`<p><code>Z</code> is an invalid offset.</p>
`},{letter:"D",html:`<p>An exception is thrown at runtime.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The pattern <code>HH:mm:ss X</code> is invalid.</p>
<ul>
<li>This option is incorrect. The pattern <code>HH:mm:ss X</code> is valid. <code>HH</code> represents the hour of the day (00-23), <code>mm</code> represents the minute of the hour, <code>ss</code> represents the second of the minute, and <code>X</code> represents the ISO 8601 time zone offset.</li>
</ul>
</li>
<li><p><strong>B)</strong> An <code>OffsetDateTime</code> is created successfully. </p>
<ul>
<li>This option is incorrect. The pattern <code>HH:mm:ss X</code> is valid, but the <code>OffsetDateTime.parse</code> method requires a date and time format along with the offset. Since the input string <code>&quot;11:50:20 Z&quot;</code> does not contain a date part, this will cause a <code>DateTimeParseException</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>Z</code> is an invalid offset.</p>
<ul>
<li>This option is incorrect. <code>Z</code> is a valid offset representing UTC (Coordinated Universal Time).</li>
</ul>
</li>
<li><p><strong>D)</strong> An exception is thrown at runtime.</p>
<ul>
<li>This option is correct. An exception is thrown at runtime because the input string <code>&quot;11:50:20 Z&quot;</code> does not match the expected pattern for an <code>OffsetDateTime</code>, which typically includes a date part as well as the time and offset.</li>
</ul>
</li>
</ul>
`},{id:"ch12-q1",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:1,multiSelect:!1,stemHtml:`<p>What is the result of the following code snippet?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.nio.file.Path;
<span class="hljs-keyword">import</span> java.nio.file.Paths;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PathExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Path</span> <span class="hljs-variable">basePath</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;/home/user&quot;</span>);
        <span class="hljs-type">Path</span> <span class="hljs-variable">relativePath</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;documents/notes.txt&quot;</span>);
        <span class="hljs-type">Path</span> <span class="hljs-variable">resultPath</span> <span class="hljs-operator">=</span> basePath.resolve(relativePath);
        System.out.println(resultPath);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>/home/user</code></p>
`},{letter:"B",html:`<p><code>/home/user/documents</code></p>
`},{letter:"C",html:`<p><code>/documents/notes.txt</code></p>
`},{letter:"D",html:`<p><code>/home/user/documents/notes.txt</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>/home/user</code></p>
<ul>
<li>This option is incorrect. The <code>resolve</code> method appends the given path to the base path. It does not return the base path alone.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>/home/user/documents</code> </p>
<ul>
<li>This option is incorrect. The <code>resolve</code> method includes the entire relative path provided as an argument, not just part of it.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>/documents/notes.txt</code></p>
<ul>
<li>This option is incorrect. The <code>resolve</code> method combines the base path with the given relative path; it does not replace the base path with the relative path.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>/home/user/documents/notes.txt</code></p>
<ul>
<li>This option is correct. The <code>resolve</code> method appends the relative path to the base path, resulting in <code>/home/user/documents/notes.txt</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch12-q2",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:2,multiSelect:!1,stemHtml:`<p>What is the result of the following code snippet?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.nio.file.Path;
<span class="hljs-keyword">import</span> java.nio.file.Paths;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PathExample</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;/home/user/../documents/./notes.txt&quot;</span>);
        <span class="hljs-type">Path</span> <span class="hljs-variable">normalizedPath</span> <span class="hljs-operator">=</span> path.normalize();
        System.out.println(normalizedPath);
    }
}
</code></pre>`,options:[{letter:"A",html:`<p><code>/home/user/../documents/./notes.txt</code></p>
`},{letter:"B",html:`<p><code>/home/user/documents/notes.txt</code></p>
`},{letter:"C",html:`<p><code>/home/documents/notes.txt</code></p>
`},{letter:"D",html:`<p><code>/documents/notes.txt</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>/home/user/../documents/./notes.txt</code> </p>
<ul>
<li>This option is incorrect. The <code>normalize</code> method removes redundant <code>.</code> and <code>..</code> elements, so it wouldn&#39;t leave the path as is.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>/home/user/documents/notes.txt</code></p>
<ul>
<li>This option is incorrect. While the <code>.</code> is removed, the <code>..</code> navigates one directory up, resulting in an incorrect final path.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>/home/documents/notes.txt</code></p>
<ul>
<li>This option is correct. The <code>normalize</code> method processes the path by removing the <code>.</code> and moving one directory up due to <code>..</code>, resulting in <code>/home/documents/notes.txt</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>/documents/notes.txt</code></p>
<ul>
<li>This option is incorrect. The <code>normalize</code> method does not completely remove the leading part of the path up to <code>documents</code>. It only processes the <code>.</code> and <code>..</code> elements.</li>
</ul>
</li>
</ul>
`},{id:"ch12-q3",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:3,multiSelect:!1,stemHtml:`<p>Which of the following classes is used for reading character streams in Java?</p>
`,options:[{letter:"A",html:`<p><code>FileOutputStream</code></p>
`},{letter:"B",html:`<p><code>FileReader</code></p>
`},{letter:"C",html:`<p><code>BufferedOutputStream</code></p>
`},{letter:"D",html:`<p><code>ObjectInputStream</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>FileOutputStream</code></p>
<ul>
<li>This option is incorrect. <code>FileOutputStream</code> is used for writing binary data to a file, not for reading character streams.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>FileReader</code></p>
<ul>
<li>This option is correct. <code>FileReader</code> is designed for reading character streams from a file, making it the appropriate class for this purpose.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>BufferedOutputStream</code></p>
<ul>
<li>This option is incorrect. <code>BufferedOutputStream</code> is used to write binary data to an output stream, buffering the data for efficient writing. It is not used for reading character streams.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>ObjectInputStream</code></p>
<ul>
<li>This option is incorrect. <code>ObjectInputStream</code> is used for deserializing objects from an input stream, not for reading character streams.</li>
</ul>
</li>
</ul>
`},{id:"ch12-q4",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:4,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly copies a file using the <code>Files</code> class, ensuring that an existing target file is overwritten?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.ATOMIC_MOVE);
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.APPEND);
</code></pre>`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.ATOMIC_MOVE);
</code></pre><ul>
<li><p>This option is incorrect. <code>StandardCopyOption.ATOMIC_MOVE</code> is used for moving files atomically, not for copying. It does not ensure that an existing file is overwritten.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.move</code> is used to move or rename a file, not to copy it. <code>StandardCopyOption.REPLACE_EXISTING</code> ensures the target file is overwritten during a move, not a copy.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
</code></pre><ul>
<li><p>This option is correct. <code>Files.copy</code> with <code>StandardCopyOption.REPLACE_EXISTING</code> ensures the target file is overwritten if it exists, which is the correct way to copy a file with overwriting.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">source</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;source.txt&quot;</span>);
<span class="hljs-type">Path</span> <span class="hljs-variable">target</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;target.txt&quot;</span>);
Files.copy(source, target, StandardCopyOption.APPEND);
</code></pre><ul>
<li>This option is incorrect. <code>StandardCopyOption.APPEND</code> does not exist in the <code>StandardCopyOption</code> enum, making this code snippet invalid.</li>
</ul>
`},{id:"ch12-q5",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:5,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly reads all lines from a file into a <code>List&lt;String&gt;</code> using the <code>java.nio.file</code> API?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readAllBytes(path);
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readString(path);
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.lines(path);
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readAllLines(path);
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readAllBytes(path);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.readAllBytes(path)</code> returns a byte array, not a <code>List&lt;String&gt;</code>.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readString(path);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.readString(path)</code> returns a single <code>String</code> containing the entire content of the file, not a <code>List&lt;String&gt;</code>.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.lines(path);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.lines(path)</code> returns a <code>Stream&lt;String&gt;</code>, not a <code>List&lt;String&gt;</code>. It provides a lazy-loaded stream of lines.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;file.txt&quot;</span>);
List&lt;String&gt; lines = Files.readAllLines(path);
</code></pre><ul>
<li>This option is correct. <code>Files.readAllLines(path)</code> reads all lines from the file and returns them as a <code>List&lt;String&gt;</code>, which is the desired behavior.</li>
</ul>
`},{id:"ch12-q6",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:6,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly writes a <code>List&lt;String&gt;</code> to a file using the <code>Files</code> class in Java?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.write(path, lines);
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.writeString(path, lines);
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.writeLines(path, lines);
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.write(path, lines, StandardOpenOption.READ);
</code></pre>`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.write(path, lines);
</code></pre><ul>
<li><p>This option is correct. <code>Files.write(path, lines)</code> writes the given list of strings to the file at the specified path, creating the file if it does not exist.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.writeString(path, lines);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.writeString(path, lines)</code> does not exist. <code>Files.writeString</code> expects a single <code>String</code> as the second argument, not a <code>List&lt;String&gt;</code>.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.writeLines(path, lines);
</code></pre><ul>
<li><p>This option is incorrect. <code>Files.writeLines(path, lines)</code> does not exist. There is no such method in the <code>Files</code> class.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">path</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;output.txt&quot;</span>);
List&lt;String&gt; lines = Arrays.asList(<span class="hljs-string">&quot;line1&quot;</span>, <span class="hljs-string">&quot;line2&quot;</span>, <span class="hljs-string">&quot;line3&quot;</span>);
Files.write(path, lines, StandardOpenOption.READ);
</code></pre><ul>
<li>This option is incorrect. <code>StandardOpenOption.READ</code> is not a valid option for writing files. It is used for reading files.</li>
</ul>
`},{id:"ch12-q7",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:7,multiSelect:!1,stemHtml:`<p>Which of the following methods from the <code>BasicFileAttributes</code> class retrieves the creation time of a file?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastModifiedTime();
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.creationTime();
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastAccessTime();
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.size();
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastModifiedTime();
</code></pre><ul>
<li><p>This option is incorrect. <code>attrs.lastModifiedTime()</code> retrieves the last modified time of the file, not the creation time.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.creationTime();
</code></pre><ul>
<li><p>This option is correct. <code>attrs.creationTime()</code> retrieves the creation time of the file, which is the correct method from <code>BasicFileAttributes</code> for this purpose.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastAccessTime();
</code></pre><ul>
<li><p>This option is incorrect. <code>attrs.lastAccessTime()</code> retrieves the last access time of the file, not the creation time.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">BasicFileAttributes</span> <span class="hljs-variable">attrs</span> <span class="hljs-operator">=</span> Files.readAttributes(path, BasicFileAttributes.class);
attrs.size();
</code></pre><ul>
<li>This option is incorrect. <code>attrs.size()</code> retrieves the size of the file, not the creation time.</li>
</ul>
`},{id:"ch12-q8",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:8,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly traverses a directory tree using the <code>Files.walkFileTree</code> method in Java?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.SKIP_SUBTREE;
    }
});
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IOException</span>(<span class="hljs-string">&quot;Error visiting file&quot;</span>);
    }
});
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        System.out.println(<span class="hljs-string">&quot;Visited file: &quot;</span> + file);
        <span class="hljs-keyword">return</span> FileVisitResult.TERMINATE;
    }
});
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, EnumSet.noneOf(FileVisitOption.class), Integer.MAX_VALUE, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        System.out.println(<span class="hljs-string">&quot;Visited file: &quot;</span> + file);
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">preVisitDirectory</span><span class="hljs-params">(Path dir, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFileFailed</span><span class="hljs-params">(Path file, IOException exc)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">postVisitDirectory</span><span class="hljs-params">(Path dir, IOException exc)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }
});
</code></pre>`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.SKIP_SUBTREE;
    }
});
</code></pre><ul>
<li><p>This option is incorrect. <code>FileVisitResult.SKIP_SUBTREE</code> will skip the traversal of the entire subtree, not allowing the complete traversal of the directory tree.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">IOException</span>(<span class="hljs-string">&quot;Error visiting file&quot;</span>);
    }
});
</code></pre><ul>
<li><p>This option is incorrect. Throwing an <code>IOException</code> inside <code>visitFile</code> will stop the traversal due to an unhandled exception.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        System.out.println(<span class="hljs-string">&quot;Visited file: &quot;</span> + file);
        <span class="hljs-keyword">return</span> FileVisitResult.TERMINATE;
    }
});
</code></pre><ul>
<li><p>This option is incorrect. The use of <code>FileVisitResult.TERMINATE</code> will stop the traversal after visiting the first file, not allowing the complete traversal of the directory tree.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code class="hljs language-java"><span class="hljs-type">Path</span> <span class="hljs-variable">start</span> <span class="hljs-operator">=</span> Paths.get(<span class="hljs-string">&quot;start_directory&quot;</span>);
Files.walkFileTree(start, EnumSet.noneOf(FileVisitOption.class), Integer.MAX_VALUE, <span class="hljs-keyword">new</span> <span class="hljs-title class_">SimpleFileVisitor</span>&lt;Path&gt;() {
    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFile</span><span class="hljs-params">(Path file, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        System.out.println(<span class="hljs-string">&quot;Visited file: &quot;</span> + file);
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">preVisitDirectory</span><span class="hljs-params">(Path dir, BasicFileAttributes attrs)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">visitFileFailed</span><span class="hljs-params">(Path file, IOException exc)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }

    <span class="hljs-meta">@Override</span>
    <span class="hljs-keyword">public</span> FileVisitResult <span class="hljs-title function_">postVisitDirectory</span><span class="hljs-params">(Path dir, IOException exc)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-keyword">return</span> FileVisitResult.CONTINUE;
    }
});
</code></pre><ul>
<li>This option is correct. It uses <code>Files.walkFileTree</code> with <code>SimpleFileVisitor</code>, specifying no special <code>FileVisitOption</code> and setting the maximum depth to <code>Integer.MAX_VALUE</code>, ensuring full traversal of the directory tree. Additionally, it correctly handles directory pre-visit, file visit, file visit failure, and directory post-visit events.</li>
</ul>
`},{id:"ch12-q9",chapter:"ch12",chapterTitle:"Chapter TWELVE",chapterSubtitle:"File I/O",number:9,multiSelect:!1,stemHtml:`<p>Which of the following code snippets correctly serializes an object to a file?</p>
`,options:[{letter:"A",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectInputStream</span> <span class="hljs-variable">ois</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectInputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileInputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    ois.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre>`},{letter:"B",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectOutputStream</span> <span class="hljs-variable">oos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    oos.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre>`},{letter:"C",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectOutputStream</span> <span class="hljs-variable">oos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    oos.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre>`},{letter:"D",html:`<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">BufferedOutputStream</span> <span class="hljs-variable">bos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">BufferedOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    bos.write(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre>`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> </p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectInputStream</span> <span class="hljs-variable">ois</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectInputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileInputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    ois.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre><ul>
<li>This option is incorrect. <code>ObjectInputStream</code> is used for deserialization (reading objects from a stream), not serialization. It should be <code>ObjectOutputStream</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> </p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectOutputStream</span> <span class="hljs-variable">oos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    oos.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre><ul>
<li>This option is correct. <code>ObjectOutputStream</code> is used to serialize an object to a file, which is what this code snippet does correctly.</li>
</ul>
</li>
<li><p><strong>C)</strong> </p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> {
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">ObjectOutputStream</span> <span class="hljs-variable">oos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">ObjectOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    oos.writeObject(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre><ul>
<li>This option is incorrect. The <code>Animal</code> class does not implement <code>Serializable</code>, so it cannot be serialized using <code>ObjectOutputStream</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> </p>
<pre><code class="hljs language-java"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Animal</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">Serializable</span> {
    <span class="hljs-keyword">private</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">long</span> <span class="hljs-variable">serialVersionUID</span> <span class="hljs-operator">=</span> <span class="hljs-number">1L</span>;
    <span class="hljs-keyword">private</span> String species;
    <span class="hljs-keyword">private</span> <span class="hljs-type">int</span> age;

    <span class="hljs-keyword">public</span> <span class="hljs-title function_">Animal</span><span class="hljs-params">(String species, <span class="hljs-type">int</span> age)</span> {
        <span class="hljs-built_in">this</span>.species = species;
        <span class="hljs-built_in">this</span>.age = age;
    }
}

<span class="hljs-type">Animal</span> <span class="hljs-variable">animal</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Animal</span>(<span class="hljs-string">&quot;Lion&quot;</span>, <span class="hljs-number">5</span>);
<span class="hljs-keyword">try</span> (<span class="hljs-type">BufferedOutputStream</span> <span class="hljs-variable">bos</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">BufferedOutputStream</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;animal.ser&quot;</span>))) {
    bos.write(animal);
} <span class="hljs-keyword">catch</span> (IOException e) {
    e.printStackTrace();
}
</code></pre><ul>
<li>This option is incorrect. <code>BufferedOutputStream</code> cannot be used to write objects directly; <code>ObjectOutputStream</code> should be used for serialization.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q1",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:1,multiSelect:!0,stemHtml:`<p>Which of the following are types of modules in the Java Platform Module System (JPMS)? (Choose all that apply.)</p>
`,options:[{letter:"A",html:`<p>Automatic module</p>
`},{letter:"B",html:`<p>Default module</p>
`},{letter:"C",html:`<p>Unnamed module</p>
`},{letter:"D",html:`<p>Core module</p>
`},{letter:"E",html:`<p>Primary module</p>
`}],correct:["A","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Automatic module</p>
<ul>
<li>This option is correct. An automatic module is created from a JAR file that is placed on the module path but does not have a module descriptor (<code>module-info.java</code>). The module system infers a module name from the JAR file name and exports all packages in the JAR.</li>
</ul>
</li>
<li><p><strong>B)</strong> Default module</p>
<ul>
<li>This option incorrect. There is no concept of a &quot;default module&quot; in JPMS. The term might be confused with unnamed modules or other types of configurations, but it is not a recognized type.</li>
</ul>
</li>
<li><p><strong>C)</strong> Unnamed module</p>
<ul>
<li>This option is correct. The unnamed module is a special module that includes all classes on the classpath. It does not have a module descriptor and can access other unnamed modules but cannot be required by named modules.</li>
</ul>
</li>
<li><p><strong>D)</strong> Core module</p>
<ul>
<li>This option is incorrect. There is no specific type called &quot;core module&quot; in JPMS. JPMS does not categorize modules this way.</li>
</ul>
</li>
<li><p><strong>E)</strong> Primary module</p>
<ul>
<li>This option is incorrect. Similar to &quot;core module,&quot; there is no type called &quot;primary module&quot; in JPMS.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q2",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:2,multiSelect:!1,stemHtml:`<p>Which of the following is the correct way to declare a module named <code>com.example</code> in the Java Platform Module System (JPMS)?</p>
`,options:[{letter:"A",html:`<p><code>module com.example { export com.example.api; }</code></p>
`},{letter:"B",html:`<p><code>declare module com.example { }</code></p>
`},{letter:"C",html:`<p><code>create module com.example { requires java.base; }</code></p>
`},{letter:"D",html:`<p><code>module com.example { }</code></p>
`},{letter:"E",html:`<p><code>module com.example requires java.base;</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>module com.example { export com.example.api; }</code></p>
<ul>
<li>This option is incorrect. In this case, <code>exports</code>is missing an &quot;s&quot;. The correct syntax to export a package would be <code>exports com.example.api;</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>declare module com.example { }</code></p>
<ul>
<li>This option is incorrect. There is no <code>declare</code> keyword used in the JPMS for defining a module.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>create module com.example { requires java.base; }</code></p>
<ul>
<li>This option is incorrect. The correct syntax does not use the <code>create</code> keyword for module declaration.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>module com.example { }</code></p>
<ul>
<li>This option is correct. This is the correct way to declare a module named <code>com.example</code> without any additional requirements.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>module com.example requires java.base;</code></p>
<ul>
<li>This option is incorrect. The syntax is invalid because it lacks braces <code>{ }</code> to define the module body.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q3",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:3,multiSelect:!1,stemHtml:`<p>Which of the following access control statements correctly restricts access to the <code>com.example.internal</code> package so that it is only accessible to the <code>com.example.client</code> module?</p>
`,options:[{letter:"A",html:`<p><code>module com.example { exports com.example.internal to com.example.client; }</code></p>
`},{letter:"B",html:`<p><code>module com.example { opens com.example.internal to com.example.client; }</code></p>
`},{letter:"C",html:`<p><code>module com.example { requires com.example.internal; }</code></p>
`},{letter:"D",html:`<p><code>module com.example { provides com.example.internal to com.example.client; }</code></p>
`},{letter:"E",html:`<p><code>module com.example { uses com.example.internal; }</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>module com.example { exports com.example.internal to com.example.client; }</code></p>
<ul>
<li>This option is correct. The <code>exports</code> directive with the <code>to</code> clause restricts the export of the <code>com.example.internal</code> package to only the specified module <code>com.example.client</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>module com.example { opens com.example.internal to com.example.client; }</code></p>
<ul>
<li>This option is incorrect. The <code>opens</code> directive is used for reflection purposes, not for compile-time access control.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>module com.example { requires com.example.internal; }</code></p>
<ul>
<li>This option is incorrect. The <code>requires</code> directive is used to specify module dependencies, not to control package accessibility.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>module com.example { provides com.example.internal to com.example.client; }</code></p>
<ul>
<li>This option is incorrect. The <code>provides</code> directive is used to specify service providers in the module system, not for restricting package access.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>module com.example { uses com.example.internal; }</code></p>
<ul>
<li>This option is incorrect. The <code>uses</code> directive is used to specify service consumers in the module system, not for restricting package access.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q4",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:4,multiSelect:!1,stemHtml:`<p>Given the following module declarations, which statement is correct regarding the accessibility of the <code>com.example.api</code> package for deep reflection by the <code>com.example.client</code> module?</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">module</span> com.example {
    <span class="hljs-keyword">exports</span> com.example.api;
    opens com.example.internal to com.example.client;
}

<span class="hljs-keyword">module</span> com.example.client {
    <span class="hljs-keyword">requires</span> com.example;
}
</code></pre>`,options:[{letter:"A",html:`<p>The <code>com.example.client</code> module can access the <code>com.example.api</code> package for deep reflection.</p>
`},{letter:"B",html:`<p>The <code>com.example.client</code> module cannot access the <code>com.example.api</code> package for deep reflection.</p>
`},{letter:"C",html:`<p>The <code>com.example.api</code> package is opened to all modules for deep reflection.</p>
`},{letter:"D",html:`<p>The <code>com.example.internal</code> package is exported to the <code>com.example.client</code> module.</p>
`},{letter:"E",html:`<p>The <code>com.example.api</code> package is exported to the <code>com.example.client</code> module for deep reflection.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>com.example.client</code> module can access the <code>com.example.api</code> package for deep reflection.</p>
<ul>
<li>This option is incorrect. The <code>com.example.api</code> package is exported, not opened, meaning it is available for use but not for deep reflection by other modules.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>com.example.client</code> module cannot access the <code>com.example.api</code> package for deep reflection.</p>
<ul>
<li>This option is correct. The <code>com.example.api</code> package is not opened for deep reflection; it is only exported for use by other modules.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>com.example.api</code> package is opened to all modules for deep reflection.</p>
<ul>
<li>This option is incorrect. The <code>com.example.api</code> package is exported to all modules, but it is not opened for deep reflection to any module.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>com.example.internal</code> package is exported to the <code>com.example.client</code> module.</p>
<ul>
<li>This option is incorrect. The <code>com.example.internal</code> package is opened to <code>com.example.client</code> for deep reflection but not exported.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>com.example.api</code> package is exported to the <code>com.example.client</code> module for deep reflection.</p>
<ul>
<li>This option is incorrect. The <code>com.example.api</code> package is exported to the <code>com.example.client</code> module, but exporting does not include deep reflection capabilities.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q5",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:5,multiSelect:!1,stemHtml:`<p>Which of the following statements is correct regarding core Java modules and their functionalities?</p>
`,options:[{letter:"A",html:`<p>The <code>java.base</code> module provides the Swing and AWT libraries for building graphical user interfaces.</p>
`},{letter:"B",html:`<p>The <code>java.logging</code> module is responsible for handling collections, including lists, sets, and maps.</p>
`},{letter:"C",html:`<p>The <code>java.desktop</code> module provides the classes for implementing standard input and output streams.</p>
`},{letter:"D",html:`<p>The <code>java.xml</code> module includes the classes for processing XML documents.</p>
`},{letter:"E",html:`<p>The <code>java.naming</code> module provides APIs for accessing and processing annotations.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>java.base</code> module provides the Swing and AWT libraries for building graphical user interfaces.</p>
<ul>
<li>This option is incorrect. The <code>java.base</code> module does not provide the Swing and AWT libraries. These libraries are provided by the <code>java.desktop</code> module.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>java.logging</code> module is responsible for handling collections, including lists, sets, and maps.</p>
<ul>
<li>This option is incorrect. The <code>java.logging</code> module is responsible for the logging framework in Java, not for handling collections. The collections framework is part of the <code>java.base</code> module.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>java.desktop</code> module provides the classes for implementing standard input and output streams.</p>
<ul>
<li>This option is incorrect. The <code>java.desktop</code> module includes classes for building graphical user interfaces (Swing and AWT), not for standard input and output streams. Standard I/O is part of the <code>java.base</code> module.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>java.xml</code> module includes the classes for processing XML documents.</p>
<ul>
<li>This option is correct. The <code>java.xml</code> module includes classes for processing XML documents, such as those for parsing and transforming XML using APIs like DOM, SAX, and StAX.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>java.naming</code> module provides APIs for accessing and processing annotations.</p>
<ul>
<li>This option is incorrect. The <code>java.naming</code> module provides APIs for accessing naming and directory services (JNDI), not for processing annotations. Annotations are part of the <code>java.base</code> module.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q6",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:6,multiSelect:!1,stemHtml:`<p>Which of the following command-line statements correctly compiles the module located in the <code>src/com.example</code> directory and outputs the compiled module to the <code>out</code> directory?</p>
`,options:[{letter:"A",html:`<p><code>javac -d out src/com.example/module-info.java src/com.example/com/example/*.java</code></p>
`},{letter:"B",html:`<p><code>javac -sourcepath src -d out com.example/module-info.java com.example/com/example/*.java</code></p>
`},{letter:"C",html:`<p><code>javac -d out --module-source-path src -m com.example</code></p>
`},{letter:"D",html:`<p><code>javac -modulepath out -d src src/com.example/module-info.java src/com.example/com/example/*.java</code></p>
`},{letter:"E",html:`<p><code>javac --module-path src --module com.example -d out</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>javac -d out src/com.example/module-info.java src/com.example/com/example/*.java</code></p>
<ul>
<li>This option is incorrect. While it correctly specifies the output directory and the source files, it does not use the <code>--module-source-path</code> option and does not specify the module name with <code>-m</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>javac -sourcepath src -d out com.example/module-info.java com.example/com/example/*.java</code></p>
<ul>
<li>This option is incorrect. The <code>-sourcepath</code> option is not used for module compilation. The correct option should be <code>--module-source-path</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>javac -d out --module-source-path src -m com.example</code></p>
<ul>
<li>This option is correct. The <code>javac -d out --module-source-path src -m com.example</code> command correctly compiles the module <code>com.example</code> located in the <code>src</code> directory and outputs the compiled classes to the <code>out</code> directory.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>javac -modulepath out -d src src/com.example/module-info.java src/com.example/com/example/*.java</code></p>
<ul>
<li>This option is incorrect. The <code>-modulepath</code> option is incorrectly placed, and the source and destination directories are swapped.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>javac --module-path src --module com.example -d out</code></p>
<ul>
<li>This option is incorrect. The command incorrectly uses <code>--module-path</code> instead of <code>--module-source-path</code> and the module name is specified with <code>--module</code> instead of <code>-m</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q7",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:7,multiSelect:!1,stemHtml:`<p>Given the following multi-module application structure, which command compiles both modules correctly?</p>
<pre><code>src/
├── com.foo/
│   ├── module-info.java
│   └── com/foo/Foo.java
└── com.bar/
    ├── module-info.java
    └── com/bar/Bar.java
</code></pre>`,options:[{letter:"A",html:`<p><code>javac --module-source-path src -d out $(find src -name &quot;*.java&quot;)</code></p>
`},{letter:"B",html:`<p><code>javac -d out --module com.foo,com.bar --module-source-path src</code></p>
`},{letter:"C",html:`<p><code>javac -sourcepath src -d out src/com.foo/module-info.java src/com.foo/com/foo/*.java src/com.bar/module-info.java src/com.bar/com/bar/*.java</code></p>
`},{letter:"D",html:`<p><code>javac -modulepath src -d out src/com.foo/*.java src/com.bar/*.java</code></p>
`},{letter:"E",html:`<p><code>javac --module-source-path src/com.foo,src/com.bar -d out</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>javac --module-source-path src -d out $(find src -name &quot;*.java&quot;)</code></p>
<ul>
<li>This option is correct. The command <code>javac --module-source-path src -d out $(find src -name &quot;*.java&quot;)</code> correctly compiles both modules by specifying the module source path and finding all Java files in the source directory.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>javac -d out --module com.foo,com.bar --module-source-path src</code></p>
<ul>
<li>This option is incorrect. The <code>--module</code> option does not accept multiple modules separated by commas in this context.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>javac -sourcepath src -d out src/com.foo/module-info.java src/com.foo/com/foo/*.java src/com.bar/module-info.java src/com.bar/com/bar/*.java</code></p>
<ul>
<li>This option is incorrect. Although it specifies the source files, it does not use the <code>--module-source-path</code> option and is unnecessarily verbose.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>javac -modulepath src -d out src/com.foo/*.java src/com.bar/*.java</code></p>
<ul>
<li>This option is incorrect. The <code>-modulepath</code> option is misused, and the path should point to the directory containing the module source code.</li>
</ul>
</li>
<li><p><strong>E)</strong> <code>javac --module-source-path src/com.foo,src/com.bar -d out</code></p>
<ul>
<li>This option is incorrect. The <code>--module-source-path</code> option should point to the base directory (<code>src</code>), not individual module directories.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q8",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:8,multiSelect:!1,stemHtml:`<p>Which of the following statements correctly specifies a service provider implementation for the service <code>com.example.Service</code> in the <code>module-info.java</code> of the <code>com.provider</code> module?</p>
`,options:[{letter:"A",html:`<p><code>requires com.example.Service with com.provider.ServiceImpl;</code></p>
`},{letter:"B",html:`<p><code>exports com.example.Service with com.provider.ServiceImpl;</code></p>
`},{letter:"C",html:`<p><code>provides com.example.Service with com.provider.ServiceImpl;</code></p>
`},{letter:"D",html:`<p><code>uses com.example.Service with com.provider.ServiceImpl;</code></p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>requires com.example.Service with com.provider.ServiceImpl;</code></p>
<ul>
<li>This option is incorrect. The <code>requires</code> keyword is used to declare dependencies on other modules, not for specifying service providers.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>exports com.example.Service with com.provider.ServiceImpl;</code></p>
<ul>
<li>This option is incorrect. The <code>exports</code> keyword is used to make packages accessible to other modules, not for specifying service providers.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>provides com.example.Service with com.provider.ServiceImpl;</code></p>
<ul>
<li>This option is correct. The <code>provides com.example.Service with com.provider.ServiceImpl;</code> statement correctly specifies that the <code>com.provider</code> module provides an implementation of the <code>com.example.Service</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>uses com.example.Service with com.provider.ServiceImpl;</code></p>
<ul>
<li>This option is incorrect. The <code>uses</code> keyword is used to declare that the module relies on a service but does not provide an implementation.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q9",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:9,multiSelect:!1,stemHtml:`<p>Which of the following command-line statements correctly describes the <code>com.example</code> module using the <code>--describe-module</code> option?</p>
`,options:[{letter:"A",html:`<p><code>java --describe-module com.example/module-info.java</code></p>
`},{letter:"B",html:`<p><code>javac --describe-module com.example</code></p>
`},{letter:"C",html:`<p><code>jar --describe-module com.example</code></p>
`},{letter:"D",html:`<p><code>java --describe-module com.example</code></p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>java --describe-module com.example/module-info.java</code></p>
<ul>
<li>This option is incorrect. The <code>--describe-module</code> option is not used with a specific file path like <code>module-info.java</code>; it requires a module name.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>javac --describe-module com.example</code></p>
<ul>
<li>This option is incorrect. The <code>--describe-module</code> option is not valid for the <code>javac</code> command; it is used with the <code>java</code> command.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>jar --describe-module com.example</code></p>
<ul>
<li>This option is incorrect. The <code>--describe-module</code> option is not valid for the <code>jar</code> command; it is used with the <code>java</code> command.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>java --describe-module com.example</code></p>
<ul>
<li>This option is correct. The <code>java --describe-module com.example</code> command correctly describes the module <code>com.example</code> using the <code>--describe-module</code> option.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q10",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:10,multiSelect:!0,stemHtml:`<p>Which of the following command-line statements correctly uses <code>jdeps</code> to analyze the dependencies of a JAR file named <code>example.jar</code>? (Choose all that apply)</p>
`,options:[{letter:"A",html:`<p><code>jdeps --list-deps example.jar</code></p>
`},{letter:"B",html:`<p><code>jdeps -verbose example.jar</code></p>
`},{letter:"C",html:`<p><code>jdeps -s example.jar</code></p>
`},{letter:"D",html:`<p><code>jdeps --check example.jar</code></p>
`}],correct:["B","C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>jdeps --list-deps example.jar</code> </p>
<ul>
<li>This option is incorrect. The <code>--list-deps</code> option does not exist for <code>jdeps</code>.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>jdeps -verbose example.jar</code></p>
<ul>
<li>This option is correct. While <code>-verbose</code> is a valid option, it provides more information.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>jdeps -s example.jar</code></p>
<ul>
<li>This option is correct. The <code>-s</code> option with <code>jdeps</code> provides a summary of the dependencies of the <code>example.jar</code> file.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>jdeps --check example.jar</code></p>
<ul>
<li>This option is incorrect. The <code>--check</code> option does not exist for <code>jdeps</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q11",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:11,multiSelect:!1,stemHtml:`<p>Which of the following command-line statements correctly creates a JMOD file from the contents of the <code>mods/com.example</code> directory?</p>
`,options:[{letter:"A",html:`<p><code>jmod create --class-path mods/com.example --output com.example.jmod</code></p>
`},{letter:"B",html:`<p><code>jmod --create --class-path mods/com.example --output com.example.jmod</code></p>
`},{letter:"C",html:`<p><code>jmod --create --dir mods/com.example --output com.example.jmod</code></p>
`},{letter:"D",html:`<p><code>jmod create --dir mods/com.example --output com.example.jmod</code></p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>jmod create --class-path mods/com.example --output com.example.jmod</code></p>
<ul>
<li>This option is correct. It uses the correct syntax for the <code>jmod</code> command to create a JMOD file. The <code>create</code> operation is specified, followed by the <code>--class-path</code> option to indicate the source directory, and finally the name of the output JMOD file. This command will create a JMOD file named <code>com.example.jmod</code> using the contents of the <code>mods/com.example</code> directory.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>jmod --create --class-path mods/com.example --output com.example.jmod</code></p>
<ul>
<li>This option is incorrect. The <code>create</code> operation in the <code>jmod</code> command should not be prefixed with <code>--</code>. The correct format is <code>jmod create</code>, not <code>jmod --create</code>. The rest of the command is correct, but this syntax error makes the entire command invalid.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>jmod --create --dir mods/com.example --output com.example.jmod</code></p>
<ul>
<li>This option is incorrect. First, like option B, it incorrectly uses <code>--create</code> instead of <code>create</code>. Second, it uses the <code>--dir</code> option, which is not used for creating JMOD files, but for specifying the output directory when extracting files from a JMOD. When creating a JMOD file, we use <code>--class-path</code> to specify the source directory. The <code>--output</code> option is also not a valid option for the <code>jmod</code> command.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>jmod create --dir mods/com.example --output com.example.jmod</code></p>
<ul>
<li>This option is incorrect. It uses the <code>--dir</code> option instead of <code>--class-path</code> for specifying the source directory, and it incorrectly includes an <code>--output</code> option, which is not valid for the <code>jmod</code> command. When creating a JMOD file, the output file name is simply specified as the last argument, not with an <code>--output</code> option.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q12",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:12,multiSelect:!1,stemHtml:`<p>Which of the following command-line statements correctly creates a custom runtime image using the <code>jlink</code> tool with the modules <code>java.base</code> and <code>com.example</code> and outputs it to the <code>myimage</code> directory?</p>
`,options:[{letter:"A",html:`<p><code>jlink --module-path java.base:com.example --output myimage</code></p>
`},{letter:"B",html:`<p><code>jlink --module-path mods --add-modules java.base,com.example --output myimage</code></p>
`},{letter:"C",html:`<p><code>jlink --add-modules java.base,com.example --image myimage</code></p>
`},{letter:"D",html:`<p><code>jlink --modules java.base,com.example --dir myimage</code></p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> <code>jlink --module-path java.base:com.example --output myimage</code></p>
<ul>
<li>This option is incorrect. The <code>--module-path</code> option should specify the directory containing the modules, not the module names directly.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>jlink --module-path mods --add-modules java.base,com.example --output myimage</code></p>
<ul>
<li>This option is correct. The command <code>jlink --module-path mods --add-modules java.base,com.example --output myimage</code> correctly specifies the module path and adds the necessary modules, outputting the custom runtime image to the <code>myimage</code> directory.</li>
</ul>
</li>
<li><p><strong>C)</strong> <code>jlink --add-modules java.base,com.example --image myimage</code> </p>
<ul>
<li>This option is incorrect. The <code>--image</code> option is not valid; the correct option is <code>--output</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> <code>jlink --modules java.base,com.example --dir myimage</code></p>
<ul>
<li>This option is incorrect. The <code>--modules</code> option is incorrect; the correct option is <code>--add-modules</code>, and <code>--dir</code> should be <code>--output</code>.</li>
</ul>
</li>
</ul>
`},{id:"ch13-q13",chapter:"ch13",chapterTitle:"Chapter THIRTEEN",chapterSubtitle:"The Java Platform Module System",number:13,multiSelect:!1,stemHtml:`<p>Which of the following statements is correct regarding the migration of a legacy application to the Java Platform Module System using unnamed and automatic modules?</p>
`,options:[{letter:"A",html:`<p>An unnamed module can depend on named modules and other unnamed modules.</p>
`},{letter:"B",html:`<p>Automatic modules must have a <code>module-info.java</code> file to be placed on the module path.</p>
`},{letter:"C",html:`<p>Unnamed modules can export their packages to named modules using <code>module-info.java</code>.</p>
`},{letter:"D",html:`<p>An automatic module is created when a JAR file without a <code>module-info.java</code> is placed on the module path, and it can read all other modules.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> An unnamed module can depend on named modules and other unnamed modules.</p>
<ul>
<li>This option is incorrect. An unnamed module can depend on named modules, which is true. However, unnamed modules cannot depend on other unnamed modules. Unnamed modules are created when classes are loaded from the classpath, and they cannot read other unnamed modules. They can only read the named modules of the platform and other modules explicitly added to the module path.</li>
</ul>
</li>
<li><p><strong>B)</strong> Automatic modules must have a <code>module-info.java</code> file to be placed on the module path.</p>
<ul>
<li>This option is incorrect. Automatic modules do not require a <code>module-info.java</code> file. Their module name is inferred from the JAR file name.</li>
</ul>
</li>
<li><p><strong>C)</strong> Unnamed modules can export their packages to named modules using <code>module-info.java</code>. </p>
<ul>
<li>This option is incorrect. Unnamed modules cannot export packages because they do not use <code>module-info.java</code>.</li>
</ul>
</li>
<li><p><strong>D)</strong> An automatic module is created when a JAR file without a <code>module-info.java</code> is placed on the module path, and it can read all other modules.</p>
<ul>
<li>This option is correct. An automatic module is created by placing a JAR file without a <code>module-info.java</code> on the module path. This automatic module can read all other modules, both named and unnamed.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q1",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:1,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.Locale;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">LocaleTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">Locale</span> <span class="hljs-variable">locale1</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Locale</span>(<span class="hljs-string">&quot;fr&quot;</span>, <span class="hljs-string">&quot;CA&quot;</span>);
        <span class="hljs-type">Locale</span> <span class="hljs-variable">locale2</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Locale</span>(<span class="hljs-string">&quot;fr&quot;</span>, <span class="hljs-string">&quot;CA&quot;</span>, <span class="hljs-string">&quot;UNIX2024&quot;</span>);
        <span class="hljs-type">Locale</span> <span class="hljs-variable">locale3</span> <span class="hljs-operator">=</span> Locale.CANADA_FRENCH;
        
        System.out.println(locale1.equals(locale2));
        System.out.println(locale1.equals(locale3));
        System.out.println(locale2.equals(locale3));
        
        System.out.println(locale1.getDisplayName(Locale.ENGLISH));
        System.out.println(locale2.getDisplayName(Locale.ENGLISH));
        System.out.println(locale3.getDisplayName(Locale.ENGLISH));
    }
}
</code></pre><p>What will be the output when this code is executed?</p>
`,options:[{letter:"A",html:`<pre><code>true
true
true
French (Canada)
French (Canada)
French (Canada)
</code></pre>`},{letter:"B",html:`<pre><code>false
true
false
French (Canada)
French (Canada, UNIX2024)
French (Canada)
</code></pre>`},{letter:"C",html:`<pre><code>false
true
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
</code></pre>`},{letter:"D",html:`<pre><code>false
false
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
</code></pre>`},{letter:"E",html:`<p>The code will throw a <code>IllegalArgumentException</code> because <code>UNIX2024</code> is not a valid variant.</p>
`}],correct:["C"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>true
true
true
French (Canada)
French (Canada)
French (Canada)
</code></pre><ul>
<li><p>This option is incorrect because it doesn&#39;t account for the differences caused by the variant in <code>locale2</code>.</p>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>false
true
false
French (Canada)
French (Canada, UNIX2024)
French (Canada)
</code></pre><ul>
<li><p>This option is incorrect because it doesn&#39;t correctly represent the display name for <code>Locale.CANADA_FRENCH</code>.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>false
true
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
</code></pre><ul>
<li><p>This option is correct. Let&#39;s break it down:</p>
<ol>
<li><code>locale1.equals(locale2)</code> is <code>false</code> because <code>locale2</code> has a variant (<code>&quot;UNIX2024&quot;</code>) while <code>locale1</code> doesn&#39;t.</li>
<li><code>locale1.equals(locale3)</code> is <code>true</code> because <code>Locale.CANADA_FRENCH</code> is equivalent to <code>new Locale(&quot;fr&quot;, &quot;CA&quot;)</code>.</li>
<li><code>locale2.equals(locale3)</code> is <code>false</code> because <code>locale2</code> has a variant while <code>locale3</code> doesn&#39;t.</li>
<li><code>locale1.getDisplayName(Locale.ENGLISH)</code> returns <code>&quot;French (Canada)&quot;</code>.</li>
<li><code>locale2.getDisplayName(Locale.ENGLISH)</code> returns <code>&quot;French (Canada, UNIX2024)&quot;</code>, including the variant.</li>
<li><code>locale3.getDisplayName(Locale.ENGLISH)</code> returns <code>&quot;Canadian French&quot;</code>, which is the special display name for this constant.</li>
</ol>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>false
false
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
</code></pre><ul>
<li><p>This option is incorrect because it suggests that <code>locale1</code> and <code>locale3</code> are not equal, which they are.</p>
</li>
<li><p><strong>E)</strong> The code will throw a <code>IllegalArgumentException</code> because <code>UNIX2024</code> is not a valid variant.</p>
<ul>
<li>This option is incorrect. While <code>UNIX2024</code> is not a standard ISO 639 variant code, the <code>Locale</code> constructor accepts any string as a variant without throwing an exception.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q2",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:2,multiSelect:!1,stemHtml:`<p>Which of the following statements about <code>Locale</code> categories is correct?</p>
`,options:[{letter:"A",html:`<p>The <code>Locale.Category</code> enum has three values: <code>DISPLAY</code>, <code>FORMAT</code>, and <code>LANGUAGE</code>.</p>
`},{letter:"B",html:`<p>The <code>Locale.setDefault(Locale.Category, Locale)</code> method can only set the default locale for the <code>FORMAT</code> category.</p>
`},{letter:"C",html:`<p>Using <code>Locale.getDefault(Locale.Category)</code> always returns the same locale regardless of the category specified.</p>
`},{letter:"D",html:`<p>The <code>DISPLAY</code> category affects the language used for displaying user interface elements, while the <code>FORMAT</code> category affects the formatting of numbers, dates, and currencies.</p>
`},{letter:"E",html:`<p>Locale categories were introduced in Java 8 to replace the older <code>Locale</code> methods.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>Locale.Category</code> enum has three values: <code>DISPLAY</code>, <code>FORMAT</code>, and <code>LANGUAGE</code>.</p>
<ul>
<li>This option is incorrect. The <code>Locale.Category</code> enum has only two values: <code>DISPLAY</code> and <code>FORMAT</code>. There is no <code>LANGUAGE</code> category.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>Locale.setDefault(Locale.Category, Locale)</code> method can only set the default locale for the <code>FORMAT</code> category.</p>
<ul>
<li>This option is incorrect. The <code>Locale.setDefault(Locale.Category, Locale)</code> method can set the default locale for both the <code>DISPLAY</code> and <code>FORMAT</code> categories, not just <code>FORMAT</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> Using <code>Locale.getDefault(Locale.Category)</code> always returns the same locale regardless of the category specified.</p>
<ul>
<li>This option is incorrect. <code>Locale.getDefault(Locale.Category)</code> can return different locales depending on the category specified. The <code>DISPLAY</code> and <code>FORMAT</code> categories can have different default locales.</li>
</ul>
</li>
<li><p><strong>D)</strong> The <code>DISPLAY</code> category affects the language used for displaying user interface elements, while the <code>FORMAT</code> category affects the formatting of numbers, dates, and currencies.</p>
<ul>
<li>This option is correct. The <code>DISPLAY</code> category indeed affects the language used for displaying user interface elements (like error messages or GUI labels), while the <code>FORMAT</code> category affects how numbers, dates, currencies, and other locale-sensitive data are formatted.</li>
</ul>
</li>
<li><p><strong>E)</strong> Locale categories were introduced in Java 8 to replace the older <code>Locale</code> methods.</p>
<ul>
<li>This option is incorrect. Locale categories were added to provide more granular control over localization aspects, complementing (not replacing) the existing <code>Locale</code> methods.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q3",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:3,multiSelect:!1,stemHtml:`<p>Which of the following statements about Resource Bundles is correct?</p>
`,options:[{letter:"A",html:`<p>Resource bundles can only be stored in <code>.properties</code> files.</p>
`},{letter:"B",html:`<p>The <code>ResourceBundle.getBundle()</code> method always throws a <code>MissingResourceException</code> if the requested bundle is not found.</p>
`},{letter:"C",html:`<p>When searching for a resource bundle, Java only considers the specified locale and its language.</p>
`},{letter:"D",html:`<p>If a key is not found in a specific locale&#39;s resource bundle, Java will look for it in the parent locale&#39;s bundle.</p>
`},{letter:"E",html:`<p>Resource bundles are loaded dynamically at runtime, so changes to <code>.properties</code> files are immediately reflected in the running application.</p>
`}],correct:["D"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> Resource bundles can only be stored in <code>.properties</code> files.</p>
<ul>
<li>This option is incorrect. While <code>.properties</code> files are commonly used for resource bundles, Java also supports class-based resource bundles. These are Java classes that extend <code>ResourceBundle</code> and provide localized resources programmatically.</li>
</ul>
</li>
<li><p><strong>B)</strong> The <code>ResourceBundle.getBundle()</code> method always throws a <code>MissingResourceException</code> if the requested bundle is not found.</p>
<ul>
<li>This option is incorrect. The <code>ResourceBundle.getBundle()</code> method does not always throw a <code>MissingResourceException</code> if the requested bundle is not found. It follows a fallback mechanism, trying to find the most specific bundle, then falling back to more general bundles, and finally to the default bundle.</li>
</ul>
</li>
<li><p><strong>C)</strong> When searching for a resource bundle, Java only considers the specified locale and its language.</p>
<ul>
<li>This option is incorrect. When searching for a resource bundle, Java considers not only the specified locale and its language but also the country, variant, and even the default locale. It follows a well-defined lookup procedure to find the most appropriate bundle.</li>
</ul>
</li>
<li><p><strong>D)</strong> If a key is not found in a specific locale&#39;s resource bundle, Java will look for it in the parent locale&#39;s bundle.</p>
<ul>
<li>This option is correct. Java implements a parent chain fallback mechanism for resource bundles. If a key is not found in the specific locale&#39;s bundle, it will look in the parent locale&#39;s bundle. For example, if a key is not found in a <code>fr_FR</code> (French France) bundle, it will look in the <code>fr</code> (French) bundle, and then in the default bundle.</li>
</ul>
</li>
<li><p><strong>E)</strong> Resource bundles are loaded dynamically at runtime, so changes to <code>.properties</code> files are immediately reflected in the running application.</p>
<ul>
<li>This option is incorrect. Resource bundles are typically loaded when <code>ResourceBundle.getBundle()</code> is called and then cached. Changes to .properties files are not immediately reflected in a running application. The application usually needs to be restarted or the resource bundle cache cleared for changes to take effect.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q4",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:4,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.util.*;
<span class="hljs-keyword">import</span> java.io.*;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ConfigTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> <span class="hljs-keyword">throws</span> IOException {
        <span class="hljs-type">Properties</span> <span class="hljs-variable">props</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Properties</span>();
        props.setProperty(<span class="hljs-string">&quot;color&quot;</span>, <span class="hljs-string">&quot;blue&quot;</span>);
        props.setProperty(<span class="hljs-string">&quot;size&quot;</span>, <span class="hljs-string">&quot;medium&quot;</span>);
        
        <span class="hljs-keyword">try</span> (<span class="hljs-type">OutputStream</span> <span class="hljs-variable">out</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">FileOutputStream</span>(<span class="hljs-string">&quot;config.properties&quot;</span>)) {
            props.store(out, <span class="hljs-string">&quot;Config File&quot;</span>);
        }
        
        props.clear();
        System.out.println(props.getProperty(<span class="hljs-string">&quot;color&quot;</span>, <span class="hljs-string">&quot;red&quot;</span>));
        
        <span class="hljs-keyword">try</span> (<span class="hljs-type">InputStream</span> <span class="hljs-variable">in</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">FileInputStream</span>(<span class="hljs-string">&quot;config.properties&quot;</span>)) {
            props.load(in);
        }
        
        System.out.println(props.getProperty(<span class="hljs-string">&quot;color&quot;</span>, <span class="hljs-string">&quot;red&quot;</span>));
    }
}
</code></pre><p>What will be the output when this code is executed?</p>
`,options:[{letter:"A",html:`<pre><code>red
blue
</code></pre>`},{letter:"B",html:`<pre><code>blue
blue
</code></pre>`},{letter:"C",html:`<pre><code>red
red
</code></pre>`},{letter:"D",html:`<p>The code will throw a <code>FileNotFoundException</code>.</p>
`},{letter:"E",html:`<pre><code>null
blue
</code></pre>`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>red
blue
</code></pre><ul>
<li><p>This option is correct. Let&#39;s break down the code execution:</p>
<ol>
<li>Properties are set and stored in the <code>config.properties</code> file.</li>
<li><code>props.clear()</code> removes all properties from the <code>props</code> object.</li>
<li><code>System.out.println(props.getProperty(&quot;color&quot;, &quot;red&quot;))</code> prints <code>red</code> because the properties have been cleared, so it uses the default value.</li>
<li>The properties are loaded from the file.</li>
<li><code>System.out.println(props.getProperty(&quot;color&quot;, &quot;red&quot;))</code> now prints <code>blue</code> because it&#39;s loaded from the file.</li>
</ol>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>blue
blue
</code></pre><ul>
<li><p>This option is incorrect. It doesn&#39;t account for the <code>clear()</code> method call which empties the properties before the first print statement.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>red
red
</code></pre><ul>
<li><p>This option is incorrect. It doesn&#39;t account for the successful loading of properties from the file before the second print statement.</p>
</li>
<li><p><strong>D)</strong> The code will throw a <code>FileNotFoundException</code>.</p>
<ul>
<li>This option is incorrect. The code creates the file in the first <code>try-with-resources</code> block, so it should exist for the second block to read from.</li>
</ul>
</li>
<li><p><strong>E)</strong></p>
</li>
</ul>
<pre><code>null
blue
</code></pre><ul>
<li>This option is incorrect. <code>getProperty()</code> returns the default value <code>red</code> when the property is not found, not <code>null</code>.</li>
</ul>
`},{id:"ch14-q5",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:5,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.text.MessageFormat;
<span class="hljs-keyword">import</span> java.util.Date;
<span class="hljs-keyword">import</span> java.util.Locale;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">MessageFormatTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">String</span> <span class="hljs-variable">pattern</span> <span class="hljs-operator">=</span> <span class="hljs-string">&quot;On {0, date, long}, {1} bought {2,number,integer} {3} for {4,number,currency}.&quot;</span>;
        Object[] params = {
            <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(),
            <span class="hljs-string">&quot;Alice&quot;</span>,
            <span class="hljs-number">3</span>,
            <span class="hljs-string">&quot;apples&quot;</span>,
            <span class="hljs-number">19.99</span>
        };
        
        <span class="hljs-type">MessageFormat</span> <span class="hljs-variable">mf</span> <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">MessageFormat</span>(pattern, Locale.US);
        <span class="hljs-type">String</span> <span class="hljs-variable">result</span> <span class="hljs-operator">=</span> mf.format(params);
        System.out.println(result);
    }
}
</code></pre><p>Which of the following statements about this code is correct?</p>
`,options:[{letter:"A",html:`<p>The code will throw a <code>IllegalArgumentException</code> because the date format is invalid.</p>
`},{letter:"B",html:`<p>The output will include the date in long format, the name <code>&quot;Alice&quot;</code>, the number 3, the word <code>&quot;apples&quot;</code>, and the price in US currency format.</p>
`},{letter:"C",html:`<p>The <code>{2,number,integer}</code> format will display 3 as <code>&quot;3.0&quot;</code>.</p>
`},{letter:"D",html:`<p>The code will not compile because <code>MessageFormat</code> doesn&#39;t accept a <code>Locale</code> in its constructor.</p>
`},{letter:"E",html:`<p>The <code>{4,number,currency}</code> format will always display the price in USD, regardless of the <code>Locale</code>.</p>
`}],correct:["B"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The code will throw a <code>IllegalArgumentException</code> because the date format is invalid. </p>
<ul>
<li>This option is incorrect. The date format <code>&quot;long&quot;</code> is valid in <code>MessageFormat</code> and will not throw an exception.</li>
</ul>
</li>
<li><p><strong>B)</strong> The output will include the date in long format, the name <code>&quot;Alice&quot;</code>, the number 3, the word <code>&quot;apples&quot;</code>, and the price in US currency format.</p>
<ul>
<li>This option is correct. The <code>MessageFormat</code> will correctly format each parameter according to the specified pattern:</li>
<li><code>{0, date, long}</code> will format the <code>Date</code> in long format (<code>&quot;June 1, 2023&quot;</code>)</li>
<li><code>{1}</code> will simply insert <code>&quot;Alice&quot;</code></li>
<li><code>{2,number,integer}</code> will format 3 as an integer</li>
<li><code>{3}</code> will insert &quot;apples&quot;</li>
<li><code>{4,number,currency}</code> will format 19.99 as currency according to the US locale (<code>&quot;$19.99&quot;</code>)</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>{2,number,integer}</code> format will display 3 as <code>&quot;3.0&quot;</code>.</p>
<ul>
<li>This option is incorrect. The <code>{2,number,integer}</code> format will display 3 as <code>&quot;3&quot;</code>, not <code>&quot;3.0&quot;</code>. The integer format doesn&#39;t include decimal places.</li>
</ul>
</li>
<li><p><strong>D)</strong> The code will not compile because <code>MessageFormat</code> doesn&#39;t accept a <code>Locale</code> in its constructor.</p>
<ul>
<li>This option is incorrect. <code>MessageFormat</code> does have a constructor that accepts a <code>Locale</code>. The code will compile successfully.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>{4,number,currency}</code> format will always display the price in USD, regardless of the <code>Locale</code>.</p>
<ul>
<li>This option is incorrect. The currency format will use the locale specified in the <code>MessageFormat</code> constructor, which in this case is <code>Locale.US</code>. If a different locale were used, the currency symbol and formatting could change.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q6",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:6,multiSelect:!1,stemHtml:`<p>Which of the following statements about the <code>NumberFormat</code> class in Java is correct?</p>
`,options:[{letter:"A",html:`<p>The <code>NumberFormat.getCurrencyInstance()</code> method returns a formatter that can format monetary amounts according to the specified locale&#39;s conventions.</p>
`},{letter:"B",html:`<p><code>NumberFormat</code> is a concrete class that can be instantiated directly using its constructor.</p>
`},{letter:"C",html:`<p>The <code>setMaximumFractionDigits()</code> method in <code>NumberFormat</code> can only accept values between 0 and 3.</p>
`},{letter:"D",html:`<p>When parsing strings, <code>NumberFormat</code> always throws a <code>ParseException</code> if the input doesn&#39;t exactly match the expected format.</p>
`},{letter:"E",html:`<p>The <code>NumberFormat</code> class can only format and parse integer values, not floating-point numbers.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><p><strong>A)</strong> The <code>NumberFormat.getCurrencyInstance()</code> method returns a formatter that can format monetary amounts according to the specified locale&#39;s conventions.</p>
<ul>
<li>This option is correct. The <code>getCurrencyInstance()</code> method of <code>NumberFormat</code> returns a currency formatter for the specified locale (or the default locale if none is specified). This formatter applies the appropriate currency symbol, digit grouping, and decimal separator according to the locale&#39;s conventions.</li>
</ul>
</li>
<li><p><strong>B)</strong> <code>NumberFormat</code> is a concrete class that can be instantiated directly using its constructor.</p>
<ul>
<li>This option is incorrect. <code>NumberFormat</code> is an abstract class and cannot be instantiated directly. Instead, you obtain instances through its static factory methods like <code>getInstance()</code>, <code>getCurrencyInstance()</code>, or <code>getPercentInstance()</code>.</li>
</ul>
</li>
<li><p><strong>C)</strong> The <code>setMaximumFractionDigits()</code> method in <code>NumberFormat</code> can only accept values between 0 and 3.</p>
<ul>
<li>This option is incorrect. The <code>setMaximumFractionDigits()</code> method is not limited to the range of 0 to 3.</li>
</ul>
</li>
<li><p><strong>D)</strong> When parsing strings, <code>NumberFormat</code> always throws a <code>ParseException</code> if the input doesn&#39;t exactly match the expected format.</p>
<ul>
<li>This option is incorrect. <code>NumberFormat</code> is generally lenient when parsing. It will attempt to parse as much of the string as it can recognize as a number, and will only throw a <code>ParseException</code> if it can&#39;t parse any part of the string as a number.</li>
</ul>
</li>
<li><p><strong>E)</strong> The <code>NumberFormat</code> class can only format and parse integer values, not floating-point numbers.</p>
<ul>
<li>This option is incorrect. <code>NumberFormat</code> can format and parse both integer and floating-point numbers. It provides methods like <code>setMaximumFractionDigits()</code> and <code>setMinimumFractionDigits()</code> specifically for handling decimal places in floating-point numbers.</li>
</ul>
</li>
</ul>
`},{id:"ch14-q7",chapter:"ch14",chapterTitle:"Chapter FOURTEEN",chapterSubtitle:"Localization",number:7,multiSelect:!1,stemHtml:`<p>Consider the following code snippet:</p>
<pre><code class="hljs language-java"><span class="hljs-keyword">import</span> java.time.LocalDateTime;
<span class="hljs-keyword">import</span> java.time.ZoneId;
<span class="hljs-keyword">import</span> java.time.ZonedDateTime;
<span class="hljs-keyword">import</span> java.time.format.DateTimeFormatter;

<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DateTimeFormatterTest</span> {
    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">main</span><span class="hljs-params">(String[] args)</span> {
        <span class="hljs-type">LocalDateTime</span> <span class="hljs-variable">ldt</span> <span class="hljs-operator">=</span> LocalDateTime.of(<span class="hljs-number">2023</span>, <span class="hljs-number">6</span>, <span class="hljs-number">15</span>, <span class="hljs-number">10</span>, <span class="hljs-number">30</span>);
        <span class="hljs-type">ZoneId</span> <span class="hljs-variable">zoneNY</span> <span class="hljs-operator">=</span> ZoneId.of(<span class="hljs-string">&quot;America/New_York&quot;</span>);
        <span class="hljs-type">ZonedDateTime</span> <span class="hljs-variable">zdtNY</span> <span class="hljs-operator">=</span> ldt.atZone(zoneNY);
        
        <span class="hljs-type">DateTimeFormatter</span> <span class="hljs-variable">formatter</span> <span class="hljs-operator">=</span> DateTimeFormatter.ofPattern(<span class="hljs-string">&quot;yyyy-MM-dd HH:mm z VV&quot;</span>);
        System.out.println(formatter.format(zdtNY));
        
        <span class="hljs-type">ZoneId</span> <span class="hljs-variable">zoneTokyo</span> <span class="hljs-operator">=</span> ZoneId.of(<span class="hljs-string">&quot;Asia/Tokyo&quot;</span>);
        <span class="hljs-type">ZonedDateTime</span> <span class="hljs-variable">zdtTokyo</span> <span class="hljs-operator">=</span> zdtNY.withZoneSameInstant(zoneTokyo);
        System.out.println(formatter.format(zdtTokyo));
    }
}
</code></pre><p>What will be the output when this code is executed?</p>
`,options:[{letter:"A",html:`<pre><code>2023-06-15 10:30 EDT America/New_York
2023-06-15 23:30 JST Asia/Tokyo
</code></pre>`},{letter:"B",html:`<pre><code>2023-06-15 10:30 EDT New_York
2023-06-15 23:30 JST Tokyo
</code></pre>`},{letter:"C",html:`<pre><code>2023-06-15 10:30 -04:00 America/New_York
2023-06-15 23:30 +09:00 Asia/Tokyo
</code></pre>`},{letter:"D",html:`<pre><code>2023-06-15 10:30 America/New_York
2023-06-15 23:30 Asia/Tokyo
</code></pre>`},{letter:"E",html:`<p>The code will throw a <code>DateTimeException</code> because the formatter pattern is invalid.</p>
`}],correct:["A"],explanationHtml:`<p><strong>Explanation:</strong></p>
<ul>
<li><strong>A)</strong></li>
</ul>
<pre><code>2023-06-15 10:30 EDT America/New_York
2023-06-15 23:30 JST Asia/Tokyo
</code></pre><ul>
<li><p>This option is correct. Let&#39;s break down the formatter pattern:</p>
<ul>
<li><code>&quot;yyyy-MM-dd HH:mm&quot;</code> formats the date and time</li>
<li><code>&quot;z&quot;</code> outputs the short name of the zone, like EDT or JST</li>
<li><code>&quot;VV&quot;</code> outputs the full time zone ID, like <code>America/New_York</code> or <code>Asia/Tokyo</code>
   The second line shows the correct time in Tokyo, which is 13 hours ahead of New York.</li>
</ul>
</li>
<li><p><strong>B)</strong></p>
</li>
</ul>
<pre><code>2023-06-15 10:30 EDT New_York
2023-06-15 23:30 JST Tokyo
</code></pre><ul>
<li><p>This option is incorrect. The <code>&quot;VV&quot;</code> pattern outputs the full time zone ID, not just the city name.</p>
</li>
<li><p><strong>C)</strong></p>
</li>
</ul>
<pre><code>2023-06-15 10:30 -04:00 America/New_York
2023-06-15 23:30 +09:00 Asia/Tokyo
</code></pre><ul>
<li><p>This option is incorrect. The <code>&quot;z&quot;</code> pattern outputs the short name of the zone (EDT, JST), not the offset.</p>
</li>
<li><p><strong>D)</strong></p>
</li>
</ul>
<pre><code>2023-06-15 10:30 America/New_York
2023-06-15 23:30 Asia/Tokyo
</code></pre><ul>
<li><p>This option is incorrect. It&#39;s missing the short zone names (EDT, JST) that the <code>&quot;z&quot;</code> pattern should output.</p>
</li>
<li><p><strong>E)</strong> The code will throw a <code>DateTimeException</code> because the formatter pattern is invalid.</p>
<ul>
<li>This option is incorrect. The formatter pattern is valid and will not throw an exception.</li>
</ul>
</li>
</ul>
`}],gn={chapters:un,questions:mn},Oe=gn,ge=Js({phase:"setup"});hn(ge,s=>s.phase);function fn(s){const e=s.slice();for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function jn(s,e){const n=Oe.questions.filter(t=>s.includes(t.chapter));return fn(n).slice(0,e)}function bn(s){ge.set({phase:"quiz",run:{questions:s,answers:Object.fromEntries(s.map(e=>[e.id,[]])),guessed:Object.fromEntries(s.map(e=>[e.id,!1])),currentIndex:0,startedAt:Date.now()}})}function yn(s){ge.update(e=>e.phase!=="quiz"?e:{...e,run:{...e.run,guessed:{...e.run.guessed,[s]:!e.run.guessed[s]}}})}function wn(s,e){ge.update(n=>n.phase!=="quiz"?n:{...n,run:{...n.run,answers:{...n.run.answers,[s]:e}}})}function ke(s){ge.update(e=>{if(e.phase!=="quiz")return e;const n=Math.max(0,Math.min(e.run.questions.length-1,e.run.currentIndex+s));return{...e,run:{...e.run,currentIndex:n}}})}function vn(s,e){if(e.length!==s.correct.length)return!1;const n=new Set(e);return s.correct.every(t=>n.has(t))}function Tn(){let s;return ge.update(e=>{if(e.phase!=="quiz")return e;const n=Date.now(),t=Math.max(0,n-e.run.startedAt),a=e.run.questions.map(i=>{const p=(e.run.answers[i.id]??[]).slice().sort(),d=vn(i,p),r=!!e.run.guessed[i.id];return{qid:i.id,selected:p,correct:d,guessed:r,ts:n,question:i}}),l=a.filter(i=>i.correct).length;return s={entries:a,correctCount:l,total:a.length,durationMs:t},{phase:"results",results:s}}),s}function kn(){ge.set({phase:"setup"})}const Us=new Map(Oe.chapters.map(s=>[s.id,s.title]));function Sn(s){const e=s.indexOf("-");return e>0?s.slice(0,e):void 0}const Gs=365,Cn=3500,Ys="path=/; SameSite=Lax";function An(s){const e=new Date;return e.setTime(e.getTime()+s*864e5),e.toUTCString()}function Ze(s,e,n){typeof document>"u"||(document.cookie=`${encodeURIComponent(s)}=${encodeURIComponent(e)}; expires=${An(n)}; ${Ys}`)}function $s(s){if(typeof document>"u")return null;const e=encodeURIComponent(s)+"=",n=document.cookie.split(";");for(const t of n){const a=t.trim();if(a.startsWith(e))return decodeURIComponent(a.slice(e.length))}return null}function ze(s){typeof document>"u"||(document.cookie=`${encodeURIComponent(s)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ${Ys}`)}function Je(s){const e=$s(s);if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function qn(s,e,n={}){const t=n.days??Gs;Ze(s,JSON.stringify(e),t)}function xn(s,e,n={}){const t=n.days??Gs,a=n.maxBytesPerCookie??Cn,l=JSON.stringify(e),i=[];let p=0;for(;p<l.length;){let r=Math.min(p+a,l.length),g=l.slice(p,r);for(;encodeURIComponent(g).length>a&&r>p+1;)r-=64,r<=p&&(r=p+1),g=l.slice(p,r);i.push(g),p=r}const d=Je(`${s}_meta`);if(i.forEach((r,g)=>Ze(`${s}_${g}`,r,t)),Ze(`${s}_meta`,JSON.stringify({chunks:i.length}),t),d&&d.chunks>i.length)for(let r=i.length;r<d.chunks;r++)ze(`${s}_${r}`)}function En(s){const e=Je(`${s}_meta`);if(!e||!e.chunks)return null;let n="";for(let t=0;t<e.chunks;t++){const a=$s(`${s}_${t}`);if(a==null)return null;n+=a}try{return JSON.parse(n)}catch{return null}}function _n(s,e){for(const n of e)ze(n);for(const n of s){const t=Je(`${n}_meta`);if(t)for(let a=0;a<t.chunks;a++)ze(`${n}_${a}`);ze(`${n}_meta`)}}const is=()=>({totalAttempted:0,totalCorrect:0,totalGuessed:0,totalGuessedCorrect:0,firstAttempt:null,lastAttempt:null,totalDurationMs:0,lastDurationMs:null,totalQuizzes:0,perChapter:{}}),Qe="ocpj21_score",es="ocpj21_history",rs=500;function Ne(){const s=Je(Qe);if(!s)return is();const e=is();return{...e,...s,perChapter:{...e.perChapter,...s.perChapter??{}}}}function Dn(){return En(es)??[]}function In(s,e,n){const t=Ne(),a=Date.now();t.firstAttempt==null&&(t.firstAttempt=a),t.lastAttempt=a,t.totalDurationMs+=n,t.lastDurationMs=n,t.totalQuizzes+=1;for(const p of s){t.totalAttempted+=1,p.correct&&(t.totalCorrect+=1),p.guessed&&(t.totalGuessed+=1,p.correct&&(t.totalGuessedCorrect+=1));const d=e(p.qid);if(d){const r=t.perChapter[d]??{attempted:0,correct:0};r.attempted+=1,p.correct&&(r.correct+=1),t.perChapter[d]=r}}const l=Dn().concat(s),i=l.length>rs?l.slice(l.length-rs):l;return qn(Qe,t),xn(es,i),{score:t,history:i}}function On(){_n([es],[Qe])}function ps(s,e,n){const t=s.slice();t[5]=e[n];const a=t[2](t[5].id);return t[6]=a,t}function ds(s){let e,n,t;return{c(){e=u("button"),e.textContent="Reset",c(e,"class","link svelte-26sfud"),c(e,"aria-label","Reset progress")},m(a,l){q(a,e,l),n||(t=ce(e,"click",s[3]),n=!0)},p:$,d(a){a&&A(e),n=!1,t()}}}function Bn(s){let e,n,t,a=s[0].totalCorrect+"",l,i,p,d,r,g=s[0].totalAttempted+"",f,b,m,h,j,x,S,v,w=s[0].totalQuizzes>0&&hs(s),I=ue(Oe.chapters),_=[];for(let k=0;k<I.length;k+=1)_[k]=gs(ps(s,I,k));return{c(){e=u("div"),n=u("div"),t=u("span"),l=C(a),i=y(),p=u("span"),p.textContent="/",d=y(),r=u("span"),f=C(g),b=y(),m=u("div"),h=C(s[1]),j=C("%"),x=y(),w&&w.c(),S=y(),v=u("ul");for(let k=0;k<_.length;k+=1)_[k].c();c(t,"class","big svelte-26sfud"),c(p,"class","sep svelte-26sfud"),c(r,"class","big svelte-26sfud"),c(n,"class","score"),c(m,"class","pct svelte-26sfud"),c(m,"aria-label","Overall percentage"),c(e,"class","overall svelte-26sfud"),c(v,"class","bars svelte-26sfud")},m(k,D){q(k,e,D),o(e,n),o(n,t),o(t,l),o(n,i),o(n,p),o(n,d),o(n,r),o(r,f),o(e,b),o(e,m),o(m,h),o(m,j),q(k,x,D),w&&w.m(k,D),q(k,S,D),q(k,v,D);for(let T=0;T<_.length;T+=1)_[T]&&_[T].m(v,null)},p(k,D){if(D&1&&a!==(a=k[0].totalCorrect+"")&&R(l,a),D&1&&g!==(g=k[0].totalAttempted+"")&&R(f,g),D&2&&R(h,k[1]),k[0].totalQuizzes>0?w?w.p(k,D):(w=hs(k),w.c(),w.m(S.parentNode,S)):w&&(w.d(1),w=null),D&4){I=ue(Oe.chapters);let T;for(T=0;T<I.length;T+=1){const N=ps(k,I,T);_[T]?_[T].p(N,D):(_[T]=gs(N),_[T].c(),_[T].m(v,null))}for(;T<_.length;T+=1)_[T].d(1);_.length=I.length}},d(k){k&&(A(e),A(x),A(S),A(v)),w&&w.d(k),zs(_,k)}}}function Ln(s){let e;return{c(){e=u("p"),e.textContent="No attempts yet. Take a quiz to start tracking progress.",c(e,"class","empty svelte-26sfud")},m(n,t){q(n,e,t)},p:$,d(n){n&&A(e)}}}function hs(s){let e,n,t=s[0].totalQuizzes+"",a,l,i=s[0].totalQuizzes===1?"":"zes",p,d,r,g,f,b,m,h=Re(s[0].totalDurationMs)+"",j,x,S,v=s[0].lastDurationMs!=null&&us(s),w=s[0].totalGuessed>0&&ms(s);return{c(){e=u("div"),n=u("span"),a=C(t),l=C(" quiz"),p=C(i),d=y(),r=u("span"),r.textContent="·",g=y(),f=u("span"),b=C("Total time: "),m=u("strong"),j=C(h),x=y(),v&&v.c(),S=y(),w&&w.c(),c(r,"class","dot svelte-26sfud"),c(m,"class","svelte-26sfud"),c(e,"class","time-row svelte-26sfud")},m(I,_){q(I,e,_),o(e,n),o(n,a),o(n,l),o(n,p),o(e,d),o(e,r),o(e,g),o(e,f),o(f,b),o(f,m),o(m,j),o(e,x),v&&v.m(e,null),o(e,S),w&&w.m(e,null)},p(I,_){_&1&&t!==(t=I[0].totalQuizzes+"")&&R(a,t),_&1&&i!==(i=I[0].totalQuizzes===1?"":"zes")&&R(p,i),_&1&&h!==(h=Re(I[0].totalDurationMs)+"")&&R(j,h),I[0].lastDurationMs!=null?v?v.p(I,_):(v=us(I),v.c(),v.m(e,S)):v&&(v.d(1),v=null),I[0].totalGuessed>0?w?w.p(I,_):(w=ms(I),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},d(I){I&&A(e),v&&v.d(),w&&w.d()}}}function us(s){let e,n,t,a,l,i=Re(s[0].lastDurationMs)+"",p;return{c(){e=u("span"),e.textContent="·",n=y(),t=u("span"),a=C("Last: "),l=u("strong"),p=C(i),c(e,"class","dot svelte-26sfud"),c(l,"class","svelte-26sfud")},m(d,r){q(d,e,r),q(d,n,r),q(d,t,r),o(t,a),o(t,l),o(l,p)},p(d,r){r&1&&i!==(i=Re(d[0].lastDurationMs)+"")&&R(p,i)},d(d){d&&(A(e),A(n),A(t))}}}function ms(s){let e,n,t,a,l,i=s[0].totalGuessed+"",p,d,r,g,f=s[0].totalGuessedCorrect+"",b,m;return{c(){e=u("span"),e.textContent="·",n=y(),t=u("span"),a=C("Guessed: "),l=u("strong"),p=C(i),d=y(),r=u("span"),g=C("("),b=C(f),m=C(" correct)"),c(e,"class","dot svelte-26sfud"),c(l,"class","svelte-26sfud"),c(r,"class","muted svelte-26sfud")},m(h,j){q(h,e,j),q(h,n,j),q(h,t,j),o(t,a),o(t,l),o(l,p),o(t,d),o(t,r),o(r,g),o(r,b),o(r,m)},p(h,j){j&1&&i!==(i=h[0].totalGuessed+"")&&R(p,i),j&1&&f!==(f=h[0].totalGuessedCorrect+"")&&R(b,f)},d(h){h&&(A(e),A(n),A(t))}}}function gs(s){let e,n,t,a,l,i,p,d,r;return{c(){e=u("li"),n=u("div"),t=u("span"),t.textContent=`${s[5].title}`,a=y(),l=u("span"),l.textContent=`${s[6]==null?"—":`${s[6]}%`}`,i=y(),p=u("div"),d=u("div"),r=y(),c(t,"class","label svelte-26sfud"),c(l,"class","num svelte-26sfud"),c(n,"class","bar-row svelte-26sfud"),c(d,"class","fill svelte-26sfud"),Me(d,"width",(s[6]??0)+"%"),Me(d,"opacity",s[6]==null?.2:1),c(p,"class","bar svelte-26sfud")},m(g,f){q(g,e,f),o(e,n),o(n,t),o(n,a),o(n,l),o(e,i),o(e,p),o(p,d),o(e,r)},p:$,d(g){g&&A(e)}}}function Hn(s){let e,n,t,a,l,i=s[0].totalAttempted>0&&ds(s);function p(g,f){return g[0].totalAttempted===0?Ln:Bn}let d=p(s),r=d(s);return{c(){e=u("section"),n=u("div"),t=u("h2"),t.textContent="Your progress",a=y(),i&&i.c(),l=y(),r.c(),c(t,"class","svelte-26sfud"),c(n,"class","head svelte-26sfud"),c(e,"class","panel svelte-26sfud"),c(e,"aria-label","Progress")},m(g,f){q(g,e,f),o(e,n),o(n,t),o(n,a),i&&i.m(n,null),o(e,l),r.m(e,null)},p(g,[f]){g[0].totalAttempted>0?i?i.p(g,f):(i=ds(g),i.c(),i.m(n,null)):i&&(i.d(1),i=null),d===(d=p(g))&&r?r.p(g,f):(r.d(1),r=d(g),r&&(r.c(),r.m(e,null)))},i:$,o:$,d(g){g&&A(e),i&&i.d(),r.d()}}}function Re(s){const e=Math.max(0,Math.floor(s/1e3)),n=Math.floor(e/3600),t=Math.floor(e%3600/60),a=e%60;return n>0?`${n}h ${t}m`:t>0?`${t}m ${a.toString().padStart(2,"0")}s`:`${a}s`}function Fn(s,e,n){let t,{score:a=Ne()}=e,{refreshKey:l=0}=e;function i(d){const r=a.perChapter[d];return!r||r.attempted===0?null:Math.round(r.correct/r.attempted*100)}function p(){confirm("Clear all progress stored in cookies?")&&(On(),n(0,a=Ne()))}return s.$$set=d=>{"score"in d&&n(0,a=d.score),"refreshKey"in d&&n(4,l=d.refreshKey)},s.$$.update=()=>{s.$$.dirty&16&&l>=0&&n(0,a=Ne()),s.$$.dirty&1&&n(1,t=a.totalAttempted===0?0:Math.round(a.totalCorrect/a.totalAttempted*100))},[a,t,i,p,l]}class Pn extends xe{constructor(e){super(),qe(this,e,Fn,Hn,be,{score:0,refreshKey:4})}}function fs(s,e,n){const t=s.slice();return t[12]=e[n],t}function zn(s){let e,n,t=s[2]===1?"":"s",a,l;return{c(){e=C(s[2]),n=C(" question"),a=C(t),l=C(" available in your selection.")},m(i,p){q(i,e,p),q(i,n,p),q(i,a,p),q(i,l,p)},p(i,p){p&4&&R(e,i[2]),p&4&&t!==(t=i[2]===1?"":"s")&&R(a,t)},d(i){i&&(A(e),A(n),A(a),A(l))}}}function Nn(s){let e,n,t,a=s[2]===1?"":"s",l,i,p,d;return{c(){e=C("Only "),n=C(s[2]),t=C(" question"),l=C(a),i=C(" available — will pick "),p=C(s[2]),d=C(".")},m(r,g){q(r,e,g),q(r,n,g),q(r,t,g),q(r,l,g),q(r,i,g),q(r,p,g),q(r,d,g)},p(r,g){g&4&&R(n,r[2]),g&4&&a!==(a=r[2]===1?"":"s")&&R(l,a),g&4&&R(p,r[2])},d(r){r&&(A(e),A(n),A(t),A(l),A(i),A(p),A(d))}}}function Mn(s){let e;return{c(){e=C("Select at least one chapter.")},m(n,t){q(n,e,t)},p:$,d(n){n&&A(e)}}}function js(s){let e,n,t,a,l,i,p,d,r,g,f,b,m;function h(){return s[10](s[12])}return{c(){e=u("li"),n=u("label"),t=u("input"),l=y(),i=u("span"),i.textContent=`${s[12].title}`,p=y(),d=u("span"),d.textContent=`${s[12].subtitle}`,r=y(),g=u("span"),g.textContent=`${s[12].count}`,f=y(),c(t,"type","checkbox"),t.checked=a=s[0].has(s[12].id),c(t,"class","svelte-521rtl"),c(i,"class","title svelte-521rtl"),c(d,"class","subtitle svelte-521rtl"),c(g,"class","count-badge svelte-521rtl"),c(n,"class","chapter-row svelte-521rtl"),K(n,"checked",s[0].has(s[12].id))},m(j,x){q(j,e,x),o(e,n),o(n,t),o(n,l),o(n,i),o(n,p),o(n,d),o(n,r),o(n,g),o(e,f),b||(m=ce(t,"change",h),b=!0)},p(j,x){s=j,x&1&&a!==(a=s[0].has(s[12].id))&&(t.checked=a),x&17&&K(n,"checked",s[0].has(s[12].id))},d(j){j&&A(e),b=!1,m()}}}function Rn(s){let e,n,t,a,l,i,p,d,r,g,f,b,m,h,j,x,S,v,w,I,_,k,D,T,N,E,L,M,ae,F,Z,V,X,J;function de(z,U){return z[2]===0?Mn:z[1]>z[2]?Nn:zn}let oe=de(s),Q=oe(s),se=ue(s[4]),P=[];for(let z=0;z<se.length;z+=1)P[z]=js(fs(s,se,z));return Z=new Pn({props:{refreshKey:Vn}}),{c(){e=u("div"),n=u("section"),t=u("h2"),t.textContent="Start a new quiz",a=y(),l=u("div"),i=u("label"),i.textContent="Number of questions",p=y(),d=u("input"),g=y(),f=u("span"),Q.c(),b=y(),m=u("div"),h=u("div"),j=u("h3"),j.textContent="Chapters",x=y(),S=u("div"),v=u("button"),v.textContent="All",w=y(),I=u("span"),I.textContent="·",_=y(),k=u("button"),k.textContent="None",D=y(),T=u("ul");for(let z=0;z<P.length;z+=1)P[z].c();N=y(),E=u("button"),L=C("Start quiz →"),ae=y(),F=u("aside"),Ae(Z.$$.fragment),c(t,"class","svelte-521rtl"),c(i,"for","count"),c(i,"class","svelte-521rtl"),c(d,"id","count"),c(d,"type","number"),c(d,"min","1"),c(d,"max",r=s[2]||1),c(f,"class","hint svelte-521rtl"),c(l,"class","count svelte-521rtl"),c(j,"class","svelte-521rtl"),c(v,"class","link svelte-521rtl"),c(v,"type","button"),c(I,"class","divider svelte-521rtl"),c(k,"class","link svelte-521rtl"),c(k,"type","button"),c(S,"class","actions svelte-521rtl"),c(h,"class","chapters-head svelte-521rtl"),c(T,"class","svelte-521rtl"),c(m,"class","chapters"),c(E,"class","primary start svelte-521rtl"),c(E,"type","button"),E.disabled=M=!s[3],c(n,"class","card svelte-521rtl"),c(F,"class","stats"),c(e,"class","layout svelte-521rtl")},m(z,U){q(z,e,U),o(e,n),o(n,t),o(n,a),o(n,l),o(l,i),o(l,p),o(l,d),os(d,s[1]),o(l,g),o(l,f),Q.m(f,null),o(n,b),o(n,m),o(m,h),o(h,j),o(h,x),o(h,S),o(S,v),o(S,w),o(S,I),o(S,_),o(S,k),o(m,D),o(m,T);for(let G=0;G<P.length;G+=1)P[G]&&P[G].m(T,null);o(n,N),o(n,E),o(E,L),o(e,ae),o(e,F),ye(Z,F,null),V=!0,X||(J=[ce(d,"input",s[9]),ce(v,"click",s[6]),ce(k,"click",s[7]),ce(E,"click",s[8])],X=!0)},p(z,[U]){if((!V||U&4&&r!==(r=z[2]||1))&&c(d,"max",r),U&2&&Ms(d.value)!==z[1]&&os(d,z[1]),oe===(oe=de(z))&&Q?Q.p(z,U):(Q.d(1),Q=oe(z),Q&&(Q.c(),Q.m(f,null))),U&49){se=ue(z[4]);let G;for(G=0;G<se.length;G+=1){const ne=fs(z,se,G);P[G]?P[G].p(ne,U):(P[G]=js(ne),P[G].c(),P[G].m(T,null))}for(;G<P.length;G+=1)P[G].d(1);P.length=se.length}(!V||U&8&&M!==(M=!z[3]))&&(E.disabled=M)},i(z){V||(ee(Z.$$.fragment,z),V=!0)},o(z){ie(Z.$$.fragment,z),V=!1},d(z){z&&A(e),Q.d(),zs(P,z),we(Z),X=!1,me(J)}}}let Vn=0;function Wn(s,e,n){let t,a,l;const i=Oe.chapters;let p=new Set(i.map(j=>j.id)),d=10;function r(j){const x=new Set(p);x.has(j)?x.delete(j):x.add(j),n(0,p=x)}function g(){n(0,p=new Set(i.map(j=>j.id)))}function f(){n(0,p=new Set)}function b(){const j=jn(Array.from(p),a);j.length!==0&&bn(j)}function m(){d=Ms(this.value),n(1,d)}const h=j=>r(j.id);return s.$$.update=()=>{s.$$.dirty&1&&n(2,t=i.filter(j=>p.has(j.id)).reduce((j,x)=>j+x.count,0)),s.$$.dirty&6&&(a=Math.max(1,Math.min(d,t))),s.$$.dirty&6&&n(3,l=t>0&&d>=1)},[p,d,t,l,i,r,g,f,b,m,h]}class Jn extends xe{constructor(e){super(),qe(this,e,Wn,Rn,be,{})}}function bs(s,e,n){const t=s.slice();t[11]=e[n];const a=t[6](t[11].letter);return t[12]=a,t}function ys(s){let e;return{c(){e=u("p"),e.textContent="Select all that apply.",c(e,"class","hint svelte-17aaigd")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function ws(s){let e,n,t,a=s[12]==="correct"&&vs(),l=s[12]==="wrong"&&Ts(),i=s[12]==="missed"&&ks();return{c(){a&&a.c(),e=y(),l&&l.c(),n=y(),i&&i.c(),t=Ns()},m(p,d){a&&a.m(p,d),q(p,e,d),l&&l.m(p,d),q(p,n,d),i&&i.m(p,d),q(p,t,d)},p(p,d){p[12]==="correct"?a||(a=vs(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),p[12]==="wrong"?l||(l=Ts(),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null),p[12]==="missed"?i||(i=ks(),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(p){p&&(A(e),A(n),A(t)),a&&a.d(p),l&&l.d(p),i&&i.d(p)}}}function vs(s){let e;return{c(){e=u("span"),e.textContent="✓",c(e,"class","marker correct svelte-17aaigd"),c(e,"aria-label","Your answer, correct")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function Ts(s){let e;return{c(){e=u("span"),e.textContent="✗",c(e,"class","marker wrong svelte-17aaigd"),c(e,"aria-label","Your answer, wrong")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function ks(s){let e;return{c(){e=u("span"),e.textContent="★",c(e,"class","marker missed svelte-17aaigd"),c(e,"aria-label","Correct answer you did not pick")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function Ss(s,e){let n,t,a,l,i,p,d,r,g,f=e[11].letter+"",b,m,h,j=e[11].html+"",x,S,v,w,I;function _(){return e[10](e[11])}let k=e[2]==="review"&&ws(e);return{key:s,first:null,c(){n=u("li"),t=u("label"),a=u("input"),r=y(),g=u("span"),b=C(f),m=y(),h=u("span"),x=y(),k&&k.c(),v=y(),c(a,"type",l=e[0].multiSelect?"checkbox":"radio"),c(a,"name",i=e[0].id),a.value=p=e[11].letter,a.checked=d=e[4](e[11].letter),a.disabled=e[1],c(a,"tabindex","-1"),c(a,"class","svelte-17aaigd"),c(g,"class","letter svelte-17aaigd"),c(h,"class","body md svelte-17aaigd"),c(t,"class",S="opt state-"+e[12]+" svelte-17aaigd"),K(t,"locked",e[1]),K(t,"kb-focus",!e[1]&&e[3]===e[11].letter),this.first=n},m(D,T){q(D,n,T),o(n,t),o(t,a),o(t,r),o(t,g),o(g,b),o(t,m),o(t,h),h.innerHTML=j,o(t,x),k&&k.m(t,null),o(n,v),w||(I=ce(a,"change",_),w=!0)},p(D,T){e=D,T&1&&l!==(l=e[0].multiSelect?"checkbox":"radio")&&c(a,"type",l),T&1&&i!==(i=e[0].id)&&c(a,"name",i),T&1&&p!==(p=e[11].letter)&&a.value!==p&&(a.value=p),T&1&&d!==(d=e[4](e[11].letter))&&(a.checked=d),T&2&&(a.disabled=e[1]),T&1&&f!==(f=e[11].letter+"")&&R(b,f),T&1&&j!==(j=e[11].html+"")&&(h.innerHTML=j),e[2]==="review"?k?k.p(e,T):(k=ws(e),k.c(),k.m(t,null)):k&&(k.d(1),k=null),T&1&&S!==(S="opt state-"+e[12]+" svelte-17aaigd")&&c(t,"class",S),T&3&&K(t,"locked",e[1]),T&11&&K(t,"kb-focus",!e[1]&&e[3]===e[11].letter)},d(D){D&&A(n),k&&k.d(),w=!1,I()}}}function Un(s){let e,n,t=s[0].stemHtml+"",a,l,i,p=[],d=new Map,r=s[0].multiSelect&&ys(),g=ue(s[0].options);const f=b=>b[11].letter;for(let b=0;b<g.length;b+=1){let m=bs(s,g,b),h=f(m);d.set(h,p[b]=Ss(h,m))}return{c(){e=u("article"),n=u("div"),a=y(),r&&r.c(),l=y(),i=u("ul");for(let b=0;b<p.length;b+=1)p[b].c();c(n,"class","stem md svelte-17aaigd"),c(i,"class","options svelte-17aaigd"),c(e,"class","q svelte-17aaigd")},m(b,m){q(b,e,m),o(e,n),n.innerHTML=t,o(e,a),r&&r.m(e,null),o(e,l),o(e,i);for(let h=0;h<p.length;h+=1)p[h]&&p[h].m(i,null)},p(b,[m]){m&1&&t!==(t=b[0].stemHtml+"")&&(n.innerHTML=t),b[0].multiSelect?r||(r=ys(),r.c(),r.m(e,l)):r&&(r.d(1),r=null),m&127&&(g=ue(b[0].options),p=Ke(p,m,f,1,b,g,d,i,Ws,Ss,null,bs))},i:$,o:$,d(b){b&&A(e),r&&r.d();for(let m=0;m<p.length;m+=1)p[m].d()}}}function Gn(s,e,n){let{question:t}=e,{selected:a=[]}=e,{onChange:l=()=>{}}=e,{locked:i=!1}=e,{correctLetters:p=null}=e,{mode:d="quiz"}=e,{focusedLetter:r=null}=e;function g(h){return a.includes(h)}function f(h){i||(t.multiSelect?g(h)?l(a.filter(j=>j!==h)):l([...a,h].sort()):l([h]))}function b(h){if(d!=="review"||!p)return g(h)?"picked":"none";const j=p.includes(h),x=g(h);return x&&j?"correct":x&&!j?"wrong":!x&&j?"missed":"none"}const m=h=>f(h.letter);return s.$$set=h=>{"question"in h&&n(0,t=h.question),"selected"in h&&n(7,a=h.selected),"onChange"in h&&n(8,l=h.onChange),"locked"in h&&n(1,i=h.locked),"correctLetters"in h&&n(9,p=h.correctLetters),"mode"in h&&n(2,d=h.mode),"focusedLetter"in h&&n(3,r=h.focusedLetter)},[t,i,d,r,g,f,b,a,l,p,m]}class Zs extends xe{constructor(e){super(),qe(this,e,Gn,Un,be,{question:0,selected:7,onChange:8,locked:1,correctLetters:9,mode:2,focusedLetter:3})}}function Cs(s,e,n){const t=s.slice();return t[23]=e[n],t[25]=n,t}function As(s){let e,n,t,a,l=s[2].currentIndex+1+"",i,p,d,r,g,f,b,m,h,j,x,S,v,w,I,_,k,D,T,N,E,L,M,ae,F,Z,V=s[8]?"🎲":"?",X,J,de,oe=s[8]?"Marked as guess":"Mark as guess",Q,se,P,z,U,G,ne,Y,Ee,fe,le,te=[],_e=new Map,H,O,pe,ss;P=new Zs({props:{question:s[1],selected:s[5],onChange:s[10],focusedLetter:s[0]}});let Be=ue(s[2].questions);const ns=B=>B[23].id;for(let B=0;B<Be.length;B+=1){let W=Cs(s,Be,B),re=ns(W);_e.set(re,te[B]=qs(re,W))}function ts(B,W){return B[3]?$n:Yn}let Le=ts(s),he=Le(s);return{c(){e=u("div"),n=u("div"),t=u("span"),a=C("Question "),i=C(l),p=y(),d=u("span"),d.textContent="of",r=y(),g=C(s[9]),f=y(),b=u("span"),m=C(s[7]),h=y(),j=u("span"),x=He("svg"),S=He("circle"),v=He("path"),w=He("path"),I=y(),_=u("span"),k=C(s[6]),D=y(),T=u("div"),N=u("div"),L=y(),M=u("section"),ae=u("div"),F=u("button"),Z=u("span"),X=C(V),J=y(),de=u("span"),Q=C(oe),se=y(),Ae(P.$$.fragment),z=y(),U=u("p"),U.innerHTML='← / → question · ↑ / ↓ option · <kbd class="svelte-3ijstr">Space</kbd> select · <kbd class="svelte-3ijstr">G</kbd> guess',G=y(),ne=u("div"),Y=u("button"),Ee=C("← Previous"),fe=y(),le=u("div");for(let B=0;B<te.length;B+=1)te[B].c();H=y(),he.c(),c(d,"class","of svelte-3ijstr"),c(t,"class","pos svelte-3ijstr"),c(b,"class","chap svelte-3ijstr"),c(S,"cx","12"),c(S,"cy","13"),c(S,"r","8"),c(S,"fill","none"),c(S,"stroke","currentColor"),c(S,"stroke-width","2"),c(v,"d","M12 9v4l3 2"),c(v,"fill","none"),c(v,"stroke","currentColor"),c(v,"stroke-width","2"),c(v,"stroke-linecap","round"),c(w,"d","M9 3h6"),c(w,"fill","none"),c(w,"stroke","currentColor"),c(w,"stroke-width","2"),c(w,"stroke-linecap","round"),c(x,"viewBox","0 0 24 24"),c(x,"width","14"),c(x,"height","14"),c(x,"aria-hidden","true"),c(_,"class","timer-text svelte-3ijstr"),c(j,"class","timer svelte-3ijstr"),c(j,"aria-label","Elapsed time"),c(j,"title","Elapsed time"),c(n,"class","meta svelte-3ijstr"),c(N,"class","fill svelte-3ijstr"),Me(N,"width",(s[2].currentIndex+1)/s[9]*100+"%"),c(T,"class","progress svelte-3ijstr"),c(T,"role","progressbar"),c(T,"aria-valuenow",E=s[2].currentIndex+1),c(T,"aria-valuemin",1),c(T,"aria-valuemax",s[9]),c(e,"class","bar svelte-3ijstr"),c(Z,"class","guess-icon svelte-3ijstr"),c(Z,"aria-hidden","true"),c(F,"type","button"),c(F,"class","guess-toggle svelte-3ijstr"),c(F,"aria-pressed",s[8]),c(F,"title","Mark this question as a guess (keyboard: G)"),K(F,"active",s[8]),c(ae,"class","quiz-card-head svelte-3ijstr"),c(U,"class","kbhint svelte-3ijstr"),c(U,"aria-hidden","true"),c(M,"class","quiz-card svelte-3ijstr"),c(Y,"type","button"),Y.disabled=s[4],c(le,"class","dots svelte-3ijstr"),c(le,"aria-label","Quiz navigation"),c(ne,"class","controls svelte-3ijstr")},m(B,W){q(B,e,W),o(e,n),o(n,t),o(t,a),o(t,i),o(t,p),o(t,d),o(t,r),o(t,g),o(n,f),o(n,b),o(b,m),o(n,h),o(n,j),o(j,x),o(x,S),o(x,v),o(x,w),o(j,I),o(j,_),o(_,k),o(e,D),o(e,T),o(T,N),q(B,L,W),q(B,M,W),o(M,ae),o(ae,F),o(F,Z),o(Z,X),o(F,J),o(F,de),o(de,Q),o(M,se),ye(P,M,null),o(M,z),o(M,U),q(B,G,W),q(B,ne,W),o(ne,Y),o(Y,Ee),o(ne,fe),o(ne,le);for(let re=0;re<te.length;re+=1)te[re]&&te[re].m(le,null);o(ne,H),he.m(ne,null),O=!0,pe||(ss=[ce(F,"click",s[12]),ce(Y,"click",s[16])],pe=!0)},p(B,W){(!O||W&4)&&l!==(l=B[2].currentIndex+1+"")&&R(i,l),(!O||W&512)&&R(g,B[9]),(!O||W&128)&&R(m,B[7]),(!O||W&64)&&R(k,B[6]),(!O||W&516)&&Me(N,"width",(B[2].currentIndex+1)/B[9]*100+"%"),(!O||W&4&&E!==(E=B[2].currentIndex+1))&&c(T,"aria-valuenow",E),(!O||W&512)&&c(T,"aria-valuemax",B[9]),(!O||W&256)&&V!==(V=B[8]?"🎲":"?")&&R(X,V),(!O||W&256)&&oe!==(oe=B[8]?"Marked as guess":"Mark as guess")&&R(Q,oe),(!O||W&256)&&c(F,"aria-pressed",B[8]),(!O||W&256)&&K(F,"active",B[8]);const re={};W&2&&(re.question=B[1]),W&32&&(re.selected=B[5]),W&1&&(re.focusedLetter=B[0]),P.$set(re),(!O||W&16)&&(Y.disabled=B[4]),W&4&&(Be=ue(B[2].questions),te=Ke(te,W,ns,1,B,Be,_e,le,Ws,qs,null,Cs)),Le===(Le=ts(B))&&he?he.p(B,W):(he.d(1),he=Le(B),he&&(he.c(),he.m(ne,null)))},i(B){O||(ee(P.$$.fragment,B),O=!0)},o(B){ie(P.$$.fragment,B),O=!1},d(B){B&&(A(e),A(L),A(M),A(G),A(ne)),we(P);for(let W=0;W<te.length;W+=1)te[W].d();he.d(),pe=!1,me(ss)}}}function qs(s,e){let n,t,a,l;function i(){return e[17](e[25])}return{key:s,first:null,c(){n=u("button"),c(n,"class","dot svelte-3ijstr"),c(n,"type","button"),c(n,"aria-label",t=`Go to question ${e[25]+1}${e[2].guessed[e[23].id]?" (guessed)":""}`),K(n,"current",e[25]===e[2].currentIndex),K(n,"answered",(e[2].answers[e[23].id]??[]).length>0),K(n,"guessed",e[2].guessed[e[23].id]),this.first=n},m(p,d){q(p,n,d),a||(l=ce(n,"click",i),a=!0)},p(p,d){e=p,d&4&&t!==(t=`Go to question ${e[25]+1}${e[2].guessed[e[23].id]?" (guessed)":""}`)&&c(n,"aria-label",t),d&4&&K(n,"current",e[25]===e[2].currentIndex),d&4&&K(n,"answered",(e[2].answers[e[23].id]??[]).length>0),d&4&&K(n,"guessed",e[2].guessed[e[23].id])},d(p){p&&A(n),a=!1,l()}}}function Yn(s){let e,n,t;return{c(){e=u("button"),e.textContent="Next →",c(e,"class","primary"),c(e,"type","button")},m(a,l){q(a,e,l),n||(t=ce(e,"click",s[18]),n=!0)},p:$,d(a){a&&A(e),n=!1,t()}}}function $n(s){let e,n,t;return{c(){e=u("button"),e.textContent="Submit →",c(e,"class","primary"),c(e,"type","button")},m(a,l){q(a,e,l),n||(t=ce(e,"click",s[11]),n=!0)},p:$,d(a){a&&A(e),n=!1,t()}}}function Zn(s){let e,n,t=s[2]&&s[1]&&As(s);return{c(){t&&t.c(),e=Ns()},m(a,l){t&&t.m(a,l),q(a,e,l),n=!0},p(a,[l]){a[2]&&a[1]?t?(t.p(a,l),l&6&&ee(t,1)):(t=As(a),t.c(),ee(t,1),t.m(e.parentNode,e)):t&&(Ve(),ie(t,1,1,()=>{t=null}),We())},i(a){n||(ee(t),n=!0)},o(a){ie(t),n=!1},d(a){a&&A(e),t&&t.d(a)}}}function Xn(s){const e=Math.max(0,Math.floor(s/1e3)),n=Math.floor(e/60),t=e%60;return`${n}:${t.toString().padStart(2,"0")}`}function Kn(s,e,n){let t,a,l,i,p,d,r,g,f,b,m;Ps(s,ge,E=>n(15,m=E));let h=null,j=Date.now(),x=null;function S(E){a&&wn(a.id,E)}function v(){const E=Tn(),L=E.entries.map(M=>({qid:M.qid,selected:M.selected,correct:M.correct,ts:M.ts}));In(L,M=>Sn(M),E.durationMs)}function w(E){if(!a)return;const L=a.options;if(L.length===0)return;const ae=(Math.max(0,L.findIndex(F=>F.letter===h))+E+L.length)%L.length;n(0,h=L[ae].letter)}function I(){if(!a||!h)return;const E=h,L=new Set(d);a.multiSelect?(L.has(E)?L.delete(E):L.add(E),S(Array.from(L).sort())):S([E])}function _(){a&&yn(a.id)}function k(E){var M;if(m.phase!=="quiz")return;const L=((M=E.target)==null?void 0:M.tagName)??"";if(!(L==="INPUT"||L==="TEXTAREA"||L==="SELECT"))switch(E.key){case"ArrowLeft":i||(E.preventDefault(),ke(-1));break;case"ArrowRight":p||(E.preventDefault(),ke(1));break;case"ArrowDown":E.preventDefault(),w(1);break;case"ArrowUp":E.preventDefault(),w(-1);break;case" ":case"Spacebar":E.preventDefault(),I();break;case"Enter":p?(E.preventDefault(),v()):(E.preventDefault(),ke(1));break;case"g":case"G":if(E.ctrlKey||E.metaKey||E.altKey)return;E.preventDefault(),_();break}}sn(()=>{x=setInterval(()=>{n(13,j=Date.now())},1e3),window.addEventListener("keydown",k)}),nn(()=>{x&&clearInterval(x),window.removeEventListener("keydown",k)});const D=()=>ke(-1),T=E=>ke(E-t.currentIndex),N=()=>ke(1);return s.$$.update=()=>{var E;if(s.$$.dirty&32768&&n(2,t=m.phase==="quiz"?m.run:null),s.$$.dirty&4&&n(1,a=t?t.questions[t.currentIndex]:null),s.$$.dirty&4&&n(9,l=t?t.questions.length:0),s.$$.dirty&4&&n(4,i=t?t.currentIndex===0:!0),s.$$.dirty&4&&n(3,p=t?t.currentIndex===t.questions.length-1:!1),s.$$.dirty&6&&n(5,d=t&&a?t.answers[a.id]??[]:[]),s.$$.dirty&6&&n(8,r=t&&a?!!t.guessed[a.id]:!1),s.$$.dirty&2&&n(7,g=a?Us.get(a.chapter)??a.chapter:""),s.$$.dirty&3&&a){const L=((E=a.options[0])==null?void 0:E.letter)??null;(!h||!a.options.some(M=>M.letter===h))&&n(0,h=L)}s.$$.dirty&8196&&n(14,f=t?j-t.startedAt:0),s.$$.dirty&16384&&n(6,b=Xn(f))},[h,a,t,p,i,d,b,g,r,l,S,v,_,j,f,m,D,T,N]}class Qn extends xe{constructor(e){super(),qe(this,e,Kn,Zn,be,{})}}function xs(s,e,n){const t=s.slice();return t[10]=e[n],t[12]=n,t}function Es(s){let e,n,t,a,l,i=s[1].length+"",p,d,r,g,f,b;return{c(){e=u("span"),e.textContent="·",n=y(),t=u("span"),a=C("Guessed: "),l=u("strong"),p=C(i),d=y(),r=u("span"),g=C("("),f=C(s[5]),b=C(" correct)"),c(e,"class","sep-dot svelte-wp0f0p"),c(r,"class","muted svelte-wp0f0p"),c(t,"class","muted svelte-wp0f0p")},m(m,h){q(m,e,h),q(m,n,h),q(m,t,h),o(t,a),o(t,l),o(l,p),o(t,d),o(t,r),o(r,g),o(r,f),o(r,b)},p(m,h){h&2&&i!==(i=m[1].length+"")&&R(p,i),h&32&&R(f,m[5])},d(m){m&&(A(e),A(n),A(t))}}}function et(s){let e;return{c(){e=C("A few weak spots — take another pass through the chapters you missed.")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function st(s){let e;return{c(){e=C("Solid — review the missed questions below.")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function nt(s){let e;return{c(){e=C("Excellent — strong showing across this set.")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function _s(s){let e;return{c(){e=u("span"),e.textContent="🎲 guess",c(e,"class","badge-guess svelte-wp0f0p"),c(e,"title","You marked this as a guess")},m(n,t){q(n,e,t)},d(n){n&&A(e)}}}function Ds(s){let e,n,t,a,l,i,p,d=Fe(s[10].selected)+"",r,g,f,b,m,h=Fe(s[10].question.correct)+"",j,x,S;n=new Zs({props:{question:s[10].question,selected:s[10].selected,correctLetters:s[10].question.correct,mode:"review",locked:!0}});let v=s[10].question.explanationHtml&&Is(s);return{c(){e=u("div"),Ae(n.$$.fragment),t=y(),a=u("div"),l=u("div"),i=u("strong"),i.textContent="Your answer:",p=y(),r=C(d),g=y(),f=u("div"),b=u("strong"),b.textContent="Correct:",m=y(),j=C(h),x=y(),v&&v.c(),c(a,"class","answer-line svelte-wp0f0p"),c(e,"class","detail svelte-wp0f0p")},m(w,I){q(w,e,I),ye(n,e,null),o(e,t),o(e,a),o(a,l),o(l,i),o(l,p),o(l,r),o(a,g),o(a,f),o(f,b),o(f,m),o(f,j),o(e,x),v&&v.m(e,null),S=!0},p(w,I){const _={};I&1&&(_.question=w[10].question),I&1&&(_.selected=w[10].selected),I&1&&(_.correctLetters=w[10].question.correct),n.$set(_),(!S||I&1)&&d!==(d=Fe(w[10].selected)+"")&&R(r,d),(!S||I&1)&&h!==(h=Fe(w[10].question.correct)+"")&&R(j,h),w[10].question.explanationHtml?v?v.p(w,I):(v=Is(w),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i(w){S||(ee(n.$$.fragment,w),S=!0)},o(w){ie(n.$$.fragment,w),S=!1},d(w){w&&A(e),we(n),v&&v.d()}}}function Is(s){let e,n,t,a,l=s[10].question.explanationHtml+"";return{c(){e=u("details"),n=u("summary"),n.textContent="Explanation",t=y(),a=u("div"),c(n,"class","svelte-wp0f0p"),c(a,"class","md explanation svelte-wp0f0p"),e.open=!0,c(e,"class","svelte-wp0f0p")},m(i,p){q(i,e,p),o(e,n),o(e,t),o(e,a),a.innerHTML=l},p(i,p){p&1&&l!==(l=i[10].question.explanationHtml+"")&&(a.innerHTML=l)},d(i){i&&A(e)}}}function Os(s,e){let n,t,a,l=e[10].correct?"✓":"✗",i,p,d,r=e[12]+1+"",g,f,b,m,h=e[8](e[10].question.chapter)+"",j,x,S,v,w=Ls(e[10].question.stemHtml)+"",I,_,k=e[3]===e[12]?"▾":"▸",D,T,N,E,L,M,ae,F=e[10].guessed&&_s();function Z(){return e[9](e[12])}let V=e[3]===e[12]&&Ds(e);return{key:s,first:null,c(){n=u("li"),t=u("button"),a=u("span"),i=C(l),p=y(),d=u("span"),g=C(r),f=C("."),b=y(),m=u("span"),j=C(h),x=y(),F&&F.c(),S=y(),v=u("span"),I=y(),_=u("span"),D=C(k),N=y(),V&&V.c(),E=y(),c(a,"class","tag svelte-wp0f0p"),c(a,"aria-hidden","true"),c(d,"class","num svelte-wp0f0p"),c(m,"class","chap svelte-wp0f0p"),c(v,"class","grow preview md svelte-wp0f0p"),c(_,"class","chev svelte-wp0f0p"),c(_,"aria-hidden","true"),c(t,"class","row svelte-wp0f0p"),c(t,"type","button"),c(t,"aria-expanded",T=e[3]===e[12]),c(n,"class","svelte-wp0f0p"),K(n,"correct",e[10].correct),K(n,"wrong",!e[10].correct),K(n,"guessed",e[10].guessed),this.first=n},m(X,J){q(X,n,J),o(n,t),o(t,a),o(a,i),o(t,p),o(t,d),o(d,g),o(d,f),o(t,b),o(t,m),o(m,j),o(t,x),F&&F.m(t,null),o(t,S),o(t,v),v.innerHTML=w,o(t,I),o(t,_),o(_,D),o(n,N),V&&V.m(n,null),o(n,E),L=!0,M||(ae=ce(t,"click",Z),M=!0)},p(X,J){e=X,(!L||J&1)&&l!==(l=e[10].correct?"✓":"✗")&&R(i,l),(!L||J&1)&&r!==(r=e[12]+1+"")&&R(g,r),(!L||J&1)&&h!==(h=e[8](e[10].question.chapter)+"")&&R(j,h),e[10].guessed?F||(F=_s(),F.c(),F.m(t,S)):F&&(F.d(1),F=null),(!L||J&1)&&w!==(w=Ls(e[10].question.stemHtml)+"")&&(v.innerHTML=w),(!L||J&9)&&k!==(k=e[3]===e[12]?"▾":"▸")&&R(D,k),(!L||J&9&&T!==(T=e[3]===e[12]))&&c(t,"aria-expanded",T),e[3]===e[12]?V?(V.p(e,J),J&9&&ee(V,1)):(V=Ds(e),V.c(),ee(V,1),V.m(n,E)):V&&(Ve(),ie(V,1,1,()=>{V=null}),We()),(!L||J&1)&&K(n,"correct",e[10].correct),(!L||J&1)&&K(n,"wrong",!e[10].correct),(!L||J&1)&&K(n,"guessed",e[10].guessed)},i(X){L||(ee(V),L=!0)},o(X){ie(V),L=!1},d(X){X&&A(n),F&&F.d(),V&&V.d(),M=!1,ae()}}}function tt(s){let e,n,t,a=s[0].correctCount+"",l,i,p,d,r,g=s[0].total+"",f,b,m,h,j,x,S,v,w,I=Bs(s[0].durationMs)+"",_,k,D,T,N,E,L,M,ae,F,Z,V,X,J,de,oe,Q,se,P=[],z=new Map,U,G,ne,Y=s[1].length>0&&Es(s);function Ee(H,O){return H[6]==="great"?nt:H[6]==="ok"?st:et}let fe=Ee(s),le=fe(s),te=ue(s[0].entries);const _e=H=>H[10].qid;for(let H=0;H<te.length;H+=1){let O=xs(s,te,H),pe=_e(O);z.set(pe,P[H]=Os(pe,O))}return{c(){e=u("section"),n=u("div"),t=u("span"),l=C(a),i=y(),p=u("span"),p.textContent="/",d=y(),r=u("span"),f=C(g),b=y(),m=u("span"),h=C(s[2]),j=C("%"),x=y(),S=u("p"),v=C("Time: "),w=u("strong"),_=C(I),k=y(),D=u("span"),D.textContent="·",T=y(),N=u("span"),E=C("~"),L=C(s[4]),M=C(" per question"),ae=y(),Y&&Y.c(),F=y(),Z=u("p"),le.c(),V=y(),X=u("div"),J=u("button"),J.textContent="Take another quiz",de=y(),oe=u("h2"),oe.textContent="Review",Q=y(),se=u("ol");for(let H=0;H<P.length;H+=1)P[H].c();c(t,"class","big svelte-wp0f0p"),c(p,"class","sep svelte-wp0f0p"),c(r,"class","big svelte-wp0f0p"),c(m,"class","pct svelte-wp0f0p"),c(n,"class","score-line svelte-wp0f0p"),c(D,"class","sep-dot svelte-wp0f0p"),c(N,"class","muted svelte-wp0f0p"),c(S,"class","timing svelte-wp0f0p"),c(Z,"class","msg svelte-wp0f0p"),c(J,"class","primary"),c(J,"type","button"),c(X,"class","actions svelte-wp0f0p"),c(e,"class","summary svelte-wp0f0p"),c(e,"data-verdict",s[6]),c(oe,"class","review-title svelte-wp0f0p"),c(se,"class","review svelte-wp0f0p")},m(H,O){q(H,e,O),o(e,n),o(n,t),o(t,l),o(n,i),o(n,p),o(n,d),o(n,r),o(r,f),o(n,b),o(n,m),o(m,h),o(m,j),o(e,x),o(e,S),o(S,v),o(S,w),o(w,_),o(S,k),o(S,D),o(S,T),o(S,N),o(N,E),o(N,L),o(N,M),o(S,ae),Y&&Y.m(S,null),o(e,F),o(e,Z),le.m(Z,null),o(e,V),o(e,X),o(X,J),q(H,de,O),q(H,oe,O),q(H,Q,O),q(H,se,O);for(let pe=0;pe<P.length;pe+=1)P[pe]&&P[pe].m(se,null);U=!0,G||(ne=ce(J,"click",kn),G=!0)},p(H,[O]){(!U||O&1)&&a!==(a=H[0].correctCount+"")&&R(l,a),(!U||O&1)&&g!==(g=H[0].total+"")&&R(f,g),(!U||O&4)&&R(h,H[2]),(!U||O&1)&&I!==(I=Bs(H[0].durationMs)+"")&&R(_,I),(!U||O&16)&&R(L,H[4]),H[1].length>0?Y?Y.p(H,O):(Y=Es(H),Y.c(),Y.m(S,null)):Y&&(Y.d(1),Y=null),fe!==(fe=Ee(H))&&(le.d(1),le=fe(H),le&&(le.c(),le.m(Z,null))),(!U||O&64)&&c(e,"data-verdict",H[6]),O&393&&(te=ue(H[0].entries),Ve(),P=Ke(P,O,_e,1,H,te,z,se,cn,Os,null,xs),We())},i(H){if(!U){for(let O=0;O<te.length;O+=1)ee(P[O]);U=!0}},o(H){for(let O=0;O<P.length;O+=1)ie(P[O]);U=!1},d(H){H&&(A(e),A(de),A(oe),A(Q),A(se)),Y&&Y.d(),le.d();for(let O=0;O<P.length;O+=1)P[O].d();G=!1,ne()}}}function Bs(s){const e=Math.max(0,Math.floor(s/1e3)),n=Math.floor(e/60),t=e%60;return`${n}:${t.toString().padStart(2,"0")}`}function Fe(s){return s.length===0?"(no answer)":s.join(", ")}function Ls(s){const e=s.match(/^\s*<p>([\s\S]*?)<\/p>\s*(?:[\s\S]*)$/);return e?e[1]:s}function at(s,e,n){let t,a,l,i,p,{results:d}=e,r=null;function g(m){n(3,r=r===m?null:m)}function f(m){return Us.get(m)??m}const b=m=>g(m);return s.$$set=m=>{"results"in m&&n(0,d=m.results)},s.$$.update=()=>{s.$$.dirty&1&&n(2,t=d.total===0?0:Math.round(d.correctCount/d.total*100)),s.$$.dirty&4&&n(6,a=t>=80?"great":t>=60?"ok":"rough"),s.$$.dirty&1&&n(1,l=d.entries.filter(m=>m.guessed)),s.$$.dirty&2&&n(5,i=l.filter(m=>m.correct).length),s.$$.dirty&1&&n(4,p=d.total===0?"0s":`${Math.round(d.durationMs/d.total/1e3)}s`)},[d,l,t,r,p,i,a,g,f,b]}class ot extends xe{constructor(e){super(),qe(this,e,at,tt,be,{results:0})}}function lt(s){let e,n;return e=new ot({props:{results:s[0].results}}),{c(){Ae(e.$$.fragment)},m(t,a){ye(e,t,a),n=!0},p(t,a){const l={};a&1&&(l.results=t[0].results),e.$set(l)},i(t){n||(ee(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function ct(s){let e,n;return e=new Qn({}),{c(){Ae(e.$$.fragment)},m(t,a){ye(e,t,a),n=!0},p:$,i(t){n||(ee(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function it(s){let e,n;return e=new Jn({}),{c(){Ae(e.$$.fragment)},m(t,a){ye(e,t,a),n=!0},p:$,i(t){n||(ee(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function rt(s){let e,n,t,a,l,i,p,d,r;const g=[it,ct,lt],f=[];function b(m,h){return m[0].phase==="setup"?0:m[0].phase==="quiz"?1:m[0].phase==="results"?2:-1}return~(l=b(s))&&(i=f[l]=g[l](s)),{c(){e=u("div"),n=u("header"),n.innerHTML='<h1 class="svelte-18m087x">OCPJ21 Practice Quiz</h1> <p class="tagline svelte-18m087x">Study guide for the Java SE 21 Developer Exam (1Z0-830)</p>',t=y(),a=u("main"),i&&i.c(),p=y(),d=u("footer"),d.innerHTML="<small>Progress is stored locally in your browser cookies.</small>",c(n,"class","svelte-18m087x"),c(a,"class","svelte-18m087x"),c(d,"class","svelte-18m087x"),c(e,"class","page svelte-18m087x")},m(m,h){q(m,e,h),o(e,n),o(e,t),o(e,a),~l&&f[l].m(a,null),o(e,p),o(e,d),r=!0},p(m,[h]){let j=l;l=b(m),l===j?~l&&f[l].p(m,h):(i&&(Ve(),ie(f[j],1,1,()=>{f[j]=null}),We()),~l?(i=f[l],i?i.p(m,h):(i=f[l]=g[l](m),i.c()),ee(i,1),i.m(a,null)):i=null)},i(m){r||(ee(i),r=!0)},o(m){ie(i),r=!1},d(m){m&&A(e),~l&&f[l].d()}}}function pt(s,e,n){let t;return Ps(s,ge,a=>n(0,t=a)),[t]}class dt extends xe{constructor(e){super(),qe(this,e,pt,rt,be,{})}}new dt({target:document.getElementById("app")});
//# sourceMappingURL=index-amgrE4fD.js.map
