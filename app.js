const Koa        = require('koa');
const bodyparser = require('koa-bodyparser');
const view       = require('koa-views');
const koaError   = require('koa-onerror');  
const convert    = require('koa-convert');
const koaStatic  = require('koa-static');
const logger = require('koa-logger'); 

const opener     = require('opener');

const app        = new Koa();

const index      = require('./route/index.js');
const other      = require('./route/other.js');

app.convert = x => app.use.call(app, convert(x));

app.convert(bodyparser());
//logger
app.convert(logger());
//static
app.convert(koaStatic(__dirname+'/public'));
//设置默认模板为ejs
app.use(view(__dirname+'/views',{
	extension: 'ejs'
}));

//发生默认err.ejs
koaError(app,{template: 'views/err.ejs'});
//router
app.use(index.routes(),index.allowedMethods());
app.use(other.routes(),other.allowedMethods());

// error logger
app.on('error',(err, ctx) => {
  console.log('error occured:', err)
});

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000 is runing");
	opener("http://127.0.0.1:3000");
});