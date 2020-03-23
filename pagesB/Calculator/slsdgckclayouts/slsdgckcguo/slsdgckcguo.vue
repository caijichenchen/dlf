<template>
	<view>
		<base-layout :detailId="102">
			<template v-slot:jsq>
				<slsdgckc-counter-guo></slsdgckc-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<result title="水利水电工程勘察收费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import slsdgckcCounterGuo from "./slsdgckc-counter_guo.vue"
	import {slsdgckcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/slsdgckcGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(slsdgckcData)),
			}
		},
		components:{
			slsdgckcCounterGuo
		}
	}
</script>

<style>
</style>
