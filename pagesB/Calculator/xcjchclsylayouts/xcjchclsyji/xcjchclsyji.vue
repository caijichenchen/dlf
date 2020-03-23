<template>
	<base-layout :detailId="966">
		<template v-slot:jsq>
			<xcjchclsy-counter-ji></xcjchclsy-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省现场检测和材料试验收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xcjchclsyCounterJi from "./xcjchclsy_counter_ji.vue"
	import {xcjchclsyData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyJi',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xcjchclsyData)),
			}
		},
		components:{
			xcjchclsyCounterJi
		}
	}
</script>

<style>

</style>
