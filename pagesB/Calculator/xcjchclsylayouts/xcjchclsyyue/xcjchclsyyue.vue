<template>
	<base-layout :detailId="1039">
		<template v-slot:jsq>
			<xcjchclsy-counter-yue></xcjchclsy-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<xcjchclsy-result></xcjchclsy-result>
		</template>
	</base-layout>
</template>

<script>
	import xcjchclsyCounterYue from "./xcjchclsy_counter_yue.vue"
	import xcjchclsyResult from "./xcjchclsy_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyYue',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xcjchclsyCounterYue,
			xcjchclsyResult
		}
	}
</script>

<style>

</style>
