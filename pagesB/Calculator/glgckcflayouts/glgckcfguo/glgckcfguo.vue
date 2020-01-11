<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<glgckcf-counter-guo></glgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<glgckcf-result></glgckcf-result>
		</template>
	</base-layout>
</template>

<script>
	import glgckcfCounterGuo from "./glgckcf-counter_guo.vue"
	import glgckcfResult from "./glgckcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/glgckcfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			glgckcfCounterGuo,
			glgckcfResult
		}
	}
</script>

<style>
</style>
