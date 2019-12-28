export const modalMixin = {
   methods: {
   	assignment(e) {
			// let val = e.currentTarget.dataset.val;
			// if(isNaN(val)){
			// 	val = e.currentTarget.dataset.key
			// }
			// console.log(val);
   		this.$bus.emit('modalChange',this.modalName,e);
   	},
		computeval(e) {
			// console.log(this.modalName)
			// console.log(e)
			this.$bus.emit('radioChangeval',this.modalName,e);
		},
   	hideModal(e) {
   		this.$emit('hideModal')  // 子组件更新弹框隐藏
   	},
   },
};