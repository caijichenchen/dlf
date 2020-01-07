<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<dzzh-counter-guo></dzzh-counter-guo>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<dzzh-result></dzzh-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="140" @tap="setDetailId">地质灾害危险性评估收费管理办法|发改办价格(2006]745号</view>
			<view class="a-text" :data-id="141" @tap="setDetailId">国土资源调查预算标准（地质调查部分）|财建[2007]52号</view>
			<view class="a-text" :data-id="150" @tap="setDetailId">地质灾害防治条例|国务院令第394号</view>
			<view class="a-text" :data-id="151" @tap="setDetailId">国土资源部关于加强地质灾害 危险性评估工作的通知|国土资发〔2004〕69号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import dzzhCounterGuo from "./dzzh-counter_guo.vue"
	import computing from "@/common/base/computing.vue"
	import dzzhResult from "./dzzh_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/dzzhGuo',  //api请求
					count:4  //积分消耗
				},
				id:140
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			dzzhCounterGuo,
			baseLayout,
			computing,
			dzzhResult
		}
	}
</script>

<style>
</style>
