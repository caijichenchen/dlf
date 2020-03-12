<template>
	<base-layout :detailId="1583">
		<template v-slot:jsq>
			<hjjcf-counter-wan></hjjcf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省环境监测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterWan from "./hjjcf_counter_wan.vue"
	import {hjjcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfWan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjjcfData)),
			}
		},
		components:{
			hjjcfCounterWan
		}
	}
</script>

<style>

</style>
