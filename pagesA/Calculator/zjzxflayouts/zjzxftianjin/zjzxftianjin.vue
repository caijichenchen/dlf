<template>
	<base-layout :detailId='318'>
		<template v-slot:jsq>
			<zjzxf-counter-tianjin :title="title"></zjzxf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<result title="天津市造价咨询费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterTianjin from "./zjzxf-counter_tianjin.vue"
	import {zjzxfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfTianjin',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zjzxfData))
			}
		},
		components:{
			zjzxfCounterTianjin
		}
	}
</script>

<style>
</style>
