<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">中设协字[2019]7号设计费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select"  v-model="needVal.zsxzsjfszGuo_standard" :range="picker1" >
						<view class="picker" >
							中设协字[2019]7号
						</view>
					</picker>
					<!-- <button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_standard">点击查看</button> -->
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">项目工程费</view>
					<input type="text" id="sjf" v-model="needVal.zsxzsjfszGuo_gczj"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">工作量比列</view>
					<input type="text" id="sjf" v-model="needVal.zsxzsjfszGuo_blb"></input>
					<uni-tag  text="万元" type="defult">%</uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="zsxzsjfszGuo_blb">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">工程复杂程度</view>
					<picker class="select" @change="PickerChange" v-model="needVal.zsxzsjfszGuo_fztz" :range="picker2">
						<view class="picker" >
							<view class="uni-input">{{picker2[index]}}</view>
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
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import zsxzsjfszGuoFjxs from "./zsxzsjfszGuo_fjxs.vue"
	import zsxzsjfszGuoBlb from "./zsxzsjfszGuo_blb.vue"
	import zsxzsjfszGuoFzcd from "./zsxzsjfszGuo_fzcd"
	import zsxzsjfszGuoZytz from "./zsxzsjfszGuo_zyxs"
	import zsxzsjfszGuoFwxs from "./zsxzsjfszGuo_qtfjxs"
	import explain from '@/common/base/explain.vue'
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
					// 
				},
				showModalName: null,
				// modalData: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1: ['中设协字[2019]7号'],
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
			zsxzsjfszGuoFjxs,
			zsxzsjfszGuoBlb,
			zsxzsjfszGuoFzcd,
			zsxzsjfszGuoFwxs,
			zsxzsjfszGuoZytz,
			explain
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.zsxzsjfszGuo_fztz = this.picker2[index]
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
	