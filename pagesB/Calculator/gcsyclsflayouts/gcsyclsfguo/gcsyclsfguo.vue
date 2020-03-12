<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcsyclsf-counter-guo></gcsyclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程水域测量收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcsyclsfCounterGuo from "./gcsyclsf-counter_guo.vue"
	import {gcsyclsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcsyclsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcsyclsfData)),
			}
		},
		components:{
			gcsyclsfCounterGuo
		}
	}
</script>

<style>
</style>
