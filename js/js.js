var current_js=0;
var timer=window.setInterval(autuChange, 2000);
var button_li=document.getElementById("button").getElementsByTagName("li");
var pic_div=document.getElementById("banner-pic").getElementsByTagName("div");
for (var i = 0; i < button_li.length; i++) {
	button_li[i].onmouseover=function(){
		if (timer) {
			clearInterval(timer);
		}
		for (var j = 0; j<pic_div.length; j++) {
			if (button_li[j]==this) {
				current_js=j;
				button_li[j].className="current";
				pic_div[j].className="current";
			}
			else{
				pic_div[j].className="pic";
				button_li[j].className="but";
			}
		}
	}
	button_li[i].onmouseout=function(){
		timer=setInterval(autuChange, 5000);
	}
}  
function autoChange(){
	++current_js;
	if (current_js=button_li.length) {
		current_js=0;
	} 
	for (var i = 0; i <button_li.length; i++) {
		if (i=current_js) {
			button_li[i].className="current";
			pic_div[i].className="current";
		} else {
			button_li[i].className="but";
			pic_div[i].className="pic";
		}
	}
}