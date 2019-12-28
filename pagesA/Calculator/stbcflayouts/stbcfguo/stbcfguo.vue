<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<stbcf-counter-guo></stbcf-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<stbcf-result></stbcf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="66" @tap="setDetailId">水土保持方案费计算标准|保监[2005]22号|关于开发水土保持咨询服务费用计列的指导意见</view>
			<view class="a-text" :data-id="242" @tap="setDetailId">海南|水土保持设施补偿费水土流失防治费征收管理暂行办法|琼府办[2006]61号</view>
			<view class="a-text" :data-id="317" @tap="setDetailId">水土保持补偿费收费标准(试行)|发改价格[2014]886号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import stbcfCounterGuo from "./stbcf-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import stbcfResult from "./stbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/stbcfGuo',  //api请求
					count:2  //积分消耗
				},
				id:66
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			stbcfCounterGuo,
			baseLayout,
			computing,
			stbcfResult
		}
	}
</script>

<style>
</style>
