<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-jing :title="title"></zjzxf-counter-jing>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="104" @tap="setDetailId">北京市造价咨询收费标准2011</view>
			<view class="a-text" :data-id="105" @tap="setDetailId">北京市造价咨询收费标准2015|京价协[2015]011号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterJing from "./zjzxf-counter_jing.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	// import zjzxfBz from './zjzxfbz.vue'
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJing',  //api请求
					count:2  //积分消耗
				},
				title:"北京市造价咨询费",
				id:104
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterJing,
			baseLayout,
			computing,
			zjzxfResult,
			// zjzxfBz
		}
	}
</script>

<style>
</style>
