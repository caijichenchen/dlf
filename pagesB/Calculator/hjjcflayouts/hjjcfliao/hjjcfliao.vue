<template>
	<base-layout :detailId="1629">
		<template v-slot:jsq>
			<hjjcf-counter-liao></hjjcf-counter-liao>
			<computing v-bind:countData = "countData"></computing>
			<hjjcf-result :title="title"></hjjcf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterLiao from "./hjjcf_counter_liao.vue"
	import hjjcfResult from "../hjjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfLiao',  //api请求
					count:3  //积分消耗
				},
				title:'辽宁'
			}
		},
		methods: {
			
		},
		components:{
			hjjcfCounterLiao,
			hjjcfResult
		}
	}
</script>

<style>

</style>
