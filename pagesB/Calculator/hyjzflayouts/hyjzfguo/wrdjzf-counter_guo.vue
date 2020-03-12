<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海域金征费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.hyjzfGuo1">
				<view class="title">计算依据</view>
				<view class="title m-left" v-model="needVal.hyjzfGuo1">{{multiSelector.hyjzfGuo1[pickerIndex.hyjzfGuo1]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">海域等别</view>
				<picker class="select" @change="PickerChanges" :range="hyjzfGuo_hydb"  :value="index3">
					<view class="picker">
						{{hyjzfGuo_hydb[index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="hyjzfGuo_hydb">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.hyjzfGuo_yhdl">
				<view class="title">用海方式大类</view>
				<picker class="select" @change="PickerChange" data-name="hyjzfGuo_yhdl" :value="pickerIndex.hyjzfGuo_yhdl"
				 :range="multiSelector.hyjzfGuo_yhdl">
					<view class="picker">
						{{multiSelector.hyjzfGuo_yhdl[pickerIndex.hyjzfGuo_yhdl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="hyjzfGuo_yhdl">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.hyjzfGuo_yhxf">
				<view class="title">用海方式细分</view>
				<picker class="select" @change="PickerChange" data-name="hyjzfGuo_yhxf" :value="pickerIndex.hyjzfGuo_yhxf"
				 :range="multiSelector.hyjzfGuo_yhxf">
					<view class="picker">
						{{multiSelector.hyjzfGuo_yhxf[pickerIndex.hyjzfGuo_yhxf]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="hyjzfGuo_yhxf">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input type="digit" v-model="needVal.hyjzfGuo_swgzl" /></input>
				<uni-tag text="公顷" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.hyjzfGuo4">
				<view class="title">{{multiSelector.hyjzfGuo4}}</view>
				<input type="digit" v-model="needVal.hyjzfGuo_nx" /></input>
				<uni-tag :text="multiSelector.hyjzfGuo5" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">附加系数</view>
				<input type="digit" v-model="needVal.hyjzfGuo_fjxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="hyjzfGuo_fjxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.hyjzfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<hydb :showModalName="showModalName" v-on:hideModal="hideModal"></hydb>
		<yhdl :showModalName="showModalName" v-on:hideModal="hideModal"></yhdl>
		<yhxf :showModalName="showModalName" v-on:hideModal="hideModal"></yhxf>
		<fjxs :showModalName="showModalName" v-on:hideModal="hideModal"></fjxs>
	</view> 
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/hyjzfs/hyjzfs-all.json'
	import hydb from './hyjzfGuo_hydb.vue'
	import yhdl from './hyjzfGuo_yhdl.vue'
	import yhxf from './hyjzfGuo_yhxf.vue'
	import fjxs from './hyjzfGuo_fjxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/hyjzfs/hyjzfs-all.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					hyjzfGuo1: '财综[2018]15号',
					hyjzfGuo_yhdl: '',
					hyjzfGuo_yhxf: '',
					hyjzfGuo_hydb: '旅游娱乐用岛',
					hyjzfGuo_swgzl: '1',
					hyjzfGuo_nx: '1',
					hyjzfGuo_fjxs: '1.0',
					hyjzfGuo_yhzk :'100',
					hyjzfGuo_fl: '',
					hyjzfGuo_sfjj: '',
					type: 'hyjzfGuo'
				},
				multiSelector: {
					hyjzfGuo1: [],
					hyjzfGuo_yhdl: [],
					hyjzfGuo_yhxf: [],
					hyjzfGuo4: '',
					hyjzfGuo5: '',
					hyjzfGuo_fl: '',
				},
				pickerIndex: {
					hyjzfGuo1: 0,
					hyjzfGuo_yhdl: 0,
					hyjzfGuo_yhxf: 0,
				},
				showSelector: {
					hyjzfGuo1: true,
					hyjzfGuo_yhdl: true,
					hyjzfGuo_yhxf: true,
					hyjzfGuo4: true,
					hyjzfGuo5: true,
					hyjzfGuo_fl:false
				},
				index3:0,
				showModalName: null,
				hyjzfGuo_hydb: ['一等','二等','三等','四等','五等','六等'],
				datajson:'',
				modalData: null,  //查看说明
				explain: [
						{
							"id": "1",
							"title": "优惠折扣",
							"text": "各地区取值不同，当地行情决定"
						}
				]
			}
		},
		components: {
			hydb,
			yhdl,
			yhxf,
			fjxs
		},
		methods:{
			PickerChanges(e) {
				this.index3 = e.detail.value
				this.needVal.hyjzfGuo_hydb = this.hyjzfGuo_hydb[this.index3]
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
