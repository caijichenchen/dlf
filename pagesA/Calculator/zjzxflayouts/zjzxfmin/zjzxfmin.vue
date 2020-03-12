<template>
	<base-layout :detailId='1420'>
		<template v-slot:jsq>
			<zjzxf-counter-min :title="title"></zjzxf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<result title="福建省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterMin from "./zjzxf-counter_min.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfMin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterMin
		}
	}
</script>

<style>
</style>
