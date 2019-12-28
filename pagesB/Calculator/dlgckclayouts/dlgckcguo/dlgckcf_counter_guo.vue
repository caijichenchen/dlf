<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">电力工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dlgckcGuo_gclb">
				<view class="title">工程类别</view>
				<picker class="select" @change="PickerChange" data-name="dlgckcGuo_gclb" :value="pickerIndex.dlgckcGuo_gclb"
				 :range="multiSelector.dlgckcGuo_gclb">
					<view class="picker">
						{{multiSelector.dlgckcGuo_gclb[pickerIndex.dlgckcGuo_gclb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgckcGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.dlgckcGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.dlgckcGuo_swgzldw" type="defult" v-model="multiSelector.dlgckcGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgckcGuo_xzdj">
				<view class="title">选择阶段</view>
				<picker class="select" @change="PickerChange" data-name="dlgckcGuo_xzdj" :value="pickerIndex.dlgckcGuo_xzdj"
				 :range="multiSelector.dlgckcGuo_xzdj">
					<view class="picker">
						{{multiSelector.dlgckcGuo_xzdj[pickerIndex.dlgckcGuo_xzdj]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgckcGuo_xzxm || showSelector.dlgckcGuo_xzlx">
				<view class="title" v-model="needVal.dlgckcGuo_xzxm">{{multiSelector.dlgckcGuo_xzxm}}</view>
				<picker class="select" @change="PickerChange" data-name="dlgckcGuo_xzlx" :value="pickerIndex.dlgckcGuo_xzlx"
				 :range="multiSelector.dlgckcGuo_xzlx">
					<view class="picker">
						{{multiSelector.dlgckcGuo_xzlx[pickerIndex.dlgckcGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">比例表</view>
				<input v-model="needVal.dlgckcGuo_blb" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgckcGuo_blb">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂分值</view>
				<input v-model="needVal.dlgckcGuo_fzcd" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgckcGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.dlgckcGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgckcGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.dlgckcGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.dlgckcGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<blb :showModalName="showModalName" v-on:hideModal="hideModal"></blb>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal" :gclbindex="pickerIndex.dlgckcGuo_gclb"></fzcd>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal" :dlgckcGuo3="multiSelector.dlgckcGuo3"></fjtz>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/dlgcs.json'
	import blb from './dlgckcGuo_blb.vue'
	import fzcd from './dlgckcGuo_fzcd.vue'
	import fjtz from './dlgckcGuo_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dlgckcGuo_gclb: '',
					dlgckcGuo_swgzl: '',
					dlgckcGuo_xzdj: '',
					dlgckcGuo_xzxm: '',
					dlgckcGuo_xzlx: '',
					dlgckcGuo_sfjj: '',
					dlgckcGuo_blb: '100',
					dlgckcGuo_fzcd: '9',
					dlgckcGuo_fjtz: '1.0',
					dlgckcGuo_fdfd: '80',
					dlgckcGuo_yhzk: '90',
					type: 'dlgckcGuo',
					dlgckcGuo_nums: '',
				},
				multiSelector: {
					dlgckcGuo_gclb: [],
					dlgckcGuo3:'',
					dlgckcGuo_swgzldw: '',
					dlgckcGuo_xzxm: '',
					dlgckcGuo_xzdj: [],
					dlgckcGuo_xzlx: [],
					dlgckcGuo_sfjj: '',
				},
				pickerIndex: {
					dlgckcGuo_gclb: 0,
					dlgckcGuo_xzdj: 0,
					dlgckcGuo_xzlx: 0,
				},
				showSelector: {
					dlgckcGuo_gclb: true,
					dlgckcGuo_swgzldw: true,
					dlgckcGuo_xzdj: true,
					dlgckcGuo_xzxm: true,
					dlgckcGuo_xzlx: true,
					dlgckcGuo_sfjj: false,
				},
				datajson:datajson,
				modalData: null,
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "工程类别",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "选择阶段",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			blb,
			fzcd,
			fjtz
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
