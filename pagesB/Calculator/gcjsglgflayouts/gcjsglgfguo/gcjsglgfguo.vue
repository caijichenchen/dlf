<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gcjsglgf-counter-guo></gcjsglgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcjsglgf-result></gcjsglgf-result>
		</template>
	</base-layout>
</template>

<script>
	import gcjsglgfCounterGuo from "./gcjsglgf_counter_guo.vue"
	import gcjsglgfResult from "./gcjsglgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcjsglgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcjsglgfCounterGuo,
			gcjsglgfResult
		}
	}
</script>

<style>

</style>
