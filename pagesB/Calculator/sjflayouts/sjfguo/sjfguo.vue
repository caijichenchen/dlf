<template>
	<base-layout :detailId="10">
		<template v-slot:jsq>
			<sjfgui-counter-gui></sjfgui-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="设计费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sjfguiCounterGui from "./sjfgui_counter_gui.vue"
	import {sjfGuoData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sjfGuo',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(JSON.stringify(sjfGuoData))
			}
		},
		components:{
			sjfguiCounterGui
		}
	}
</script>

<style>

</style>
