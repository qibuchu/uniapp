<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toSignup">
				<view class="text">
					注册
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/sign/logo1.png"></image>
		</view>
		<view class="main">
			<view class="main-text">登录</view>
			<view class="slogan">你好，欢迎光临</view>
			<view class="main-input">
				<input v-model="user" type="text" value="" placeholder="用户名/邮箱" class="user"
					placeholder-style="color:#aaa;font-size:400" />
				<input v-model="psw" type="password" value="" placeholder="请输入密码" class="pwd"
					placeholder-style="color:#aaa;font-size:400"/>
			</view>
			<view class="tips" :style="{display:mon}">输入用户名或密码错误</view>
		</view>
		<view class="submit" @tap="login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '', //用户名
				psw: '', //密码
				token: '',
				mon:'none'
			}
		},
		onLoad:function(e){
			if(e.user){
				this.user=e.user
				console.log('注册成功请登录')
				uni.showToast({
					title:'注册成功请登录',
					icon:'none',
					duration:2000
				})
			}
			else if(e.name){
				this.user=e.name
				uni.showToast({
					title:'登录过期请重新登录',
					icon:'none',
					duration:2000
				});
			}
			else if(e.cgpwd){
				this.user=e.cgpwd
				uni.showToast({
					title:'登录过期请重新登录',
					icon:'none',
					duration:2000
				});
			}
		},
		methods: {
			//跳转注册页面
			toSignup: function() {
				uni.navigateTo({
					url: "../signup/signup"
				})
			},
			//登录提交
			login: function() {
				if (this.psw && this.user) {
					uni.request({
						url: "http://localhost:3000/signin/match",
						data: {
							data: this.user,
							pwd: this.psw
						},
						method: 'POST',

						success: (data) => {
							// console.log(data)
							let status = data.data.status;
							if (status == 200) {
								let res = data.data.back
								console.log(res)
								this.mon='none'
								uni.navigateTo({
									url: "../index/index"
								})
								try {
									uni.setStorageSync('user', {
										'id': res.id,
										'name': res.name,
										'imgUrl': res.imgurl,
										'token': res.token
									})
								} catch (e) {
									console.log('数据存储出错')
								}
								// try {
								// 	const value = uni.getStorageSync('user')
								// 	if (value) {
								// 		console.log(value)
								// 	}
								// }catch(e){
									
								// }
							} else if (status == 400) {
                                      this.mon='block'
									  this.psw=''
							} else if (status == 500) {
								uni.showToast({
									title: '服务器出错啦！',
									icon: 'none',
									duration: 2000
								})
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';

	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		// text-align: center;
		padding-top: var(--status-bar-height);
	}

	.logo {
		text-align: center;

		image {
			padding-top: 256rpx;
			width: 194rpx;
			height: 92rpx;
			margin: 0 auto;
		}
	}

	.main {
		padding: 54rpx $uni-spacing-row-lg;
		width: 100%;

		.main-text {
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx
		}

		.slogan {
			font-size: 40rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}

		.main-input {
			padding-top: 8rpx;

			input {
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: $uni-border-color 1px solid;
			}
		}

		.tips {
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			lime-height: 56rpx;
		}
	}

	.submit {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: $uni-color-primary;
		box-shadow: 0rpx 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}
</style>