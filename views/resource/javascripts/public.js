
//设置字体自适应大小
!function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	    var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return;
        if(docEl.clientHeight/docEl.clientWidth >= 1.4){
            docEl.style.fontSize = 16 * (clientWidth / 370) + 'px';
        }else{
            docEl.style.fontSize = 16 * (clientWidth / 640) + 'px';
        }
      // doc.body.style.height = doc.body.clientHeight;
	};
  	if (!doc.addEventListener) return;
  	win.addEventListener(resizeEvt, recalc, false);
  	doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);

 
// 顶部导航栏、下拉刷新
!function(){
     
    // loading 加载等待
    var loading = document.createElement('div');
    loading.setAttribute('class', 'loadingdiv');
    // loading.innerHTML = '<div>'+
    // '<i class="am-icon-spinner am-icon-pulse am-icon-lg"></i>'+
    // '<div class="am-text-center" style="margin-top:10px;">正在加载 ...</div></div>';
    //.loadingdiv {width:30vmin;height:30vmin;display:none;position:fixed;max-width:140px;max-height:140px;left:50%;top:50%;border-radius:4px;transform:translate(-50%,-50%);color:#eee;background:rgba(0,0,0,.8);z-index: 10000;}.loadingdiv>div {width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-flow:column;}
    
    loading.setAttribute('class', 'loadingdiv');
    loading.innerHTML = '<div class="load"></div>'+
        '<p>加载中···</p>';
    //.loadingdiv{width:30vmin;height:30vmin;max-width:120px;max-height:120px;min-width:120px;min-height:120px;position:fixed;top:-60px;right:0;left:0;bottom:0;margin:auto;display:flex;flex-flow:column;align-items:center;justify-content:center;border-radius:6px;background:rgba(0,0,0,.7);box-sizing:content-box;z-index:10000;}.load{width:30px;height:30px;display:block;margin-bottom:16px;border-radius:50%;border:2px solid #999;border-right:2px solid #eee;animation:run linear 1s infinite}.loadingdiv>p{color:#fff;font-size:14px}@keyframes run{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}100%{transform:rotate(360deg)}}
    // 添加到页面
    document.body.appendChild(loading);
    // 提示框，确认取消框，loading框, navbar等的样式
    var style = document.createElement('style');
    var stylecode = '.loadingdiv{width:30vmin;height:30vmin;max-width:120px;max-height:120px;min-width:120px;min-height:120px;position:fixed;top:-60px;right:0;left:0;bottom:0;margin:auto;display:flex;flex-flow:column;align-items:center;justify-content:center;border-radius:6px;background:rgba(0,0,0,.7);box-sizing:content-box;z-index:10000;}.load{width:30px;height:30px;display:block;margin-bottom:16px;border-radius:50%;border:2px solid #999;border-right:2px solid #eee;animation:run linear 1s infinite}.loadingdiv>p{color:#fff;font-size:14px}@keyframes run{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}100%{transform:rotate(360deg)}}#noticeDiv {width:100vw;position:fixed;padding: 0 4%;top:30%;left:50%;text-align:center;margin-left:-50%;transition:.2s ease;z-index:999;transform:scale(0);z-index:9999;}#noticeDiv>span {display:inline-block;padding:10px;border-radius:4px;box-shadow:0 0 10px rgba(0,0,0,.2);}#confirmDiv {width: 80vw;max-width:400px;position:fixed;top:40%;left:50%;text-align:center;border-radius:6px;box-shadow:0 0 10px rgba(110,101,110,.2);color:#000;transform:translate(-50%,-50%);z-index:999;background:#fff;}#confirmDiv>div {padding:20px 16px;text-align:left;text-align:center;}#confirmDiv>div:nth-of-type(1){margin: 20px 0;font-size: .8rem;}#confirmdiv3 {width:100%;padding:0 !important;border-radius:0 0 6px 6px;border-top: 1px solid #a1a1a1;overflow: hidden;}#confirmdiv3::after {content:"";width:100%;height:100%;display:block;clear:both;visibility:hidden;}#confirmdiv3>span {width:50%;display:inline-block;position:relative;padding:10px 0;text-align:center;background: #eee;}#confirmtrue {float:right;color:#0d94f3;border-left: 1px solid #d9d9d9;}#confirmfalse {float:left;color:#555;}#confirmfalse:active::after,#confirmtrue:active::after {content: "";width: 100%;height: 100%;display: block;position: absolute;top: 0;left: 0;background: rgba(0,0,0,.1);}#confirmPar {width:100vw;height:100vh;display:none;position:fixed;top:0;left:0;background:rgba(0,0,0,.2);z-index:9999;}@media screen and (max-width: 379px){#noticeDiv,#confirmDiv {font-size: .7rem;}}@media screen and (min-width: 380px){.loadingdiv>p{font-size:18px;}#noticeDiv,#confirmDiv,#confirmDiv>div {font-size: 18px !important;}}#fadeshow {display: block;-webkit-animation: showload .5s forwards;animation: showload .5s forwards;}#fadehide {display: block;-webkit-animation: hideload .5s forwards;animation: hideload .5s forwards;}@-webkit-keyframes showload {from {opacity: 0;}to {opacity: 1;}}@keyframes showload {from {opacity: 0;}to {opacity: 1;}}@-webkit-keyframes hideload {from {opacity: 1;}to {opacity: 0;}}@keyframes hideload {from {opacity: 1;}to {opacity: 0;}}';
    stylecode += '.go2Top{width:12vmin;height:12vmin;line-height:12vmin;display:none;position:fixed;border-radius: 50%;bottom:10vmin;right:2vmin;text-align:center;color:#0e90d2;background:#fff;box-shadow:0px 2px 16px 0px rgba(0,0,0, .1);transform: translate3d(0,0,0);font-weight:bold;z-index:99;}.go2Top:active{box-shadow: 0px 2px 16px 0px rgba(0,0,0, .1) inset;}'
    style.innerHTML = stylecode;
    document.head.appendChild(style);

    var navbar = document.createElement('div');
    var fresh = document.createElement('div');  // 下拉刷新
    navbar.setAttribute('id', 'navbar');
    navbar.innerHTML = '<span class="backleft" onclick="history.go(-1)">&emsp;</span>'+
        '<h2>title</h2>'+
        '<a class="back2home">首页</a>';
    var fc = document.body.firstChild;
    fresh.setAttribute('id','refresh');
    fresh.setAttribute('style','width: 50px;height: 50px;line-height: 40px;position: fixed;font-size:1rem;top: 0;left:50%;padding:4px;border-radius:50%;text-align: center;transition: .3s ease-in;transform: translate(-50%,-120%);background:#f6f6f6;box-shadow:0 0 10px rgba(0,0,0,.2);z-index: 99999;');
    fresh.innerHTML = '<span style="height: 50px;display: inline-block;position: relative;margin: 0 auto;line-height: 0;"><i class="am-icon-spinner am-icon-pulse"></i><span class="refresh_text" style="line-height: 0;"></span></span>';
    // 添加到页面body下最前面
    document.body.insertBefore(navbar,fc);
    // 下拉刷新
    fc = document.body.firstChild;
    document.body.insertBefore(fresh,fc);
    // 获取title
    var title = document.getElementById('navbar').getElementsByTagName('h2');
    title[0].innerText = document.getElementsByTagName('title')[0].innerText;

    // 显示loading
    var loaddiv = document.querySelector('.loadingdiv');
    loaddiv.setAttribute('id', 'fadeshow');
    loaddiv.setAttribute('style', 'display:flex;');

    // 设置首页链接
    var homebtn = document.getElementsByClassName('back2home');
    if(location.href.indexOf('Home') > -1){
        homebtn[0].setAttribute('href', getURL('Home', 'Index/index'));
    }else if(location.href.indexOf('Coms') > -1){
        homebtn[0].setAttribute('href', getURL('Coms', 'Index/index'));
    }
}()

