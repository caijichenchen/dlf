<template>
	<base-layout :detailId="1528">
		<template v-slot:jsq>
			<zjzxf-counter-changge :title="title"></zjzxf-counter-changge>
			<computing v-bind:countData = "countData"></computing>
			<result title="长葛市造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterChangge from "./zjzxf-counter_changge.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfChangge',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterChangge
		}
	}
</script>

<style>
</style>
