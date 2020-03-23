<template>
	<base-layout :detailId="156"> 
		<template v-slot:jsq>
			<pppxmzx-counter-chuan></pppxmzx-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省PPP项目咨询服务收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterChuan from "./pppxmzx_counter_chuan.vue"
	import {pppxmzxData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxChuan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(pppxmzxData)),
			}
		},
		components:{
			pppxmzxCounterChuan
		}
	}
</script>

<style>

</style>
