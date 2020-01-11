<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gcbxfgf-counter-guo></gcbxfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcbxfgf-result></gcbxfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcbxfgfCounterGuo from "./gcbxfgf_counter_guo.vue"
	import gcbxfgfResult from "./gcbxfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcbxfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcbxfgfCounterGuo,
			gcbxfgfResult
		}
	}
</script>

<style>

</style>
