<template>
	<base-layout :detailId="1578">
		<template v-slot:jsq>
			<djglf-counter-hu></djglf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<djglf-result></djglf-result>
		</template>
	</base-layout>
</template>

<script>
	import djglfCounterHu from "./djglf_counter_hu.vue"
	import djglfResult from "./djglf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/djglfHu',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			djglfCounterHu,
			djglfResult
		}
	}
</script>

<style>

</style>
