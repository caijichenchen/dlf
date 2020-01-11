<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2019]7号设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						中设协字[2019]7号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1894)" >点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目工程费</view>
				<input type="text" v-model="needVal.zsxzsjfszGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工作量比列</view>
				<input type="text" v-model="needVal.zsxzsjfszGuo_blb"></input>
				<uni-tag  text="万元" type="defult">%</uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_blb">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="zsxzsjfszGuo_fztz">
					<view class="picker" >
						{{zsxzsjfszGuo_fztz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_fzcd">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程附加系数</view>
				<input  v-model="needVal.zsxzsjfszGuo_fjtz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程专业系数</view>
				<input  v-model="needVal.zsxzsjfszGuo_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_zytz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">其他服务成本附加系数</view>
				<input  v-model="needVal.zsxzsjfszGuo_fwxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_fwxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.zsxzsjfszGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<zsxzsjfsz-guo-fjxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfsz-guo-fjxs>
		<zsxzsjfsz-guo-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfsz-guo-blb>
		<zsxzsjfsz-guo-fzcd v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfsz-guo-fzcd>
		<zsxzsjfsz-guo-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfsz-guo-zytz>
		<zsxzsjfsz-guo-fwxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfsz-guo-fwxs>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zsxzsjfszGuoFjxs from "./zsxzsjfszGuo_fjxs.vue"
	import zsxzsjfszGuoBlb from "./zsxzsjfszGuo_blb.vue"
	import zsxzsjfszGuoFzcd from "./zsxzsjfszGuo_fzcd"
	import zsxzsjfszGuoZytz from "./zsxzsjfszGuo_zyxs"
	import zsxzsjfszGuoFwxs from "./zsxzsjfszGuo_qtfjxs"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					type: "zsxzsjfszGuo",
					zsxzsjfszGuo_blb: "100",
					zsxzsjfszGuo_discount: "100",
					zsxzsjfszGuo_fjtz: "1.0",
					zsxzsjfszGuo_fztz: "I级",
					zsxzsjfszGuo_gczj: "",
					zsxzsjfszGuo_standard: "中设协字[2019]7号",
					zsxzsjfszGuo_fwxs:"0",
					zsxzsjfszGuo_zytz: "1.0"
				},
				showModalName: null,
				modalData: null,
				zsxzsjfszGuo_fztz: ['I级','II级','III级','IV级'],
				index0:'0',
				explain: [{
						"id": "1",
						"title": "项目建安费额",
						"text": "项目工程费为经过批准的项目设计概算中的建筑安装工程费、设备与工器具购置费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zsxzsjfszGuoFjxs,
			zsxzsjfszGuoBlb,
			zsxzsjfszGuoFzcd,
			zsxzsjfszGuoFwxs,
			zsxzsjfszGuoZytz,
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.zsxzsjfszGuo_fztz = this.zsxzsjfszGuo_fztz[this.index0]
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
	