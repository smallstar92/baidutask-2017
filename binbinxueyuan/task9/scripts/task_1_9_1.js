//1.声明需要用的全局变量
var show = document.querySelector(".show");
var rankarr = [];
var previous;
var boole = false;
//2.初始化
function initialize(){
  rankarr = [];
  if (previous) {
    previous.style.background = "#fff";
    previous.style.color = "#000";
  }
}
//3.显示遍历效果
function showerg(){
  for (var i = 0; i < rankarr.length; i++) {
    setTimeout(function(i){
      return function(){
        if(i == rankarr.length-1){
          boole = false;
        }
        if(previous){
          previous.style.background = "#fff";
          previous.style.color = "#000";
        }
        rankarr[i].style.background = "#b0e11e";
        rankarr[i].style.color = "#fff";
        previous = rankarr[i];
      }
    }(i),i*200)
  }
}
//4.前序遍历
function befoerg(node){
  if (node) {
    rankarr.push(node);
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      befoerg(num[i]);
    }
  }
}
//5.后序遍历
function behierg(node){
  if (node) {
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      behierg(num[i]);
    }
    rankarr.push(node);
  }
}
//6.按钮绑定
function btnBefo(){
  var btnbefo = document.querySelector("#btn-before");
  btnbefo.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      initialize();
      befoerg(show);
      showerg();
    }
  }
}
function btnBehi(){
  var btnbehi = document.getElementById("btn-behind");
  btnbehi.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      initialize();
      behierg(show);//得到数组rankarr;
      showerg();
    }
  }
}
//7.查询按钮
function searchSp(){
  var searchsp = document.getElementById("btn-search");
  searchsp.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      initialize();
      befoerg(show);
      timeR();
    }
  }
}
//8.使用setInterval显示遍历效果
function timeR(){
  var i = 0;
  var abc = rankarr[i];
  if (document.getElementById("inp-search").value=="") {
    alert("请输入查询内容");
    boole = false;
  } else {
    var timer = setInterval(function(){
      if (i < rankarr.length) {
        rankarr[rankarr.length-1].style.background = "#fff";
        rankarr[rankarr.length-1].style.color = "#000";
        if (i-1>-1) {
          rankarr[i-1].style.background = "#fff";
          rankarr[i-1].style.color = "#000";
        }
        rankarr[i].style.background = "#b0e11e";
        rankarr[i].style.color = "#fff";
        i++;
      } else {
        boole = false;
        rankarr[i-1].style.background = "#fff";
        rankarr[i-1].style.color = "#000";
        clearInterval(timer);
        searchTo();
      }
    },100);
  }
}
//9.设置模糊查询。
function searchTo(){
  var childC = new Array();
  for (var i = 0; i < rankarr.length; i++) {
    var childA = rankarr[i].childNodes;
    var childB = null;
    try{
      childB = Array.prototype.slice.call(childA,0);
    }catch(ex){
      for(var j = 0;j < childA.length;j++) {
      childB.push(childA[j]);
      }
    }
    for (var k = 0; k < childB.length; k++) {
      if (childB[k].nodeType == "3"&&childB[k]!=null&&childB[k].nodeValue.indexOf(document.getElementById("inp-search").value)>-1) {
        rankarr[i].style.background = "#b0e11e";
        rankarr[i].style.color = "#fff";
        childC.push(rankarr[i]);
      }
    }
  }
  if (childC.length == 0) {
    alert("未找到相似内容");
  } else {
    alert("找到"+childC.length+"个相似内容，已标记所在区域")
  }
}
//10.给div各层绑定鼠标点击事件
var act;
function dvAct(){
  befoerg(show);
  var dvact = rankarr;
  for (var i = 0; i < dvact.length; i++) {
    dvact[i].onclick = function(e){
      for (var i = 0; i < rankarr.length; i++) {
        rankarr[i].style.background = "#fff";
      }
      e.preventDefault();
      e.stopPropagation();
      this.style.background = "#b0e11e";
      act = rankarr[i];
      return act;
    }
  }
}
function btnDelete(){
  var btndelete = document.getElementById("btn-delete");
  btndelete.onclick = function(e){
    e.preventDefault();
    act.parentNode.removeNode(act);
  }
}
window.onload = function(){
  btnBefo();
  btnBehi();
  searchSp();
  dvAct();
  btnDelete();
}