<template>
	<base-layout :detailId="1616">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-ji></fkdxyjjsf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterJi from "./fkdxyjjsf_counter_ji.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfJi',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterJi
		}
	}
</script>

<style>

</style>
