<template>
	<view>
		<base-layout :detailId='1552'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<result title="云南省防雷检测费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import fljcCount from './fljc_count_yun'
	import {resultMixin} from "@/common/base/resultMixin"
	import {fljcData} from '@/common/resultData.js'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfYun', //api请求
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
