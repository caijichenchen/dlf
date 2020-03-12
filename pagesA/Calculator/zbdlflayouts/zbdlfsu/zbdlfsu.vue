<template>
	<base-layout>
		<template v-slot:jsq>
			<zbdlf-counter-su></zbdlf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterSu from "./zbdlf_counter_su.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfSu',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterSu
		}
	}
</script>

<style>

</style>
