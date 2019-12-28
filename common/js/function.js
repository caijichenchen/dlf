import $req from '@/common/req/request.js'
function getFilterCategory(pro,category){
	const url = '/api/xcx/getCalculatorByProvince'
	let data = {
		state:1,
		calculator_type:category
	}
	if(pro){
		data = {
			state: 1,
			province:pro,
			calculator_type: category
		}
	}
	let proCalList = []
	
	async function getcal(){
		proCalList = await $req.request({
			url: url,
			data:data
		})
		
		// .then(res=>{
		// 	proCalList = res.data.message
		// 	console.log(proCalList)
		// }).catch(err=>{
		// 	console.log(err)
		// })
	} 
	console.log(proCalList)
	return proCalList
}


export {
	getFilterCategory
}