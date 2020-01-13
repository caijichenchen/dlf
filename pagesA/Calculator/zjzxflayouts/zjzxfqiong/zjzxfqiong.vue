<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-qiong :title="title"></zjzxf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="123" @tap="setDetailId">海南造价咨询收费标准|琼价协[2016]004号</view>
			<view class="a-text" :data-id="1421" @tap="setDetailId">海南|工程造价咨询服务收费|琼价协[2015]003号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQiong from "./zjzxf-counter_qiong.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQiong',  //api请求
					count:2  //积分消耗
				},
				title: "海南省造价咨询费",
				id:123
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterQiong,
			zjzxfResult
		}
	}
</script>

<style>
</style>
