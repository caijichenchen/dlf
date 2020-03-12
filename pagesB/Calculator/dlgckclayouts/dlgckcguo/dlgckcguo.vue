<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<dlgckcf-counter-guo></dlgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="电力工程勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dlgckcfCounterGuo from "./dlgckcf_counter_guo.vue"
	import {dlgckcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/dlgckcGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dlgckcData)),
			}
		},
		components:{
			dlgckcfCounterGuo
		}
	}
</script>

<style>

</style>
