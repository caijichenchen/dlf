<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-bmine lt pl-2 " style="margin-top: 5upx;">福建省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						闽监管协〔2015〕13号
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计费额</view>
				<input type="text"  v-model="needVal.jlfMin_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="text"  v-model="needVal.jlfMin_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfMin_zytz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="text"  v-model="needVal.jlfMin_fztz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfMin_fztz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">服务质量系数</view>
				<input type="text"  v-model="needVal.jlfMin_fwzlxs"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfMin_fwzlxs">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input  v-model="needVal.jlfMin_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<jlfmin-fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfmin-fztz>
			<jlfmin-zytz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfmin-zytz>
			<jlfmin-fwzlxs v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></jlfmin-fwzlxs>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import jlfminFztz from "./jlfMin_fztz.vue"
	import jlfminZytz from "./jlfMin_zytz.vue"
	import jlfminFwzlxs from "./jlfMin_fwzlxs.vue"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfMin_discount: "100",
					jlfMin_fl: "16.5|30.1|78.1|120.8|181.0|218.6|393.4|708.2|991.4|1255.8|1507.0|2712.5|4882.6|6835.6|8658.4|10390.1",
					jlfMin_jfe: "",
					jlfMin_fwzlxs: "1.0",
					jlfMin_fztz: "1.0",
					jlfMin_zytz: "1.0",
					jlfMin_qjjfe: "500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000",
					jlfMin_standard: "闽监管协〔2015〕13号",
					type: "jlfMin",
				},
				modalData: null,  //查看说明
				showModalName: null,
				radio: 'radio1',
				selected: 'A',
				shows: 1,
				picker1:['闽监管协〔2015〕13号'],
				index:'闽监管协〔2015〕13号',
				picker2: ['I级', 'II级', 'III级'],
				explain: [{
						"id": "1",
						"title": "监理费收费计费额",
						"text": "1.计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置费和联合试运转费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "各地区取值略有不同请根据实际标准自行修改"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			jlfminFztz,
			jlfminZytz,
			jlfminFwzlxs
		},
		methods:{
			PickerChange(e) {
				this.index = e.detail.vamine
				console.log(e.detail.vamine);
			},
			afterPicker(index){
				this.index = index
				this.needVal.zsxzsjfszGuo_fztz = this.picker2[index]
			},
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	