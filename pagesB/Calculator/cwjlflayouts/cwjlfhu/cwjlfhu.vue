<template>
	<base-layout :detailId="1578">
		<template v-slot:jsq>
			<csjlf-counter-hu></csjlf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市财务监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import csjlfCounterHu from "./csjlf-counter-hu.vue"
	import {cwjlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/cwjlfHu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(cwjlfData)),
			}
		},
		components:{
			csjlfCounterHu
		}
	}
</script>

<style>

</style>
