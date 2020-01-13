function calRouter(type,urlArr){
	if(type == '招标代理费'||type == '资产评估收费标准费'||type == '造价咨询费'||type == '防雷检测费'||type=='施工图审查费'||type=='水土保持费'){
		uni.navigateTo({
			url: `/pagesA/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}else if(type == '监理费'||type == '建设项目前期工作咨询费'||type == '建设交易服务收费'||type == '城市基础设施配套费'||type == '地震安全性评价费'||type == '防空地下室易地建设费'){
		uni.navigateTo({
			url: `/pagesC/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}else {
		uni.navigateTo({
			url: `/pagesB/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}
}

function checkComputed(needVal){
	let flag = true
	let checkArr = []
	//工程造价类似输入  对应线上fw_0
	const checkGczj = ['ztz','sffl','sde','zytzxs','fdfd','ldzj','dksc','dkbl','dkll','gcjsqtfy','dksc','gczj','gcl','fxmgcdtz','fzcd','gcfy','lxtz','ndxs','tzxs','zttjtz','edorcd','sdcd','zkgs','dqtzxs','peoples','jzmj','chgzl','jfe','jlrysl','jlryfwsj','gzlbl','fjtz','zytz','fztzxs','hytzxs','bjmj','gzl','jsmj','gtz','gstze','gse','gcfy','zjzmj','zbj','blb','zxgl','swgzl']
	//优惠折扣  对应线上fw_0_100
	const checkDiscount = ['discount','dzzk','qfbl','yhzk']
	//附加调整  对应线上fw_1
	const checkFjtz = ['hzhjcgb','fjtz','fwxs','fjxs','sf','zhynys','cqxs','gyxs','ghgwxs','dzxs','xmjxs','xcxs']
	//对应线上fw_int_0
	const checkXs = ['xmjscs']
	//浮动幅度  对应线上fw_80_120
	const checkFdfd = ['fdfd']
	//比例系数  对应线上fw_0_8
	const checkBlxs = ['blxs']
	for(let key in needVal){
		if(key != 'type'){
			checkArr.push(key)
		}
	}
	checkGczj.forEach(item=>{
		// const reg = new RegExp(item,'g')
		if(flag){ //当已经检验出错误输入时不再执行循环
			checkArr.forEach(val=>{
				if(val.split('_')[1] == item ){ //改进完全匹配只有数据转换成数值时判断
					if(!(needVal[val]>=0) && !isNaN(Number(needVal[val]))){ 
						console.log(val)
						console.log(needVal[val])
						console.log(Number(needVal[val]))
						console.log(isNaN(Number(needVal[val])))
						flag = false
						return uni.showToast({
							icon:'none',
							title:'范围数值应该为:大于0'
						})
					}
				}
				// if(reg.exec(val)){
				// 	console.log(needVal[val])
				// 	if(!(needVal[val]>0) && !isNaN(needVal[val])){ //当部分后缀同样包含相关字符串时校验数据类型
				// 		flag = false
				// 		return uni.showToast({
				// 			icon:'none',
				// 			title:'范围数值应该为:大于0'
				// 		})
				// 	}
				// }
			})
		}
	})
	//如果前面的校验通过继续执行
	if(flag){
		checkDiscount.forEach(item=>{
			// const reg = new RegExp(item,'g')
			if(flag){
				checkArr.forEach(val=>{
					if(val.split('_')[1] == item ){
						if(!(needVal[val]>0 && needVal[val] <= 100) && !isNaN(Number(needVal[val]))){
							flag = false
							return uni.showToast({
								icon:'none',
								title:'范围一般为:0~100'
							})
						}
					}
				})
			}
		})
	}
	
	if(flag){
		checkFjtz.forEach(item=>{
			// const reg = new RegExp(item,'g')
			if(flag){
				checkArr.forEach(val=>{
					if(val.split('_')[1] == item ){
						if(!(needVal[val]>=0) && !isNaN(Number(needVal[val]))){
							flag = false
							return uni.showToast({
								icon:'none',
								title:'范围数值应该为:大于等于0'
							})
						}
					}
				})
			}
		})
	}
	
	if(flag){
		checkXs.forEach(item=>{
			// const reg = new RegExp(item,'g')
			if(flag){
				checkArr.forEach(val=>{
					if(val.split('_')[1] == item ){
						if(!(needVal[val]>0 && Math.floor(needVal[val]) == needVal[val]) && !isNaN(Number(needVal[val]))){
							flag = false
							return uni.showToast({
								icon:'none',
								title:'请输入大于0的整数'
							})
						}
					}
				})
			}
		})
	}
	
	if(flag){
		checkFdfd.forEach(item=>{
			// const reg = new RegExp(item,'g')
			if(flag){
				checkArr.forEach(val=>{
					if(val.split('_')[1] == item ){
						if(!(needVal[val]>=80 && needVal[val]<=120) && !isNaN(Number(needVal[val]))){
							flag = false
							return uni.showToast({
								icon:'none',
								title:'范围一般为:80~120'
							})
						}
					}
				})
			}
		})
	}
	
	if(flag){
		checkBlxs.forEach(item=>{
			// const reg = new RegExp(item,'g')
			if(flag){
				checkArr.forEach(val=>{
					if(val.split('_')[1] == item ){
						if(!(needVal[val]>=0.008 && needVal[val]<=0.011)&& !isNaN(Number(needVal[val]))){
							flag = false
							return uni.showToast({
								icon:'none',
								title:'范围数值应该为:大于等于0.008小于等于0.011'
							})
						}
					}
				})
			}
		})
	}
	return flag
}


export {
	calRouter,
	checkComputed
}