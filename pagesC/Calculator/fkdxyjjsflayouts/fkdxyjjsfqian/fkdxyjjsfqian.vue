<template>
	<base-layout :detailId="956">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-qian></fkdxyjjsf-counter-qian>
			<computing v-bind:countData = "countData"></computing>
			<result title="贵州省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterQian from "./fkdxyjjsf_counter_qian.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfQian',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterQian
		}
	}
</script>

<style>

</style>
