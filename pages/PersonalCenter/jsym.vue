<template>
    <view class="py-4">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">计算过程</block>
		</cu-custom>
		<view class="px-3" v-html="html"></view>
    </view>
</template>

<script>
	import $req from '@/common/req/request.js'
    export default {
        data() {
            return {
				html: ''
            };
        },
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
				title: '独立费~工程建设其他费用计算器',
				path: '/pages/PersonalCenter/jsym'
		    }
		},
		onLoad(options){
			const id = options.id
			const temId = options.temId
			$req.request({
				url: '/api/xcx/yjjs/yjjs_report',
				method:'POST',
				data:{
					reportId:id,
					templateId:temId
				}
			}).then(res=>{
				this.html = res.data.data
				console.log(res.data)
			}).catch(err=>{
				console.log(err)
			})
		}
    }
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}
	
</style>