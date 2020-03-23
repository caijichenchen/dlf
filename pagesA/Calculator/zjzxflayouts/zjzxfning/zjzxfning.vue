<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-ning :title="title"></zjzxf-counter-ning>
			<computing v-bind:countData = "countData"></computing>
			<result title="宁夏省造价咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="1490" @tap="setDetailId">宁夏|建设工程造价咨询服务收费有关问题|宁价费发[2003]第204号</view>
			<view class="a-text" :data-id="1554" @tap="setDetailId">宁夏|建设工程造价咨询服务收费标准|宁价费发〔2010〕87号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterNing from "./zjzxf-counter_ning.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfNing',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
				id:1490
			}
		},
		components:{
			zjzxfCounterNing
		}
	}
</script>

<style>
</style>
