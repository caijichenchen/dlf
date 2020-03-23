<template>
	<base-layout :detailId="132">
		<template v-slot:jsq>
			<pppxmzx-counter-yue></pppxmzx-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="广东省PPP项目咨询服务收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterYue from "./pppxmzx_counter_yue.vue"
	import {pppxmzxData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxYue',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(pppxmzxData)),
			}
		},
		components:{
			pppxmzxCounterYue
		}
	}
</script>

<style>

</style>
