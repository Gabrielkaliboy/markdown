/*-----------stepRegister-------------
* http://www.zhuhongwei.online/
* Created & Modified by zhuhongwei
* Date modified 2017-06.13
*
* Copyright  朱宏伟 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
$(function(){
	//禁用enter键自动提交表单，单页表单可以用，分步表单需要禁用enter，否则乱套
	   document.onkeydown = function(event) {    
	       var target, code, tag;    
	       if (!event) {    
	           event = window.event; //针对ie浏览器    
	           target = event.srcElement;    
	           code = event.keyCode;    
	           if (code == 13) {    
	               tag = target.tagName;    
	               if (tag == "TEXTAREA") { return true; }    
	               else { return false; }    
	           }    
	       }    
	       else {    
	           target = event.target; //针对遵循w3c标准的浏览器，如Firefox    
	           code = event.keyCode;    
	           if (code == 13) {    
	               tag = target.tagName;    
	               if (tag == "INPUT") { return false; }    
	               else { return true; }    
	           }    
	       }    
	   };   
	//根据客户的端返回的状态提示用户是否注册成功，如果用这个，那么第四步可以更改一下，将下面的容器改为第四
	//步里面的
	function Tips(message) {
	    $(".ThirdErrorMesage").css("visibility", "visible").text(message);
	}
	function hideTips() {
	    var xhideTips = setTimeout(function () {
	        $(".ThirdErrorMesage").css("visibility", "hidden")
	    }, 3000);
	}
	var v = $("#myForm").validate({
		//验证规则
		rules:{
			//用户名
			userName:{
				required:true,
				rangelength:[6,18],
				userCheck:true
			},
			//密码
			passworld:{
				required:true,
				passwordCheck:true,
				rangelength:[6,16],
			},
			//确认密码
			rePassworld:{
				required:true,
				equalTo:"#passworld"
			},
			//公司名称
			companyName:{
				required:true,
				rangelength:[4,16],
				companyName:true,
			},
			//所在地,联动效果，校验一个就行
			s_province:{
				required:true
			},
			//详细地址
			detailAddress:{
				required:true,
				detailAddress:true,
			},
			//所在行业
			detailBusiness:{
				required:true,
			},
			//联系人
			contacts:{
				required:true,
				nameCheck:true,
			},
			//联系人
			contacts:{
				required:true,
				nameCheck:true,
				rangelength:[1,16],
			},
			//请输入手机号
			phoneNumber:{
				required:true,
				isMobile:true,
			},
			//联系电话
			TelNumber:{
				required:true,
				isTel:true,
			},
			//邮箱
			email:{
				required:true,
				emailCheck:true,
			},
			//验证码
			yzm:{
				required:true,
			},
		},
		//信息提示，如果不填就是默认
		messages:{
			userName:{
				required:"请输入用户名",
				rangelength:"长度在6-18个字符",
				userCheck:"可使用字母、数字、下划线，需以字母开头"
			},
			passworld:{
				required:"请输入密码",
				rangelength:"长度在6-16个字符",
				passwordCheck:"必须同时包含字母、数字、特殊字符"
			},
			rePassworld:{
				required:"请确认密码",
				equalTo:"密码不一致"
			},
			//公司名称
			companyName:{
				required:"请输入公司名称",
				rangelength:"长度为4-16个字符",
				companyName:"只包含字母数字中文和英文状态下()",
			},
			//所在地,联动效果，校验一个就行了
			s_province:{
				required:"请选择所在省份"
			},
			//详细地址
			detailAddress:{
				required:"请输入详细地址",
				detailAddress:"仅包含汉字,英文和数字",
			},
			//所在行业
			detailBusiness:{
				required:"请选择所在行业",
			},
			//联系人
			contacts:{
				required:"请输入联系人",
				nameCheck:"仅支持中文或者英文名称",
				rangelength:"仅支持1-16个字符"
			},
			//请输入手机号
			phoneNumber:{
				required:"请输入手机号",
			},
			//联系电话
			TelNumber:{
				required:"请输入联系电话",
			},
			//邮箱
			email:{
				required:"请输入邮箱地址",
			},
			//验证码
			yzm:{
				required:"请输入验证码",
			},
		},
		//指定用什么来包裹label.error错误信息
		//wrapper: "div",
		//指定错误提示的 css 类名，可以自定义错误提示的样式。
		// errorClass: "warning",
		//在 keyup 时验证,默认值true。
		//onkeyup: true,
		//失去焦点时验证（不包括复选框/单选按钮）,默认值true。
		//onfocusout: true,
		//如果是 true 那么当未通过验证的元素获得焦点时，移除错误提示。避免和 focusInvalid 一起用。
		focusCleanup:true,
		//用其他方式替代默认的 SUBMIT
		submitHandler: function () {
			alert("Submitted, thanks!");
			//提交以后我们做个提示
			$("#stepBlockThird").slideUp("slow",function(){
				$("#stepBlockFourth").slideDown("fast");
			});
			$(".steps").eq("3").removeClass("disabled").addClass('action');
            var model = {
                userName: $("#userName").val(),//用户名
                passworld: $("#passworld").val(),//密码
                rePassworld: $("#rePassworld").val(),//确认密码
                companyName: $("#companyName").val(),//企业名称
                s_province: $("#s_province").val(),//省
                s_city: $("#s_city").val(),
                s_county: $("#s_county").val(),
                detailAddress: $("#detailAddress").val(),//详细地址
                detailBusiness: $("#detailBusiness").val(),//所属行业
                contacts: $("#contacts").val(),//联系人
                phoneNumber: $("#phoneNumber").val(),//手机号
                TelNumber: $("#TelNumber").val(),//联系电话
                email: $("#email").val()//邮箱
            };
            //
            var data = { model: JSON.stringify(model) };
            $.ajax({
                url: "",
                data: data,
                type: 'post',
                dataType: 'json',
                //超时
                //timeout:60000,
                async: true,//异步
                //根据返回的状态提示用户是否注册成功，这里可以更加优化一下，在每个
                //分步里面，当文本框失去焦点，就传值到后台进行是否重复校验，然后返回当前step里面的Errormessage
                //
                success: function (backState) {
                    if (backState == 0) {
                        var message = "注册成功，正在跳转";
                        Tips(message);
                        hideTips();
                        location.href = "/";
                    }
                    else if (backState == 2) {
                        var message = "用户名重复";
                        Tips(message);
                        hideTips();
                    }
                    else if (backState == 3) {
                        var message = "公司名重复";
                        Tips(message);
                        hideTips();
                    }
                    else if (backState == 4) {
                        var message = "验证码错误";
                        Tips(message);
                        hideTips();
                    }
                    else if (backState == 5) {
                        var message = "用户名和密码只能由字母、数字、下划线组成！";
                        Tips(message);
                        hideTips();
                    }
                    else {
                        var message = "error！";
                        Tips(message);
                        hideTips();
                    }
                    var imgNode = $("#yzm");
                    imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
                },
                error: function (XMLHttpRequest, textStatus, errorThron) {
                    console.log(XMLHttpRequest.readyState);
                }
            });
        }
	});

	//用来控制分步加载验证
	// 第一个的下一步
	$("#firstBtnNext").click(function() {
		if (v.form()) {
			$("#stepBlockFirst").slideUp("slow",function(){
				$("#stepBlockSecond").slideDown("fast");
			});
			$(".steps").eq("1").removeClass("disabled").addClass('action');
		}
	});
	// 第二个的下一步
	$("#secondBtnNext").click(function() {
		if (v.form()) {
			$("#stepBlockSecond").slideUp("slow",function(){
				$("#stepBlockThird").slideDown("fast");
			});
			$(".steps").eq("2").removeClass("disabled").addClass('action');
		}
	});


	// 第二个的上一步
	$("#secondBtnUp").click(function() {
		$("#stepBlockSecond").slideUp("slow",function(){
			$("#stepBlockFirst").slideDown("fast")
		})
		$(".steps").eq("1").removeClass("action").addClass('disabled');
	});

	// 第三个的上一步
	$("#thirdBtnUp").click(function() {
		$("#stepBlockThird").slideUp("slow",function(){
			$("#stepBlockSecond").slideDown("fast")
		})
		$(".steps").eq("2").removeClass("action").addClass('disabled');
	});

});
