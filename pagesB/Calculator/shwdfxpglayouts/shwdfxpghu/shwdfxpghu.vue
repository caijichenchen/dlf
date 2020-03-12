<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<shwdfxpg-counter-hu></shwdfxpg-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市社会稳定风险评估报告收费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="221" @tap="setDetailId">上海市重点建设项目社会稳定风险评估咨询服务收费暂行标准|沪发改投〔2012〕130号</view>
			<view class="a-text" :data-id="284" @tap="setDetailId">重大固定资产投资项目社会稳定风险评估暂行办法|发改投资[2012]2492号</view>
		</template>
	</base-layout>
</template>

<script>
	import shwdfxpgCounterHu from "./shwdfxpg_counter_hu.vue"
	import {shwdfxpgData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/shwdfxpgHu',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(shwdfxpgData)),
				id:221
			}
		},
		components:{
			shwdfxpgCounterHu
		}
	}
</script>

<style>

</style>
