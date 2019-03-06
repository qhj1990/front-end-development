# ESLint

ESLint 能够保证代码的一致性，使用Espree解析JavaScript，使用AST分析代码中的模式，完全插件化

## 安装ESLint

### 全局安装ESLint和使用

安装ESLint

```
npm install eslint -g
```

生成配置文件

```
eslint --init
```
运行ESLint

```
eslint file.js
```

### 局部安装ESLint和使用

```
npm install eslint --save-dev
```

设置一个配置文件

```
./node_modules/.bin/eslint --init
```

运行ESLint

```
./node_modules/.bin/eslint file.js
```

## 配置规则
