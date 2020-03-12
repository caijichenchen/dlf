<template>
	<base-layout :detailId="959">
		<template v-slot:jsq>
			<zjzxf-counter-ji :title="title"></zjzxf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJi from "./zjzxf-counter_ji.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJi',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterJi
		}
	}
</script>

<style>
</style>
