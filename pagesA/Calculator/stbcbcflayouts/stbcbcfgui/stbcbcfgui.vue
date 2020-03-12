<template>
	<base-layout :detailId="1596">
		<template v-slot:jsq>
			<stbcbcf-counter-gui></stbcbcf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西省水土保持补偿费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import stbcbcfCounterGui from "./stbcbcf_counter_gui.vue"
	import {stbcbcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/stbcbcfGui',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(stbcbcfData))
			}
		},
		components:{
			stbcbcfCounterGui
		}
	}
</script>

<style>

</style>
