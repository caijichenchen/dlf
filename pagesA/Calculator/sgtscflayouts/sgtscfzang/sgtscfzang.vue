<template>
	<base-layout :detailId="1698">
		<template v-slot:jsq>
			<sgtscf-counter-zang></sgtscf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterZang from "./sgtscf_counter_zang.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfZang',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			sgtscfCounterZang,
			sgtscfResult
		}
	}
</script>

<style>

</style>
