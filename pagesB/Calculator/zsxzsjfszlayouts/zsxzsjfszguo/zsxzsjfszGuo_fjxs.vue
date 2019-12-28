<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">市政工程设计收费附加调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
						<view class="lt">
							<view class="white-space text-left" >
								<p v-for="(v,k) in item.list" :key="k"
								 @tap="assignment" :data-val="v.val" class="wupx font w-100 p-2 border-bottom border-blue lt mb-1">
									<view class="dlfxs lt">{{v.content}}</view>
									<text class="bg-blue p-1 rt ">{{v.val}}</text> </p>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
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
				modalName:'zsxzsjfszGuo_fjtz',
				dataList:[
					{
						title:"1.道路工程",
						list:[
							{content:"1. 城市道路通过地下管网密集区 ",val:"1.1" },
							{content:"2. 海绵城市及道路下方敷设管廊 （系数范围：1.1 - 1.2）",val:"1.15" },
							{content:"3. 跨越铁路、地铁等既有构筑物",val:"1.3" },
							{content:"4. 道路维修、改扩建 （系数范围：1.2 - 1.4）",val:"1.3" },
						]
					},
					{
						title:"2.城市立交、桥梁、隧道工程",
						list:[
							{content:"1. 桥梁、隧道通过地下管网密集区和敏感建筑群",val:"1.1" },
							{content:"2. 桥梁景观照明",val:"1.3" },
							{content:"3. 桥梁、隧道工程改扩建",val:"1.2" },
							{content:"4. 景观桥梁（含景观人行天桥）（系数范围：1.5 - 2.0）",val:"1.75" },
							{content:"5. 现况桥梁、隧道维修加固(含安全设施维修加固)",val:"2.0" },
							{content:"6. Ⅰ级工程附加",val:"2.0" },
						]
					},
					{
						title:"3.公共交通工程",
						list:[
							{content:"1. 快速公交系统（BRT）穿越城市中心密集区域、公交场站改造",val:"1.1" },
							{content:"2. 运营智能信息系统",val:"1.3" },
							{content:"3. 城市客运交通枢纽改造",val:"1.4" },
							{content:"4. 城市客运交通枢纽位于中心城区、城市重点地段或换乘高架、地面车站",val:"1.5" },
							{content:"5. 城市客运交通枢纽二次装修工程设计",val:"2.0" },
							{content:"6. Ⅰ级工程附加",val:"2.0" },
							{content:"7. 城市客运交通枢纽导向标识",val:"3.0" },
						]
					},
					{
						title:"4.给排水工程",
						list:[
							{content:"1. 各类给排水管线（含综合管沟）穿越管网密集区或穿越既有建构筑物（铁路、地铁、河道及道路等）",val:"1.1" },
							{content:"2. 净水厂、污水处理厂、再生水厂及泵站",val:"1.1" },
							{content:"3. 给排水管线（含综合管沟）改扩建",val:"1.1" },
							{content:"4. 海绵城市、雨水收储设施",val:"1.1" },
							{content:"5. 地下式净水厂、污水处理厂及再生水厂 （系数范围：1.2 - 1.3）",val:"1.25" },
							{content:"6. 二次供水系统改扩建 （系数范围：1.2 - 1.3）",val:"1.25" },
							{content:"7. 厂站改扩建",val:"1.4" },
						]
					},
					{
						title:"5.环境卫生工程",
						list:[
							{content:"1. 垃圾转运、处理处置设施工程含有渗滤液处理",val:"1.1" },
							{content:"2. 垃圾处理工程中含能源利用",val:"1.15" },
							{content:"3. 废物处理处置工程含综合利用",val:"1.4" },
						]
					},
					{
						title:"6.燃气热力工程",
						list:[
							{content:" 燃气热力工程改扩建",val:"1.4" },
						]
					},
					{
						title:"7.城市轨道交通工程",
						list:[
							{content:" 1. 土建工程穿越地下管网及建筑物、构筑物密集地区",val:"1.1" },
							{content:" 2.1 高架、地面车站位于城市新区、开发区，周边交通环境简单",val:"1.3" },
							{content:" 2.2 高架、地面车站位于城市一般地区",val:"1.4" },
							{content:" 2.3 高架、地面车站位于中心城区、城市重点地段或换乘高架、地面车站",val:"1.5" },
							{content:" 3.1 普通地下车站",val:"1.1" },
							{content:" 3.2 换乘地下站或位于中心城区、城市重点地段的普通地下车站",val:"1.2" },
							{content:" 3.3 位于中心城区、城市重点地段的换乘地下车站",val:"1.3" },
							{content:" 3.4 多线换乘以及换乘设计涉及既有车站改造的地下车站",val:"1.5" },
							{content:" 4. 控制中心、指挥中心",val:"1.2" },
							{content:" 5.1 停车场",val:"1.1" },
							{content:" 5.2 车辆段",val:"1.3" },
							{content:" 5.3 涉及上盖开发的停车场、车辆段",val:"1.5" },
							{content:" 6. 既有线改扩建",val:"1.4" },
							{content:" 7. 装修与景观 ",val:"2.0" },
							{content:" 8. 导向标识（换乘站取上限）（系数范围：2.5 - 3.0）",val:"2.75" },
						]
					},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		
	}
</script>

<style scoped>
	.content1{
		width: 83%;
		/* height: 70upx; */
		line-height: 70upx;
		white-space: pre-line;
	}
	.text{ 
		height: 0;
		line-height: 4upx;
		border-radius: 25upx;
		margin-top: 15upx;
		float: right;
	}
	.wupx{
		width: 690upx;
	}
	
</style>
