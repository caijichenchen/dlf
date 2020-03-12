<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
		    <block slot="content">{{title}}</block>
		</cu-custom>
		<parser :html="html" class="contentwrap"></parser>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import parser from "@/components/jyf-Parser/index"
	export default{
		data() {
		    return {
				html:'',
				title:''
		    }
		},
		onLoad(options) {
			const id = options.id
			this.title = options.title ? options.title : '相关标准'
			$req.request({
				url:'/api/xcx/standard/detail',
				data:{id:id}
			}).then(res=>{
				let data = res.data.message.body
				this.html = data
			}).catch(err=>{
				this.$msg('获取相关标准失败')
			})
		},
		components: {
			parser
		}
	}
</script>

<style scoped>
	.contentwrap {
		width: 100%;
		overflow: hidden;
		white-space: normal;
		text-align: left;
		line-height: 64rpx;
		font-size: 28rpx;
		padding: 24rpx;
		box-sizing: border-box;
	}
</style>
