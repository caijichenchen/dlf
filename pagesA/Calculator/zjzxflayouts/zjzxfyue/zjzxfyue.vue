<template>
	<base-layout :detailId="920">
		<template v-slot:jsq>
			<zjzxf-counter-yue :title="title"></zjzxf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="广东省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterYue from "./zjzxf-counter_yue.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYue',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterYue
		}
	}
</script>

<style>
</style>
