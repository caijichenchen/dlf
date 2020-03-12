<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">岩土工程地质测绘费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">岩土工程勘察等级</view>
				<picker class="select" @change="PickerChanges" :value="index0"
				 :range="ytgcdzchfGuo_kcdj">
					<view class="picker">
						{{ytgcdzchfGuo_kcdj[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input type="digit" v-model="needVal.ytgcdzchfGuo_gzl" /></input>
				<uni-tag text="km2" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcdzchfGuo_kcxm">
				<view class="title">勘查项目</view>
				<picker class="select" @change="PickerChange" data-name="ytgcdzchfGuo_kcxm" :value="pickerIndex.ytgcdzchfGuo_kcxm"
				 :range="multiSelector.ytgcdzchfGuo_kcxm">
					<view class="picker">
						{{multiSelector.ytgcdzchfGuo_kcxm[pickerIndex.ytgcdzchfGuo_kcxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcdzchfGuo_ctbl">
				<view class="title">成图比例</view>
				<picker class="select" @change="PickerChange" data-name="ytgcdzchfGuo_ctbl" :value="pickerIndex.ytgcdzchfGuo_ctbl"
				 :range="multiSelector.ytgcdzchfGuo_ctbl">
					<view class="picker">
						{{multiSelector.ytgcdzchfGuo_ctbl[pickerIndex.ytgcdzchfGuo_ctbl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ytgcdzchfGuo_fzcd">
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChange" data-name="ytgcdzchfGuo_fzcd" :value="pickerIndex.ytgcdzchfGuo_fzcd"
				 :range="multiSelector.ytgcdzchfGuo_fzcd">
					<view class="picker">
						{{multiSelector.ytgcdzchfGuo_fzcd[pickerIndex.ytgcdzchfGuo_fzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcdzchfGuo_fzcd">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.ytgcdzchfGuo_fjtz"/></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcdzchfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index4"
				 :range="ytgcdzchfGuo_qwfjtz">
					<view class="picker">
						{{ytgcdzchfGuo_qwfjtz[index4]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input type="digit" v-model="needVal.ytgcdzchfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcdzchfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.ytgcdzchfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.ytgcdzchfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/ytgcdzchf.json'
	import fzcd from './ytgcdzchfGuo_fzcd.vue'
	import fjtz from './ytgcdzchfGuo_fjtz.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/ytgcdzchf.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					ytgcdzchfGuo_kcdj: '甲级',
					ytgcdzchfGuo_sfbl: '120',
					ytgcdzchfGuo_gzl: '',
					ytgcdzchfGuo_kcxm: '',
					ytgcdzchfGuo_ctbl: '',
					ytgcdzchfGuo_fzcd: '',
					ytgcdzchfGuo_sfjj: '',
					ytgcdzchfGuo_fjtz: '1',
					ytgcdzchfGuo_qwfjtz: '1',
					ytgcdzchfGuo_gctz: '1.0',
					ytgcdzchfGuo_fdfd: '80',
					ytgcdzchfGuo_yhzk: '90',
					ytgcdzchfGuo_nums: '',
					type:'ytgcdzchfGuo'
				},
				multiSelector: {
					ytgcdzchfGuo_kcxm: [],
					ytgcdzchfGuo_ctbl: [],
					ytgcdzchfGuo_fzcd: [],
					ytgcdzchfGuo_sfjj: '',
				},
				pickerIndex: {
					ytgcdzchfGuo_kcxm: 0,
					ytgcdzchfGuo_ctbl: 0,
					ytgcdzchfGuo_fzcd: 0,
				},
				showSelector: {
					ytgcdzchfGuo_kcxm: true,
					ytgcdzchfGuo_ctbl: true,
					ytgcdzchfGuo_fzcd: true,
					ytgcdzchfGuo_sfjj: false
				},
				index0:0,
				index4:0,
				title: '岩土工程地质测绘费',
				modalName: 'ytgcdzchfGuo_gctz',
				ytgcdzchfGuo_sfbl: ['120','100','80'],
				ytgcdzchfGuo_kcdj: ['甲级','乙级','丙级'],
				ytgcdzchfGuo_qwfjtz: ['1','1.2'],
				showModalName: null,
				datajson:'',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "岩土工程勘察等级",
						"text": "岩土工程勘察等级见国标《岩土工程勘察规范》"
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
			fzcd,
			fjtz,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.index0 = e.detail.value
				this.needVal.ytgcdzchfGuo_kcdj = this.ytgcdzchfGuo_kcdj[this.index0]
				this.needVal.ytgcdzchfGuo_sfbl = this.ytgcdzchfGuo_sfbl[this.index0]
			},
			PickerChangess(e) {
				this.index4 = e.detail.value
				this.needVal.ytgcdzchfGuo_qwfjtz = this.ytgcdzchfGuo_qwfjtz[this.index4]
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
