<template>
	<base-layout :detailId="1696">
		<template v-slot:jsq>
			<stbcbcf-counter-hei></stbcbcf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterHei from "./stbcbcf_counter_hei.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfHei',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterHei
		}
	}
</script>

<style>

</style>
