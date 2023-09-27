import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2655693f.js";const m=JSON.parse('{"title":"Mac使用nvm管理node","description":"","frontmatter":{"title":"Mac使用nvm管理node","date":"2023年02月24日","tags":["mac"],"categories":["开发环境"]},"headers":[],"relativePath":"articles/other/nvm管理node.md","filePath":"articles/other/nvm管理node.md"}'),p={name:"articles/other/nvm管理node.md"},o=l(`<h1 id="初衷" tabindex="-1">初衷 <a class="header-anchor" href="#初衷" aria-label="Permalink to &quot;初衷&quot;">​</a></h1><p>vue项目想换 typeScript 来写，但是安装依赖报错，需要降级node，那我可不干，我喜欢用最高版本的东西，不想降级，你不支持还怪我咯？？？</p><p>但是没办法我向他妥协，我项目要用它，它牛逼！</p><p>所以想到多版本管理node，平时用高版本的，遇到这种低版本需求再切换回来</p><h2 id="卸载-node" tabindex="-1">卸载 node <a class="header-anchor" href="#卸载-node" aria-label="Permalink to &quot;卸载 node&quot;">​</a></h2><p>安装的时候容易，去官网下个包就安装了，卸载起来可真麻烦，不过总结一下，找找各位的卸载方法，融合起来</p><p>就用下面命令来卸载（依次执行）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ sudo npm uninstall npm </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g</span></span>
<span class="line"><span style="color:#E1E4E8;">$ sudo rm </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rf </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">local</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">lib</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">node </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">local</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">lib</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">node_modules </span><span style="color:#F97583;">/var</span><span style="color:#E1E4E8;">/db/receipts/org.nodejs.*</span></span>
<span class="line"><span style="color:#E1E4E8;">$ sudo rm </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rf </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">local</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">include</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">node </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">Users</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">$USER</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">.npm</span></span>
<span class="line"><span style="color:#E1E4E8;">$ sudo rm </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">usr</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">local</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">bin</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">node</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ sudo npm uninstall npm </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g</span></span>
<span class="line"><span style="color:#24292E;">$ sudo rm </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">rf </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">local</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">lib</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">node </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">local</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">lib</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">node_modules </span><span style="color:#D73A49;">/var</span><span style="color:#24292E;">/db/receipts/org.nodejs.*</span></span>
<span class="line"><span style="color:#24292E;">$ sudo rm </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">rf </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">local</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">include</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">node </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">Users</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">$USER</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">.npm</span></span>
<span class="line"><span style="color:#24292E;">$ sudo rm </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">usr</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">local</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">bin</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">node</span></span></code></pre></div><h2 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-label="Permalink to &quot;安装 nvm&quot;">​</a></h2><p>mac下的安装</p><p>命令是：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ curl </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$ nvm </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ curl </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$ nvm </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">version</span></span></code></pre></div><p>安装完成之后，就可以尝试 node 各种姿势，哦不对，是各种版本了</p><p><strong>nvm常用指令</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">nvm </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">help                          显示所有信息</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">version                       显示当前安装的nvm版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm install [</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">s] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">          安装指定的版本，如果不存在.nvmrc,就从指定的资源下载安装</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm install [</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">s] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">latest</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">npm 安装指定的版本，平且下载最新的npm</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm uninstall </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">             卸载指定的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm use [</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">silent] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">        使用已经安装的版本  切换版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm current                         查看当前使用的node版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm ls                              查看已经安装的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm ls  </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">                   查看指定版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm ls</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">remote                       显示远程所有可以安装的nodejs版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm ls</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">remote </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">lts                 查看长期支持的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm install</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">latest</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">npm              安装罪行的npm</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm reinstall</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">packages </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">version</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">    重新安装指定的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm cache dir                       显示nvm的cache</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm cache clear                     清空nvm的cache</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">nvm </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">help                          显示所有信息</span></span>
<span class="line"><span style="color:#24292E;">nvm </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">version                       显示当前安装的nvm版本</span></span>
<span class="line"><span style="color:#24292E;">nvm install [</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">s] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">          安装指定的版本，如果不存在.nvmrc,就从指定的资源下载安装</span></span>
<span class="line"><span style="color:#24292E;">nvm install [</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">s] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">latest</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">npm 安装指定的版本，平且下载最新的npm</span></span>
<span class="line"><span style="color:#24292E;">nvm uninstall </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">             卸载指定的版本</span></span>
<span class="line"><span style="color:#24292E;">nvm use [</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">silent] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">        使用已经安装的版本  切换版本</span></span>
<span class="line"><span style="color:#24292E;">nvm current                         查看当前使用的node版本</span></span>
<span class="line"><span style="color:#24292E;">nvm ls                              查看已经安装的版本</span></span>
<span class="line"><span style="color:#24292E;">nvm ls  </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">                   查看指定版本</span></span>
<span class="line"><span style="color:#24292E;">nvm ls</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">remote                       显示远程所有可以安装的nodejs版本</span></span>
<span class="line"><span style="color:#24292E;">nvm ls</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">remote </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">lts                 查看长期支持的版本</span></span>
<span class="line"><span style="color:#24292E;">nvm install</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">latest</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">npm              安装罪行的npm</span></span>
<span class="line"><span style="color:#24292E;">nvm reinstall</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">packages </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">version</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">    重新安装指定的版本</span></span>
<span class="line"><span style="color:#24292E;">nvm cache dir                       显示nvm的cache</span></span>
<span class="line"><span style="color:#24292E;">nvm cache clear                     清空nvm的cache</span></span></code></pre></div><h3 id="范例" tabindex="-1">范例 <a class="header-anchor" href="#范例" aria-label="Permalink to &quot;范例&quot;">​</a></h3><p>按照我的习惯，给个范例出来</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1. 安装 8.0 版本</span></span>
<span class="line"><span style="color:#E1E4E8;">$ nvm install </span><span style="color:#79B8FF;">8.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 查看版本</span></span>
<span class="line"><span style="color:#E1E4E8;">$ nvm ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 切换版本</span></span>
<span class="line"><span style="color:#E1E4E8;">$ nvm use v8.</span><span style="color:#79B8FF;">0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 安装 8.0 版本</span></span>
<span class="line"><span style="color:#24292E;">$ nvm install </span><span style="color:#005CC5;">8.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 查看版本</span></span>
<span class="line"><span style="color:#24292E;">$ nvm ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 切换版本</span></span>
<span class="line"><span style="color:#24292E;">$ nvm use v8.</span><span style="color:#005CC5;">0.0</span></span></code></pre></div><p>给个金星老师的手势！！！！！👏👏👏👏</p>`,19),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{m as __pageData,h as default};
