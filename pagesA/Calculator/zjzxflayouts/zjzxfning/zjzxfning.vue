<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-ning :title="title"></zjzxf-counter-ning>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="1490" @tap="setDetailId">宁夏|建设工程造价咨询服务收费有关问题|宁价费发[2003]第204号</view>
			<view class="a-text" :data-id="1554" @tap="setDetailId">宁夏|建设工程造价咨询服务收费标准|宁价费发〔2010〕87号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterNing from "./zjzxf-counter_ning.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfNing',  //api请求
					count:2  //积分消耗
				},
				title: "宁夏造价咨询费",
				id:1490
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterNing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
