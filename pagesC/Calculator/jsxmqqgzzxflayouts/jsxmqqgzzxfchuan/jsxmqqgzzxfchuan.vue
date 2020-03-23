<template>
	<base-layout :detailId="290">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-chuan></jsxmqqgzzxf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterChuan from "./jsxmqqgzzxf_counter_chuan.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfChuan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterChuan,
		}
	}
</script>

<style>

</style>
