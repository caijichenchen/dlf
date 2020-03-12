<template>
	<base-layout :detailId="1665">
		<template v-slot:jsq>
			<stbcbcf-counter-su></stbcbcf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterSu from "./stbcbcf_counter_su.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfSu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterSu
		}
	}
</script>

<style>

</style>
