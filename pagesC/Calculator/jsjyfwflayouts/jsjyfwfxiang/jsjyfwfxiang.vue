<template>
	<base-layout :detailId="1691">
		<template v-slot:jsq>
			<jsjyfwf-counter-xiang></jsjyfwf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterXiang from "./jsjyfwf_counter_xiang.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfXiang',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterXiang
		}
	}
</script>

<style>

</style>
