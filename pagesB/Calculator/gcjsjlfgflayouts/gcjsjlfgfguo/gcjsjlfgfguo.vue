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
	import gcjsjlfgfCounterGuo from "./gcjsjlfgf_counter_guo.vue"
	import gcjsjlfgfResult from "./gcjsjlfgf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcjsjlfgfGuo',  //api请求
					count:2  //积分消耗
				}
			}
		},
		methods: {
			
		},
		components:{
			gcjsjlfgfCounterGuo,
			gcjsjlfgfResult
		}
	}
</script>

<style>

</style>
