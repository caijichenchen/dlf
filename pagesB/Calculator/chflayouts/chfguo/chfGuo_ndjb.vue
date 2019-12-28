<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" catchtouchmove="false" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">勘察费-勘察复杂程度表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="lt" >
				<uni-collapse animation="outer">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title" style="white-space: pre-wrap;">
						<view class="title-box">
							<view class="title"
									v-for="(i,k) in item.itemobj"
									:key="k"
									:class="isactive === k ? 'active' : ''"
									@click="addClass(k)"
							>
								<view style="font-size: 0.5rem; color: #666;">{{i.itemtitle}}</view>
							</view>
						</view>
						<view class="dlf-group lt">
							<view class="w-100 dlf-li font lt"
										v-for="(j, m) in item.itemobj[isactive]" 
										:key="m" 
										@tap="assignment" 
										>
								<!-- <view class="lt" style="width: 87%; white-space: pre-wrap;">
									{{j.content}}
								</view>
								<span class="ml-2 my-1 text-blue" >
									{{j.name}}
								</span> -->
								<view style="font-size: 0.5rem; color: #666;">{{item.itemobj[isactive].list}}</view>
							</view>
						</view>
						<view class="lt font p-2 text-left" style="white-space: pre-wrap;" v-if="item.explanation">
							<view>注:</view>
								<view>{{item.explanation}}</view>
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
				modalName:'chfGuo_ndjb',
				isactive: 0,
				dataList: [
					{
						title: '(一)渡河水准',
						explanation: '河宽>2000米时,依据专项设计和实际情况核算定额',
						itemobj:[
							{
								itemtitle: '地区',
								list: [
									{
										content: '河宽≤500米',
										name: 'Ⅰ级',
									},
									{
										content: '1.500米<河宽≤2000米',
										name: 'Ⅱ级'
									},
								]
							}
						]
					},
					{
						title: '(二)GPS连续运行站建设',
						explanation: '还行站基建定额根据具体实际另行核算',
						itemobj:[
							{
								itemtitle: '地区',
								list: [
									{
										content: '站址选在中、小城市,便于埋石',
										name: 'Ⅰ级',
									},
									{
										content: '站址位于丘陵,山区',
										name: 'Ⅱ级'
									},
									{
										content: '站址位于交通困难地区或人口密集的特大城市',
										name: 'Ⅲ级'
									},
								]
							}
						]
					},
					{
						title: '(三)GPS连续运行站运行',
						itemobj:[
							{
								itemtitle: '地区',
								list: [
									{
										content: '交通、生活条件便利,附属设施齐全,可自动下载传输观测数据',
										name: 'Ⅰ级',
									},
									{
										content: '交通、生活条件便利,附属设施基本齐全,需人工下载或传输观测数据',
										name: 'Ⅱ级'
									},
									{
										content: '交通不便、无固定观测室,附属设施不完善,需24小时值守',
										name: 'Ⅲ级'
									},
								]
							}
						]
					},
					{
						title: '(四)1:2000~1:500摄影测量与遥感外业控制测量(含测图控制)',
						itemobj:[
							{
								itemtitle: '一般地区',
								list: [
									{
										content: '1.通行通视条件好,刺点目标较少或判读刺点容易的平地2.道行通视和判读刺点均不困难的丘陵地、山地',
										name: 'Ⅰ级',
									},
									{
										content: '1.易于判读刺点,通行通视较困难的平地、沼泽、盐碱地和树林(竹林)覆盖占图面10%~40%的平地、丘陵地,山地;或通视条件较好,刺点目标稀少的平地、沙漠、草原及隐蔽的半水网区2.通视条件较好,刺点目标稀少和通行较困难的丘陵地,山地及通视条件好的高山地',
										name: 'Ⅱ级'
									},
									{
										content: '1.居民地凋密,通视困难的平地,刺点目标稀少,通行通视因难的沼泽地、盐碱地及各类沙丘、沙窝地区和树林(竹林)占图面40%以上的平地、丘陵地、山地,以及河流沟渠纵横交错,通行困难的水网区2地貌切割强烈,有悬崖绝壁,攀登困难且较隐蔽的高山区',
										name: 'Ⅲ级'
									},
								]
							},
							{
								itemtitle: '建筑与工业区',
								list: [
									{
										content: '1.通视条件好,有规律的房屋与其他建筑物占图面40%以内,或无规律的房屋占图面25%以内的平地2.通视条件好,有规律的房屋与其他建筑物占图面20%以内,或无规律的房屋占图面10%以内,地域开阔的丘陵地',
										name: 'Ⅰ级',
									},
									{
										content: '1,部分地区通视较困难,有规律的房屋与其他建筑物占图面40%~60%;或无规律的房屋占图面25%~40%的平地2.通视较难,有规律的房屋与其他建筑物占图面20%~40%;或无规律的房屋占图面10%~25%的丘陵地、山地3.居民地和其他建筑物及花、树等绿化园林占图面60%-70%的地区',
										name: 'Ⅱ级'
									},
									{
										content: '1.行人车辆频繁,有规律的房屋与其他建筑物占图面60%;以上或无规律的房屋占图面40%以上的平地2.行人车辆较多,有规律的房屋与其他建筑物占图面40%以上;或无规律的房屋占图面25%以上的丘陵地、山地3.居民地和其他建筑物及花、树等绿化园林占图面70%以上的地区',
										name: 'Ⅲ级'
									},
								]
							}
						]
					},
					{
						title: '(五)1:2000~1:500像片调绘、地形图更新(地物)',
						itemobj:[
							{
								itemtitle: '一般地区',
								list: [
									{
										content: '1.有部分居民地,地物稀少,地貌完整、局部隐蔽的地区2.通行较困难的沼泽和盐碱地',
										name: 'Ⅰ级',
									},
									{
										content: '1.地貌切割较强烈,且部分隐蔽的地区:或地貌较复杂的沙丘地区2.居民地占图面10%以内,地物地貌较复杂且较隐蔽的平地、丘陵地及通行困难的沼泽地和半隐蔽的半水网地区',
										name: 'Ⅱ级'
									},
									{
										content: '1.地物地貌复杂且隐蔽的平地、丘陵地;或地貌破碎,量注比高较多,且隐蔽的地区2.居民地占图面10%以上,水系、道路发达构成纵横交错网络的地区3．城市主干路、快速路、城市地铁、轻轨、广场、停车场工程4．客（货）运索道工程',
										name: 'Ⅲ级'
									},
								]
							},
							{
								itemtitle: '建筑与工业区',
								list: [
									{
										content: '1.地面平坦,通行通视条件好,检修井较少,建筑物占图面35%以内的城镇,工矿区2.地面有一定起伏,通行通视条件较好,检修井较少,房屋建筑占图面20%以内的地区',
										name: 'Ⅰ级',
									},
									{
										content: '1.地面有一定起伏,通行通视条件较困难,检修井较多,房屋建筑占图面35%~50%的地区2.地面起伏较大,通行通视条件较困难,检修井较多,房屋建筑物占图面20%~35%的地区',
										name: 'Ⅱ级'
									},
									{
										content: '1.地形起伏大,通行通视条件困难,检修井多,房屋建筑物占图面50%以上的地区2．地质构造复杂，长度＞1000m的隧道工程2.地貌破碎,通行通视条件困难,检修井很多,房屋建筑物占图面35%以上的地区',
										name: 'Ⅲ级'
									},
								]
							}
						]
					},
				],
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods: {
			addClass(index){
				if(this.isactive == index){
					return
				}
				this.isactive = index
				console.log(this.isactive)
				console.log(this.dataList[3].itemobj[this.isactive])
			},
			moveHandle(){
				return
			}
		},
	}
</script>

<style scoped>
	.title-box {
		width: 100%;
		height: 2.5rem;
		display: flex;
		padding-left: 0.3rem;
	}
	.title {
		width: 20%;
		height: 100%;
		line-height: 2.5rem;
		margin-right: 1rem;
		border: 2upx solid #3788e4;
		border-bottom: none;
		border-radius: 6upx;
	}
	.active {
		background: #3788e4;
		color: #fff;
	}
	
</style>