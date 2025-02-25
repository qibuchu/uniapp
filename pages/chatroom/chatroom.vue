<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-between">
				<view class="title">
					{{fname}}
				</view>
			</view>
			<view class="top-bar-right">
				<view class="spice"></view>
				<view class="group-img" v-if="type ==1">
					<image :src="fimgurl"></image>
				</view>
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" :scroll-with-animation="swanition" :scroll-into-view="scrollToView" @scrolltoupper="nextPage">
			<view class="chat-main" :style="{paddingBottom:inputh+'px'}">
				<view class="loading" :class="{displaynone:isloading}">
					<image src="/static/images/common/loading.png" class="loading-img" :animation="animationData"></image>
				</view>
				<view class="chat-ls" v-for="(item,index) in msgs" :key="index" :id="'msg'+item.id">
					<view class="chat-time" v-if="item.time !=''">{{changeTime(item.time)}}</view>
					<view class="msg-m msg-left" v-if="item.fromId !=uid">
						<image :src="item.imgurl" class="user-img"></image>
						<view class="message" v-if="item.types==0">
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types==1">
							<image :src="item.message" class="msg-img" mode="widthFix" @tap="previewImg(item.message)"></image>
						</view>
						<view class="message" v-if="item.types==2">
							<!-- 音频 -->
							<view class="msg-text voice" :style="{width:item.message.time*4+px}" @tap="playVoice(item.message.voice)">
							<image src="/static/images/chatroom/yy.png" class="voice-img"></image>
							{{item.message.time}}"</view>
						</view>
						<view class="message" v-if="item.types==3">
							<!-- 位置 -->
							<view class="msg-map" @tap="openLocation(item.message)">
								<view class="map-name">{{item.message.name}}</view>
								<view class="map-address">{{item.message.address}}</view>
								<image src="/static/images/chatroom/map.png" mode="aspectFit" class="map-img"></image>
								<!-- <map class="map" :longitude="item.message.longitude" :latitude="item.message.latitude" :markers="covers(item.message)"></map> -->
							</view>
						</view>
					</view>
					<view class="msg-m msg-right" v-if="item.fromId ==uid">
						<image :src="item.imgurl" class="user-img"></image>
						<view class="message" v-if="item.types==0">
							<!-- 文字 -->
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types==1">
							<!-- 图片 -->
							<image :src="item.message" class="msg-img" mode="widthFix" @tap="previewImg(item.message)"></image>
						</view>
						<view class="message" v-if="item.types==2">
							<!-- 音频 -->
							<view class="msg-text voice" :style="{width:item.message.time*4+'px'}" @tap="playVoice(item.message.voice)">
							{{item.message.time}}"
							<image src="/static/images/chatroom/yy.png" class="voice-img"></image>
							</view>
						</view>
						<view class="message" v-if="item.types==3">
							<!-- 位置 -->
							<view class="msg-map" @tap="openLocation(item.message)">
								<view class="map-name">{{item.message.name}}</view>
								<view class="map-address">{{item.message.address}}</view>
								<image src="/static/images/chatroom/map.png" mode="aspectFit" class="map-img"></image>
								<!-- <map class="map" :longitude="item.message.longitude" :latitude="item.message.latitude" :markers="covers(item.message)"></map> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="padbt"></view> -->
		</scroll-view>
		<submit @inputs ="inputs" @heights="heights"></submit>
	</view>
</template>

