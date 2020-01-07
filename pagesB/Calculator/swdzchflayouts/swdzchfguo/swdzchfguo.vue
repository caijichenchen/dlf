<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<swdzchf-counter-guo></swdzchf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<swdzchf-result></swdzchf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="275" @tap="setDetailId">水文地质测绘费计算标准|水文地质测绘费取费标准|计价格[2002]10号</view>
			<view class="a-text" :data-id="287" @tap="setDetailId">测绘工程产品价格困难类别细则|国测财字[2002]3号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import swdzchfCounterGuo from "./swdzchf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import swdzchfResult from "./swdzchf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/swdzchfGuo',  //api请求
					count:4  //积分消耗
				},
				id:275
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			swdzchfCounterGuo,
			baseLayout,
			computing,
			swdzchfResult
		}
	}
</script>

<style>
</style>
