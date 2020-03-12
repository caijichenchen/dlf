<template>
	<base-layout :detailId='120'>
		<template v-slot:jsq>
			<zjzxf-counter-zhe :title="title"></zjzxf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterZhe from "./zjzxf-counter_zhe.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfZhe',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData)),
			}
		},
		components:{
			zjzxfCounterZhe
		}
	}
</script>

<style>
</style>
