<template>
	<base-layout :detailId="1598">
		<template v-slot:jsq>
			<csjcsspt-counter-ji></csjcsspt-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省城市基础设施配套费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterJi from "./csjcsspt_counter_ji.vue"
	import {csjcssptData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptJi',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csjcssptData)),
			}
		},
		components:{
			csjcssptCounterJi
		}
	}
</script>

<style>

</style>
