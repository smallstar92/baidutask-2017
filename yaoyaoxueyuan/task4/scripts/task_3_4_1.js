/*
*思路：1.点击鼠标时首先判定要执行的命令：旋转还是前进。
2.对于旋转命令，通过设立四个不同的类，在下达命令后，通过给目标方框绑定不同的类来达到旋转效果。
针对旋转命令和类之间的绑定，不能只是通过简单的一一对应来绑定；而是应该设置一个数标，
下达不同命令时数标增加的数量不同，再通过数标除以4的余数来选择类名数组中正确的类名。
3.对于前进命令：首先判定是否已到边界，如果未到边界在前进。
判定是否达到边界：为初始方框设置两个初始数标basic_x和basic_y，对应td数组的索引值和tr数组的索引值，
则索引值在数组范围内为未越界，否则越界。前进只需将前进方向上加一索引值的方框元素绑定原来小方框的类名即可，
同时，要注意为前一个小方框接触绑定类名。
*/
//1.定义初始小方块
var tr = document.getElementsByTagName("tr");
var basic = tr[1].getElementsByTagName("td")[0];
basic.className = "block-right";
var basic_x = 0;
var basic_y = 1;
//2.定义一个初始数标，用于判定方向
var basic_number = 1;
var class_name = ["block-top","block-right","block-bottom","block-left"];
//3.定义一个数组，用于小方块前进
var go_dir = [
  [0,-1],
  [1,0],
  [0,1],
  [-1,0]
]
//4.判定旋转方向还是前进的函数
function action(str){
  if (str == "TUN LEF") {
  	basic_number += 3;
  	basic.className = class_name[basic_number % 4];
  } else if (str == "TUN RIG") {
  	basic_number += 1;
  	basic.className = class_name[basic_number % 4];
  } else if (str == "TUN BAC") {
  	basic_number += 2;
  	basic.className = class_name[basic_number % 4];
  } else if (str == "GO") {
  	var x = go_dir[class_name.indexOf(basic.className)][0];
  	var y = go_dir[class_name.indexOf(basic.className)][1];
  	Go(x,y);
  } else {
  	alert("请输入正确指令");
  }
}
//5.定义前进函数
function Go(x,y){
  if (basic_x+x<0||basic_x+x>9||basic_y+y<1||basic_y+y>10) {
  	alert("已到边界，请转向");
  } else {
  	var name = basic.className;
  	basic_x = basic_x+x;
  	basic_y = basic_y+y;
  	basic.className = null;
  	basic = tr[basic_y].getElementsByTagName("td")[basic_x];
  	basic.className = name;
  	return basic_x;
  	return basic_y;
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
	var order = document.getElementById("order").value.toUpperCase();
action(order);
});
