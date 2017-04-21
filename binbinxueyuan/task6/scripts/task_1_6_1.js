//点击"左侧入"在左侧加入span
function leftIn(){
	var leftin = document.getElementById("left-in");
	leftin.onclick = function(e){
		e.preventDefault();
		if (document.getElementById("txt").value=="") {
			alert("请输入内容");
		}else{
			var dvtxt = document.getElementById("dv-txt");
			var artxt = document.getElementById("txt").value.toString().split(/[,_，;；\u0020]/);
			for (var i = 0; i < artxt.length; i++) {
				var span = document.createElement("span");
				span.className="number";
				dvtxt.insertBefore(span,dvtxt.childNodes[i]);
				span.innerHTML = artxt[i];
			}
		}
	}
}
//点击"右侧入"在右侧加入span
function rightIn(){
	var rightin = document.getElementById("right-in");
	rightin.onclick = function(e){
		e.preventDefault();
		if (document.getElementById("txt").value=="") {
			alert("请输入内容");
		}else{
			var dvtxt = document.getElementById("dv-txt");
			var artxt = document.getElementById("txt").value.toString().split(/[,_，;；\u0020]/);
			for (var i = 0; i < artxt.length; i++) {
				var span = document.createElement("span");
				span.className="number";
				dvtxt.insertBefore(span,dvtxt.childNodes[length-1]);
				span.innerHTML = artxt[i];
			}
		}
	}
}
//点击"左侧出"在左侧删除span
function leftOut(){
	var leftout = document.getElementById("left-out");
	leftout.onclick = function(e){
		e.preventDefault();
		var dvnumbersp = document.getElementById("dv-txt").getElementsByTagName("span");
		if (confirm("确认删除"+dvnumbersp[0].innerHTML+"吗？")) {
			dvnumbersp[0].remove();
		}else{
			alert("取消删除");
		}
	}
}
//点击"右侧出"在右侧删除span
function rightOut(){
	var rightout = document.getElementById("right-out");
	rightout.onclick = function(e){
		e.preventDefault();
		var dvnumbersp = document.getElementById("dv-txt").getElementsByTagName("span");
		if (confirm("确认删除"+dvnumbersp[dvnumbersp.length-1].innerHTML+"吗？")) {
			dvnumbersp[dvnumbersp.length-1].remove();
		}else{
			alert("取消删除");
		}
	}
}
/*查询按钮。思路：首先遍历得到方框数组，然后得到查询内容的字符串长度，对方框数组进行for循环，
在每个循环内首先判断该方框内字符串长度与查询内容的字符串长度大小。当前者小于后者，直接进行下一轮循坏；当前者等于后者，判断字符串是否相等；
当前者大于后者，在嵌套一个for循环，对该方框内字符串分别截取查询内容的字符串长度的字符串与其比较，一旦相同，结束循环。*/
function searchSp(){
	var searchsp = document.getElementById("search");
	searchsp.onclick = function(e){
		e.preventDefault();
		var spannum = document.getElementById("dv-txt").getElementsByTagName("span");
		var lengthtxt = document.getElementById("inp-search").value.toString().length;
		for (var i = 0; i < spannum.length; i++) {
			spannum[i].style.background = "#FE0102";
			var lengthspani = spannum[i].innerText.length;
			if (lengthspani < lengthtxt) {
				continue;
			} else if (lengthspani == lengthtxt) {
				if (document.getElementById("inp-search").value.toString() == spannum[i].innerText){
					spannum[i].style.background = "#B0E11E";
					break;
				} else {
					continue;
				}
			} else {
				var num = lengthspani - lengthtxt + 1;
				for (var j = 0; j < num; j++) {
					if (document.getElementById("inp-search").value.toString() == spannum[i].innerText.slice(j,j+lengthtxt)) {
						spannum[i].style.background = "#B0E11E";
						break;
					} else {
						continue;
					}
				}
			}
		}
	}
}
//点击span删除其本身
function spanOut(){
	var dvnumber = document.getElementById("dv-txt");
	dvnumber.addEventListener("click",function(e){
		//兼容火狐浏览器
		var event = window.event || e;
		if(event.target.nodeName.toLowerCase()=="span"){
		    dvnumber.removeChild(event.target);
		}
	})
}
/*使用此函数可以对页面加载完成后的span元素实现点击本身被删除的效果，但对新加入的span元素不能达到该效果，
因为dvnumbersp是在页面加载完成后就完成了统计。*/
/*function spanOut(){
	var dvnumbersp = document.getElementById("dv-number").getElementsByTagName("span");
	for (var i = 0; i < dvnumbersp.length; i++) {
		dvnumbersp[i].onclick = function(e){
			e.preventDefault();
			this.parentNode.removeChild(this);
		}
	}
}*/
window.onload = function(){
	leftIn();
	rightIn();
	leftOut();
	rightOut();
	searchSp();
	spanOut();
}