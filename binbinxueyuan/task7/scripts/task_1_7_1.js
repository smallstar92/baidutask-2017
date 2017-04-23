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
        }
        rankarr[i].style.background = "#b0e11e";
        previous = rankarr[i];
      }
    }(i),i*500)
  }
}
//4.前序遍历
function befoerg(node){
  if (node) {
    rankarr.push(node);
    befoerg(node.firstElementChild);
    befoerg(node.lastElementChild)
  }
}
//5.中序遍历
function centerg(node){
  if (node) {
    centerg(node.firstElementChild);
    rankarr.push(node);
    centerg(node.lastElementChild)
  }
}
//6.后序遍历
function behierg(node){
  if (node) {
    behierg(node.firstElementChild);
    behierg(node.lastElementChild)
    rankarr.push(node);
  }
}
//7.按钮绑定
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
function btnCent(){
  var btncent = document.getElementById("btn-center");
  btncent.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      initialize();
      centerg(show);
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
      behierg(show);
      showerg();
    }
  }
}
window.onload = function(){
  btnBefo()
  btnCent();
  btnBehi();
}