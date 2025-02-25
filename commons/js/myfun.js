// myfun.js
export default {
  // 格式化日期时间
  dateTime: function (timestamp) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    
    const yesterday = new Date(today - 24 * 60 * 60 * 1000);
    const beforeYesterday = new Date(today - 2 * 24 * 60 * 60 * 1000);

    if (date >= today) {
      // 当天信息显示时分
      return `${hour}:${minute}`;
    } else if (date >= yesterday && date < today) {
      // 昨天信息显示昨天和时
      return `昨天 ${hour}:${minute}`;
    } else if (date >= beforeYesterday && date < yesterday) {
      // 超过两天但不超过两天显示月份和日期
      return `${month}-${day}`;
    } else if (year === now.getFullYear()) {
      // 同年显示月份和日期
      return `${month}-${day}`;
    } else {
      // 超过一年显示年月日
      return `${year}-${month}-${day}`;
    }
  },
  //间隔时间差
  spaceTime(old, now) {
    old = new Date(old);
    now = new Date(now);
    var told = old.getTime();
    var tnow = now.getTime();
    
    // 计算时间差
    var timeDiff = tnow - told;
    
    // 检查时间差是否大于5分钟（300000毫秒）
    if (timeDiff >= 300000) {
      // 时间差大于或等于5分钟，返回当前时间
      return now;
    } else {
      // 时间差小于5分钟，返回空字符串
      return '';
    }
  },

  detailTime(e){
	  let old=new Date(e);
	  let d=old.getTime()
	  let h=old.getHours()
	  let m=old.getMinutes()
	  let Y=old.getFullYear()
	  let M=old.getMonth()+1
	  let D=old.getDate()
	  if(M<10){
		  M='0'+M
	  }
	  if(D<10){
		  D='0'+D
		  
	  }
	  if(h<10){
		  h='0'+h
		  
	  }
	  if(m<10){
		  m='0'+m
			  
	  }
	  return Y+'-'+M+'-'+D+' '+h+':'+m
	  
  },
  detailTime1(e){
  	  let old=new Date(e);
  	  let Y=old.getFullYear()
  	  let M=old.getMonth()+1
  	  let D=old.getDate()
  	  if(M<10){
  		  M='0'+M
  	  }
  	  if(D<10){
  		  D='0'+D
  		  
  	  }
  	  return Y+'-'+M+'-'+D
  	  
  },
  //排序
  paixu:function(arr,obj,tip){
	  if(tip==0){
		  for(let i=1;i<arr.length;i++)
		  {
			  for(let j=i;j>0;j--){
				  if(arr[j][obj]>arr[j-1][obj]){
					  var s=arr[j]
					  arr[j]=arr[j-1]
					  arr[j-1]=s
				  }
			  }
		  }
		  return arr;
	  }
	  else if(tip==1){
		  for(let i=1;i<arr.length;i++)
		  {
		  			  for(let j=i;j>0;j--){
		  				  if(arr[j][obj]<arr[j-1][obj]){
		  					  var s=arr[j]
		  					  arr[j]=arr[j-1]
		  					  arr[j-1]=s
		  				  }
		  			  }
		  }
		  return arr;
	  }
  },
  //AI神力
  fileName: function(date) {
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
          var day = date.getDate().toString().padStart(2, '0');
          return year + '-' + month + '-' + day;
      },
	  //AI神力
  Debounce(fn,t){
	  let delay=t||500
	  let timer
	  return function(){
		  let args=arguments
		  if(timer){
			  clearTimeout(timer)
		  }
		  timer=setTimeout(()=>{
			  timer=null
			  fn.apply(this,args)
		  },delay)
	  }
  }
}
