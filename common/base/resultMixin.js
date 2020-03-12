export const resultMixin = {
   methods: {
		// changeVal(val) {
		// 	if (val != null) {
		// 		for (var key in val) {
		// 			if (this.result[key] != undefined) {
		// 				this.result[key] = val[key];
		// 			}
		// 		}
		// 	}
		// },
		changeVal(val) {
			if (val != null) {
				for (var key in val) {
					if (this.result[key][key] != undefined) {
						this.result[key][key] = val[key];
					}
				}
			}
		},
		setDetailId(e){
			this.id = (e.currentTarget.dataset.id)-0
		},
		goDetail(address){
			const arr = address.split('/')
			const data = arr[arr.length-1]
			const urlArr = data.split('&')
			uni.navigateTo({
				url:`/pages/PersonalCenter/jsym?id=${urlArr[1]}&temId=${urlArr[0]}`
			})
		},
   },
   created() {
	   this.$set(this.result,"calcu_jsgc",{ title:'计算过程', calcu_jsgc:'' })
	   this.$set(this.result,"calcu_url",{ title:'直达链接', calcu_url: '' })
	   console.log(this.result)
		this.$bus.on('jsSuccess', this.changeVal)
   },
   beforeDestroy() {
		this.$bus.off('jsSuccess', this.changeVal);
   },
};