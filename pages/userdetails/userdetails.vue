<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back-img" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-between">
				<view class="title">详情</view>
			</view>
			<view class="top-bar-right spice">

			</view>
		</view>
		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">头像</view>
					<view class="user-head">
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image :src="cropFilePath" @tap="upload" class="user-img"></image>
					</view>
					<view class="more" v-if="id==uid">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row head" @tap="modify('explain','签名',user.explain,false)" v-if="id==uid">
					<view class="title">签名</view>
					<view class="cont">
						{{user.explain}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row head" v-if="id!=uid">
					<view class="title">签名</view>
					<view class="cont">
						{{user.explain}}
					</view>
				</view>
				<view class="row head">
					<view class="title">注册</view>
					<view class="cont">
						{{changeTime(user.time)}}
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row" @tap="modify('name','昵称',user.name,false)" v-if="id==uid">
					<view class="title">昵称</view>
					<view class="cont">
						{{user.name}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row" v-if="id!=uid" @tap="modify('markname','昵称',markname,false)">
					<view class="title">昵称</view>
					<view class="cont">
						{{markname}}
					</view>
				</view>
				<view class="row">
					<view class="title">性别</view>
					<view class="cont">
						<picker @change="bindPickerChange" :value="index" :range="array" v-if="id==uid">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
						<view class="uni-input" v-if="id!=uid">{{array[index]}}</view>
					</view>
					<view class="more" v-if="id==uid">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">生日</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input" v-if="id==uid">{{date}}</view>
						</picker>
					</view>
					<view class="more" v-if="id!=uid">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row" v-if="id==uid" @tap="modify('phone','电话',user.phone,false)">
					<view class="title">电话</view>
					<view class="cont">
						{{user.phone}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row" v-if="id!=uid">
					<view class="title">电话</view>
					<view class="cont">
						{{user.phone}}
					</view>
				</view>
				<view class="row" v-if="id==uid" @tap="modify('email','邮箱',user.email,true)">
					<view class="title">邮箱</view>
					<view class="cont">
						{{user.email}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>

				</view>
				<view class="row" v-if="id!=uid">
					<view class="title">邮箱</view>
					<view class="cont">
						{{user.email}}
					</view>

				</view>
				<view class="row"  v-if="id==uid" @tap="modify('pwd','密码','',true)">
					<view class="title">密码</view>
					<view class="cont">
						******
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="bt2" @tap="quit" v-if="id==uid">退出登录</view>
			<view class="bt2" v-if="id!=uid" @tap="deleteFriend">删除好友</view>
		</view>
		<view class="modify" :style="{bottom:-widHeight+'px'}" :animation="animationData">
			<view class="modify-header">
				<view class="close" @tap="modify">取消</view>
				<view class="title">签名</view>
				<view class="define" @tap="modifySubmit">确定</view>
			</view>
			<view class="modify-main">
				<input type="text" v-model="pwd" class="modify-pwd" placeholder="请输入原密码"
					placeholder-style="color:#aaa;font-size:400" :style="{display:ispwd}" />
				<textarea v-model="data" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	import myfun from '../../commons/js/myfun.js';
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				uid: '',
				myname: '',
				token: '',
				user: '',
				markname: '',
				id: '',
				imgUrl: '../../static/images/img/three.png',
				title: 'picker',
				array: ['男', '女', '未知'],
				index: 0,
				date: currentDate,
				cropFilePath: "",
				tempFilePath: '',
				headimg: '',
				data: '',
				animationData: {},
				isModify: false,
				widHeight: '1000',
				pwd: undefined,
				ispwd: 'none',
				type: '',
				oldData: ''
			}
		},
		components: {
			ImageCropper
		},

		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onReady() {
			this.getElementStyle();
		},
		onLoad: function(e) {
			this.id=e.id
			console.log(e)
			this.getStorages()
			this.getUser()
			this.gitMarkname()
		},
		methods: {
			getStorages:function(){
				try {
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
						console.log(this.uid)
						this.uid=value.id
						this.myname=value.name
						this.token=value.token
					}
					else{
						uni.navigateTo({
							url:'../signin/signin'
						})
					}
				}catch(e){
					
				}
			},
			updateFriendName: function() {
				if (this.data.length > 0 && this.data != this.oldData)
					uni.request({
						url: 'http://localhost:3000/user/updatemarkname',
						data: {
							uid: this.uid,
							fid: this.id,
							token: this.token,
							name: this.data
						},
						method: 'POST',
						success: (data) => {
							let status = data.data.status
							if (status == 200) {
								console.log('ok')
								console.log(this.uid,this.id)
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
			changeTime: function(date) {
				return myfun.detailTime(date)
			},

			getUser: function() {
				uni.request({
					url: 'http://localhost:3000/user/detail',
					data: {
						id: this.id,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						console.log(data.data)
						console.log(this.id)
						if (status == 200) {
							let res = data.data.result
							
							this.cropFilePath = 'http://localhost:3000' + res.imgurl
							if (res.explain == undefined) {
								res.explain = '这个人很懒，什么都没有留下~'
							}
							if (res.birth == undefined) {
								this.date = '0000-00-00'
							} else {
								let birth = myfun.detailTime1(res.birth)
								this.date = birth
							}
							if (res.phone == undefined) {
								res.phone = '000'
							}

							if (this.markname.length == 0) {
								this.markname = res.myname
							}
							this.setJudge(res.sex)
							this.user = res
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
			setJudge: function(e) {
				if (e == 'female') {
					this.index = 1
				} else if (e == 'male') {
					this.index = 0
				} else {
					this.index = 2
				}
			},
			gitMarkname: function() {
				if (this.id != this.uid) {
					uni.request({
						url: 'http://localhost:3000/user/getmarkname',
						data: {
							uid: this.uid,
							fid: this.id,
							token: this.token
						},
						method: 'POST',
						success: (data) => {
							let status = data.data.status
							
							if (status == 200) {
								let res = data.data.result
								console.log(res)
								if (res.markname != undefined) {
									this.markname = res.myname
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
						url: 'user',
						name: this.uid,
						token: this.token
					},
					success: (uploadFileRes) => {
						var backstr = uploadFileRes.data
						console.log(backstr)
						try {
							uni.setStorageSync('user', {
								'id': this.uid,
								'name': this.name,
								'imgUrl': backstr,
								'token': this.token
							})
						} catch (e) {
							console.log('数据存储出错')
						}
						this.update(backstr, 'imgurl', undefined)
					},
					complete() {
						uni.hideLoading();
					},
					fail(e) {
						console.log("this is errormes " + e.message)
					}

				});
			},
			cancel() {
				console.log('canceled')
			},
			update: function(d, type, pwd) {
				uni.request({
					url: 'http://localhost:3000/user/update',
					data: {
						id: this.uid,
						data: d,
						type: type,
						pwd: pwd,
						token: this.token
					},
					method: 'POST',
					success: (data) => {
						let status = data.data.status
						if (status == 200) {
							console.log(data.data)
							this.user[type] =d
							 if (type == 'pwd') {
							this.update(this.data, this.type, this.pwd)
							uni.removeStorage({
								key:'user',
								success:function(res){
									console.log(res)
								}
							})
							uni.navigateTo({
								url: '../signin/signin?cgpwd=' + this.myname
							});
							
							 }
							// this.modify()
						} else if (status == 500) {
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 400) {
							uni.showToast({
								title: '输入原始密码错误',
								icon: 'none',
								duration: 2000
							})
						} else if (status == 201) {
							uni.showToast({
								title: '已被占用',
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
			//修改项弹框
			modify: function(t, type, data, ispwd) {
				if (ispwd) {
					this.ispwd = 'block';
                    this.pwd='0'
				} else {
					this.ispwd = 'none';
					this.pwd = undefined
				}
				this.type = t
				this.isModify = !this.isModify;
				this.oldData = data
				this.data = data
				this.modifyTitle = type

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
			//弹窗修改确定
			modifySubmit: function() {
				if (this.type == 'markname') {
					this.updateFriendName()
					this.markname = this.data
				} else if (this.type == 'email') {
					let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
					if (reg.test(this.data)) {
					this.update(this.data, this.type, this.pwd)
                    
					}
					
					else{
						uni.showToast({
							title: '邮箱格式错误',
							icon: 'none',
							duration: 2000
						})
					}
				}
			else {
					this.update(this.data, this.type, this.pwd)
					console.log(111)
					// this.user[this.type] = this.data
				}
				this.modify()
			},
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
			// 返回上一个页面
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				let oldIndex = this.index
				this.index = e.detail.value
				if (this.index != oldIndex) {
					let sex = 'asexual'
					if (this.index == 0) {
						sex = 'male'
					} else if (this.index == 1) {
						sex = 'female'
					}
					this.update(sex, 'sex', undefined)
				}

			},
			//退出登录
			quit:function(){
				uni.removeStorage({
					key:'user',
					success:function(res){
						console.log(res)
					}
				})
				uni.navigateTo({
					url: '../signin/signin'
				});
			},
			//删除好友
			deleteFriend:function(){
				uni.showModal({
					title: '删除好友',
					content: '确定删除该好友吗？',
					success: (res) => {
						if (res.confirm) {
							uni.request({
								url: 'http://localhost:3000/user/deletefriend',
								data: {
									uid: this.uid,
									fid: this.id,
									token: this.token,
								},
								method: 'POST',
								success: (data) => {
									let status = data.data.status
									if (status == 200) {
										console.log('ok')
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
							} else if (res.cancel) {
								}
				}
				})
			},
			bindDateChange: function(e) {
				let oldDate = this.date
				this.date = e.detail.value
				if (this.date != oldDate) {
					this.update(this.date, 'birth', undefined)
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
		},
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
	}

	.main {
		padding-top: 118rpx;
		display: flex;
		flex-direction: column;

		.column {
			display: flex;
			flex-direction: column;
			padding-top: 12rpx;
			width: 100%;
			border-bottom: 1px solid $uni-border-color;

			.row {
				display: flex;
				flex-direction: row;
			}

			.title {
				flex: none;
				padding: 0 $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 112rpx;
			}

			.user-head {
				flex: auto;
			}

			.head {
				height: 148rpx;
				display: flex;
				align-items: center;
			}

			.user-img {
				margin-top: 22rpx;
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
				border-radius: $uni-border-radius-base;
			}

			.cont {
				flex: auto;
				padding-left: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-grey;
				line-height: 112rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.more {
				flex: none;
				height: 112rpx;
				display: flex;
				align-items: center;

				image {
					width: 80rpx;
					height: 28rpx;
				}
			}
		}

		.bt2 {
			margin-top: 160rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 88rpx;
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