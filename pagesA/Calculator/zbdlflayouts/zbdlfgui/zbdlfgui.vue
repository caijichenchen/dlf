<template>
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<zbdlf-counter-gui></zbdlf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西省招标代理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import zbdlfCounterGui from "./zbdlf_counter_gui.vue"
	import {zbdlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zbdlfGui',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(zbdlfData))
			}
		},
		components:{
			zbdlfCounterGui
		}
	}
</script>

<style>

</style>
