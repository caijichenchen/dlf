<template>
	<base-layout :detailId="1615">
		<template v-slot:jsq>
			<stbcbcf-counter-ji></stbcbcf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterJi from "./stbcbcf_counter_ji.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfJi',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterJi
		}
	}
</script>

<style>

</style>
