<template>
	<base-layout :detailId="1647">
		<template v-slot:jsq>
			<stbcbcf-counter-meng></stbcbcf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterMeng from "./stbcbcf_counter_meng.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfMeng',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterMeng
		}
	}
</script>

<style>

</style>
