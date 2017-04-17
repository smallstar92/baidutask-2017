/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
	var dataFrom=document.getElementById("source").getElementByTagName("li");
	var data=new Array();
	for (var i = 0; i < dataFrom.length; i++) {
		if (dataFrom[i].innerHTML.slice(2,3)="成"){
			data[i][0]=dataFrom[i].innerHTML.slice(0,2);
			data[i][1]=Number(dataFrom[i].innerHTML.slice(-5,-7));
		}else{
			data[i][0]=dataFrom[i].innerHTML.slice(0,3);
			data[i][1]=Number(dataFrom[i].innerHTML.slice(-5,-7));
		}
	}
	/*
	data = [
	["北京", 90],
	["北京", 90]
	……
	]
	*/
	console.log(data);
	return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
	data.sort(function(a,b){
		return a[1]-b[1];
	})
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	var reSort=document.getElementById('resort');
	for (var i = 0; i < data.length; i++) {
		var li=document.createElement('li');
		li.innerHTML="第一名："+data[i][0]+";成绩："+"<b>"+data[i][1]+"</b>";
		reSort.append(li);
	}
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}

function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
	var sortBtn=document.getElementById('sort-btn');
	sortBtn.onclick=function(){
		btnHandle();
	};
}

init();