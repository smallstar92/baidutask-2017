/*
*1.全局变量;
*/
var form = document.getElementsByClassName("form")[0];
var txt = document.getElementsByClassName("txt");
/*
*2.给输入框绑定获得焦点事件和失去焦点事件;
*/
form.name.onfocus = function(){
  txt[0].style.height = "12px";
}
form.password.onfocus = function(){
  txt[1].style.height = "12px";
}
form.passwordagain.onfocus = function(){
  txt[2].style.height = "12px";
}
form.email.onfocus = function(){
  txt[3].style.height = "12px";
}
form.phone.onfocus = function(){
  txt[4].style.height = "12px";
}
form.name.onblur = namecheck;
form.password.onblur = passwordcheck;
form.passwordagain.onblur = passwordcheckagain;
form.email.onblur = emailcheck;
form.phone.onblur = phonecheck;
/*
*3.输入内容校验;
*/
//3-1.姓名校验;
function namecheck(){
  var len = form.name.value.trim();
  var ch = 0;
  var en = 0;
  for (var i = 0; i < len.length; i++) {
    if (len.charCodeAt(i)<0xFF) {
      en++;
    } else {
      ch++;
    }
  }
  var num = en+ch*2;
  if (len==null||len=="") {
    txt[0].innerHTML = "名称不能为空";
    txt[0].style.color = "red";
    form.name.style.border = "1px solid red";
    return false;
  } else if (num<4||num>16) {
    txt[0].innerHTML = "长度必须为4~16个字符";
    txt[0].style.color = "red";
    form.name.style.border = "1px solid red";
    return false;
  } else {
    txt[0].innerHTML = "名称合格";
    txt[0].style.color = "green";
    form.name.style.border = "1px solid green";
    return true;
  }
}
//3-2.密码校验;
function passwordcheck(){
  var len = form.password.value;
  var re = /^\w*\s+\w*$/;
  if (len==null||len=="") {
    txt[1].innerHTML = "密码不能为空";
    txt[1].style.color = "red";
    form.password.style.border = "1px solid red";
    return false;
  } else if (len.length<4||len.length>9) {
    txt[1].innerHTML = "密码长度必须为4~9位";
    txt[1].style.color = "red";
    form.password.style.border = "1px solid red";
    return false;
  } else if (re.test(len)) {
    txt[1].innerHTML = "密码中不能有空格";
    txt[1].style.color = "red";
    form.password.style.border = "1px solid red";
    return false;
  } else {
    txt[1].innerHTML = "密码格式正确";
    txt[1].style.color = "green";
    form.password.style.border = "1px solid green";
    return true;
  }
}
//3-3.密码确认校验;
function passwordcheckagain(){
  var password = form.password.value;
  var passwordagain = form.passwordagain.value;
  if (password==null||password=="") {
    txt[2].innerHTML = "请先填写上面的密码";
    txt[2].style.color = "red";
    form.passwordagain.style.border = "1px solid red";
    return false;
  } else if (password != passwordagain){
    txt[2].innerHTML = "密码核对有错";
    txt[2].style.color = "red";
    form.passwordagain.style.border = "1px solid red";
    return false;
  } else {
    txt[2].innerHTML = "密码核对正确";
    txt[2].style.color = "green";
    form.passwordagain.style.border = "1px solid green";
    return true;
  }
}
//3-4.邮箱校验;
function emailcheck(){
  var re = /^\w+@qq\.\w+$|^\w+@163\.\w+$|^\w+@outlook\.\w+$/;
  var email = form.email.value;
  if (email==null||email=="") {
    txt[3].innerHTML = "邮箱不能为空";
    txt[3].style.color = "red";
    form.email.style.border = "1px solid red";
    return false;
  } else if (re.test(email)) {
    txt[3].innerHTML = "邮箱格式正确";
    txt[3].style.color = "green";
    form.email.style.border = "1px solid green";
    return true;
  } else {
    txt[3].innerHTML = "邮箱格式不正确，只能用qq、163、outlook邮箱";
    txt[3].style.color = "red";
    form.email.style.border = "1px solid red";
    return false; 
  }
}
//3-5.电话号码校验;
function phonecheck(){
  var phone = form.phone.value;
  var re = /^1[3-9]\d{9}$/;
  if (phone==null||phone=="") {
    txt[4].innerHTML = "手机号码不能为空";
    txt[4].style.color = "red";
    form.phone.style.border = "1px solid red";
  } else if (!re.test(phone)) {
    txt[4].innerHTML = "请输入正确手机号码";
    txt[4].style.color = "red";
    form.phone.style.border = "1px solid red";
  } else{
    txt[4].innerHTML = "手机号码格式正确";
    txt[4].style.color = "green";
    form.phone.style.border = "1px solid green";
  }
}
/*
*4.表单总体验证;
*/
function validate_form(){
  if (namecheck()==false||passwordcheck()==false||passwordcheckagain()==false||emailcheck()==false) {
    alert("未填入信息或是必填项不正确");
    return false;
  } else {
    return true;
  }
}