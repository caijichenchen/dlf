<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<tlkcf-counter-guo></tlkcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="铁路勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import tlkcfCounterGuo from "./tlkcf-counter_guo.vue"
	import {tlkcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/tlkcfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(tlkcfData)),
			}
		},
		components:{
			tlkcfCounterGuo
		}
	}
</script>

<style>
</style>
