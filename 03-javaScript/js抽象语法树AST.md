# JS抽象语法树AST

## 词法分析

会把字符串形式的代码转换为令牌(Tokens)流。

var answer = 6 + 7;

```json
[
    {
        "type": "Keyword",
        "value": "var"
    },
    {
        "type": "Identifier",
        "value": "answer"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "Numeric",
        "value": "6"
    },
    {
        "type": "Punctuator",
        "value": "*"
    },
    {
        "type": "Numeric",
        "value": "7"
    },
    {
        "type": "Punctuator",
        "value": ";"
    },
]
```

## 语法分析

这个阶段会使用令牌中的信息把它们转换成一个AST的树结构。
