require(["./requirejs.config"],()=>{
	//引入index需要依赖的模块
	require(["jquery","footer","cookie"],($)=>{
		function register(){
			this.handler();
			this.addListerens();
		},
		$.extend(register.prototype,{
						//交互效果
			handler(){
	            $(".menu").on("click","li",this.qie)
			},
			// 切换
			qie(){
				var index = $(this).index(); // 设index为当前点击索引
                $(this).addClass("active").siblings().removeClass("active"); // 添加样式并清除兄弟节点样式
                $(this).parents(".wrap").find(".main1 form").eq(index).show().siblings().hide(); // 同理显示与隐藏
			},
			//添加事件监听
			addListerens(){
				
				$("#ll").on("click",this.reg.bind(this));
				$(".looo").on("click",this.loginss);
			},
			//验证正则
			reg(){
				var reg = /^[0-9a-zA-Z]{4,10}$/;
				var passreg = /^[0-9a-zA-Z]{6,15}$/;
//				var user = $("#username").val();
//				var pass = $("#password").val();
//				var com = $("#confirm").val();
				if(!reg.test(user)){
					alert("用户名输入有误")
				}else if(!passreg.test(pass)){
					alert("密码输入有误")
				}else if(!(pass==com)){
					alert("俩次密码输入不一致")
				}else{
//					console.log(this)
					this.regis();
				}
			},
			//注册事件，验证输入内容
			regis(){
				let data = $(".main-1").serialize();
				$.post("http://127.0.0.1/php1/api/register.php",data,(res)=>{
	//				console.log(typeof(res))
					if(res.res_body.status==1){//用户注册成功
						alert("快去登录吧")
					}
				},"json")
			},
			loginss(){
				console.log("222")
			}
		}),
		new register();	
	})
})
