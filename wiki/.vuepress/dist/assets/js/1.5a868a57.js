(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{58:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),e("p",[t._v("LegoFlow 除了提供 "),e("a",{attrs:{href:"https://github.com/legoflow/legoflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端")]),t._v(" 版本之外，还提供了命令行工具 "),e("a",{attrs:{href:"https://github.com/legoflow/legoflow-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("LegoFlow-CLI")]),t._v("。")]),e("p",[t._v("通过使用 CLI 工具，我们可以更有效率进行开发构建。")]),e("h2",{attrs:{id:"依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖")]),e("p",[t._v("在安装 CLI 工具之前，请先配置 PC 的依赖环境:")]),e("ul",[e("li",[e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js")]),t._v(" Version >= 8.x")])]),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i legoflow-cli -g\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 推荐使用 yarn 安装")]),t._v("\nyarn global add legoflow-cli\n")])]),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),e("h3",{attrs:{id:"查看命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看命令")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("legoflow -h\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 使用简写")]),t._v("\nlf -h\n")])]),e("h3",{attrs:{id:"新建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建项目")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("lf init\n")])]),e("h3",{attrs:{id:"开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 进入 legoflow 项目")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\nlf dev\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 可选择环境")]),t._v("\nlf dev --env\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 可指定环境")]),t._v("\nlf dev "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n")])]),e("h3",{attrs:{id:"构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 进入 legoflow 项目")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\nlf build\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 选择环境")]),t._v("\nlf build --env\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 可指定环境")]),t._v("\nlf build preview\n")])]),e("h3",{attrs:{id:"ci-构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ci-构建","aria-hidden":"true"}},[t._v("#")]),t._v(" CI 构建")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 进入 legoflow 项目")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\nlf-ci\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 也可构建指定环境 lf-ci [env] 例如：构建测试环境")]),t._v("\nlf-ci "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n")])]),e("h3",{attrs:{id:"构建-dll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建-dll","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建 dll")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("lf build:dll\n")])]),e("h3",{attrs:{id:"全局设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局设置")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 设置参数")]),t._v("\nlf "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 查看参数")]),t._v("\nlf get "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 还原参数")]),t._v("\nlf clean\n")])]),e("p",[t._v("具体参数参考 "),e("a",{attrs:{href:"https://github.com/legoflow/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")])]),e("h3",{attrs:{id:"v1-x-项目迁移到-v2-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v1-x-项目迁移到-v2-x","aria-hidden":"true"}},[t._v("#")]),t._v(" v1.x 项目迁移到 v2.x")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\nlf migrate:v2\n")])]),e("p",[e("strong",[t._v("注意")]),t._v(" 该功能只能把 v1.x 与 v2.x 都存在的功能进行迁移，若 2.x 摒弃的功能无法被迁移。例如：")]),e("ul",[e("li",[t._v("v1.x 项目配置中的 "),e("code",[t._v("assets")]),t._v(" 被迁移为 "),e("code",[t._v("workflow.build{ 'html.resourcesDomain' }")])]),e("li",[t._v("v1.x 项目配置中的 "),e("code",[t._v("dist")]),t._v(" / "),e("code",[t._v("vue@2.1")]),t._v(" / ... 则无法被迁移")])]),e("p",[t._v("具体功能对比参考 "),e("a",{attrs:{href:"https://github.com/legoflow/legoflow/issues/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")])]),e("h3",{attrs:{id:"关闭指定端口线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭指定端口线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 关闭指定端口线程")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("lf kill:port 6701\n")])]),e("h3",{attrs:{id:"调用内置-eslint-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用内置-eslint-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用内置 ESLint 模块")]),e("p",[t._v("通过该命令可调用内置的 "),e("a",{attrs:{href:"http://eslint.cn/docs/user-guide/command-line-interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint 模块")])]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("lf:eslint\n\nlf:eslint -v\nlf:eslint -h\nlf:eslint "),e("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])]),e("p",[e("strong",[t._v("注意")]),t._v(" 2.3 版本后该命令更改为 "),e("code",[t._v("lf-eslint")])]),e("h2",{attrs:{id:"ci-持续构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ci-持续构建","aria-hidden":"true"}},[t._v("#")]),t._v(" CI 持续构建")]),e("p",[t._v("我们提供了相关的 "),e("a",{attrs:{href:"https://github.com/legoflow/legoflow-ci-image",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Image")]),t._v("，方便开发者在 CI 容器内进行构建项目。")])])}],!1,null,null,null);a.default=r.exports}}]);