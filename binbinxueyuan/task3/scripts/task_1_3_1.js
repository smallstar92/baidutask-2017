/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
	var dataFrom = document.getElementById("source").getElementsByTagName("li");
	var data=new Array();
	for (var i = 0; i < dataFrom.length; i++) {
		if (dataFrom[i].innerText.slice(2,3)=="成"){
			var name = dataFrom[i].innerText.slice(0,2);
			var score = parseInt(dataFrom[i].getElementsByTagName("b")[0].innerHTML);
		}else{
			var name = dataFrom[i].innerText.slice(0,3);
			var score = parseInt(dataFrom[i].getElementsByTagName("b")[0].innerHTML);
		}
		data.push([name,score]);
	}
	return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
	data.sort(function(a,b){
		return b[1]-a[1];
	});
	return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	for (var i = 0; i < data.length; i++) {
		var reSort = document.getElementById("resort");
		var li = document.createElement("li");
		reSort.appendChild(li);
		li.innerHTML = "第"+[i+1]+"名："+data[i][0]+";成绩："+"<b>"+data[i][1]+"</b>";
	}
}

function btnHandle() {
	var aqiData = getData();
	aqiData = sortAqiData(aqiData);
	render(aqiData);
}

function init() {
	// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
	var sortBtn = document.getElementById("sort-btn");
	sortBtn.onclick = function() {
	document.getElementById("resort").innerHTML = null;
	btnHandle();
	}
}

window.onload = init;