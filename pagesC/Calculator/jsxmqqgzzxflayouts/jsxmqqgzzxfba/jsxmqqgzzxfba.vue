<template>
	<base-layout :detailId="315">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-ba></jsxmqqgzzxf-counter-ba>
			<computing v-bind:countData = "countData"></computing>
			<result title="重庆市建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterBa from "./jsxmqqgzzxf_counter_ba.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfBa',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterBa
		}
	}
</script>

<style>

</style>
