<template>
	<base-layout :detailId="1893">
		<template v-slot:jsq>
			<zsxzsjfyl-counter-guo></zsxzsjfyl-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<zsxzsjfyl-result></zsxzsjfyl-result>
		</template>
	</base-layout>
</template>

<script>
	import zsxzsjfylCounterGuo from "./zsxzsjfyl_counter_guo.vue"
	import zsxzsjfylResult from "./zsxzsjfyl_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/zsxzsjfylGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			zsxzsjfylCounterGuo,
			zsxzsjfylResult
		}
	}
</script>

<style>

</style>
