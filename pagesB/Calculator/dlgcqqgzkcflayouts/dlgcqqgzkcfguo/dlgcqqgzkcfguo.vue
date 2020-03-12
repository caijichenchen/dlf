<template>
	<base-layout :detailId="1520">
		<template v-slot:jsq>
			<dlgcqqgzkcf-counter-guo></dlgcqqgzkcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="电力工程建设项目前期工作勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import dlgcqqgzkcfCounterGuo from "./dlgcqqgzkcf_counter_guo.vue"
	import {dlgcqqgzkcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/dlgcqqgzkcfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(dlgcqqgzkcfData)),
			}
		},
		components:{
			dlgcqqgzkcfCounterGuo
		}
	}
</script>

<style>

</style>
