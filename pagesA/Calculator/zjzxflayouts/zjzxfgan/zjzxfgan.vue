<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-gan :title="title"></zjzxf-counter-gan>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz >
			<view class="a-text" :data-id="116" @tap="setDetailId">江西省造价咨询收费标准-赣计收费字[2003]1177号</view>
			<view class="a-text" :data-id="126" @tap="setDetailId">江西省造价咨询收费标准-赣价协[2015]9号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterGan from "./zjzxf-counter_gan.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfGan',  //api请求
					count:2  //积分消耗
				},
				title: "江西省造价咨询费",
				id:116
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterGan,
			zjzxfResult
		}
	}
</script>

<style>
</style>
