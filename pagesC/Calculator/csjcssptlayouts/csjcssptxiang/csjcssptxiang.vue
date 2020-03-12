<template>
	<base-layout :detailId="1780">
		<template v-slot:jsq>
			<csjcsspt-counter-xiang></csjcsspt-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省城市基础设施配套费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterXiang from "./csjcsspt_counter_xiang.vue"
	import {csjcssptData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptXiang',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csjcssptData)),
			}
		},
		components:{
			csjcssptCounterXiang
		}
	}
</script>

<style>

</style>
