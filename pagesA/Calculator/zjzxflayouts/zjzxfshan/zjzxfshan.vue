<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-shan :title="title"></zjzxf-counter-shan>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="901" @tap="setDetailId">陕西|工程造价咨询服务收费标准|陕价行发[2014]88号</view>
			<view class="a-text" :data-id="1492" @tap="setDetailId">陕西省工程造价咨询服务收费管理有关问题|陕价行发[2012]72号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterShan from "./zjzxf-counter_shan.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfShan',  //api请求
					count:2  //积分消耗
				},
				title: "陕西省造价咨询费",
				id:901
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterShan,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
