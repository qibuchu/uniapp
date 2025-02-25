<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back-img" src="../../static/images/common/back1.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/group/more1.png"></image>
				</view>
			</view>
		</view>
		<view class="top-bar bgbar" :animation="animationData">
			<view class="top-bar-left" @tap="backOne">
				<image class="back-img" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/group/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<image :src="gimg" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="main-inner">
				<view class="inf">
					<view class="name">今天不错</view>
					<view class="time">2025-01-01</view>
					<view class="notice">监督科四大皆空手动滑稽刷卡机考拉</view>
				</view>
				<view class="member">
					<view class="top">
						<view class="title">群成员</view>
						<view class="more">
							管理群成员
						</view>
						<image src="../../static/images/common/more.png" class="more-img" mode="aspectFit"></image>
					</view>
					<view class="member-ls">
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/delete.png" mode="aspectFill" class="delete">
								</image>
								<image src="../../static/images/img/one.png" mode="aspectFill" class="user-img"></image>
							</view>
							<view class="name">曹建豪</view>
						</view>
						<view class="member-li">
							<view class="imgs">
								<image src="../../static/images/group/add.png" mode="aspectFit" class="user-add">
								</image>
							</view>
							<view class="name">邀请</view>
						</view>
					</view>
					<view class="clear"></view>
				</view>
				<view class="mitem">
					<view class="row" @tap="modify">
						<view class="title">群名称</view>
						<view class="cont">非常大开杀戒啊肯定就是</view>
						<view class="more">
							<image src="../../static/images/common/more.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="row">
						<view class="title">群头像</view>
						<view class="cont">
							<view class="user-head">
								<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
								<image :src="gimg" @tap="upload" class="group-img"></image>
							</view>
						</view>
						<view class="more">
							<image src="../../static/images/common/more.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="row" @tap="modify">
						<view class="title">群公告</view>
						<view class="cont">非常大开杀打三个地方哈施工计划发拒收发撒发货即可到付哈几十块姐夫点开链接开发</view>
						<view class="more">
							<image src="../../static/images/common/more.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="row" @tap="modify">
						<view class="title">群命名</view>
						<view class="cont">非常大开杀戒啊肯定就是</view>
						<view class="more">
							<image src="../../static/images/common/more.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="row">
						<view class="title">消息免打扰</view>
						<view class="cont"></view>
						<view class="more">
							<switch :checked="swit" @change="switch1Change" color="rgba(255,228,49,1)" class="switch" />
						</view>
					</view>
				</view>
				<view class="bt2">解散群</view>
			</view>
		</view>
		<view class="modify" :style="{bottom:-widHeight+'px'}" :animation="animationData1">
			<view class="modify-header">
				<view class="close" @tap="modify">取消</view>
				<view class="title">签名</view>
				<view class="define" @tap="modifySubmit">确定</view>
			</view>
			<view class="modify-main">
				<textarea v-model="data" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	export default {
		data() {
			return {
				gid: '',
				gimg: '../../static/images/img/four.png',
				swit: false,
				top: '0',
				animationData: {},
				animationData1: {},
				cropFilePath: "../../static/images/img/four.png",
				tempFilePath: '',
				headimg: '',
				data: '修改的内容',
				isModify: false,
				widHeight: '',
			};
		},
		components: {
			ImageCropper
		},
		onLoad: function(e) {
			// this.gid=e.gid;
			// this.gimg=e.gimg;
		},
		onReady: function() {
			this.getTop();
			this.getElementStyle();
		},
		onPageScroll: function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			// console.log("滚动距离为：" + e.scrollTop);
			this.getTop();
			this.addAnimat();
		},
		methods: {
			// 返回上一个页面
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				})
			},
			//群头像裁剪
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
				this.gimg = e.detail.tempFilePath
				this.headimg = e.detail.tempFilePath;
				// 	uni.uploadFile({
				// 		url: '服务器上传图片地址',
				// 		filePath: this.headimg,
				// 		name: 'file',
				// 		fileType: 'image',
				// 		formData: {
				// 			上传附加数据
				// 		},
				// 		success: (uploadFileRes) => {

				// 		},
				// 		complete() {
				// 			uni.hideLoading();
				// 		},
				// 		fail(e) {
				// 			console.log("this is errormes " + e.message)
				// 		}

				// 	});
			},
			cancel() {
				console.log('canceled')
			},
			switchChange: function(e) {
				console.log('switch1 发生 change 事件，携带值为', e.detail.value)
			},
			//修改项弹框
			modify: function() {
				console.log()
				this.isModify = !this.isModify;
				var animation1 = uni.createAnimation({
					duration: 300,
					timingFunction: 'ease',
				});
				if (this.isModify) {
					animation1.bottom(0).step();
				} else {
					animation1.bottom(-this.widHeight).step();
				}
				this.animationData1 = animation1.export();
			},
			//弹窗修改确定
			modifySubmit: function() {
				this.modify();
			},
			//获取距离顶部高度
			getTop: function() {
				const query = uni.createSelectorQuery().in(this);
				query
					.select(".main-inner")
					.boundingClientRect((data) => {
						this.top = data.top;
						console.log(this.top)

					})
					.exec();
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
			//顶部切换动画
			addAnimat: function() {
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: "linear",
				})
				if (this.top < 60) {
					animation.opacity(1).step();
				} else {
					animation.opacity(0).step();
				}
				this.animationData = animation.export();
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.clear {
		clear: both;
	}

	.bgbar {
		opacity: 0;
		background-color: #fff;
	}

	.bg {
		width: 100%;
		height: 100%;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;

		.bg-img {
			width: 100%;
			height: 750rpx;
		}
	}

	.main {
		padding-top: 360rpx;

		.main-inner {
			width: 100%;
			min-height: 720rpx;
			background-color: #fff;
			border-radius: 40rpx 40rpx 0 0;
		}

		.inf {
			padding: $uni-spacing-row-base $uni-spacing-col-base 0;
			box-sizing: border-box;
			padding-bottom: 40rpx;
			border-bottom: 1rpx solid #eee;

			.name {
				float: left;
				font-size: 48rpx;
				font-weight: 600;
				color: #272832;
				line-height: 66rpx;
			}

			.time {
				float: right;
				font-size: 28rpx;
				color: rgba(39, 40, 50, 0.5);
				line-height: 66rpx;
			}

			.notice {
				padding-top: 20rpx;
				clear: both;
				line-height: 40rpx;
				font-size: 28rpx;
				color: #272832;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}

		.member {
			border-bottom: 1rpx solid #eee;

			.top {
				padding: $uni-spacing-row-base $uni-spacing-col-base 0;
				box-sizing: border-box;
				height: 100rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.title {
					flex: 1;
					font-size: 36rpx;
					color: #272832;
					font-weight: 600;
				}

				.more {
					float: right;
					font-size: 20rpx;
					font-weight: 400;
					padding-right: 20rpx;
					color: rgba(39, 40, 50, 0.6);
				}

				.more-img {
					width: 16rpx;
					height: 28rpx;
				}
			}

			.member-ls {
				width: 100%;
				padding: 20rpx 16rpx;
				box-sizing: border-box;
			}

			.member-li {
				padding-bottom: 32rpx;
				width: 20%;
				float: left;
				text-align: center;

				.imgs {
					display: inline-block;
					position: relative;
					width: 104rpx;
					height: 104rpx;
					border-radius: 20rpx;
					background-color: $uni-color-primary;
				}

				.user-img {
					width: 104rpx;
					height: 104rpx;
					border-radius: 20rpx;
				}

				.delete {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: -16rpx;
					right: -10rpx;
					z-index: 10;
				}

				.name {
					padding: 0 8rpx;
					font-size: 28rpx;
					color: #272832;
					line-height: 40rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}

				.user-add {
					width: 104rpx;
					height: 104rpx;
					padding: 32rpx;
					box-sizing: border-box;
				}
			}
		}

		.mitem {
			display: flex;
			flex-direction: column;
			padding-top: 22rpx;
			width: 100%;
			border-bottom: 1rpx solid #eee;

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
				height: 112rpx;
				line-height: 112rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.group-img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 20rpx;
				margin-top: 16rpx;
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

			.switch {
				margin-right: 22rpx;

			}
		}

		.bt2 {
			margin-top: 80rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 88rpx;
			padding-bottom: env(safe-area-inset-bottom);
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