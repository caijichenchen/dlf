<template>
	<base-layout :detailId="1706">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-long></fkdxyjjsf-counter-long>
			<computing v-bind:countData = "countData"></computing>
			<result title="甘肃省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterLong from "./fkdxyjjsf_counter_long.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfLong',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterLong
		}
	}
</script>

<style>

</style>
