<template>
	<base-layout :detailId='1923'>
		<template v-slot:jsq>
			<xmjsjjpsfgf-counter-guo></xmjsjjpsfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<!-- <result title="项目技术经济评审费(光伏发电工程)" :result="result"></result> -->
			<result title="项目技术经济评审费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xmjsjjpsfgfCounterGuo from "./xmjsjjpsfgf_counter_guo.vue"
	import {xmjsjjpsfgfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xmjsjjpsfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xmjsjjpsfgfData))
			}
		},
		components:{
			xmjsjjpsfgfCounterGuo
		}
	}
</script>

<style>

</style>
