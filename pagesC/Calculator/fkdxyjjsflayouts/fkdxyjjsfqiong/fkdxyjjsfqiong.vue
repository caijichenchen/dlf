<template>
	<base-layout :detailId="274">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-qiong></fkdxyjjsf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterQiong from "./fkdxyjjsf_counter_qiong.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfQiong',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterQiong
		}
	}
</script>

<style>

</style>
