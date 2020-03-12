<template>
	<base-layout :detailId="117">
		<template v-slot:jsq>
			<zjzxf-counter-chuan :title="title"></zjzxf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterChuan from "./zjzxf-counter_chuan.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfChuan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterChuan
		}
	}
</script>

<style>
</style>
