<template>
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<sjfgui-counter-gui></sjfgui-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西工程勘察设计费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sjfguiCounterGui from "./sjfgui_counter_gui.vue"
	import {sjfGuiData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sjfGui',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sjfGuiData)
			}
		},
		components:{
			sjfguiCounterGui
		}
	}
</script>

<style>

</style>
