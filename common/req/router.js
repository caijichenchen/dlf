function calRouter(type,urlArr){
	if(type == '招标代理费'||type == '资产评估收费标准费'||type == '造价咨询费'||type == '防雷检测费'||type=='施工图审查费'||type=='水土保持费'){
		uni.navigateTo({
			url: `/pagesA/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}else if(type == '监理费' || type == '建设项目前期工作咨询费'){
		uni.navigateTo({
			url: `/pagesC/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}else {
		uni.navigateTo({
			url: `/pagesB/Calculator/${urlArr[1]}layouts/${urlArr[1]}${urlArr[2]}/${urlArr[1]}${urlArr[2]}`
		});
	}
}

export {
	calRouter
}