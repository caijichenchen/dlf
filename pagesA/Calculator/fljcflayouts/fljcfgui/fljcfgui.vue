<template>
	<view>
		<base-layout :detailId='1532'>
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
	import fljcCount from './fljc_count_gui'
	import fljcResult from '../fljc_result'
	export default {
		data() {
			return {
				countData: {
					// url: 'http://dlf.test/api/fljcfQiong', //api请求
					url: this.$serverUrl + '/api/xcx/fljcfGui', //api请求
					count: 2 //积分消耗
				},
				title:'广西'
			}
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
