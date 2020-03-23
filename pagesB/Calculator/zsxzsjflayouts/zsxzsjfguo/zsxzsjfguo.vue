<template>
	<base-layout :detailId="136">
		<template v-slot:jsq>
			<zsxzsjf-counter-guo></zsxzsjf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="中设协字[2016]89号设计费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfCounterGuo from "./zsxzsjf_counter_guo.vue"
	import {zsxzData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/sjfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zsxzData)),
			}
		},
		components:{
			zsxzsjfCounterGuo
		}
	}
</script>

<style>

</style>
