/**
 * 移动端滑动函数
 * @param {[type]} [varname] [description]
 */
var elem = null;
var startX = 0; 		//start时的坐标
var startY = 0;
var nowX = 0; 			//move时的实时坐标
var nowY = 0;
var oldX = 0; 			// 上次位置
var oldY = 0;
var move = 1;	//移动的方向，1为右滑，-1为左滑
var offset = 0;		//偏移距离
var oldLeft = 0;	//上次的left值

function tMove(_elem){
	this.elem = _elem;
	elem = this.elem;

	// 初始化函数
	this.init();
}
tMove.prototype = {
	constructor: tMove,
	init: function(){
		console.log(elem);
		var that = tMove.prototype;		// 方便获取其他方法
		console.log(that.getStyleFn(elem, 'margin-left'));
		this.elem.addEventListener('touchstart', that.tstartFn);
		this.elem.addEventListener('touchmove', that.tmoveFn);
		this.elem.addEventListener('touchend', that.tendFn);
	},
	/*
		touchstart 函数
	 */ 
	tstartFn: function(e){
		var that = tMove.prototype;		// 方便获取其他方法
		// console.log(that);
		e = e || window.event;
		e.preventDefault();
		console.log(e);
		oldLeft = parseInt(that.getStyleFn(elem, 'margin-left')) || 0;
		startX = e.changedTouches[0].pageX;
		startY = e.changedTouches[0].pageY;

		console.log('oldLeft: ', oldLeft);
	},
	/*
		touchmove 函数
	 */ 
	tmoveFn: function(e){
		var that = tMove.prototype;		// 方便获取其他方法
		e = e || window.event;
		nowX = e.changedTouches[0].pageX;
		nowY = e.changedTouches[0].pageY;
		// console.log('nowX-oldX: ',nowX-oldX);
		// console.log('nowY-oldY: ',nowY-oldY);

		if(nowX - oldX > 0){
			// console.log('手指向右>>滑');
			offset = Number(nowX - startX);
			move = 1;

		}else if(nowX - oldX < 0){
			// console.log('手指向左<<滑');
			offset = Number(nowX - startX);
			move = -1;
		}
		elem.style.marginLeft = oldLeft + offset + 'px';
		// 存储本次数据作为下次滑动的参考
		oldX = nowX;
		oldY = nowY;
	},
	/*
		touchend 函数
	 */ 
	tendFn: function(e){
		var uli = elem.getElementsByTagName('li');
		var that = tMove.prototype;		// 方便获取其他方法
		var width = window.innerWidth;
		// 是否超过1/5屏幕宽度
		var offleft = Math.abs(nowX - startX) >= width/5 ? 1 : 0;
		var remainLen = width - Math.abs(offset);		// 剩余位移量
		var marginLeft = parseInt(that.getStyleFn(elem, 'margin-left'));
		// console.log('offleft: ', offleft);
		// console.log('remainLen: ', remainLen);
		// console.log('marginLeft: ', marginLeft);
		// console.log('offset: ', offset);
		
		if(move > 0){
			// console.log('手指向右>>滑');
			if(offleft){	//滑动距离超过屏幕1/5宽度
				if(marginLeft >= 0){		// 超出反弹
					elem.style.marginLeft = '0';
					return
				}
				elem.style.marginLeft = oldLeft + offset + remainLen + 'px';

			}else{	//滑动距离小于屏幕1/5宽度
				elem.style.marginLeft = oldLeft + 'px';
			}

		}else if(move < 0){
			// console.log('手指向左<<滑');
			if(offleft){	//滑动距离超过屏幕1/5宽度
				if(marginLeft <= -4*width){		// 超出反弹
					elem.style.marginLeft = -4*width + 'px';
					return
				}
				elem.style.marginLeft = oldLeft + offset - remainLen + 'px';

			}else{	//滑动距离小于屏幕1/5宽度
				elem.style.marginLeft = oldLeft + 'px';
			}

		}
		// 消除抖动
		// 防止上次滑动未结束,再次滑动造成的bug
		setTimeout(function(){
			marginLeft = parseInt(that.getStyleFn(elem, 'margin-left'));
			for(var i=0; i<uli.length; i++){
				
				// console.log(Math.abs(marginLeft + i*width), width/2);
				if(Math.abs(marginLeft + i*width) <= width/2){
					// console.log('i*width: ',-i*width);
					elem.style.marginLeft = -i*width + 'px';
				}
			}
		},600)
	},
	/*
		获取 style
	 */
	getStyleFn: function(ele, attr){
		if(window.getComputedStyle){		//非IE
			return window.getComputedStyle(ele, null)[attr];
		}
		// IE
		return ele.currentStyle(attr);
	}
}
