<template>
	<base-layout :detailId="952">
		<template v-slot:jsq>
			<jlfqian-counter-guo></jlfqian-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfqianCounterGuo from "./jlfqian_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfQian',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Qian'))
			}
		},
		components:{
			jlfqianCounterGuo
		}
	}
</script>

<style>

</style>
