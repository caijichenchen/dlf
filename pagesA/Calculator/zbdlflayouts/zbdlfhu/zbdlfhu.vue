<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zbdlf-counter-hu></zbdlf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市招标代理费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="34" @tap="setDetailId">招标代理费标准|国家计委计价格[2002]1980号</view>
			<view class="a-text" :data-id="153" @tap="setDetailId">降低部分建设项目收费标准|发改价格[2011]534号</view>
			<view class="a-text" :data-id="1485" @tap="setDetailId">上海|建设工程造价服务和工程招标代理服务收费|沪建计联[2005]834号|沪价费[2005]056号</view>
			<view class="a-text" :data-id="1652" @tap="setDetailId">上海|降低部分建设项目收费标准| 沪价费〔2011〕007号</view>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterHu from "./zbdlf_counter_hu.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfHu',  //api请求
					count:2  //积分消耗
				},
				id:34,
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterHu
		}
	}
</script>

<style>

</style>
