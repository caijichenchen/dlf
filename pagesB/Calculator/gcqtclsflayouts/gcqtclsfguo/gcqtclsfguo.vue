<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<gcqtclsf-counter-guo></gcqtclsf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcqtclsf-result></gcqtclsf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcqtclsfCounterGuo from "./gcqtclsf-counter_guo.vue"
	import gcqtclsfResult from "./gcqtclsf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcqtclsfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcqtclsfCounterGuo,
			gcqtclsfResult
		}
	}
</script>

<style>
</style>
