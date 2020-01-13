<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-e :title="title"></zjzxf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="113" @tap="setDetailId">湖北省造价咨询服务收费标准|鄂价工服规[2011]23号</view>
			<view class="a-text" :data-id="122" @tap="setDetailId">湖北省造价咨询费标准|鄂价工服规[2012]149号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterE from "./zjzxf-counter_e.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfE',  //api请求
					count:2  //积分消耗
				},
				title: "湖北造价咨询费",
				id:113
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterE,
			zjzxfResult
		}
	}
</script>

<style>
</style>
