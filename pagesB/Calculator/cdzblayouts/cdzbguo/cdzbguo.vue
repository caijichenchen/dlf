<template>
	<base-layout :detailId="1519">
		<template v-slot:jsq>
			<cdzb-counter-guo></cdzb-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<cdzb-result></cdzb-result>
		</template>
	</base-layout>
</template>

<script>
	import cdzbCounterGuo from "./cdzb_counter_guo.vue"
	import cdzbResult from "./cdzb_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/cdzbGuo',  //api请求
					count:1  //积分消耗
				}
			}
		},
		components:{
			cdzbCounterGuo,
			cdzbResult
		}
	}
</script>

<style>

</style>
