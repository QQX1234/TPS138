//下拉导航栏
$(function(){
	$("#headerNav_n,.headerNav_n").hover(
		function(){
		   $(".headerNav_n").show();
	    },
	   function(){
	   	   $(".headerNav_n").hide();
	   	   $(".headerNav_n li").children("div").hide();
	   })
	$(".headerNav_n li").hover(
		function(){
			$(this).stop().css({"border-left":"3px solid red","background":"#f1f1f1"})
			       .children("span").stop(true).animate({"left":"25px"})
			       .parent("li").siblings().css({"border-left":0})
			       .find("span").animate({"left":"6px"});			    
			$(this).children("div").show().parent("li").siblings().children("div").hide();
	    },
	    function(){
		    $(this).css({"border-left":0,"background":"white"}).find("span").animate({"left":"6px"});
	    }
	)
//轮播图	
	$.get("json/banner.json",function(data){
		for(var i=0;i<data.length;i++){
			
			function Fa(){
				var a=0;
				this.li=$("<li></li>");
				this.ele=$("<img>");
				this.ele.css({"width":1425,"height":404});
				this.ele.attr("src",data[i].img);		
				this.ele.appendTo($(this.li));
				this.li.appendTo($("#list1"));
				$("#list1").css({"width":(data.length+1)*1425+8});
				$("#list1 li").css({"float":"left","cursor":"pointer"});
//链接第一个到商品详情				
				$("#list1 li").click(function(){
					window.open("detailed.html","blank");
				})				
				var timer=setInterval(function(){
					a++;
					move();
				},3000)
				function move(){
					if(a<0){
						$("#list1").css("left",-data.length*1425);
						a=data.length-2;
					}
					if(a>=data.length){
						$("#list1").css("left",0);
						a=1;
					}
					$("#list1").stop().animate({left:-a*1425},400);
					if(a==data.length-1){
						$("#list2 li").eq(0).addClass("active").siblings().removeClass("active");
					}
					$("#list2 li").eq(a).addClass("active").siblings().removeClass("active");
				}
				$("#list2 li").click(function(){
					var index=$(this).index();
					a=index;
					move();
				})
				$("#bannerRight").click(function(){
					a++;
					move();
				})
				$("#bannerLeft").click(function(){
					a--;
					move();
				})
				$("#list2,#bannerLeft,#bannerRight").hide();
				$("#banner").hover(
					function(){
					   clearInterval(timer);
					   $("#list2,#bannerLeft,#bannerRight").fadeIn(500);
				   },
					function(){
						$("#list2,#bannerLeft,#bannerRight").fadeOut(500);
						clearInterval(timer);
						timer=setInterval(function(){
						a++;
						move();
				},3000)
					}
				)
			}
			var s=new Fa();
		}
	})
})

//头部第一部分
$(function(){
	//国家
	$("#headerOne_c_l_l").mouseenter(function(){
		$("#headerOne_c_l_l ul").show();	
		$("#headerOne_c_l_l").css("background-color","white");
	})
	$("#headerOne_c_l_l").mouseleave(function(){
		$("#headerOne_c_l_l ul").hide();	
		$("#headerOne_c_l_l").css("background-color","#f1f1f1");
	})
	//货币
	$("#headerOne_c_l_r").mouseenter(function(){
		$("#headerOne_c_l_r ul").show();	
		$("#headerOne_c_l_r").css("background-color","white");
	})
	$("#headerOne_c_l_r").mouseleave(function(){
		$("#headerOne_c_l_r ul").hide();	
		$("#headerOne_c_l_r").css("background-color","#f1f1f1");
	})
	//个人中心
	$("#headerOne_c_r_r_1").mouseenter(function(){
		$("#headerOne_c_r_r_1 ul").show();	
		$("#headerOne_c_r_r_1").css("background-color","white");
	})
	$("#headerOne_c_r #headerOne_c_r_r #headerOne_c_r_r_1").mouseleave(function(){
		$("#headerOne_c_r_r_1 ul").hide();	
		$("#headerOne_c_r_r_1").css("background-color","#f1f1f1");
	})
	
	//我的关注（0）字体变红
	$("#headerOne_c_r_r").find("span").eq(1).mouseenter(function(){
		$("#headerOne_c_r_r").find("span").eq(1).css("color","red");
		$(".star1").hide(0);
		$(".star2").show(0);
	})
	$("#headerOne_c_r_r").find("span").eq(1).mouseleave(function(){
		$("#headerOne_c_r_r").find("span").eq(1).css("color","black");
		$(".star2").hide(0);
		$(".star1").show(0);
	})
})

//搜索框固定
$(function(){
	var top=$("#headerTwo").offset().top;
	$(window).scroll(function(){
		var _top=$(document).scrollTop();
		if(_top>=top+300){
			$("#headerTwo").css({"position":"fixed","top":0,"opacity":0.98});
		}
		else{
             $("#headerTwo").css({"position":"static"})
        }
	})
})

//楼梯
$(function(){
//	$("#stairs").children("ul").children("li").hover(
//		function(){
//			$(this).css("background-color","#f5d3d4");
//	   },
//	   function(){	   	
//	   	    $(this).css("background-color","#f5f5f5");
//	   	    $(this).css("color","#000000");
//	   }
//	)
	$("#stairs").children("ul").children("li").click(function(){
		var index=$(this).index();
		$(this).css("background-color","#FF0000").siblings().css("background-color","#f5f5f5");
		$(this).css("color","#FFFFFF").siblings().css("color","#000000");
		var _top=$("#mainContent").find("div[class='1']").eq(index).offset().top-120;
		$("body,html").stop().animate({"scrollTop":_top},400);

	})
	$("#top").click(function(){
		$("body,html").stop().animate({"scrollTop":0},1000);
	})
	$(window).scroll(function(){		
		var scrollTop=$(document).scrollTop();
		//滚动到一定位置楼梯出现或消失
		if(scrollTop>=$("#baby").offset().top-120){
			$("#stairs").fadeIn(400);
		}
	    else{
	    	$("#stairs").fadeOut(300);
	    }
	    //////////////////////////////////////
		var index=0;
		$(".1").each(function(i,ele){
			var top=$(this).offset().top;
			var as=scrollTop+$(window).height()/2>top+$(this).height()/2-120;
			if(as){
				index=i;
			}
			$("#stairs li").eq(index).css("background-color","#FF0000").siblings().css("background-color","#f5f5f5");
		    $("#stairs li").eq(index).css("color","#FFFFFF").siblings().css("color","#000000");
		})
	})
})	
$(function(){
//文本不可选	
	$("#stairs,#bannerLeft,#bannerRight").bind("selectstart",function(){
		return false;
	})
	
//	$("body").bind("selectstart",function(){
//		return false;
//	})
})

$(function(){
//购物车按钮	
	$("#shoppingCart").click(function(){
	   window.open("cart.html","_blank");
    })
	$("#homepage").click(function(){
	   window.open("homepage.html","_blank");
    })
})
//$(function(){
//	$("#headerTwo").hover(
//		function(){
//			$("#down,#up").fadeIn();
//		},
//		function(){
//			$("#down,#up").fadeOut();
//		}
//	)
//	$("#down").click(function(){
//		$("html,body").stop().animate({"scrollTop":10000},35000,"linear")//linear匀速
//	})
//	$("#up").click(function(){
//		$("html,body").stop().animate({"scrollTop":0},35000,"linear")
//	})
//	$("#mainContent,#footer,#guarantee,#new,#hot").click(function(){
//		$("html,body").stop().animate();
//	})
//})