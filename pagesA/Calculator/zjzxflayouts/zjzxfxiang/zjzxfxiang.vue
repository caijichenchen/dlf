<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-xiang :title="title"></zjzxf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="143" @tap="setDetailId">湖南省造价咨询服务收费标准|湘价服[2009]81号</view>
			<view class="a-text" :data-id="152" @tap="setDetailId">湖南省建设工程造价管理协会文件|湘建价协〔2016〕25 号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterXiang from "./zjzxf-counter_xiang.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfXiang',  //api请求
					count:2  //积分消耗
				},
				title: "湖南省造价咨询费",
				id:143
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterXiang,
			zjzxfResult
		}
	}
</script>

<style>
</style>
