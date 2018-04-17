var home = new Vue({
	el: '#home',
	data() {
		return {
			tdsPure: '',		// 纯水tds
			tdsRaw: '',			// 原水tds
			leasingmode: '',	// 滤芯模式
			statusText: '',									// 水机状态
			statusIconName: '',								// 状态图标
			statusIconClass: {
				makeWater: 'iconfont icon-makeWater',			// 制水
				waterFull: 'iconfont icon-waterFull',			// 水满
				checking: 'iconfont icon-checking',			// 检修
				lacking: 'iconfont icon-lacking',				// 缺水
				washing: 'iconfont icon-washing',			// 冲洗
				leaking: 'iconfont icon-leaking',			// 漏水
				poweroff: 'iconfont icon-poweroff',			// 已关机
				arrears: 'iconfont icon-arrears',			// 已欠费
				offline: 'iconfont icon-offline'			// 已离线
			},
			statusList: ['制水','水满','检修','缺水','冲洗','漏水','已关机','已欠费','已离线'],
			powerStatus: '开机',							// 开关机状态
		}
	},
	computed: {},
	mounted() {
		var that = this;
		this.leasingmode = 2;
		this.tdsPure = 100;
		this.tdsRaw = 99;
		this.statusText = this.statusList[0];
		this.statusIconName = this.statusIconClass.makeWater;
		var wsurl = "ws://localhost:8181";
		// wsFun(wsurl, function(str, res){
		// 	// str: 数据类型（接收，关闭， 错误），
		// 	// 在websocket.js中给出，不需要传
		// 	console.log(str, res);
		// 	// 接收数据更新到页面
		// 	if(str == '接收：'){
		// 		that.tdsPure = res;
		// 		that.tdsRaw = (res/2);
		// 	}
		// });
		
	},
	methods: {
		// websocket发送数据
		sendMessage: function(){
			sendmsg('这是网页发送的数据 ' + new Date().toLocaleString());
		},
		// 开关机
		power: function(){
			var text = '';
			if(this.powerStatus == '开机'){
				console.log('关机');
				text = '关机';
				this.powerStatus = '关机';

			}else if(this.powerStatus == '关机'){
				console.log('开机');
				text = '开机';
				this.powerStatus = '开机';
			}

			// 确认取消框
			confirmFn(text, function(res){
				if(res){
					// 点击确定
				}else{
					// 点击取消
					noticeFn({text:'取消！'});
				}
			})
		},
		// 冲洗
		wash: function(){}
	}
})