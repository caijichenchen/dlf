<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcdmclsf-counter-guo></gcdmclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程地面测量收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcdmclsfCounterGuo from "./gcdmclsf-counter_guo.vue"
	import {gcdmclsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcdmclsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcdmclsfData)),
			}
		},
		components:{
			gcdmclsfCounterGuo
		}
	}
</script>

<style>
</style>
