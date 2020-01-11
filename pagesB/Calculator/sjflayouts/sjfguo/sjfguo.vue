<template>
	<base-layout :detailId="10">
		<template v-slot:jsq>
			<sjfgui-counter-gui></sjfgui-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<sjfgui-result></sjfgui-result>
		</template>
	</base-layout>
</template>

<script>
	import sjfguiCounterGui from "./sjfgui_counter_gui.vue"
	import sjfguiResult from "./sjfgui_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sjfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sjfguiCounterGui,
			sjfguiResult
		}
	}
</script>

<style>

</style>
