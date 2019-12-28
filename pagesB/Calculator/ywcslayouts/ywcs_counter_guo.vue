<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">原位测试收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.ywcsGuo_xzxm">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-index='index0' data-name="ywcsGuo_xzxm" :value="pickerIndex.index0"
				 :range="multiSelector.ywcsGuo_xzxm">
					<view class="picker">
						{{multiSelector.ywcsGuo_xzxm[pickerIndex.index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_xzxm">查看说明</button>
			</view>
			
			<view class="cu-form-group" v-show="showSelector.ywcsGuo_jcff">
				<view class="title">检测方法</view>
				<picker class="select" @change="PickerChange" data-index='index1' data-name="ywcsGuo_jcff" :value="pickerIndex.index1"
				 :range="multiSelector.ywcsGuo_jcff">
					<view class="picker">
						{{multiSelector.ywcsGuo_jcff[pickerIndex.index1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_jcff">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ywcsGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-index='index2' data-name="ywcsGuo_xzlx" :value="pickerIndex.index2"
				 :range="multiSelector.ywcsGuo_xzlx">
					<view class="picker">
						{{multiSelector.ywcsGuo_xzlx[pickerIndex.index2]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_xzlx">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.ywcsGuo_swgzl" /></input>
				<uni-tag text="%" type="defult" v-model="needVal.ywcsGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">复杂程度</view>
				<picker class="select" @change="PickerChanges" v-model="needVal.ywcsGuo_fzcd" :value="pickerIndex.index3"
				 :range="ywcsGuo_fzcd">
					<view class="picker">
						{{ywcsGuo_fzcd[pickerIndex.index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.ywcsGuo_xzlx1">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-index='index4' data-name="ywcsGuo_xzlx1" :value="pickerIndex.index4"
				 :range="multiSelector.ywcsGuo_xzlx1">
					<view class="picker">
						{{multiSelector.ywcsGuo_xzlx1[pickerIndex.index4]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_xzlx1">查看说明</button>
			</view>

			<view class="cu-form-group">
				
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChangess" v-model="needVal.ywcsGuo_qwfjtz" :value="pickerIndex.index5"
				 :range="ywcsGuo_qwfjtz">
					<view class="picker">
						{{ywcsGuo_qwfjtz[pickerIndex.index5]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_qwfjtz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.ywcsGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.ywcsGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.ywcsGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_fdfd">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.ywcsGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" data-target="ywcsGuo_yhzk">查看说明</button>
			</view>
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
	import datajson from '@/common/json/ywces.json'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	// import jnpgfZheFjtz from './jnpgfZhe_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					ywcsGuo_xzxm: '',
					ywcsGuo_jcff: '',
					ywcsGuo_xzlx: '',
					ywcsGuo_swgzl: '',
					ywcsGuo_swgzldw: '',
					ywcsGuo_fzcd: '',
					ywcsGuo_sfjj: '',
					ywcsGuo_qwfjtz: '',
					ywcsGuo_fjtz: '',
					ywcsGuo_gctz: '',
					ywcsGuo_fdfd: '',
					ywcsGuo_yhzk: '',
					ywcsGuo_nums: '',
				},
				multiSelector: {
					ywcsGuo_xzxm: [],
					ywcsGuo_swgzldw: '',
					ywcsGuo_jcff: [],
					ywcsGuo_xzlx: [],
					
					
					ywcsGuo_xzlx1: [],
					ywcsGuo_sfjj: '',
				},
				pickerIndex: {
					index0: 0,
					index1: 0,
					index2: 0,
					index3: 0,
					index4: 0,
					index5: 0
				},
				showSelector: {
					ywcsGuo_xzxm: true,
					ywcsGuo_swgzldw: true,
					ywcsGuo_jcff: true,
					ywcsGuo_xzlx: true,
					
					
					ywcsGuo_xzlx1: true,
					ywcsGuo_sfjj: false,
				},
				datajson:datajson,
				ywcsGuo_fzcd: ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ'],
				ywcsGuo_qwfjtz: ['1.0','1.2'],
				modalData: null,
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			uniTag,
			// jnpgfZheFjtz,
		
		},
		methods:{
			PickerChanges(e){
				this.pickerIndex.index3 = e.detail.value
			},
			PickerChanges(e){
				this.pickerIndex.index5 = e.detail.value
			},
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
