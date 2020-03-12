<template>
	<base-layout :detailId="1676">
		<template v-slot:jsq>
			<stbcbcf-counter-lu></stbcbcf-counter-lu>
			<computing v-bind:countData = "countData"></computing>
			<result title="山东省水土保持补偿费" ></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterLu from "./stbcbcf_counter_lu.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfLu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterLu
		}
	}
</script>

<style>

</style>
