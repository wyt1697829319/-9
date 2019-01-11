//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","cookie","header","footer"], ($) => {
            //轮播图
            function Index(){
            	this.cartt = $.cookie("cart") || [];
                this.vie();
                this.addListerens();
                $.cookie.json = true;
            }
            $.extend(Index.prototype,{
                vie(){
                    // 获取li的宽度
                    let liWidth = $(".r1").width();
                    let index = 0;
                    let timer = null;
                    //点击前按钮
                    $(".pre").on("click",()=>{
                        index--;
                        if(index<0)index=2;
                        let Left = -liWidth*index;
                        $(".rr").stop().animate({left:Left},800);
                    })
                    //点击后按钮
                    function next(){
                        index++;
                        if(index>2)index=0;
                        let Left = -liWidth*index;
                        $(".rr").stop().animate({left:Left},800);
                    }
                    $(".next").on("click",next);
                    //自动播放              
                    //鼠标移入停止
                    $(".banner").hover(function(){
                        clearInterval(timer);
                    },(function autoPlay(){
                        timer = setInterval(()=>{
                            $(".banner").stop().animate(new next())
                        },4000);
                        return autoPlay;
                    })());
                },
                //事件监听
                addListerens(){
                	$(".gwc").on("click",this.toCart.bind(this))
                },
                //加入购物车
                toCart(event){
                	var src = event.target;
                	let parent = $(src).parents(".u-1");
                	let products = {
                		img:$(parent).find("img").attr("src"),
                		title:$(parent).find(".title").html(),
                		price:$(parent).find("span").html(),
                		amounts:1
                	}
//              	console.log(products)
                	var has = this.cartt.some(curr=>{
                		if((curr.img==products.img)){
                			curr.amounts ++;
                			return true;
                		}
                		return false;
                	})
                	if(!has){
                		this.cartt.push(products);
                	}
//              	console.log(this.cartt)
					$.cookie("cart",this.cartt,{expires:10,path:"/"});
						
					
					
                }
            })
            new Index();		
	})
})