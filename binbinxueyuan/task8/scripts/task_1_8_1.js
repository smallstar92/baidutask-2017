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
    }(i),i*500)
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
//7.查询
/*function searchSp(){
  var searchsp = document.getElementById("btn-search");
  searchsp.onclick = function(e){
    e.preventDefault();
    if (!boole) {
      boole = true;
      initialize();
      befoerg(show);
      for (var i = 0; i < rankarr.length; i++) {
        setTimeout(function(i){
          return function(){
            if(i == rankarr.length-1){
              boole = false;
            }
            if(previous){
              previous.style.background = "#fff";
              previous.style.color = "#000";
              var childA = previous.childNodes;
              var childB = null;
              try{
                  childB = Array.prototype.slice.call(childA,0);
              }catch(ex){
                  childB = new Array();
                  for(var m = 0;m < childA.length;m++) {
                      childB.push(childA[m]);
                  }
              }
              for (var j = 0; j < childB.length; j++) {
                if (childB[j].nodeName == "#text" && !/\s/.test(childB[j].nodeValue)) {
                  childB.splice(j,1);
                }
              }
              for (var k = 0; k < childB.length; k++) {
                if (childB[k].nodeName == "#text") {
                  var lengthtxt = document.getElementById("inp-search").value.toString().length;
                  var lengthdvk = childB[k].toString().length;
                  if (lengthdvk < lengthtxt) {
                    previous.style.border = "2px solid #b0e11e";
                    continue;
                  } else if (lengthdvk == lengthtxt) {
                    if (document.getElementById("inp-search").value.toString() == childB[k].toString()){
                      previous.style.background = "#b0e11e";
                      previous.style.color = "#fff";
                      previous.style.border = "2px solid #b0e11e";
                      break;
                    } else {
                      continue;
                    }
                  } else {
                    var numb = lengthdvk - lengthtxt + 1;
                    for (var l = 0; l < numb; l++) {
                      if (document.getElementById("inp-search").value.toString() == childB[k].toString().slice(l,l+lengthtxt)) {
                        previous.style.background = "#b0e11e";
                        previous.style.color = "#fff";
                        previous.style.border = "2px solid #b0e11e";
                        break;
                      } else {
                        continue;
                      }
                    }
                  }
                }
              }
            }
            rankarr[i].style.background = "#b0e11e";
            rankarr[i].style.color = "#fff";
            previous = rankarr[i];
          }
        }(i),i*500)
      }
    }
  }
}*/

function searchTo(){
  for (var i = 0; i < rankarr.length; i++) {
    var childA = rankarr[i].childNodes;
    var childB = null;
    try{
      childB = Array.prototype.slice.call(childA,0);
    }catch(ex){
      childB = new Array();
      for(var j = 0;j < childA.length;j++) {
      childB.push(childA[j]);
      }
    }
    for (var k = 0; k < childB.length; k++) {
      if (childB[k].nodeName == "#text") {
        var lengthtxt = document.getElementById("inp-search").value.toString().length;
        var lengthdvk = childB[k].toString().length;
        if (lengthdvk < lengthtxt) {
          rankarr[i].style.border = "2px solid #b0e11e";
          continue;
        } else if (lengthdvk == lengthtxt) {
          if (document.getElementById("inp-search").value.toString() == childB[k].toString()){
            rankarr[i].style.background = "#b0e11e";
            rankarr[i].style.color = "#fff";
            rankarr[i].style.border = "2px solid #b0e11e";
            break;
          } else {
            continue;
          }
        } else {
          var numb = lengthdvk - lengthtxt + 1;
          for (var l = 0; l < numb; l++) {
            if (document.getElementById("inp-search").value.toString() == childB[k].toString().slice(l,l+lengthtxt)) {
              rankarr[i].style.background = "#b0e11e";
              rankarr[i].style.color = "#fff";
              rankarr[i].style.border = "2px solid #b0e11e";
              break;
            } else {
              continue;
            }
          }
        }
      }
    }
  }
}
function searchSp(){
  var searchsp = document.getElementById("btn-search");
  searchsp.onclick = function(e){
    e.preventDefault();
    searchTo();
  }
}
window.onload = function(){
  btnBefo();
  btnBehi();
  searchSp();
}