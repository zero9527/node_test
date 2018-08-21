
//设置字体自适应大小
!function (doc, win) {
    var docEl = doc.documentElement,
        // resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return;
            if (docEl.clientHeight / docEl.clientWidth >= 1.4) {
                docEl.style.fontSize = 16 * (clientWidth / 370) + 'px';
            } else {
                docEl.style.fontSize = 16 * (clientWidth / 640) + 'px';
            }
            // doc.body.style.height = doc.body.clientHeight;
        };
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window);


/**
 * [getQuery 获取url参数]
 * @return {[object]} [返回的参数键值对组成的对象]
 */
function getQuery() {
    var obj = {};   // 返回的数据
    var arr = [];   // 存放&分割的参数组
    // 获取URL ? 后的部分
    var param = location.search.substr(1);
    // console.log('param: ',param);
    // 多个参数
    if (param.indexOf('&') > -1) {
        arr = param.split('&');

    } else if (param.indexOf('&') == -1) {
        // 一个参数
        obj[param.split('=')[0]] = param.split('=')[1];
    }
    // 将参数转为键值对的形式返回
    arr.forEach(function (value, key) {
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
var isWX = function () {
    var ua = navigator.userAgent.toLowerCase();
    return (ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false);
}

// 验证价格
var moneyCheck = function (val) {
    return /^\d+([\.]{1}[0-9]+){0,1}$/.test(val);
}

//验证特殊字符
var specailCheck = function (val) {
    return /^[`~!@#$^&*()=|{}':;',\[\].<>/?~！@#￥……&*（）——|{}【】\s‘；：”“'。，、？]$/.test(val)
}
//验证手机号码
var phoneCheck = function (val) {
    return /^1[3,4,5,6,7,8]\d{9}$/.test(val)
}
//验证email
var emailCheck = function (val) {
    return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val)
}
//验证中文
var chineseCheck = function (val) {
    return /^[\u4e00-\u9fa5]{2,255}$/.test(val);
}
//验证昵称
var nameCheck = function (val) {
    return /^[\w\-_\u4e00-\u9fa5]{1,255}$/.test(val);
}
//验证银行卡号
var bankCheck = function (val) {
    return /^([1-9]{1})(\d{14}|\d{18})$/.test(val);
}
//身份证验证
var idCheck = function (val) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
}
//去空格
var trimFn = function (str) {
    return str.replace(/^(\s)|(\s*)/g, '');
}

//时间戳转换
var getLocalTime = function (_time) {
    /*
        _time 时间戳（ms）,后台传来的单位是s，需要乘1000
        个位数时加 '0', 统一位数
     */
    _time = Number(_time) * 1000;
    // console.log('_time: ',_time);
    var localetime = new Date(_time);
    var year = localetime.getFullYear(),
        month = (localetime.getMonth() + '').length == 1
            ? +('0' + localetime.getMonth()) + 1
            : localetime.getMonth() + 1,
        date = (localetime.getDate() + '').length == 1
            ? '0' + localetime.getDate()
            : localetime.getDate(),
        hour = (localetime.getHours() + '').length == 1
            ? '0' + localetime.getHours()
            : localetime.getHours(),
        minute = (localetime.getMinutes() + '').length == 1
            ? '0' + localetime.getMinutes()
            : localetime.getMinutes(),
        second = (localetime.getSeconds() + '').length == 1
            ? '0' + localetime.getSeconds()
            : localetime.getSeconds();

    var normal = year + '/' + month + '/' + date + '\t' + hour + ':' + minute + ':' + second;
    if (!_time) normal = '--';
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
    if (num.indexOf('.') > 0) {
        // 带小数（金额）
        dot = num.substr(num.indexOf('.'));
        num = num.substr(0, num.indexOf('.'));
    }
    // console.log('num: ',num);
    switch (type) {
        case 'money':
            // 价格格式化
            num = num.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + sep);
            if (dot) {
                num += dot;
            }
            break;
        case 'phone':
            // console.log('num.length: ',num.length);
            // 手机号码
            if (num.length != 11) {
                return '手机号不是11位'
            }
            num = num.replace(/^(\d{3})(\d{4})(\d{4})/, '$1' + sep + '$2' + sep + '$3');
            break;
        default:
            num = num;
            break;
    }
    return num
}
document.addEventListener('scroll', scrollFn);
var scTop = 0;
function scrollFn(e) {
    e = event || window.event;
    try {
        var headerT = document.querySelector('.headerT');
        var headerX = document.querySelector('.headerX');
        var footerB = document.querySelector('.footerB');
        // 向上滚动
        if ((e.target.body.scrollTop || document.documentElement.scrollTop) > scTop) {
            if (headerT && headerT.className.indexOf('headHide') == -1) {
                headerT.classList.toggle('headHide');
            }
            if (headerX && headerX.className.indexOf('headHide') == -1) {
                headerX.classList.toggle('headHide');
            }
            if (footerB && footerB.className.indexOf('footHide') == -1) {
                footerB.classList.toggle('footHide');
            }
        } else {
            if (headerT && headerT.className.indexOf('headHide') != -1) {
                headerT.classList.toggle('headHide');
            }
            if (headerX && headerX.className.indexOf('headHide') != -1) {
                headerX.classList.toggle('headHide');
            }
            if (footerB && footerB.className.indexOf('footHide') != -1) {
                footerB.classList.toggle('footHide');
            }
        }
        // console.group();
        // console.log('e: ',e);
        scTop = e.target.body.scrollTop || document.documentElement.scrollTop;
        // console.log('scTop: ',scTop);
        // console.groupEnd();
        if (scTop > window.innerHeight) {    // 显示 gotop
            if (document.querySelector('.gotop').className.indexOf('showGotop') == -1) {
                document.querySelector('.gotop').classList.toggle('showGotop');
            }
        } else {  // 隐藏 gotop
            if (document.querySelector('.gotop').className.indexOf('showGotop') != -1) {
                document.querySelector('.gotop').classList.toggle('showGotop');
            }
        }
        if(location.hash.indexOf('xianp') > -1){
            window.xianpScTop = scTop;

        }else if(location.hash.indexOf('circles') > -1){
            window.circleScTop = scTop;

        }else if(location.hash.indexOf('home') > -1){
            window.homeScTop = scTop;
        }
    } catch (err) {
        console.log('err: ', err);
    }

}

// 点击返回顶部
// console.log(goTop());
var goTop = function () {
    var scint;
    var scTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log('scTop: ',scTop);

    scTop -= 80;
    scint = setTimeout(function () {
        document.body.scrollTop
            ? (document.body.scrollTop = scTop)
            : (document.documentElement.scrollTop = scTop);

        if (scTop <= 0) {
            clearTimeout(scint);
            return;
        }
        goTop();
    }, 1)

}