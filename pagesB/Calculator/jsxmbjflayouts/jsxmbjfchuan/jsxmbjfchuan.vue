<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<jsxmbjf-counter-chuan></jsxmbjf-counter-chuan>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<jsxmbjf-result></jsxmbjf-result>
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
	import baseLayout from "@/common/base/baseLayout.vue"
	import jsxmbjfCounterChuan from "./jsxmbjf_counter_chuan.vue"
	import computing from "@/common/base/computing.vue"
	import jsxmbjfResult from "./jsxmbjf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jsxmbjfChuan',  //api请求
					count:2  //积分消耗
				},
				id:892
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			jsxmbjfCounterChuan,
			baseLayout,
			computing,
			jsxmbjfResult
		}
	}
</script>

<style>

</style>
