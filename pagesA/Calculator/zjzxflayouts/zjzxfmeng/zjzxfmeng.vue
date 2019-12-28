<template>
	<!-- 计算器页面 -->
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<zjzxf-counter-meng :title="title"></zjzxf-counter-meng>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="281" @tap="setDetailId">内蒙古自治区建设工程造价咨询服务收费指导意见（试行）|内工建协 [2016] 18号</view>
			<view class="a-text" :data-id="1489" @tap="setDetailId">内蒙古|规范建设工程造价咨询服务收费有关问题|内发改费字[2012]65号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterMeng from "./zjzxf-counter_meng.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfMeng',  //api请求
					count:2  //积分消耗
				},
				title: "内蒙古造价咨询费",
				id:281
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterMeng,
			baseLayout,
			computing,
			zjzxfResult
		}
	}
</script>

<style>
</style>
