<template>
	<base-layout :detailId="241">
		<template v-slot:jsq>
			<zbdlf-counter-qiong></zbdlf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterQiong from "./zbdlf_counter_qiong.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfQiong',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterQiong
		}
	}
</script>

<style>

</style>
