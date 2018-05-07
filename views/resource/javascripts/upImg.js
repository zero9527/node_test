/**
 * [upFile 图片上传]
 * @param {[type]} [formdata] [formdata]
 * @param {[type]} [input] [input type="file"的元素]
 * @param {[function]} [callback] [回调函数]
 * 用法：
 * 	html: +++++++++++++++
 * 	<form action="" id='form'>
        <input type="file" id='file' multiple="">
        <div id='picShow'></div>
    </form>
    
    js: +++++++++++++++++
 *  var form = document.querySelector('#form');
    var file = document.querySelector('#file');
    var picShow = document.querySelector('#picShow');
    file.onclick = function(){
        var formdata = new FormData(form);
        var _this = this;

        // 读取图片
        upImg(formdata, _this, function(res){
            console.log('res: ',res);

            //图片显示
            var span = document.createElement('span');
            var spanclose = document.createElement('span');
            spanclose.setAttribute('class', 'delPic');
            spanclose.setAttribute('style', 'z-index:999;');
            span.appendChild(spanclose);
            var img = new Image();
            
            if(res.src){
                img.src = res.src;      // 显示图片
                span.appendChild(img);
                picShow.appendChild(span);
                // console.log(formdata.getAll('UploadForm[]'));
            }
        })
    }
 */
var upImg = function(formdata, input, callback){
	formdata = formdata ? formdata : new FormData();
	var backdata = {};
	/*
		图片压缩上传
	 */
	input.onchange = function(e){
		var fileList = e.target.files;
		console.log('原始： ',fileList)
		if(fileList.length == 1){
			// 单选
			var reader = new FileReader();
			// 读文件
			reader.readAsDataURL(fileList[0]);
			reader.onload = function(e){
				// console.log('e1: ',e);
				readerFun(e, this);
			}
		}else if(fileList.length >= 2){
			// 多选 input multiple
			//（ PC可以，安卓因为不支持多选所以只有一张会显示, ios未测试）
			// console.log(Object.prototype.toString.call(fileList))
			for(var i in fileList){
				// console.log(Object.prototype.toString.call(fileList[i]));
				if(Object.prototype.toString.call(fileList[i]) === '[object File]'){
					var reader = new FileReader();
					(function(file){

						reader.readAsDataURL(file);
						reader.onload = function(e){
							// console.log('e2: ',e);
							readerFun(e, this);
						}
					})(fileList[i]);
				}
			}
		}
	}

	/**
	 * 读取图片信息
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	function readerFun(e, file_reader){
		var dx = (e.total/1024)/1024;
		var result = file_reader.result;
		console.log('e: ',e);
		if(dx >= .3){
			console.log("文件大小大于600kb");
			//文件大于600kb则压缩后上传
			compressImage(result, function(res){
				backdata['src'] = res,src;
				backdata['compress'] = true;
			});
			
			// 回调
			callback(backdata);
		}else{
			backdata['src'] = result;
			// 将图片转成二进制
			convert2Binary(result, function(res){
				//将图片二进制数据 append 进 formdata
				formdata.append('UploadForm[]', res.src);
				backdata['compress'] = false;
			})
			// 回调
			callback(backdata);
			// console.log('不压缩： ',formdata.getAll('UploadForm[]'))
		}

	}

	/*
		图片压缩(canvas)
	 */
	function compressImage(_url, callback) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.src = _url;

		img.onload = function(){
			canvas.width = img.width*8;
			canvas.height = img.height*8;

			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			setTimeout(function(){
				img.src = canvas.toDataURL('image/jpeg', .5);
				// console.log(img.src);
				img.onload = function(){
					//将base64字符串转为2进制
					convert2Binary(img.src, function(res){
						formdata.append('UploadForm[]',res.src);

						//停止 img.onload
						img.onload = null;
						callback({src: res.src});
					})
				}
			},0);
		}
		
	}
	/*
		将base64字符串转换为2进制
	 */
	function convert2Binary(dataURI, callback){
		let byteString = window.atob(dataURI.split(',')[1]);
		let ab = new ArrayBuffer(byteString.length);
		let ua = new Uint8Array(ab);

		for(var i=0; i<byteString.length; i++){
			ua[i] = byteString.charCodeAt(i)
		}
		// console.log(ua)
		let bb = new window.Blob([ ab ]);
		// console.log(bb)
		// 回调
		callback({src: bb});
	}

}
