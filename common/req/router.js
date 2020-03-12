//路由匹配
function calRouter(type,urlArr){
	urlArr = urlArr.filter(val=>val)
	const baseUrl = `Calculator/${urlArr[0]}layouts/${urlArr[0]}${urlArr[1]}/${urlArr[0]}${urlArr[1]}`
	let url
	const pagesA = ['招标代理费','资产评估收费标准费','造价咨询费','防雷检测费','施工图审查费','水土保持费']
	const pagesC = ['监理费','建设项目前期工作咨询费','建设交易服务收费','城市基础设施配套费','地震安全性评价费','防空地下室易地建设费']
	if(pagesA.includes(type)){
		url = `/pagesA/${baseUrl}`
	}else if(pagesC.includes(type)){
		url = `/pagesC/${baseUrl}`
	}else {
		url = `/pagesB/${baseUrl}`
	}
	uni.navigateTo({
		url: url
	});
}

function checkComputed(needVal){
	let flag = true
	let checkArr = Object.keys(needVal).filter(val=> val != 'type')
	//工程造价类似输入  对应线上fw_0
	const checkGczj = ['ztz','sffl','sde','zytzxs','fdfd','ldzj','dkbl','dkll','gcjsqtfy','dksc','gczj','gcl','fxmgcdtz','fzcd','gcfy','lxtz','ndxs','tzxs','zttjtz','edorcd','sdcd','zkgs','dqtzxs','peoples','jzmj','chgzl','jfe','jlrysl','jlryfwsj','gzlbl','fjtz','zytz','fztzxs','hytzxs','bjmj','gzl','jsmj','gtz','gstze','gse','gcfy','zjzmj','zbj','blb','zxgl','swgzl']
	//优惠折扣  对应线上fw_0_100
	const checkDiscount = ['discount','dzzk','qfbl','yhzk','sffd','fjtz','fdfd','fl']
	//附加调整  对应线上fw_1
	const checkFjtz = ['hzhjcgb','fjtz','fwxs','fjxs','sf','zhynys','cqxs','gyxs','ghgwxs','dzxs','xmjxs','xcxs','fd','yzfwxs','fjtz','sffl','kxgzfw','jbfl','hjhzfl']
	//对应线上fw_int_0
	const checkXs = ['xmjscs','zytz','jsqns']
	//浮动幅度  对应线上fw_80_120
	const checkFdfd = ['fdfd','fd']
	//比例系数  对应线上fw_0_8
	const checkBlxs = ['blxs'] 
	
	const checkTypeArr = [
		//工程造价类似输入  对应线上fw_0
		['ztz','sffl','sde','zytzxs','fdfd','ldzj','dkbl','dkll','gcjsqtfy','dksc','gczj','gcl','fxmgcdtz','fzcd','gcfy','lxtz','ndxs','tzxs','zttjtz','edorcd','sdcd','zkgs','dqtzxs','peoples','jzmj','chgzl','jfe','jlrysl','jlryfwsj','gzlbl','fjtz','zytz','fztzxs','hytzxs','bjmj','gzl','jsmj','gtz','gstze','gse','gcfy','zjzmj','zbj','blb','zxgl','swgzl'],
		//优惠折扣  对应线上fw_0_100
		['discount','dzzk','qfbl','yhzk','sffd','fjtz','fdfd','fl'],
		//附加调整  对应线上fw_1
		['hzhjcgb','fjtz','fwxs','fjxs','sf','zhynys','cqxs','gyxs','ghgwxs','dzxs','xmjxs','xcxs','fd','yzfwxs','fjtz','sffl','kxgzfw','jbfl','hjhzfl'],
		//对应线上fw_int_0
		['xmjscs','zytz','jsqns'],
		//浮动幅度  对应线上fw_80_120
		['fdfd','fd'],
		//比例系数  对应线上fw_0_8
		['blxs'] 
	]
	
	const arr = [...new Set(checkTypeArr.reduce((x,y)=>x.concat(y)))]
	arr.forEach(x=>{
		if(flag){
			checkArr.forEach(val=>{
				if(val.split('_')[1] == x ){ //改进完全匹配只有数据转换成数值时判断
					if(!(needVal[val]>=0) && !isNaN(Number(needVal[val]))){ 
						flag = false
						return uni.showToast({
							icon:'none',
							title:'范围数值应该为:大于0'
						})
					}
				}
			})
		}
	})
	// checkGczj.forEach(item=>{
	// 	if(flag){ //当已经检验出错误输入时不再执行循环
	// 		checkArr.forEach(val=>{
	// 			if(val.split('_')[1] == item ){ //改进完全匹配只有数据转换成数值时判断
	// 				if(!(needVal[val]>=0) && !isNaN(Number(needVal[val]))){ 
	// 					flag = false
	// 					return uni.showToast({
	// 						icon:'none',
	// 						title:'范围数值应该为:大于0'
	// 					})
	// 				}
	// 			}
	// 		})
	// 	}
	// })
	// //如果前面的校验通过继续执行
	// if(flag){
	// 	checkDiscount.forEach(item=>{
	// 		if(flag){
	// 			checkArr.forEach(val=>{
	// 				if(val.split('_')[1] == item ){
	// 					if(!(needVal[val]>0 && needVal[val] <= 100) && !isNaN(Number(needVal[val]))){
	// 						flag = false
	// 						return uni.showToast({
	// 							icon:'none',
	// 							title:'范围一般为:0~100'
	// 						})
	// 					}
	// 				}
	// 			})
	// 		}
	// 	})
	// }
	
	// if(flag){
	// 	checkFjtz.forEach(item=>{
	// 		if(flag){
	// 			checkArr.forEach(val=>{
	// 				if(val.split('_')[1] == item ){
	// 					if(!(needVal[val]>=0) && !isNaN(Number(needVal[val]))){
	// 						flag = false
	// 						return uni.showToast({
	// 							icon:'none',
	// 							title:'范围数值应该为:大于等于0'
	// 						})
	// 					}
	// 				}
	// 			})
	// 		}
	// 	})
	// }
	
	// if(flag){
	// 	checkXs.forEach(item=>{
	// 		if(flag){
	// 			checkArr.forEach(val=>{
	// 				if(val.split('_')[1] == item ){
	// 					if(!(needVal[val]>0 && Math.floor(needVal[val]) == needVal[val]) && !isNaN(Number(needVal[val]))){
	// 						flag = false
	// 						return uni.showToast({
	// 							icon:'none',
	// 							title:'请输入大于0的整数'
	// 						})
	// 					}
	// 				}
	// 			})
	// 		}
	// 	})
	// }
	
	// if(flag){
	// 	checkFdfd.forEach(item=>{
	// 		if(flag){
	// 			checkArr.forEach(val=>{
	// 				if(val.split('_')[1] == item ){
	// 					if(!(needVal[val]>=80 && needVal[val]<=120) && !isNaN(Number(needVal[val]))){
	// 						flag = false
	// 						return uni.showToast({
	// 							icon:'none',
	// 							title:'范围一般为:80~120'
	// 						})
	// 					}
	// 				}
	// 			})
	// 		}
	// 	})
	// }
	
	// if(flag){
	// 	checkBlxs.forEach(item=>{
	// 		if(flag){
	// 			checkArr.forEach(val=>{
	// 				if(val.split('_')[1] == item ){
	// 					if(!(needVal[val]>=0.008 && needVal[val]<=0.011)&& !isNaN(Number(needVal[val]))){
	// 						flag = false
	// 						return uni.showToast({
	// 							icon:'none',
	// 							title:'范围数值应该为:大于等于0.008小于等于0.011'
	// 						})
	// 					}
	// 				}
	// 			})
	// 		}
	// 	})
	// }
	return flag
}


export {
	calRouter,
	checkComputed
}