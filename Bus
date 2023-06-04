var GenerateANumberedList = function(a,b,c,d,e) { //创建自编号列表
	var f = d + 1, //结束自编号+1
	g = toString(a);
	do {
		if (g.lastIndexOf("0") == 3) {
			var b = b + a + c + e, 
			//自编号列表+自编号+空格+换行
			a = a + 1 
			//下一个自编号
		} else {
			var b = b + a + c,
			//自编号列表+自编号+空格
            			a = a + 1 
			//下一个自编号
		}
	} while ( a < f );
	console.log(b);
	window.NumberedList = b
},
DetectIfTheNumberIsPresent = function(a,b,c) { //判断是否存在
	var d = c + 1; //结束自编号+1
	do {
		if (b.indexOf(a) === -1) { 
			//如果不存在
			alert("不存在" + a + "号车！"); 
			//弹出提示框
		};
		var a = a + 1 
		//下一个自编号
	} while ( a < d )
}