document.addEventListener('DOMContentLoaded', function(){
    var style = document.createElement('style');
    var noticediv = document.createElement('div');	// confirmFn
    var toastdiv = document.createElement('ul');	// toastFn
    
    style.innerHTML = `/* 确认取消提示框 */
        #_noticePar {width: 100vw;height: 100vh;display: none;position: fixed;top: 0;left: 0;background: rgba(0, 0, 0, .2);z-index: 99999;}
        #_notice_ {width: 80vw;max-width: 300px;display: none;position: absolute;top: 30vh;left: 0;right: 0;margin: 0 auto;opacity:0;border-radius: 6px;background: #fff;box-shadow: 0 0px 10px rgba(120, 120, 120, .1),0 2px 10px rgba(120, 120, 120, .1);transition: .3s ease-out;overflow: hidden;}
        #_notice_ ._title_ {padding: 14px 10px 10px;text-align: center;font-size: 20px;color: #333;line-height: 2;background: #fafafa;}
        #_notice_ ._content_ {padding: 0 20% 10px;text-align: center;color: #666;background:#fafafa;font-size: 14px;}
        #_notice_ ul::after {content: '';clear: both;display: block;visibility: visible;zoom: 1;}
        #_notice_ ul>li {width: 50%;position: relative;padding: 10px 5%;text-align: center;}
        #_notice_ ul>li:active>p, #_notice_ ul>li:hover>p {cursor: pointer;box-shadow: 1px 2px 16px rgba(0,0,0,.2) inset;}
        #_notice_ ul>.btnleft {float: left;color: #ff5722;}
        #_notice_ ul>.btnright {float: right;color: #2196F3;}
        #_notice_ ul>li>p {position:relative;line-height:2;color:#fff;border-radius:30px;background:#0d94f3;box-shadow: 1px 2px 16px rgba(0,0,0,.2);}
        #_notice_ ul>.btnleft>p {background: #ff5722;}
        /* toast提示框 */
        #_toast_ {width: 100%;position: fixed;z-index:9999;}
        #_toast_>li {width: max-content;max-width: 220px;position: fixed;padding: 6px 12px;left: 50%;transform: translateX(-50%);border-radius: 4px;text-align: center;color: #fff;background: rgba(60,60,60,.7);box-shadow: 0 0 10px rgba(120,120,120,.4);transition: .4s ease;}
        #_toast_>._toast_top {top: 0;margin-top: -50%;}
        #_toast_>._toast_middle {top: 40%;display: none;opacity: 0;}
        #_toast_>._toast_bottom {bottom: 0;margin-bottom: -50%;}`;

    noticediv.setAttribute('id', '_noticePar');
    noticediv.innerHTML = '<div id="_notice_">'+
        '<p class="_title_">提(＝。＝)示</p>'+
        '<div class="_content_">这是提示信息</div>'+
        '<ul>'+
            '<li class="btnleft"><p>取消</p></li>'+
            '<li class="btnright"><p>确定</p></li>'+
        '</ul>'+
    '</div>';

    toastdiv.setAttribute('id', '_toast_');
    toastdiv.innerHTML = '<li class="_toast_top">'+
            '<p class="_toast_text">这是top提示文字</p>'+
        '</li>'+
        '<li class="_toast_middle">'+
            '<p class="_toast_text">这是middle提示文字</p>'+
            '</li>'+
        '<li class="_toast_bottom">'+
            '<p class="_toast_text">这是bottom提示文字</p>'+
        '</li>';
    
    document.body.appendChild(noticediv);
    document.body.appendChild(toastdiv);
    document.body.appendChild(style);
})
/**
 * 确认框 confirmFn()
 * [object] option: 传入参数
 * [string] option.text: 提示文本
 * [string] option.btnleft: 左键文字（默认取消）
 * [string] option.btnright: 右键文字（默认确定）
 * [string] option.onebtn: 单按钮（知道了等等,true启用）（默认右键内容）
 * 用法：
 *  confirmFn({
        title: '发的电饭锅电饭锅',
        text: '水电费水电费水电费刚地方更符合规范化规范化',
        btnleft: '后退',
        btnright: '继续'
    }, function(res){
        console.log('res: ',res);
        if(res){
            // 确定
        }else{
            // 取消
        }
    });
    // 单按钮
    confirmFn({
        title: '更符合规范化规范化',
        text: '水电费水电费水电费刚发的电饭锅电饭锅地方',
        onebtn: true,	// 单按钮
        btnright: '知道了'
    });
*/
function confirmFn(option, callback) {
    option.btnleft = option.btnleft || '取消';		//左键文字（默认取消）
    option.btnright = option.btnright || '确定';	//右键文字（默认确定）
    var el = document.querySelector('#_notice_');	// 元素
    var title = el.querySelector('._title_');
    var btnleft = el.querySelector('.btnleft>p');	// 左键
    var btnright = el.querySelector('.btnright>p');	// 右键
    var content = el.querySelector('._content_');	// 内容

    console.log('confirm_option: ',option);
    if(option.onebtn){   // 知道了， 单按钮
        btnleft.style.display = 'none';
        btnright.style.transform = 'translateX(-60%)';
    }else{
        btnleft.style.display = 'block';
        btnright.style.transform = '';
    }
    title.innerHTML = option.title;         // 提示文本
    content.innerHTML = option.text;		// 提示描述
    btnleft.innerHTML = option.btnleft;
    btnright.innerHTML = option.btnright;
    el.parentNode.style.display = 'block';	// 蒙层
    el.setAttribute('style',
        'display:block;transform:scale(1.4);'
    );
    var int;
    clearTimeout(int);
    // 显示
    int = setTimeout(function () {
        el.style.transform = 'scale(1)';
        el.style.opacity = '1';
    }, 150)

    // 左键（取消或其他）
    btnleft.onclick = function () {
        console.log('取消');
        if(callback) callback(false);
        setTimeout(function(){
            el.style.display = 'none';
            el.style.opacity = '0';
            el.parentNode.style.display = 'none';
        },100)
    }
    // 右键（确定或其他）
    btnright.onclick = function () {
        console.log('确定');
        if(callback) callback(true);
        setTimeout(function(){
            el.style.display = 'none';
            el.style.opacity = '0';
            el.parentNode.style.display = 'none';
        },100)
    }

}


