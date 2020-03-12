<template>
	<base-layout :detailId="1021">
		<template v-slot:jsq>
			<jnpgf-counter-hu></jnpgf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市节能评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jnpgfCounterHu from "./jnpgf_counter_hu.vue"
	import {jnpgfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jnpgfHu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jnpgfData)),
			}
		},
		components:{
			jnpgfCounterHu
		}
	}
</script>

<style>

</style>
