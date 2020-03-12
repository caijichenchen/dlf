<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-qiong :title="title"></zjzxf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省造价咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="123" @tap="setDetailId">海南造价咨询收费标准|琼价协[2016]004号</view>
			<view class="a-text" :data-id="1421" @tap="setDetailId">海南|工程造价咨询服务收费|琼价协[2015]003号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterQiong from "./zjzxf-counter_qiong.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfQiong',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
				id:123
			}
		},
		components:{
			zjzxfCounterQiong
		}
	}
</script>

<style>
</style>
