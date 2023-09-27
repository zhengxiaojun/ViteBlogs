import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2655693f.js";const F=JSON.parse('{"title":"this的指向","description":"","frontmatter":{"title":"this的指向","date":"2023年02月24日","tags":["javaScript"],"categories":["JavaScript核心系列"]},"headers":[],"relativePath":"articles/javaScript-core/this的指向.md","filePath":"articles/javaScript-core/this的指向.md"}'),p={name:"articles/javaScript-core/this的指向.md"},o=l(`<h1 id="this-到底指向什么" tabindex="-1">this 到底指向什么 <a class="header-anchor" href="#this-到底指向什么" aria-label="Permalink to &quot;this 到底指向什么&quot;">​</a></h1><h2 id="this-到底指向什么-1" tabindex="-1">this 到底指向什么 <a class="header-anchor" href="#this-到底指向什么-1" aria-label="Permalink to &quot;this 到底指向什么&quot;">​</a></h2><p><strong>定义一个函数，采用三种不同的方式对它进行调用，三种不同的结果</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 定义一个函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 调用方式一：直接调用</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 将 foo 放到一个对象中，再调用</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;xiaoli&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  foo: foo</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; obj 对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 通过 call / apply 调用</span></span>
<span class="line"><span style="color:#E1E4E8;">foo.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abl&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// this =&gt; String {&quot;abc&quot;} 对象</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 定义一个函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 调用方式一：直接调用</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 将 foo 放到一个对象中，再调用</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;xiaoli&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  foo: foo</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; obj 对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 通过 call / apply 调用</span></span>
<span class="line"><span style="color:#24292E;">foo.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abl&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// this =&gt; String {&quot;abc&quot;} 对象</span></span></code></pre></div><ol><li>函数调用时候，JavaScript 默认给 this 绑定个值</li><li>this 的绑定和定义的位置没有关系</li><li>this 的绑定和调用方式以及调用的位置有关系</li><li>this 是被运行时绑定的</li></ol><h2 id="this-的绑定规则" tabindex="-1">this 的绑定规则 <a class="header-anchor" href="#this-的绑定规则" aria-label="Permalink to &quot;this 的绑定规则&quot;">​</a></h2><h3 id="默认绑定" tabindex="-1">默认绑定 <a class="header-anchor" href="#默认绑定" aria-label="Permalink to &quot;默认绑定&quot;">​</a></h3><p>普通的函数被独立的调用</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1. 独立调用普通函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 定义在对象中，但是独立调用</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.foo</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 高阶函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(obj.foo)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 独立调用普通函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 定义在对象中，但是独立调用</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">obj.foo</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 高阶函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; window</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(obj.foo)</span></span></code></pre></div><h3 id="隐式绑定" tabindex="-1">隐式绑定 <a class="header-anchor" href="#隐式绑定" aria-label="Permalink to &quot;隐式绑定&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo 函数&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  bar: foo</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; obj</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo 函数&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  bar: foo</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; obj</span></span></code></pre></div><h3 id="显示绑定" tabindex="-1">显示绑定 <a class="header-anchor" href="#显示绑定" aria-label="Permalink to &quot;显示绑定&quot;">​</a></h3><ul><li><p>隐式绑定有个前提条件</p><p>必须**在调用函数内部有个对函数的引用，**比如一个属性，如果没有这样的引用，在调用的时候，会找不到该函数报错</p><p>正是这样，简介的将 this 绑定到了这个对象上</p></li></ul><p>如果我们不希望对象内部包含这个函数引用，同时希望找个对象上进行强调作用，该怎么做</p><p>JavaScript 所有函数都可以使用 call 和 apply 方法</p><ol><li>第一个参数都是要求传入个对象 <ol><li>这个对象是给 this 准备的</li><li>调用这个函数会将 this 绑定到这个传入的对象上</li></ol></li><li>后面的参数，apply 绑定数组，call 绑定参数列表</li></ol><p><strong>bind 绑定函数</strong></p><ul><li>会生成一个新的绑定函数</li><li>绑定的函数是一个 exotic function object（怪异函数对象， ECMAScript 2015 术语）</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;why&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo函数&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">foo.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(obj, </span><span style="color:#9ECBFF;">&#39;why&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">foo.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(obj, [</span><span style="color:#9ECBFF;">&#39;why&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> bar </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> foo.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; obj</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;why&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo函数&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">foo.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(obj, </span><span style="color:#032F62;">&#39;why&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">foo.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(obj, [</span><span style="color:#032F62;">&#39;why&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> bar </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> foo.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(obj)</span></span>
<span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; obj</span></span></code></pre></div><h3 id="new-绑定" tabindex="-1">new 绑定 <a class="header-anchor" href="#new-绑定" aria-label="Permalink to &quot;new 绑定&quot;">​</a></h3><p>JavaScript 中的函数可以当做构造函数使用，使用 new 操作符</p><p><strong>new 所做的事情</strong></p><ol><li><strong>创建一个空对象</strong></li><li><strong>将 this 指向这个空对象</strong></li><li><strong>执行函数体中的代码</strong></li><li><strong>没有显示返回非空对象，默认返回这个对象</strong></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo 函数&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;why&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// this =&gt; foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo 函数&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;why&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// this =&gt; foo</span></span></code></pre></div><h3 id="绑定规则优先级" tabindex="-1">绑定规则优先级 <a class="header-anchor" href="#绑定规则优先级" aria-label="Permalink to &quot;绑定规则优先级&quot;">​</a></h3><ol><li>默认规则优先级最低</li><li>显式高于隐式</li><li>new 绑定高于隐式</li><li>new 不能跟 apply 和 call 一起使用</li><li>new 可以和 bind 使用，new 绑定优先级更高</li></ol><h3 id="内置函数绑定思考" tabindex="-1">内置函数绑定思考 <a class="header-anchor" href="#内置函数绑定思考" aria-label="Permalink to &quot;内置函数绑定思考&quot;">​</a></h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eed727a795ce4ba8b42d608fb63e0d80~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>`,28),e=[o];function t(c,r,E,i,y,h){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{F as __pageData,f as default};
