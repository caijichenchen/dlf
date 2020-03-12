<template>
	<base-layout :detailId="1587">
		<template v-slot:jsq>
			<stbcbcf-counter-wan></stbcbcf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterWan from "./stbcbcf_counter_wan.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfWan',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterWan
		}
	}
</script>

<style>

</style>
