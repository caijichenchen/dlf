<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-jin :title="title"></zjzxf-counter-jin>
			<computing v-bind:countData = "countData"></computing>
			<result title="山西省造价咨询费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="133" @tap="setDetailId">山西省造价咨询服务收费标准|晋建价协字[2014]8号</view>
			<view class="a-text" :data-id="1486" @tap="setDetailId">山西|工程造价咨询服务收费标准及有关事项|晋价服字〔2012〕248号</view>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterJin from "./zjzxf-counter_jin.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfJin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
				id:133
			}
		},
		components:{
			zjzxfCounterJin
		}
	}
</script>

<style>
</style>
