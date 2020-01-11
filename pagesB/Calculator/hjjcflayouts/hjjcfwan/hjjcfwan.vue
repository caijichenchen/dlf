<template>
	<base-layout :detailId="1583">
		<template v-slot:jsq>
			<hjjcf-counter-wan></hjjcf-counter-wan>
			<computing v-bind:countData = "countData"></computing>
			<hjjcf-result :title="title"></hjjcf-result>
		</template>
	</base-layout>
</template>

<script>
	import hjjcfCounterWan from "./hjjcf_counter_wan.vue"
	import hjjcfResult from "../hjjcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/hjjcfWan',  //api请求
					count:2  //积分消耗
				},
				title:'安徽'
			}
		},
		methods: {
			
		},
		components:{
			hjjcfCounterWan,
			hjjcfResult
		}
	}
</script>

<style>

</style>
