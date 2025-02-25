<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="text" @tap="back">取消</view>
			</view>
			<view class="top-bar-between">
				<view class="title">创建群聊</view>
			</view>
			<view class="top-bar-right spice">

			</view>
		</view>
		<view class="main">
			<view class="top">
				<!-- 群头像 -->
				<view class="group-img">
					<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
					<image src="../../static/images/group/change.png" class="pan" @tap="upload"></image>
					<image :src="cropFilePath" class="img" @tap="upload"></image>
				</view>
				<!-- 群名字 -->
				<view class="group-name">
					<input class="group-name-input" type="text" placeholder="为群取个名字" placeholder-style="color:#aaa;" v-model="name"/>
				</view>
				<view class="title">用户</view>
			</view>
			<!-- 用户选择 -->
			<view class="friends">

				<view class="user" v-for="(item,index) in friends" :key="index" @tap="selectFriend(index)">
					<view class="selected" :class="{isselected:item.selected}">
						<image src="../../static/images/group/choose.png" v-if="item.selected" class="selected-img">
						</image>
					</view>
					<image class="user-img" :src="item.imgurl"></image>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn" :class="selectedn>0&&name.length>0?'btn1':'noselected'" @tap="submit">创建({{selectedn}})</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	export default {
		data() {
			return {
				uid:'',
				token:'',
				gimgurl:'',
				friends: [],
				cropFilePath: "../../static/images/group/group.png",
				tempFilePath: '',
				headimg: '',
				name:'',
				selectedn:0,
				user:[],
				// user: [{
				// 		selected: false,
				// 		imgUrl: '../../static/images/img/one.png',
				// 		name: "曹建豪"
				// 	},
				// 	{
				// 		selected: true,
				// 		imgUrl: '../../static/images/img/three.png',
				// 		name: "曹建豪"
				// 	},
				// 	{
				// 		selected: true,
				// 		imgUrl: '../../static/images/img/one.png',
				// 		name: "曹建豪"
				// 	},
				// 	{
				// 		selected: false,
				// 		imgUrl: '../../static/images/img/one.png',
				// 		name: "曹建豪"
				// 	}
				// ]
			};
		},
		components: {
			ImageCropper
		},
		computed:{
            selec:function(){
				if(this.selectedn>0){
					return true
				}
				else{
					return false
				}
			}
		},
		onLoad:function(){
			this.getStorages();
			this.selectNober();
			
			this.getFriends();
		},
		onReady:function(){
			
		},
		methods: {
			submit:function(){
				if(this.selectedn>0&&this.name.length>0){
					for(let i=0;i<this.friends.length;i++){
						if(this.friends[i].selected){
							this.user.push(this.friends[i].id)
						}
					}
					uni.request({
						url: 'http://localhost:3000/group/creategroup',
						data: {
							uid: this.uid,
							token: this.token,
							name:this.name,
							imgurl:this.gimgurl,
							user:this.user
						},
						method: 'POST',
						success: (data) => {
							console.log(this.gimgurl)
							let status = data.data.status
							console.log(status)
							if (status == 200) {
								// let res = data.data.rest
								// console.log(res)
								// this.getGroup()
								uni.navigateTo({
									url: '../index/index'
								})
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
				}
			},
			//获取好友列表
			getFriends: function() {
				uni.request({
					url: 'http://localhost:3000/index/getfriend',
					data: {
						uid: this.uid,
						state: 0,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(status)
						if (status == 200) {
							let res = data.data.result
								// this.noone=false
							console.log(res)
							if (res.length > 0) {
								for (let i = 0; i < res.length; i++) {
									res[i].selected=false
									res[i].imgurl = 'http://localhost:3000' + res[i].imgurl
									if (res[i].markname) {
										res[i].name = res[i].markname
									}
									this.friends.push(res[i])
								}
							}
							else{
								// this.noone=true
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
			selectNober:function(){
				for(let i=0;i<this.friends.length;i++){
					if(this.friends[i].selected){
						this.selectedn++
					}
				}
			},
			getStorages: function() {
				try {
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
						this.uid = value.id
						this.token = value.token
					} else {
						uni.navigateTo({
							url: '../signin/signin'
						})
					}
				} catch (e) {
			
				}
			},
			back: function() {
				uni.navigateBack({
					url: '../index/index',
				})
			},
			selectFriend:function(e){
			  if(this.friends[e].selected){
				  this.friends[e].selected=false
				  this.selectedn--
			  }
			  else{
				  this.friends[e].selected=true
				  this.selectedn++
				  if(this.selectedn==0){
					  
				  }
				  }
			},
			//图片裁剪
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
				});
			},
			confirm(e) {
				this.tempFilePath = ''
				this.cropFilePath = e.detail.tempFilePath
				this.headimg = e.detail.tempFilePath;
				uni.uploadFile({
					url: 'http://localhost:3000/files/upload',
					filePath: this.headimg,
					name: 'file',
					fileType: 'image',
					formData: {
						url:'group',
						name:this.uid+new Date().getTime(),
						token:this.token
					},
				success: (uploadFileRes) => {
					var backstr = uploadFileRes.data
					console.log(backstr)
					this.gimgurl=backstr;
				},
				complete() {
					// uni.hideLoading();
				},
				fail(e) {
					console.log("this is errormes " + e.message)
				}
				});
			},
			cancel() {
				console.log('canceled')
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.top-bar {
		background: rgba(255, 255, 255, 1);
		border-bottom: 1px solid $uni-border-color;
	}

	.main {
		display: flex;
		flex-direction: column;

		.top {
			padding-top: 148rpx;
			position: fixed;
			background-color: #fff;
			width: 100%;
			z-index: 100;
		}

		.group-img {
			margin: 0 auto;
			width: 196rpx;
			height: 196rpx;
			background: $uni-color-primary;
			box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
			border-radius: 40rpx;
			overflow: hidden;
			position: relative;

			.img {
				width: 196rpx;
				height: 196rpx;
				// background: $uni-color-primary;
				// box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
				// border-radius: 40rpx;
			}

			.pan {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				width: 56rpx;
				height: 56rpx;
				margin: auto;
				z-index: 10;
			}
		}

		.group-name-input {
			text-align: center;
			height: 92rpx;
			background: $uni-bg-color-grey;
			border-radius: 46rpx;
			font-size: 32rpx;
			color: $uni-text-color;
		}

		.title {
			padding: $uni-spacing-col-base $uni-spacing-row-base 20rpx;
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}

		.group-name {
			padding: 62rpx $uni-spacing-col-base 0;
		}

		.friends {
			padding: 600rpx $uni-spacing-row-base 100rpx;

			.user {
				display: flex;
				flex-direction: row;
				height: 120rpx;
				align-items: center;

				.selected {
					margin-right: 30rpx;
					width: 48rpx;
					height: 48rpx;
					background: rgba(255, 228, 49, 0.5);
					border-radius: 24rpx;
					position: relative;

					.selected-img {
						position: absolute;
						width: 30rpx;
						height: 20rpx;
						left: 10rpx;
						top: 16rpx;
					}
				}

				.isselected {
					background: rgba(255, 228, 49, 1);
				}

				.user-img {
					background: rgba(255, 228, 49, 1);
					width: 80rpx;
					height: 80rpx;
					flex: none;
					border-radius: $uni-border-radius-base;
				}

				.name {
					padding-left: 32rpx;
					font-size: 36rpx;
					color: $uni-text-color;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
		}
	}
	.bottom-bar{
		background: rgba(250,250,250,0.9);
		.bottom-btn{
			margin:0 $uni-spacing-col-base;
			background: $uni-color-primary;
		}
		.noselected{
			background: $uni-bg-color-grey;
			border-radius: $uni-border-radius-sm;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			height: 80rpx;
		}
	}
</style>