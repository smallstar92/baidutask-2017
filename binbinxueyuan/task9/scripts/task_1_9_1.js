//1.声明需要用的全局变量;
var show = document.querySelector(".show");//获取根div层;
var rankarr = [];//声明一个数组，用于储存遍历获得的有顺序的div元素;
var previous;//声明一个变量，用于储存在显示遍历特效过程中，当前遍历到的元素;
var boole = false;//声明一个布尔值类型变量，利用布尔值的变化和if条件判断的配合，使得网页不刷新情况下前序、后序遍历及查询能够无限次进行;
var dvact;//声明一个变量，用于储存遍历之后获得的rankarr类数组，并将其转化为数组;

/*
2.初始化函数:清除元素中的“select”类名;清空rankarr数组;
用于在再次遍历时清除上一次遍历最后一个元素的特殊样式;
*/
function initialize(){
  clearClass("select");
  rankarr = [];
  if (previous) {
    previous.style.background = "#fff";
    previous.style.color = "#000";
  }
}

//3.各类按钮绑定;
/*
3-1.绑定前序遍历按钮:首先初始化;然后调用前序遍历函数befoerg;最后调用显示遍历过程函数showerg();
*/
function btnBefo(){
  var btnbefo = document.querySelector("#btn-before");
  btnbefo.onclick = function(e){
    e.preventDefault();//阻止元素鼠标点击事件的默认行为;
    if (!boole) {
      boole = true;
      initialize();
      befoerg(show);
      showerg();
    }
  }
}
/*
3-2.绑定后序遍历按钮:首先初始化;然后调用后序遍历函数behierg;最后调用显示遍历过程函数showerg();
*/
function btnBehi(){
  var btnbehi = document.getElementById("btn-behind");
  btnbehi.onclick = function(e){
    e.preventDefault();//阻止元素鼠标点击事件的默认行为;
    if (!boole) {
      boole = true;
      initialize();
      behierg(show);
      showerg();
    }
  }
}
/*
3-3.绑定查询按钮:首先初始化；然后调用前序遍历函数befoerg，以获得一个前序遍历顺序的rankarr类数组（调用后续遍历函数也可以）;
最后调用显示查询过程及结果的函数timeR;
*/
function searchSp(){
  var searchsp = document.getElementById("btn-search");
  searchsp.onclick = function(e){
    e.preventDefault();//阻止元素鼠标点击事件的默认行为;
    if (!boole) {
      boole = true;
      initialize();
      befoerg(show);
      timeR();
    }
  }
}
/*
3-4.给各div层绑定鼠标点击事件:利用addClass函数增加类名“select”,在css中对该类名设置特殊样式;
*/
function dvAct(){
  befoerg(show);
  dvact = Array.prototype.slice.call(rankarr);//将类数组转化为数组;
  dvact.forEach(function(e){
    e.onclick = function(e){
      e.preventDefault();//阻止元素鼠标点击事件的默认行为;
      e.stopPropagation();//防止事件冒泡;
      initialize();
      addClass(this,'select');
    }
  })
}
/*
3-5.绑定删除按钮:通过forEach方法遍历dvact数组,如果数组中有元素的类名包含有select,删除该元素;
*/
function btnDelete(){
  var btndelete = document.getElementById("btn-delete");
  btndelete.onclick = function(e){
    e.preventDefault();//阻止元素鼠标点击事件的默认行为;
    dvact.forEach(function (e) {
      if(e.className.indexOf("select")!==-1){
        e.remove(this);
      }
    })
  }
}
/*
3-6.绑定添加按钮:通过forEach方法遍历dvact数组,如果数组中有元素的类名包含有select,向该元素中添加内容;
*/
function btnadd(){
  var btnadd = document.getElementById("btn-add");
  btnadd.onclick = function(e){
    e.preventDefault();//阻止元素鼠标点击事件的默认行为;
    var newdiv = document.createElement("div");//创建一个div;
    var inpaddtxt = document.getElementById("inp-addtxt").value;//获取输入框中的内容
    var newdiv_txt = document.createTextNode(inpaddtxt);
    newdiv.appendChild(newdiv_txt);//将从输入框中获取的内容加入新创建的div;
    newdiv.setAttribute("class","dv-act");
    dvact.forEach(function(e){
      if (e.className.indexOf("select")!==-1) {
        e.appendChild(newdiv);
      }
    })
  }
}

