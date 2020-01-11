<template>
	<base-layout :detailId="1715">
		<template v-slot:jsq>
			<hjjcf-counter-chuan></hjjcf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<hjjcf-result :title="title"></hjjcf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterChuan from "./hjjcf_counter_chuan.vue"
	import hjjcfResult from "../hjjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfChuan',  //api请求
					count:3  //积分消耗
				},
				title:"四川"
			}
		},
		methods: {
			
		},
		components:{
			hjjcfCounterChuan,
			hjjcfResult
		}
	}
</script>

<style>

</style>
