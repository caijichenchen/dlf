<template>
	<view>
		<base-layout :detailId='1534'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<fljc-result :title="title"></fljc-result>
			</template>
			<template v-slot:qfbz>
			</template>
		</base-layout>
	
	</view>
</template>

<script>
	import computing from "@/common/base/computing.vue"
	import baseLayout from '@/common/base/baseLayout.vue'
	import fljcCount from './fljc_count_jilin'
	import fljcResult from '../fljc_result'
	export default {
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfJilin', //api请求
					count: 2 //积分消耗
				},
				title:'吉林'
			}
		},
		methods: {

		},
		components: {
			baseLayout,
			fljcCount,
			fljcResult,
			computing
		}
	}
</script>

<style>

</style>
