<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">城市规划设计收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.csghYue_xzqy">
				<view class="title">选择区域</view>
				<view class="title m-left">{{multiSelector.csghYue_xzqy[pickerIndex.csghYue_xzqy]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue_ghbz">
				<view class="title">规划标准</view>
				<picker class="select" @change="PickerChange" data-name="csghYue_ghbz" :value="pickerIndex.csghYue_ghbz"
				 :range="multiSelector.csghYue_ghbz">
					<view class="picker">
						{{multiSelector.csghYue_ghbz[pickerIndex.csghYue_ghbz]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue_ghlx">
				<view class="title" >规划类型</view>
				<picker class="select" @change="PickerChange" data-name="csghYue_ghlx" :value="pickerIndex.csghYue_ghlx"
				 :range="multiSelector.csghYue_ghlx">
					<view class="picker">
						{{multiSelector.csghYue_ghlx[pickerIndex.csghYue_ghlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="csghYue_ghlx">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue_xflx">
				<view class="title" >细分类型</view>
				<picker class="select" @change="PickerChange" data-name="csghYue_xflx" :value="pickerIndex.csghYue_xflx"
				 :range="multiSelector.csghYue_xflx">
					<view class="picker">
						{{multiSelector.csghYue_xflx[pickerIndex.csghYue_xflx]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue5 || showSelector.csghYue_qyzmjdw">
				<view class="title">{{multiSelector.csghYue5}}</view>
				<input type="digit" v-model="needVal.csghYue_qyzmj" /></input>
				<uni-tag :text="multiSelector.csghYue_qyzmjdw" type="defult" v-model="needVal.csghYue_qyzmjdw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue10">
				<view class="title">{{multiSelector.csghYue10}}</view>
				<input type="digit" v-model="needVal.csghYue_tzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="csghYue_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue12">
				<view class="title">{{multiSelector.csghYue12}}</view>
				<input type="digit" v-model="needVal.csghYue_fzxs" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="csghYue_fzxs">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.csghYue14">
				<view class="title">{{multiSelector.csghYue14}}</view>
				<input type="digit" v-model="needVal.csghYue_sffd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="csghYue_sffd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >专题研究</view>
				<picker class="select" @change="PickerChanges" :value="index"
				 :range="csghYue_ztyj">
					<view class="picker">
						{{csghYue_ztyj[index]}}
					</view>
				</picker>
				<input type="digit" v-model="needVal.csghYue_sl" /></input>
				<uni-tag text="个" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.csghYue_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<explain></explain>
			<sffd-yue :showModalName="showModalName" v-on:hideModal="hideModal"></sffd-yue>
			<fzxs-yue :showModalName="showModalName" v-on:hideModal="hideModal"></fzxs-yue>
			<tzxs-yue :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-yue>
			<ghlx-yue :showModalName="showModalName" v-on:hideModal="hideModal"></ghlx-yue>
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
	// import datajson from '@/common/json/csghs.json'
	import sffdYue from './csghYue_sffd.vue'
	import fzxsYue from './csghYue_fzxs.vue'
	import tzxsYue from './csghYue_tzxs.vue'
	import ghlxYue from './csghYue_ghlx.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csghYue_xzqy: '',
					csghYue_ghbz: '',
					csghYue_ghlx: '',
					csghYue_xflx: '',
					csghYue_qyzmj: '',
					csghYue_qyzmjdw: '',
					csghYue_sfdj: '',
					csghYue_sfjj: '',
					csghYue_dz: '',
					csghYue_tzxs: '1.0',
					csghYue_fzxs: '1.0',
					csghYue_sffd: '100',
					csghYue_ztyj: '小城市',
					csghYue_sl: '',
					csghYue_yhzk: '90',
					csghYue_nums: '',
					type: 'csghYue'
				},
				multiSelector: {
					csghYue_xzqy: [],
					csghYue_ghbz: [],
					csghYue_ghlx: [],
					csghYue_xflx: [],
					csghYue5: '',
					csghYue_sfdj: '',
					csghYue_sfjj: '',
					csghYue_qyzmjdw: '',//8
					csghYue_dz: '',
					csghYue10: '',
					csghYue11: '',
					csghYue12: '',
					csghYue13: '',
					csghYue14: '',
					csghYue15: '',
					csghYue16: ''
				},
				pickerIndex: {
					csghYue_xzqy: 0,
					csghYue_ghbz: 0,
					csghYue_ghlx: 0,
					csghYue_xflx: 0,
				},
				showSelector: {
					csghYue_xzqy: true,
					csghYue_ghbz: true,
					csghYue_ghlx: true,
					csghYue_xflx: false,
					csghYue5: true,
					csghYue_sfdj: false,
					csghYue_sfjj: false,
					csghYue_qyzmjdw: true,//8
					csghYue_dz: false,
					csghYue10: true,
					csghYue11: false,
					csghYue12: true,
					csghYue13: false,
					csghYue14: true,
					csghYue15: false,
					csghYue16: false
				},
				csghYue_ztyj: ['小城市','中等城市','大城市','特区城市','省域或区域'],
				index: 0,
				showModalName: null,
				datajson:'',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "规划标准",
						"text": "不同市县标准可能不一样"
					},
					{
						"id": "7",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/csghs.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			sffdYue,
			fzxsYue,
			tzxsYue,
			ghlxYue
		},
		methods:{
			PickerChanges(e) {
				this.index = e.detail.value
				this.needVal.csghYue_ztyj = this.csghYue_ztyj[this.index]
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
