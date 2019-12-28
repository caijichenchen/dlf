<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<sjfgui-counter-gui></sjfgui-counter-gui>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<sjfgui-result></sjfgui-result>
		</template>
		
		<!-- <template v-slot:qfbz>
			<h1>设计费取费标准</h1>
		</template> -->
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import sjfguiCounterGui from "./sjfgui_counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import sjfguiResult from "./sjfgui_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sjfGui',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sjfguiCounterGui,
			baseLayout,
			computing,
			sjfguiResult
		}
	}
</script>

<style>

</style>
