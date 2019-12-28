<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">电力工程建设项目前期工作勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo1">
				<view class="title">省份</view>
				<view class="title">{{multiSelector.dlgcqqgzkcfGuo1[pickerIndex.dlgcqqgzkcfGuo1]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo_standard">
				<view class="title">选择标准</view>
				<view class="title">{{multiSelector.dlgcqqgzkcfGuo_standard[pickerIndex.dlgcqqgzkcfGuo_standard]}}</view>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgcqqgzkcfGuo_standard">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo_gclb">
				<view class="title">工程类别</view>
				<picker class="select" @change="PickerChange" data-name="dlgcqqgzkcfGuo_gclb" :value="pickerIndex.dlgcqqgzkcfGuo_gclb"
				 :range="multiSelector.dlgcqqgzkcfGuo_gclb">
					<view class="picker">
						{{multiSelector.dlgcqqgzkcfGuo_gclb[pickerIndex.dlgcqqgzkcfGuo_gclb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo_xzxm || showSelector.dlgcqqgzkcfGuo_xzlx">
				<view class="title" v-model="needVal.dlgcqqgzkcfGuo_xzxm">{{multiSelector.dlgcqqgzkcfGuo_xzxm}}</view>
				<picker class="select" @change="PickerChange" data-name="dlgcqqgzkcfGuo_xzlx" :value="pickerIndex.dlgcqqgzkcfGuo_xzlx"
				 :range="multiSelector.dlgcqqgzkcfGuo_xzlx">
					<view class="picker">
						{{multiSelector.dlgcqqgzkcfGuo_xzlx[pickerIndex.dlgcqqgzkcfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo_xzdj">
				<view class="title">选择阶段</view>
				<picker class="select" @change="PickerChange" data-name="dlgcqqgzkcfGuo_xzdj" :value="pickerIndex.dlgcqqgzkcfGuo_xzdj"
				 :range="multiSelector.dlgcqqgzkcfGuo_xzdj">
					<view class="picker">
						{{multiSelector.dlgcqqgzkcfGuo_xzdj[pickerIndex.dlgcqqgzkcfGuo_xzdj]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dlgcqqgzkcfGuo8">
				<view class="title">{{multiSelector.dlgcqqgzkcfGuo8}}</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_swgzl" /></input>
				<uni-tag text="公里" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂分值</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_fzcd" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgcqqgzkcfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgcqqgzkcfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dlgcqqgzkcfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.dlgcqqgzkcfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modeName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/dlgcqqgzkcf/dlgcqqgzkcf-guo.json'
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import fzcd from './dlgcqqgzkcfGuo_fzcd.vue'
	import fjtz from './dlgcqqgzkcfGuo_fjtz.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dlgcqqgzkcfGuo_standard: '发改价格〔2006〕1352号',
					dlgcqqgzkcfGuo_gclb: '',
					dlgcqqgzkcfGuo_xzxm: '',
					dlgcqqgzkcfGuo_xzlx: '',
					dlgcqqgzkcfGuo_xzdj: '',
					dlgcqqgzkcfGuo_swgzl: '',
					dlgcqqgzkcfGuo_sfjj: '',
					dlgcqqgzkcfGuo_fzcd: '9',
					dlgcqqgzkcfGuo_fjtz: '1.0',
					dlgcqqgzkcfGuo_gctz: '1.0',
					dlgcqqgzkcfGuo_fdfd: '70',
					dlgcqqgzkcfGuo_yhzk: '90',
					type: 'dlgcqqgzkcfGuo'
				},
				title: '勘察费',
				modeName: 'dlgcqqgzkcfGuo_gctz',
				multiSelector: {
					dlgcqqgzkcfGuo1: [],
					dlgcqqgzkcfGuo_standard: [],
					dlgcqqgzkcfGuo_gclb: [],
					dlgcqqgzkcfGuo_xzxm: '',
					dlgcqqgzkcfGuo_xzlx: [],
					dlgcqqgzkcfGuo_xzdj: [],
					dlgcqqgzkcfGuo_sfjj: '',
					dlgcqqgzkcfGuo8: '',
				},
				pickerIndex: {
					dlgcqqgzkcfGuo1: 0,
					dlgcqqgzkcfGuo_standard: 0,
					dlgcqqgzkcfGuo_gclb: 0,
					dlgcqqgzkcfGuo_xzlx: 0,
					dlgcqqgzkcfGuo_xzdj: 0,
				},
				showSelector: {
					dlgcqqgzkcfGuo1: true,
					dlgcqqgzkcfGuo_standard: true,
					dlgcqqgzkcfGuo_gclb: true,
					dlgcqqgzkcfGuo_xzxm:true,
					dlgcqqgzkcfGuo_xzlx: true,
					dlgcqqgzkcfGuo_xzdj: true,
					dlgcqqgzkcfGuo_sfjj: false,
					dlgcqqgzkcfGuo8: false,
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
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "选择阶段",
						"text": "请确定好计算的类型"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：70%~120%"
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
			fzcd,
			fjtz,
			gctz
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
