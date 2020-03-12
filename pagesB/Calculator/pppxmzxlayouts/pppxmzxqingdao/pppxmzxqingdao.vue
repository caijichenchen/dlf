<template>
	<base-layout :detailId="1678">
		<template v-slot:jsq>
			<pppxmzx-counter-qingdao></pppxmzx-counter-qingdao>
			<computing v-bind:countData = "countData"></computing>
			<result title="青岛PPP项目咨询服务收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import pppxmzxCounterQingdao from "./pppxmzx_counter_qingdao.vue"
	import {pppxmzxData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pppxmzxQingdao',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(pppxmzxData)),
			}
		},
		components:{
			pppxmzxCounterQingdao
		}
	}
</script>

<style>

</style>
