<template>
	<base-layout :detailId="1688">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-xiang></fkdxyjjsf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterXiang from "./fkdxyjjsf_counter_xiang.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfXiang',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterXiang
		}
	}
</script>

<style>

</style>
