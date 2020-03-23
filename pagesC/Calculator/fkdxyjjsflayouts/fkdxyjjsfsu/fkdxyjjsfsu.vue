<template>
	<base-layout :detailId="1699">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-su></fkdxyjjsf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterSu from "./fkdxyjjsf_counter_su.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfSu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterSu
		}
	}
</script>

<style>

</style>
