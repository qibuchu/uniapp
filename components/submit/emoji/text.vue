<template>
  <view class="emoji" :style="'height:' + height + 'px'">
    <view class="emoji-line" v-for="(line, i) in emoji" :key="i">
      <view class="emoji-line-item" v-for="(item, index) in line" :key="index" @tap="clickEmoji(item)">{{ item }}</view>
    </view>
  </view>
</template>

<script>
export default {
  // ... 你的组件逻辑
  props:{
  	height:{
  		type: Number,
  		default:260
  	}
  },
  data() {
  	return {
  		emoji: [
  				['😀', '😇', '😄', '😁', '😅', '🤣', '😂', '🙂'],
  				  ['🙃', '😊', '😇', '😉', '😲', '🥹', '😨', '😰'],
  				  ['😥', '😓', '😫', '😡', '😠', '😈', '👿', '☠'],
  				  ['💩', '🤡', '🫢','']
  		]
  	}
  },
  methods: {
  	//获取表情并发送
  	clickEmoji:function(e){
  		this.$emit('emotion',e);
  	}
  	
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'testFont';
  src: url('../../static/images/testFont.ttf') format('truetype');
}

.emoji {
  width: 100%;
  padding: 16rpx 10rpx 180rpx 10rpx;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  font-family: 'testFont'; /* 应用自定义字体 */
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 36px; /* 根据需要调整字体大小 */
  height: 96px; /* 根据需要调整高度 */
  line-height: 96px; /* 根据需要调整行高 */
}

.emoji-line {
  display: flex;
}

.emoji-line-item {
  flex: 1;
  text-align: center;
  font-size: 44rpx; /* 保持原有的字体大小 */
  line-height: 72rpx; /* 保持原有的行高 */
}

/* 为input[classone]和div添加样式 */
input[classone],
div {
  font-family: 'testFont';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 36px;
  height: 96px;
  line-height: 96px;
}
</style>
