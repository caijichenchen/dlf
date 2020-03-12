<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">苏浙沪监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title">沪建咨协〔2015〕11号,苏建监协〔2015〕4号,浙建监协〔2015〕19号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfSzh_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">难度调整系数</view>
				<input type="digit" v-model="needVal.jlfSzh_ndtzxs"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfSzh_ndtzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfSzh_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlfszh-tzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfszh-tzxs>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfszhTzxs from "./jlfszh_tzxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfSzh_dzzk: "50",
					jlfSzh_jfe: "",
					jlfSzh_ndtzxs: '1.0',
					jlfSzh_jsyj: "沪建咨协〔2015〕11号,苏建监协〔2015〕4号,浙建监协〔2015〕19号",
					type: "jlfSzh",
					jlfSzh_nums: ""
				},
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "监理费收费计费额",
						"text": "计费额是指经过批准的建设项目初步设计概算中的建筑安装工程费、设备与工器具购置费和联合试运转费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			jlfszhTzxs
		},
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	