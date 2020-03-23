<template>
	<view>
		<base-layout>
			<template v-slot:jsq>
				<chf-counter-guo></chf-counter-guo>
				<computing v-bind:countData = "countData"></computing>
				<result title="测绘费" :result="result"></result>
			</template>
		</base-layout>
	</view>
</template>

<script>
	import chfCounterGuo from "./chf-counter_guo.vue"
	import {chfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/chfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(chfData)),
			}
		},
		components:{
			chfCounterGuo
		}
	}
</script>

<style>
</style>
