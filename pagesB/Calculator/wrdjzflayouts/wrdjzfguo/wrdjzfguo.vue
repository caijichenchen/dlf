<template>
	<base-layout :detailId="1916">
		<template v-slot:jsq>
			<wrdjzf-counter-guo></wrdjzf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="无居民海岛使用金征收标准" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import wrdjzfCounterGuo from "./wrdjzf-counter_guo.vue"
	import {wrdjzfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/wrdjzfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(wrdjzfGuoData)),
			}
		},
		components:{
			wrdjzfCounterGuo
		}
	}
</script>

<style>
</style>
