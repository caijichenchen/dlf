<template>
			<!-- 设计费 附加调整 模态框 -->
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName== modalName ?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">施工图审查费调整系数</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl border border-blue m-1">
					<view class="dlf-group lt">
						<view class="w-100 dlf-li font lt" 
						v-for="(item, index) in tzxsList" :key="index" @tap="assignment" :data-val="item.xs">
							<view class="lt" style="width: 87%; white-space: pre-wrap;">
								{{item.value}}
							</view>
							<span class="spbtn text-white px-1 bg-blue rt" >
								{{item.xs}}
							</span>
						</view>
					</view>
				</view>
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
				modalName:'sgtscfSu_tzxs',
				tzxsList: [
					{value:"施工图审查费调整系数默认为1",xs:"1"},
					{value:"根据《省物价局关于明确建筑工程、市政工程施工图及抗震设计审査等收费有关问题的通知》苏价服【2009】54号规定:工程勘察文件审查项目收费按施工图审查收费标准的12%收取",xs:"0.12"},
					{value:"根据苏价费【2009】278号、苏财综【2009】45号规定:抗震设计审查收费按《省物价局、省财政厅关于正式核定建筑工程、市政工程施工图及抗震设计审查收费标准的通知》(苏价服[2004]26号、苏财政[2004]11号)收费标准的70%",xs:"0.7"},
					{value:"根据苏价服〔2014〕49号规定,2018年12月31号之前涉及中小学校舍安全工程建设的经营服务性收费项目,施工图审查费减半收取",xs:"0.5"},
				]
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
		}
	}
</script>

<style >
	
	
</style>