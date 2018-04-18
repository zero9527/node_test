var home = new Vue({
	el: '#home',
	data() {
		return {
			tdsPure: '',		// 纯水tds
			tdsRaw: '',			// 原水tds
			homeStyle: '',		// 首页部分
			leasingmode: '',	// 滤芯模式
			statusText: '',									// 水机状态
			statusIconName: '',								// 状态图标
			statusIconClass: {
				makeWater: 'iconfont icon-makeWater',			// 制水
				waterFull: 'iconfont icon-waterFull',			// 水满
				checking: 'iconfont icon-checking',			// 检修
				lacking: 'iconfont icon-lacking',			// 缺水
				washing: 'iconfont icon-washing',			// 冲洗
				leaking: 'iconfont icon-leaking',			// 漏水
				poweroff: 'iconfont icon-poweroff',			// 已关机
				arrears: 'iconfont icon-arrears',			// 已欠费
				offline: 'iconfont icon-offline'			// 已离线
			},
			statusList: ['制水','水满','检修','缺水','冲洗','漏水','已关机','已欠费','已离线'],							// 水机状态集合
			powerStatus: '开机',							// 开关机状态
			filterstyle: 'display:none;',					// 滤芯部分
			lineStyle: '',								//横线
			filmainStyle: '',							// 滤芯详情，滤芯复位
			filterList: [],								// 滤芯详情数据集合
			filterDescList: [],							// 滤芯简介集合
			resetFilter: '',			// 滤芯复位
		}
	},
	computed: {},
	mounted() {
		// this.filterList = [
		// 	{fNum:'0',fName:'RO膜',fPercent:'80%'},
		// 	{fNum:'1',fName:'PP棉',fPercent:'50%'},
		// 	{fNum:'2',fName:'滤芯1',fPercent:'10%'},
		// 	{fNum:'3',fName:'滤芯2',fPercent:'60%'},
		// 	{fNum:'4',fName:'PP棉',fPercent:'40%'},
		// 	{fNum:'5',fName:'滤芯1',fPercent:'90%'},
		// 	{fNum:'6',fName:'滤芯2',fPercent:'70%'}
		// ];
		// this.filterDescList = [
		// 	{fNum:'0',fName:'RO膜',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'60'},
		// 	{fNum:'1',fName:'PP棉',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'50'},
		// 	{fNum:'2',fName:'滤芯1',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'20'},
		// 	{fNum:'3',fName:'滤芯2',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'40'},
		// 	{fNum:'4',fName:'PP棉',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'50'},
		// 	{fNum:'5',fName:'滤芯1',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'20'},
		// 	{fNum:'6',fName:'滤芯2',fDesc:'RO膜能够有效去除水中钙、镁、细菌、有机物、无机物、金属离子和放射性物质等，经过该装置净化出的水晶莹清澈、甜美甘醇',allLife:'100',surplus:'40'},
		// ];
		// var that = this;
		// var href = location.href;
		// // 显示滤芯页面
		// if(href.indexOf('filter') > -1){
		// 	this.homeStyle = 'opacity:0;';
		// 	this.filterstyle = 'display:block;';
		// 	document.title = '滤芯';
		// 	$('#navbar>h2').text('滤芯');
		// 	$('#navbar').css({position:'fixed'});
		// 	$("#navbar").show();

		// }else{
		// 	this.homeStyle = 'opacity:1;';
		// }
		// this.tdsPure = 100;
		// this.tdsRaw = 99;
		// this.statusText = this.statusList[0];
		// this.statusIconName = this.statusIconClass.makeWater;
		
		// fadeFn({elem: $('.loadingdiv')[0],handle:'hide'});
	},
	methods: {
		// websocket发送数据
		sendMessage: function(text){
			sendmsg(text);
		},
		// 开关机
		power: function(){
			var that = this;
			var text = '';
			if(that.powerStatus == '开机'){
				console.log('关机');
				text = '关机';
			}else if(that.powerStatus == '关机'){
				console.log('开机');
				text = '开机';
			}

			// 确认取消框
			confirmFn(text, function(res){
				if(res){
					// 点击确定
					if(that.powerStatus == '开机'){
						that.powerStatus = '关机';
						// that.sendMessage('关机');
					}else if(that.powerStatus == '关机'){
						that.powerStatus = '开机';
						// that.sendMessage('开机');

					}
				}else{
					// 点击取消
					noticeFn({text:'取消！'});
				}
			})
		},
		// 冲洗
		wash: function(){
			// that.sendMessage('冲洗');
		},
		// 显示滤芯页面
		filterShow: function(){
			location.href = location.href + '?filter';
			
		},
		// 切换滤芯详情，滤芯复位
		filterMove: function(e){
			var index = +e.target.getAttribute('index');
			var _class = e.target.getAttribute('dataclass');
			var other = index == 0 ? 1 : 0;			// 滤芯详情或滤芯复位
			// console.log(e);
			// 初始化
			$('.filterTop>span').attr('class',$('.filterTop>span').attr('dataclass'));
			// 设置字体颜色
			e.target.setAttribute('class',_class + ' fblue');
			// 横线滑动
			this.lineStyle = 'transition: .3s linear;transform: translateX('+ index*50 +'vw);';
			this.filmainStyle = 'transform: translateX(-'+ index*100 +'vw);';
			$('.filtermain>ul').eq(index).show();
			fadeFn({elem: $('.filtermain>ul').eq(other)[0],handle:'hide'});
			fadeFn({elem: $('.filtermain>ul').eq(index)[0]});
			$('.filtermain>ul').eq(other).hide();
		},
		// 复位选择
		resetSelect: function(e){
			var item = e.currentTarget;
			var check = item.getElementsByClassName('iconfont')[0];
			var checkClass = check.getAttribute('class');
			this.resetFilter = item.getAttribute('fname');		// 选中的滤芯
			// console.log(item);
			// 初始化
			for(var i=0; i<$('.filteritem>.iconfont').length; i++){
				$('.filteritem>.iconfont').eq(i).attr('class','iconfont icon-emptycircle');
			}
			// 选中，取消选择
			if(checkClass.indexOf('emptycircle') > -1){
				check.setAttribute('class','iconfont icon-selectcircle fblue');

			}else{
				check.setAttribute('class','iconfont icon-emptycircle');
				this.resetFilter = '';
			}
		},
		// 滤芯复位
		filterReset: function(){
			var text = '复位';
			if(!this.resetFilter){
				noticeFn({text:'请选择需要复位的滤芯！'});
				return
			}
			// 确认取消框
			confirmFn(text + this.resetFilter, function(res){
				if(res){
					// 点击确定
				}else{
					// 点击取消
					noticeFn({text:'取消！'});
				}
			})
		}
	}
})