<template>
	<base-layout :detailId='109'>
		<template v-slot:jsq>
			<zjzxf-counter-qian :title="title"></zjzxf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQian from "./zjzxf-counter_qian.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQian',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterQian
		}
	}
</script>

<style>
</style>
