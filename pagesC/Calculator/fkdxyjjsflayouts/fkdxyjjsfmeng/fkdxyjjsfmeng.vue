<template>
	<base-layout :detailId="1648">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-meng></fkdxyjjsf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterMeng from "./fkdxyjjsf_counter_meng.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfMeng',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterMeng
		}
	}
</script>

<style>

</style>
