<template>
	<base-layout :detailId="250">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-jin></jsxmqqgzzxf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="天津市建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterJin from "./jsxmqqgzzxf_counter_jin.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfTianjin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterJin
		}
	}
</script>

<style>

</style>
