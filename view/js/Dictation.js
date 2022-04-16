function Cor(dom){
	this.render = function(){
		var text = dom.innerHTML;
		text = text.replace(/\[([^\[\]]*)\]/g,"<input type='text' class='input form-control' data-toggle='popover' data-trigger='focus' title='答案' data-content='$1'></input>");
		text = text.replace(/\s\s\n/g,"<br>");
		dom.innerHTML = text;
		$(".input").css({"display":"inline-block","width":"5rem"});
	};
	this.check = function(){
		var ra = 0;
		var total = $(".input").length;
		$(".input").each(function (){
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
		return parseFloat((ra / total)*100).toFixed(2);
	};
	this.answer = function(a){
		if(a==true){
			$('[data-toggle="popover"]').popover();   
		}
	};
}