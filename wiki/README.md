---
sidebar: auto
---

# 指南

## 介绍

LegoFlow 2 是一款基于 **Webpack 4.x**、**Gulp 4.x**、**Babel 7** 作为核心的 Web 前端工作流客户端应用。

以 [Electron](https://electronjs.org/) 为基础构建框架，兼容主流的 macOS 以及 Windows 64 系统。

### 优点

把工作流从命令行的形式，封装成客户端应用，会带来以下方面的优点：

1. **无需再配置复杂的系统环境，环境变量等**
2. **无需再安装复杂的 Node.js 环境**
3. **无需在每个项目下安装体积大、版本混乱的 node_moduels**

通过依赖客户端内置固定版本的 Node.js 环境 以及 node_modules 模块，因而隔离外部环境，不用再安装配置各种各样的系统环境以及依赖。

只需简单的下载、解压，即可开始愉快地编程。

### 工作流组成

工作流部分主要由 Webpack + Gulp 的形式构成。

Webpack 仅负责对 JavaScript 部分资源进行处理，其中主要包括 ES.Next 语法编译，模块处理等等。

而 Gulp 则负责剩余其他部门资源的处理，例如 HTML、Sass、EJS、图片处理 等等。

同时使用两个构建工具是为了让各自的优点得到最大的发挥。

Webpack 专门处理 JavaScript 模块化构建，而 Gulp 补充 Webpack 一些功能较为薄弱的环节，例如 雪碧图合并。

对于前端工作流更加详细的探索，可以前往 [这里](https://zhuanlan.zhihu.com/p/27355765) 了解。

## 如何使用

我们提供了 macOS、Windows 64 两个主流平台的客户端应用，若需要其他平台的客户端可到 [Github](https://github.com/legoflow/legoflow) 拉取代码构建打包。

### 下载

* 百度云 [下载](https://pan.baidu.com/s/1PfUT9GwOxovp1E3Kj5WP8g#list/path=%2F)
* 腾讯微云 [下载](https://share.weiyun.com/5kP4ElS)

若出现下载失败的情况，请联系我们。

### 安装

Windows 64 系统版本的客户端，仅需要解压下载的压缩包，双击运行 `legoflow 2.exe`。

macOS 系统的客户端，下载完成后打开 dmg 文件。

若出现 “不明开发者...” 的提示无法打开的话，请打开 `系统设置>安全性与隐私>通用` 允许打开应用。

成功打开 dmg 后，拖动 app 到 `应用程序` 文件夹后，双击打开即可运行。

## 界面

因系统的差异性，macOS 与 Windows 64 两个系统版本的客户端应用界面上会有所差别，但功能上相差无几。

这里主要以 macOS 系统的客户端应用界面作为例子，进行说明。

### 项目列表界面

默认打开界面为 项目列表界面，项目列表为空时。

<div align="center">
  <img src="~image/1.png" width="300px">
</div>

项目列表存在项目，若同时存在多个项目，可通过拖拉改变项目列表的顺序。

<div align="center">
  <img src="~image/4.png" width="300px">
</div>

`双击具体项目` 可让 **资源管理器** 打开项目路径。

macOS 系统更加可以通过 `CMD + 点击具体项目` 让 **常用编辑器** 打开项目。

点击 `开发` 按钮，可让当前高亮项目进入 **开发工作流** 队列，最多可同时启动 5 个项目。

开发工作流启动成功后，会自动弹起工作流信息面板。该工作流信息面板，主要显示开发或构建工作流最新一条的日志信息，方便开发者无需切换到日志面板，即可了解到项目工作流的状态。

同理，点击 `构建` 按钮，可让当前高亮项目进入 **构建工作流** 队列。但与开发工作流不一样的是，同时构建多个项目时，并没有限定数量。

### 新建项目界面

点击菜单上的 `新建` 或 按下键盘的 `左箭头` 键，即可切换到新建项目界面。

<div align="center">
  <img src="~image/2.png" width="300px">
</div>

新建项目时，需要填入 `项目名称`，该名称会作为新建文件夹的名称。

选择 `项目类型`，根据不同类型会初始化不同的脚手架项目结构。

选择 `项目路径`，作为新建项目的物理存放路径。

可修改 `项目版本`，默认值为 0.0.1。

若选上 `ES.Next`，即可启动对 JavaScript 模块的 ES.Next 语法编译。

若选上 `路径作为源文件夹`，会以当前选择的路径作为文件夹创建项目，不会新建文件夹作为项目。

### 日志界面

点击菜单上的 `日志` 或 按下键盘的 `右箭头` 键，可切换到日志界面。

该界面主要用于记录展示项目开发以及构建工作流的相关日志信息，包括 log、error、success 等。

<div align="center">
  <img src="~image/5.png" width="300px">
</div>

### 全局设置界面

macOS 系统点击菜单 `LegoFlow 2>首选项` 或 快捷键 `CMD+,` 进入全局设置界面。

Windows 64 系统点击菜单 `应用>全局设置` 进入全局设置界面。

<div align="center">
  <img src="~image/6.png" width="300px">
</div>

在该界面，可以对客户端应用全局参数进行配置。可设置的参数有：

* 用户名：用于新建项目时，作为 `author` 以及构建文件 banner 备注
* 端口号：开发工作流启动的默认端口号，若被占用则递增
* 编辑器：设置常用编辑器，可在项目列表界面使其直接打开项目
* 工作流自动打开 Chrome：开发或构建工作流成功后是否自动打开 Chrome 浏览器
* 实验室：选中后会开启一些实验性的功能，并会接受 Preview 版本的提示更新
* Project：自定义项目类型，[了解详细](./#自定义项目类型)
* NodeBin：Shell 模块的扩展功能，[了解详细](./#nodebin)

## 项目类型

默认提供四种项目类型脚手架，包括：

### Vue.js

由 [Vue.js](https://cn.vuejs.org/index.html) 框架全家桶，[vue-router](https://router.vuejs.org/zh/) + [vuex](https://vuex.vuejs.org/zh/) + [axios](https://github.com/axios/axios) 组合搭建。

以 **[Webpack Mode](https://legoflow.com/wiki/#webpack-mode)** 单一构建模块工具，另外其依赖模块方式是通过 NPM 包管理器安装，因而新建项目后，请先安装依赖后运行。

若 PC 环境缺少 NPM，可通过 **客户端内置 NPM 模块** 进行安装。

### Vue.ts

由 Vue.js 项目类型进化而来，唯一区别在于脚本编程语言使用 [TypeScript](https://www.tslang.cn/)。

### PC

PC 端常用脚手架，以 jQuery 作为核心依赖库。

### Mobile

移动端常用脚手架，以 Zepto 作为核心依赖库，同时加入成熟的 REM 适配方案。

## HTML 模块

### 内联样式脚本

在构建阶段，通过 html 内联样式或脚本文件，减少请求数，减少 TTFB，优化加载性能

在 html 外链上加上 inline 属性即可。如:

```html
<link href="css/index.css" rel="stylesheet" inline>

<script src="js/index.js" charset="utf-8" inline></script>
```

### 合并资源

在构建阶段，通过 HTML 固定的注释语法，把资源打包合并，减少请求数，减少 TTFB，优化加载性能。如：

```html
<!-- @bundle ./js/base.min.js -->
<script src="./assets/axios.min.js"></script>
<script src="./assets/vue.min.js"></script>
<script src="./assets/vuex.min.js"></script>
<script src="./assets/vue-router.min.js"></script>
<!-- @endbundle -->
```

## JavaScript 模块

### 入口文件

JavaScript 模块由 Webpack 管理，工作流会自动获取 `项目目录/src/js/` 路径下 第一层 JS 文件，但不包括子文件夹下 JS 文件 或 带下划线前缀的 JS 文件，作为 [Webpack entry](https://webpack.js.org/concepts/#entry) 配置，进行依赖链的热刷新。

所以值得注意的是：

* 项目目录 `/src/js/` 第一层（ 不包括子文件夹 ）路径下若新增 JS 文件，需要 **重启工作流**，使新增文件成为依赖入口，构建新的依赖链，JS 模块功能才生效
* 项目目录 `/src/js/*.js` 为依赖入口文件 ( 带下划线前缀的 JS 文件除外 )，**不应相互依赖**

### 环境变量

自动注入 环境变量，开发者可根据 环境变量 进行逻辑处理

```js
// 开发环境 判断
if (process.env === 'dev') {
  console.info('这个是开发环境')
}
// 生产环境 判断
else if (process.env === 'build') {
  console.info('这个是生产环境')
}

// 如果你使用了 env 具体指向某个环境
// 例如 workflow.dev { env: 'dev-test' }
// 可通过 process.environment 访问到具体注入的环境变量
console.log(process.environment)
```

### 引入 tpl 文件

支持 [art-template](https://github.com/aui/artTemplate) 语法 tpl 文件，转成压缩的 html 字符串，常用于接口获取数据后动态插入 DOM 结构。如:

```html
// t.tpl
<div id="test">{{ name }}</div>
```

```js
// t.js
const thtml = require('./t.tpl')({ name: 'test' })

console.log(thtml) // <div id="test">test</div>
```

使用 helper

```html
// t.tpl
<div id="test">{{ name | test }}</div>
```

```js
// t.js
const helper = require('@tpl/helper')

helper.test = val => {
  return `test helper: ${val}`
}

const thtml = require('./t.tpl')({ name: 'test' })

console.log(thtml) // <div id="test">test helper: t</div>
```

## 图片模块

### _img.scss

放置在 项目目录 `/src/img/` 下的图片，开发/构建工作流都会获取其信息，包括宽度/高度以及 `background-image` 路径生成 sass 样式，保存在 项目目录 `/src/sass/_img.scss` 文件。 如:

```html
图片
/src/img/avatar.png
/src/img/slice/loading.png
```

```css
/src/sass/_img.scss

%avatar.png {
  width: 80px;
  height: 80px;
  background-image: url('../img/avatar.png');
  background-size: contain;
  background-repeat: no-repeat;
}

%slice-loading.png {
  width: 80px;
  height: 32px;
  background-image: url('../img/slice/loading.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

默认脚手架 基础 sass 文件已引入 _img.scss，直接使用即可:

```css
#test-1 {
  @extend %avatar.png
}

#test-2 {
  @extend %slice-loading.png
}
```

**注意**，若配置了 `REM: true`

生成的图片信息长度单位为 rem。如:

```html
图片
/src/img/avatar.png
/src/img/slice/loading.png
```

```css
/src/sass/_img.scss

%avatar.png {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url('../img/avatar.png');
  background-size: contain;
  background-repeat: no-repeat;
}

%slice-loading.png {
  width: 0.8rem;
  height: 0.32rem;
  background-image: url('../img/slice/loading.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

**注意**，雪碧图文件夹的图片信息，其中 ```background-size: contain;``` 样式，只有在 **开发工作流** 上才会产生。

本来 片段名上带有路径还有后缀是为了保持资源引用的唯一性，但对于开发者需要引用该片段名的时候，就显得很臃肿，因此对 片段名 进行优化，如：

```html
图片
/src/img/base64/avatar.png
```

↓ 编译成

```sass
/src/sass/_img.scss

%avatar {
  width: 80px;
  height: 80px;
  background-image: url('../img/base64/avatar.png');
  background-size: contain;
  background-repeat: no-repeat;
}
%base64-avatar.png {
  width: 80px;
  height: 80px;
  background-image: url('../img/base64/avatar.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

也就是在原有的基础上，增加了一个只有文件名的 片段，开发者引用起来相对简单很多，但值得注意的是，如果重名的资源片段，会覆盖前一个，这时若想引入最为正确的片段，可以使用 **全路径 + 文件名的片段**

### base64

项目目录 `/src/img/base64` 下放置的图片，<100k，在构建工作流中，会自动转换成 base64 格式内置替换到对应样式中。

但若在 HTML 上引入这路径下的图片文件，并不会进行转换。

### 雪碧图

项目目录 `/src/img/slice` 下放置的图片，在构建工作流中，合成雪碧图，并在样式文件中增加对应的 `background-position` 等信息

**若样式文件中没有引入该路径下的图片，不会进行合并雪碧图**

合成多张雪碧图，会以 `/src/img/slice` 路径下的目录为单位，生成多张雪碧图。如:

```
图片
/src/img/slice/a.png
/src/img/slice/b.png
/src/img/slice/page-1/c.png
/src/img/slice/page-1/d.png
/src/img/slice/page-2/e.png
/src/img/slice/page-2/f.png

合成后

/dist/img/sprite.png
/dist/img/page-1.png
/dist/img/page-2.png
```

支持合成 2 倍 / 3 倍雪碧图。

**注意**，若配置了 `REM: true`, 生成的样式长度单位为 rem，其中包括的样式属性为

* background-position
* background-size

## EJS 模块

通过 EJS 动态语言，实现编译 HTML 文件迭代结构等，例如，文件项目结构 `/src/ejs/x.ejs` 自动编译到 `/src/x.html`

默认项目类型并不自动创建 **/src/ejs** 文件夹。

新增注入环境变量，开发者可根据 环境变量 进行逻辑处理。

例子

```html
<!-- @if env='dev' -->
<script src="xxx.js" charset="utf-8"></script>
<h1>开发环境</h1>
<!-- @endif -->

<!-- @if env='build' -->
<h1>生产环境</h1>
<!-- @endif -->
```

→ 开发环境 编译出的 HTML

```html
<script src="xxx.js" charset="utf-8"></script>
<h1>开发环境</h1>
```

→ 生产环境 编译出的 HTML

```html
<h1>生产环境</h1>
```

注意：改动该文件夹任何的 EJS 文件，都会全部重新生成。主要的原因是 改动的文件存在可能性是另外一个文件的片段。

## 静态资源文件夹

一些无需参与工作流的静态资源文件（例如: mp3 / mp4 / 第三方静态组件等）可放置在此文件夹下。

构建阶段，工作流会把 `src/assets` 静态资源文件夹搬迁到 构建后目录`dist`里面。

**注意：** Webpack mode 下即便存在静态资源文件夹也并不会进行迁移。

因为该模式下是以 Webpack 进行依赖链进行打包出资源，并不会调用 Gulp 做特殊处理，若一些非依赖链的资源，希望在构建后进行迁移，可以尝试使用 Shell 模块进行复制。例如：

```js
const path = require('path')
const fs = require('fs-extra')

module.exports = function ({config, pull}) {
  return new Promise((resolve, reject) => {
    fs.copySync(path.resolve(__dirname, '../src/assets'), path.resolve(__dirname, '../dist/assets'))
    resolve()
  })
}
```

## 使用 node_modules

一些模块安装在项目目录 node_modules，我们可以通过 2 种方式去引入这些模块。

### 别名 alias

通过别名 `@local`，这个别名默认已被注入，可直接使用。

例如，项目 node_modules 下安装了 vue，可通过以下方式进行引入使用：

```js
import Vue from '@local/vue';
```

### 配置 includeModules

通过配置 [includeModules](https://legoflow.com/wiki/config.html#includemodules) 可让客户端除了在内置的 node_modules 中寻找模块之外，还能在指定位置寻找。

例如，项目 node_modules 下安装了 vue，配置 legoflow.yml

```yaml
includeModules:
  - ./node_modules
```

可直接引入使用

```js
import Vue from 'vue'
```

**注意** 这个方法同时存在的弊端，客户端会先对内置的 node_modules 进行查找，如果找不到的话，才再去寻找配置的路径。一旦找到了便使用的是客户端内置的 node_modules 模块。

例如客户端内置了 lodash 模块，进行了上述配置后，本地项目也存在 lodash，然后 JS 中直接 import lodash，指向的是客户端内置的 lodash，而不是项目本地的 lodash，这时应该使用别名的方式精确进行指向。

那为什么需要先寻找客户端内置的 node_modules，这个跟客户端寻址策略有很大关系。

所有项目的工作流模块都依赖于客户端内置 node_modules，并以其为基础，因而不需要每个项目下都存在 node_modules。

例如本地项目安装了 babel-loader 模块，如果客户端选进行对本地进行寻找的话，可能会造成 babel-loader 版本不适配，从而导致整个工作流出错无法启动，这样的问题是灾难性的。

所以先对内置 node_modules 模块的寻址特别重要。

如果担心本地模块与内置模块冲突的话，可以随时查看当前客户端内置的模块。

macOS: `APP/显示包内容/Contents/Resources/app/node_modules`

Windows: `APP/resources/app/node_modules`

## 调试小工具

开发工作流启动的 web 服务，URL 带上 dev 参数，则自动注入调试工具。功能主要包括:

* 关闭：关闭小工具，刷新后重载
* 刷新：刷新页面
* LOG：查看 log 打印日志

<div align="center">
  <img src="~image/7.png" width="700px">
</div>

开发工作流启动的 web 服务，URL 带上 stats 参数，则自动注入 stats.js 工具，[了解功能](https://github.com/mrdoob/stats.js)。

## 自定义项目类型

除了可以新建项目类型脚手架之外，还支持新建自定义项目类型。

### 自定义本地项目类型 (cli@v2.4-)

首先，在 PC 本地建立一个文件夹，获取其绝对路径，在客户端全局配置中，设置到 `Project`，并保存。

在新建的文件夹里，可以放置自定义项目，[这里](https://github.com/legoflow/project/tree/master/__test__/P1) 有一个示范项目，下载完成后，放置到新建的文件夹中即可。

放置完毕后，在 `新建` 界面中项目类型便会多了 `P1` 这个类型。

大致原理是，客户端会通过全局配置中 `Project` 路径，寻找其中的文件夹，作为自定义的项目类型，并进行注入。

一个标准的自定义项目类型可参考上述项目模板。

### 自定义 NPM 仓库模板类型 (cli@v2.4-)

```bash
# >= legoflow-cli v2.0.0-beta.27
lf set loadNPMLegoFlowTemplate true
```

设置参数开启拉取网络 NPM 仓库上带前缀 **`legoflow-template-`** 的 NPM 模块 作为项目类型之一，因此这个 NPM 模块可以由你自己来决定以及发布。

新建项目时，即可看到相应的 NPM 模板。例如：[legoflow-template-test](https://github.com/legoflow/legoflow-template-test)

文件夹 **template** 放置脚手架模板文件，一些隐藏文件请使用 **~~** 作为标识。

而模板文件夹内的 `legoflow.yml`、`package.json`、`README.md` 文件，会对文件内容进行变量的注入，例如：

```json
{
  "name": "[name]",
  "version": "[version]",
  "author": "[author]"
}
```

可注入的参数有：

* `[name]`: 新建项目时填入的项目名称
* `[version]`: 新建项目时填入的项目版本号
* `[author]`: 新建项目时的用户
* `[c_version]`: 新建项目时 lf 的版本号
* `[type]`: 项目类型

### 自定义 Git 源仓库模板类型 (cli@v2.5+)

例如：[legoflow-template-test](https://github.com/legoflow/legoflow-template-test)，文件夹 **template** 放置脚手架模板文件

```bash
lf init --git https://github.com/legoflow/legoflow-template-test.git
```

而模板文件夹内的 `legoflow.yml`、`package.json`、`README.md` 文件，会对文件内容进行变量的注入，例如：

```json
{
  "name": "[name]",
  "version": "[version]",
  "author": "[author]"
}
```

可注入的参数有：

* `[name]`: 新建项目时填入的项目名称
* `[version]`: 新建项目时填入的项目版本号
* `[author]`: 新建项目时的用户
* `[c_version]`: 新建项目时 lf 的版本号
* `[type]`: 项目类型

## Shell 脚本机制

### 使用方法

通过配置 shell 脚本，可扩展 构建工作流 完成后还需要做的事情。例如：

* 我想 构建完成后打包出 zip 包
* 我想 构建完成后上传到公司的 发布平台
* 我想 构建完成后 加入一些其他的 工作流 来处理文件
* 我先 构建完成后 自动迁移到 xxx 目录
* ...

可想而知，LegoFlow 建构工作流完成后可自动执行配置的脚本，做到很多自己自定义的事情。如：

```js
// zip.js
const path = require('path')
const del = require('del')
const shell = require('shelljs')

module.exports = ({ config: { projectPath }, messager, nodeBinExec }) => {
  messager.log('删除原有 zip')

  del.sync([`${ projectPath }/dist.zip` ], {force: true})

  messager.log('打包中')

  shell.cd(projectPath)

  if (shell.exec('zip -r dist.zip dist').code === 0) {
    messager.log( '打包完成' )
    messager.success( )
  } else {
    messager.stop( '打包错误' )
  }
}
```

配置文件中注册脚本

```yaml
# legoflow.yml
workflow.build:
  shell: ./zip.js
```

值得注意的是，客户端会等待 Shell 回调结果信息( 成功或者失败 )，从而释放 线程资源。

所以脚本执行完成后，请通过 `messager.success( );` 回调 成功结果，通过 `messager.stop( '错误信息' );` 回调 错误结果。

### NodeBin

当我们需要使用 Shell 脚本功能去执行外部 node 脚本的时候，因为应用内部的 node 环境与外部的相互独立性，这时就需要定义外部的 node bin 了。

在全局设置中，可设置外部 node bin 的路径，设置步骤如下：

1. 在电脑终端上执行 **`which node`**（ 可得到当前环境正在使用的 node bin 的路径 ）
2. 复制该路径
3. 粘贴到 **全局设置>node bin** 输入框内
4. 保存

在 Shell 功能扩展的脚本中，即可使用 nodeBinExec，例如：

```js
'use strict';

const path = require('path');

module.exports = ({ config: { projectPath }, messager, nodeBinExec }) => {
  const root = path.resolve( projectPath, '../' )

  nodeBinExec(root, './script/build.js', (code, msg, err) => {
    code === 0 ? messager.success() : messager.stop(err)
  })
}
```

上述例子，Shell 脚本描述的是通过 nodeBinExec 函数，使用外部的 node bin 执行指定路径下的外部脚本文件。

通过该策略，能够通过 Shell 脚本功能去执行一些外部 node 环境的脚本，从而完成构建后的自动化操作。

### 生命周期

> APP 版本 2.0.0-beta.6 以上，CLI 版本 2.0.0-beta.16 以上

现在定义 Shell 模块后，还支持工作流的生命周期 init -> before -> after 不同阶段的需求。

* init 阶段，工作流参数刚刚进入 engine，还未进行参数消化
* before 阶段，engine 已消化了参数，准备启动工作流
* after 阶段，engine 已完成工作流，准备回调

提供这三个生命周期的钩子，可丰富每个项目不一样的 Shell 模块操作。

举例，在 A 项目中存在较多的 env 环境配置，而每次构建的注入的 env 不一样，虽然可通过配置设置构建的 env，但每次修改配置不是一件聪明的事情。

这时，我们就可以通过 init 的生命周期，进行 “提问” 希望让开发者在命令行中自行选择需要构建的环境。

```js
// ./shell/build.js
'use strict';

const path = require('path')
const prompt = require( 'inquirer' ).prompt

exports.init = ({ config, message, pull }) => {
  return new Promise(async (resolve, reject ) => {
    if (config.from === 'cli') {
      const questions = [{
          type: 'list',
          name: 'whichEnv',
          message: '请选择构建环境',
          choices: Object.keys( config.env ),
          default: 1
        }]

      const { whichEnv } = await prompt(questions)

      config[ 'workflow.build' ].env = whichEnv
    }

    resolve()
  })
}
```

```yaml
# legoflow.yml
workflow.build:
  shell: ./shell/build.js
```

## Webpack Mode

> APP 版本 2.0.0-beta.6 以上，CLI 版本 2.0.0-beta.16 以上

如果你已经大致阅读过上述内容，应该比较清晰了解到 LegoFlow 工作流主要是有 Gulp & Webpack 组合的，因为他们能相互补充各自的弱点。

但有的时候，我们的项目并不需要 Gulp 所带来的优点，例如：雪碧图等。这样的情况经常会发生在移动端单页面应用的项目，这时我们就可以 “抛弃” Gulp。

所以，这时我们有了 Webpack Mode 的想法。

顾名思义，它其实是 [LegoFlow Engine](https://github.com/legoflow/engine) 的一种模式，它会仅仅对项目使用 Webpack 进行开发构建。

默认脚手架 **Vue.js** & **Vue.ts** 就是最好的示范例子。

## Worker 脚本文件 （v2.7.0+）

使用 [worker-loader](https://github.com/webpack-contrib/worker-loader) 对 Worker 脚本文件进行打包

```js
// 需要带 .worker.js 作为后缀识别
import Worker from './test.worker.js'

const worker = new Worker()
worker.postMessage({})
```

## 持续构建

通过 [LegoFlow-CLI](https://github.com/legoflow/legoflow-cli) 可以对项目在 Gitlab 上进行 CI 持续构建。

另外我们提供了相关的 [Docker Image](https://github.com/legoflow/legoflow-ci-image)

## 联系反馈

遇到问题或者有更棒的想法，欢迎大家提出 issues 或 PRs.

交流 Q 群 457756220
