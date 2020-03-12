<template>
	<base-layout :detailId="1693">
		<template v-slot:jsq>
			<stbcbcf-counter-e></stbcbcf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖北省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterE from "./stbcbcf_counter_e.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfE',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterE
		}
	}
</script>

<style>

</style>
