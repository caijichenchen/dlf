<template>
	<cal-layout state="1" :city="addressName"></cal-layout>
</template>

<script>
	import calLayout from '@/common/cal/cal.vue'
	import amap from '@/common/amap-wx.js'; 
	export default {
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
				title: '独立费~工程建设其他费用计算器',
				path: '/pages/index/index'
		    }
		},
		data(){
			return {
				key: 'd5e591ec54220d8fd5cafc4def34eef9',
				amapPlugin: null,  
				addressName: '全国',  
			}
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({  
				key: this.key  
			});  
			this.getRegeo()
		},
		methods:{
			getRegeo() {
				this.amapPlugin.getRegeo({  
					success: (data) => { 
						const pro = data[0].regeocodeData.addressComponent.province.slice(0,2);
						this.addressName = pro
					}  
				});  
			},  
		},
		components:{
			calLayout
		}
	}
</script>

<style>
	
</style>