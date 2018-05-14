
/**
* 打开微信设备库
*/
function openWXDevice(callback){
    var obj = {}; 
    wx.invoke('openWXDeviceLib', {}, function(res){
        obj['res'] = res;
        if(res.err_msg == 'openWXDeviceLib:ok') {
            if(res.bluetoothState == 'off'){
                obj['status'] = 'fail';
                obj['msg'] = '先打开手机蓝牙再使用！';
                // alert("先打开手机蓝牙再使用！");
                
            }else if(res.bluetoothState == 'unauthorized'){
                obj['status'] = 'fail';
                obj['msg'] = '请授权微信蓝牙功能并打开蓝牙！';
                // alert("出错啦亲,请授权微信蓝牙功能并打开蓝牙！");
               
            }else if(res.bluetoothState == 'on'){
                obj['status'] = 'ok';
                // console.log("蓝牙已打开");
                
            }
        }else{
            obj['status'] = 'fail';
            obj['msg'] = '硬件库初始化失败';
            // alert("硬件库初始化失败");
            
        }
        // 回调
        callback(obj);
    });
    
}
/**
 * [closeWXDeviceLib 关闭设备库]
 * @return {[type]} [description]
 */
var closeWXDeviceLib = function(callback){
    var obj = {};
    wx.invoke('closeWXDeviceLib', {}, 
    function(res){
        if(res.err_msg == 'closeWXDeviceLib:ok') {
            // 成功
            obj.res = 'ok';

        }else if(res.err_msg == 'closeWXDeviceLib:fail'){
            // 失败
            obj.res = 'fail';

        }else{
            // 未知问题
            obj.res = null;
        }
        obj['res'] = res;
        // 回调
        callback(obj);
    });
}

/*************************************/
/********** 查询接收 -- 开始 *********/

/**
* 蓝牙设备'绑定'状态变化事件
*/ 
var bindChange = function (callback){
    wx.on('onWXDeviceBindStateChange',{
        deviceId: deviceId,
        state: state
    }, function(res) {
        // state: bind 绑定，unbind解绑
        callback({ state: res.state ,res: res});
        
    });
}

/**
* 蓝牙设备'连接'状态变化事件
*/ 
var stateChange = function (callback){
    wx.on('onWXDeviceStateChange', function(res) {
        callback({
            res: res,
            deviceId: res.deviceId,
            data: res.base64Data
        });
        
    });
}

/**
* 扫描到某个设备
*/ 
var scanResult = function (callback){
    wx.on('onScanWXDeviceResult', function(rec) {
        callback({ devices: res.devices, res: res });
        
    });
}

/**
* 接收到数据事件
*/ 
var receiveData = function (callback){
    wx.on('onReceiveDataFromWXDevice', function(res) {
        callback({data: rec.base64Data, res: res });
        
	});
}

/**
* 获取微信设备信息
* 回调：返回一个已经链接的设备的ID
*/
var getWXDeviceInfos = function (callback){
    var arr = [];
    var connectid = {};
    wx.invoke('getWXDeviceInfos', {}, function(res){
        var len = res.deviceInfos.length;  //绑定设备总数量
		for(i=0; i<len; i++){
            if(res.deviceInfos[i].state == 'connected'){
                connectid = res.deviceInfos[i].deviceId;
            }
            arr[i] = {};
            arr[i]['deviceId'] = res.deviceInfos[i].deviceId;
            arr[i]['state'] = res.deviceInfos[i].state;
        }
        // 回调
        callback(arr, connectid, res);
    }); 
}


/**
 *  Byte数组转Base64字符,原理同上 
 *	@Param [0x00,0x00]
 *	@return Base64字符串
 **/
var bytes_array_to_base64 = function (array) {
	if (array.length == 0) {
		return "";
	}
	var b64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var result = "";
	// 给末尾添加的字符,先计算出后面的字符
	var d3 = array.length % 3;
	var endChar = "";
	if (d3 == 1) {
		var value = array[array.length - 1];
		endChar = b64Chars.charAt(value >> 2);
		endChar += b64Chars.charAt((value << 4) & 0x3F);
		endChar += "==";
	} else if (d3 == 2) {
		var value1 = array[array.length - 2];
		var value2 = array[array.length - 1];
		endChar = b64Chars.charAt(value1 >> 2);
		endChar += b64Chars.charAt(((value1 << 4) & 0x3F) + (value2 >> 4));
		endChar += b64Chars.charAt((value2 << 2) & 0x3F);
		endChar += "=";
	}

	var times = array.length / 3;
	var startIndex = 0;
	// 开始计算
	for (var i = 0; i < times - (d3 == 0 ? 0 : 1); i++) {
		startIndex = i * 3;

		var S1 = array[startIndex + 0];
		var S2 = array[startIndex + 1];
		var S3 = array[startIndex + 2];

		var s1 = b64Chars.charAt(S1 >> 2);
		var s2 = b64Chars.charAt(((S1 << 4) & 0x3F) + (S2 >> 4));
		var s3 = b64Chars.charAt(((S2 & 0xF) << 2) + (S3 >> 6));
		var s4 = b64Chars.charAt(S3 & 0x3F);
		// 添加到结果字符串中
		result += (s1 + s2 + s3 + s4);
	}

	return result + endChar;
}



