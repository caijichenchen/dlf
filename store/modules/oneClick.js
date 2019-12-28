export default {
	state: {
		calList:[
			{
				check:true,
				name: "全国建设项目前期工作咨询费计算器",
				integral: 2,
				url: "/jsxmqqgzzxf/guo",
				parent_type: "建设项目前期工作咨询费",
				province: [
					{
						name: "全国"
					}
				],
				price: "6",
				role_id: 117
			},
			{
				check:true,
				name: "项目建设管理费（原建设单位管理费）计算器",
				integral: 2,
				url: "/jsdwgl/guo",
				parent_type: "建设单位管理费",
				province: [
					{
						name: "全国"
					}
				],
				price: "5",
				role_id: 13
			},
			{
				check:true,
				name: "场地准备费及临时设施费计算器",
				integral: 1,
				url: "/cdzb/guo",
				parent_type: "场地准备及临时设施费",
				province: [
					{
						name: "全国"
					}
				],
				price: "1",
				role_id: 34
			},
			{
				check:true,
				name: "工程勘察费计算器",
				integral: 1,
				url: "/gckcf/guo",
				parent_type: "勘察费",
				province: [
					{
						name: "全国"
					}
				],
				price: "1",
				role_id: 42
			},
			{
				name: "设计费计算器",
				integral: 2,
				url: "/sjf/guo",
				parent_type: "设计费",
				province: [
					{
						name: "全国"
					}
				],
				price: "8",
				role_id: 24,
				check: true
			},
			{
				check:true,
				name: "全国通用监理费计算器",
				integral: 2,
				url: "/jlf/guo",
				parent_type: "监理费",
				province: [
					{
						name: "全国"
					}
				],
				price: "8",
				role_id: 25
			},
			{
				check:true,
				name: "全国施工图审查费计算器",
				integral: 2,
				url: "/sgtscf/guo",
				parent_type: "施工图审查费",
				province: [
					{
						name: "全国"
					}
				],
				price: "6",
				role_id: 75
			},
			{
				check:true,
				name: "河南省造价咨询费计算器",
				integral: 2,
				url: "/zjzxf/yu",
				parent_type: "造价咨询费",
				province: [
					{
						name: "河南"
					}
				],
				price: "6",
				role_id: 79
			},
			{
				check:true,
				name: "环境影响评价费计算器",
				integral: 2,
				url: "/hjyxpj/guo",
				parent_type: "环境影响评价费",
				province: [
					{
						name: "全国"
					}
				],
				price: "8",
				role_id: 8
			},
			{
				check:true,
				name: "全国招标代理费计算器",
				integral: 2,
				url: "/zbdlf/guo",
				parent_type: "招标代理费",
				province: [
					{
						name: "全国"
					}
				],
				price: "6",
				role_id: 126
			},
			{
				check:true,
				name: "劳动安全卫生评审费计算器",
				integral: 1,
				url: "/ldaqwsps/guo",
				parent_type: "劳动安全卫生评审费",
				province: [
					{
						name: "全国"
					}
				],
				price: "1",
				role_id: 33
			},
			{
				check:true,
				name: "水土保持费计算器|保监[2005]22号计算器",
				integral: 2,
				url: "/stbcf/guo",
				parent_type: "水土保持费",
				province: [
					{
						name: "全国"
					}
				],
				price: "9",
				role_id: 21
			},
			{
				check:true,
				name: "工程保险费计算器",
				integral: 1,
				url: "/gcbxf/guo",
				parent_type: "工程保险费",
				province: [
					{
						name: "全国"
					}
				],
				price: "1",
				role_id: 35
			},
			{
				check:true,
				name: "地质灾害危险性评估收费计算器",
				integral: 4,
				url: "/dzzh/guo",
				parent_type: "地质灾害危险性评估收费",
				province: [
					{
						name: "全国"
					}
				],
				price: "12",
				role_id: 29
			},
			{
				check:true,
				name: "预备费计算器",
				integral: 2,
				url: "/ybf/guo",
				parent_type: "预备费",
				province: [
					{
						name: "全国"
					}
				],
				price: "6",
				role_id: 289
			},
			{
				check:true,
				name: "全国建设期利息计算器",
				integral: 2,
				url: "/jsqlx/guo",
				parent_type: "建设期利息",
				province: [
					{
						name: "全国"
					}
				],
				price: "8",
				role_id: 300
			},
			{
				check:true,
				name: "铺底流动资金计算器",
				integral: 1,
				url: "/pdldzj/guo",
				parent_type: "铺底流动资金",
				province: [
					{
						name: "全国"
					}
				],
				price: "1",
				role_id: 305
			},
		],
		selectCalList:[],
	},
	getters:{
		selectStatus:(state)=>{//全选状态
			return state.calList.every(item=>{
				return item.check == true
			})
		},
		getAllCalList:(state)=>{ //
			state.selectCalList = []
			state.calList.forEach(item=>{
				if(item.check == true){
					state.selectCalList.push(item)
				}
			})
			return state.selectCalList
		},
	},
	mutations: {
		selectedAll(state){  //全选
			state.calList.forEach(item=>{
				item.check = true
			})
		},
		unselectedAll(state){ //取消全选
			state.calList.forEach(item=>{
				item.check = false
			})
		},
		selectAllCal(state,cal){ //用户选择的单个计算器
			state.calList.forEach(item=>{
				if(item.name == cal.name){
					item.check = !item.check
				}
			})
		},
		chooseCal(state,cal){  //省份分类下单个计算器
			for(let i = 0;i<state.calList.length;i++){
				if(state.calList[i].name == cal.name){
					state.calList.splice(i,1)
					return
				}
			}
			cal.check = true
			state.calList.push(cal)
		},
		chooseAllCal(state,list){  //省份分类下全选
			const selectList = list.select
			const unselectList = list.unselect
			if(unselectList.length == 0){//取消全选
				for(let i = 0;i<state.calList.length;i++){
					for(let j = 0;j<selectList.length;j++){
						if(state.calList[i].name == selectList[j].name){
							state.calList.splice(i,1)
						}
					}
				}
			}else{
				unselectList.forEach(item=>{
					state.calList.push(item)
				})
			}
		},
	},
	actions: {
		doSelectAll({commit,getters}){ //全选全不选
			getters.selectStatus ? commit('unselectedAll') : commit('selectedAll')
		}
	}
}