<template>
	<base-layout :detailId="1567">
		<template v-slot:jsq>
			<zbdlf-counter-xiang></zbdlf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterXiang from "./zbdlf_counter_xiang.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfXiang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterXiang
		}
	}
</script>

<style>

</style>
