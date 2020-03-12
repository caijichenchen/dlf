<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<glgckcf-counter-guo></glgckcf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="公路工程勘察费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import glgckcfCounterGuo from "./glgckcf-counter_guo.vue"
	import {glgckcfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/glgckcfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(glgckcfData)),
			}
		},
		components:{
			glgckcfCounterGuo
		}
	}
</script>

<style>
</style>
