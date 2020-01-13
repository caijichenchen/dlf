<template>
	<base-layout :detailId="929">
		<template v-slot:jsq>
			<sgtscf-counter-meng></sgtscf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterMeng from "./sgtscf_counter_meng.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfMeng',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterMeng,
			sgtscfResult
		}
	}
</script>

<style>

</style>
