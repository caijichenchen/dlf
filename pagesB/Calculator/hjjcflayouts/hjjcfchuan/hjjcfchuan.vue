<template>
	<base-layout :detailId="1715">
		<template v-slot:jsq>
			<hjjcf-counter-chuan></hjjcf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省环境监测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterChuan from "./hjjcf_counter_chuan.vue"
	import {hjjcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfChuan',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(hjjcfData)),
			}
		},
		components:{
			hjjcfCounterChuan
		}
	}
</script>

<style>

</style>
