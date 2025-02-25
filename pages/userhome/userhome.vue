<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back-img" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img" v-if="relation==0||relation==1" @tap="userDetail">
					<image src="../../static/images/userhome/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai" :animation="animationData4"></view>
			<image :src="user.imgurl" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex" :style="{background:sexBg}" :animation="animationData3">
					<image :src="seximg"></image>
				</view>
				<image :src="user.imgurl" class="user-img" mode='aspectFill' :animation="animationData2"></image>
			</view>
			<view class="user-imf">
				<view class="name">{{markname}}</view>
				<view class="nick">昵称：{{user.name}}</view>
				<view class="intr">{{user.explain}}</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn btn1" @tap='addFriendBtn' v-if="relation==2">加为好友</view>
			<view class="bottom-btn btn1" v-if="relation==1">发送消息</view>
		</view>
		<view class="add-misg" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="animationData">
			<view class="name">{{user.name}}</view>
			<textarea v-model="msg" maxlength="120" class="add-main" :cursor-spacing="0"></textarea>
		</view>
		<view class="add-bt bottom-bar" :animation="animationData1">
			<view class="close btn1"  @tap='addFriendAnimat'>取消</view>
			<view class="send btn1" @tap='addSubmit'>发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				uid:'',
				token:'',
				markname:'',
				msg:'',
				sexcolor: 'rgba(255,93,91,1)',
				seximg:'',
				sexBg:'',
				addHeight:'1000',
				relation:'',
				animationData:{},//动画
				animationData1:{},
				animationData2:{},//动画
				animationData3:{},//动画
				animationData4:{},//动画
				isAdd:false,
				user: {}
			};
		},
		onLoad:function(e){
			this.id=e.id
			console.log(e)
			this.getStorages()
			this.getUser()
			this.gitMarkname()
			this.judgeFriend()
		},
		onReady(){
			this.getElementStyle();
		},
		methods: {
			userDetail:function(){
				uni.navigateTo({
					url: '../userdetails/userdetails?id=' + this.id
				})
			},
			getUser:function(){
				uni.request({
					url:'http://localhost:3000/user/detail',
					data:{
						id:this.id,
						token:this.token
					},
					method:'POST',
					success:(data)=>{
						let status=data.data.status
						let res=data.data.result
						console.log(this.id,this.token)
						if(status==200){
							res.imgurl='http://localhost:3000'+res.imgurl
							console.log(res.sex)
							if(typeof(res.explain)){
								res.explain='这个人很懒，什么都没有留下~'
							}
							if(this.markname.length==0){
								this.markname=res.myname
							}
							this.setJudge(res.sex)
							
							this.user=res
						}
						else if(status==500){
							uni.showToast({
								title: '服务器出错啦！',
								icon: 'none',
								duration: 2000
							})
						}
						else if (status == 300) {
							uni.navigateTo({
								url: '../signin/signin?name' + this.myname
							})
						}
					}
				})
			},
			setJudge:function(e){
				console.log(e)
				if(e=='female'){
					this.seximg='../../static/images/userhome/female.png'
					this.sexBg='rgba(255,93,91,1)'
				}
				else if(e=='male'){
					this.seximg='../../static/images/userhome/male.png'
					console.log(this.seximg)
					this.sexBg='rgba(87,153,255,1)'
				}
				else{
					this.seximg='../../static/images/userhome/asexual.png'
					this.sexBg='rgba(39,40,50,1)'
				}
			},
			judgeFriend:function(){
			     if(this.id==this.uid){
					 this.relation=0
				 }
				else{
					uni.request({
						url:'http://localhost:3000/search/isfriend',
						data:{
							uid:this.uid,
							fid:this.id,
							token:this.token
						},
						method:'POST',
						success:(data)=>{
							let status=data.data.status
							if(status==200){
								this.relation=1
								this.gitMarkname()
								}else if(status==400){
									this.relation=2
								}
								else if(status==500){
									uni.showToast({
										title: '服务器出错啦！',
										icon: 'none',
										duration: 2000
									})
								}
								else if (status == 300) {
									uni.navigateTo({
										url: '../signin/signin?name' + this.myname
									})
								}
						}
					})
				}
			},
			gitMarkname:function(){
			    uni.request({
					url:'http://localhost:3000/user/getmarkname',
					data:{
						uid:this.uid,
						fid:this.id,
						token:this.token
					},
					method:'POST',
					success:(data)=>{
						let status=data.data.status
						if(status==200){
							let res=data.data.result
							console.log(this.uid,this.id,this.token)
							if(res.markname!=undefined){
								this.markname=res.myname
							}
							}
							else if(status==500){
								uni.showToast({
									title: '服务器出错啦！',
									icon: 'none',
									duration: 2000
								})
							}
							else if (status == 300) {
								uni.navigateTo({
									url: '../signin/signin?name' + this.myname
								})
							}
					}
				})	
			},
			getStorages:function(){
				try {
					const value = uni.getStorageSync('user')
					if (value) {
						console.log(value)
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
			//添加好友按钮
			addFriendBtn: function(fid) {
				this.fid=fid
				this.msg=this.myname+'请求添加好友~'
				this.addFriendAnimat();
			},
			// 返回上一个页面
			backOne: function() {
				uni.navigateBack({
					delta: 1,
				})
			},
			//获取页面高度
			getElementStyle:function(){
				const query = uni.createSelectorQuery().in(this);
				query
				  .select(".bg")
				  .boundingClientRect((data) => {
				    console.log("得到布局位置信息" + JSON.stringify(data));
				    console.log("节点离页面顶部的距离为" + data.top);
					this.addHeight=data.height-186;
				  })
				  .exec();

			},
			//添加好友动画
			addFriendAnimat:function(){
				this.isAdd=!this.isAdd;
				var animation = uni.createAnimation({
				  duration: 300,
				  timingFunction: "ease",
				})
				var animation1 = uni.createAnimation({
				  duration: 300,
				  timingFunction: "ease",
				})
				var animation2 = uni.createAnimation({
				  duration: 300,
				  timingFunction: "ease",
				})
				var animation3 = uni.createAnimation({
				  duration: 300,
				  timingFunction: "ease",
				})
				var animation4 = uni.createAnimation({
				  duration: 300,
				  timingFunction: "ease",
				})
				if(this.isAdd){
					animation.bottom(0).step()
					animation1.bottom(0).step()
					animation2.width(120).height(120).step()
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0.6)').step()
				}
				else{
					animation.bottom(-this.addHeight).step()
					animation1.bottom(-100).step()
					animation2.width(200).height(200).step()
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,228,255,0)').step()
				}
				this.animationData=animation.export()
				this.animationData1=animation1.export()
				this.animationData2=animation2.export()
				this.animationData3=animation3.export()
				this.animationData4=animation4.export()
				},
				//确定添加好友
				addSubmit:function(){
					if(this.msg.length>0){
						this.addFriendAnimat()
						uni.request({
							url: 'http://localhost:3000/friend/applyfriend',
							data: {
								uid: this.uid,
								fid: this.id,
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
			}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.bg {
		position: fixed;
		z-index: -2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		.bg-bai {
			width: 100%;
			height: 100%;
			// background-color:#eee;
		}

		.bg-img {
			opacity: 0.4;
			position: absolute;
			z-index: -1;
			left: -10rpx;
			top: -10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16rpx);
		}
	}

	.main {
		text-align: center;
        // padding-top:230rpx;
		.user-header {
			margin: 0 auto;
			width: 412rpx;
			height: 412rpx;
			position: relative;
			padding-top: 148rpx;

			.sex {
				position: absolute;
				z-index: 11;
				bottom: 22rpx;
				right: 22rpx;
				width: 64rpx;
				height: 64rpx;
				border-radius: $uni-border-radius-circle;

				image {
					padding: 16rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}

			.user-img {
				z-index: 10;
				top:0;
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255, 255, 255, 1);
				box-shadow:0rpx 36rpx 40rpx 0rpx rgba(39,40,50,0.1);
			}
		}

		.user-imf {
			padding-top: 42rpx;

			.name {
				font-size: 52rpx;
				color: $uni-text-color;
				line-height: 74rpx;
			}

			.nick {
				font-size: $uni-font-size-base;
				line-height: 40rpx;
				color: $uni-text-color;
			}

			.intr {
				padding: 20rpx 100rpx;
				font-size: $uni-font-size-base;
				font-family: PingFangSC-Light, PingFang SC;
				font-weight: 300;
				color: $uni-text-color;
				line-height: 48rpx;
			}
		}
	}
.bottom-bar{
	.bottom-btn{
		margin:0 $uni-spacing-col-base;
		background: $uni-color-primary;
	}
}


	.add-misg {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		padding: 0 56rpx;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 40rpx 40rpx 0rpx 0rpx;

		.name {
			padding:168rpx 0 40rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}

		.add-main {
			padding: 18rpx 22rpx;
			width: 100%;
			height:420rpx;
			box-sizing: border-box;
			background: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
	}

	.add-bt {
		bottom: -200rpx;
		z-index:100;
		display: flex;

		.close {
			width:172rpx;
			background: $uni-bg-color-hover;
			margin-left:$uni-spacing-col-base;
		}

		.send {
			margin:0 $uni-spacing-col-base;
			flex: auto;
			background: $uni-color-primary;
		}
	}
</style>