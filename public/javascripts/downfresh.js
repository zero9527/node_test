/**
 * 移动端下拉刷新函数
 * @param {[type]} [varname] [description]
 */
var _elem;
var _elemStyle;
var startY, moveY, endY;
var len = 0;
var _callback;
/**
 * 用法：
   <script src='javascripts/downfresh.js'></script>
 * window.onload = function(){
		var elem = document.documentElement;
		var fresh = new downFresh(elem, function(res){
			// 到顶部
			if(res.offTop > 0){
				console.log(res);
			}
			// 可以刷新了
			if(res.offTop == 60){
				console.log('可以刷新了');
			}
		});
	}
 */
function downFresh(elem, callback){
	this.elem = elem;				// 需要下拉刷新的容器
	_callback = callback;		// 回调函数
	_elem = this.elem;
	this.init();					// 初始化
}

downFresh.prototype = {
	constructor: downFresh,
	init: function(){
		// 指定that指向
		var that = downFresh.prototype;
		// 容器原有的行内样式
		_elemStyle = _elem.getAttribute('style');
		// 监听滑动事件
		_elem.addEventListener('touchstart',that.tstart);
		_elem.addEventListener('touchmove',that.tmove);
		_elem.addEventListener('touchend',that.tend);
	},
	// touchstart函数
	tstart: function(e){
		// 指定that指向
		var that = downFresh.prototype;
		startY = e.changedTouches[0].pageY;
		// console.log('_elem.scrollTop: ',_elem.scrollTop);
		if(_elem.scrollTop == 0){
			// console.log('到顶部了: ',e);
		}
		
	},
	// touchmove函数
	tmove: function(e){
		// 指定that指向
		var that = downFresh.prototype;
		moveY = e.changedTouches[0].pageY;
		len = moveY - startY;
		// 最大300/5的距离
		len = len > 180 ? 180 : len;
		if(len >= 0 && _elem.scrollTop == 0){
			_elem.setAttribute('style',
				_elemStyle + 'transition:0s ease;transform: translateY('+ len/3 +'px)'
			);
		}
	},
	// touchend函数
	tend: function(e){
		// 指定that指向
		var that = downFresh.prototype;
		// endY = e.changedTouches[0].pageY;
		if(len >= 100){
			len = 180;
			_elem.setAttribute('style',
				_elemStyle + 'transition:.3s ease;transform: translateY('+len/3+'px)'
			);
			setTimeout(function(){
				_elem.setAttribute('style',
					_elemStyle + 'transition:.3s ease;transform: translateY(0)'
				);
			},0);
		}else{

			_elem.setAttribute('style',
				_elemStyle + 'transition:.3s ease;transform: translateY(0)'
			);
		}
		// 手指上滑
		if(startY > moveY){
			len = 0;
			_elem.setAttribute('style',
				_elemStyle + 'transition:.3s ease;transform: translateY(0)'
			);
		}else if(startY <= moveY && _elem.scrollTop != 0){
			// 手指下滑但未到达顶部
			len = 0;
			_elem.setAttribute('style',
				_elemStyle + 'transition:.3s ease;transform: translateY(0)'
			);
		}
		// 回调
		_callback({offTop:len/3});
		// console.log(e);
	}
}