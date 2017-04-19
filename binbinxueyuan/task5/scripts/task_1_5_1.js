//点击"左侧入"在左侧加入span
function leftIn(){
	var leftin = document.getElementById("left-in");
	leftin.onclick = function(e){
		e.preventDefault();
		if (isNaN(document.getElementById("inp-number").value)||document.getElementById("inp-number").value=="") {
			alert("请输入数字");
		}else if(parseInt(document.getElementById("inp-number").value)>100||parseInt(document.getElementById("inp-number").value)<10){
			alert("请输入10到100之间的数字")
		}else{
			var dvnumber = document.getElementById("dv-number");
			if (dvnumber.getElementsByTagName("span").length>60) {
				alert("最多只能有60个小框")
			}else{
			var span = document.createElement("span");
			var height = document.getElementById("inp-number").value+"px";
			span.className="number";
			dvnumber.insertBefore(span,dvnumber.childNodes[0]);
			span.setAttribute("style","height:"+height);
			}
		}
	}
}
//点击"右侧入"在右侧加入span
function rightIn(){
	var rightin = document.getElementById("right-in");
	rightin.onclick = function(e){
		e.preventDefault();
		if (isNaN(document.getElementById("inp-number").value)||document.getElementById("inp-number").value=="") {
			alert("请输入数字");
		}else if(parseInt(document.getElementById("inp-number").value)>100||parseInt(document.getElementById("inp-number").value)<10){
			alert("请输入10到100之间的数字")
		}else{
			var dvnumber = document.getElementById("dv-number");
			if (dvnumber.getElementsByTagName("span").length>60) {
				alert("最多只能有60个小框")
			}else{
			var span = document.createElement("span");
			var height = document.getElementById("inp-number").value+"px";
			span.className="number";
			dvnumber.insertBefore(span,dvnumber.childNodes[length-1]);
			span.setAttribute("style","height:"+height);
			}
		}
	}
}
//点击"左侧出"在左侧删除span
function leftOut(){
	var leftout = document.getElementById("left-out");
	leftout.onclick = function(e){
		e.preventDefault();
		var dvnumbersp = document.getElementById("dv-number").getElementsByTagName("span");
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
		var dvnumbersp = document.getElementById("dv-number").getElementsByTagName("span");
		if (confirm("确认删除"+dvnumbersp[dvnumbersp.length-1].innerHTML+"吗？")) {
			dvnumbersp[dvnumbersp.length-1].remove();
		}else{
			alert("取消删除");
		}
	}
}
//点击"冒泡排序"使span排序
function bubbleSort(){
	var bubblesort = document.getElementById("bubble-sort");
	bubblesort.onclick = function(e){
		e.preventDefault();
		var dvnumbersp = document.getElementById("dv-number").getElementsByTagName("span");
		var i = dvnumbersp.length;
		var exchangorder;
		//假设有i个元素，则在最复杂情况下要进行i-1次循环遍历，使用while循环语句共遍历了i次;
		while(i>0){
			for (var j = 0; j < i-1; j++) {
				if (dvnumbersp[j].style.height > dvnumbersp[j+1].style.height) {
					exchangorder = dvnumbersp[j].style.height;
					dvnumbersp[j].style.height = dvnumbersp[j+1].style.height;
					dvnumbersp[j+1].style.height = exchangorder;
				}
			}
			i--;
		}
	}
}
//点击span删除其本身
function spanOut(){
	var dvnumber = document.getElementById("dv-number");
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
	bubbleSort();
	spanOut();
}