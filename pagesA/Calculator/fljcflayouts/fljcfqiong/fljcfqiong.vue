<template>
	<view>
		<base-layout :detailId='272'>
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
	import fljcCount from './fljc_count_qiong.vue'
	import fljcResult from '../fljc_result.vue'
	export default {
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfQiong', //api请求
					count: 4 //积分消耗
				},
				title:'海南'
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
