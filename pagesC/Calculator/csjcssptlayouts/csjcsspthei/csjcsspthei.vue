<template>
	<base-layout :detailId="1694">
		<template v-slot:jsq>
			<csjcsspt-counter-hei></csjcsspt-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省城市基础设施配套费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterHei from "./csjcsspt_counter_hei.vue"
	import {csjcssptData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptHei',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csjcssptData)),
			}
		},
		components:{
			csjcssptCounterHei
		}
	}
</script>

<style>

</style>