/**
 * [scanWXDevice 扫描设备]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
var scanWXDevice = function(callback){
    var obj = {};
    wx.invoke('startScanWXDevice', {}, function(res) {
        if(res.err_msg == 'startScanWXDevice:ok'){
            // 成功
            obj['status'] = 'ok';

        }else if(res.err_msg == 'startScanWXDevice:fail'){
            // 失败
            obj['status'] = 'fail';

        }
        obj['res'] = res;
        callback(obj);
    });
}

/**
 * [stopScan 停止扫描设备]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
var stopScan = function(callback){
    var obj = {};
    wx.invoke('stopScanWXDevice', {}, function(res) {
        if(res.err_msg == 'stopScanWXDevice:ok'){
            // 成功
            obj['status'] = 'ok';

        }else if(res.err_msg == 'stopScanWXDevice:fail'){
            // 失败
            obj['status'] = 'fail';

        }
        obj['res'] = res;
        callback(obj);
    });
}

var blueChange = function(callback){
    wx.invoke('onWXDeviceBluetoothStateChange', function(res) {
        // state: on 开启，off 关闭
        callback({state: res.state, res: res});
    });
}

/********** 查询接收 -- 结束 *********/
/*************************************/

/**
 * 发送数据函数
 * @param {string} [data] [需要发送的命令字节]
 * @param {string} [deviceId] [设备ID]
 * 返回参数：1表示发送成功；0表示发送失败
*/
var sendData = function (deviceId, data, callbcak){
    var obj = {};
    // 如果待发送的数据长度为零，或设备id为空，则直接退出
    if( deviceId.length <= 0 ){
        obj['msg'] = '设备号不能为空！';
        return
    }
    if( data.length <= 0 ){
        obj['msg'] = '发送的数据不能为空！';
        return
    }
    // 发送数据
    wx.invoke('sendDataToWXDevice', {
        "deviceId": deviceId, 
        "base64Data": bytes_array_to_base64(data)

    },function(res){
        if(res.err_msg=='sendDataToWXDevice:ok'){
            // 成功
            obj['status'] = 'ok';
        } else {
            // 失败
            obj['status'] = 'fail';
        }
        obj['res'] = res;
        // 回调
        callbcak(obj); 
    });  

}
/**
 * [connectWXDevice 连接设备]
 * @param  {[type]}   deviceId [设备id]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
var connectWXDevice = function(deviceId, callback){
    var obj = {};
    wx.invoke('connectWXDevice', {'deviceId':deviceId}, function(res) {
        if(res.err_msg == 'connectWXDevice:ok'){
            // 成功
            obj['status'] = 'ok';

        }else if(res.err_msg == 'connectWXDevice:fail'){
            // 失败
            obj['status'] = 'fail';

        }
        obj['res'] = res;
        callback(obj);
    });
}

/**
 * [disconnectWXDevice 断开设备连接]
 * @param  {[type]}   deviceId [设备id]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
var disconnectWXDevice = function(deviceId, callback){
    var obj = {};
    wx.invoke('disconnectWXDevice', {'deviceId':deviceId}, function(res) {
        if(res.err_msg == 'disconnectWXDevice:ok'){
            // 成功
            obj['status'] = 'ok';

        }else if(res.err_msg == 'disconnectWXDevice:fail'){
            // 失败
            obj['status'] = 'fail';

        }
        obj['res'] = res;
        callback(obj);
    });
}

/**
 * [getWXDeviceTicket 获取操作凭证]
 * @param  {[type]}   deviceId [description]
 * @param  {[type]}   type     [操作类型，1:绑定设备，2：解绑设备]
 * @param  {Function} callback [回调函数]
 * @return {[type]}            [description]
 */
var getWXDeviceTicket = function(device_id, type, callback){
    var obj = {};
    type = type + '';   // 转为字符串
    wx.invoke('getWXDeviceTicket', {
        'deviceId': device_id,
        'type': type
    }, function(res) {
        if(res.err_msg == 'getWXDeviceTicket:ok'){
            // 成功
            obj['status'] = 'ok';

        }else if(res.err_msg == 'getWXDeviceTicket:fail'){
            // 失败
            obj['status'] = 'fail';

        }
        obj['res'] = res;
        // 回调函数
        callback(obj);
    });
}
