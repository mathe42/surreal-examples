import{_ as s,c as a,o as e,a as t}from"./app.a6625134.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"USE statement","slug":"use-statement","link":"#use-statement","children":[]},{"level":2,"title":"Statement syntax","slug":"statement-syntax","link":"#statement-syntax","children":[]},{"level":2,"title":"Example usages","slug":"example-usages","link":"#example-usages","children":[]}],"relativePath":"docs/statements/01_use.md"}'),n={name:"docs/statements/01_use.md"},l=t(`<h2 id="use-statement" tabindex="-1"><code>USE</code> statement <a class="header-anchor" href="#use-statement" aria-hidden="true">#</a></h2><p>The <code>USE</code> statement specifies a namespace and / or a database to use for the subsequent SurrealQL statements.</p><h2 id="statement-syntax" tabindex="-1">Statement syntax <a class="header-anchor" href="#statement-syntax" aria-hidden="true">#</a></h2><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">USE</span><span style="color:#EEFFFF;"> [ </span><span style="color:#89DDFF;">NS</span><span style="color:#EEFFFF;"> @</span><span style="color:#89DDFF;">ns</span><span style="color:#EEFFFF;"> ] [ </span><span style="color:#89DDFF;">DB</span><span style="color:#EEFFFF;"> @</span><span style="color:#89DDFF;">db</span><span style="color:#EEFFFF;"> ];</span></span>
<span class="line"></span></code></pre></div><h2 id="example-usages" tabindex="-1">Example usages <a class="header-anchor" href="#example-usages" aria-hidden="true">#</a></h2><p>The following queries show example usage of this statement:</p><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">USE</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">NS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#EEFFFF;">; </span><span style="color:#546E7A;">-- Switch to the &#39;test&#39; Namespace</span></span>
<span class="line"></span></code></pre></div><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">USE</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">DB</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#EEFFFF;">; </span><span style="color:#546E7A;">-- Switch to the &#39;test&#39; Database</span></span>
<span class="line"></span></code></pre></div><div class="language-surrealql"><button title="Copy Code" class="copy"></button><span class="lang">surrealql</span><pre class="shiki" style="background-color:#263238;"><code><span class="line"><span style="color:#89DDFF;">USE</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">NS</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">DB</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#EEFFFF;">; </span><span style="color:#546E7A;">-- Switch to the &#39;test&#39; Namespace and &#39;test&#39; Database</span></span>
<span class="line"></span></code></pre></div>`,9),o=[l];function p(c,r,F,i,d,u){return e(),a("div",null,o)}const h=s(n,[["render",p]]);export{E as __pageData,h as default};