//4.功能函数;
/*
4-1.前序遍历函数:主要通过函数的迭代和for循环实现遍历;数组push方法加入的顺序决定了获得的类数组是前序还是后序;
*/
function befoerg(node){
  if (node) {
    rankarr.push(node);
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      befoerg(num[i]);
    }
  }
}
/*
4-2.后序遍历函数:主要通过函数的迭代和for循环实现遍历;数组push方法加入的顺序决定了获得的类数组是前序还是后序;
*/
function behierg(node){
  if (node) {
    var num = node.children;
    for (var i = 0; i < num.length; i++) {
      behierg(num[i]);
    }
    rankarr.push(node);
  }
}
/*
4-3.显示遍历过程函数:利用for循环对获得的rankarr数组再次遍历;
使用定时器定时显示遍历到的元素（在for循环中嵌套定时器时需要注意定时器是异步进行的,
其需要的变量i不能从for循环中获得,因为for循环是同步进行,当定时器开始启动时,for循环已经遍历结束,此时for循环内的i变量值已经是最大值）
*/
function showerg(){
  for (var i = 0; i < rankarr.length; i++) {
    setTimeout(function(i){
      return function(){
        if(i == rankarr.length-1){
          boole = false;
        }
        if(previous){//如果存在previous,对其初始化;
          previous.style.background = "#fff";
          previous.style.color = "#000";
        }
        rankarr[i].style.background = "#b0e11e";
        rankarr[i].style.color = "#fff";
        previous = rankarr[i];//将本次遍历的元素赋值给previous,在下次遍历时对其进行初始化;
      }
    }(i),i*200)
  }
}
/*
4-4.显示查询过程函数:查询过程利用延时器来模拟“显示遍历过程的函数”,在使用延时器的过程中，
由于延时器可以无限次启动其内部函数，因此可以自设变量i,再配合if条件语句来达到使用定时器的时候需要的for循环效果;
查询结果通过调用searchTo函数来显示,设置定时器,在延时器遍历已经结束的时候来启动searchTo函数;
（此处与任务中所要求适时显示查询结果可能有差别，由于延时器的使用还未掌握好）
*/
function timeR(){
  var i = 0;
  var abc = rankarr[i];
  if (document.getElementById("inp-search").value=="") {
    alert("请输入查询内容");
    boole = false;
  } else {
    var timer = setInterval(function(){
      if (i < rankarr.length) {
        if (i-1>-1) {
          rankarr[i-1].style.background = "#fff";
          rankarr[i-1].style.color = "#000";//初始化上一次循环特殊显示的元素;
        }
        rankarr[i].style.background = "#b0e11e";
        rankarr[i].style.color = "#fff";//特殊显示本次循环的元素;
        i++;
      } else {//在循环结束后,初始化最后一个元素,并开始调用searchTo函数;
        boole = false;
        rankarr[i-1].style.background = "#fff";
        rankarr[i-1].style.color = "#000";
        clearInterval(timer);
        searchTo();
      }
    },100);
  }
}
/*
4-5.查询函数:利用for循环进行查询,将查询结果进行显示;
*/
function searchTo(){
  var childC = new Array();//用于储存查询到的匹配的元素;
  for (var i = 0; i < rankarr.length; i++) {
    var childA = rankarr[i].childNodes;//获取rankarr[i]的子元素;
    var childB = null;//利用下面的try……catch语句将childA的类数组转化为数组并储存;
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
        rankarr[i].style.color = "#fff";//特殊显示查询到的元素;
        childC.push(rankarr[i]);
      }
    }
  }
  if (childC.length == 0) {//显示查询后匹配的数量;
    alert("未找到相似内容");
  } else {
    alert("找到"+childC.length+"个相似内容，已标记所在区域")
  }
}
/*
4-5.增加元素类名函数:element为需要增加类名的元素,value为需要给其增加的类名;
*/
function addClass(element,value) {
    if (!element) return false;
    if (!element.className) {
        element.className = value;
    } else {
        var tempName = element.className;
        tempName += ' ';
        tempName += value;
        element.className = tempName;
    }
}
/*
4-6.删除元素类名函数:element为需要删除类名的元素,value为需要给其删除的类名;
*/
function removeClass(element,value) {
    if (element.className.indexOf(value) !== -1) {
        var tempName = element.className;
        tempName = tempName.replace(value, '');
        element.className = tempName;
    }
}
/*
4-7.初始化类名函数;
*/
function clearClass(val1) {
    dvact.forEach(function (e) {
        removeClass(e, val1);
    });
}

//5.加载函数;
window.onload = function(){
  btnBefo();
  btnBehi();
  searchSp();
  dvAct();
  btnDelete();
  btnadd();
}
