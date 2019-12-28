<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-guo></zbdlf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="34" @tap="setDetailId">招标代理费标准|国家计委计价格[2002]1980号</view>
			<view class="a-text" :data-id="153" @tap="setDetailId">降低部分建设项目收费标准|发改价格[2011]534号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterGuo from "./zbdlf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfGuo',  //api请求
					count:2  //积分消耗
				},
				title: '全国',
				id:34
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zbdlfCounterGuo,
			baseLayout,
			computing,
			zbdlfResult
		}
	}
</script>

<style>

</style>
