<template>
	<base-layout :detailId="265">
		<template v-slot:jsq>
			<zbdlf-counter-qian></zbdlf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterQian from "./zbdlf_counter_qian.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfQian',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterQian
		}
	}
</script>

<style>

</style>
