<template>
	<base-layout :detailId="312">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-yue></jsxmqqgzzxf-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="广东省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterYue from "./jsxmqqgzzxf_counter_yue.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfYue',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterYue
		}
	}
</script>

<style>

</style>
