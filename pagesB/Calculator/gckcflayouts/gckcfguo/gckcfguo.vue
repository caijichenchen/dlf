<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<gckcfguo-counter-guo></gckcfguo-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gckcfguo-result></gckcfguo-result>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gckcfguoCounterGuo from "./gckcfguo-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gckcfguoResult from "./gckcfguo_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gckcfGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gckcfguoCounterGuo,
			baseLayout,
			computing,
			gckcfguoResult
		}
	}
</script>

<style>
</style>
