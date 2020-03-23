<template>
	<view>
		<base-layout :detailId="1520">
			<template v-slot:jsq>
				<slsdqqgzkcf-counter-guo></slsdqqgzkcf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<result title="水利水电建设项目前期工作勘察费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import slsdqqgzkcfCounterGuo from "./slsdqqgzkcf-counter_guo.vue"
	import {slsdqqgckcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/slsdqqgzkcfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(slsdqqgckcData)),
			}
		},
		components:{
			slsdqqgzkcfCounterGuo
		}
	}
</script>

<style>
</style>
