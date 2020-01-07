<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<xmjs-counter-guo></xmjs-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<xmjs-result></xmjs-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="42" @tap="setDetailId">项目建设管理费计算标准|建设单位管理计算标准|财建〔2016〕504号</view>
			<view class="a-text" :data-id="154" @tap="setDetailId">建设单位管理费|财建[2002]394号|财政部关于印发《基本建设财务管理规定》的通知</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import xmjsCounterGuo from "./xmjs_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import xmjsResult from "./xmjs_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jsdwglGuo',  //api请求
					count:2  //积分消耗
				},
				id:42
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			xmjsCounterGuo,
			baseLayout,
			computing,
			xmjsResult
		}
	}
</script>

<style>

</style>
