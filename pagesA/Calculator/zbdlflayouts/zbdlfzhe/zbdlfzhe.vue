<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zbdlf-counter-zhe></zbdlf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省招标代理费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="34" @tap="setDetailId">招标代理费标准|国家计委计价格[2002]1980号</view>
			<view class="a-text" :data-id="153" @tap="setDetailId">降低部分建设项目收费标准|发改价格[2011]534号</view>
			<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterZhe from "./zbdlf_counter_zhe.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfZhe',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData)),
				id:34
			}
		},
		components:{
			zbdlfCounterZhe
		}
	}
</script>

<style>

</style>
