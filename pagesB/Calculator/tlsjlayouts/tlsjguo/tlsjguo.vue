<template>
	<!-- 计算器页面 -->
	<base-layout>
		<template v-slot:jsq>
			<tlsj-counter></tlsj-counter>
			<tlsj-result></tlsj-result>
		</template>
		<template v-slot:qfbz>
			<!-- <h1>设计费取费标准</h1> -->
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import computing from "@/common/base/computing.vue"
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
			baseLayout,
			computing,
			tlsjResult,
			tlsjCounter
		}
	}
</script>

<style>
</style>
