<template>
	<view>
		<base-layout :detailId="102">
			<template v-slot:jsq>
				<csgdgckcf-counter-guo></csgdgckcf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<result title="长输管道工程勘察收费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import csgdgckcfCounterGuo from "./csgdgckcf-counter_guo.vue"
	import {csgdgckcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csgdgckcfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csgdgckcfData)),
			}
		},
		components:{
			csgdgckcfCounterGuo
		}
	}
</script>

<style>
</style>
