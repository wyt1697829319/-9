define(["jquery"], () => {
	class Header{
		constructor(){
			this.init();
			this.addListerens();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.nav();
			})
		}
		//监听事件
		addListerens(){
			$(window).scroll(this.block)
		}
		//吸顶效果
		block(){
			var top = $(window).scrollTop();
			if(top>=100){
				$(".roll").css({display:"block",position:"fixed",top:0});
			}else{
				$(".roll").css({display:"none"});
			}
		}
		
		
		nav(){
			$("nav").on("click", "li", function(){
				alert($(this).html());
			})
		}
	}
	return new Header();
})