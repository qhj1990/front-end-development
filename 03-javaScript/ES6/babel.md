# Babel

## babel的包结构

核心包

* babel-core：babel转译器本身，提供了babel的转译API，如babel.transform等，用于对代码进行转译。像webpack的babel-loader就是调用这些API来完成转译过程的。
* babylon：js的词法解析器
* babel-traverse：用于对AST（抽象语法树，想了解的请自行查询编译原理）的遍历，主要给plugin用
* babel-generator：根据AST生成代码

功能包

* babel-types：用于检验、构建和改变AST树的节点
* babel-template：辅助函数，用于从字符串形式的代码来构建AST树节点
* babel-helpers：一系列预制的babel-template函数，用于提供给一些plugins使用
* babel-code-frames：用于生成错误信息，打印出错误点源代码帧以及指出出错位置
* babel-plugin-xxx：babel转译过程中使用到的插件，其中babel-plugin-transform-xxx是transform步骤使用的
* babel-preset-xxx：transform阶段使用到的一系列的plugin
* babel-polyfill：JS标准新增的原生对象和API的shim，实现上仅仅是core-js和regenerator-runtime两个包的封装
* babel-runtime：功能类似babel-polyfill，一般用于library或plugin中，因为它不会污染全局作用域

## babel编译原理

ES6代码输入 ==》 babylon进行解析 ==》 得到AST==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树==》 用babel-generator通过AST树生成ES5代码

1. Parser 解析

    将代码经过词法分析，语法分析，babylon 解析成抽象语法树

2. Transformer 转换

    遍历抽象树，对抽象语法树进行再变化

3. Generator 生成

    将新的 AST 语法树对象再生成浏览器都可以识别的 ES5 语法。这一步主要是由 babel-generator 插件完成
