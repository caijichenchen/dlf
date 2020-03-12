<template>
	<base-layout :detailId='1494'>
		<template v-slot:jsq>
			<zjzxf-counter-zhongjiaxie :title="title"></zjzxf-counter-zhongjiaxie>
			<computing v-bind:countData = "countData"></computing>
			<result title="中价协造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterZhongjiaxie from "./zjzxf-counter_zhongjiaxie.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfZhongjiaxie',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterZhongjiaxie
		}
	}
</script>

<style>
</style>
