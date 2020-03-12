<template>
	<view>
		<base-layout :detailId='1546'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<result title="安徽省防雷检测费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import fljcCount from './fljc_count_wan'
	import {resultMixin} from "@/common/base/resultMixin"
	import {fljcData} from '@/common/resultData.js'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfWan', //api请求
					count: 2 //积分消耗
				},
				result:JSON.parse(JSON.stringify(fljcData))
			}
		},
		components: {
			fljcCount
		}
	}
</script>

<style>

</style>
