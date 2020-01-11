<template>
	<base-layout :detailId="1681">
		<template v-slot:jsq>
			<xmjs-counter-xiamen></xmjs-counter-xiamen>
			<computing v-bind:countData = "countData"></computing>
			<xmjs-result></xmjs-result>
		</template>
	</base-layout>
</template>

<script>
	import xmjsCounterXiamen from "./xmjs_counter_xiamen.vue"
	import xmjsResult from "./xmjs_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jsdwglXiamen',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			xmjsCounterXiamen,
			xmjsResult
		}
	}
</script>

<style>

</style>
