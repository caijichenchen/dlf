<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2016]89号设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">项目建安费额</view>
				<input type="digit" v-model="needVal.zsxzsjfGuo_xmjafe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="zsxzsjfGuo_fzcd">
					<view class="picker">
						{{zsxzsjfGuo_fzcd[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加系数</view>
				<input type="digit" v-model="needVal.zsxzsjfGuo_fjxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfGuo_fjxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zsxzsjfGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<zsxz-guo-fzcd v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxz-guo-fzcd>
		<zsxz-guo-fjxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxz-guo-fjxs>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zsxzGuoFzcd from "./zsxzGuo_fzcd.vue"
	import zsxzGuoFjxs from "./zsxzGuo_fjxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					zsxzsjfGuo_xmjafe: '',
					zsxzsjfGuo_fjxs: 0,
					zsxzsjfGuo_fzcd: '简单',
					zsxzsjfGuo_discount: '50',
					zsxzsjfGuo_sffe: '200|500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000',
					zsxzsjfGuo_sfjj: '10.4|24.0|44.6|119.4|188.5|287.0|335.3|623.5|1159.4|1666.7|2156.1|2632.7|4673.3|8690.5|12492.4|16161.0',
					type:'zsxzsjfGuo'
				},
				showModalName: null,
				modalData: null,
				zsxzsjfGuo_fzcd: ['简单', '一般', '复杂','特别复杂'],
				index0:'0',
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zsxzGuoFzcd,
			zsxzGuoFjxs
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.zsxzsjfGuo_fzcd = this.zsxzsjfGuo_fzcd[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
<style>
</style>
	