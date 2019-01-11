//列表页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","template","header","footer"], ($,template) => {
		function list(){
			this.init();
		}
		$.extend(list.prototype,{
			init(){
				$.getJSON("http://rap2api.taobao.org/app/mock/data/771275",(data)=>{
					const html = template("products",{pros:data.res_body.list});
					$(".ts-d").html(html);
				})
			}
		})
		new list();	
	})

})