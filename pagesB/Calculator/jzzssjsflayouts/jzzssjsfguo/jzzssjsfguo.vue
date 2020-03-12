<template>
	<base-layout :detailId="1781">
		<template v-slot:jsq>
			<jzzssjsf-counter-guo></jzzssjsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国建筑装饰设计收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jzzssjsfCounterGuo from "./jzzssjsf-counter_guo.vue"
	import {sjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jzzssjsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(sjfData)),
			}
		},
		components:{
			jzzssjsfCounterGuo
		}
	}
</script>

<style>
</style>
