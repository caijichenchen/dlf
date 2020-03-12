<template>
	<base-layout :detailId="1637">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-jilin></fkdxyjjsf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<result title="吉林省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterJilin from "./fkdxyjjsf_counter_jilin.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfJilin',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterJilin
		}
	}
</script>

<style>

</style>
