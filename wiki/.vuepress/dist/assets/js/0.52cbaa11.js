(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),s("p",[t._v("从 v2.0 版本起来，主要是通过项目路径下的 "),s("code",[t._v("legoflow.json")]),t._v(" / "),s("code",[t._v("legolfow.yml")]),t._v(" / "),s("code",[t._v("legoflow.js")]),t._v(" 作为配置文件，默认使用 "),s("code",[t._v("legoflow.yml")]),t._v("。")]),s("h2",{attrs:{id:"公共参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 公共参数")]),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[t._v("#")]),t._v(" name")]),s("p",[t._v("项目名称，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n")])]),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[t._v("#")]),t._v(" version")]),s("p",[t._v("创建项目使用的 LegoFlow 客户端或 CLI 版本号，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app@2.0.0\n")])]),s("h3",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[t._v("#")]),t._v(" type")]),s("p",[t._v("创建的项目类型，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vue\n")])]),s("h3",{attrs:{id:"rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem","aria-hidden":"true"}},[t._v("#")]),t._v(" REM")]),s("p",[t._v("是否使用 REM 适配。启动该选项后，_img.scss 会以 REM 为单位，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("REM")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h3",{attrs:{id:"es-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es-next","aria-hidden":"true"}},[t._v("#")]),t._v(" ES.Next")]),s("p",[t._v("是否对 JS 进行 ES.Next 语法的编译，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("ES.Next")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h3",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[t._v("#")]),t._v(" alias")]),s("p",[t._v("Webpack 别名配置，"),s("a",{attrs:{href:"https://webpack.js.org/loaders/css-loader/#alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("alias")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("axios")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./node_modules/axios\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("jquery")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/assets/jquery.min.js\n")])]),s("h3",{attrs:{id:"global"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global","aria-hidden":"true"}},[t._v("#")]),t._v(" global")]),s("p",[t._v("Webpack 全局对象，"),s("a",{attrs:{href:"https://webpack.js.org/guides/shimming/#shimming-globals",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("global")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("$")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jquery\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("jquery")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jquery\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("jQuery")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jquery\n")])]),s("h3",{attrs:{id:"externals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#externals","aria-hidden":"true"}},[t._v("#")]),t._v(" externals")]),s("p",[t._v("Webpack externals，"),s("a",{attrs:{href:"https://webpack.js.org/configuration/externals/#externals",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("externals")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue\n")])]),s("h3",{attrs:{id:"includemodules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#includemodules","aria-hidden":"true"}},[t._v("#")]),t._v(" includeModules")]),s("p",[t._v("Webpack modules，"),s("a",{attrs:{href:"https://webpack.js.org/concepts/module-resolution/#src/components/Sidebar/Sidebar.jsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("includeModules")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./node_modules\n")])]),s("h3",{attrs:{id:"eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[t._v("#")]),t._v(" ESLint")]),s("p",[t._v("是否启动 ESLint，启动后若项目下没有 "),s("a",{attrs:{href:"http://eslint.cn/docs/user-guide/configuring#configuration-file-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint 配置文件")]),t._v(" 的话，JS 部分默认会以 "),s("a",{attrs:{href:"https://standardjs.com/rules-zhcn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Standard")]),t._v(" 作为规范，vue 文件部分会以  "),s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin:vue/essential")]),t._v("。e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("ESLint")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("p",[t._v("默认配置：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"parserOptions"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"parser"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"babel-eslint"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"extends"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"standard"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"plugin:vue/essential"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[t._v("#")]),t._v(" env")]),s("p",[t._v("配置各种环境不一样的参数，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("dev-test")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("alias")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("axios")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/assets/axios.min.js\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("preview")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("workflow.build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("html.resourcesDomain")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//preview.com\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("workflow.build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("html.resourcesDomain")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.com\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("production")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("workflow.build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{attrs:{class:"token key atrule"}},[t._v("html.resourcesDomain")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//production.com\n")])]),s("h3",{attrs:{id:"entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[t._v("#")]),t._v(" entry")]),s("p",[t._v("一般情况下，webapck entry 是通过 "),s("a",{attrs:{href:"https://legoflow.com/wiki/#%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置策略")]),t._v(" 自动获取的，但你也可以通过该属性进行指定。e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("entry")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./src/main.ts\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./src/test.js\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("entry")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/main.ts\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("test")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/test.js\n")])]),s("h3",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[t._v("#")]),t._v(" mode")]),s("p",[t._v("设置 Engine 模式。e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("mode")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webpack\n")])]),s("h3",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack")]),s("p",[t._v("当设置 Engine 模式 为 "),s("code",[t._v("webpack")]),t._v(" 的时候，该属性生效，主要用来设置一些 Webpack 插件的配置。e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("webpack")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 构建工作流，处理图片资源时，会进行图片压缩处理质量，默认为 90")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("imageQuality")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("70")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 构建工作流，同时生成 Source Map 文件，默认为 false")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("build.sourceMap")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 禁止 异步 vue 文件内的 Style 单独打包出样式文件，默认为 true")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("VueChunkStyle")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 默认 Webpack loader 对文件的处理都 exclude 排除 node_modules 路径下的模块")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 而通过该属性可以指定一些模块加入 loader 的处理，例如：ESNext 语法编译等等")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("esnext")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./node_modules/sdk\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# dll 设置, 可通过命令行工具 cli，执行 `lf build:dll` 生成 dll 文件")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("dll")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("vendor1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vue\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vue"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("router\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuex\n  "),s("span",{attrs:{class:"token comment"}},[t._v("# 设置 html-webpack-plugin 插件配置")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/html/index.html\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("filename")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" index.html\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("excludeChunks")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./src/html/test.html\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("filename")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test.html\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("excludeChunks")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n")])]),s("h2",{attrs:{id:"开发工作流参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发工作流参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发工作流参数")]),s("p",[t._v("以下参数配置在 workflow.dev 内，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("workflow.dev")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n")])]),s("h3",{attrs:{id:"hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hot-reload","aria-hidden":"true"}},[t._v("#")]),t._v(" hot.reload")]),s("p",[t._v("代码热更新，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("hot.reload")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h3",{attrs:{id:"watch-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch-reload","aria-hidden":"true"}},[t._v("#")]),t._v(" watch.reload")]),s("p",[t._v("监听额外的文件夹，变动刷新浏览器，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("watch.reload")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./src/test/**/*\n")])]),s("h3",{attrs:{id:"user-args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-args","aria-hidden":"true"}},[t._v("#")]),t._v(" user.args")]),s("p",[t._v("用户参数，根据用户名注入 "),s("a",{attrs:{href:"https://webpack.js.org/plugins/define-plugin/#usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack define")]),t._v(" 插件变量， e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# * 全部用户在 JS 文件中变量 process.args.token4Common 编译为 abc")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 用户为 test1，在 JS 文件中变量 process.args.token4User 编译为 123")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 用户为 test2，在 JS 文件中变量 process.args.token4User 编译为 321")]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("user.args")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4Common")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" abc\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4User")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4User")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("321")]),t._v("\n")])]),s("h3",{attrs:{id:"env-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-2","aria-hidden":"true"}},[t._v("#")]),t._v(" env")]),s("p",[t._v("开发工作流指向的环境参数，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev"),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n")])]),s("h3",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy","aria-hidden":"true"}},[t._v("#")]),t._v(" proxy")]),s("p",[t._v("Webpack 代理，"),s("a",{attrs:{href:"https://webpack.js.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("proxy")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("/api")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("target")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xxx.com\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("changeOrigin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h3",{attrs:{id:"shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell","aria-hidden":"true"}},[t._v("#")]),t._v(" shell")]),s("p",[t._v("需要执行的 shell 脚本文件，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("shell")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./shell/dev.js\n")])]),s("h3",{attrs:{id:"onlyrunshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyrunshell","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyRunShell")]),s("p",[t._v("否仅仅执行 Shell 脚本文件，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("onlyRunShell")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h2",{attrs:{id:"构建工作流参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建工作流参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建工作流参数")]),s("p",[t._v("以下参数配置在 workflow.build 内，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("workflow.build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" preview\n")])]),s("h3",{attrs:{id:"publicpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publicpath","aria-hidden":"true"}},[t._v("#")]),t._v(" publicPath")]),s("p",[t._v("Webpack output.publicPath 配置，"),s("a",{attrs:{href:"https://webpack.js.org/configuration/output/#output-publicpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档")]),t._v("，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("publicPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//legoflow.com\n")])]),s("h3",{attrs:{id:"html-resourcesdomain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-resourcesdomain","aria-hidden":"true"}},[t._v("#")]),t._v(" html.resourcesDomain")]),s("p",[t._v("类型于 1.x 版本 "),s("code",[t._v("assets")]),t._v("，构建时候对 html 文件引入的资源加入主域，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v('# 例如：<script src="./js/main.js"><\/script>')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('# 输出：<script src="https://legox.org/js/main.js"><\/script>')]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("html.resourcesDomain")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//legox.org\n")])]),s("h3",{attrs:{id:"css-resourcesdomain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-resourcesdomain","aria-hidden":"true"}},[t._v("#")]),t._v(" css.resourcesDomain")]),s("p",[t._v("类型于 1.x 版本 "),s("code",[t._v("assets.css")]),t._v("，构建时候对 css 文件引入的资源加入主域，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# 例如：background-image: ( ../img/icon.png )")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 输出：background-image: ( https://legox.org/img/icon.png )")]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("css.resourcesDomain")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//legox.org\n")])]),s("h3",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache","aria-hidden":"true"}},[t._v("#")]),t._v(" cache")]),s("p",[t._v("对资源生成 时间戳 ( "),s("code",[t._v("timestamp")]),t._v(" ) / 版本号 ( "),s("code",[t._v("version")]),t._v(" ) / 无 ( "),s("code",[t._v("''")]),t._v(" )，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v('# 时间戳：<script src="./js/main.js?t=1523518772795"><\/script>')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('# 版本号：<script src="./js/main.js?v=0.0.1"><\/script>')]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('# 无：<script src="./js/main.js"><\/script>')]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" version\n")])]),s("h3",{attrs:{id:"user-args-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-args-2","aria-hidden":"true"}},[t._v("#")]),t._v(" user.args")]),s("p",[t._v("同理开发工作流 "),s("code",[t._v("user.args")]),t._v(" 参数，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("user.args")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4Common")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" abc\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4User")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("test2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("token4User")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("321")]),t._v("\n")])]),s("h3",{attrs:{id:"env-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-3","aria-hidden":"true"}},[t._v("#")]),t._v(" env")]),s("p",[t._v("构建工作流指向的环境参数，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" preview\n")])]),s("h3",{attrs:{id:"shell-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-2","aria-hidden":"true"}},[t._v("#")]),t._v(" shell")]),s("p",[t._v("需要执行的 shell 脚本文件，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("shell")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./shell/build.js\n")])]),s("h3",{attrs:{id:"onlyrunshell-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyrunshell-2","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyRunShell")]),s("p",[t._v("否仅仅执行 Shell 脚本文件，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("onlyRunShell")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h3",{attrs:{id:"output-webpackstats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-webpackstats","aria-hidden":"true"}},[t._v("#")]),t._v(" output.webpackStats")]),s("p",[t._v("是否构建出 webpack stats.json，有助于分析模块打包占比，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("output.webpackStats")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("p",[t._v("分析网站："),s("a",{attrs:{href:"http://webpack.github.io/analyse/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack analyse")]),t._v("、"),s("a",{attrs:{href:"http://alexkuz.github.io/webpack-chart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack chart")])]),s("h3",{attrs:{id:"nouglifyjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nouglifyjs","aria-hidden":"true"}},[t._v("#")]),t._v(" noUglifyJs")]),s("p",[t._v("构建出来的 JS 文件，是否需要混淆，e.g.")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("noUglifyJs")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),s("h2",{attrs:{id:"schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[t._v("#")]),t._v(" Schema")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token constant"}},[t._v("REM")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'ES.Next'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ESLint"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    global"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    externals"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    env"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    includeModules"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    webpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'workflow.dev'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        env"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'hot.reload'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'watch.reload'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'user.args'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        proxy"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        shell"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onlyRunShell"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'workflow.build'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        publicPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'html.resourcesDomain'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'css.resourcesDomain'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'bundle.limitResourcesSize'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        cache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'user.args'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        env"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        shell"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onlyRunShell"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v("'output.webpackStats'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        noUglifyJs"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Boolean\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[s("a",{attrs:{href:"https://github.com/legoflow/engine/blob/master/params_config_schema.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考")])])])}],!1,null,null,null);a.default=e.exports}}]);