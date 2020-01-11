<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<ytgcsj-counter-guo></ytgcsj-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<ytgcsj-result></ytgcsj-result>
		</template>
	</base-layout>
</template>

<script>
	import ytgcsjCounterGuo from "./ytgcsj-counter_guo.vue"
	import ytgcsjResult from "./ytgcsj_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/ytgcsjGuo',  //api请求
					count:3  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			ytgcsjCounterGuo,
			ytgcsjResult
		}
	}
</script>

<style>
</style>
