<template>
	<base-layout :detailId="912">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-xiang></jsxmqqgzzxf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterXiang from "./jsxmqqgzzxf_counter_xiang.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfXiang',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterXiang
		}
	}
</script>

<style>

</style>
