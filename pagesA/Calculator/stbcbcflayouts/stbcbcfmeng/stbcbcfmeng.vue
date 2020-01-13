<template>
	<base-layout :detailId="1647">
		<template v-slot:jsq>
			<stbcbcf-counter-meng></stbcbcf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterMeng from "./stbcbcf_counter_meng.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfMeng',  //api请求
					count:1  //积分消耗
				},
				title:'内蒙古'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterMeng,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
