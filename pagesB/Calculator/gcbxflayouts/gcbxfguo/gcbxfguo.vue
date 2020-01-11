<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<gcbxf-counter-guo></gcbxf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcbxf-result></gcbxf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcbxfCounterGuo from "./gcbxf_counter_guo.vue"
	import gcbxfResult from "./gcbxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/gcbxfGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcbxfCounterGuo,
			gcbxfResult
		}
	}
</script>

<style>

</style>
