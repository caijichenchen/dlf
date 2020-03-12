<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zcpgsf-counter-zhe></zcpgsf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江资产评估收费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="1657" @tap="setDetailId">浙江|资产评估收费标准|浙价服〔2011〕90号|浙价服〔2013〕234号</view>
			<view class="a-text" :data-id="1658" @tap="setDetailId">浙江|降低部分涉企服务收费标准|浙价服〔2012〕194号</view>
		</template>
	</base-layout>
</template>

<script>
	import zcpgsfCounterZhe from "./zcpgsf_counter_zhe.vue"
	import {zcpgsfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zcpgsfZhe',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zcpgsfData)),
				id:1657
			}
		},
		components:{
			zcpgsfCounterZhe
		}
	}
</script>

<style>

</style>
