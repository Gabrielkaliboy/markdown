// 手机号码验证
jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式不正确");

// 电话号码验证    
jQuery.validator.addMethod("isPhone", function (value, element) {
    var tel = /^0\d{2,3}-?\d{7,8}$/;
    return this.optional(element) || (tel.test(value));
}, "电话号码格式不正确");

// 联系电话(手机/电话皆可)验证   
jQuery.validator.addMethod("isTel", function (value, element) {
    var length = value.length;
    var mobile = /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var tel = /^0\d{2,3}-?\d{7,8}$/;
    return this.optional(element) || (tel.test(value)) || (length == 11 && mobile.test(value));
}, "联系电话格式不正确");

//不能与原密码相同
jQuery.validator.addMethod("isRepeat", function (value, element, params) {
    var paramId = $(params).val();
    return paramId != value;
}, "不能与原密码相同");

//校验用户名字符是否合法  
jQuery.validator.addMethod("userCheck", function(value, element) {       
    return this.optional(element) || /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(value);
}, "以字母开头，可包含字母数字下划线，长度为3-16");

//对于密码的要求
jQuery.validator.addMethod("passwordCheck", function (value, element) {
    return this.optional(element) || /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,16}/.test(value);
}, "必须同时包含字母、数字、特殊字符");

//纯英文名字或者纯中文名字1-16个
jQuery.validator.addMethod("nameCheck", function (value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]{0,}$/.test(value) || /^[A-Za-z]+$/.test(value);
}, "请输入正确的中文或者英文名字");

//validate自带email验证有缺陷，我们补充一个验证
jQuery.validator.addMethod("emailCheck", function (value, element) {
    return this.optional(element) || /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, "请输入正确的邮箱地址");

//输入的只能是汉字,英文和数字，在详细地址那栏用到了
jQuery.validator.addMethod("detailAddress", function (value, element) {
    return this.optional(element) || /([^\x00-\xff]|[A-Za-z0-9_])+/.test(value);
}, "请输入正确的详细地址");
//校验上传文件的格式，后缀只能是jpg,JPG,png,PNG,gif,GIF,jpeg,JPEG,bmp,BMP
jQuery.validator.addMethod("pictureCheck", function (value, element) {
    return this.optional(element) || /^(\s|\S)+(jpg|png|JPG|PNG|gif|GIF|jpeg|JPEG|bmp|BMP)+$/.test(value);
}, "仅支持jpg、png、gif、bmp/jpeg格式");
//企业名称
jQuery.validator.addMethod("companyName", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9().\u4e00-\u9fa5]{1,16}$/.test(value);
}, "请输入正确的公司名称");
//版本号
jQuery.validator.addMethod("versions", function (value, element) {
    return this.optional(element) || /^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$/.test(value) || /^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$/.test(value);
}, "请输入正确的版本号");