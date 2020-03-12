<template>
	<base-layout :detailId="306">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-qiong></jsxmqqgzzxf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterQiong from "./jsxmqqgzzxf_counter_qiong.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfQiong',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterQiong
		}
	}
</script>

<style>

</style>
