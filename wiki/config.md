---
sidebar: auto
---

# 配置

## 说明

从 v2.0 版本起来，主要是通过项目路径下的 `legoflow.json` / `legolfow.yml` / `legoflow.js` 作为配置文件，默认使用 `legoflow.yml`。

## 公共参数

### name

项目名称，e.g.

```yaml
name: test
```

### version

创建项目使用的 LegoFlow 客户端或 CLI 版本号，e.g.

```yaml
version: app@2.0.0
```

### type

创建的项目类型，e.g.

```yaml
type: vue
```

### REM

是否使用 REM 适配。启动该选项后，_img.scss 会以 REM 为单位，e.g.

```yaml
REM: true
```

### ES.Next

是否对 JS 进行 ES.Next 语法的编译，默认值为 true, e.g.

```yaml
ES.Next: true
```

### alias

Webpack 别名配置，[参考文档](https://webpack.js.org/loaders/css-loader/#alias)，e.g.

```yaml
alias:
    axios: ./node_modules/axios
    jquery: ./src/assets/jquery.min.js
```

### global

Webpack 全局对象，[参考文档](https://webpack.js.org/guides/shimming/#shimming-globals)，e.g.

```yaml
global:
    $: jquery
    jquery: jquery
    jQuery: jquery
```

### externals

Webpack externals，[参考文档](https://webpack.js.org/configuration/externals/#externals)，e.g.

```yaml
externals:
    vue: Vue
```

### includeModules

Webpack modules，默认已加入项目路径下的 `node_modules`，[参考文档](https://webpack.js.org/concepts/module-resolution/#src/components/Sidebar/Sidebar.jsx)，e.g.

```yaml
includeModules:
  - ./test_node_modules
```

### ESLint

是否启动 ESLint，启动后若项目下没有 [ESLint 配置文件](http://eslint.cn/docs/user-guide/configuring#configuration-file-formats) 的话，JS 部分默认会以 [Standard](https://standardjs.com/rules-zhcn.html) 作为规范，vue 文件部分会以  [plugin:vue/essential](https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention)。e.g.

```yaml
ESLint: true
```

默认配置：

```js
module.exports = {
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "standard",
    "plugin:vue/essential"
  ],
  "plugins": [
    "vue"
  ]
}
```

### env

配置各种环境不一样的参数，e.g.

```yaml
env:
    dev-test:
        alias:
            axios: ./src/assets/axios.min.js
    preview:
        workflow.build:
            html.resourcesDomain: https://preview.com
    test:
        workflow.build:
            html.resourcesDomain: https://test.com
    production:
        workflow.build:
            html.resourcesDomain: https://production.com
```

### entry

一般情况下，webapck entry 是通过 [内置策略](https://legoflow.com/wiki/#%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6) 自动获取的，但你也可以通过该属性进行指定。e.g.

```yaml
entry:
  - ./src/main.ts
  - ./src/test.js

# 或者

entry:
  main: ./src/main.ts
  test: ./src/test.js
```

### mode

设置 Engine 模式。e.g.

```yaml
mode: webpack
```

### webpack

当设置 Engine 模式 为 `webpack` 的时候，该属性生效，主要用来设置一些 Webpack 插件的配置。e.g.

```yaml
webpack:
  # 构建工作流，处理图片资源时，会进行图片压缩处理质量，默认为 90
  imageQuality: 70
  # 构建工作流，同时生成 Source Map 文件，默认为 false
  build.sourceMap: true
  # 禁止 异步 vue 文件内的 Style 单独打包出样式文件，默认为 true
  VueChunkStyle: false
  # 默认 Webpack loader 对文件的处理都 exclude 排除 node_modules 路径下的模块
  # 而通过该属性可以指定一些模块加入 loader 的处理，例如：ESNext 语法编译等等
  include:
    esnext:
      - ./node_modules/sdk
    vue:
      - ./node_modules/alert
  # dll 设置, 可通过命令行工具 cli，执行 `lf build:dll` 生成 dll 文件
  dll:
    vendor1:
      - vue
      - vue-router
      - vuex
  # 设置 html-webpack-plugin 插件配置
  html:
    - template: ./src/html/index.html
      filename: index.html
      excludeChunks:
        - test
    - template: ./src/html/test.html
      filename: test.html
      excludeChunks:
        - main
  # 设置 babel env 转换模块规范，详细 https://babeljs.io/docs/en/babel-preset-env#modules
  # 默认值为 commonjs
  babelModules: false
  # 设置 uglifyoptions 配置项，详细 https://github.com/webpack-contrib/uglifyjs-webpack-plugin#uglifyoptions
  uglifyOptions:
    keep_fnames: true
```

## 开发工作流参数

以下参数配置在 workflow.dev 内，e.g.

```yaml
workflow.dev:
    env: dev-test
```

### hot.reload

代码热更新，e.g.

```yaml
hot.reload: true
```

### watch.reload

监听额外的文件夹，变动刷新浏览器，e.g.

```yaml
watch.reload:
    - ./src/test/**/*
```

### user.args

用户参数，根据用户名注入 [Webpack define](https://webpack.js.org/plugins/define-plugin/#usage) 插件变量， e.g.

```yaml
# * 全部用户在 JS 文件中变量 process.args.token4Common 编译为 abc
# 用户为 test1，在 JS 文件中变量 process.args.token4User 编译为 123
# 用户为 test2，在 JS 文件中变量 process.args.token4User 编译为 321
user.args:
    *:
        token4Common: abc
    test1:
        token4User: 123
    test2:
        token4User: 321
```

### env

开发工作流指向的环境参数，e.g.

```yaml
env: dev-test
```
### proxy

Webpack 代理，[参考文档](https://webpack.js.org/configuration/dev-server/#devserver-proxy)，e.g.

```yaml
proxy:
  /api:
    target: http://xxx.com
    changeOrigin: true
```

### shell

需要执行的 shell 脚本文件，e.g.

```yaml
shell: ./shell/dev.js
```

### onlyRunShell

否仅仅执行 Shell 脚本文件，e.g.

```yaml
onlyRunShell: true
```

## 构建工作流参数

以下参数配置在 workflow.build 内，e.g.

```yaml
workflow.build:
  env: preview
```

### publicPath

Webpack output.publicPath 配置，[参考文档](https://webpack.js.org/configuration/output/#output-publicpath)，e.g.

```yaml
publicPath: https://legoflow.com
```

### html.resourcesDomain

类型于 1.x 版本 `assets`，构建时候对 html 文件引入的资源加入主域，e.g.

```yaml
# 例如：<script src="./js/main.js"></script>
# 输出：<script src="https://legox.org/js/main.js"></script>
html.resourcesDomain: https://legox.org
```

### css.resourcesDomain


类型于 1.x 版本 `assets.css`，构建时候对 css 文件引入的资源加入主域，e.g.

```yaml
# 例如：background-image: ( ../img/icon.png )
# 输出：background-image: ( https://legox.org/img/icon.png )
css.resourcesDomain: https://legox.org
```

### cache

对资源生成 哈希值 (`hash`) / 时间戳 (`timestamp`) / 版本号 (`version`) / 无 ( `''` )，e.g.

```yaml
# 哈希值：<script src="./js/main.js?h=aslm28u12mk2"></script>
# 时间戳：<script src="./js/main.js?t=1523518772795"></script>
# 版本号：<script src="./js/main.js?v=0.0.1"></script>
# 无：<script src="./js/main.js"></script>
cache: version
```

### user.args

同理开发工作流 `user.args` 参数，e.g.

```yaml
user.args:
  *:
    token4Common: abc
  test1:
    token4User: 123
  test2:
    token4User: 321
```

### env

构建工作流指向的环境参数，e.g.

```yaml
env: preview
```

### shell

需要执行的 shell 脚本文件，e.g.

```yaml
shell: ./shell/build.js
```

### onlyRunShell

否仅仅执行 Shell 脚本文件，e.g.

```yaml
onlyRunShell: true
```

### output.webpackStats

是否构建出 webpack stats.json，有助于分析模块打包占比，e.g.

```yaml
output.webpackStats: true
```

分析网站：[webpack analyse](http://webpack.github.io/analyse/)、[webpack chart](http://alexkuz.github.io/webpack-chart/)

### noUglifyJs

构建出来的 JS 文件，是否不需要混淆，e.g.

```yaml
noUglifyJs: true
```

### html.inject (v2.4.0+)

webpack mode 项目，可通过该配置注入 JS / Css 静态资源，e.g.

```yml
html.inject:
  a: 'https://a.com/a.css'
  b: 'https://b.com/b.js',
```

```css
/* https://a.com/a.css */
html { background: red }
```

```js
// https://b.com/b.js
console.log('b')
```

#### 构建前

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <!-- @inject/link: a -->
  <!-- @inject/link: b -->

  <!-- @inject/inline: a -->
  <!-- @inject/inline: b -->
</body>
</html>
```

#### 构建后

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <link rel="stylesheet" href="https://a.com/a.css">
  <script src="https://b.com/b.js"></script>

  <style type="text/css">html { background: red }</style>
  <script>console.log('b')</script>
</body>
</html>
```

### copy (v2.4.0+)

webpack mode 项目，可通过该配置在构建后复制文件或文件夹，e.g.

```yml
copy:
  a.png: b.png
  assets: assets
```

构建后，`./src/a.png` 复制到 `./dist/b.png`，`./src/assets` 复制到 `./dist/assets`

## Schema

```js
'use strict';

const schema = {
  name: String,
  version: String,
  type: String,
  REM: Boolean,
  'ES.Next': Boolean,
  ESLint: Boolean,
  alias: Object,
  global: Object,
  externals: Object,
  env: Object,
  includeModules: Array,
  mode: String,
  friendlyErrors: Boolean,
  webpack: {
    imageQuality: Number,
    html: Object,
    dll: Array,
    include: {
      esnext: Array,
      vue: Array
    },
    babelModules: String,
    uglifyOptions: Object
  },
  'workflow.dev': {
    env: String,
    'hot.reload': Boolean,
    'watch.reload': Array,
    'user.args': Object,
    proxy: Object,
    shell: String,
    onlyRunShell: Boolean,
    https: Boolean
  },
  'workflow.build': {
    publicPath: String,
    'html.resourcesDomain': String,
    'css.resourcesDomain': String,
    'bundle.limitResourcesSize': Number,
    cache: String,
    'user.args': String,
    env: String,
    shell: String,
    onlyRunShell: Boolean,
    'output.webpackStats': Boolean,
    'html.inject': Object,
    copy: Object
  }
}
```

[参考](https://github.com/legoflow/engine/blob/master/params_config_schema.js)
