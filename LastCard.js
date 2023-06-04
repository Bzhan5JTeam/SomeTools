let playerlastcard = []
LC1 = function () {
    playerlastcard.length = 0;
    $("dCardList").childNodes.forEach(item => {playerlastcard.push(item.id.substr(5))});
}
LC2 = function (){
	if(playerlastcard.length == 0){
		alert("您上一局没有选卡/您没有游玩过上一局！");
		return;}
	ResetSelectCard();
	for(var i in playerlastcard){
        SelectCard(playerlastcard[i]);}
	//playerlastcard.length = 0;
}
LC3 = function (){
	if(playerlastcard.length == 0){
		alert("您上一局没有选卡/您没有游玩过上一局！");
		return;} else {
        		alert(playerlastcard)
	}
}
//感谢Tedu666
