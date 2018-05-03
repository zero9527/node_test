/*
	懒加载函数封装
*/
var lazyLoad = function(imgElem, fallback){
	this.imgElem = imgElem;
	this.src = [];
	this.fallback = fallback;

	this.init();
}

lazyLoad.prototype = {
	constructor: lazyLoad,
	init: function(){
		var that = this;
		for(var i=0; i<that.imgElem.length; i++){
			var datasrc =  that.imgElem[i].getAttribute('data-src')
			that.src.push(datasrc);
		}	
		// console.log(that.src);
		
		for(var i=0; i<that.imgElem.length; i++){
			;(function(i){
				setTimeout(function(){
					that.fallback(that.src[i], i);
					that.imgElem[i].setAttribute('src', that.src[i]);
				},500*i);
			})(i);
		}
		
	}
}