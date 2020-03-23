<template>
	<base-layout :detailId="110">
		<template v-slot:jsq>
			<zjzxf-counter-guo></zjzxf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterGuo from "./zjzxf-counter_guo.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterGuo
		}
	}
</script>

<style>
</style>