<script>
	
	import myfun from '../../commons/js/myfun.js';
	
	import submit from '../../components/submit/submit.vue';
	
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		inject: ['socket', 'serverUrl'],
		data() {
			return {
				uid:'',
				uimgurl:'',
				token:'',
				uname:'',
				fid:'',
				fname:'',
				fimgurl:'',
				type:'',
				msgs:[],
				imgMsg:[],
				scrollToView:'',
				oldTime:0,
				inputh:'72',
				animationData:{},
				nowpage:0,  //页码
				pagesize:10,
				loading:'',
				isloading:true,
				swanition:true,
				beginloading:true,
				
			}
		},
		onLoad:function(e){
			this.fid = e.id;
			this.fname = e.name;
			this.type = e.type;
			this.fimgurl = e.img;
			//console.log(e)
			this.getStorages();
			this.getMsg();
			this.join(this.uid)
			// this.receiveMsg()
			this.receiveSocketMsg();
			// this.groupSocket();
			// this.sendSocket(e);
			//this.nextpage();
		},
		components:{
			submit,
		},
		methods: {
			//获取缓存数据
			getStorages: function(){
				try {
					const value = uni.getStorageSync('user');
					if(value){
						this.uid =value.id;
						this.imgurl = this.serverUrl+value.imgUrl;
						this.token = value.token;
						this.uname = value.name;
					}else{
						//如果没有用户缓存，跳转到登录界面
						uni.navigateTo({
							//url:'/pages/index/index',
							url:'../signin/signin',
						});
					}
				}catch(e){
					//error
				}
			},
			//返回登录页面
			  backOne:function(){
			                // this.socket.emit('leaveChatr',this.uid,this.fid);
			                uni.navigateBack({
			                    dalta: 1
			                });
			            },
			//处理时间
			changeTime:function(date){
				return myfun.dateTime(date);
			},
			//滚动加载下一页
			nextPage: function(){
				if(this.nowpage>0 && this.beginloading){
					this.isloading = false;
					//禁止重复加载
					this.beginloading = false;
					var animation = uni.createAnimation({
					  duration: 1000,
					    timingFunction: 'step-start',
					})
								
					this.animation = animation
					let i = 1;
					this.loading  = setInterval(function() {
					  animation.rotate(i*30).step()
					  this.animationData = animation.export()
					  i++;
					  if(i>10){
						  this.getMsg(this.nowpage);
					  }
					}.bind(this), 100)
				}
			  },
			  // 获取聊天数据
			  getMsg:function(page,isloading) {
				  if(this.isloading==true){
			       uni.request({
			        url: this.serverUrl+'/chat/msg',
			       
			        data: {
			          uid: this.uid,
			          fid: this.fid,
			          nowpage: this.nowpage,
			          pageSize: this.pagesize,
			          token: this.token,
			        },
					 method: 'POST',
					success:(data)=>{
						let res = data.data.result;
						console.log(res)
						const status = data.data.status;
									  
						if (status === 200) {
						  let msg = res;
						console.log(msg)
									  
						  // 检查 msg 是否为数组
						  if (!Array.isArray(msg)) {
						    console.error('返回的消息数据不是数组');
						    return;
						  }
									  
						  // 将数组倒序
						  msg.reverse();
									  
						  if (msg.length > 0) {
												// let len=msg.length
						    let oldTime = msg[0].time;
											  			  
											  console.log(oldTime)
						    let imgarr = [];
									  
						    for (let i = 0; i < msg.length; i++) {
						      // 补充图片地址
						      msg[i].imgurl = this.serverUrl + msg[i].imgurl;
												//console.log(msg[i].imgurl)
						       
						      // 计算时间间隔
						      if (i < msg.length - 1) {
													msg[i].time=new Date(msg[i].time);
													console.log(msg[i].time)
												
						        let t = myfun.spaceTime(oldTime, msg[i].time);
						        if (t) {
						          oldTime = t;
						        }
						        msg[i].time = t;
												  console.log(t)
						      }
									  
						      // 处理消息类型为图片的情况
						      if (msg[i].types == 1) {
													console.log(msg[i].message)
						        msg[i].message = this.serverUrl + msg[i].message;
												  console.log(msg[i].message)
						        imgarr.push(msg[i].message);
						      }
												//json字符串还原
												if (msg[i].types == 3) {
												  msg[i].message = JSON.parse(msg[i].message);
												}
						    }
									  
						    // 更新消息列表
						    this.msgs = msg.concat(this.msgs);
						    this.imgMsg = imgarr.concat(this.imgMsg);
											  // console.log( this.imgMsg)
											  // console.log(this.imgarr)
											  // console.log(this.msgs)
						  }
									  
						  // 更新分页状态
						  if (msg.length === 10) {
						    this.nowpage++;
						  } else {
						    // 数据获取完毕
						    this.nowpage = -1;
						  }
									  
						  // 更新 UI
						  this.$nextTick(() => {
						    this.swanition = false;
						    this.scrollToView = 'msg' + this.msgs[this.msgs.length-1]?.id;
						  });
									  
						  // 清除加载状态
						  clearInterval(this.loading);
						  this.isloading = true;
						  this.beginloading = true;
						} else if (status === 500) {
						  uni.showToast({
						    title: '服务器出错啦！',
						    icon: 'none',
						    duration: 2000,
						  });
						} else if (status === 300) {
						  uni.navigateTo({
						    url: '../signin/signin?name=' + this.myname,
						  });
						}
					}
			      });
			  
			    
			    // } catch (err) {
			    //   console.error('请求出错:', err);
			    //   uni.showToast({
			    //     title: '网络请求失败，请重试',
			    //     icon: 'none',
			    //     duration: 2000,
			    //   });
			    // }
				}
			  },
			  
			  //计算时间间隔
			  calculateTimeInterval: function(oldTime, newTime) {
			    // 实现你的时间间隔计算逻辑
			    // 例如：返回格式化后的时间差
			    return newTime - oldTime; // 这里只是一个示例
			  },
			// //获取聊天数据
			// getMsg1: function(page){
			// 	let msg = datas.message();
			// 	let maxpages = msg.length;
			// 	if(msg.length>(page+1)*10){
			// 		maxpages = (page+1)*10;
			// 		this.nowpage++;
			// 	}else{
			// 		//数据获取完毕
			// 		this.nowpage = -1;
			// 	}
			// 	for(var i=page*10;i<maxpages;i++){
			// 		msg[i].imgurl = '../../static/images/img/'+msg[i].imgurl;
			// 		//时间间隔
			// 		if(i<msg.length-1){
			// 			let t = myfun.spaceTime(this.oldTime,msg[i].time);
			// 			if(t){
			// 				this.oldTime = t;
			// 			}
			// 			msg[i].time = t;
			// 		}
			// 		//匹配最大时间
			// 		id(this.nowpage == 0){
			// 			if(msg[i].time >this.oldTime){
			// 				this.oldTime = msg[i].time ;
			// 			}
			// 		}
			// 		//补充图片地址
			// 		if(msg[i].types ==1){
			// 			msg[i].message = '../../static/images/img/'+msg[i].message;
			// 			this.imgMsg.unshift(msg[i].message);
			// 		}
			// 		this.msgs.unshift(msg[i]);
			// 	}
			// 	//页数加一
			// 	this.$nextTick(function(){
			// 		this.swanition=false;
			// 		this.scrollToView='msg'+this.msgs[maxpage-page*10-1].tip;
			// 	})
			// 	clearInterval(this.loading);
			// 	this.isloading = true;
			// 	//开启
			// 	this.beginloading = true;
			// },
			//预览图片
			previewImg: function(e){
				let index=0;
				for(let i=0;i<this.imgMsg.length;i++)
				{
					if(this.imgMsg[i]==e){
						index=i;
					}
				}
				uni.previewImage({
					current:index,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			//音频播放
			playVoice:function(e){
				innerAudioContext.src = e;
				innerAudioContext.play();
			},
			//地图定位
			covers:function(e){
				let map = [{
					latiude:e.latiude,
					longitude:e.longitude,
					iconPath:'../../static/images/chatroom/dw.png',
				}]
				return(map);
			},
			//导航
			openLocation:function(e){
				uni.openLocation({
					latitude: e.latitude,
					longitude: e.longitude,
					name:e.name,
					address:e.adderss,
					success: function () {
						//console.log('success');
					}
				});
			},
			//接收输入内容
			inputs:function(e){
				this.receiveMsg(e,this.uid,this.imgurl,0);
				console.log(this.imgurl)
			},
			//接收消息
			receiveMsg:function(e,id,img,tip){
				//tip==0表示自己发的
				if(e.types == 0 || e.types == 3){
					//发送后端
					this.sendSocket(e);
				}
				if(e.types == 1 )
				{
					this.imgMsg.push(e.message);
					console.log(e.message)
					console.log(this.imgMsg)
					//提交图片
					let url = myfun.fileName(new Date());
					const uploadTask = uni.uploadFile({
						url:this.serverUrl+'/files/upload',
						filePath:e.message,
						name:'file',
						formData:{
							url:url,
							name:new Date().getTime()+this.uid+Math.ceil(Math.random()*10),
						},
						success:(uploadFileRes) => {
							//let path = this.serverUrl + uploadFileRes.data;
							//this.img.push(path);
							console.log(uploadFileRes)
							let data = {
								message:uploadFileRes.data,
								types:e.types,
							}
							this.sendSocket(data);
						}
					});
					
					uploadTask.onProgressUpdate((res) =>{
						
					});
				}
				if(e.types == 2 )
				{
					//提交音频
					let url = myfun.fileName(new Date());
					const uploadTask = uni.uploadFile({
						url:this.serverUrl+'/files/upload',
						filePath:e.message.voice,
						name:'file',
						formData:{
							url:url,
							name:new Date().getTime()+this.uid+Math.ceil(Math.random()*10),
						},
						success:(uploadFileRes) => {
							//let path = this.serverUrl + uploadFileRes.data;
							//this.img.push(path);
							let data = {
								message:uploadFileRes.data,
								types:e.types,
							}
							this.sendSocket(data);
						}
					});
					
					uploadTask.onProgressUpdate((res =>{
						
					}))
				}
				this.swanition=true;
				let len = this.msgs.length;
				let nowTime = new Date();
				let oldTime=this.msgs[len-1]?.time
				//时间间隔
				let t = myfun.spaceTime(oldTime,nowTime);
				if(t){
					oldTime = t;
				}
				
				nowTime = t;
				//json字符串还原
				if(e.types == 3){
					e.message = JSON.parse(e.message);
				}
				let data ={
					fromId:id,//发送者id
					imgurl:img,
					message:e.message,
					types:e.types,
					time: nowTime,
					id:len,
				};
				this.msgs.push(data);
				this.goBottom();
				
			},
			//聊天数据发送后端
			   sendSocket:function(e){
			                if(this.type == 0){
			                    //1对1
			                    this.socket.emit('msg',e,this.uid,this.fid);
							
			                    console.log('一对一通信')
			                }else {
			                    //群发
			                    this.socket.emit('groupMsg',e,this.uid,this.fid,this.uname,this.uimgurl);
			                }
			            },
						     // groupSocket:function(){
						     //            console.log('群聊天数据接收1')
						     //            this.socket.on('groupmsg',(msg,fromid,gid,name,img) => {
						     //                console.log('群聊天数据接收2')
						     //                if(fromid == this.fid){
						     //                this.swanition = true;
						     //                let len = this.msgs.length;
						     //                let nowTime = new Date();
						     //                let oldTime=this.msgs[len-1].time
						     //                //时间间隔
						     //                let t = myfun.spaceTime(oldTime,nowTime);
						     //                if(t){
						     //                    oldTime = t;
						     //                }
						     //                //判断是否添加ip
						     //                if(msg.types == 1 || msg.types == 2){
						     //                    msg.message = this.serverUrl+msg.message;
						     //                    console.log(msg.message)
						     //                }
						                    
						     //                nowTime = t;
						     //                let data ={
						     //                    fromId:fromid,//发送者id
						     //                    imgurl:img,
						     //                    message:msg.message,
						     //                    types:msg.types,
						     //                    time: nowTime,
						     //                    id:len,
						     //                };
						     //                this.msgs.push(data);
						     //                //console.log('后端发送的消息为：'+msg+fromid);
						     //                if(msg.types == 1){
						     //                    this.imgMsg.push(this.serverUrl+msg.message);
						                        
						     //                }
						     //                this.$nextTick(function(){
						     //                    this.scrollToView = 'msg' + len;
						     //                })
						     //                }
						     //            })
						                
						     //        },
			//socket聊天数据接收
			receiveSocketMsg:function(){
				console.log('聊天数据接收1')
				this.socket.on('msg',(msg,fromid,tip) => {
					console.log('聊天数据接收2')
					console.log(fromid,this.fid,tip)
					if(fromid == this.fid && tip == 0){
					this.swanition = true;
					let len = this.msgs.length;
					let nowTime = new Date();
					//时间间隔
					let t = myfun.spaceTime(this.oldTime,nowTime);
					if(t){
						this.oldTime = t;
					}
					//判断是否添加ip
					if(msg.types == 1 || msg.types == 2){
						msg.message = this.serverUrl+msg.message;
						console.log(msg.message)
					}
					
					nowTime = t;
					let data ={
						fromid:fromid,//发送者id
						imgurl:this.fimgurl,
						message:msg.message,
						types:msg.types,
						time: nowTime,
						id:len,
					};
					console.log(111)
					console.log(data)
					this.msgs.push(data);
					//console.log('后端发送的消息为：'+msg+fromid);
					if(msg.types == 1){
						this.imgMsg.push(this.serverUrl+msg.message);
						console.log(this.nowTime)
					}
					this.$nextTick(function(){
						this.scrollToView = 'msg' + len;
					})
					}
				})
				
			},
			join:function(uid){
				this.socket.emit('login',uid);
			},
			    goGroupHome:function(){
			                uni.navigateTo({
			                    url:'../grouphome/grouphome?gid='+this.fid+'&gimg='+this.fimgurl
			                })
			            },
			//输入框高度
			heights: function(e){
				this.inputh = e+6;
				this.goBottom();
			},
			//滚动到底部
			goBottom:function(){
				this.swanition=true;
				this.scrollToView = '';
				this.$nextTick(function(){
					let len = this.msgs.length-1;
					//console.log('msgs length:', len, 'msgs[len].tip:', this.msgs[len].tip);
					this.scrollToView='msg'+this.msgs[len]?.id;
				})
			}

		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	page{
		height: 100%;
	}
	.content{
		height: 100%;
		background:rgba(244,244,244,1) ;
	}
	.top-bar{
		z-index:1;
		background:rgba(244,244,244,0.96) ;
		border-bottom: 1px solid $uni-border-color;
		.group-img{
			// position: absolute;
			bottom: 10rpx;
			right: $uni-spacing-col-base;
			width:68rpx;
			height:68rpx;
			image{
				border-radius: 16rpx;
				width:68rpx;
				height:68rpx;
			}
		}
	}
	.displaynone{
		display:none;
	}
	.chat{
		height: 100%;
		.padbt{
			height: var(--status-bar-height);
			width: 100%;
		}
		.loading{
			text-align: center;
			.loading-img{
				width: 60rpx;
				height: 60rpx;
				
			}
		}
		.chat-main{
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-top: 100rpx;
			display: flex;
			flex-direction: column;
		}
		.chat-ls{
			.chat-time{
				font-size: $uni-font-size-sm;
				color: rgba(39,40,50,0.3);
				line-height: 34rpx;
				padding: 20rpx 0;
				text-align: center;
			}
			.msg-m{
				display: flex;
				padding: 20rpx 0;
				.user-img{
					flex: none;
					width:$uni-img-size-sm;
					height:$uni-img-size-sm;
					border-radius: $uni-border-radius-base;
				}
				.message{
					flex:none;
					max-width: 480rpx;
			}
			.msg-text{
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
				padding: 18rpx 24rpx;
			}
			.msg-img{
				max-width: 400rpx;
				border-radius:$uni-border-radius-base ;
			}
			.msg-map{
				background-color: #fff;
				width: 464rpx;
				height: 284rpx;
				overflow: hidden;
				.map-name{
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 44rpx;
					padding: 18rpx 24rpx 0 24rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
				.map-address{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					padding: 0 24rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
				.map-img{
					// padding-top: 8rpx;
					width: 480rpx;
					height: 180rpx;
				}
			}
			.voice{
				min-width: 80rpx;
				max-width: 400rpx;
			}
			.voice-img{
				width: 28rpx;
				height: 36rpx;
			}
		}
		.msg-left{
			flex-direction: row;
			.msg-text{
				margin-left: 16rpx;
				background-color: #fff;
				border-radius: 0px 20rpx 20rpx 20rpx;
			}
			.msg-img{
				margin-left: 16rpx;
			}
			.msg-img{
				margin-left: 16rpx;
				border-radius: 0px 20rpx 20rpx 20rpx;
			}
			.voice{
				text-align: right;
				
			}
			.voice-img{
				float: left;
				transform: rotate(180deg);
				width: 28rpx;
				height: 36rpx;
				padding-bottom: 4rpx;
			}
		}
		.msg-right{
			flex-direction: row-reverse;
			.msg-text{
				margin-right: 16rpx;
				background-color: #fff260;
				border-radius: 20rpx 0rpx 20rpx 20rpx;
			}
			.msg-img{
				margin-right: 16rpx;
			}
			.msg-img{
				margin-right: 16rpx;
				border-radius: 20px 0px 20rpx 20rpx;
			}
			.voice{
				text-align: left;
				
			}
			.voice-img{
				padding-top: 4rpx;
				float: right;
				width: 28rpx;
				height: 36rpx;
			}
		}
	}
}
</style>
