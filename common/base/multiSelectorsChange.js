export const MultiSelectorsChangeMixin = {
	data() {
		return {
			needVal: {

			},
			multiSelector: {

			},
			pickerIndex: {

			},
			showSelector: {

			},
			sun: [],
			datajson: [],
		}
	},
	mounted() {
		this.multiSelectorChange(this.datajson) //初始化
	},
	methods: {
		PickerChange(e) {
			let name = e.target.dataset.name
			this.pickerIndex[name] = e.target.value	
			this.multiSelectorChange(this.datajson, name)
			console.log(this.needVal)
		},
		afterPicker(index,name) {
			this.pickerIndex[name] = index
			this.multiSelectorChange(this.datajson, name)
		},
		multiSelectorChange(json, name) {
			let valueIndex
			let ChildrenData = json
			let childs = []
			let k = 0
			let j = 0
			for (let i in this.multiSelector) {
				if (Array.isArray(this.multiSelector[i])) {
					if (j != 0 && k > j) {
						this.pickerIndex[i] = 0
					}
					valueIndex = this.pickerIndex[i]
				} else {
					valueIndex = 0;
				}
				if (typeof ChildrenData[valueIndex] === 'object' && Array.isArray(ChildrenData[valueIndex]['s']) && ChildrenData[
						valueIndex]['s'].length) {
					if (name == null && k == 0) { //初始化 name为空的时候
						j = 1
						k = 2
						this.getChildrenNames(ChildrenData)
						childs = this.sun
					}
					ChildrenData = ChildrenData[valueIndex]['s'];
				} else {
					ChildrenData = null;
				}
				if (i == name) {
					j = k = 1
					this.getChildrenNames(ChildrenData)
					childs = this.sun
					this.needVal[i] = this.multiSelector[i][this.pickerIndex[i]]
				}
				if (j != 0 && k > j) {
					if (Array.isArray(this.multiSelector[i])) {
						this.multiSelector[i] = childs
					} else {
						this.multiSelector[i] = childs[0]
					}
					this.needVal[i] = childs[0]
					if (childs[0] == 'hiddenhidden') {
						this.showSelector[i] = false
					} else {
						this.showSelector[i] = true
					}
					if(ChildrenData==null) break
					this.getChildrenNames(ChildrenData)
					childs = this.sun
				}
				k++
			}
		},
		getChildrenNames(ChildrenData) {
			this.sun = []
			if (Array.isArray(ChildrenData)) {
				for (let item of ChildrenData) {
					this.sun.push(item['n'])
				}
			}
		}
	},

};
