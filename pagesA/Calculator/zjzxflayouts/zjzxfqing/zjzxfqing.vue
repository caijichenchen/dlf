<template>
	<base-layout :detailId='1491'>
		<template v-slot:jsq>
			<zjzxf-counter-qing :title="title"></zjzxf-counter-qing>
			<computing v-bind:countData = "countData"></computing>
			<result title="青海省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQing from "./zjzxf-counter_qing.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQing',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterQing
		}
	}
</script>

<style>
</style>
