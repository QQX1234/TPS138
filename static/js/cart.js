$(function(){
	var goods=$.cookie("cart")	
	if(goods){
		goods=JSON.parse(goods);
		for(var i=0;i<goods.length;i++){		
			var tr=$("<tr class='xiangxi'></tr>");
			var td1=$("<td class='td1'></td>");
			var td2=$("<td class='td22'></td>");
			var td3=$("<td class='td2'></td>");
			var td4=$("<td class='td4'></td>");
			var td5=$("<td class='td3'></td>");
			var td6=$("<td></td>");
			var del=$("<div class='delete'></div>")
			var div1=$("<div class='img'></div>");
			var div2=$("<div class='wenzi'></div>");
			var span1=$("<span class='num1'></span>");
			var _input=$("<input class='num'/>");
			var span2=$("<span class='num2'></span>");
			$("#tr").before(tr);
			span1.html("-");
			span2.html("+");
			del.html("不想买了");
			tr.append(td1,td2,td3,td4,td5,td6);
			td1.append(div1,div2);
			td4.append(span1,_input,span2);
			td6.append(del);
			var good=goods[i];
			var prices=good.price1*good.num;	
			var img=$("<img>");
			div2.html(good.name1);
			img.attr("src",good.img1);
			img.css({"width":"60px","height":"60px"});
			img.appendTo(div1);
			td3.html("￥ "+good.price1);
			td5.html("￥ "+prices);
			td2.html(good.guige1);			
			if(goods.length>=2){
				var vv=parseFloat(goods[0].num*goods[0].price1);
				var v=parseFloat(goods[1].num*goods[1].price1);
				var s=parseFloat(goods[0].num);
				var b=parseFloat(goods[1].num);
				var p=s+b;
				var c=v+vv;
				$(".nun").html(p);
				$(".span7").html("￥"+c);
				$(".shopCart").html(p);
			}
			else if(goods.length==1){
				var ss=parseFloat(goods[0].num*goods[0].price1);
				$(".span7").html("￥"+ss);
				var nn=parseFloat(goods[0].num);
				$(".nun").html(nn);
				$(".shopCart").html(nn);
			}		
			$(".span2").html(goods.length);						
			_input.val(good.num);
            $("#ck").click(function(){
		      alert("付款成功！");
	        })
            $(".num").blur(function(){
            	number_=$(".num").val();
            })
	span1.click(function(){	//购物车减按键
        var number_= parseFloat($(this).parent().parent().find("input").val());
        var unitPrice=parseFloat($(this).parent().parent().find(".td2").html().split(" ")[1]);
        var total=unitPrice*number_;
		number_--;
		if(number_<=0){
			number_=0;	
		}
		$(this).parent().parent().find("input").val(number_);
		total-=unitPrice;		
		if(total<=0){
			total=0;
		}
		$(this).parent().parent().find(".td3").html("￥ "+total);
		if(goods.length>1){
			var total1=parseFloat($(this).parent().parent().siblings().find(".td3").html().split(" ")[1]);	
			var total2=parseFloat($(this).parent().parent().find(".td3").html().split(" ")[1]);
			var pp=parseFloat($(this).parent().parent().siblings().find("input").val());	
			var qq=parseFloat($(this).parent().parent().find("input").val());
			var rr=qq+pp;
			var t=total1+total2;
			$(".span7").html("￥"+t);
			$(".nun").html(rr);
		}
		else{
			var total2=parseFloat($(this).parent().parent().find(".td3").html().split(" ")[1]);
		    var ee=parseFloat($(this).parent().parent().find("input").val());
		    console.log(ee);
		    $(".nun").html(ee);
		    $(".span7").html("￥"+total2);
		}	
		var a=$(this).index(".num1");
		goods[a].num=number_;
		$.cookie("cart","",{expires:0,path:"/"});
		$.cookie("cart",JSON.stringify(goods),{expires:20,path:"/"});
	})
	span2.click(function(){//购物车加按键
        var number_= parseFloat($(this).parent().parent().find("input").val());
		number_++;
        var unitPrice=parseFloat($(this).parent().parent().find(".td2").html().split(" ")[1]);
        var total=unitPrice*number_;
		$(this).parent().parent().find(".td3").html("￥ "+total);
		$(this).parent().parent().find("input").val(number_);
		if(goods.length>1){
			var total1=parseFloat($(this).parent().parent().siblings().find(".td3").html().split(" ")[1]);		
			var total2=parseFloat($(this).parent().parent().find(".td3").html().split(" ")[1]);
			var pp=parseFloat($(this).parent().parent().siblings().find("input").val());	
			var qq=parseFloat($(this).parent().parent().find("input").val());
			var rr=qq+pp;
			var t=total1+total2;
			$(".span7").html("￥"+t);
			$(".shopCart").html(rr);
			$(".nun").html(rr);
		}
		else if(goods.length==1){
			var total2=parseFloat($(this).parent().parent().find(".td3").html().split(" ")[1]);
			var ee=parseFloat($(this).parent().parent().find("input").val());
		    $(".nun").html(ee);
			$(".span7").html("￥"+total2);
			$(".shopCart").html(ee);
		}
		
		var b=$(this).index(".num2");
		goods[b].num=number_;		
		$.cookie("cart","",{expires:0,path:"/"});
		$.cookie("cart",JSON.stringify(goods),{expires:20,path:"/"});
	})
	$(".num2,.num1,.span2").bind("selectstart",function(){return false;})            
		}
	}
	$(".delete").click(function(){
		var i=$(this).index(".delete");
		goods.splice(i,1);
		$.cookie("cart", "", {expires:0, path:"/"});
		$.cookie("cart",JSON.stringify(goods),{expires:30,path:"/"});
        window.location.reload();
	})
})
