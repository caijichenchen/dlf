<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zbdlf-counter-guo></zbdlf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国招标代理费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="34" @tap="setDetailId">招标代理费标准|国家计委计价格[2002]1980号</view>
			<view class="a-text" :data-id="153" @tap="setDetailId">降低部分建设项目收费标准|发改价格[2011]534号</view>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterGuo from "./zbdlf_counter_guo.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfGuo',  //api请求
					count:2  //积分消耗
				},
				id:34,
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterGuo
		}
	}
</script>

<style>

</style>
