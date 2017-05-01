var basic_number = 1;
var transitionNumber = 0;
var block = document.getElementById("block");
var foo = (function CoolModule(){
  function goTop(){
    var top = parseInt(window.getComputedStyle(block,null).top);
    if (top-30<0) {
      alert("已到达边界");
    } else {
      block.style.top = (top-30) +"px"; 
    }
  }
  function goRight(){
    var left = parseInt(window.getComputedStyle(block,null).left);
    if (left+30>270) {
      alert("已到达边界");
    } else {
      block.style.left = (left+30) +"px"; 
    }
  }
  function goBottom(){
    var top = parseInt(window.getComputedStyle(block,null).top);
    if (top+30>270) {
      alert("已到达边界");
    } else {
      block.style.top = (top+30) +"px"; 
    }
  }
  function goLeft(){
    var left = parseInt(window.getComputedStyle(block,null).left);
    if (left-30<0) {
      alert("已到达边界");
    } else {
      block.style.left = (left-30) +"px"; 
    }
  }
  function tunTopGo(){
    block.style.transform = "rotate(-90deg)";
    basic_number = 0;
  }
  function tunRightGo(){
    block.style.transform = "rotate(0deg)";
    basic_number = 1;
  }
  function tunBottomGo(){
    block.style.transform = "rotate(90deg)";
    basic_number = 2;
  }
  function tunLeftGo(){
    block.style.transform = "rotate(180deg)";
    basic_number = 3;
  }
  function tunLeft(){
    if (basic_number == 0) {
      block.style.transform = "rotate(180deg)";
      basic_number = 3;
    } else if (basic_number == 1) {
      block.style.transform = "rotate(-90deg)";
      basic_number = 0;
    } else if (basic_number == 2) {
      block.style.transform = "rotate(0deg)";
      basic_number = 1;
    } else {
      block.style.transform = "rotate(90deg)";
      basic_number = 2;
    }
  }
  function tunRight(){
    if (window.basic_number == 0) {
      block.style.transform = "rotate(0deg)";
      basic_number = 1;
    } else if (window.basic_number == 1) {
      block.style.transform = "rotate(90deg)";
      basic_number = 2;
    } else if (window.basic_number == 2) {
      block.style.transform = "rotate(180deg)";
      basic_number = 3;
    } else {
      block.style.transform = "rotate(-90deg)";
      basic_number = 0;
    }
  }
  function tunBac(){
    if (basic_number == 0) {
      block.style.transform = "rotate(90deg)";
      basic_number = 2;
    } else if (basic_number == 1) {
      block.style.transform = "rotate(180deg)";
      basic_number = 3;
    } else if (basic_number == 2) {
      block.style.transform = "rotate(-90deg)";
      basic_number = 0;
    } else {
      block.style.transform = "rotate(0deg)";
      basic_number = 1;
    }
  }
  return {
    goTop:goTop,
    goRight:goRight,
    goBottom:goBottom,
    goLeft:goLeft,
    tunTopGo:tunTopGo,
    tunRightGo:tunRightGo,
    tunBottomGo:tunBottomGo,
    tunLeftGo:tunLeftGo,
    tunLeft:tunLeft,
    tunRight:tunRight,
    tunBac:tunBac
  }
})();
//4.判定旋转方向还是前进的函数
function action(str){
  if (str == "TUN LEF") {
    foo.tunLeft();
  } else if (str == "TUN RIG") {
    foo.tunRight();
  } else if (str == "TUN BAC") {
    foo.tunBac();
  } else if (str == "GO") {
    if (basic_number == 0) {
      foo.goTop();
    } else if (basic_number == 1) {
      foo.goRight();
    } else if (basic_number == 2) {
      foo.goBottom();
    } else {
      foo.goLeft();
    }
  } else if (str == "TRA TOP") {
    foo.goTop();
  } else if (str == "TRA RIG") {
    foo.goRight();
  } else if (str == "TRA BOT") {
    foo.goBottom();
  } else if (str == "TRA LEF") {
    foo.goLeft();
  } else if (str == "MOV TOP") {
    foo.tunTopGo();
    foo.goTop();
  } else if (str == "MOV RIG") {
    foo.tunRightGo();
    foo.goRight();
  } else if (str == "MOV BOT") {
    foo.tunBottomGo();
    foo.goBottom();
  } else if (str == "MOV LEF") {
    foo.tunLeftGo();
    foo.goLeft();
  } else {
    alert("请输入正确指令");
  }
}
//6.对象事件的兼容
function addEvent(element, type, handler) {
  if (element.addListener) {
    element.addListener(type, handler.false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
//7.绑定鼠标点击事件
var btn = document.getElementById("submit");
addEvent(btn, "click", function() {
  if (transitionNumber<1) {
    transitionNumber++;
    var order = document.getElementById("order").value.toUpperCase();
    action(order);
  } else {
    return false;
  }
})
addEvent(window, "transitionend", function() {
  transitionNumber--;
})
