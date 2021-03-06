export const counterMixin = {
		data() {
			return {
				fzcdList: ['简单','中等','复杂']
			}
		},
    methods: {
		showdzzk(e) {
			this.modalData = JSON.parse(e.currentTarget.dataset.target) 
			this.$bus.emit('modalData', this.modalData )
		},
    	//模板
    	showModal(e) {
    		this.showModalName = e.currentTarget.dataset.target
    	},
    	hideModal(e) {
    		this.showModalName = null
    	},
		checkDeatil(detailId,title){
			uni.navigateTo({
				url:`/pages/normal/normal?id=${detailId}&title=${title}`
			})
		},
		pickerChoose(e){ //不联动下拉选项
			const arrName = e.currentTarget.dataset.arr
			const indexName = e.currentTarget.dataset.index
			this[indexName] = e.detail.value
			this.needVal[arrName] = this[arrName][this[indexName]]
		},
    	checkpercentage(e) {
    		this.showModalName = null
    	},
    	changeVal(name, e) {
			let val = e.currentTarget.dataset.val;
			let cIndex = e.currentTarget.dataset.index
			let ckey = e.currentTarget.dataset.key
			if(isNaN(val)){
				if(cIndex){
					this[cIndex] = e.currentTarget.dataset.key
				}
				this.needVal[name] = e.currentTarget.dataset.val
				this.showModalName = null
				if(this.multiSelector[name]){
					this.afterPicker(ckey,name)
				}
			}else if(!isNaN(val) && cIndex){ //数值下拉选项且不为联动时
				this[cIndex] = e.currentTarget.dataset.key
				this.needVal[name] = e.currentTarget.dataset.val
			}else{
				this.needVal[name] = val;
			}
			this.showModalName = null
			// console.log(this.showModalName)
    	},
		computeRadio(name,e){
			var val = parseFloat(e.currentTarget.dataset.val)
			if(val <= 5){
				this.needVal[name] = this.fzcdList[0]
				this.indexfzcd = 0
			}else if( val <= 9 && val > 5){
				this.needVal[name] = this.fzcdList[1]
				this.indexfzcd = 1
			}else if(val >= 10){
				this.needVal[name] = this.fzcdList[2]
				this.indexfzcd = 2
			}
			this.showModalName = null
		},
    	active(num) {
    		this.ins = num.id
    	},
    
    	chum: function(str) {
    		this.lanm = str;
    	},
    	tap: function(e) {
    		this.title = e
    	},
    	checkxs: function(e) {
    		this.xishu = e
    	},
    	checkfj: function(e) {
    		this.fjtz = e
    	},
    
    	PickerChange(e) {
    		this.index = e.detail.value
    	},
    	checkfzcd1(e) {
    		this.index = 0
    	},
    	checkfzcd2(e) {
    		this.index = 1
    	},
    	checkfzcd3(e) {
    		this.index = 2
    	}
    },
  //   mounted(){
  //   	// this.$bus.emit('needValChange', this.needVal);
		// const valData = {
		// 	needVal:this.needVal,
		// 	showSelectedInput:this.showInput || null
		// }
  //   	this.$bus.emit('needValChange', valData);
  //   },
	updated(){
		const valData = {
			needVal:this.needVal,
			showSelectedInput:this.validate || null
		}
		this.$bus.emit('needValChange', valData);
	},
    created() {
    	this.$bus.on('modalChange', this.changeVal)
    	// this.$bus.on('hideModal', this.hideModal)
		this.$bus.on('radioChangeval', this.computeRadio)
    },
    beforeDestroy() {
    	this.$bus.off('modalChange', this.changeVal);
    	// this.$bus.off('hideModal', this.hideModal);
    },
};