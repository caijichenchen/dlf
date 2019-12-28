export const computingMixin = {
	
   methods: {
   	jisuan(e) {
   		this.$bus.emit('jsSuccess', this.result);
   		uni.request({
   			url: this.countData.url, //仅为示例，并非真实接口地址。
   			data: this.needVal,
   			method: 'POST',
   			success: (res) => {
   				// this.$emit('success', res.data);
   			},
   			fail: (err) => {
   
   			}
   		});
   	},
   	needValChange(val){
   		this.needVal = val
   	}
   },
   created() {
   	this.$bus.on('needValChange', this.needValChange)
   },
   beforeDestroy() {
   	this.$bus.off('needValChange', this.needValChange);
   }
};