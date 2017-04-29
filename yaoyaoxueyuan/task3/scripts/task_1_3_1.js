//1.点击单选框显示不同模块;
function schoolShow(){
  document.getElementById("wrap-school").style.display = "block";
  document.getElementById("wrap-work").style.display = "none";
}
function workShow(){
  document.getElementById("wrap-school").style.display = "none";
  document.getElementById("wrap-work").style.display = "block";
}
//2.动态添加选项函数；
function schoolForCity(){
  var schoolgroup = [
    ["北京大学","清华大学","中国人民大学","北京理工大学"],
    ["上海交通大学","同济大学","复旦大学","华东大学"],
    ["南京大学","东南大学","南京理工大学","南京航空航天学院"]
  ]
  var selectedgroup = schoolgroup[document.getElementsByClassName("form")[0].city.selectedIndex-1];
  var school = document.getElementsByClassName("form")[0].school;
  for (var i = 0; i < selectedgroup.length; i++) {
  	school[i+1] = new Option(selectedgroup[i],selectedgroup[i]);
  }
}
//3.给各元素绑定事件
document.getElementsByClassName("choice")[0].onclick = schoolShow;
document.getElementsByClassName("choice")[1].onclick = workShow;
document.getElementsByClassName("form")[0].city.onchange = schoolForCity;