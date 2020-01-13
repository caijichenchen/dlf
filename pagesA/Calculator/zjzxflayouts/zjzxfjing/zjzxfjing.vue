<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-jing :title="title"></zjzxf-counter-jing>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="104" @tap="setDetailId">北京市造价咨询收费标准2011</view>
			<view class="a-text" :data-id="105" @tap="setDetailId">北京市造价咨询收费标准2015|京价协[2015]011号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJing from "./zjzxf-counter_jing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJing',  //api请求
					count:2  //积分消耗
				},
				title:"北京市造价咨询费",
				id:104
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterJing,
			zjzxfResult,
		}
	}
</script>

<style>
</style>
