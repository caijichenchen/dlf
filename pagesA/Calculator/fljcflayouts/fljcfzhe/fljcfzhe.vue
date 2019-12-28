<template>
	<view>
		<base-layout :detailId='id'>
			<template v-slot:jsq>
				<fljc-count></fljc-count>
				<computing v-bind:countData="countData"></computing>
				<fljc-result :title="title"></fljc-result>
			</template>
			<template v-slot:qfbz>
				<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
				<view class="a-text" :data-id="1699" @tap="setDetailId">浙江|专业气象服务收费| 浙价服〔2008〕267号</view>
			</template>
		</base-layout>
	
	</view>
</template>

<script>
	import computing from "@/common/base/computing.vue"
	import baseLayout from '@/common/base/baseLayout.vue'
	import fljcCount from './fljc_count_zhe'
	import fljcResult from '../fljc_result'
	export default {
		data() {
			return {
				countData: {
					url: this.$serverUrl + '/api/xcx/fljcfZhe', //api请求
					count: 2 //积分消耗
				},
				title:'浙江',
				id:1685
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
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
