<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<sgtscf-counter-qian></sgtscf-counter-qian>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<sgtscf-result></sgtscf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="265" @tap="setDetailId">贵州|降低部分建设项目收费标准规范收费行为| |黔价房〔2011〕69号</view>
			<view class="a-text" :data-id="323" @tap="setDetailId">贵州省工程设计质量监督站施工图审查计费计算办法</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import sgtscfCounterQian from "./sgtscf_counter_qian.vue"
	import computing from "@/common/base/computing.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQian',  //api请求
					count:2  //积分消耗
				},
				id:265
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			sgtscfCounterQian,
			baseLayout,
			computing,
			sgtscfResult
		}
	}
</script>

<style>

</style>
