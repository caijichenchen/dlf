<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<dzzh-counter-guo></dzzh-counter-guo>
			<computing v-bind:countData = "countData"></computing>
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
	import dzzhCounterGuo from "./dzzh-counter_guo.vue"
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
			dzzhResult
		}
	}
</script>

<style>
</style>
