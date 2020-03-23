<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<jlfguo-counter-guo></jlfguo-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="监理费" :result="result"></result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="38" @tap="setDetailId">监理费取费标准|发改价格[2007]670号</view>
			<view class="a-text" :data-id="138" @tap="setDetailId">关于进一步放开建设项目专业服务价格的通知|发改价格[2015]299号</view>
		</template>
	</base-layout>
</template>

<script>
	import jlfguoCounterGuo from "./jlfguo_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGuo',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Guo')),
				id:38
			}
		},
		components:{
			jlfguoCounterGuo
		}
	}
</script>

<style>

</style>
