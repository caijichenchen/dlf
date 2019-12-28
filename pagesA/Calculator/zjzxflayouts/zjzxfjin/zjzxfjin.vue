<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-jin :title="title"></zjzxf-counter-jin>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="133" @tap="setDetailId">山西省造价咨询服务收费标准|晋建价协字[2014]8号</view>
			<view class="a-text" :data-id="1486" @tap="setDetailId">山西|工程造价咨询服务收费标准及有关事项|晋价服字〔2012〕248号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterJin from "./zjzxf-counter_jin.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJin',  //api请求
					count:2  //积分消耗
				},
				title: "山西省造价咨询费",
				id:133
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterJin,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
