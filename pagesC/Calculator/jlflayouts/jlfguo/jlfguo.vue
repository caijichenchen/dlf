<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jlfguo-counter-guo></jlfguo-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jlfguo-result></jlfguo-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="38" @tap="setDetailId">监理费取费标准|发改价格[2007]670号</view>
			<view class="a-text" :data-id="138" @tap="setDetailId">关于进一步放开建设项目专业服务价格的通知|发改价格[2015]299号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import jlfguoCounterGuo from "./jlfguo_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import jlfguoResult from "./jlfguo_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGuo',  //api请求
					count:2  //积分消耗
				},
				id:38
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			jlfguoCounterGuo,
			baseLayout,
			computing,
			jlfguoResult
		}
	}
</script>

<style>

</style>
