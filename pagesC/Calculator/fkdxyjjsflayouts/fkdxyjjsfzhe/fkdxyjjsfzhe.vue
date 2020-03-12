<template>
	<base-layout :detailId="1043">
		<template v-slot:jsq>
			<fkdxyjjsf-counter-zhe></fkdxyjjsf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省防空地下室易地建设费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import fkdxyjjsfCounterZhe from "./fkdxyjjsf_counter_zhe.vue"
	import {fkdxyjjsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/fkdxyjjsfZhe',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(fkdxyjjsfData)),
			}
		},
		components:{
			fkdxyjjsfCounterZhe
		}
	}
</script>

<style>

</style>
