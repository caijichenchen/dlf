<template>
	<view>
		<button @click="getAll">获取</button>
		<!-- <parser :html="html">
			
		</parser> -->
		<!-- <rich-text :nodes="nodes"></rich-text> -->
		<web-view :src="serverUrl+'/standard/detail/110?cal_url=/zjzxf/guo'"></web-view>
	</view>
</template>
<script>
	import $req from '@/common/req/request.js'
	export default{
		data() {
		    return {
				serverUrl: 'https://www.dulifei.com',
				html:'11',
				nodes:[],
				strings:''
		    }
		},
		mounted(){
			
		},
		methods:{
			getAll(){
				$req.request({
					url:'/api/xcx/standard/detail?id=110'
				}).then(res=>{
					this.strings = res.data.message.body
					console.log(this.nodes)
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
	}
</style>
