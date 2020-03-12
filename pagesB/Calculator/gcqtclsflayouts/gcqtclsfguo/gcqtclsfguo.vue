<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcqtclsf-counter-guo></gcqtclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="工程其他测量收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcqtclsfCounterGuo from "./gcqtclsf-counter_guo.vue"
	import {gcqtclsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcqtclsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcqtclsfData)),
			}
		},
		components:{
			gcqtclsfCounterGuo
		}
	}
</script>

<style>
</style>
