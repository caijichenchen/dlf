<template>
	<base-layout :detailId="273">
		<template v-slot:jsq>
			<fwmjchf-counter-qiong></fwmjchf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="房屋面积测绘费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fwmjchfCounterQiong from "./fwmjchf-counter_qiong.vue"
	import {fwmjchfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fwmjchfQiong',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fwmjchfData)),
			}
		},
		components:{
			fwmjchfCounterQiong
		}
	}
</script>

<style>
</style>
