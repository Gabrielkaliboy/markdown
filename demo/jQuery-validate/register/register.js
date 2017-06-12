$(function () {
    /*按钮切换*/
    $(".headerPersonal").click(function () {
        $(".personal").css("display", "block");
        $(".enterprise").css("display", "none");
        $(this).addClass("active");
        $(".headerEnterprise").removeClass("active");

        var imgNode = $("#getScode1");
        imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        imgNode.click(function () {
            imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        });
    });
    $(".headerEnterprise").click(function () {
        $(".personal").css("display", "none");
        $(".enterprise").css("display", "block");
        $(this).addClass("active");
        $(".headerPersonal").removeClass("active");

        var imgNode = $("#getScode2");
        imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        imgNode.click(function () {
            imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        });
    });
    //设置错误提示信息
    function Tips(message) {
        $(".personalTips").css("visibility", "visible").text(message);
    }
    function Tips2(message) {
        $(".enterpriseTips").css("visibility", "visible").text(message);
    }
    function hideTips() {
        var xhideTips = setTimeout(function () {
            $(".enterpriseTips ,.personalTips").css("visibility", "hidden")
        }, 3000);
    }
    //公司注册三级联动
    //表单验证
    $.validator.setDefaults({

        submitHandler: function (enterpriseRegisterForm) {
            //alert("提交事件!");
        }
    });
    $().ready(function () {

        var imgNode = $("#getScode1");
        imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        imgNode.click(function () {
            imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
        });
        //个人用户
        $("#personalRegisterForm").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3,
                    maxlength: 16,
                    userCheck: true,
                },
                password1: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    passwordCheck:true,
                },
                repassword1: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "#password1"
                },
                linkman1: {
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    nameCheck:true,
                },
                mobile: {
                    required: true,
                    isMobile: true
                },
                email: {
                    required: true,
                    emailCheck: true
                },
                yzm: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: "请输入用户名",
                    minlength: "用户名至少为3位",
                    maxlength: "用户名最多为16位",
                },
                password1: {
                    required: "请输入密码",
                    minlength: "长度至少为6位",
                    maxlength: "密码长度最多16位"
                },
                repassword1: {
                    required: "请再次输入密码",
                    minlength: "长度至少为6位",
                    maxlength: "长度最多为16位",
                    equalTo: "两次输入密码不一致，请重新输入"
                },
                linkman1: {
                    required: "请输入联系人姓名",
                    minlength: "长度至少为2位",
                    maxlength: "长度最多为16位"
                },
                mobile: {
                    required: "请输入手机号码",
                    isMobile: "请输入有效的手机号码"
                },
                email: {
                    required: "请输入邮箱地址",
                    email: "请输入正确的邮箱地址"
                },
                yzm: {
                    required: "请输入验证码"
                }
            },
            submitHandler: function () {//personalRegisterForm
                var model = {
                    usertype: 1,//个人
                    username: $("#username").val(),
                    password: $("#password1").val(),
                    inputtime: '',
                    province: $("#s_province").val(),
                    city: $("#s_city").val(),
                    region: $("#s_county").val(),
                    industry: 0,
                    enttype: 1,
                    datastate: 0,
                    contacts: $("#linkman1").val(),
                    mobile: $("#mobile").val(),
                    email: $("#email").val()
                };
                //yangbinjay@163.com
                var data = { model: JSON.stringify(model) };
                $.ajax({
                    url: "../User/RegisterUser?code=" + $(":input[name='yzm']").val() + "&r=111" + Math.random(),
                    data: data,
                    type: 'post',
                    dataType: 'json',
                    //timeout:60000,
                    async: true,//异步
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
                        var imgNode = $("#getScode1");
                        imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
                    },
                    error: function (XMLHttpRequest, textStatus, errorThron) {
                        console.log(XMLHttpRequest.readyState);
                    }
                });
            }
        });
        //企业用户
        $("#enterpriseRegisterForm").validate({
            rules: {
                username2: {
                    required: true,
                    minlength: 3,
                    maxlength: 16,
                    userCheck: true,
                },
                password2: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    passwordCheck: true,
                },
                repassword2: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "#password2"
                },
                companyName: {
                    required: true,
                    minlength: 4,
                    maxlength: 16,
                    companyName: true,
                },
                detailAddress: {
                    required: true,
                    minlength: 4,
                    maxlength: 16
                },
                linkman: {
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    nameCheck: true,
                },
                mobile2: {
                    required: true,
                    isMobile: true
                },
                phone2: {
                    required: true,
                    isPhone: true
                },
                email2: {
                    required: true,
                    emailCheck: true
                },
                yzm2: {
                    required: true
                }
            },
            messages: {
                username2: {
                    required: "请输入用户名",
                    minlength: "用户名至少为3位",
                    maxlength: "用户名最多为16位"
                },
                password2: {
                    required: "请输入密码",
                    minlength: "长度至少为6位",
                    maxlength: "密码长度最多16位"
                },
                repassword2: {
                    required: "请再次输入密码",
                    minlength: "长度至少为6位",
                    maxlength: "长度最多为16位",
                    equalTo: "两次输入密码不一致"
                },
                companyName: {
                    required: "请输入企业名称",
                    minlength: "长度至少为4位",
                    maxlength: "长度最多为16位",
                    companyName:"请输入正确公司名称",
                },
                detailAddress: {
                    required: "请输入详细地址",
                    minlength: "长度至少为4位",
                    maxlength: "长度最多为16位"
                },
                linkman: {
                    required: "请输入联系人姓名",
                    minlength: "长度至少为2位",
                    maxlength: "长度最多为16位"
                },
                mobile2: {
                    required: "请输入手机号码",
                    isMobile: "请输入有效的手机号码"
                },
                phone2: {
                    required: "请输入电话号码",
                    isPhone: "请输入有效的电话号码"
                },
                email2: {
                    required: "请输入邮箱地址",
                    email: "请输入正确的邮箱地址"
                },
                yzm2: {
                    required: "请输入验证码"
                }
            },
            submitHandler: function (enterpriseRegisterForm) {
                var model = {
                    usertype: 1,//
                    username: $("#username2").val(),
                    password: $("#password2").val(),
                    inputtime: '',
                    company: $("#companyName").val(),
                    province: $("#cmbProvince").val(),
                    city: $("#cmbCity").val(),
                    region: $("#cmbArea").val(),
                    address: $("#detailAddress").val(),
                    industry: $("#tradeSelect").val(),
                    enttype: 2,
                    datastate: 0,
                    mobile: $("#mobile2").val(),
                    phone: $("#phone2").val(),
                    email: $("#email2").val(),
                    contacts: $("#linkman").val(),
                };
                //yangbinjay@163.com
                var data = { model: JSON.stringify(model) };
                $.ajax({
                    url: "../User/RegisterUser?code=" + $(":input[name='yzm2']").val() + "&r=111" + Math.random(),
                    data: data,
                    type: 'post',
                    dataType: 'json',
                    async: true,//异步
                    success: function (backState) {
                        if (backState == 0) {
                            var message = "注册成功，正在跳转";
                            Tips2(message);
                            hideTips();
                            location.href = "/";
                        }
                        else if (backState == 2) {
                            var message = "用户名重复";
                            Tips2(message);
                            hideTips();
                        }
                        else if (backState == 3) {
                            var message = "公司名称重复";
                            Tips2(message);
                            hideTips();
                        }
                        else if (backState == 4) {
                            var message = "验证码错误";
                            Tips2(message);
                            hideTips();
                        }
                        else if (backState == 5) {
                            var message = "用户名和密码只能由字母、数字、下划线组成！";
                            Tips2(message);
                            hideTips();
                        }
                        else {
                            var message = "error！";
                            Tips2(message);
                            hideTips();
                        }
                        var imgNode = $("#getScode2");
                        imgNode.attr("src", "../User/SCode?height=40&r=" + Math.random());
                    },
                    error: function (XMLHttpRequest, textStatus, errorThron) {
                        console.log(XMLHttpRequest.readyState);
                    }
                });
            }
        });
    });
})
