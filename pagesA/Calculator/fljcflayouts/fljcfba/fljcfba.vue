<template>
	<view>
		<base-layout :detailId='1548'>
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
	import fljcCount from './fljc_count_ba'
	import fljcResult from '../fljc_result'
	export default {
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfBa', //api请求
					count: 2 //积分消耗
				},
				title:'重庆'
			}
		},
		components: {
			fljcCount,
			fljcResult,
		}
	}
</script>

<style>

</style>
