<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<xmzxfwfgf-counter-guo></xmzxfwfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="项目咨询服务费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xmzxfwfgfCounterGuo from "./xmzxfwfgf_counter_guo.vue"
	import {xmzxfwfgfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmzxfwfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xmzxfwfgfData))
			}
		},
		components:{
			xmzxfwfgfCounterGuo
		}
	}
</script>

<style>

</style>
