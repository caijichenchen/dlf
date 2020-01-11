<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<pdldzj-counter-guo></pdldzj-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<pdldzj-result></pdldzj-result>
		</template>
	</base-layout>
</template>

<script>
	import pdldzjCounterGuo from "./pdldzj_counter_guo.vue"
	import pdldzjResult from "./pdldzj_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/pdldzjGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			pdldzjCounterGuo,
			pdldzjResult
		}
	}
</script>

<style>

</style>
