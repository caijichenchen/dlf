<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省环境影响评价费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">省份</view>
					<picker class="select" @change="PickerChange"  :range="picker1">
						<view class="picker" >
							浙江省
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" @change="PickerChange" v-model="needVal.jsjyfwfZhe_standard" :range="picker2">
						<view class="picker" >
							浙价服〔2013〕85号
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">中标价</view>
					<input type="text" id="sjf" v-model="needVal.jsjyfwfZhe_gstze"></input>
					<uni-tag  text="万元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">收取分配</view>
					<input name="sjfZhe_discount" v-model="needVal.jsjyfwfZhe_qfbl" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showModal" data-target="jsjyfwfZhe_qfbl">点击选择</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">浮动幅度</view>
					<input type="text" id="sjf" v-model="needVal.jsjyfwfZhe_fdfd"></input>
					<uni-tag  text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">打折折扣</view>
					<input type="text" id="sjf" v-model="needVal.jsjyfwfZhe_discount"></input>
					<uni-tag  text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
				</view>
			</form>
			<explain></explain>
			<jsjyfwff-zhe-hytzxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jsjyfwff-zhe-hytzxs>
			
	</view>
</template>
	
<script>
		import explain from '@/common/base/explain.vue'
		import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import jsjyfwffZheHytzxs from "./jsjyfwfZhe_sqfp.vue"
		
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						jsjyfwfZhe_discount: "100",
						jsjyfwfZhe_fdfd: "100",
						jsjyfwfZhe_fl: "0.2|0.5|1.5|2.5|3.5|5|7|10|12",
						jsjyfwfZhe_graded: "0|200|500|1000|2000|5000|10000|50000|100000",
						jsjyfwfZhe_qfbl: "100",
						jsjyfwfZhe_standard: "浙价服〔2018〕68号",
						jsjyfwfZhe_zbj: "100",
						type: "jsjyfwfZhe"
					},
					showModalName: null,
					radio: 'radio1',
					selected: 'A',
					shows: 1,
					picker1: ['浙江省'],
					picker2: ['浙价服〔2018〕68号'],
					index:'0',
					explain: [{
							"id": "1",
							"title": "浮动幅度",
							"text": "工程总承包项目收费标准可适当上浮，上浮幅度不超过25%，其他项目收费标准不得上浮，下浮不限"
						},
						{
							"id": "2",
							"title": "打折折扣",
							"text": "可以根据自己实际情况选择折扣"
						}
					]
				}
			},
			components: {
				uniTag,
				jsjyfwffZheHytzxs,
				explain
			},
			methods:{
				showdzzk(e) {
					this.modalData = e.currentTarget.dataset.target
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>

	