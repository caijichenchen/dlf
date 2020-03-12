<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gcjsjlfgf-counter-guo></gcjsjlfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<gcjsjlfgf-result></gcjsjlfgf-result>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import gcjsjlfgfCounterGuo from "./gcjsjlfgf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import gcjsjlfgfResult from "./gcjsjlfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: 'http://dlf.test/api/sjfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcjsjlfgfCounterGuo,
			baseLayout,
			computing,
			gcjsjlfgfResult
		}
	}
</script>

<style>

</style>
