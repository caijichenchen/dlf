<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">监理复杂程度调整</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<uni-collapse animation="outer" accordion="true" @change="change">
					<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item">
						<view style="display: flex;flex-wrap: wrap;" v-if="checkOpen >= 1">
							<view v-for="(i,j) in data[isactive].list" :key="j">
								<view class="p-2 bnb ml-2" 
									:class="clickIndex == j ? 'active' : ''"
									@click="addClass(j)"
								>{{i.category}}</view>
							</view>
							<view class="dlf-group lt">
								<view class="w-100 dlf-li font lt border-b"
											v-for="(m, k) in data[isactive].list[clickIndex].chilren"
											:key="k" 
											@tap="assignment"
											:data-val="m.level"
											:data-key="k"
											data-index="index"
											>
									<view  style=" white-space: pre-wrap;">
										<view class="fongt-mb iconBLue">{{m.level}}</view>
										<view v-for="(x,y) in m.son" :key="y">
											<view>{{x}}</view>
										</view>
									</view>
								</view>
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
				isactive: 0 ,
				clickIndex: 0,
				modalName:'sjfGui_fztz',
				CustomBar:this.CustomBar,
				data:[
					{
						list:[
							{
								category:'采矿工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.地形、地质、水文条件简单；','2.煤层、煤质稳定，全区可采，无岩浆岩侵入，无自然发火的矿井工程；',
											'3.立井筒垂深＜ 300m ，斜井筒斜长＜ 500m ；','4.矿田地形为I、II类，煤层赋存条件属I、II类，可采煤层2层及以下，煤层埋藏深度＜100m ，采用单一开采工艺的煤炭露天采矿工程；',
											'5.两种矿石品种，有分采、分贮、分运设施的露天采矿工程；','6.矿体埋藏垂深< 120m 的山坡与深凹露天矿；','7.矿石品种单一，斜井，平硐溜井，主、副、风井条数＜4条的矿井工程。'
										]
									},
									{
										level:'II级',
										son:[
											'1. 地形、地质、水文条件较复杂；','2. 低瓦斯、偶见少量岩浆岩、自然发火倾向小的矿井工程；',
											'3. 300m ≤立井筒垂深＜ 800m ， 500m≤斜井筒斜长＜ 1000m ，表土层厚度＜300m ；',
											'4. 矿田地形为Ⅲ类及以上，煤层赋存条件属Ⅲ类，煤层结构复杂，可采煤层多于2层，煤层埋藏深度≥ 100m，采用综合开采工艺的煤炭露天采矿工程；',
											'5. 有两种矿石品种，主、副、风井条数≥4条，有分采、分贮、分运设施的矿井工程；',
											'6. 两种以上开拓运输方式，多采场的露天矿；','7. 矿体埋藏垂深≥ 120m 的深凹露天矿；','8. 采金工程。'
										]
									},
									{
										level: 'III级',
										son:[
											'1. 地形、地质、水文条件复杂；','2.水患严重、有岩浆岩侵入、有自然发火危险的矿井工程；',
											'3.地压大，地温局部偏高，煤尘具爆炸性，高瓦斯矿井，煤层及瓦斯突出的矿井工程；',
											'4. 立井筒垂深≥ 800m，斜井筒斜长≥ 1000m，表土层厚度≥ 300m ；',
											'5.开采运输系统复杂，斜井胶带，联合开拓运输系统，有复杂的疏干、排水系统及设施；',
											'6.两种以上矿石品种，有分采、分贮、分运设施，采用充填采矿法或特殊采矿法的各类采矿工程；',
											'7. 铀矿采矿工程。'
										]
									}
								]
							},
							{
								category: '选矿工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.新建筛选厂(车间)工程；','2.处理易选矿石，单一产品及选矿方法的选矿工程。'
										]
									},
									{
										level:'II级',
										son:[
											'1.新建和改扩建入洗下限≥ 25mm 选煤厂工程；','2.两种矿产品及选矿方法的选矿工程。'
										]
									},
									{
										level:'I级',
										son:[
											'1. 新建和改扩建入洗下限＜ 25mm选煤厂、水煤浆制备及燃烧应用工程；','2. 两种以上矿产品及选矿方法的选矿工程。'
										]
									}
								]
							}
						]
					},
					{
						list:[
							{
								category:'加工冶炼工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.一般机械辅机及配套厂工程；','2.船舶辅机及配套厂，船舶普航仪器厂，吊车道工程；',
											'3.防化民爆工程、光电工程','4.文体用品、玩具、工艺美术品、日用杂品、金属制品厂等工程',
											'5.针织、服装厂工程；','6.小型林产加工工程；','7.小型冷库、屠宰厂，制冰厂，一般农业(粮食)与内贸加工工程；',
											'8.普通水泥、砖瓦水泥制品厂工程；','9.一般简单加工及冶炼辅助单体工程和单体附属工程；','10.小型、技术简单的建筑铝材、铜材加工及配套工程。'
										]
									},
									{
										level:'II级',
										son:[
											'1. 试验站(室)、试车台、计量检测站、自动化立体和多层仓库工程；','2.造船厂、修船厂、坞修车间、船台滑道、海洋开发工程设备厂、水声设备及水中兵器厂工程；',
											'3. 坦克装甲车车辆、枪炮工程；','4.航空装配厂、维修厂、辅机厂，航空、航天试验测试及零部件厂，航天产品部装厂工程；',
											'5. 电子整机及基础产品项目工程，显示器件项目工程；','6.食品发酵烟草工程、制糖工程、制盐及盐化工工程、皮革毛皮及其制品工程、家电及日用机械工程、日用硅酸盐工程；',
											'7. 纺织工程；','8. 林产加工工程；','9. 商物粮加工工程；',
											'10.＜2000t/d的水泥生产线，普通玻璃、陶瓷、耐火材料工程、特种陶瓷生产线工程，新型建筑材料工程；',
											'11.焦化、耐火材料、烧结球团及辅助、加工和配套工程、有色、钢铁冶炼等辅助、加工和配套工程。'
										]
									},
									{
										level:'III级',
										son:[
											'1. 机械主机制造厂工程；','2. 船舶工业特种涂装车间，干船坞工程；',
											'3. 火炸药及火工品工程、弹箭引信工程；',
											'4. 航空主机厂、航天产品总装厂工程；',
											'5. 微电子产品项目工程、电子特种环境工程、电子系统工程；',
											'6. 核燃料元/组件、铀浓缩、核技术及同位素应用工程；',
											'7. 制浆造纸工程、日用化工工程；',
											'8. 印染工程；',
											'9. ≥2000t/d的水泥生产线，浮法玻璃生产线；',
											'10. 有色、钢铁冶炼（含连铸）工程，轧钢工程。',
										]
									}
								]
							}
						]
					},
					{
						list:[
							{
								category:'石油化工工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.油气田井口装置和内部集输管线，油气计量站、接转站等场站、总容积< 50000m3 或品种 <5种的独立油库工程；',
											'2.平原微丘陵地区长距离油、气、水煤浆等各种介质的输送管道和中间场站工程；',
											'3. 无机盐、橡胶制品、混配肥工程；',
											'4. 石油化工工程的辅助生产设施和公用工程。',
										]
									},
									{
										level:'II级',
										son:[
											'1. 油气田原油脱水转油站、油气水联合处理站、总容积≥ 50000m3或品种≥5种的独立油库、天然气处理和轻烃回收厂站、三次采油回注水处理工程；硫磺回收及下游装置、稠油及三次采油联合处理站、油气田天然气液化及提氦、地下储气库,',
											'2.山区沼泽地带长距离油、气、水煤浆等各种介质的输送管道和首站、末站、压气站、调度中心工程,',
											'3.500万吨/年以下的常、减压蒸馏及二次加工装置，丁烯氧化脱氢、MTBE、丁二烯抽提、乙腈生产装置工程,',
											'4. 磷肥、农药、精细化工、生物化工、化纤工程,',
											'5. 医药工程,',
											'6.冷冻、脱盐、联合控制室、中高压热力站、环境监测、工业监视、三级污水处理工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1. 海上油气田工程,',
											'2. 长输管道的穿跨越工程,',
											'3.500万吨/年以上的常减压蒸馏及二次加工装置，芳烃抽提、芳烃（PX），乙烯、精对苯二甲酸等单体原料，合成材料，LPG、LNG低温储存运输设施工程,',
											'4. 合成氨、制酸、制碱、复合肥、火化工、煤化工工程,',
											'5. 核化工、放射性药品工程,',
										]
									}
								]
							}
						]
					},
					{
						list:[
							{
								category:'水利、发电、送电、变电、核能工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.单机容量200MW及以下凝汽式机组发电工程，燃气轮机发电工程，50MW及以下供热机组发电工程,',
											'2. 电压等级220KV及以下的送电、变电工程,',
											'3. 最大坝高< 70m ，边坡高度< 50m ，基础处理深度<20m 的水库水电工程,',
											'4. 施工明渠导流建筑物与土石围堰,',
											'5. 总装机容量<50MW的水电工程,',
											'6. 单洞长度＜ 1km 的隧洞,',
											'7. 无特殊环保要求,',
										]
									},
									{
										level:'II级',
										son:[
											'1.单机容量300MW～600MW凝汽式机组发电工程，单机容量50MW及以上供热机组发电工程，新能源发电工程(可再生能源、风电、潮汐等,',
											'2. 电压等级330KV的送电、变电工程,',
											'3. 70m ≤最大坝高＜100或1000万m3≤库容＜ 1亿m3的水库水电工程 ,',
											'4. 地下洞室的跨度＜ 15m ， 50m ≤边坡高度＜ 100 m，20≤基础处理深度＜ 40 m 的水库水电工程,',
											'5. 施工隧洞导流建筑物（洞径＜ 10 m）或混凝土围堰（最大堰高＜ 20 m ,',
											'6. 50 MW ≤总装机容量＜1000MW的水电工程； 7.1km ≤单洞长度＜ 4km 的隧洞,',
											'7. 1km ≤单洞长度＜ 4km 的隧洞,',
											'8.工程位于省级重点环境（生态）保护区内，或毗邻省级重点环境（生态）保护区，有较高的环保要求,',
										]
									},
									{
										level:'III级',
										son:[
											'1. 单机容量600MW以上凝汽式机组发电工程,',
											'2. 换流站工程，电压等级≥500KV送电、变电工程,',
											'3. 核能工程,',
											'4. 最大坝高≥ 100 m 或库容≥1亿m3的水库水电工程,',
											'5. 地下洞室的跨度≥ 15m ，边坡高度≥ 100m，基础处理深度≥ 40 m 的水库水电工程,',
											'6. 施工隧洞导流建筑物（洞径≥ 10m ）或混凝土围堰（最大堰高≥20m ,',
											'7. 总装机容量≥1000MW的水库水电工程,',
											'8. 单洞长度≥ 4km 的水工隧洞,',
											'9.工程位于国家级重点环境（生态）保护区内，或毗邻国家级重点环境（生态）保护区，有特殊的环保要求,',
										]
									}
								]
							},
							{
								category:'其他水利工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1. 流量＜ 15 m3 /s的引调水渠道管线工程,',
											'2. 堤防等级V级的河道治理建(构)筑物及河道堤防工程,',
											'3. 灌区田间工程,',
											'4. 水土保持工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1. 15 m3 /s≤流量＜ 2 5 m3s引调水渠道管线工程,',
											'2. 引调水工程中的建筑物工程,',
											'3. 丘陵、山区、沙漠地区的引调水渠道管线工程,',
											'4. 堤防等级III、IV级的河道治理建(构)筑物及河道堤防工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1. 流量≥ 25m3 /s的的引调水渠道管线工程,',
											'2. 丘陵、山区、沙漠地区的引调水建筑物工程,',
											'3. 堤防等级I、II级的河道治理建(构)筑物及河道堤防工程,',
											'4. 护岸、防波堤、围堰、人工岛、围垦工程，城镇防洪、河口整治工程,',
										]
									},
								]
							}
						]
					},
					{
						list:[
							{
								category:'铁路工程',
								chilren:[
									{
										level:'I级',
										son:['Ⅱ、Ⅲ、Ⅳ级铁路']
									},
									{
										level:'II级',
										son:[
											'1. 时速 200KM 客货共线,',
											'2. Ⅰ级铁路,',
											'3. 货运专线,',
											'4. 独立特大桥,',
											'5. 独立隧道,',
										]
									},
									{
										level:'',
										son:[]
									},
									{
										level:'II级双线',
										son:['复杂等级Ⅱ级的新建双线']
									},
									{
										level:'铁路III级',
										son:['1. 客运专线；','2. 技术特别复杂的工程']
									}
								]
							},
							{
								category:'公路、城市道路、轨道交通、索道工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.三级、四级公路及相应的机电工程,',
											'2.一级公路、二级公路的机电工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1.一级公路、二级公路,',
											'2.高速公路的机电工程,',
											'3.城市道路、广场、停车场工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1.高速公路工程,',
											'2.城市地铁、轻轨,',
											'3.客(货)运索道工程,',
										]
									},
									{
										level:'',
										son:[]
									},
									{
										level:'',
										son:[]
									},
									{
										level:'穿II级',
										son:[
											'穿越山岭重丘区的复杂程度Ⅱ级公路工程项目,',
										]
									},
									{
										level:'穿III级',
										son:[
											'穿越山岭重丘区的复杂程度III级公路工程项目,',
										]
									}
								]
							},
							{
								category:'公路桥梁、城市桥梁和隧道工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.总长< 1000m 或单孔跨径< 150 m 的公路桥梁,',
											'2.长度< 1000m 的隧道工程,',
											'3.人行天桥、涵洞工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1.总长≥ 1000m 或 150 m ≤单孔跨径＜ 250 m的公路桥梁,',
											'2.1000m ≤长度＜ 3000 m 的隧道工程,',
											'3城市桥梁、分离式立交桥、地下通道工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1.主跨≥ 250m 拱桥，单跨≥ 250m 预应力混凝土连续结构，≥ 400m 斜拉桥，≥ 800m 悬索桥,',
											'2.连拱隧道、水底隧道、长度≥ 3000 m 的隧道工程,',
											'3.城市互通式立交桥,',
										]
									},
								]
							},
							{
								category:'水运工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1. 沿海港口、航道工程：码头＜1000t级，航道＜5000t级,',
											'2.内河港口、航道整治、通航建筑工程：码头、航道整治、船闸＜100t级,',
											'3.修造船厂水工工程：船坞、舾装码头＜3000t级，船台、滑道船体重量＜1000t,',
											'4. 各类疏浚、吹填、造陆工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1.沿海港口、航道工程：1000t级≤码头≤10000t级，5000 t级≤航道＜30000t级,护岸、引堤、防波堤等建筑物,',
											'2. 油、气等危险品码头工程＜1000t级,',
											'3.内河港口、航道整治、通航建筑工程：100t级≤码头＜1000t级,100t级≤航道整治＜1000t级,100t级≤船闸＜500 t级，升船机＜300t级,',
											'4.修造船厂水工工程：3000t级≤船坞、舾装码头＜10000t级，1000t≤船台、滑道船体重量＜5000t,',
										]
									},
									{
										level:'III级',
										son:[
											'1. 沿海港口、航道工程：码头≥10000t级，航道≥30000t级,',
											'2. 油、气等危险品码头工程≥1000t级,',
											'3.内河港口、航道整治、通航建筑工程：码头、航道整治≥1000t级，船闸≥500t级，升船机≥300t级,',
											'4. 航运（电）枢纽工程,',
											'5.修造船厂水工工程：船坞、舾装码头≥10000t级，船台、滑道船体重量≥5000t,',
											'6. 水上交通管制工程,',
										]
									},
								]
							},
							{
								category:'民用机场工程',
								chilren:[
									{
										level:'I级',
										son:[
											'3C及以下场道、空中交通管制及助航灯光工程（项目单一或规模较小工程,',
										]
									},
									{
										level:'II级',
										son:[
											'4C 、4D场道及空中交通管制及助航灯光工程（中等规模工程,',
										]
									},
									{
										level:'III级',
										son:[
											'4E及以上场道、空中交通管制及助航灯光工程（大型综合工程含配套措施,',
										]
									},
								]
							},
						]
					},
					{
						list:[
							{
								category:'建筑、人防工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1.高度< 24m 的公共建筑和住宅工程,',
											'2.跨度< 24m 厂房和仓储建筑工程,',
											'3.室外工程及简单的配套用房,',
											'4.高度< 70m 的高耸构筑物,',
										]
									},
									{
										level:'II级',
										son:[
											'1.24m ≤高度＜ 50m 的公共建筑工程,',
											'2.24m ≤跨度＜ 36m 厂房和仓储建筑工程,',
											'3.高度≥ 24m 的住宅工程,',
											'4.仿古建筑，一般标准的古建筑、保护性建筑以及地下建筑工程,',
											'5.装饰、装修工程,',
											'6.防护级别为四级及以下的人防工程,',
											'7.70m ≤高度< 120m 的高耸构筑物,',
										]
									},
									{
										level:'III级',
										son:[
											 '1.高度≥ 50m 或跨度≥ 36m 的厂房和仓储建筑工程,',
											'2.高标准的古建筑、保护性建筑,',
											'3.防护级别为四级以上的人防工程,',
											'4.高度≥ 120m 的高耸构筑物,',
										]
									}
								]
							},
							{
								category:'市政公用、园林绿化工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1. DN< 1.0m 的给排水地下管线工程,',
											'2. 小区内燃气管道工程,',
											'3. 小区供热管网工程，＜2MW的小型换热站工程,',
											'4. 小型垃圾中转站，简易堆肥工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1. DN≥ 1.0m 的给排水地下管线工程；＜ 3 m3/s的给水、污水泵站；＜10万吨/日给水厂工程，＜5万吨/日污水处理厂工程,',
											'2. 城市中、低压燃气管网（站），＜ 1000 m3 液化气贮罐场（站,',
											'3. 锅炉房，城市供热管网工程，≥2MW换热站工程,',
											'4. ≥100t/天的大型垃圾中转站，垃圾填埋工程,',
											'5. 园林绿化工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1. ≥ 3 m3/s的给水、污水泵站，≥10万吨/日给水厂工程，≥5万吨/日污水处理厂工程,',
											'2. 城市高压燃气管网（站），≥ 1000 m3 液化气贮罐场（站,',
											'3. 垃圾焚烧工程,',
											'4. 海底排污管线，海水取排水、淡化及处理工程,',
										]
									}
								]
							},
							{
								category:'广播电视、邮政、电信工程',
								chilren:[
									{
										level:'I级',
										son:[
											'1. 广播电视中心设备（广播2套及以下，电视3套及以下）工程,',
											'2. 中短波发射台(中波单机功率P<1KW，短波单机功率P<50KW)工程,',
											'3. 电视、调频发射塔(台)设备(单机功率P<1KW)工程,',
											'4. 广播电视收测台设备工程；三级邮件处理中心工艺工程,',
										]
									},
									{
										level:'II级',
										son:[
											'1. 广播电视中心设备(广播3~5套，电视4~6套)工程,',
											'2.中短波发射台(中波单机功率1KW≤P＜20KW，短波单机功率50 KW≤P＜150KW)工程,',
											'3.电视、调频发射塔(台)设备(中波单机功率1KW≤P＜10KW，塔高< 200m )工程,',
											'4. 广播电视传输网络工程；二级邮件处理中心工艺工程,',
											'5. 电声设备、演播厅、录（播）音馆、摄影棚设备工程,',
											'6. 广播电视卫星地球站、微波站设备工程,',
											'7. 电信工程,',
										]
									},
									{
										level:'III级',
										son:[
											'1. 广播电视中心设备(广播6套以上，电视7套以上)工程,',
											'2.中短波发射台设备(中波单机功率P≥20KW，短波单机功率P≥150 KW)工程,',
											'3. 电视、调频发射塔(台)设备(中波单机功率P≥10KW，塔高≥200m )工程,',
											'4. 一级邮件处理中心工艺工程,',
										]
									}
								]
							}
						]
					},
					{
						list:[
							{
								category:'8.农业林业工程',
								chilren:[
									{
										level:'',
										son:[]
									},
									{
										level:'II级',
										son:['农业、林业工程复杂程度为II级。']
									}
								]
							}
						]
					}
				],
				dataList:['2.矿山采选工程','3.加工冶炼工程','4.石油化工工程','5.水利电力工程','6.交通运输工程','7.建筑市政工程','8.农业林业工程'],
				check:[]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		},
		methods:{
			addClass(index){
				this.clickIndex = index
			},
			change(e){
				this.check = e
				this.isactive = e[0]
				this.clickIndex = 0 
			}
		},
		computed:{
			checkOpen(){
				return this.check.length
			}
		}
	}
</script>

<style scoped>
	.bnb {
		border: 2rpx solid #00a0e0;
		border-bottom: none;
	}
	.active {
		background: #3788e4;
		color: #fff;
	}
</style>