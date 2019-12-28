<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zbdlf-counter-zhe></zbdlf-counter-zhe>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zbdlf-result :title="title"></zbdlf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="34" @tap="setDetailId">招标代理费标准|国家计委计价格[2002]1980号</view>
			<view class="a-text" :data-id="153" @tap="setDetailId">降低部分建设项目收费标准|发改价格[2011]534号</view>
			<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zbdlfCounterZhe from "./zbdlf_counter_zhe.vue"
	import computing from "@/common/base/computing.vue"
	import zbdlfResult from "../zbdlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfZhe',  //api请求
					count:2  //积分消耗
				},
				title:'浙江',
				id:34
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zbdlfCounterZhe,
			baseLayout,
			computing,
			zbdlfResult
		}
	}
</script>

<style>

</style>
