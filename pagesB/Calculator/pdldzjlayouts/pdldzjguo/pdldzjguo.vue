<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<pdldzj-counter-guo></pdldzj-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="铺底流动资金" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import pdldzjCounterGuo from "./pdldzj_counter_guo.vue"
	import {pdldzjData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pdldzjGuo',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(pdldzjData)),
			}
		},
		components:{
			pdldzjCounterGuo
		}
	}
</script>

<style>

</style>
