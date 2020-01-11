<template>
	<base-layout :detailId="10">
		<template v-slot:jsq>
			<tlsj-counter></tlsj-counter>
			<computing v-bind:countData = "countData"></computing>
			<tlsj-result></tlsj-result>
		</template>
	</base-layout>
</template>

<script>
	import tlsjCounter from './tlsj-counter.vue'
	import tlsjResult from './tlsj-result.vue'
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/tlsjGuo',  //api请求
					count:2  //积分消耗
				},
			}
		},
		methods: {
			
		},
		components:{
			tlsjResult,
			tlsjCounter
		}
	}
</script>

<style>
</style>
