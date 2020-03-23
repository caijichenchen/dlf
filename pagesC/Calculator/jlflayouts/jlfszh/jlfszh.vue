<template>
	<base-layout :detailId="232">
		<template v-slot:jsq>
			<jlfszh-counter-guo></jlfszh-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="苏浙沪监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfszhCounterGuo from "./jlfszh_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfSzh',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('szh'))
			}
		},
		components:{
			jlfszhCounterGuo
		}
	}
</script>

<style>

</style>
