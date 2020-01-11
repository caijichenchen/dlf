<template>
	<base-layout :detailId="966">
		<template v-slot:jsq>
			<xcjchclsy-counter-ji></xcjchclsy-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<xcjchclsy-result></xcjchclsy-result>
		</template>
	</base-layout>
</template>

<script>
	import xcjchclsyCounterJi from "./xcjchclsy_counter_ji.vue"
	import xcjchclsyResult from "./xcjchclsy_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyJi',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xcjchclsyCounterJi,
			xcjchclsyResult
		}
	}
</script>

<style>

</style>
