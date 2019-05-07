---
sidebar: auto
---

# 配置

## 说明

LegoFlow 除了提供 [客户端](https://github.com/legoflow/legoflow) 版本之外，还提供了命令行工具 [LegoFlow-CLI](https://github.com/legoflow/legoflow-cli)。

通过使用 CLI 工具，我们可以更有效率进行开发构建。

## 依赖

在安装 CLI 工具之前，请先配置 PC 的依赖环境:

* [Node.js](https://nodejs.org/en/) Version >= 8.x

## 安装

```bash
npm i legoflow-cli -g

# or
# 推荐使用 yarn 安装
yarn global add legoflow-cli
```

## 使用

### 查看命令

```bash
legoflow -h

# 使用简写
lf -h
```

### 新建项目

```bash
lf init
```

### 开发

```bash
# 进入 legoflow 项目
cd test

lf dev

# 可选择环境
lf dev --env

# 可指定环境
lf dev test
```

### 构建

```bash
# 进入 legoflow 项目
cd test

lf build

# 选择环境
lf build --env

# 可指定环境
lf build preview
```

### CI 构建

```bash
# 进入 legoflow 项目
cd test

lf-ci

# 也可构建指定环境 lf-ci [env] 例如：构建测试环境
lf-ci test
```

### 构建 dll

```bash
lf build:dll
```

### 全局设置

```bash
# 设置参数
lf set <name> <value>

# 查看参数
lf get <name>

# 还原参数
lf clean
```

具体参数参考 [这里](https://github.com/legoflow/config)

### v1.x 项目迁移到 v2.x

```bash
cd test

lf migrate:v2
```

**注意** 该功能只能把 v1.x 与 v2.x 都存在的功能进行迁移，若 2.x 摒弃的功能无法被迁移。例如：

* v1.x 项目配置中的 `assets` 被迁移为 `workflow.build{ 'html.resourcesDomain' }`
* v1.x 项目配置中的 `dist` / `vue@2.1` / ... 则无法被迁移

具体功能对比参考 [这里](https://github.com/legoflow/legoflow/issues/12)

### 关闭指定端口线程

```bash
lf kill:port 6701
```

### 调用内置 ESLint 模块

通过该命令可调用内置的 [ESLint 模块](http://eslint.cn/docs/user-guide/command-line-interface)

```bash
lf:eslint

lf:eslint -v
lf:eslint -h
lf:eslint ...
```

**注意** 2.3 版本后该命令更改为 `lf-eslint`

## CI 持续构建

我们提供了相关的 [Docker Image](https://github.com/legoflow/legoflow-ci-image)，方便开发者在 CI 容器内进行构建项目。
