<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<jsqlx-counter-guo></jsqlx-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="全国建设期利息" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jsqlxCounterGuo from "./jsqlx_counter_guo.vue"
	import {jsqlxData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsqlxGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsqlxData)),
			}
		},
		components:{
			jsqlxCounterGuo
		}
	}
</script>

<style>

</style>
