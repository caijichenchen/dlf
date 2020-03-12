<template>
	<base-layout :detailId="1493">
		<template v-slot:jsq>
			<zjzxf-counter-xin :title="title"></zjzxf-counter-xin>
			<computing v-bind:countData = "countData"></computing>
			<result title="新疆造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterXin from "./zjzxf-counter_xin.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfXin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterXin
		}
	}
</script>

<style>
</style>
