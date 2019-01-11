//购物车的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","template","cookie","header","footer"],($,template) => {
		function carts(){
			$.cookie.json = true;
			this.cartt = $.cookie("cart")||[];
			this.init();
			this.addlisteners();
		}
		$.extend(carts.prototype,{
			init(){
				const html = template("templateP",{"pro":this.cartt});
				console.log(html)
				console.log($("tbody"))
				$("tbody").html(html);
			},
			//添加事件监听
			 addlisteners:function(){
                $(".ext").on("click",".delBtn",$.proxy(this.dele,this));//删除
			 	
			 },
			 //删除操作
            dele(event){
                var has = confirm("确定删除？")
                if(has==true){
                    console.log(this.cartt)
                    // 获取此行商品的信息
                    let lim = $(event)[0].delegateTarget;
                    let img = $(lim.children[1].children[0].children[0]).attr("src");           
                    // 在cookie中移除此商品的信息并重新加载页面
                    //遍历cart数组，看哪条数据中的img属性与img不一致，不一致则保留
                    this.cartt = this.cartt.filter(curr=>curr.img!=img);
                    $.cookie("cart",this.cartt,{expires:10,path:"/"});
                    lim.remove();
            
                }        
            },
             //将选中商品存入cookie
            toCookie(){
                $(".u-chk:checked").each((index,element)=>{
                    //遍历商品信息
                    var products = {//获取商品信息
                        img: $(element).parents(".ext").find(".img-1")[0].getAttribute("src"),
                        title : $(element).parents(".ext").find(".title-t")[0].innerHTML,
                        price : $(element).parents(".ext").find(".pie")[0].innerHTML,
                        amount : $(element).parents(".ext").find(".num")[0].value
                    }
                    this.accountPro.push(products)
                }) 
                $.cookie("account",this.accountPro,{expires:10,path:"/"});
            }
            
		})
		new carts()
	})

})