<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">水文地质测绘费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">水文地质勘察项目分类</view>
				<picker class="select" @change="PickerChanges" :value="index0"
				 :range="swdzchfGuo_xmfl">
					<view class="picker">
						{{swdzchfGuo_xmfl[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.swdzchfGuo_gzl" /></input>
				<uni-tag text="km2" type="defult">km2</uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.swdzchfGuo_kcxm">
				<view class="title">勘查项目</view>
				<picker class="select" @change="PickerChange" data-name="swdzchfGuo_kcxm" :value="pickerIndex.swdzchfGuo_kcxm"
				 :range="multiSelector.swdzchfGuo_kcxm">
					<view class="picker">
						{{multiSelector.swdzchfGuo_kcxm[pickerIndex.swdzchfGuo_kcxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.swdzchfGuo_ctbl">
				<view class="title">成图比例</view>
				<picker class="select" @change="PickerChange" data-name="swdzchfGuo_ctbl" :value="pickerIndex.swdzchfGuo_ctbl"
				 :range="multiSelector.swdzchfGuo_ctbl">
					<view class="picker">
						{{multiSelector.swdzchfGuo_ctbl[pickerIndex.swdzchfGuo_ctbl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.swdzchfGuo_fzcd">
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChange" data-name="swdzchfGuo_fzcd" :value="pickerIndex.swdzchfGuo_fzcd"
				 :range="multiSelector.swdzchfGuo_fzcd">
					<view class="picker">
						{{multiSelector.swdzchfGuo_fzcd[pickerIndex.swdzchfGuo_fzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="swdzchfGuo_fzcd">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.swdzchfGuo_fjtz"/></input>
				<button type="primary" size="mini" @tap="showModal" data-target="swdzchfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index4"
				 :range="swdzchfGuo_qwfjtz">
					<view class="picker">
						{{swdzchfGuo_qwfjtz[index4]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.swdzchfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="swdzchfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.swdzchfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.swdzchfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<gctz-guo :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz-guo>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/swdzchf.json'
	import gctzGuo from '@/common/base/gctz.vue'
	import fzcd from './swdzchfGuo_fzcd.vue'
	import fjtz from './swdzchfGuo_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					swdzchfGuo_xmfl: '供水井凿井',
					swdzchfGuo_sfbl: '15|18|20',
					swdzchfGuo_gzl: '',
					swdzchfGuo_kcxm: '',
					swdzchfGuo_ctbl: '',
					swdzchfGuo_fzcd: '',
					swdzchfGuo_sfjj: '',
					swdzchfGuo_fjtz: '1',
					swdzchfGuo_qwfjtz: '1',
					swdzchfGuo_gctz: '1.0',
					swdzchfGuo_fdfd: '80',
					swdzchfGuo_yhzk: '90',
					swdzchfGuo_nums: '',
					type:'swdzchfGuo'
				},
				multiSelector: {
					swdzchfGuo_kcxm: [],
					swdzchfGuo_ctbl: [],
					swdzchfGuo_fzcd: [],
					swdzchfGuo_sfjj: '',
				},
				pickerIndex: {
					swdzchfGuo_kcxm: 0,
					swdzchfGuo_ctbl: 0,
					swdzchfGuo_fzcd: 0,
				},
				showSelector: {
					swdzchfGuo_kcxm: true,
					swdzchfGuo_ctbl: true,
					swdzchfGuo_fzcd: true,
					swdzchfGuo_sfjj: false
				},
				index0: 0,
				index4: 0,
				modalName: 'swdzchfGuo_gctz',
				swdzchfGuo_xmfl: ['供水井凿井','其他水文地质勘察'],
				swdzchfGuo_sfbl: ['15|18|20','27|30|33'],
				swdzchfGuo_qwfjtz: ['1','1.2'],
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "水文地质勘察项目分类",
						"text": "请选择项目分类"
					},
					{
						"id": "2",
						"title": "勘查项目",
						"text": "选择对应的项目"
					},
					{
						"id": "3",
						"title": "成图比例",
						"text": "选择对应的成图比例"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			gctzGuo,
			fzcd,
			fjtz
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.swdzchfGuo_xmfl = this.swdzchfGuo_xmfl[this.index0]
				this.needVal.swdzchfGuo_sfbl = this.swdzchfGuo_sfbl[this.index0]
			},
			PickerChangess(e) {
				this.index4 = e.detail.value
				this.needVal.swdzchfGuo_qwfjtz = this.swdzchfGuo_qwfjtz[this.index4]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
