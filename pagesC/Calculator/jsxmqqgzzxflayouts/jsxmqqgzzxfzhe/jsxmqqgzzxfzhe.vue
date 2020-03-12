<template>
	<base-layout :detailId="267">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-zhe></jsxmqqgzzxf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterZhe from "./jsxmqqgzzxf_counter_zhe.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfZhe',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterZhe
		}
	}
</script>

<style>

</style>
