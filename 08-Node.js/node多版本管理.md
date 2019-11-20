# 管理多个版本Node

经常会遇到这样的问题，不同的项目需要用到不同版本的Node.js版本，所以电脑上要按照不同版本的Node版本，同时存在，方便切换。目前主要由两个方案，NVM（Node Version Manangerment） 和 n

## nvm

[github](https://github.com/creationix/nvm)

NVM（Node Version Manangerment）

### 安装和更新nvm

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```

或者

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```

### 验证是否成功

关闭终端重新打开终端，输入nvm验证是否成功。

若提示"Node Version Manager",表示已经按照成功。

若提示"-bash: nvm: command not found"，表示还需要继续操作

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

然后继续执行nvm，确保已经按照成功

### 安装稳定版Node

```shell
nvm install stable
```

### 安装指定版本

```shell
nvm install <version>
```

### 删除已安装的指定版本

```shell
nvm uninstall <version>
```

### 切换成指定的版本

```shell
nvm use <version>
```

### 列出所有安装的版本

```shell
nvm ls

```

### 显示Node官方所有版本

```shell
nvm ls-remote
```

## n

[github](https://github.com/tj/n)

### 安装n

```shell
npm install -g n
```

### 安装特定版本的node

```shell
n 10.15.3
```

### 显示当前电脑所有已安装的node版本

```shell
n
```

用上下键可以切换当前需要的版本

### 安装官方最新的版本

```shell
n latest
```

### 安装最新的长期支持版LTS

```shell
n lts
```

### 删除特定版本

```shell
n rm 10.15.3
```

### 删除其他版本除了当前版本

```shell
n prune
```

### 帮助

```shell
n --help
// 或者
n -h
```
