<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省建设交易服务费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">省份</view>
					<view class="title m-left" >
						河北省
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.jsjyfwfJi_standard">
						冀价经费字〔2002〕43号
					</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1619)">点击查看</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">收费项目</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="jsjyfwfJi_category">
					<view class="picker" >
						{{jsjyfwfJi_category[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">中标价</view>
				<input type="text" v-model="needVal.jsjyfwfJi_zbj"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">收取分配</view>
				<input type="text" v-model="needVal.jsjyfwfJi_qfbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfJi_qfbl">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jsjyfwfJi_discount"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<qfbl-ba :showModalName="showModalName" v-on:hideModal="hideModal"></qfbl-ba>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import qfblBa from './jsjyfwfBa_qfbl.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jsjyfwfJi_standard: '',
					jsjyfwfJi_category: '各类建设工程及材料、设备采购招标投标项目交易服务收费',
					jsjyfwfJi_zbj: '',
					jsjyfwfJi_qfbl: '100',
					jsjyfwfJi_discount: '100',
					jsjyfwfJi_graded : '0|500|1000|2000|3000',
					jsjyfwfJi_fl : '5000|9000|13000|17000|25000',
					type: 'jsjyfwfJi'
				},
				showModalName: null,
				jsjyfwfJi_category: ['各类建设工程及材料、设备采购招标投标项目交易服务收费','勘察、设计、监理招标投标项目交易服务收费'],
				index0:0,
				explain: [
					{
						"id": "2",
						"title": "收费项目",
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
			PickerChanges(e){
				this.index0 = e.target.value
				this.needVal.jsjyfwfJi_category = this.jsjyfwfJi_category[this.index0]
				if(this.index0 == 0){
					this.needVal.jsjyfwfJi_graded = '0|500|1000|2000|3000'
					this.needVal.jsjyfwfJi_fl = '5000|9000|13000|17000|25000'
				}else if(this.index0 == 1){
					this.needVal.jsjyfwfJi_graded = '0|5|10|20'
					this.needVal.jsjyfwfJi_fl = '1500|2000|2500'
				}
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

	