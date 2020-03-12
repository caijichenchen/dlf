<template>
	<base-layout :detailId="1663">
		<template v-slot:jsq>
			<jsjyfwf-counter-zhe></jsjyfwf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterZhe from "./jsjyfwf_counter_zhe.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfZhe',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterZhe
		}
	}
</script>

<style>

</style>
