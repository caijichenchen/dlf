<template>
	<base-layout :detailId="1925">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-yun></jsxmqqgzzxf-counter-yun>
			<computing v-bind:countData = "countData"></computing>
			<result title="云南省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterYun from "./jsxmqqgzzxf_counter_yun.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfYun',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterYun
		}
	}
</script>

<style>

</style>
