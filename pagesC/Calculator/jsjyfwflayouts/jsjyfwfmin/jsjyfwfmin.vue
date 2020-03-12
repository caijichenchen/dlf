<template>
	<base-layout :detailId="1680">
		<template v-slot:jsq>
			<jsjyfwf-counter-min></jsjyfwf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<result title="福建省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterMin from "./jsjyfwf_counter_min.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsjyfwfMin',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterMin
		}
	}
</script>

<style>

</style>
