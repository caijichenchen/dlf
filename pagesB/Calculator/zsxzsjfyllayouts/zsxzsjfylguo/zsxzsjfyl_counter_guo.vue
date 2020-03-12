<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">园林景观设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						中设协字[2018]119号
					</view>
				<!-- <button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_standard">点击查看</button> -->
			</view>
			<view class="cu-form-group" >
				<view class="title">项目建安费额</view>
				<input type="digit" v-model="needVal.zsxzsjfylGuo_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">工作比例表</view>
				<input type="digit" v-model="needVal.zsxzsjfylGuo_blb"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_blb">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="zsxzsjfylGuo_fzcd">
					<view class="picker" >
						<view class="uni-input">{{zsxzsjfylGuo_fzcd[index0]}}</view>
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_fzcd">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">其他服务成本附加系数</view>
				<input type="digit" v-model="needVal.zsxzsjfylGuo_fjxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_fjxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.zsxzsjfylGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<zsxzsjfyl-guo-fjxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfyl-guo-fjxs>
		<zsxzsjfyl-guo-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfyl-guo-blb>
		<zsxzsjfyl-guo-fzcd v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></zsxzsjfyl-guo-fzcd>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zsxzsjfylGuoFjxs from "./zsxzsjfylGuo_fjxs.vue"
	import zsxzsjfylGuoBlb from "./zsxzsjfylGuo_blb.vue"
	import zsxzsjfylGuoFzcd from "./zsxzsjfylGuo_fzcd"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					type: "zsxzsjfylGuo",
					zsxzsjfylGuo_blb: "100",
					zsxzsjfylGuo_fjxs: "0",
					zsxzsjfylGuo_fzcd: "I级",
					zsxzsjfylGuo_gczj: "",
					zsxzsjfylGuo_standard: "中设协字[2018]119号",
					zsxzsjfylGuo_yhzk: "100"
				},
				showModalName: null,
				modalData: null,
				zsxzsjfylGuo_fzcd: ['I级','II级','III级','IV级'],
				index0:'0',
				explain: [{
						"id": "1",
						"title": "项目建安费额",
						"text": "项目工程费为经过批准的项目设计概算中的建筑安装工程费、设备与工器具购置费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情不同，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			zsxzsjfylGuoFjxs,
			zsxzsjfylGuoBlb,
			zsxzsjfylGuoFzcd,
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.zsxzsjfylGuo_fzcd = this.zsxzsjfylGuo_fzcd[this.index0]
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
	