//放大镜
$(function(){
	$("#smallPicBox").mousemove(function(e){
		$("#moveDiv").css("display","block");
		$("#bigPicBox").css("display","block");
		var s=$("#smallPicBox").offset().left+$("#moveDiv").width()/2;
		var ss=$("#smallPicBox").offset().top+$("#moveDiv").height()/2;;
		var left=e.pageX-s;
		var top=e.pageY-ss;
		if(left<=0){
			left=0;
		}
		if(left>=$("#smallPicBox").width()-$("#moveDiv").width()){
			left=$("#smallPicBox").width()-$("#moveDiv").width();
		}
		if(top<=0){
			top=0;
		}
		if(top>=$("#smallPicBox").height()-$("#moveDiv").height()){
			top=$("#smallPicBox").height()-$("#moveDiv").height();
		}
		$("#moveDiv").css({"left":left,"top":top});
		$("#bigPic").css({"left":-2*left,"top":-2*top});
		$("#bigPic2").css({"left":-2*left,"top":-2*top});
	})
	$("#smallPicBox").mouseleave(function(){
		$("#moveDiv").css("display","none");
		$("#bigPicBox").css("display","none");
	})
	$("#ssmallPic1").mouseenter(function(){
		$("#smallPic").css({"display":"block"});
		$("#ssmallPic1").addClass("active").siblings().removeClass("active");
		$("#smallPic2").css({"display":"none"});
		$("#bigPic").css({"display":"block"});
		$("#bigPic2").css({"display":"none"});
		
	})
	$("#ssmallPic2").mouseenter(function(){
		$("#smallPic2").css({"display":"block"})
		$("#ssmallPic2").addClass("active").siblings().removeClass("active");
		$("#smallPic").css({"display":"none"});
		$("#bigPic").css({"display":"none"});
		$("#bigPic2").css({"display":"block"});
	})	
})
//商品规格
$(function(){
	$("#guige").find("li").click(
		function(){
		    $(this).addClass("active2").siblings().removeClass("active2");
	        console.log(this);
	        var s=$(this);
	        console.log(s);
		}
    )
})
//数量加减
$(function(){
	var a=1;
	var q=true;
	$("#add").bind("selectstart",function(){return false;});
	$("#add").click(function(){
		a++;		
		$("#shuliang").val(a);
		
	})
	$("#sub").bind("selectstart",function(){return false;});
	$("#sub").click(function(){
		a--;
		if(a<=0){
			a=0;
		}
		$("#shuliang").val(a);
	})
//直接输入要购买的商品数量	
	$("#shuliang").blur(function(){
		a=$("#shuliang").val();
	})
//购物车COOKICE	
	$("#gwc").click(function(){
		var img=$(this).parent().parent().parent().find("div").eq(0).find("img").eq(0).attr("src");
		var name=$(this).parent().parent().parent().find("#boxContent_r").find("h3").html();
		var guige=$(this).parent().parent().parent().find("#boxContent_r").find("div").eq(1).children().children().eq(0).html();
		var price=$(this).parent().parent().parent().find("#boxContent_r").find("span").eq(4).find("i").html();
		var arra=$.cookie("cart") ? JSON.parse($.cookie("cart")):[];
		var is=false;
		for(var i=0;i<arra.length;i++){					
			if(arra[i].img1==img){
				is=true;
				arra[i].num+=a;	
			}
		}
		if(!is){
			var obj={
				img1:img,
				name1:name,
				guige1:guige,
				price1:price,
			    num:a
		   }
			arra.push(obj);
		}				
		$.cookie("cart",JSON.stringify(arra),{expires:29,path:"/"});
		console.log($.cookie("cart"));
	})
	$("#goumai").click(function(){
		window.open("cart.html","_blank");	
	})
	$("#check").click(function(){
		window.open("cart.html","_blank");
	})	
})
//添加购物车弹出窗口
$(function(){
	$("#gwc").click(function(){
		$("#addSuccess").fadeIn(100);
	})
	$("#continue").click(function(){
		$("#addSuccess").fadeOut(1);
	})
})
//购物车COOKICE
//$(function(){
//
//})