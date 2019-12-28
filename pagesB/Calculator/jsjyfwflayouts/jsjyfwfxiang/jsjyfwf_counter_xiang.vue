<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">湖南省建设交易服务费</text>
			</div>
			<form>
				<view class="cu-form-group" v-show="showSelector.jsjyfwfXiang1">
					<view class="title">省份</view>
						<view class="title" >
							{{multiSelector.jsjyfwfXiang1[pickerIndex.jsjyfwfXiang1]}}
						</view>
				</view>
				<view class="cu-form-group" v-show="showSelector.jsjyfwfXiang_standard">
					<view class="title">选择标准</view>
						<view class="title" v-model="needVal.jsjyfwfXiang_standard">
							{{multiSelector.jsjyfwfXiang_standard[pickerIndex.jsjyfwfXiang_standard]}}
						</view>
					<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfXiang_standard">点击查看</button>
				</view>
				<view class="cu-form-group" v-show="showSelector.jsjyfwfXiang_category">
					<view class="title">分类</view>
					<picker class="select" @change="PickerChange" data-name="jsjyfwfXiang_category" :value="pickerIndex.jsjyfwfXiang_category"
					 :range="multiSelector.jsjyfwfXiang_category">
						<view class="picker" >
							{{multiSelector.jsjyfwfXiang_category[pickerIndex.jsjyfwfXiang_category]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
				<view class="cu-form-group" v-show="showSelector.jsjyfwfXiang_sfxm">
					<view class="title">收费项目</view>
					<picker class="select" @change="PickerChange" data-name="jsjyfwfXiang_sfxm" :value="pickerIndex.jsjyfwfXiang_sfxm"
					 :range="multiSelector.jsjyfwfXiang_sfxm">
						<view class="picker" >
							{{multiSelector.jsjyfwfXiang_sfxm[pickerIndex.jsjyfwfXiang_sfxm]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
				</view>
				<view class="cu-form-group" v-show="showSelector.jsjyfwfXiang_jtfl">
					<view class="title">具体分类</view>
					<picker class="select" @change="PickerChange" data-name="jsjyfwfXiang_jtfl" :value="pickerIndex.jsjyfwfXiang_jtfl"
					 :range="multiSelector.jsjyfwfXiang_jtfl">
						<view class="picker" >
							{{multiSelector.jsjyfwfXiang_jtfl[pickerIndex.jsjyfwfXiang_jtfl]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">中标额</view>
					<input type="text" v-model="needVal.jsjyfwfXiang_zbj"></input>
					<uni-tag  text="万元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">收取分配</view>
					<input type="text" v-model="needVal.jsjyfwfXiang_qfbl"></input>
					<uni-tag  text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfXiang_qfbl">点击选择</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">打折折扣</view>
					<input type="text" v-model="needVal.jsjyfwfXiang_discount"></input>
					<uni-tag  text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
				</view>
			</form>
			<explain></explain>
			<qfbl-xiang :showModalName="showModalName" v-on:hideModal="hideModal" :jsjyfwfXiang8="multiSelector.jsjyfwfXiang8"></qfbl-xiang>
	</view>
</template>
	
<script>
		import {
			MultiSelectorsChangeMixin
		} from "@/common/base/multiSelectorsChange.js"
		import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import datajson from '@/common/json/jsjyfwf/jsjyfwf-xiang.json'
		import explain from '@/common/base/explain.vue'
		import qfblXiang from './jsjyfwfXiang_qfbl.vue'
		export default {
			mixins: [counterMixin,MultiSelectorsChangeMixin],
			data() {
				return {
					needVal: {
						jsjyfwfXiang_standard: '',
						jsjyfwfXiang_category: '',
						jsjyfwfXiang_sfxm: '',
						jsjyfwfXiang_jtfl: '',
						jsjyfwfXiang_graded: '',
						jsjyfwfXiang_jj: '',
						jsjyfwfXiang_zbj: '',
						jsjyfwfXiang_qfbl: '100',
						jsjyfwfXiang_discount: '100',
						type: 'jsjyfwfXiang'
					},
					multiSelector: {
						jsjyfwfXiang1: [],
						jsjyfwfXiang_standard: [],
						jsjyfwfXiang_category: [],
						jsjyfwfXiang_sfxm: [],
						jsjyfwfXiang_jtfl: [],
						jsjyfwfXiang_graded: '',
						jsjyfwfXiang_jj: '',
						jsjyfwfXiang8: ''
					},
					showSelector: {
						jsjyfwfXiang1: true,
						jsjyfwfXiang_standard: true,
						jsjyfwfXiang_category: true,
						jsjyfwfXiang_sfxm: true,
						jsjyfwfXiang_jtfl: true,
						jsjyfwfXiang_graded: false,
						jsjyfwfXiang_jj: false,
						jsjyfwfXiang8: false
					},
					pickerIndex: {
						jsjyfwfXiang1: 0,
						jsjyfwfXiang_standard: 0,
						jsjyfwfXiang_category: 0,
						jsjyfwfXiang_sfxm: 0,
						jsjyfwfXiang_jtfl: 0,
					},
					showModalName: null,
					datajson: datajson,
					modalData: null,  //查看说明
					explain: [
						{
							"id": "1",
							"title": "分类",
							"text": "选择建设交易服务收费类别"
						},
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
				uniTag,
				explain,
				qfblXiang
			},
			methods:{
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target)
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>

	