<template>
	<base-layout :detailId="1686">
		<template v-slot:jsq>
			<jsxmbjf-counter-zhuzhou></jsxmbjf-counter-zhuzhou>
			<computing v-bind:countData = "countData"></computing>
			<jsxmbjf-result></jsxmbjf-result>
		</template>
	</base-layout>
</template>

<script>
	import jsxmbjfCounterZhuzhou from "./jsxmbjf_counter_zhuzhou.vue"
	import jsxmbjfResult from "./jsxmbjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsxmbjfZhuzhou',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			jsxmbjfCounterZhuzhou,
			jsxmbjfResult
		}
	}
</script>

<style>

</style>
