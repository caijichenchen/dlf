<template>
	<base-layout :detailId="1808">
		<template v-slot:jsq>
			<jlfmin-counter-guo></jlfmin-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="福建省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfminCounterGuo from "./jlfmin_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfMin',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Min'))
			}
		},
		components:{
			jlfminCounterGuo
		}
	}
</script>

<style>

</style>
