说明：精通javascript开发，图灵程序设计丛书，中国工信出版集团。
---


第十二章：使用webRTC实现视频聊天
---
webRTC:网页实时通信
API：navigator.getUserMedia()
12.1一段代码保障兼容性
代码：12-1
```
navigator.getUserMedia=navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia
```

出于安全考虑，只有通过网站服务器来访问文件，再在此文件中使用webRTC,WebRTC才会正常工作，不能通过在浏览器中加载本地文件，直接运行代码来使用webRTC。

12-2
访问网络摄像头和麦克风
```javascript
	<script type="text/javascript">
		//定义一个函数，当我们可以成功对用户的网络摄像头和麦克风进行访问的时候，执行此函数
		function onSuccess(){
			alert("Successful connection made to access wecam and microphone");
		};
		
		//定义一个函数，当我们无法对用户的网络摄像头和麦克风访问的时候，执行此函数---无论是因为用户拒绝访问还是因为技术方面的原因
		function onError(){
			throw new Error("There has been a  problem accessing the webcam and microphone");
		};
		navigator.getUserMedia=navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;
		//利用12-1代码，保障getUserMedia()方法的存在，我们就知道该方法被浏览器所支持
		if(navigator.getUserMedia){
			//现在我们可以执行getUserMedia()方法，传入一个对象，告诉浏览器我们需要访问何种形式的媒体文件
			//video对应网络摄像头，audio对应麦克风。我们传入对函数onSuccess()和onError()的引用，这些函数基于用户授权我们所请求访问的媒体类型来相应的执行
			navigator.getUserMedia(
				{
				video:true,
				audio:true
				},
				onSuccess,
				onError
			);
		}
		else{
			//如果当前用户浏览器不支持getUserMedia()方法，则抛出一个错误
			throw new Error("Sorry，getUserMedia() is not supported in your browser");
		}
    </script>
```
由于使用了自己的错误信息提示，导致不能知道到底是什么错误，所以我对代码做了如下的修改
```javascript
	<script type="text/javascript">
		//定义一个函数，当我们可以成功对用户的网络摄像头和麦克风进行访问的时候，执行此函数
		function onSuccess(){
			alert("Successful connection made to access wecam and microphone");
		};
		
		//定义一个函数，当我们无法对用户的网络摄像头和麦克风访问的时候，执行此函数---无论是因为用户拒绝访问还是因为技术方面的原因
		function onError(err){
			console.log("The following error occurred: " + err.name);
		};
		navigator.getUserMedia=navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;
		//利用12-1代码，保障getUserMedia()方法的存在，我们就知道该方法被浏览器所支持
		if(navigator.getUserMedia){
			//现在我们可以执行getUserMedia()方法，传入一个对象，告诉浏览器我们需要访问何种形式的媒体文件
			//video对应网络摄像头，audio对应麦克风。我们传入对函数onSuccess()和onError()的引用，这些函数基于用户授权我们所请求访问的媒体类型来相应的执行
			navigator.getUserMedia(
				{
				video:true,
				audio:true
				},
				onSuccess,
				onError
			);
		}
		else{
			//如果当前用户浏览器不支持getUserMedia()方法，则抛出一个错误
			throw new Error("Sorry，getUserMedia() is not supported in your browser");
		}
    </script>
```
提示我们：DevicesNotFoundError   没有找到设备