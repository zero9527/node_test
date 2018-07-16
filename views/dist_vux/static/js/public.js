
//设置字体自适应大小
// !function (doc, win) {
// 	var docEl = doc.documentElement,
// 	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 	recalc = function () {
// 	  var clientWidth = docEl.clientWidth;
// 	  if (!clientWidth) return;
// 	  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
//       // doc.body.style.height = doc.body.clientHeight;
// 	};
//   	if (!doc.addEventListener) return;
//   	win.addEventListener(resizeEvt, recalc, false);
//   	doc.addEventListener('DOMContentLoaded', recalc, false);
// }(document, window);


/**
 * 获取网址（解决在js文件中无法使用thinkPHP的大U方法的问题）
 * @param {string} [_home] [Home 或 Coms]
 * @param {string} [_url] [模块，如 Index/index]
 */ 
var getURL = function (_home, _url){
    var href = location.href;
    var homeurl, homeindex;
    // 默认首页
    _url = _url || 'Index/index';
    // 获取 Home 或 Coms 的下标
    if(href.indexOf(_home) > -1){
        homeindex = href.indexOf(_home) + _home.length;
    }
    homeurl = href.substring(0, homeindex) + '/' + _url;
    return homeurl;
}

/**
 * [getQuery 获取url参数]
 * @return {[object]} [返回的参数键值对组成的对象]
 */
var getQuery = function (){
    var obj = {};   // 返回的数据
    var arr = [];   // 存放&分割的参数组
    // 获取URL ? 后的部分
    var param = location.search.substr(1);
    // console.log('param: ',param);
    // 多个参数
    if(param.indexOf('&') > -1){
        arr = param.split('&');

    }else if(param.indexOf('&') == -1){
        // 一个参数
        obj[param.split('=')[0]] = param.split('=')[1];
    }
    // 将参数转为键值对的形式返回
    arr.forEach(function(value, key){
        // 自动去重
        obj[value.split('=')[0]] = value.split('=')[1];
    })
    // 返回参数键值对组成的对象
    return obj;
}
/**
 * [isWX 判断是否微信环境]
 * @return {[type]} [description]
 */
var isWX = function(){
    var ua = navigator.userAgent.toLowerCase();
    return (ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false);
}

// 验证价格
var moneyCheck = function(val){
    return /^\d+([\.]{1}[0-9]+){0,1}$/.test(val);
}

//验证特殊字符
var specailCheck = function(val){
    return /^[`~!@#$^&*()=|{}':;',\[\].<>/?~！@#￥……&*（）——|{}【】\s‘；：”“'。，、？]$/.test(val)
}
//验证手机号码
var phoneCheck = function(val){
    return /^1[3,4,5,6,7,8]\d{9}$/.test(val)
} 
//验证email
var emailCheck = function(val){
    return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val)
}
//验证中文
var chineseCheck = function(val){
    return /^[\u4e00-\u9fa5]{2,255}$/.test(val);
}
//验证昵称
var nameCheck = function(val){
    return /^[\w\-_\u4e00-\u9fa5]{1,255}$/.test(val);
}
//验证银行卡号
var bankCheck = function(val){
    return /^([1-9]{1})(\d{14}|\d{18})$/.test(val);
}
//身份证验证
var idCheck = function(val){
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
}
//去空格
var trimFn = function(str){
    return str.replace(/^(\s)|(\s*)/g,'');
}

// 数字千位分割 默认以逗号，千位分割
function splitStr(str,zifu=",", num=3){
    var iNum = str.length % num; 
    var prev = ''; 
    var iNow = 0; 
    var temp = ''; 
    var arr = []; 
    if (iNum != 0){ 
        prev = str.substring(0, iNum); 
        arr.push(prev); 
    } 
    str = str.substring(iNum); 
    for (var i = 0; i < str.length; i++){ 
        iNow++; 
        temp += str[i]; 
        if (iNow == num && temp){ 
            arr.push(temp); 
            temp = ''; 
            iNow = 0; 
        } 
    } 
    return arr.join(zifu); 
}
// 使用  splitStr("1230215", "-", 5) //分别对应字符串， 分割符， 位数


//时间戳转换
var getLocalTime = function (_time) {
    /*
        _time 时间戳（ms）,后台传来的单位是s，需要乘1000
        个位数时加 '0', 统一位数
     */ 
    _time = Number(_time)*1000;
    // console.log('_time: ',_time);
    var localetime = new Date(_time);
    var year = localetime.getFullYear(),
        month = (localetime.getMonth()+'').length == 1 
          ? +('0' + localetime.getMonth())+1
          : localetime.getMonth()+1,
        date = (localetime.getDate()+'').length == 1
          ? '0' + localetime.getDate()
          : localetime.getDate(),
        hour = (localetime.getHours()+'').length == 1
          ? '0' + localetime.getHours()
          : localetime.getHours(),
        minute = (localetime.getMinutes()+'').length == 1
          ? '0' + localetime.getMinutes()
          : localetime.getMinutes(),
        second = (localetime.getSeconds()+'').length == 1
          ? '0' + localetime.getSeconds()
          : localetime.getSeconds();

    var normal = year +'/'+ month +'/'+ date + '\t' + hour +':'+ minute +':'+ second;
    if(!_time) normal = '--';
    // console.log('year + month + day + hour + minute: ', normal);
    return normal;
}
