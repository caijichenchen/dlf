<template>
	<base-layout :detailId="1765">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-su></jsxmqqgzzxf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterSu from "./jsxmqqgzzxf_counter_su.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfSu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterSu
		}
	}
</script>

<style>

</style>
