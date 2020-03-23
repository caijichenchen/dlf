<template>
	<base-layout :detailId="266">
		<template v-slot:jsq>
			<zbdlf-counter-meng></zbdlf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterMeng from "./zbdlf_counter_meng.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfMeng',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterMeng
		}
	}
</script>

<style>

</style>
