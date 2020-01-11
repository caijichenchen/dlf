<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<jsqlx-counter-guo></jsqlx-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<jsqlx-result></jsqlx-result>
		</template>
	</base-layout>
</template>

<script>
	import jsqlxCounterGuo from "./jsqlx_counter_guo.vue"
	import jsqlxResult from "./jsqlx_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsqlxGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jsqlxCounterGuo,
			jsqlxResult
		}
	}
</script>

<style>

</style>
