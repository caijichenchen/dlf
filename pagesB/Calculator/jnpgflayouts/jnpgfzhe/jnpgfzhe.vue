<template>
	<base-layout :detailId="1045">
		<template v-slot:jsq>
			<jnpgf-counter-zhe></jnpgf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省节能评估费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jnpgfCounterZhe from "./jnpgf_counter_zhe.vue"
	import {jnpgfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jnpgfZhe',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jnpgfData)),
			}
		},
		components:{
			jnpgfCounterZhe
		}
	}
</script>

<style>

</style>
