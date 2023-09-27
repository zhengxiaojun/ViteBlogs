import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.2655693f.js";const d=JSON.parse('{"title":"uniapp 一键登录","description":"","frontmatter":{"title":"uniapp 一键登录","date":"2023年02月24日","tags":["框架","uniapp"],"categories":["uniapp"]},"headers":[],"relativePath":"articles/uniapp/一键登录.md","filePath":"articles/uniapp/一键登录.md"}'),l={name:"articles/uniapp/一键登录.md"},o=p(`<h1 id="uniapp-一键登录" tabindex="-1">uniapp 一键登录 <a class="header-anchor" href="#uniapp-一键登录" aria-label="Permalink to &quot;uniapp 一键登录&quot;">​</a></h1><h2 id="_1-准备账号信息" tabindex="-1">1. 准备账号信息 <a class="header-anchor" href="#_1-准备账号信息" aria-label="Permalink to &quot;1. 准备账号信息&quot;">​</a></h2><p><a href="https://dev.dcloud.net.cn/pages/uniLogin/index" target="_blank" rel="noreferrer">https://dev.dcloud.net.cn/pages/uniLogin/index</a></p><p>在官方平台申请一个应用，并且要配置一键登录信息</p><p>注意：一键登录要预充值，并且没有余额提醒，每次调用登录 0.02 元，自己时常关注一下</p><h2 id="_2-云函数" tabindex="-1">2. 云函数 <a class="header-anchor" href="#_2-云函数" aria-label="Permalink to &quot;2. 云函数&quot;">​</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1bdc33fe1129420388784d5d227cd995~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>新建了一个云函数，one-click-login，上传部署到 unicloud 中</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;use strict&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">crypto</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;crypto&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">aesEncrypt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">secretKey</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> cipher </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> crypto.</span><span style="color:#B392F0;">createCipher</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aes-128-ecb&#39;</span><span style="color:#E1E4E8;">,secretKey);</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(data,</span><span style="color:#9ECBFF;">&#39;utf8&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> cipher.</span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hex&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// event里包含着客户端提交的参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> uniCloud.</span><span style="color:#B392F0;">getPhoneNumber</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      appid: </span><span style="color:#9ECBFF;">&#39;__UNI__83CFF21&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 替换成自己开通一键登录的应用的DCloud appid，使用callFunction方式调用时可以不传（会自动取当前客户端的appid），如果使用云函数URL化的方式访问必须传此参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;univerify&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      apiKey: </span><span style="color:#9ECBFF;">&#39;xxxxxxxxxx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在开发者中心开通服务并获取apiKey</span></span>
<span class="line"><span style="color:#E1E4E8;">      apiSecret: </span><span style="color:#9ECBFF;">&#39;xxxxxxxxxxx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在开发者中心开通服务并获取apiSecret</span></span>
<span class="line"><span style="color:#E1E4E8;">      access_token: event.access_token,</span></span>
<span class="line"><span style="color:#E1E4E8;">      openid: event.openid</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">httpRes1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> uniCloud.httpclient.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">(event.host </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/member/getAesKey&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        iv: event.access_token</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      contentType: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 指定以application/json发送data内的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      dataType: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 指定返回值为json格式，自动进行parse</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">secret</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> httpRes1.data.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(secret)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hmac</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">aesEncrypt</span><span style="color:#E1E4E8;">(res.phoneNumber, secret);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(hmac)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    code: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		phone: res.phoneNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">		hmac</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;获取手机号成功&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;use strict&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">crypto</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;crypto&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aesEncrypt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">,</span><span style="color:#E36209;">secretKey</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> cipher </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> crypto.</span><span style="color:#6F42C1;">createCipher</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;aes-128-ecb&#39;</span><span style="color:#24292E;">,secretKey);</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> cipher.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(data,</span><span style="color:#032F62;">&#39;utf8&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;hex&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> cipher.</span><span style="color:#6F42C1;">final</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hex&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#E36209;">context</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// event里包含着客户端提交的参数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> uniCloud.</span><span style="color:#6F42C1;">getPhoneNumber</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      appid: </span><span style="color:#032F62;">&#39;__UNI__83CFF21&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 替换成自己开通一键登录的应用的DCloud appid，使用callFunction方式调用时可以不传（会自动取当前客户端的appid），如果使用云函数URL化的方式访问必须传此参数</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;univerify&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      apiKey: </span><span style="color:#032F62;">&#39;xxxxxxxxxx&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在开发者中心开通服务并获取apiKey</span></span>
<span class="line"><span style="color:#24292E;">      apiSecret: </span><span style="color:#032F62;">&#39;xxxxxxxxxxx&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在开发者中心开通服务并获取apiSecret</span></span>
<span class="line"><span style="color:#24292E;">      access_token: event.access_token,</span></span>
<span class="line"><span style="color:#24292E;">      openid: event.openid</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">httpRes1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> uniCloud.httpclient.</span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">(event.host </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/member/getAesKey&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">      method: </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: {</span></span>
<span class="line"><span style="color:#24292E;">        iv: event.access_token</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      contentType: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 指定以application/json发送data内的数据</span></span>
<span class="line"><span style="color:#24292E;">      dataType: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 指定返回值为json格式，自动进行parse</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">secret</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> httpRes1.data.data;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(secret)</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hmac</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">aesEncrypt</span><span style="color:#24292E;">(res.phoneNumber, secret);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(hmac)</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    code: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	data: {</span></span>
<span class="line"><span style="color:#24292E;">		phone: res.phoneNumber,</span></span>
<span class="line"><span style="color:#24292E;">		hmac</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">    message: </span><span style="color:#032F62;">&#39;获取手机号成功&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>可自行定义内容，根据需要编写</p><h2 id="app代码" tabindex="-1">App代码 <a class="header-anchor" href="#app代码" aria-label="Permalink to &quot;App代码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 手机号登录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">phoneLogin</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isCanOneClickLogin) { </span><span style="color:#6A737D;">// 可以一键登录</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">        uni.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;univerify&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          univerifyStyle: univerifyStyle,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 登录成功</span></span>
<span class="line"><span style="color:#E1E4E8;">            self.</span><span style="color:#B392F0;">unicloudAnalysisUserPhone</span><span style="color:#E1E4E8;">(res.authResult)</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30002</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">jumpPhonePage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            uni.</span><span style="color:#B392F0;">closeAuthView</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">jumpPhonePage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取一键登录信息后，云函数解析，传给后台</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">unicloudAnalysisUserPhone</span><span style="color:#E1E4E8;"> ({ access_token, openid }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 在得到access_token后，通过callfunction调用云函数</span></span>
<span class="line"><span style="color:#E1E4E8;">      uniCloud.</span><span style="color:#B392F0;">callFunction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;one-click-login&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 你的云函数名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          host: </span><span style="color:#79B8FF;">API_URL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          access_token, </span><span style="color:#6A737D;">// 客户端一键登录接口返回的access_token</span></span>
<span class="line"><span style="color:#E1E4E8;">          openid </span><span style="color:#6A737D;">// 客户端一键登录接口返回的openid</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        uni.</span><span style="color:#B392F0;">closeAuthView</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">phone</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">hmac</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.result.data</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.oneClickData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            phone, hmac, access_token, openid</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res.result.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">jumpPhonePage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 处理错误</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 手机号登录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">phoneLogin</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isCanOneClickLogin) { </span><span style="color:#6A737D;">// 可以一键登录</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">        uni.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          provider: </span><span style="color:#032F62;">&#39;univerify&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          univerifyStyle: univerifyStyle,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 登录成功</span></span>
<span class="line"><span style="color:#24292E;">            self.</span><span style="color:#6F42C1;">unicloudAnalysisUserPhone</span><span style="color:#24292E;">(res.authResult)</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30002</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">jumpPhonePage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            uni.</span><span style="color:#6F42C1;">closeAuthView</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">jumpPhonePage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取一键登录信息后，云函数解析，传给后台</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">unicloudAnalysisUserPhone</span><span style="color:#24292E;"> ({ access_token, openid }) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 在得到access_token后，通过callfunction调用云函数</span></span>
<span class="line"><span style="color:#24292E;">      uniCloud.</span><span style="color:#6F42C1;">callFunction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;one-click-login&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 你的云函数名称</span></span>
<span class="line"><span style="color:#24292E;">        data: {</span></span>
<span class="line"><span style="color:#24292E;">          host: </span><span style="color:#005CC5;">API_URL</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          access_token, </span><span style="color:#6A737D;">// 客户端一键登录接口返回的access_token</span></span>
<span class="line"><span style="color:#24292E;">          openid </span><span style="color:#6A737D;">// 客户端一键登录接口返回的openid</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        uni.</span><span style="color:#6F42C1;">closeAuthView</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.result) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">phone</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">hmac</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.result.data</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.oneClickData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            phone, hmac, access_token, openid</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res.result.data)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">jumpPhonePage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 处理错误</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><p>这样即可获取手机号，留个记录</p>`,13),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const h=s(l,[["render",c]]);export{d as __pageData,h as default};
