
#### Koa2 简易框架

### Getting Start

```
git clone https://github.com/FantasyGao/koa2.git
cd koa2
npm install 
npm start
```
### 说明
##### koa的中间件方式 await+async
``` javascript
app.use(async (ctx, next) => {
  ...
  await next();
  ...
});
```
##### 默认模板 ejs
``` javascript
app.use(view(__dirname+'/views',{
	extension: 'ejs'
});
```

## 目录结构

```
➜  koa2
.
├── README.md
├── app.js
├── node_modules
│   ├── ejs
│   ├── koa
│   ├── koa-bodyparser
│   ├── koa-convert
│   ├── koa-logger
│   ├── koa-onerror
│   ├── koa-router
│   ├── koa-static
│   ├── koa-views
│   └── opener
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── other.js
└── views
    ├── err.ejs
    └── index.jade

```
