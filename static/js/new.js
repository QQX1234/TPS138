$(function(){
	$.get("json/新品上市1.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(box);
			img0.appendTo(box);
			img1.appendTo(box);	
			box1.appendTo(box);
			box.click(function(){
			window.open("detailed2.html","blank");
			})
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);		
			box.appendTo($("#newBox1"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )
		}	        
	})
})

$(function(){
	$.get("json/新品上市2.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var img0=$("<img class='img0'>");
			var img1=$("<img class='img1'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img0.attr("src",data[i].img1);
			img1.attr("src",data[i].img2);
			img.appendTo(box);	
			box1.appendTo(box);
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);
			box.appendTo($("#newBox2"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
$(function(){
	$.get("json/新品上市3.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img.appendTo(box);	
			box1.appendTo(box);
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);
			box.appendTo($("#newBox3"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
$(function(){
	$.get("json/新品上市4.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img.appendTo(box);	
			box1.appendTo(box);
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);
			box.appendTo($("#newBox4"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
$(function(){
	$.get("json/新品上市5.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img.appendTo(box);	
			box1.appendTo(box);
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);
			box.appendTo($("#newBox5"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
$(function(){
	$.get("json/新品上市1.json",function(data){
		for(var i=0;i<data.length;i++){	
			var box=$("<div class='box'></div>");
			var div1=$("<div class='div div1'></div>");
			var div2=$("<div class='div div22'></div>");
			var div3=$("<div class='div div3'></div>");
			var div4=$("<div class='div div44'></div>");
			box.append(div1,div2,div3,div4);
			var img=$("<img class='img'>");
			var box1=$("<div class='box1'></div>");
			var spanbox=$("<span class='spanbox'></span>");
			var span1=$("<span class='span1'></span>");
			var span2=$("<span class='span2'></span>");
			var spanbox1=$("<span class='spanbox'></span>");
			var span11=$("<span class='span11'></span>");
			var span21=$("<span class='span21'></span>");
			img.attr("src",data[i].img);
			img.appendTo(box);	
			box1.appendTo(box);
			spanbox.appendTo(box1);
			span1.appendTo(spanbox);
			span1.html(data[i].detailed);
			span2.appendTo(spanbox);
			var img3=$("<img class='img3'>");
			img3.attr("src",data[i].img3);
			img3.appendTo(span2);
			spanbox1.appendTo(box1);
			span11.appendTo(spanbox1);
			span11.html(data[i].price);
			span21.appendTo(spanbox1);
			span21.html(data[i].country);
			box.appendTo($("#newBox6"));
			$(".box").hover(
				function(){
					$(this).find(".div").show(0);
				    $(this).find('.div1').stop(true).animate({height:'280px'},300)
		            $(this).find('.div22').stop(true).delay(300).animate({width:'222px'},300)
		            $(this).find('.div3').stop(true).animate({height:'280px'},300)
		            $(this).find('.div44').stop(true).delay(300).animate({width:'222px'},300)
			    },
			    function(){
		            $(this).find('.div1').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div22').stop(true).animate({width:'0px'},100)
		            $(this).find('.div3').stop(true).delay(100).animate({height:'0px'},100)
		            $(this).find('.div44').stop(true).animate({width:'0px'},100)
			    }
		    )			
		}
	})
})
$(function(){
	var i=0;
	var timer=setInterval(function(){
		i++;
		move();
	},3000)
	function move(){
		
		if(i>5){
			$("#box").css("left",0);
			i=1;
		}
		$("#box").stop().animate({left:-i*1200},400);
		if(i==5){
			$("#list3").find("li").eq(0).addClass("active").siblings().removeClass("active");
		}
		$("#list3").find("li").eq(i).addClass("active").siblings().removeClass("active");
	}
	$("#list3").find("li").mouseenter(function(){
		var index=$(this).index();
		i=index;
		$("#box").stop().animate({left:-i*1200},400);
		$("#list3").find("li").eq(i).addClass("active").siblings().removeClass("active");
		
	})
	$("#box,#list3").hover(
		function(){
	      clearInterval(timer);
        },
        function(){
        	timer=setInterval(function(){
				i++;
				move();
	        },3000)
        }
	)
})

