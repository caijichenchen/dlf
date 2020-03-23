<template>
	<base-layout :detailId="1922">
		<template v-slot:jsq>
			<tlkcsjsf-counter-guo></tlkcsjsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="铁建设函[2002]86号" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import tlkcsjsfCounterGuo from "./tlkcsjsf-counter_guo.vue"
	import {tlkcsjsfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+ '/api/tlkcsjsfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(tlkcsjsfGuoData)),
			}
		},
		components:{
			tlkcsjsfCounterGuo
		}
	}
</script>

<style>
</style>
