function Cor(){
	this.render = function(text){
		var html = text;
		html = html.replace(/\[([^\[\]]*)\]/g,"<input type='text' class='Dictation-input form-control' data-toggle='popover' data-trigger='focus' title='答案' data-content='$1'></input>");
		html = html.replace(/\s\s\n/g,"<br>");
		return html;
	};
	this.check = function(){
		var ra = 0;
		var total = $(".Dictation-input").length;
		$(".Dictation-input").each(function (){
			var value = $(this).val();
			var answer = $(this).attr("data-content");
			if(value == answer) {
				ra = ra + 1;
				$(this).css("background-color","lightgreen");
			}
			else {
				$(this).css("background-color","rgb(241,156,178)");
			}
		});
		$('[data-toggle="popover"]').popover();
		if( total > 0 ){
			return parseFloat((ra / total)*100).toFixed(2);
		}
		else{
			return("0.00");
		}
	};
	this.set = function(){
		var total = $("style").length;
		if(total>0){
			$("style").append(".Dictation-input{display:inline-block;width:5rem;}");
		}else{
			$("head").append("<style>.Dictation-input{display:inline-block;width:5rem;}</style>");
		}
	};
}