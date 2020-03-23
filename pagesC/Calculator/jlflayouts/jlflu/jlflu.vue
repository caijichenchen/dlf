<template>
	<base-layout :detailId="1677">
		<template v-slot:jsq>
			<jlflu-counter-guo></jlflu-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="山东省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfluCounterGuo from "./jlflu_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfLu',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Lu')),
			}
		},
		components:{
			jlfluCounterGuo
		}
	}
</script>

<style>

</style>
