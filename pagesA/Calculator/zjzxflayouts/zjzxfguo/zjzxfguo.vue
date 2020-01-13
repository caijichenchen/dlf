<template>
	<base-layout :detailId="110">
		<template v-slot:jsq>
			<zjzxf-counter-guo></zjzxf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
		</template>
	</base-layout>
</template>

<script>
	import zjzxfCounterGuo from "./zjzxf-counter_guo.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfGuo',  //api请求
					count:2  //积分消耗
				},
				title: "全国造价咨询费"
			}
		},
		methods: {
		},
		components:{
			zjzxfCounterGuo,
			zjzxfResult,
		}
	}
</script>

<style>
</style>
