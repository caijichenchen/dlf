<template>
	<base-layout :detailId="1695">
		<template v-slot:jsq>
			<jsjyfwf-counter-qiong></jsjyfwf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterQiong from "./jsjyfwf_counter_qiong.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfQiong',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterQiong
		}
	}
</script>

<style>

</style>
