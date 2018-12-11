$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list5"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},1500)
		function move(){
			if(a<0){
				$("#list5").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list5").css({"left":0});
				a=1;
			}
			$("#list5").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list55").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list55").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list55").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list5Left").click(function(){
			a--;
			move();
		})
		$("#list5Right").click(function(){
			a++;
			move();
		})
		$("#list55,#list5Left,#list5Right").fadeOut(500);
		$("#baby_m").hover(
			function(){
				clearInterval(timer);
				$("#list55,#list5Left,#list5Right").fadeIn(500);
			},
			function(){
				$("#list55,#list5Left,#list5Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},1500)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#baby_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})


$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list6"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},2000)
		function move(){
			if(a<0){
				$("#list6").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list6").css({"left":0});
				a=1;
			}
			$("#list6").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list66").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list66").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list66").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list6Left").click(function(){
			a--;
			move();
		})
		$("#list6Right").click(function(){
			a++;
			move();
		})
		$("#list66,#list6Left,#list6Right").fadeOut(500);
		$("#beauty_m").hover(
			function(){
				clearInterval(timer);
				$("#list66,#list6Left,#list6Right").fadeIn(500);
			},
			function(){
				$("#list66,#list6Left,#list6Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},2000)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#beauty_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})

//酒水
$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list7"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},2500)
		function move(){
			if(a<0){
				$("#list7").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list7").css({"left":0});
				a=1;
			}
			$("#list7").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list77").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list77").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list77").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list7Left").click(function(){
			a--;
			move();
		})
		$("#list7Right").click(function(){
			a++;
			move();
		})
		$("#list77,#list7Left,#list7Right").fadeOut(500);
		$("#food_m").hover(
			function(){
			    clearInterval(timer);
				$("#list77,#list7Left,#list7Right").fadeIn(500);
			},
			function(){
				$("#list77,#list7Left,#list7Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},2500)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#food_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
//钟表
$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list8"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},3000)
		function move(){
			if(a<0){
				$("#list8").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list8").css({"left":0});
				a=1;
			}
			$("#list8").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list88").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list88").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list88").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list8Left").click(function(){
			a--;
			move();
		})
		$("#list8Right").click(function(){
			a++;
			move();
		})
		$("#list88,#list8Left,#list8Right").fadeOut(500);
		$("#clock_m").hover(
			function(){
				clearInterval(timer);
				$("#list88,#list8Left,#list8Right").fadeIn(500);
			},
			function(){
				$("#list88,#list8Left,#list8Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
			    },3000)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#clock_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
//保健
$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list9"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},3000)
		function move(){
			if(a<0){
				$("#list9").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list9").css({"left":0});
				a=1;
			}
			$("#list9").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list99").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list99").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list99").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list9Left").click(function(){
			a--;
			move();
		})
		$("#list9Right").click(function(){
			a++;
			move();
		})
		$("#list99,#list9Left,#list9Right").fadeOut(500);
		$("#health_m").hover(
			function(){
				clearInterval(timer);
				$("#list99,#list9Left,#list9Right").fadeIn(500);
			},
			function(){
				$("#list99,#list9Left,#list9Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},3000)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#health_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
//家居
$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list11"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},3000)
		function move(){
			if(a<0){
				$("#list11").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list11").css({"left":0});
				a=1;
			}
			$("#list11").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list111").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list111").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list111").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list11Left").click(function(){
			a--;
			move();
		})
		$("#list11Right").click(function(){
			a++;
			move();
		})
		$("#list111,#list11Left,#list11Right").fadeOut(500);
		$("#material_m").hover(
			function(){
				clearInterval(timer);
				$("#list111,#list11Left,#list11Right").fadeIn(500);
			},
			function(){
				$("#list111,#list11Left,#list11Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},3000)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#material_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
//电器
$(function(){
	$.get("json/小轮播图.json",function(data){
		for(var i=0;i<data.length;i++){
			var li=$("<li></li>");
			var img=$("<img>");
			img.attr("src",data[i].img);
			li.appendTo($("#list12"));
			img.appendTo(li);
			img.css({"width":362,"height":456});
			li.css({"float":"left"});
		}
		var a=0;
		var timer=setInterval(function(){
			a++;
			move();
		},3000)
		function move(){
			if(a<0){
				$("#list12").css({left:-data.length*362});
				a=data.length-2;
			}
			if(a>=data.length){
				$("#list12").css({"left":0});
				a=1;
			}
			$("#list12").stop().animate({left:-a*362},400);
			if(a==data.length-1){
				$("#list1212").find("li").eq(0).addClass("active").siblings().removeClass("active");
			}
			$("#list1212").find("li").eq(a).addClass("active").siblings().removeClass("active");
		}
		$("#list1212").find("li").click(function(){
			var index=$(this).index();
			a=index;
			move();
		})
		$("#list12Left").click(function(){
			a--;
			move();
		})
		$("#list12Right").click(function(){
			a++;
			move();
		})
		$("#list1212,#list12Left,#list12Right").fadeOut(500);
		$("#digital_m").hover(
			function(){
			    clearInterval(timer);
			    $("#list1212,#list12Left,#list12Right").fadeIn(500);
			},
			function(){
				$("#list1212,#list12Left,#list12Right").fadeOut(500);
				clearInterval(timer);
				timer=setInterval(function(){
					a++;
					move();
				},3000)
			}
		)
	})
})
$(function(){
	$.get("json/母婴.json",function(data){
		for(var i=0;i<data.length;i++){	
			var boxx=$("<div class='boxx'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div2'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div4'></div>");
			boxx.append(div1,div2,div3,div4);			
			var img=$("<img class='img2'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var boxx1=$("<div class='boxx1'></div>");
			var spannbox=$("<span class='spannbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spannbox1=$("<span class='spannbox'></span>");
			var spann11=$("<span class='spann11'></span>");
			var spann21=$("<span class='spann21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(boxx);	
			img0.appendTo(boxx);
			img1.appendTo(boxx);
			boxx1.appendTo(boxx);
			spannbox.appendTo(boxx1);
			span1.appendTo(spannbox);
			span1.html(data[i].detailed);
			span2.appendTo(spannbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spannbox1.appendTo(boxx1);
			spann11.appendTo(spannbox1);
			spann11.html(data[i].price);
			spann21.appendTo(spannbox1);
			spann21.html(data[i].country);		
			boxx.appendTo($("#digital_r"));
			$(".boxx").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'215px'},300)
		            $(this).find('.div2').stop(true).delay(300).animate({width:'252px'},300)
		            $(this).find('.div3').stop(true).animate({height:'215px'},300)
		            $(this).find('.div4').stop(true).delay(300).animate({width:'252px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div2').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div4').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})