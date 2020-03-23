<template>
	<base-layout :detailId="1923">
		<template v-slot:jsq>
			<gcjsjlfgf-counter-guo></gcjsjlfgf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="建设管理费(光伏发电工程)" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import gcjsjlfgfCounterGuo from "./gcjsjlfgf_counter_guo.vue"
	import {gcjsjlfgfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/gcjsjlfgfGuo',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(gcjsjlfgfData)),
			}
		},
		components:{
			gcjsjlfgfCounterGuo
		}
	}
</script>

<style>

</style>
