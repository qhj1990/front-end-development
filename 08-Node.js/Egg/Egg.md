# Egg

## Egg.js快速初始化

```shell
npm i egg-init -g
egg-init egg-example --type=simple
cd egg-example
npm install
npm run dev
```

## 目录结构

egg-example

* package.json
* app.js
* agent.js
* app
  * router.js
  * controller
  * service
  * middleware
  * schedule
  * public
  * view
  * extend
* config
  * plugin.js
  * config.default.js
  * config.prod.js
  * config.test.js
  * config.local.js
  * config.unittest.js
* test
  * middleware
  * controller
  