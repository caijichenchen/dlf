<template>
	<base-layout :detailId="106">
		<template v-slot:jsq>
			<zjzxf-counter-long :title="title"></zjzxf-counter-long>
			<computing v-bind:countData = "countData"></computing>
			<result title="甘肃省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterLong from "./zjzxf-counter_long.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfLong',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterLong
		}
	}
</script>

<style>
</style>
