<template>
	<base-layout :detailId="1485">
		<template v-slot:jsq>
			<zjzxf-counter-hu :title="title"></zjzxf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterHu from "./zjzxf-counter_hu.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfHu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterHu
		}
	}
</script>

<style>
</style>
