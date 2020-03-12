<template>
	<view>
		<base-layout :detailId='1532'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<result title="广西省防雷设施检测费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import fljcCount from './fljc_count_gui'
	import {fljcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfGui', //api请求
					count: 2 //积分消耗
				},
				result: JSON.parse(JSON.stringify(fljcData))
			}
		},
		components: {
			fljcCount
		}
	}
</script>

<style>

</style>
