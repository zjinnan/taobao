/*$(function(){
	var index = 0;
	$("#jnImageroll div a").mouseover(function(){
		showImg(index);
	}).eq(0).mouseover();
})*/
$(function(){
	var $imgrolls = $("#jnImageroll div a");
	$imgrolls.css("opacity","0.7");
	var len = $imgrolls.length;
	var adTimer = null;
	var index = 0;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();//默认第一个

	function showImg(index){
		var $rollobj = $("#jnImageroll");
		var $rolllist = $rollobj.find("div a");
		var newhref = $rolllist.eq(index).attr("href");
		$("#JS_imgWrap").attr("href",newhref)
						.find("img").eq(index).stop(true,true).fadeIn()//stop将未完成的动画队列清空，同时将正在执行的动画跳转到末状态
						.siblings().fadeOut();
		$rolllist.removeClass("chos").css("opacity","0.7")
				 .eq(index).addClass("chos").css("opacity","1");
	}

	//滑入  停止动画  滑出开始动画
	$("#jnImageroll").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if(index==len){index=0};
		},5000);
	}).trigger("mouseleave");//触发hover的mouseleave事件$("input").trigger("mouseleave")
})