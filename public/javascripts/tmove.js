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
var lilen = 0;		// li的数量

/* +++++++++++ 推荐的HTML结构
 	<div id='wrap'>
		<ul id='wrapul'>
			<li>111111111111</li>
			<li>222222222222</li>
			<li>333333333333</li>
			<li>444444444444</li>
			<li>555555555555</li>
			<li>666666666666</li>
			<li>777777777777</li>
		</ul>
	</div>

	+++++++++ 调用：
	var wrapul = document.getElementById('wrapul');
	var lilen = wrapul.getElementsByTagName('li').length;
	// 实例化滑动
	var move = new tMove(wrapul, lilen);

	+++++++++ CSS:
	#wrap {width: 100vw;height: 50vh;position: relative;margin: 10vh 0;background: #fff;overflow: hidden;}
	#wrap>ul {width: 700%;height: 100%;position: relative;transition: .3s linear;line-height: 50vh;}
	#wrap>ul::after {content: '';display: block;clear: both;}
	#wrap>ul>li {width: 14.28%;height: 100%;float: left;text-align: center;vertical-align: baseline;}
*/
function tMove(_elem, _lilen){
	this.elem = _elem;		// 滑动的元素 ul
	this.lilen = _lilen;	// 滑动元素儿子 li 的数量

	elem = this.elem;
	lilen = this.lilen;
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
		// 记录开始的位置
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
		var offleft = Math.abs(nowX - startX) >= width/6 ? 1 : 0;
		var remainLen = width - Math.abs(offset);		// 剩余位移量
		var marginLeft = parseInt(that.getStyleFn(elem, 'margin-left'));
		// console.log('offleft: ', offleft);
		// console.log('remainLen: ', remainLen);
		// console.log('marginLeft: ', marginLeft);
		// console.log('offset: ', offset);
		
		if(move > 0){
			// console.log('手指向右>>滑');
			if(offleft){	//滑动距离超过屏幕1/6宽度
				if(marginLeft >= 0){		// 超出反弹
					elem.style.marginLeft = '0';
					return
				}
				elem.style.marginLeft = oldLeft + offset + remainLen + 'px';

			}else{	//滑动距离小于屏幕1/6宽度
				elem.style.marginLeft = oldLeft + 'px';
			}

		}else if(move < 0){
			// console.log('手指向左<<滑');
			if(offleft){	//滑动距离超过屏幕1/6宽度
				if(marginLeft <= -(lilen-1)*width){		// 超出反弹
					elem.style.marginLeft = -(lilen-1)*width + 'px';
					return
				}
				elem.style.marginLeft = oldLeft + offset - remainLen + 'px';

			}else{	//滑动距离小于屏幕1/6宽度
				elem.style.marginLeft = oldLeft + 'px';
			}
 
		}
		// 消除抖动
		// 防止上次滑动未结束,再次滑动造成的bug
		setTimeout(function(){
			marginLeft = parseInt(that.getStyleFn(elem, 'margin-left'));
			for(var i=0; i<uli.length; i++){
				
				if(marginLeft >= 0){		// 超出反弹
					elem.style.marginLeft = '0';
					return
				}
				if(marginLeft <= -(lilen-1)*width){		// 超出反弹
					elem.style.marginLeft = -(lilen-1)*width + 'px';
					return
				}
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
