<template>
	<base-layout :detailId="1686">
		<template v-slot:jsq>
			<jsxmbjf-counter-zhuzhou></jsxmbjf-counter-zhuzhou>
			<computing v-bind:countData = "countData"></computing>
			<result title="株洲市建设项目报建费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmbjfCounterZhuzhou from "./jsxmbjf_counter_zhuzhou.vue"
	import {jsxmbjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsxmbjfZhuzhou',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmbjfData)),
			}
		},
		components:{
			jsxmbjfCounterZhuzhou
		}
	}
</script>

<style>

</style>
