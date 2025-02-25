export default{
	message:function(){
		let msgs = [
			{
				id:'a',
				imgurl:'one.png',
				message:{
					voice:'a',
					time:60,
				},
				types:2,
				time: new Date()-1000,
				tips:0,
			},
			{
				id:'b',
				imgurl:'one.png',
				message:'个错误信息表明在尝试解析一文件中导入以下是解决这个问题的步骤：',
				types:0,
				time: new Date()-1000,
				tips:0,
			},
			{
				id:'b',
				imgurl:'one.png',
				message:'个错误信息表明在尝试解析一文件中导入以下是解决这个问题的步骤：',
				types:0,
				time: new Date()-1000,
				tips:0,
			},
		];
		return msgs;
	}
}