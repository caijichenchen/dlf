<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">岩土工程勘探地层复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
									v-for="(item, index) in tzxsList" 
									:key="index" 
									@tap="assignment" 
									:data-val="item.val"
									>
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.content}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.val}}
							</span>
						</view>
					</view>
					<!-- <view class="lt font p-1 text-left" style="white-space: pre-wrap;">
						<view>注:</view>
							<view>附加调整系数为两个或两个以上的, 附加调整系数相加。</view>
					</view> -->
					
				</view>
				
			</view>
			<view>注:大型建筑工程指建筑装饰工程设计面积20001㎡以上的建筑,中型指5001~20000㎡的建筑,小型指5000㎡以下的建筑</view>
		</view>
		
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'jzzssjsfGuo_fjtz',
				tzxsList:[
					{content:"1.功能单一、技术要求简单的小型公共建筑的建筑装饰工程,如:相当于二星级酒店及以下标准的佳宅。办公楼,商,图书馆,餐厅等 2.简单的设备用房及其他配套用房工程3.简单的建筑室外装饰工程",val:"I级"},
					{content:"1.大中型公共建筑的建筑装饰工程,如:相当于三星级酒店标准的高档住宅、酒店、办公楼、影剧院、游乐场、商场、图书馆、咖啡厅等2.技术要求较复杂或有地区性意义的小型公共建筑工程3.仿古建筑、一般标准的古建筑、保护性建筑以及地下建筑工程4.一般标准的建筑室外装饰工程",val:"II级"},
					{content:"1.高级大型公共建筑的建筑装饰工程,如:相当于四、五星级及以上标准的豪华住宅及别墅、酒店、会所、夜总会、餐厅、博物馆、办公楼、医院、航空港、商业空间等2.技术要求复杂或具有经济、文化、历史等意义的省(市)级中小型公共建筑工程3.高标准的古建筑、保护性建筑和地下建筑工程4.高标准的建筑室外装饰工程5.高级特殊声学装修工程",val:"III级"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			
		}
	}
</script>

<style >
	
	
</style>