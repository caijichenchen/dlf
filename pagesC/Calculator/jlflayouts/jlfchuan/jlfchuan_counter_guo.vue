<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省监理费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker m-left" >
					川价函[2007]169号
				</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfChuan_jfe"></input>
				<uni-tag text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="digit" v-model="needVal.jlfChuan_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfChuan_zytz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfChuan_fztz" data-index="index0" :value="index0" :range="jlfChuan_fztz">
					<view class="picker" name="sjfGui_fztz">
						{{jlfChuan_fztz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfChuan_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input type="digit" v-model="needVal.jlfChuan_gctz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfChuan_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.jlfChuan_fdfd"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfChuan_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<zytz :showModalName="showModalName" v-on:hideModal="hideModal"></zytz>
			<fztz :showModalName="showModalName" v-on:hideModal="hideModal"></fztz>
			<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import zytz from './jlfChuan_zytz.vue'
	import gctz from '@/common/base/gctz.vue'
	import fztz from './jlfChuan_fztz.vue'
	export default {
		mixins: [counterMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					jlfChuan_discount: "50",
					jlfChuan_jfe: "",
					jlfChuan_fl: "16.5|30.1|78.1|120.8|181.0|218.6|393.4|708.2|991.4|1255.8|1507.0|2712.5|4882.6|6835.6|8658.4|10390.1",
					jlfChuan_zytz: 1.0,
					jlfChuan_gctz: '1.0',
					jlfChuan_fztz: '',
					jlfChuan_fdfd: '80',
					jlfChuan_standard: "川价函[2007]169号",
					jlfChuan_gcfztzdj: 'I级|II级|III级|II级双线|铁路III级|穿II级|穿III级',
					jlfChuan_gcfztzxs: '0.85|1.0|1.15|0.85|0.95|1.1|1.26',
					jlfChuan_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
					type: "jlfChuan",
				},
				modalData: null,  //查看说明
				showModalName: null,
				jlfChuan_fztz: ['I级','II级','III级','II级双线','铁路III级','穿II级','穿III级'],
				modalName: 'jlfChuan_gctz',
				index0:0,
				explain: [{
						"id": "1",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			zytz,
			gctz,
			fztz
		},
		watch:{
			inval(val){
				this.needVal.jlfChuan_jfe = val
			}
		}
	}
</script>

<style>

</style>
	