<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2016]89号设计费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<picker class="select"  v-model="needVal.zsxzsjfylGuo_standard" :range="picker1" >
					<view class="picker" >
						中设协字[2018]119号
					</view>
				</picker>
				<!-- <button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_standard">点击查看</button> -->
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">项目建安费额</view>
				<input type="text" id="sjf" v-model="needVal.zsxzsjfylGuo_gczj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">工作比例表</view>
				<input type="text" id="sjf" v-model="needVal.zsxzsjfylGuo_blb"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_blb">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂程度</view>
				<picker class="select" @change="PickerChange" v-model="needVal.zsxzsjfylGuo_fzcd" :range="picker2">
					<view class="picker" >
						<view class="uni-input">{{picker2[index]}}</view>
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_fzcd">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">其他服务成本附加系数</view>
				<input  v-model="needVal.zsxzsjfylGuo_fjxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfylGuo_fjxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.zsxzsjfylGuo_yhzk" /></input>
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
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import zsxzsjfylGuoFjxs from "./zsxzsjfylGuo_fjxs.vue"
	import zsxzsjfylGuoBlb from "./zsxzsjfylGuo_blb.vue"
	import zsxzsjfylGuoFzcd from "./zsxzsjfylGuo_fzcd"
	import explain from '@/common/base/explain.vue'
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
				// modalData: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['中设协字[2018]119号'],
				picker2: ['I级','II级','III级','IV级'],
				index:'0',
				index1:'0',
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
			uniTag,
			zsxzsjfylGuoFjxs,
			zsxzsjfylGuoBlb,
			zsxzsjfylGuoFzcd,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.zsxzsjfylGuo_fzcd = this.picker2[index]
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
	