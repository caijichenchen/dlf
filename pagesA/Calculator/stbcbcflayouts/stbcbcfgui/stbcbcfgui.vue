<template>
	<base-layout :detailId="1596">
		<template v-slot:jsq>
			<stbcbcf-counter-gui></stbcbcf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<stbcbcf-result :title="title"></stbcbcf-result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterGui from "./stbcbcf_counter_gui.vue"
	import stbcbcfResult from "../stbcbcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfGui',  //api请求
					count:1  //积分消耗
				},
				title:'广西省'
			}
		},
		methods: {
			
		},
		components:{
			stbcbcfCounterGui,
			stbcbcfResult
		}
	}
</script>

<style>

</style>
