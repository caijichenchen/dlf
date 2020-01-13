export const resultMixin = {
   methods: {
		changeVal(val) {
			if (val != null) {
				for (var key in val) {
					if (this.result[key] != undefined) {
						this.result[key] = val[key];
					}
				}
			}
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
		this.$bus.on('jsSuccess', this.changeVal)
   },
   beforeDestroy() {
		this.$bus.off('jsSuccess', this.changeVal);
   },
};