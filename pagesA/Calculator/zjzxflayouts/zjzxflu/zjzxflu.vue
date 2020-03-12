<template>
	<base-layout :detailId="1488">
		<template v-slot:jsq>
			<zjzxf-counter-lu :title="title"></zjzxf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<result title="山东省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterLu from "./zjzxf-counter_lu.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfLu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterLu
		}
	}
</script>

<style>
</style>
