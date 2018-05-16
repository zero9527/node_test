var __areaFn = function(option, __CALLBACK){
	this.panel = option.panel;		// 地址选择的面板

	this.__CALLBACK = __CALLBACK;	// 回调函数
	var that = this;
	that.init();		// 初始化

}

// 原型链
__areaFn.prototype = {
	constructor: __areaFn,
	init: function(){
		var that = this;
		// 回调
		that.__CALLBACK(__areaFn.prototype);

	}, 
	// 显示地址选择面板
	showPanel: function(panel){
		var that = __areaFn.prototype;
		that.removeClass(panel, 'down');
		that.addClass(panel, 'upup');
		
	},
	// 隐藏地址选择面板
	hidePanel: function(panel){
		var that = __areaFn.prototype;
		that.removeClass(panel, 'upup');
		that.addClass(panel, 'down');
	},
	// 添加css类
	addClass: function(_el, _class){
		var _oldclass = _el.getAttribute('class');
		var _newclass;
		if(_oldclass.lastIndexOf(' ') == _oldclass.length-1){
			_newclass = _oldclass + _class;

		}else{
			_newclass = _oldclass + ' ' + _class;
		}
		_el.setAttribute('class', _newclass);
	},
	// 移除css类
	removeClass: function(_el, _class){
		var _newclass;
		var _oldclass = _el.getAttribute('class');
		if(_oldclass.indexOf(_class) > -1){
			_newclass = (_oldclass.split(_class)[0]).concat(_oldclass.split(_class)[1]);

		}else{
			_newclass = _oldclass;
		}
		_el.setAttribute('class', _newclass);
	}
}


document.addEventListener('DOMContentLoaded', function(){
	// 点击选择地区
	$(".areabtn").click(function(){
		$("#areaChoose").fadeIn('fast');
		$('.atop>p').text('');	//确定按钮不显示
		// 清空城市， 区县
		$('.ctext').text('');
		$('.atext').text('');

	})
	// 选择城市的时候判断有没有区县
	$('.city').on('click', 'p', function(){
		// console.log($('.area>p').length)
		setTimeout(function(){
			// 没有区县可选
			if($('.area>p').length <= 1){
				$('.atop>p').text('确定');

			}else{
				$('.atop>p').text('');
			}
		},0)
	})
	// 地址面板点击确定(没有区县可选时候出现)
	$('.atop>p').on('click',function(){
		var province = $('.ptext').text(),
				city = $('.ctext').text(),
				area = $('.atext').text();

		if(city.indexOf('请选择') > -1){
			noticeFn({text:'请选择一个有有效的地址！'});
			return
		}
		if(area.indexOf('请选择') > -1){
			noticeFn({text:'请选择一个有效的地址！'});
			return
		}
		$('.uaddress').text(province + ' ' + city + ' ' + area);
		$("#areaChoose").fadeOut('fast');	//关闭地区选择面板
		$('.choosebtn').hide();	// 隐藏请选择
	})
	// 点击 xx 关闭地区选择面板
	$(".close").on('click',function(){
		$("#areaChoose").fadeOut('fast');
		
		if(!$(".uaddress").text()){
			//请选择
			$('.choosebtn').show();
		}
	})
	// 点击选择省份，城市，区县
	$('.areadiv').on('click','p', function(){
		// console.log($(this).text())
		if($(this).text().indexOf('请选择') > -1){
			noticeFn({text:'请选择一个有有效的地址！'});
			return
		}
		var p = $(this).parent().find('p');
		for(var i=0; i<p.length; i++){
			p.eq(i).attr('class','');
		}
		$(this).toggleClass('selected fblue');
	})

	// 选择地区
	$(".areabtn").on("click", function(){
		$("#areaChoose").fadeIn('fast');
	});

	// 关闭地区选择，并显示到对应区域
	$(".area").on("click", 'p', function(){
		
		var province = $('.ptext').text(),
			city = $('.ctext').text(),
			area = $(this).text();
		window.__address = (!province && !city && !area) ? '请选择' : province + ' ' + city + ' ' + area;
		console.log(window.__address);
		// $(".uaddress").text( (!province && !city && !area) ? '请选择' : province + ' ' + city + ' ' + area);
		// console.log($(this).text().indexOf('请选择'));
		if($(this).text().indexOf('请选择') == -1){
			setTimeout(function(){
				$("#areaChoose").fadeOut('fast');
				$('.choosebtn').hide();
			},300);
		}

	});
})
