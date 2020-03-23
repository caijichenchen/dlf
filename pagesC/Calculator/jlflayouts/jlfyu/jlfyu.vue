<template>
	<base-layout :detailId="977">
		<template v-slot:jsq>
			<jlfyu-counter-guo></jlfyu-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="河南省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfyuCounterGuo from "./jlfyu_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfYu',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Yu'))
			}
		},
		components:{
			jlfyuCounterGuo
		}
	}
</script>

<style>

</style>
