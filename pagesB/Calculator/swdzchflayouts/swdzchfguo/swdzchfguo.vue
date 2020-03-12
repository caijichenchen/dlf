<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<swdzchf-counter-guo></swdzchf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="水文地质测绘费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="275" @tap="setDetailId">水文地质测绘费计算标准|水文地质测绘费取费标准|计价格[2002]10号</view>
			<view class="a-text" :data-id="287" @tap="setDetailId">测绘工程产品价格困难类别细则|国测财字[2002]3号</view>
		</template>
	</base-layout>
</template>

<script>
	import swdzchfCounterGuo from "./swdzchf-counter_guo.vue"
	import {swdzchfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/swdzchfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(swdzchfData)),
				id:275
			}
		},
		components:{
			swdzchfCounterGuo
		}
	}
</script>

<style>
</style>
