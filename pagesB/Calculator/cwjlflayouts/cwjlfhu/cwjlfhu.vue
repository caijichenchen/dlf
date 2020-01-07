<template>
	<base-layout :detailId="1578">
		<template v-slot:jsq>
			<csjlf-counter-hu></csjlf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<csjlf-result></csjlf-result>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csjlfCounterHu from "./csjlf-counter-hu.vue"
	import computing from "@/common/base/computing.vue"
	import csjlfResult from "./csjlf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/cwjlfHu',  //api请求
					count:1  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			csjlfCounterHu,
			baseLayout,
			computing,
			csjlfResult
		}
	}
</script>

<style>

</style>
