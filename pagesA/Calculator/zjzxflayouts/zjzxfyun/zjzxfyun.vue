<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-yun :title="title"></zjzxf-counter-yun>
			<computing v-bind:countData = "countData"></computing>
			<result title="云南省造价咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="119" @tap="setDetailId">云南省建设工程造价咨询服务收费-云价综合〔2012〕66号|云建标〔2012〕509号文件</view>
			<view class="a-text" :data-id="118" @tap="setDetailId">云南省会计师事务所审计服务收费标准|云会协〔 2012〕9号|云价收费〔2012〕4号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterYun from "./zjzxf-counter_yun.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfYun',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
				id:119
			}
		},
		components:{
			zjzxfCounterYun
		}
	}
</script>

<style>
</style>
