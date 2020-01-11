<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<hjyxpjf-counter-guo></hjyxpjf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<hjyxpjf-result :title="title"></hjyxpjf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="40" @tap="setDetailId">建设项目环境影响评价咨询收费标准|计价格［2002］125号</view>
			<view class="a-text" :data-id="127" @tap="setDetailId">中华人民共和国国务院令 第559号《规划环境影响评价条例》</view>
			<view class="a-text" :data-id="138" @tap="setDetailId">关于进一步放开建设项目专业服务价格的通知|发改价格[2015]299号</view>
		</template>
	</base-layout>
</template>

<script>
	import hjyxpjfCounterGuo from "./hjyxpjf_counter_guo.vue"
	import hjyxpjfResult from "../hjyxpjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/hjyxpjGuo',  //api请求
					count:2  //积分消耗
				},
				title:"全国",
				id: 40
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			hjyxpjfCounterGuo,
			hjyxpjfResult
		}
	}
</script>

<style>

</style>
