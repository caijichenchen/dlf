<template>
	<base-layout :detailId="1618">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-ji></jsxmqqgzzxf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterJi from "./jsxmqqgzzxf_counter_ji.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfJi',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterJi
		}
	}
</script>

<style>

</style>
