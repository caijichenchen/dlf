<template>
	<base-layout :detailId='111'>
		<template v-slot:jsq>
			<zjzxf-counter-yu :title="title"></zjzxf-counter-yu>
			<computing v-bind:countData = "countData"></computing>
			<result title="河南省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterYu from "./zjzxf-counter_yu.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterYu
		}
	}
</script>

<style>
</style>
