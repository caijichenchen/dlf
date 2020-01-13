<template>
	<base-layout :detailId="328">
		<template v-slot:jsq>
			<sgtscf-counter-xiang></sgtscf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterXiang from "./sgtscf_counter_xiang.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfXiang',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterXiang,
			sgtscfResult
		}
	}
</script>

<style>

</style>
