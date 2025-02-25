<template>
    <view class="content">
        <view class="top-bar">
            <view class="top-bar-left" @tap="backSignin">
                <image class="back-img" src="../../static/images/common/back.png"></image>
            </view>
        </view>
        <view class="logo">
            <image src="../../static/images/sign/logo1.png"></image>
        </view>
        <view class="main">
            <view class="main-text">注册</view>
            <view class="main-input">
                <view class="input-div">
                    <input type="text" value="" placeholder="请取个名字" class="user"
                        placeholder-style="color:#aaa;font-size:400" @input="matchUser" />
                    <view class="employ" v-if="useremploy">已占用</view>
                    <image src="../../static/images/sign/right1.png" v-if="isuser" class="ok"></image>
                </view>
                <view class="input-div">
                    <input type="text" value="" placeholder="请输入邮箱" class="email"
                        placeholder-style="color:#aaa;font-size:400" @input="isEmail" />
                    <view class="employ" v-if="emailemploy">已占用</view>
                    <view class="invalid" v-if="invalid">邮箱无效</view>
                    <image src="../../static/images/sign/right1.png" v-if="isemail" class="ok"></image>
                </view>
                <view class="input-div">
                    <input :type="type" value="" placeholder="这里输入密码" class="pwd"
                        placeholder-style="color:#aaa;font-size:400" @input="getPsw" />
                    <image :src="lookUrl" class="look" @tap="looks"></image>
                </view>
            </view>
        </view>
        <view :class="[{submit:isok},{submit1:!isok}]" @tap='signUp'>注册</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'password',
				isuser: false, //用户名是否可用
				isemail: false, //邮箱是否可用
				look: true, //密码是否可见
				invalid: false, //邮箱是否有效
				useremploy: false, //是否被占用
				emailemploy: false,
				lookUrl: "../../static/images/sign/biyan.png",
				email: "",
				isok: false,
				user: "",
				psw: ""
			}
		},
			
		computed:{
			isOk: function() {
				let that=this
				if (that.isuser && that.psw.length > 5 && that.isemail) {
					that.isok=true
				} else {
					that.isok = false
				}
				return that.isok
			}
		},
		methods: {
			//显示密码功能函数
			looks: function() {
				if (this.email.length > 0) {
					if (this.look) {
						this.type = 'password'
						this.look = !this.look
						this.lookUrl = "../../static/images/sign/biyan.png"
					} else {
						this.type = 'text'
						this.look = !this.look
						this.lookUrl = "../../static/images/sign/look.png"
					}
				}
			},
			//判断邮箱是否有效函数
			isEmail: function(e) {
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				this.email = e.detail.value
				if (this.email.length > 0) {
					if (reg.test(this.email)) {
						this.invalid = false
						this.matchEmail()

					} else {
						this.invalid = true
					}
					this.isOk
				} else {
					this.invalid = false
					this.isOk
				}
			},
			backSignin: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			//后端匹配邮箱
			matchEmail: function(e) {
				console.log(this.email)
				if (this.email.length > 0) {
					uni.request({
						url:'http://localhost:3000/signup/judge',
						data: {
							data: this.email,
							type: 'email',
						},
						method: 'POST',

						success: (data) => {
							console.log(data)
							let status = data.data.status;
							if (status == 200) {
								let res = data.data.result;
								if (res > 0) {
									//邮箱已存在
									this.emailemploy = true
									this.isemail = false
								} else {
									this.emailemploy = false
									this.isemail = true
								}
								this.isOk
							} else if (status == 500) {
								uni.showToast({
									title: '服务器输错啦！',
									icon: 'none',
									duration: 2000
								})
							}
						}
					})
				}
			},
			//后端匹配用户名
			matchUser: function(e) {
				this.user=e.detail.value
				uni.request({
					url: 'http://localhost:3000/signup/judge',
					data: {
						data: this.user,
						type: 'name',
					},
					method: 'POST',

					success: (data) => {
						console.log(data )
						let status = data.data.status;
						if (status == 200) {
							let res = data.data.result;
							if (res > 0) {
								//用户名已存在
								this.useremploy = true
								this.isuser = false
							} else {
								this.useremploy = false
								this.isuser = true
							}
							this.isOk
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else {
							this.useremploy = false
							this.isuser = false
							this.isOk
						}
					}
				})
				this.isOk
			},
			getPsw: function(e) {
				this.psw = e.detail.value
				console.log(this.psw.length)
				this.isOk
			},
			//注册提交
			signUp: function() {
				if (this.isok) {
					uni.request({
						url: 'http://localhost:3000/signup/add',
						data: {
							name: this.user,
							mail: this.email,
							pwd: this.psw,
						},
						method: 'POST',

						success: (data) => {
							console.log(data)
							let status = data.data.status;
							console.log(status)
							if (status == 200) {
								uni.navigateTo({
									url: '../signin/signin?user=' + this.user
								})
							} else if (status == 500) {
								uni.showToast({
									title: '服务器出错啦！',
									icon: 'none',
									duration: 2000
								})
							} else {
								this.useremploy = false
								this.isuser = false
							}
						}
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

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
		padding: 54rpx $uni-spacing-row-lg 120rpx;


		.main-text {
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx
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

			.input-div {
				position: relative;
			}

			.employ,
			.invalid {
				position: absolute;
				right: 0;
				top: 40rpx;
				font-size: $uni-font-size-base;
				font-weight: 500;
				color: $uni-color-warning;
				line-height: 88rpx;
			}

			.ok {
				position: absolute;
				right: 0;
				top: 76rpx;
				width: 38rpx;
				height: 30rpx;
			}

			.look {
				position: absolute;
				right: 0;
				top: 76rpx;
				width: 32rpx;
				height: 18rpx;
			}

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

	.submit1 {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: rgba(39, 40, 50, 0.2);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color-inverse;
		line-height: 96rpx;
		text-align: center;
	}
</style>