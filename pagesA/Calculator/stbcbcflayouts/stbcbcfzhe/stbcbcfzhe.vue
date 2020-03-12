<template>
	<base-layout :detailId="1655">
		<template v-slot:jsq>
			<stbcbcf-counter-zhe></stbcbcf-counter-zhe>
			<computing v-bind:countData = "countData"></computing>
			<result title="浙江省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterZhe from "./stbcbcf_counter_zhe.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfZhe',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterZhe
		}
	}
</script>

<style>

</style>
