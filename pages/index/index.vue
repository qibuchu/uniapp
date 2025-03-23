<template>
	<view class="content">
		<view class="top-bar">
			<navigator :url="'../userhome/userhome?id='+uid" hover-class="none" class="top-bar-left">
				<image :src='imgUrl'></image>
			</navigator>
			<view class="top-bar-between">
				<image src="../../static/images/index/logo.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<view class="search">
					<image src="../../static/images/index/search.png" @tap="goSearch"></image>
				</view>
				<view class="add">
					<image src="../../static/images/index/add.png" @tap="buildGroup"></image>
				</view>
			</view>
		</view>

		<view class="main">
			<view class="refresh" v-if="!refresh">
				<image src="../../static/images/index/refresh.png"></image>
				<view class="ref-title">下拉刷新</view>
			</view>
			<view class="noone" v-if="noone">
				<image src="../../static/images/index/noone.png" mode="aspectFill"></image>
				<view class="no-title">你还没有好友</view>
				<view class="search-bt" @tap="goSearch">搜索好友</view>
			</view>
			<view class="friend" v-if="requestData>0" @tap="goRequest">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">{{requestData}}</text>
						<image src="../../static/images/index/apply.png"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">{{changeTime(requestTime)}}</view>
						</view>
						<view class="news">正义之手大家说的哈酒发撒华电国际撒都感觉啊刷卡</view>
					</view>
				</view>
			</view>
			<view class="friend">
				<view class="friend-list" v-for="(item,index) in friends" :key="index" @tap="toChatRoom(item)">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
						<image :src="item.imgurl"></image>
						<view class="groupm"></view>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.lastTime)}}</view>
						</view>
						<view class="news">{{item.msg}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myfun from '../../commons/js/myfun.js';
	export default {
		inject: ['socket', 'serverUrl'],
		data() {
			return {
				groups:[],
				friends: [],
				requestData: 1,
				requestTime: 0,
				uid: '',
				imgUrl: '',
				myname: '',
				token: '',
				refresh: false,
				noone:false,
			}
		},
		  onLoad() {
		            this.getStorages()
		            this.FriendRequest()
		            this.getFriends()
		            this.getGroup()
		            this.join(this.uid)
		            this.receiveSocketMsg()
					 this.groupSocket()
		            //this.receiveSocketMsg('groupmsg')
		            this.leaveChatr()
		            // console.log(this.imgUrl)
		        },
		onPullDownRefresh() {
			this.friends = []
			this.getStorages()
			this.getFriends()
			this.getGroup()
			this.FriendRequest()
			this.receiveSocketMsg();
			this.groupSocket()
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		methods: {
			goRequest: function() {
				uni.navigateTo({
					url: '../friendrequest/friendrequest'
				})
			},
			getStorages: function() {
				try {
					console.log(this.serverUrl)
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
						this.uid = value.id
						this.imgUrl = this.serverUrl + value.imgUrl
						this.token = value.token
						this.myname = value.name
					} else {
						uni.navigateTo({
							url: '../signin/signin'
						})
					}
				} catch (e) {

				}
			},
			changeTime: function(date) {
				return myfun.detailTime(date)
			},
			//获取好友列表
			getFriends: function() {
				uni.request({
					url: this.serverUrl+'/index/getfriend',
					data: {
						uid: this.uid,
						state: 0,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						this.refresh = true
						console.log(status)
						if (status == 200) {
							let res = data.data.result
								this.noone=false
							console.log(res)
							if (res.length > 0) {
								for (let i = 0; i < res.length; i++) {
									res[i].imgurl = this.serverUrl + res[i].imgurl
									if (res[i].markname) {
										res[i].name = res[i].markname
									}
									this.friends.push(res[i])
								}
								 this.isOk(this.groups)
								console.log(this.friends)
							}
							else{
								this.noone=true
							}
							// this.getGroup()
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			//获取群
			getGroup: function() {
				//console.log('获取群')
				uni.request({
					url: this.serverUrl+'/index/getgroup',
					data: {
						uid: this.uid,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						//console.log(status)
						if (status == 200) {
							let res = data.data.result
							console.log(res)
							if (res.length > 0) {
								for (let i = 0; i < res.length; i++) {
									//console.log(res[i].name)
									res[i].imgurl = this.serverUrl + res[i].imgurl
									this.groups.push(res[i])
									
									this.socket.emit('group',res[i].id);
								}
							}
							this.isOk(this.friends)
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			getLastMsg: function(arr, i) {
				uni.request({
					url: this.serverUrl+'/index/getlastmsg',
					data: {
						uid: this.uid,
						fid: arr[i].id,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(status)
						if (status == 200) {
							let res = data.data.result
							if (res.types == 0) {

							} else if (res.types == 1) {
								res.message = '[图片]'
							} else if (res.types == 2) {
								res.message = '[音频]'
							} else if (res.types == 3) {
								res.message = '[地图]'
							}
							console.log(res)
							let e = arr[i]
							e.msg = res.message
							arr.splice(i, 1, e)

						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			getUnread: function(arr, i) {
				uni.request({
					url:this.serverUrl+ '/index/unreadmsg',
					data: {
						uid: this.uid,
						fid: arr[i].id,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(status)
						if (status == 200) {
							let res = data.data.result
							console.log(res)
							let e = arr[i]
							e.tip = res
							arr.splice(i, 1, e)

						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			isOk:function(e){
				if(e.length>0){
					this.friends=this.friends.concat(this.groups)
					this.friends = myfun.paixu(this.friends, 'lastTime', 0)
				}
			},
			FriendRequest: function() {
				uni.request({
					url: this.serverUrl+'/index/getfriend',
					data: {
						uid: this.uid,
						state: 1,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						this.refresh = true
						let status = data.data.status
						if (status == 200) {
							this.noone=false
							let res = data.data.result
							this.requestData = res.length
							if (res.length > 0) {
								this.requestTime = res[0].lastTime
								for (let i = 0; i < res.length; i++) {
									if (this.requestTime < res[i].lastTime) {
										this.requestTime = res[i].lastTime
									}
								}
							}
							else{
								this.noone=true
							}
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			//socket模块
			join:function(uid){
				this.socket.emit('login',uid);
			},
			//socket聊天数据接收
			receiveSocketMsg:function(){
				this.socket.on('msg',(msg,fromid) => {
					let nmsg = '';
					if(msg.types == 0){
						nmsg = msg.message;
						console.log(nmsg)
					}else if(msg.types == 1){
						nmsg = '[图片]';
					}
					else if(msg.types == 2){
						nmsg = '[语音]';
					}else if(msg.types == 3){
						nmsg = '[地图]';
					}
					
					for(let i =0;i<this.friends.length;i++){
						if(this.friends[i].id ==fromid){
							let e = this.friends[i];
							e.lastTime = new Date();
							e.msg = nmsg;
							e.tip++;
							//删除原来数据
							this.friends.splice(i,1);
							//插入最底部
							this.friends.unshift(e);
						}
					}
				})
				
			},
			  groupSocket: function() {
				  console.log('377groupSocket')
			                this.socket.on('groupmsg', (msg,fromid,gid,name,img) => {
			                    //console.log(msg,'379')
			                        let nmsg = '';
			                        if (msg.types == 0) {
			                            nmsg = msg.message;
										console.log(nmsg)
			                        } else if (msg.types == 1) {
			                            nmsg = '[图片]';
			                        } else if (msg.types == 2) {
			                            nmsg = '[语音]';
			                        } else if (msg.types == 3) {
			                            nmsg = '[地图]';
			                        }
								console.log(this.friends.length)
								//console.log(this.friends[0].id)
								
			                        for (let i = 0; i < this.friends.length; i++) {
										
			                            if (this.friends[i].id == gid) {
			                                let e = this.friends[i];
											 //console.log(e)
			                                e.lastTime = new Date();
			                                if(fromid==this.uid){
			                                    e.msg=nmsg
			                                }
			                                else{
			                                    e.msg = name+':'+nmsg;
			                                }
			                                
			                                 //console.log(e.msg)
			                                e.tip++;
											// console.log(this.friends)
			                                //删除原来数据
			                                this.friends.splice(i,1);
			                                //插入最底部
			                               this.friends.unshift(e);
										  
			                            }
			                        }
									 // console.log(this.friends)
			                })
			            },
						
						  //离开聊天页面触发的socket事件
						            leaveChatr:function(){
						                this.socket.on('leavechatr',(uid,fid)=>{
						                    console.log('离开聊天页面')
						                    for (let i = 0; i < this.friends.length; i++) {
						                        if (this.friends[i].id == fid) {
						                            let e = this.friends[i];                            
						                            e.tip = 0;
						                            //替换原来数据
						                            this.friends.splice(i,1,e);
						                        }
						                    }
						                })
						            },
			goSearch: function() {
				uni.navigateTo({
					url: '/pages/search/search',
				})
			},
			goUser: function() {
				uni.navigateTo({
					url: '/pages/userhome/userhome',
				})
			},
			buildGroup: function() {
				uni.navigateTo({
					url: '/pages/buildgroup/buildgroup',
				})
			},
			toChatRoom:function(data){
				console.log(data.id)
				uni.navigateTo({
					url:'/pages/chatroom/chatroom?id='+data.id+'&name='+data.name+'&img='+data.imgurl+'&type='+data.type,
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';

	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
	}

	.main {
		// border:1px solid red;
		padding-top: 104rpx;
		padding-bottom: $uni-spacing-col-base;
	}

	.refresh {
		text-align: center;
		padding-top: 480rpx;

		image {
			width: 32rpx;
			height: 32rpx;
		}

		.ref-title {
			padding-top: 10rpx;
			font-size: $uni-font-size-base;
			color: rgba(39, 40, 50, 0.4);
			line-height: 40rpx;
			font-family: PingFangSC-Regular, PingFang SC;
		}
	}

	.noone {
		text-align: center;
		padding-top: 400rpx;

		image {
			height: 250rpx;
			width: 158rpx;
		}

		.no-title {
			padding: 32rpx 0;
			font-size: $uni-font-size-base;
			color: rgba(39, 40, 50, 0.4);
			line-height: 40rpx;
			font-family: PingFangSC-Regular, PingFang SC;
		}

		.search-bt {
			display: inline-block;
			width: 240rpx;
			height: 96rpx;
			background: $uni-color-primary;
			box-shadow: 0rpx 52rpx 36rpx -32rpx rgba(255, 228, 49, 0.4);
			border-radius: 48rpx;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			line-height: 96rpx;
			font-family: PingFangSC-Regular, PingFang SC;
		}
	}

	.friend-list {
		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;

		&:active {
			background-color: $uni-bg-color-grey;
		}

		.friend-list-l {
			position: relative;
			float: left;

			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}

			.tip {
				position: absolute;
				z-index: 10;
				top: -8rpx;
				left: 68rpx;
				min-width: 20rpx;
				padding: 0 8rpx;
				height: 36rpx;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}

		.friend-list-r {
			padding-left: 128rpx;

			.top {
				height: 58rpx;

				.time {
					float: right;
					color: $uni-text-color-disable;
					font-size: $uni-font-size-sm;
					line-height: 50rpx;
				}

				.name {
					float: left;
					color: $uni-text-color;
					line-height: 50rpx;
					font-size: 36rpx;
					font-weight: 400;
				}
			}

			.news {
				line-height: 40rpx;
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
	}
</style>