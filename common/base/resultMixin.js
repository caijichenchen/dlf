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
   	}
   
   },
   created() {
   	this.$bus.on('jsSuccess', this.changeVal)
   },
   beforeDestroy() {
   	this.$bus.off('jsSuccess', this.changeVal);
   }
};