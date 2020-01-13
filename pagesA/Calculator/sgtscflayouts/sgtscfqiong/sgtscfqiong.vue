<template>
	<base-layout :detailId="246">
		<template v-slot:jsq>
			<sgtscf-counter-qiong></sgtscf-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterQiong from "./sgtscf_counter_qiong.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfQiong',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterQiong,
			sgtscfResult
		}
	}
</script>

<style>

</style>
