export const fljcMixin = {
    methods: {
		// 省份
		Pickeraddress(e) {
			this.address = e.detail.value
		},
		// 选择标准
		Pickerstandard(e) {
			this.started = e.detail.value
		},
		// 收费项目
		Pickerproject(e) {
			var index = parseInt(e.detail.value)
			this.project = index
			this.uni_tag = this.uniTagArr[e.detail.value]
			this.classify = this.classifyArr[index]
		},
	}
}