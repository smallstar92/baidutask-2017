function validate_required(field,alerttxt){
  var txtchecked = document.getElementById("txt-checked");
  var username = document.getElementById("user-name");
  var len = field.value.trim();
  var ch=0;
  var en=0;
  for (var i = 0; i < len.length; i++) {
  	if (len.charCodeAt(i)<0xFF) {
  	  en++;
  	} else {
  	  ch++;
  	}
  }
  var num = ch*2+en;
  if (field.value==null||field.value=="") {
  	txtchecked.innerHTML = alerttxt;
  	txtchecked.style.color = "red";
  	username.style.border = "2px solid red";
  	return false;
  } else if(num<4||num>16) {
  	txtchecked.innerHTML = "长度为4~16个字符";
  	txtchecked.style.color = "red";
  	username.style.border = "2px solid red";
  	return false;
  } else {
   	txtchecked.innerHTML = "名称格式正确";
  	txtchecked.style.color = "green";
  	username.style.border = "2px solid green";
  	return true;
  }
}
function validate_form(){
  var form = document.getElementById("form");
  if (validate_required(form.name,"姓名不能为空!")==false) {
  	return false;
  } else {
  	return true;
  }
}