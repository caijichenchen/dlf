<template>
	<base-layout :detailId="1039">
		<template v-slot:jsq>
			<xcjchclsy-counter-yue></xcjchclsy-counter-yue>
			<computing v-bind:countData = "countData"></computing>
			<result title="广东省现场检测和材料试验收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xcjchclsyCounterYue from "./xcjchclsy_counter_yue.vue"
	import {xcjchclsyData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/xcjchclsyYue',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(xcjchclsyData)),
			}
		},
		components:{
			xcjchclsyCounterYue
		}
	}
</script>

<style>

</style>
