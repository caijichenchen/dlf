<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<dzzhzlgc-counter-guo></dzzhzlgc-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国地质灾害治理工程监理费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="278" @tap="setDetailId">发改价格[2007]670号</view>
		</template>
	</base-layout>
</template>

<script>
	import dzzhzlgcCounterGuo from "./dzzhzlgc_counter_guo.vue"
	import {dzzhzlgcData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/dzzhzlgcGuo',  //api请求
					count:2  //积分消耗
				},
				id:278,
				result: JSON.parse(dzzhzlgcData)
			}
		},
		components:{
			dzzhzlgcCounterGuo
		}
	}
</script>

<style>

</style>
