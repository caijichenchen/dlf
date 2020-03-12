<template>
	<base-layout :detailId="329">
		<template v-slot:jsq>
			<jlfgszf-counter-guo></jlfgszf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="广州、深圳、珠海、佛山工程监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfgszfCounterGuo from "./jlfgszf_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGszf',  //api请求
					count:3 //积分消耗
				},
				result: JSON.parse(jlfData(''))
			}
		},
		components:{
			jlfgszfCounterGuo
		}
	}
</script>

<style>

</style>
