<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.sgtscfHu1">
				<view class="title">选择省份</view>
				<view class="title m-left">
					上海市
				</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.sgtscfHu_standard">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.sgtscfHu_standard">
						施工图设计文件审查费
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1651)">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">项目</view>
				<picker class="select" @change="PickerChange" :value="index" :range="sgtscfHu_category">
					<view class="picker">
						{{sgtscfHu_category[index]}}
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">计费额</view>
				<input v-model="needVal.sgtscfHu_gcl" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.sgtscfHei_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					sgtscfHu_standard: '',
					sgtscfHu_category: '施工图设计文件审查费',
					sgtscfHu_gcl: '',
					sgtscfHu_fl: '0.72|1.67|3.10|8.31|13.10|20.00|24.40|45.20|84.40|121.20|157|191|334|620|834|1000|1130|1760',
					sgtscfHu_graded: '200|500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000|2000000',
					sgtscfHu_discount: '100',
					type: 'sgtscfHu'
				},
				modalData: null,
				showModalName:null,
				explain: [
					{
						"id": "sgthei1",
						"title": "项目类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "sgthei4",
						"title": "打折折扣",
						"text": "根据各地区市场行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
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
