<template>
	<base-layout :detailId="1578">
		<template v-slot:jsq>
			<djglf-counter-hu></djglf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市代建管理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import djglfCounterHu from "./djglf_counter_hu.vue"
	import {djglfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/djglfHu',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(djglfData)),
			}
		},
		components:{
			djglfCounterHu
		}
	}
</script>

<style>

</style>
