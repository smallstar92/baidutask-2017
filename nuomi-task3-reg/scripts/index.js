function validate_requiredA(){
  var phonechecked = document.getElementById("mbphone-checked");
  var mbphone = document.getElementById("mbphone");
  var re = /^1[3-9]\d{9}$/;
  if (mbphone.value == "") {
    phonechecked.innerHTML = "手机号码不能为空";
    phonechecked.style.color = "red";
    mbphone.style.border = "2px solid red";
    return false;
  } else if (!re.test(mbphone.value)) {
    phonechecked.innerHTML = "请输入正确手机号码";
    phonechecked.style.color = "red";
    mbphone.style.border = "2px solid red";
    return false;
  } else{
    phonechecked.innerHTML = "手机号码格式正确";
    phonechecked.style.color = "green";
    mbphone.style.border = "2px solid green";
    return false;
  }
}
function validate_formA(){
  if (validate_requiredA()==false) {
  	return false;
  } else {
  	return true;
  }
}
function validate_requiredB(){
  var wordchecked = document.getElementById("word-checked");
  var word = document.getElementById("word");
  var re = /^(\w+)\s+\1$/;
  if (word.value == "") {
    wordchecked.innerHTML = "内容不能为空";
    wordchecked.style.color = "red";
    word.style.border = "2px solid red";
    return false;
  } else if (re.test(word.value)) {
    wordchecked.innerHTML = "有连续性重复出现";
    wordchecked.style.color = "red";
    word.style.border = "2px solid red";
    return false;
  } else {
    wordchecked.innerHTML = "无连续性重复";
    wordchecked.style.color = "green";
    word.style.border = "2px solid green";
    return false;
  }
}
function validate_formB(){
  if (validate_requiredB()==false) {
    return false;
  } else {
    return true;
  }
}