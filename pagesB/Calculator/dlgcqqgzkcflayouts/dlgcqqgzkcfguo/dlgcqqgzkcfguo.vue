<template>
	<base-layout :detailId="1520">
		<template v-slot:jsq>
			<dlgcqqgzkcf-counter-guo></dlgcqqgzkcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<dlgcqqgzkcf-result></dlgcqqgzkcf-result>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dlgcqqgzkcfCounterGuo from "./dlgcqqgzkcf_counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import dlgcqqgzkcfResult from "./dlgcqqgzkcf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/dlgcqqgzkcfGuo',  //api请求
					count:4  //积分消耗
				}
			}
		},
		components:{
			dlgcqqgzkcfCounterGuo,
			baseLayout,
			computing,
			dlgcqqgzkcfResult
		}
	}
</script>

<style>

</style>
