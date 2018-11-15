# 在线昆特牌（汉化版）

# 介绍
Not-Gwent-Online 是一款昆特牌玩法的独立游戏，昆特牌玩法源自游戏《巫师3》。

# 安装
## - 需求
- 安装 [node.js](https://nodejs.org/)
- 安装 [GraphicsMagick](http://www.graphicsmagick.org)（用于生成精灵（Sprites））

## - 编译

```sh
cd ~/myWebserverRoot
git clone https://github.com/exane/not-gwent-online
cd not-gwent-online
npm install
npm run build
```


## - 配置
- 打开 /public/Config.js
- 将 hostname 修改为你的主机地址。（如“192.168.123.1”） <br>请确保地址后面没有斜杠（如“192.168.123.1/”）

## - 启动服务器
```sh
cd ~/myProjectDirectory/not-gwent-online
node server/server.js
```

## - 启动客户端
- 打开浏览器并访问：“http://192.168.123.1:3000” （具体地址跟你的本机和配置有关）

# 关于汉化版

- 汉化版由 jayasme 汉化，游戏中使用的图片资源版权为 CD Projekt S.A. 所有，游戏代码归 Github 用户 exane 所有，本汉化代码由 exane 上传的开源代码（ https://github.com/exane/not-gwent-online ）修改而来，但未经 exane 本人直接授权同意。
