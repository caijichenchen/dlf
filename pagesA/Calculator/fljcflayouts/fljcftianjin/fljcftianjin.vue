<template>
	<view>
		<base-layout :detailId='1536'>
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
	import fljcCount from './fljc_count_tianjin'
	import fljcResult from '../fljc_result'
	export default {
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfTianjin', //api请求
					count: 2 //积分消耗
				},
				title:'天津'
			}
		},
		methods: {

		},
		components: {
			fljcCount,
			fljcResult,
		}
	}
</script>

<style>

</style>
