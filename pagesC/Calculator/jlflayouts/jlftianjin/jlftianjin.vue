<template>
	<base-layout :detailId="1614">
		<template v-slot:jsq>
			<jlftianjin-counter-guo></jlftianjin-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="天津市监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlftianjinCounterGuo from "./jlftianjin_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfTianjin',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Tianjin'))
			}
		},
		components:{
			jlftianjinCounterGuo
		}
	}
</script>

<style>

</style>
