<template>
	<base-layout :detailId="112">
		<template v-slot:jsq>
			<zjzxf-counter-hei :title="title"></zjzxf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterHei from "./zjzxf-counter_hei.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfHei',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterHei
		}
	}
</script>

<style>
</style>
