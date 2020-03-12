<template>
	<base-layout :detailId="251">
		<template v-slot:jsq>
			<jzmqmcjcf-counter-qiong></jzmqmcjcf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="建筑幕墙和门窗检测费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jzmqmcjcfCounterQiong from "./jzmqmcjcf-counter_qiong.vue"
	import {jzmqmcjcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jzmqmcjcfQiong',  //api请求
					count:3  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jzmqmcjcfData)),
			}
		},
		components:{
			jzmqmcjcfCounterQiong
		}
	}
</script>

<style>
</style>
