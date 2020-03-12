<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<csgh-counter-yue></csgh-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="城市规划设计收费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="103" @tap="setDetailId">城市规划计算标准,中国城市规划协会文件 关于发布城市规划设计计费指导意见的通知</view>
			<view class="a-text" :data-id="268" @tap="setDetailId">城市规划设计计费指导意见|(2004)中规协秘字第022号</view>
		</template>
	</base-layout>
</template>

<script>
	import csghCounterYue from "./csgh-counter_yue.vue"
	import {csghData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/csghYue',  //api请求
					count:4  //积分消耗
				},
				id:103,
				result:JSON.parse(JSON.stringify(csghData)),
			}
		},
		components:{
			csghCounterYue
		}
	}
</script>

<style>
</style>
