$(function(){
	var user=/(^1\d{10}$)|(^\w{4,16}@\w{2,4}\.com$)/gi;
	$("#text2").change(function(){		
		if(user.test($("#text2").val())==0){
			$(".no").show(0);
			$(".yes").hide(0);
			$("#prompt11").html("请输入正确的邮箱地址/手机号。");
		}
		else{
			$(".yes").show(0);
			$(".no").hide(0);
			$("#prompt11").html("");
		}
    })	
    var pwd=/^[a-zA-Z]\w{5,17}$/gi;
	$("#password2").change(function(){		
		if(pwd.test($("#password2").val())==0){
			$(".no2").show(0);
			$(".yes2").hide(0);
			$("#prompt22").html("密码以字母开头，为6-18位的字符。");
		}
		else{
			$(".yes2").show(0);
			$(".no2").hide(0);
			$("#prompt22").html("");
		}
  }) 	
	$.idcode.setCode(); 
	$("#idcode").bind("selectstart",function(){return false;})//点击验证码狂文字不可选
	$("#button3").click(function(){
		var IsBy = $.idcode.validateCode();
		console.log(IsBy);
		var s=3;
		var message=$.cookie("message")? JSON.parse($.cookie("message")):[];
		for(var i=0;i<message.length;i++){
			if((message[i].name!=$("#text2").val())&&(pwd.test($("#password2").val())!=0)&&(user.test($("#text2").val())!=0)){
				if(IsBy){
					$("#prompt12").html("");
				    alert("注册成功！");
					$(".no").hide(0);
				    $(".yes").show(0);
				}
				if(!IsBy){
				    $("#prompt12").html("*验证码输入有误");
					$(".no").show(0);
				    $(".yes").hide(0);
				}	
			}
			else if(message[i].name==$("#text2").val()&&(user.test($("#text2").val())!=0)){
				$("#prompt11").html("*用户名已存在,请重新输入");
                $(".no").show(0);
			    $(".yes").hide(0);				
			} 		
		}
		var obj={
			name:$("#text2").val(),
			pwd:$("#password2").val()
		}
		message.push(obj);
		$.cookie("message",JSON.stringify(message),{expires:16,path:"/"});
	})
	$("#button2").click(function(){
		$.cookie("message","",{expires:0,path:"/"});
	})
})
$(function(){
	$("#button").click(function(){
		var user=$.cookie("message");
		if(user){
			user=JSON.parse(user);
			var what=false;
			for(var i=0;i<user.length;i++){
				if(user[i].name==$("#text").val() && user[i].pwd==$("#password").val()){
					$("#prompt").html("");
					alert("登录成功！");
					what=true;
				}
			}
			if(!what){
				$("#prompt").html("*密码或用户名输入有误");
				$("#prompt3").html("");
			}
		}
		else{
			$("#prompt").html("*不存在用户, 请先注册!");
			$("#prompt3").html("");		
		}
	})
})

