<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">重庆市建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfBa1">
				<view class="title">省份</view>
					<view class="title m-left" >
						{{multiSelector.jsjyfwfBa1[pickerIndex.jsjyfwfBa1]}}
					</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfBa_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfBa_standard">
						{{multiSelector.jsjyfwfBa_standard[pickerIndex.jsjyfwfBa_standard]}}
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1820,multiSelector.jsjyfwfBa_standard[pickerIndex.jsjyfwfBa_standard])">点击查看</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfBa_sfxm">
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfBa_sfxm" :value="pickerIndex.jsjyfwfBa_sfxm"
				 :range="multiSelector.jsjyfwfBa_sfxm">
					<view class="picker" >
						{{multiSelector.jsjyfwfBa_sfxm[pickerIndex.jsjyfwfBa_sfxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jsjyfwfBa_jtfl">
				<view class="title">具体分类</view>
				<picker class="select" @change="PickerChange" data-name="jsjyfwfBa_jtfl" :value="pickerIndex.jsjyfwfBa_jtfl"
				 :range="multiSelector.jsjyfwfBa_jtfl">
					<view class="picker" >
						{{multiSelector.jsjyfwfBa_jtfl[pickerIndex.jsjyfwfBa_jtfl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标额</view>
				<input type="text" v-model="needVal.jsjyfwfBa_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">收取分配</view>
				<input type="text" v-model="needVal.jsjyfwfBa_qfbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfBa_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsjyfwfBa_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl-ba :showModalName="showModalName" v-on:hideModal="hideModal" :jsjyfwfBa7="multiSelector.jsjyfwfBa7"></qfbl-ba>
	</view>
</template>
	
<script>
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import {counterMixin} from "@/common/base/counterMixin"
		import datajson from '@/common/json/jsjyfwf/jsjyfwf-ba.json'
		import qfblBa from './jsjyfwfBa_qfbl.vue'
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			data() {
				return {
					needVal: {
						jsjyfwfBa_standard: '',
						jsjyfwfBa_sfxm: '',
						jsjyfwfBa_jtfl: '',
						jsjyfwfBa_graded: '',
						jsjyfwfBa_jj: '',
						jsjyfwfBa_zbj: '',
						jsjyfwfBa_qfbl: '100',
						jsjyfwfBa_discount: '100',
						type: 'jsjyfwfBa'
					},
					multiSelector: {
						jsjyfwfBa1: [],
						jsjyfwfBa_standard: [],
						jsjyfwfBa_sfxm: [],
						jsjyfwfBa_jtfl: [],
						jsjyfwfBa_graded: '',
						jsjyfwfBa_jj: '',
						jsjyfwfBa7: ''
					},
					showSelector: {
						jsjyfwfBa1: true,
						jsjyfwfBa_standard: true,
						jsjyfwfBa_sfxm: true,
						jsjyfwfBa_jtfl: true,
						jsjyfwfBa_graded: false,
						jsjyfwfBa_jj: false,
						jsjyfwfBa7: false
					},
					pickerIndex: {
						jsjyfwfBa1: 0,
						jsjyfwfBa_standard: 0,
						jsjyfwfBa_sfxm: 0,
						jsjyfwfBa_jtfl: 0
					},
					showModalName: null,
					datajson: datajson,
					explain: [
						{
							"id": "2",
							"title": "收费项目",
							"text": "选择建设交易服务收费类别"
						},
						{
							"id": "3",
							"title": "具体分类",
							"text": "选择建设交易服务收费类别"
						},
						{
							"id": "4",
							"title": "打折折扣",
							"text": "可以根据自己实际情况选择折扣"
						}
					]
				}
			},
			components: {
				qfblBa
			},
			methods:{
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target)
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>

	