/**
 * 提示函数: toastFn
 * @params [object]	option: {配置参数}
 * @params [string] option.pos: {位置： top, middle, bottom}
 * @params [string] option.type: {类型： warn, error, yes}
 * 用法：
 * toastFn({
        text: '电饭锅有点问题',
        pos: 'top',
        type: 'warn'
    })
*/
function toastFn(option){
    option.pos = option.pos || 'top';		// top, middle, bottom
    option.type = option.type || 'yes';		// warn, error, yes
    option.time = option.time || '2000';	// 消失时间
    console.log('option: ',option);
    var _toast_ = document.querySelector('#_toast_');
    var el = _toast_.querySelector('._toast_'+option.pos);	// 元素
    var bgList = {warn: '#ff9800', error: 'red', yes: '#4caf50'};
    
    // 提示文字
    el.querySelector('._toast_text').innerText = option.text;
    switch (option.pos) {
        case 'top':	// 顶部
            setTimeout(function(){
                el.setAttribute('style',
                    'margin-top:10vh;background:'+bgList[option.type]
                );
            },0)
            if(window.toastint1){
                clearTimeout(window.toastint1);
            }
            window.toastint1 = setTimeout(function(){
                el.style.marginTop = '-50%';
            },option.time)
            break;
        case 'middle':	// 中间
            el.style.display = 'block';
            setTimeout(function(){
                el.style.opacity = '1';
                el.style.background = bgList[option.type];
            },0);
                        
            if(window.toastint2){
                clearTimeout(window.toastint2);
            }
            window.toastint2 = setTimeout(function(){
                el.style.opacity = '0';
                setTimeout(function(){
                    el.style.display = 'none';
                },0)
            },option.time)
            break;
        case 'bottom':	// 底部
            setTimeout(function(){
                el.setAttribute('style',
                    'margin-bottom:10vh;background:'+bgList[option.type]
                );
            },0)
                    
            if(window.toastint3){
                clearTimeout(window.toastint3);
            }
            window.toastint3 = setTimeout(function(){
                el.style.marginBottom = '-50%';
            },option.time)
            break;
    }
}

