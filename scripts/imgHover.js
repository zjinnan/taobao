$(function(){
	$("#jnBrandList li").each(function(){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	});
	/*$("#jnBrandList").find(".imageMask").live("hover",function(){
		$(this).toggleClass("imageOver");
	});*/
	$("#jnBrandList").delegate(".imageMask","hover",function(){
		$(this).toggleClass("imageOver");
	});
})

//给每一个dom都绑定了元素
$("#myTable td").click(function(){
	$(this).css('background','red');
});
//
$("#myTable td").click(function(){
	var $clicked = $(e.target)//捕捉到触发的目标元素
		$clicked.css('background','red');
})；

//只需要给父元素绑定一次事件，通过event.target获取当前点击的元素
$("#myTable").on('click','td',function(){//on方法监听封装的方法
	$(this).css('background','red');
});


//data()
<div id="d1" data-role="page"></div>
$("#d1").data("role");
