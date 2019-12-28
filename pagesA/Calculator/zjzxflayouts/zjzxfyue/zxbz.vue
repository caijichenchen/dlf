<template>
	<view>
		<button @click="getAll(110)">获取</button>
		<button @click="getAll(10)">获取</button>
		<button @click="getAll(134)">获取</button>
		<button @click="getAll(135)">获取</button>
		<button @click="getAll(249)">获取</button>
		<!-- <view class="contentwrap" v-html="html">
			
		</view> -->
		<!-- <rich-text :nodes="nodes"></rich-text> -->
		<!-- <textarea value="" :placeholder="strings" /> -->
		<!-- <view>
			<editor :placeholder="strings"></editor>
		</view> -->
		<!-- <u-parse :content="strings" /> -->
		<parser :html="strings" class="contentwrap"></parser>
	</view>
	
</template>

<script>
	import $req from '@/common/req/request.js'
	import parser from "@/components/jyf-Parser/index"
	export default{
		data() {
		    return {
				strings:''
		    }
		},
		mounted(){
			
		},
		components: {
			parser
		},
		methods:{
			getAll(id){
				$req.request({
					url:'/api/xcx/standard/detail',
					data:{id:id}
				}).then(res=>{
					// this.strings = res.data.message.body
					// let data = res.data.message.body.replace(/\<table/gi,'<table style="background:#000"')
					// let dataa = data.replace(/\<tr/gi,'<table style="background:#fff"')
					// this.strings = res.data.message.body
					let data = res.data.message.body
					// data = data.replace(/\<table/gi,'<table style="background:#000"')
					// data = data.replace(/\<tr/gi,'<table style="background:#fff"')
					this.strings = data
					// console.log(this.nodes)
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
				
			}
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
	.contentwrap>>> p{
		font-size: 100rpx;
	}
</style>
