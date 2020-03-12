<template>
	<base-layout :detailId="989">
		<template v-slot:jsq>
			<jlfe-counter-guo></jlfe-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖北省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfeCounterGuo from "./jlfe_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfE',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('E'))
			}
		},
		components:{
			jlfeCounterGuo
		}
	}
</script>

<style>

</style>
