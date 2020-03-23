<template>
	<base-layout :detailId="114">
		<template v-slot:jsq>
			<zjzxf-counter-jilin :title="title"></zjzxf-counter-jilin>
			<computing v-bind:countData = "countData"></computing>
			<result title="吉林省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJilin from "./zjzxf-counter_jilin.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJilin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterJilin
		}
	}
</script>

<style>
</style>
