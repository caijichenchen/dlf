<template>
	<view style="background: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
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
				title:'相关标准'
		    }
		},
		onLoad(options) {
			const id = options.id
			if(this.title){
				this.title = options.title
			}
			$req.request({
				url:'/api/xcx/standard/detail',
				data:{id:id}
			}).then(res=>{
				let data = res.data.message.body
				this.html = data
			}).catch(err=>{
				console.log(err)
			})
		},
		components: {
			parser
		},
		methods:{
			
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
