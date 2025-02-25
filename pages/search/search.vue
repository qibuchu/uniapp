<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/search/search.png" class="search-img"></image>
				<input type="search" value="" placeholder="搜索用户/群" class="search"
					placeholder-style="color:#aaa;font-size:400" @input="search" />
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="backOne">取消</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userarr.length>0">用户</view>
				<view class="list user" v-for="(item,index) in userarr" :key="index">
					<navigator :url="'../userhome/userhome?id='+item._id" hover-class="none">
						<image :src="item.imgurl"></image>
					</navigator>
					
					<view class="names">
						<view class="name" v-html="item.names"></view>
						<view class="email" v-html="item.emails"></view>
					</view>
					<view class="right-btn send" v-if="item.tip==1" @tap="toChatRoom(item)">发消息</view>
					<view class="right-btn add" v-if="item.tip==0" @tap="addFriendBtn(item._id)">加好友</view>
				</view>
			</view>
		</view>
		<view class="modify" :style="{bottom:-widHeight+'px'}" :animation="animationData">
			<view class="modify-header">
				<view class="close" @tap="modify">取消</view>
				<view class="title">添加好友</view>
				<view class="define" @tap="addSubmit">确定</view>
			</view>
			<view class="modify-main">
				<textarea v-model="msg" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import myfun from '../../commons/js/myfun.js';
	export default {
		data() {
			return {
				userarr: [],
				uid: '',
				fid:'',
				token: '',
				myname: '',
				msg:'',
				animationData: {},
				isModify: false,
				widHeight: '',
			};
		},
		onLoad: function() {
			this.getStorages()
		},
		onReady:function(){
			this.getElementStyle()
		},
		methods: {
			//获取页面高度
			getElementStyle: function() {
				const query = uni.createSelectorQuery().in(this);
				query
					.select(".modify")
					.boundingClientRect((data) => {
						console.log("得到布局位置信息" + JSON.stringify(data));
						console.log("节点离页面顶部的距离为" + data.top);
						this.widHeight = data.height;
						console.log(this.widHeight)
					})
					.exec();

			},
			
			// 添加好友
			modify: function() {
				if (this.ispwd) {
					this.pwd = 'block';
			
				} else {
					this.pwd = 'none';
				}
				this.isModify = !this.isModify;
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: 'ease',
				});
				if (this.isModify) {
					animation.bottom(0).step();
				} else {
					animation.bottom(-this.widHeight).step();
				}
				this.animationData = animation.export();
			},
			//添加好友按钮
			addFriendBtn: function(fid) {
				this.fid=fid
				this.msg=this.myname+'请求添加好友~'
				this.modify();
			},
			//确定添加好友
			addSubmit:function(){
				if(this.msg.length>0){
					this.modify()
					uni.request({
						url: 'http://localhost:3000/friend/applyfriend',
						data: {
							uid: this.uid,
							fid: this.fid,
							token: this.token,
							msg:this.msg
						},
						method: 'POST',
						success: (data) => {
							console.log(data)
							
							let status = data.data.status
							console.log(status)
							if (status == 200) {
						uni.showToast({
							title: '好友请求发送成功',
							icon: 'none',
							duration: 2000
						})
							} else if (status == 400) {
					                
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
						},
					
					})
				}
			},
			toChatRoom: function(data) {
				console.log(data.id)
				uni.navigateTo({
					url: '/pages/chatroom/chatroom?id=' + data.id + '&name=' + data.name + '&img=' + data
						.imgurl + '&type=' + data.type,
				})
			},
			getStorages: function() {
				try {
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
						this.uid = value.id
						this.myname = value.name
						this.token = value.token
					} else {
						uni.navigateTo({
							url: '../signin/signin'
						})
					}
				} catch (e) {

				}
			},
			search: myfun.Debounce(function(e) {
				this.userarr = []
				let searchval = e.detail.value;
				console.log(searchval);
				if (searchval.length > 0) {
					this.searchUser(searchval)
				}
			}, 500),
			// search1: function(e) {
			// 	this.userarr = []
			// 	let searchval = e.detail.value;
			// 	if (searchval.length > 0) {
			// 		this.searchUser(searchval)
			// 	}
			// },
			//寻找匹配的用户函数
			searchUser: function(e) {
				uni.request({
					url: 'http://localhost:3000/search/user',
					data: {
						data: e,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						console.log(data)
						let status = data.data.status
						if (status == 200) {
							let arr = data.data.result
							console.log(arr)
							console.log(e)
							// let exp = eval("/" + e + "/g")
							for (let i = 0; i < arr.length; i++) {
								  
								if (arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {
									this.isFriend(arr[i],e)
									console.log(1)
									// arr[i].imgurl = 'http://localhost:3000' + arr[i].imgurl
									// arr[i].name = arr[i].name.replace(exp,
									// 	"<span style='color:#4AAAAFF'>" + e + "</span>")
									// arr[i].email =arr[i].email.replace(exp,
									// 	"<span style='color:#4AAAAFF'>" + e + "</span>")
									// this.userarr.push(arr[i])
								}
                            
							}
						} else if (status == 500) {
							uni.showToast({
								title: '服务器输错啦！',
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
			//判断是否为好友
			isFriend: function(arr,e) {
				console.log(2)
				console.log(arr)
				let tip = 0
					let exp = eval("/" + e + "/g")
				if (arr._id == this.uid) {
					tip = 2
					arr.tip = tip
					arr.imgurl = 'http://localhost:3000'+ arr.imgurl
					arr.names = arr.name.replace(exp,
						"<span style='color:#4AAAFF'>" + e + "</span>")
					arr.emails=arr.email.replace(exp,
						"<span style='color:#4AAAFF'>" + e + "</span>")
					this.userarr.push(arr)
				} else {
					uni.request({
						url: 'http://localhost:3000/search/isfriend',
						data: {
							uid: this.uid,
							fid: arr._id,
							token: this.token
						},
						method: 'POST',
						success: (data) => {
							console.log(data)
							
							let status = data.data.status
							if (status == 200) {
								tip = 1
								console.log(3)
							} else if (status == 400) {
                                     console.log(4)
							} else if (status == 500) {
								uni.showToast({
									title: '服务器输错啦！',
									icon: 'none',
									duration: 2000
								})
							} else if (status == 300) {
								uni.navigateTo({
									url: '../signin/signin?name' + this.myname
								})
							}
							arr.tip = tip
							arr.id=arr._id
							arr.type=0
							arr.imgurl = 'http://localhost:3000'+arr.imgurl
							arr.names = arr.name.replace(exp,
								"<span style='color:#4AAAFF'>" + e + "</span>")
							arr.emails=arr.email.replace(exp,
								"<span style='color:#4AAAFF'>" + e + "</span>")
							this.userarr.push(arr)
						},

					})
				}

			},
			// 返回上一个页面
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.top-bar {
		background-color: rgba(255, 255, 255, 0.96);
		border-bottom: 1rpx solid $uni-border-color;

		.search-div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;
		}

		.search {
			padding: 0 60rpx 0 12rpx;
			height: 60rpx;
			background: $uni-bg-color-grey;
			border-radius: 10rpx;
		}

		.search-img {
			position: absolute;
			width: 40rpx;
			height: 40rpx;
			top: 22rpx;
			right: 130rpx;
		}
	}

	.main {
		padding: 88rpx 10rpx;

		.result {
			padding: $uni-spacing-col-base;

			.title {
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}

			.list {
				width: 100%;
				padding: 20rpx 0;
				height: 80rpx;

				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
					float: left;
					background-color: rgba(255,228,49,1);
				}
			}

			.names {
				float: left;
				padding-left: $uni-spacing-col-base;
			}

			.name {
				font-size: 36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
			}

			.email {
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
				line-height: 28rpx;
			}

			.right-btn {
				float: right;
				width: 120rpx;
				height: 48rpx;
				background: $uni-color-primary;
				border-radius: 14rpx;
				font-size: $uni-font-size-sm;
				font-weight: 400;
				color: $uni-text-color;
				line-height: 48rpx;
				text-align: center;
				margin-top: 16rpx;
			}

			.send {
				background: $uni-color-primary;
				color: $uni-text-color;
			}

			.add {
				background: rgba(74, 170, 255, 0.1);
				color: $uni-color-success;
			}
		}
	}
	// 修改弹窗样式
	.modify {
		position: fixed;
		z-index: 1002;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
	
		.modify-header {
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height);
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid $uni-border-color;
	
			.close {
				padding-left: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
	
			.title {
				flex: auto;
				text-align: center;
				font-size: 40rpx;
				color: $uni-text-color;
				line-height: 88rpx;
			}
	
			.define {
				padding-right: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-color-success;
				line-height: 44rpx;
			}
		}
	
		.modify-main {
			display: flex;
			padding: $uni-spacing-col-base;
			flex-direction: column;
	
			.modify-pwd {
				padding: 0 20rpx;
				box-sizing: border-box;
				flex: auto;
				width: 100%;
				margin-bottom: $uni-spacing-col-base;
				flex: auto;
				height: 88rpx;
				background-color: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
			}
	
			.modify-content {
				padding: 16rpx 20rpx;
				box-sizing: border-box;
				flex: auto;
				width: 100%;
				height: 386rpx;
				background-color: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
	}
</style>