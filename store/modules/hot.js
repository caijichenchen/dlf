export default {
	state: {
		//热门计算器
		hotCal:[],
		//热门标准
		hotNorm: []
	},
	mutations: {
		setHotCal(state,data){
			state.hotCal = data
		},
		setHotNorm(state,data){
			state.hotNorm = data
		}
	}
}