const Router = require('koa-router');

const router = new Router({
	prefix:'/api'
});
router.get('/',async(ctx,next)=>{
	await ctx.render('index',{
		title:"api"
	})
});

module.exports = router;