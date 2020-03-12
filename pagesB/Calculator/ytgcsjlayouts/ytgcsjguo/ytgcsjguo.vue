<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcsj-counter-guo></ytgcsj-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="岩土工程设计收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcsjCounterGuo from "./ytgcsj-counter_guo.vue"
	import {ytgcsjData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcsjGuo',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(ytgcsjData)),
			}
		},
		components:{
			ytgcsjCounterGuo
		}
	}
</script>

<style>
</style>
