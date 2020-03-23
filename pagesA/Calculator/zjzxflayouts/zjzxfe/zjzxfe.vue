<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<zjzxf-counter-e :title="title"></zjzxf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖北省造价咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="113" @tap="setDetailId">湖北省造价咨询服务收费标准|鄂价工服规[2011]23号</view>
			<view class="a-text" :data-id="122" @tap="setDetailId">湖北省造价咨询费标准|鄂价工服规[2012]149号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterE from "./zjzxf-counter_e.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfE',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
				id:113
			}
		},
		components:{
			zjzxfCounterE
		}
	}
</script>

<style>
</style>
