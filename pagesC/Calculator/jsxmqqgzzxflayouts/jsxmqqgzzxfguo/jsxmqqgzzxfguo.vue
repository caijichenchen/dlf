<template>
	<base-layout :detailId="57">
		<template v-slot:jsq>
			<jsxmqqgzzxf-counter-guo></jsxmqqgzzxf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国建设项目前期工作咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmqqgzzxfCounterGuo from "./jsxmqqgzzxf_counter_guo.vue"
	import {jsxmqqgzzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url:this.$serverUrl + '/api/jsxmqqgzzxfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmqqgzzxfData)),
			}
		},
		components:{
			jsxmqqgzzxfCounterGuo
		}
	}
</script>

<style>

</style>
