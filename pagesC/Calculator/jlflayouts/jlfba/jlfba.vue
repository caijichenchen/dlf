<template>
	<base-layout :detailId="952">
		<template v-slot:jsq>
			<jlfba-counter-guo></jlfba-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="重庆市监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfbaCounterGuo from "./jlfba_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfBa',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Ba'))
			}
		},
		components:{
			jlfbaCounterGuo
		}
	}
</script>

<style>

</style>
