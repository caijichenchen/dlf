<template>
	<base-layout :detailId="1063">
		<template v-slot:jsq>
			<zjzxf-counter-ba :title="title"></zjzxf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<result title="重庆市造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterBa from "./zjzxf-counter_ba.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfBa',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterBa
		}
	}
</script>

<style>
</style>