/**
 * 获取网址（解决在js文件中无法使用thinkPHP的大U方法的问题）
 * @param {string} [_home] [Home 或 Coms]
 * @param {string} [_url] [模块，如 Index/index]
 */ 
function getURL(_home, _url){
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
function getQuery(){
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
/**
 * [numFomat 数字格式化（金额，手机号码）]
 * @param {string/number} num [金额或手机号码]
 * @param {string} type [money: 金额，phone: 手机号码]
 * @param {string} sep [分隔符]
 * @return {string} [转换后的数值]
 * 用法：  
 *      console.log(numFomat(12111212, 'money', ','));
        console.log(numFomat(13112324678, 'phone', ' '));
 */
function numFomat(num, type, sep) {
    var dot;
    num += '';
    if(num.indexOf('.') > 0){
        // 带小数（金额）
        dot = num.substr(num.indexOf('.'));
        num = num.substr(0, num.indexOf('.'));
    }
    console.log('num: ',num);
    switch (type) {
        case 'money':
        // 价格格式化
        num = num.replace(/(\d)(?=(?:\d{3})+$)/g,'$1' + sep);
        if(dot){
            num += dot;
        }
        break;
        case 'phone':
        console.log('num.length: ',num.length);
        // 手机号码
        if(num.length != 11){
            return '手机号不是11位'
        }
        num = num.replace(/^(\d{3})(\d{4})(\d{4})/,'$1' + sep + '$2' + sep + '$3');
        break;
        default: 
        num = num;
        break;
    }
    return num
}
   
/**
 * 仿JQ的fade方法显示、隐藏函数
 * @param {对象} obj.elem 作用的元素
 *               obj.handle 隐藏(hide)或显示(show)
 *               obj.time 隐藏(hide)或显示(show)的时间
 * 调用方法：
 * 建议元素（obj.elem）使用 class ，因为后面用id的样式去覆盖（实现过渡），
 * 如果elem 使用 id, 那被替换后原来的样式将 丢 失！
 * var loaddiv = document.getElementsByClassName('loadingdiv');
 * fadeFn({elem: loaddiv[0], handle: 'show'});
 */
var fadeFn = function(obj){
    // 默认显示
    obj.handle = obj.handle || 'show';
    obj.time = obj.time || '500';

    if(obj.handle == 'show'){
        // 设置显示的id
        obj.elem.setAttribute('id', 'fadeshow');

    }else if(obj.handle == 'hide'){
        // 设置显示的id
        obj.elem.setAttribute('id', 'fadehide');
        // 延时隐藏（恢复隐藏状态）
        setTimeout(function(){
            obj.elem.setAttribute('id', '');
        },obj.time);
    }
}
/*
    生成提示框、确认取消框和loading 加载模块的页面元素
    并添加样式到页面
 */ 
!function(){

    // 顶部按钮
    var go2Top = document.createElement('div');
    go2Top.setAttribute('class', 'go2Top');
    go2Top.setAttribute('ontouchstart', 'goTop()');
    go2Top.innerHTML = '<i class="iconfont icon-xiangshang1"></i>';

    document.body.appendChild(go2Top);
}()

/**
 * 顶部导航栏上滑消失，下滑出现
 * scTop: 当前scrollTop
 * scrollTop: 上次scrollTop
 */
var scrollTop = 0;  // scrolltop
var navbar = document.getElementById('navbar');
var go2Top = document.querySelector('.go2Top');
var innerHeight = window.innerHeight;
window.onscroll = function(){   
    var scTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log('scrollTop-scTop: ',scrollTop-scTop);
    // 滑到顶部了
    if(scTop <= 6){
        navbar.setAttribute('class','');
        return
    }
    if(scrollTop - scTop > 0){
        // console.log('手指下滑');
        navbar.setAttribute('class','nav-show');

    }else if(scrollTop - scTop < 0){
        // console.log('手指上滑');
        navbar.setAttribute('class','nav-hide');

    }
    // 初始化
    scrollTop = scTop;

    // 顶部按钮 显示隐藏
    if(document.documentElement.scrollHeight >= innerHeight*2){
        if(scTop > innerHeight){
            fadeFn({elem: go2Top});

        }else{
            go2Top.setAttribute('id','');
        }
    }
}

// 隐藏loading
setTimeout(function(){
    var script = document.createElement('script');
    script.innerHTML = "var loaddiv = document.querySelector('.loadingdiv');/* 加载结束，隐藏loading*/fadeFn({elem: loaddiv,handle:'hide'});loaddiv.setAttribute('style', 'display:none;');";
    document.head.appendChild(script);
},0);

// 下拉刷新效果
document.onready = function(){
    var elem = document.documentElement;
    var _from = window.innerWidth*12/100;
    // console.log(_from);
    var fresh;
    if(window.downFresh){
        fresh = new downFresh(elem, _from, function(res){
            // 到顶部
            if(res.offTop > _from){
                console.log(res);
            }
            // 可以刷新了
            if(res.flag){
                console.log('可以刷新了');
                setTimeout(function(){
                    location.href = location.href;
                },10);
            }
        });
    }

}
// 点击返回顶部
// console.log(goTop());
var goTop = function(){
    var scint;
    var scTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log('scTop: ',scTop);

    scTop -= 40;
    scint = setTimeout(function(){
        document.body.scrollTop
        ? (document.body.scrollTop = scTop)
        : (document.documentElement.scrollTop = scTop);
        
        if(scTop <= 0){
            clearTimeout(scint);
            return;
        }
        goTop();
    },1)
    
}   