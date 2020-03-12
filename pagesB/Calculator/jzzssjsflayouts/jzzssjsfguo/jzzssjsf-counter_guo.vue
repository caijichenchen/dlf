<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国建筑装饰设计收费计算器</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jzzssjsfGuo1">
				<view class="title">选择省份</view>
				<view class="title">{{multiSelector.jzzssjsfGuo1[pickerIndex.jzzssjsfGuo1]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<picker class="select" @change="PickerChange"  data-name="jzzssjsfGuo_standard" :value="pickerIndex.jzzssjsfGuo_standard"
				 :range="multiSelector.jzzssjsfGuo_standard">
					<view class="picker" >{{multiSelector.jzzssjsfGuo_standard[pickerIndex.jzzssjsfGuo_standard]}}</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1781,multiSelector.jzzssjsfGuo_standard[pickerIndex.jzzssjsfGuo_standard])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzzssjsfGuo_category">
				<view class="title">建筑项目收费类别</view>
				<picker class="select" @change="PickerChange"  data-name="jzzssjsfGuo_category" :value="pickerIndex.jzzssjsfGuo_category"
				 :range="multiSelector.jzzssjsfGuo_category">
					<view class="picker">
						{{multiSelector.jzzssjsfGuo_category[pickerIndex.jzzssjsfGuo_category]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzzssjsfGuo_xmlb">
				<view class="title">项目类别</view>
				<picker class="select" @change="PickerChange"  data-name="jzzssjsfGuo_xmlb" :value="pickerIndex.jzzssjsfGuo_xmlb"
				 :range="multiSelector.jzzssjsfGuo_xmlb">
					<view class="picker">
						{{multiSelector.jzzssjsfGuo_xmlb[pickerIndex.jzzssjsfGuo_xmlb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzzssjsfGuo_sfdj">
				<view class="title">收费等级</view>
				<picker class="select" @change="PickerChange"  data-name="jzzssjsfGuo_sfdj" :value="pickerIndex.jzzssjsfGuo_sfdj"
				 :range="multiSelector.jzzssjsfGuo_sfdj">
					<view class="picker">
						{{multiSelector.jzzssjsfGuo_sfdj[pickerIndex.jzzssjsfGuo_sfdj]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jzzssjsfGuo4 || showSelector.jzzssjsfGuo_units">
				<view class="title">{{multiSelector.jzzssjsfGuo4}}</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_jfe" /></input>
				<uni-tag :text="multiSelector.jzzssjsfGuo_units" type="defult" v-model="needVal.jzzssjsfGuo_units"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">比例表</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_blb" /></input>
				<uni-tag text="%" type="defult" ></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jzzssjsfGuo_blb">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">专业调整</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_zytz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">复杂调整</view>
				<picker class="select" @change="PickerChanges"  :value="index"
				 :range="jzzssjsfGuo_fztz">
					<view class="picker">
						{{jzzssjsfGuo_fztz[index]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jzzssjsfGuo_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jzzssjsfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.jzzssjsfGuo_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			
			<explain></explain>
			<fjtz-guo v-bind:showModalName="showModalName" v-on:hideModal='hideModal' ></fjtz-guo>
			<fztz-guo v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fztz-guo>
			<blb-guo v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></blb-guo>
		</form>
		
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fjtzGuo from "./jzzssjsfGuo_fjtz.vue"
	import fztzGuo from './jzzssjsfGuo_fztz.vue'
	import blbGuo from './jzzssjsfGuo_blb.vue'
	// import datajson from '@/common/json/jzzssjsf/jzzssjsf-guo.json'
	
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/jzzssjsf/jzzssjsf-guo.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jzzssjsfGuo_standard: '',
					jzzssjsfGuo_category: '',
					jzzssjsfGuo_xmlb: '',
					jzzssjsfGuo_sfdj: '',
					jzzssjsfGuo_sfjj: '',
					jzzssjsfGuo_qjjfe: '',
					jzzssjsfGuo_fl: '',
					jzzssjsfGuo_jfe: '',
					jzzssjsfGuo_units: '',
					jzzssjsfGuo_blb: '100',
					jzzssjsfGuo_zytz: '1.0',
					jzzssjsfGuo_fztz: 'I级',
					jzzssjsfGuo_fjtz: '1.0',
					jzzssjsfGuo_fdfd: '80',
					jzzssjsfGuo_discount: '50',
					jzzssjsfGuo_gcfztzdj: 'I级|II级|III级',
					jzzssjsfGuo_gcfztzxs: '0.8|1.0|1.15',
					type: 'jzzssjsfGuo'
				},
				multiSelector: {
					jzzssjsfGuo1: [],
					jzzssjsfGuo_standard: [],
					jzzssjsfGuo_category: [],
					jzzssjsfGuo4: '',
					jzzssjsfGuo_units: '',
					jzzssjsfGuo_xmlb: [],//6
					jzzssjsfGuo_sfdj: [],
					jzzssjsfGuo_sfjj: '',
					jzzssjsfGuo_qjjfe: '',
					jzzssjsfGuo_fl: '',
				},
				pickerIndex: {
					jzzssjsfGuo1: 0,
					jzzssjsfGuo_standard: 0,
					jzzssjsfGuo_category: 0,
					jzzssjsfGuo_xmlb: 0,
					jzzssjsfGuo_sfdj: 0,
				},
				showSelector: {
					jzzssjsfGuo1: true,
					jzzssjsfGuo_standard: true,
					jzzssjsfGuo_category: true,
					jzzssjsfGuo4: '',
					jzzssjsfGuo_units: true,
					jzzssjsfGuo_xmlb: true,
					jzzssjsfGuo_sfdj: true,
					jzzssjsfGuo_sfjj: false,
					jzzssjsfGuo_qjjfe: false,
					jzzssjsfGuo_fl: false,
				},
				jzzssjsfGuo_fztz: ['I级','II级','III级'],
				index: 0,
				showModalName: null,
				datajson:'',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "浮动幅度",
						"text": "国家标准：90%~110%"
					},
					{
						"id": "2",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
					{
						"id": "3",
						"title": "工程设计收费调整系数",
						"text": "专业调整系数是对不同专业建设项目的工程设计复杂程度和工作量差异进行调整的系数。计算建筑装饰设计收费时,专业调整系数均按1.0计算"
					}
				]
			}
		},
		components: {
			fjtzGuo,
			fztzGuo,
			blbGuo
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.jzzssjsfGuo_fztz = this.jzzssjsfGuo_fztz[this.index]
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
