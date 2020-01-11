<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">测绘费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">省份选择</view>
				<view class="title m-left">{{multiSelector.chfGuo_sfxz[pickerIndex.chfGuo_sfxz]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_xzbz">
				<view class="title">选择标准</view>
				<view class="title">{{multiSelector.chfGuo_xzbz[pickerIndex.chfGuo_xzbz]}}</view>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="chfGuo_xzbz">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_xmdl">
				<view class="title">项目大类</view>
				<picker class="select" @change="PickerChange" data-name="chfGuo_xmdl" :value="pickerIndex.chfGuo_xmdl"
				 :range="multiSelector.chfGuo_xmdl">
					<view class="picker">
						{{multiSelector.chfGuo_xmdl[pickerIndex.chfGuo_xmdl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_gzxm">
				<view class="title">工作项目</view>
				<picker class="select" @change="PickerChange" data-name="chfGuo_gzxm" :value="pickerIndex.chfGuo_gzxm"
				 :range="multiSelector.chfGuo_gzxm">
					<view class="picker">
						{{multiSelector.chfGuo_gzxm[pickerIndex.chfGuo_gzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_gzxm">内容查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_xfxm">
				<view class="title">细分项目</view>
				<picker class="select" @change="PickerChange" data-name="chfGuo_xfxm" :value="pickerIndex.chfGuo_xfxm"
				 :range="multiSelector.chfGuo_xfxm">
					<view class="picker">
						{{multiSelector.chfGuo_xfxm[pickerIndex.chfGuo_xfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_xffl">
				<view class="title">选择分类</view>
				<picker class="select" @change="PickerChange" data-name="chfGuo_xffl" :value="pickerIndex.chfGuo_xffl"
				 :range="multiSelector.chfGuo_xffl">
					<view class="picker">
						{{multiSelector.chfGuo_xffl[pickerIndex.chfGuo_xffl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_xffl">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="multiSelector.chfGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.chfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.chfGuo_swgzldw" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.chfGuo_ndjb">
				<view class="title">难度级别</view>
				<picker class="select" @change="PickerChange" data-name="chfGuo_ndjb" :value="pickerIndex.chfGuo_ndjb"
				 :range="multiSelector.chfGuo_ndjb">
					<view class="picker">
						{{multiSelector.chfGuo_ndjb[pickerIndex.chfGuo_ndjb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_ndjb">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">长迁系数</view>
				<input v-model="needVal.chfGuo_cqxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_cqxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高原系数</view>
				<input v-model="needVal.chfGuo_gyxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_gyxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高寒高温系数</view>
				<input v-model="needVal.chfGuo_ghgwxs"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_ghgwxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">带状系数</view>
				<input v-model="needVal.chfGuo_dzxs"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_dzxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">小面积系数</view>
				<input v-model="needVal.chfGuo_xmjxs"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_xmjxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">修测系数</view>
				<input v-model="needVal.chfGuo_xcxs"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_xcxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">面积系数</view>
				<input v-model="needVal.chfGuo_mjxs"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_mjxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加系数</view>
				<input v-model="needVal.chfGuo_fjxs"/></input>
				<button type="primary" size="mini" @tap="showModal" data-target="chfGuo_fjxs">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.chfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.chfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<gzxm :showModalName="showModalName" v-on:hideModal="hideModal" :chfGuo5="multiSelector.chfGuo5"></gzxm>
		<cqxs :showModalName="showModalName" v-on:hideModal="hideModal"></cqxs>
		<gyxs :showModalName="showModalName" v-on:hideModal="hideModal"></gyxs>
		<ghgwxs :showModalName="showModalName" v-on:hideModal="hideModal"></ghgwxs>
		<dzxs :showModalName="showModalName" v-on:hideModal="hideModal"></dzxs>
		<fjxs :showModalName="showModalName" v-on:hideModal="hideModal" :chfGuo6="multiSelector.chfGuo6"></fjxs>
		<ndjb :showModalName="showModalName" v-on:hideModal="hideModal"></ndjb>
		<xcxs :showModalName="showModalName" v-on:hideModal="hideModal" v-on:getData="getData" :xmjxs="needVal.chfGuo_xmjxs"></xcxs>
		<mjxs :showModalName="showModalName" v-on:hideModal="hideModal" v-on:getData="getData"></mjxs>
		<xmjxs :showModalName="showModalName" v-on:hideModal="hideModal" v-on:getData="getData"></xmjxs>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import datajson from '@/common/json/chfs/chfs-guo.json'
	import gzxm from './chfGuo_gzxm.vue'
	import cqxs from './chfGuo_cqxs.vue'
	import gyxs from './chfGuo_gyxs.vue'
	import ghgwxs from './chfGuo_ghgwxs.vue'
	import dzxs from './chfGuo_dzxs.vue'
	import fjxs from './chfGuo_fjxs.vue'
	import ndjb from './chfGuo_ndjb.vue'
	import xcxs from './chfGuo_xcxs.vue'
	import mjxs from './chfGuo_mjxs.vue'
	import xmjxs from './chfGuo_xmjxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					chfGuo_sfxz: '',
					chfGuo_xzbz: '',
					chfGuo_xmdl: '',
					chfGuo_gzxm: '',
					chfGuo_xfxm: '',
					chfGuo_xffl: '',
					chfGuo_swgzl: '',
					chfGuo_swgzldw: '',
					chfGuo_ndjb: '',
					chfGuo_sfjj: '',
					chfGuo_cqxs: '0',
					chfGuo_gyxs: '0',
					chfGuo_ghgwxs: '0',
					chfGuo_dzxs: '0',
					chfGuo_xmjxs: '0',
					chfGuo_xcxs: '0',
					chfGuo_mjxs: '0',
					chfGuo_fjxs: '0',
					chfGuo_fdfd: '80',
					chfGuo_yhzk: '90',
					type:'chfGuo'
				},
				multiSelector: {
					chfGuo_sfxz: [],
					chfGuo_xzbz: [],
					chfGuo_xmdl: [],
					chfGuo_gzxm: [],
					chfGuo5: '',
					chfGuo6: '',
					chfGuo_xfxm: [],
					chfGuo_xffl: [],
					chfGuo_swgzldw: '',
					chfGuo_ndjb: [],
					chfGuo_sfjj: '',
				},
				pickerIndex: {
					chfGuo_sfxz: 0,
					chfGuo_xzbz: 0,
					chfGuo_xmdl: 0,
					chfGuo_gzxm: 0,
					chfGuo_xfxm: 0,
					chfGuo_xffl: 0,
					chfGuo_ndjb: 0,
				},
				showSelector: {
					chfGuo_sfxz: true,
					chfGuo_xzbz: true,
					chfGuo_xmdl: true,
					chfGuo_gzxm: true,
					chfGuo5: false,
					chfGuo_6: false,
					chfGuo_xfxm: true,//7
					chfGuo_xffl: false,//8
					chfGuo_swgzldw: true,//9
					chfGuo_ndjb: true,
					chfGuo_sfjj: false,
				},
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [{
						"id": "1",
						"title": "项目大类",
						"text": "请确定好选择的项目"
					},
					{
						"id": "2",
						"title": "细分项目",
						"text": "请确定选择的项目"
					},
					{
						"id": "3",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "4",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			gzxm,
			cqxs,
			gyxs,
			ghgwxs,
			dzxs,
			fjxs,
			ndjb,
			xcxs,
			mjxs,
			xmjxs
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				console.log(this.modalData)
				this.$bus.emit('modalData', this.modalData )
			},
			getData(obj){
				if(obj.type == 'mjxs'){
					this.needVal.chfGuo_mjxs = obj.val
				}else if(obj.type == 'xcxs'){
					this.needVal.chfGuo_xcxs = obj.val
				}else if(obj.type == 'xmjxs'){
					this.needVal.chfGuo_xmjxs = obj.val
				}
			}
		}
	}
</script>

<style>
</style>
