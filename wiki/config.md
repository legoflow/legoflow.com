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

是否对 JS 进行 ES.Next 语法的编译，e.g.

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

Webpack modules，[参考文档](https://webpack.js.org/concepts/module-resolution/#src/components/Sidebar/Sidebar.jsx)，e.g.

```yaml
includeModules:
    - ./node_modules
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

## 开发工作流参数

以下参数配置在 workflow.dev 内，e.g.

```yaml
workflow.dev:
    env: dev-test
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

对资源生成 时间戳 ( `timestamp` ) / 版本号 ( `version` ) / 无 ( `''` )，e.g.

```yaml
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


## Schema

```js
{
    name: String,
    version: String,
    type: String,
    REM: Boolean,
    'ES.Next': Boolean,
    alias: Object,
    global: Object,
    externals: Object,
    env: Object,
    includeModules: Array,
    'workflow.dev': {
        env: String,
        'watch.reload': Array,
        'user.args': Object,
        proxy: Object,
        shell: String,
        onlyRunShell: Boolean,
    },
    'workflow.build': {
        publicPath: String,
        'html.resourcesDomain': String,
        'css.resourcesDomain': String,
        cache: String,
        'user.args': String,
        env: String,
        shell: String,
        onlyRunShell: Boolean,
        'output.webpackStats': Boolean,
    },
}
```

[参考](https://github.com/legoflow/engine/blob/master/params_config_schema.js)
