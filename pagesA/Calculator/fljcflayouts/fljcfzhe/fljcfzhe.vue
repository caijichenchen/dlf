<template>
	<view>
		<base-layout :detailId='id'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<result title="浙江省防雷检测费" :result="result"></result>
			</template>
			<template v-slot:qfbz>
				<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
				<view class="a-text" :data-id="1699" @tap="setDetailId">浙江|专业气象服务收费| 浙价服〔2008〕267号</view>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import fljcCount from './fljc_count_zhe'
	import {resultMixin} from "@/common/base/resultMixin"
	import {fljcData} from '@/common/resultData.js'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfZhe', //api请求
					count: 2 //积分消耗
				},
				id:1685,
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
