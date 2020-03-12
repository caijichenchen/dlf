<template>
	<base-layout :detailId="1636">
		<template v-slot:jsq>
			<zbdlf-counter-jilin></zbdlf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<result title="吉林省招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterJilin from "./zbdlf_counter_jilin.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfJilin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterJilin
		}
	}
</script>

<style>

</style>
