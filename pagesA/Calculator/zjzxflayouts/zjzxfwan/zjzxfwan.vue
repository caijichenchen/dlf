<template>
	<base-layout :detailId='905'>
		<template v-slot:jsq>
			<zjzxf-counter-wan :title="title"></zjzxf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterWan from "./zjzxf-counter_wan.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfWan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterWan
		}
	}
</script>

<style>
</style>
