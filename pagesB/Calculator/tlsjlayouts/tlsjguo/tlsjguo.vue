<template>
	<base-layout :detailId="10">
		<template v-slot:jsq>
			<tlsj-counter></tlsj-counter>
			<computing v-bind:countData = "countData"></computing>
			<result title="铁路设计费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import tlsjCounter from './tlsj-counter.vue'
	import {tlsjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/tlsjGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(tlsjfData)),
			}
		},
		components:{
			tlsjCounter
		}
	}
</script>

<style>
</style>
