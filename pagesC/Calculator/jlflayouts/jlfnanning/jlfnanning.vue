<template>
	<base-layout :detailId="934">
		<template v-slot:jsq>
			<jlfnanning-counter-guo></jlfnanning-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="南宁监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfnanningCounterGuo from "./jlfnanning_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfNanning',  //api请求
					count:3  //积分消耗
				},
				result: JSON.parse(jlfData('Nanning'))
			}
		},
		components:{
			jlfnanningCounterGuo
		}
	}
</script>

<style>

</style>
