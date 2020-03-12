<template>
	<base-layout :detailId="1572">
		<template v-slot:jsq>
			<jsjyfwf-counter-tianjin></jsjyfwf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<result title="天津市建设交易服务费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsjyfwfCounterTianjin from "./jsjyfwf_counter_tianjin.vue"
	import {jsjyfwfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsjyfwfTianjin',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsjyfwfData)),
			}
		},
		components:{
			jsjyfwfCounterTianjin
		}
	}
</script>

<style>

</style>
