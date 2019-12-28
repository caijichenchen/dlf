<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">浙江省白蚁防治费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">选择省份</view>
					<picker class="select" v-model="needVal.byfzfZhe_xzsf" :range="picker">
						<view class="picker" name="byfzfZhe_xzsf">
							浙江
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">选择标准</view>
					<picker class="select" v-model="needVal.byfzfZhe_standard" :range="picker1">
						<view class="picker" name="byfzfZhe_standard">
							浙价费〔2015〕33号
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">选择技术</view>
					<picker class="select" @change="PickerChange0" v-model="needVal.byfzfZhe_xzjs" :range="picker3">
						<view class="picker" name="byfzfZhe_xzjs">
							{{index1>-1?picker3[index1]:'监测控制技术'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">建筑面积</view>
					<input type="text"  id="sjf" v-model="needVal.byfzfZhe_jzmj"></input>
					<uni-tag text="平方米" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group" v-show="index1 == 0">
					<view class="title">选择项目</view>
					<picker class="select" @change="PickerChange" v-model="needVal.byfzfZhe_category" :range="picker2">
						<view class="picker" name="byfzfZhe_category">
							{{index>-1?picker2[index]:'别墅（排屋等）'}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[0]">查看说明</button>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="byfzfZhe_discount" v-model="needVal.byfzfZhe_discount" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="explain[1]">查看说明</button>
				</view>
			</form>
			<!-- 查看说明 -->
			<explain></explain>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					byfzfZhe_category: "别墅（排屋等）",
					byfzfZhe_discount: "100",
					byfzfZhe_fl: "10",
					byfzfZhe_jzmj: "100",
					byfzfZhe_standard: "浙价费〔2015〕33号",
					byfzfZhe_xzjs: "监测控制技术",
					type: "byfzfZhe",

				},
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				picker:['浙江'],
				picker1:['浙价费〔2015〕33号'],
				picker2: ['别墅（排屋等）', '12层及以下的建筑', '13层（含13层）以上的建筑'],
				picker3: ['监测控制技术', '化学药物'],
				index:'0',
				index1:'0',
				
				explain: [{
						"id": "1",
						"title": "选择项目",
						"text": "各地区取值略有不同"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "除按国家、省统一的政策权限规定进行打折"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
		},
		methods:{
			PickerChange0(e) {
				this.index1 = e.detail.value
				// this.afterPicker(this.index)
				if(this.index1 == 1){
					this.needVal.byfzfZhe_category ="hiddenhidden"
					 this.needVal.byfzfZhe_fl = "2"
					 this.needVal.byfzfZhe_xzjs = "化学药物"
				}
			},
			PickerChange(e) {
				this.index = e.detail.value
				this.afterPicker(this.index)
			},
			afterPicker(index){
				this.index = index
				this.needVal.byfzfZhe_category = this.picker2[index]
				console.log(this.needVal.byfzfZhe_category );
				if(this.needVal.byfzfZhe_category == "12层及以下的建筑"){
					this.needVal.byfzfZhe_fl = "4"
				}else if(this.needVal.byfzfZhe_category == "13层（含13层）以上的建筑"){
					this.needVal.byfzfZhe_fl = "3"
				}else{
					this.needVal.byfzfZhe_fl = "10"
				}
			},
			//查看说明
			showdzzk(e) {
				this.modalData = e.currentTarget.dataset.target
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
