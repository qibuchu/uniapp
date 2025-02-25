<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back-img" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-between">
				<view class="title">好友请求</view>
			</view>
			<view class="top-bar-right">
				<view class="spice"></view>
			</view>
		</view>
		<view class="main">
			<view class="requester" v-for="(item,index) in requesters" :key="index">
				<view class="request-top">
					<view class="reject btn" @tap="refuse(item.id)">拒绝</view>
					<view class="header-img">
						<image :src="item.imgurl"></image>
					</view>
					<view class="aggree btn" @tap="agree(item.id)">同意</view>
				</view>
				<view class="request-center">
					<view class="title">{{item.name}}</view>
					<view class="time">{{changeTime(item.lastTime)}}</view>
				</view>
				<view class="notic">
					<text>留言：</text>
					{{item.msg}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myfun from '../../commons/js/myfun.js';
	export default {
		data() {
			return {
				requesters: [],
				uid: '',
				myname: '',
				token: ''
			};
		},
		onLoad: function() {
	this.getStorages()
			this.FriendRequest()
            		
		},
		methods: {
			// 返回上一个页面
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				})
			},
			changeTime: function(date) {
				return myfun.detailTime(date)
			},
			getStorages: function() {
				try {
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
						this.uid = value.id
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
			FriendRequest: function() {
				uni.request({
					url: 'http://localhost:3000/index/getfriend',
					data: {
						uid: this.uid,
						state: 1,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(this.uid,this.token)
						console.log(status)
						if (status == 200) {
							let res = data.data.result
							console.log(res)
							for (let i = 0; i < res.length; i++) {
								res[i].imgurl = 'http://localhost:3000' + res[i].imgurl
								this.getLeave(res, i)
							}
							this.requesters = res
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
							}
						// else if (status == 300) {
						// 	uni.navigateTo({
						// 		url: '../signin/signin?name' + this.myname
						// 	})
						// }
					}
				})
			},
			getLeave: function(arr, i) {
				uni.request({
					url: 'http://localhost:3000/index/getlastmsg',
					data: {
						uid: this.uid,
						fid: arr[i].id,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(arr[i].id)
						console.log(status)
						if (status == 200) {
							let res = data.data.result
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
			refuse:function(fid){
				uni.request({
					url: 'http://localhost:3000/friend/deletefriend',
					data: {
						uid: this.uid,
						fid: fid,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(status)
						if (status == 200) {
							let res = data.data.result
							for(let i=0;i<this.requesters.length;i++){
								if(this.requesters[i].id==fid){
									this.requesters.splice(i,1)
								}
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
			agree:function(fid){
				uni.request({
					url: 'http://localhost:3000/friend/updatefriendstate',
					data: {
						uid: this.uid,
						fid: fid,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(status)
						if (status == 200) {
							let res = data.data.result
						for(let i=0;i<this.requesters.length;i++){
							if(this.requesters[i].id==fid){
								this.requesters.splice(i,1)
							}
						}
							console.log(res)
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
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
	}

	.main {
		padding: 108rpx $uni-spacing-col-base;

		.requester {
			margin-top: 112rpx;
			padding: $uni-spacing-col-base;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.1);
			border-radius: $uni-border-radius-base;
		}

		.request-top {
			display: flex;
			flex-direction: row;

			.btn {
				flex: none;
				text-align: center;
				width: 160rpx;
				height: 64rpx;
				background: rgba(255, 93, 91, 0.1);
				border-radius: 40rpx;
				font-size: $uni-font-size-lg;
				line-height: 64rpx;
			}

			.reject {
				color: $uni-color-warning;
				background-color: rgba(255, 93, 91, 0.1);
			}

			.aggree {
				color: $uni-text-color;
				background-color: $uni-color-primary;
			}

			.header-img {
				margin-top: -104rpx;
				flex: auto;
				text-align: center;

				image {
					width: 144rpx;
					height: 144rpx;
					border-radius: 50%;
					background-color: $uni-color-primary;
				}

			}
		}

		.request-center {
			text-align: center;
			padding-top: 20rpx;
			padding-bottom: 40rpx;

			.title {
				font-size: 36rpx;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 50rpx;
			}

			.time {
				font-size: $uni-font-size-base;
				color: $uni-text-color-disable;
				line-height: 34rpx;
			}

		}

		.notic {
			padding: $uni-spacing-row-sm $uni-spacing-col-base;
			font-size: $uni-font-size-base;
			background-color: $uni-bg-color-grey;
			color: $uni-text-color;
			line-height: 40rpx;

		}
	}
</style>