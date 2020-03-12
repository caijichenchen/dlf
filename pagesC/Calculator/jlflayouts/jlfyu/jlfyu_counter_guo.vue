<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河南省监理费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left">豫建监协〔2015〕19号</view>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfYu_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="digit" v-model="needVal.jlfYu_fztz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfYu_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优质服务系数</view>
				<input type="digit" v-model="needVal.jlfYu_yzfwxs"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfYu_yzfwxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jlfYu_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfYu_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfYu_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlfyu-fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfyu-fjtz>
			<jlfyu-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :modalName="modalName"></jlfyu-fztz>
			<jlfyu-yzfwxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfyu-yzfwxs>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfyuFjtz from "./jlfYu_fjtz.vue"
	import jlfyuFztz from "./jlf_fztz.vue"
	import jlfyuYzfwxs from "./jlfYu_yzfwxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfYu_dzzk: "50",
					jlfYu_jfe: "",
					jlfYu_fjtz: '1.0',
					jlfYu_fl: "0.033|0.030|0.026|0.024|0.023|0.022|0.020|0.018|0.017|0.016|0.015|0.014|0.012|0.011|0.011|0.010",
					jlfYu_fztz: '1.0',
					jlfYu_yzfwxs: '0',
					jlfYu_jsyj: "豫建监协〔2015〕19号",
					jlfYu_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
					type: "jlfYu",
					jlfYu_nums: ""
				},
				modalData: null,  //查看说明
				showModalName: null,
				modalName:'jlfYu_fztz',
				explain: [{
						"id": "1",
						"title": "监理费计费额",
						"text": "计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置 费和联合试运转费之和"
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
			jlfyuFjtz,
			jlfyuFztz,
			jlfyuYzfwxs
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	