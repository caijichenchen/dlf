<template>
	<view>
		<base-layout :detailId='id'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<result title="广东省防雷检测费" :result="result"></result>
			</template>
			<template v-slot:qfbz>
				<view class="a-text" :data-id="1550" @tap="setDetailId">广东|防雷装置检测服务收费有关问题|粤发改价格函〔2017〕3936号</view>
				<view class="a-text" :data-id="1551" @tap="setDetailId">广东|防雷设施检测等服务收费项目和收费标准|粤价函〔2004〕409号</view>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import fljcCount from './fljc_count_yue'
	import {resultMixin} from "@/common/base/resultMixin"
	import {fljcData} from '@/common/resultData.js'
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfYue', //api请求
					count: 2 //积分消耗
				},
				id: 1550,
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
