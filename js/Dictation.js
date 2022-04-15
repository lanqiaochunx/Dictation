function Cor(dom){
	this.render = function(){
		dom.innerHTML = dom.innerHTML.replace(/\[([^\[\]]*)\]/g,"<input type='text' class='input form-control' data-toggle='popover' data-trigger='focus' title='答案' data-content='$1'></input>");
	};
	this.check = function(){
		var ra = 0;
		var total = $(".input").length;
		$(".input").each(function (){
			var value = $(this).val();
			var answer = $(this).attr("data-content");
			if(value == answer) {
				ra = ra + 1;
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