/**
 * [upFile 图片上传]
 * @param {[type]} [formdata] [formdata]
 * @param {[function]} [callback] [回调函数]
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
			var reader = new FileReader();
			// 读文件
			reader.readAsDataURL(fileList[0]);
			reader.onload = function(){
				readerFun(this);
			}
		}else if(fileList.length >= 2){
			// console.log(Object.prototype.toString.call(fileList))
			for(var i in fileList){
				// console.log(Object.prototype.toString.call(fileList[i]));
				if(Object.prototype.toString.call(fileList[i]) === '[object File]'){
					var reader = new FileReader();
					(function(file){

						reader.readAsDataURL(file);
						reader.onload = function(){
							readerFun(this);
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
	function readerFun(e){
		var result = e.result;
		var dx = (e.total/1024)/1024;
		if(dx >= .3){
			console.log("文件大小大于1M");
			//文件大于1M则压缩后上传
			// img[0].src = compressImage(result);
			backdata['src'] = compressImage(result);
			backdata['compress'] = true;
				
			// 回调
			callback(backdata);
		}else{
			backdata['src'] = result;
			// img[0].src = result;
			
			//将图片转成二进制后 append 进 formdata
			formdata.append('UploadForm[]',convert2Binary(result));
			backdata['compress'] = false;
			// 回调
			callback(backdata);
			// console.log('不压缩： ',formdata.getAll('UploadForm[]'))
		}

	}

	/*
		图片压缩(canvas)
	 */
	function compressImage(_url) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.src = _url;

		img.onload = function(){
			canvas.width = img.width*8;
			canvas.height = img.height*8;

			setTimeout(function(){
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				// img.src = canvas.toDataURL('image/jpeg', .5);
				// console.log(img.src);
				//将base64字符串转为2进制
				formdata.append('UploadForm[]',convert2Binary(img.src));
				//停止 img.onload
				img.onload = null;
				return canvas.toDataURL('image/jpeg', .5);
			},0);
		}
		
	}
	/*
		将base64字符串转换为2进制
	 */
	function convert2Binary(dataURI){
		let byteString = window.atob(dataURI.split(',')[1]);
		let ab = new ArrayBuffer(byteString.length);
		let ua = new Uint8Array(ab);

		for(var i=0; i<byteString.length; i++){
			ua[i] = byteString.charCodeAt(i)
		}
		// console.log(ua)
		let bb = new window.Blob([ ab ]);
		// console.log(bb)
		return bb;
	}

	// upFile(formdata, function(res){
	// 	console.log(res);

	// 	if(res.src){
	// 		img.src = res.src;		// 显示图片
	// 		spanclose.addClass("delPic");
	// 		spanclose.css({zIndex: '999'});
	// 		span.append(spanclose);
	// 		span.append(img[0]);
	// 		$('#picShow').append(span);
	// 	}
	// 	//最多3张图片
	// 	if($('#picShow>span').length > 2){
	// 		console.log('3张了');
	// 		$(".file_upload").css({display: 'none'});
	// 	}else{
	// 		$(".file_upload").css({display: 'block'});
	// 	}

	// 	/**
	// 		点击上传的图片右上角的" x "，删除这张图片
	// 	 */ 
	// 	$("#picShow").on("click", ".delPic", function(){
	// 		// console.log($(this).parent());
	// 		$(this).parent().remove()
	// 		//最多3张图片
	// 		$(".file_upload").css({display: 'block'});
	// 		var imgUpload = formdata.getAll('UploadForm[]');
	// 		var index = Number($(this).attr('index'));		//第几张图片
			
	// 		// console.log('before: ',imgUpload);
	// 		//	清空formData数据
	// 		formdata.delete('UploadForm[]');

	// 		//删除当前元素在formData中的数据
	// 		imgUpload.splice(index,1);
	// 		// console.log(Object.prototype.toString.call(imgUpload[index]));
	// 		// console.log('after: ',imgUpload);
			
	// 		//重新将图片数据添加到formData中
	// 		for(var i=0; i<imgUpload.length; i++){
	// 			formdata.append('UploadForm[]', imgUpload[i])
	// 		}
	// 		console.log('after: ',formdata.getAll('UploadForm[]'));

	// 	})
	// });

}
