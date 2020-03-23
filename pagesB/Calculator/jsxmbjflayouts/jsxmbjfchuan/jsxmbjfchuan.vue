<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<jsxmbjf-counter-chuan></jsxmbjf-counter-chuan>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省建设项目报建费" :result="result"></result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="892" @tap="setDetailId">四川|成都市建设项目一站式收费管理办法|成府发[2014]23号</view>
			<view class="a-text" :data-id="1564" @tap="setDetailId">四川|取消我省39项行政事业性收费项目|川财综〔2008〕68号</view>
			<view class="a-text" :data-id="1565" @tap="setDetailId">四川|成都市城市基础设施配套费标准|成发改收费〔2013〕21号|川发改价格〔2012〕1387号</view>
			<view class="a-text" :data-id="1566" @tap="setDetailId">新型墙体材料专项基金征收使用管理办法|财综〔2007〕77号</view>
		</template>
	</base-layout>
</template>

<script>
	import jsxmbjfCounterChuan from "./jsxmbjf_counter_chuan.vue"
	import {jsxmbjfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsxmbjfChuan',  //api请求
					count:2  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsxmbjfData)),
				id:892
			}
		},
		components:{
			jsxmbjfCounterChuan
		}
	}
</script>

<style>

</style>
