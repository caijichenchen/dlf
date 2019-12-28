<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的订单</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="dd-content">
				<view v-if="paidList.length == 0" style="text-align: center;font-size: 30rpx;">没有相关的订单信息</view>
				<view v-else
					v-for="(item,index) in paidList"
					:key="index"
					class="dd-item"
				>
					<view>订单详情:{{item.order_id}}</view>
					<view v-if="item.type == 0">会员类型:积分</view>
					<view v-if="item.type == 1">会员类型:VIP</view>
					<view v-if="item.type == 2">会员类型:企业VIP</view>
					<view v-if="item.type == 3">会员类型:自选VIP</view>
					<view v-if="item.state == 0">支付状态:支付超时</view>
					<view v-if="item.state == 1">支付状态:取消支付</view>
					<view v-if="item.state == 2">支付状态:支付成功</view>
					<view v-if="item.state == 3">支付状态:已退款</view>
					<view v-if="item.state == 4">支付状态:待退款</view>
					<button v-if="item.state == 0" class="delbtn" :data-id="item.id" @tap="delOrder">删除订单</button>
					<button v-if="item.state == 1" class="delbtn" :data-id="item.id" @tap="delOrder">取消订单</button>
					<button v-if="item.state == 2" style="background: #008000;" class="delbtn" @tap="mynavigate('VIPhy')">续费</button>
					<view class="dd-wrap" style="text-align: right;">
						<text >实付金额￥<text style="color: #00A0EA ;">{{item.sum}}</text></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				shows:1,
				TabCur: 0,
				scrollLeft: 0,
				sjf:['全部','已付款','未付款'],
				paidList:[],
			}
		},
		onLoad() {
			this.showAll()
		},
		methods: {
			tabSelect(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 0){
					this.showAll()
				}
				else if(this.TabCur == 1){
					this.showOver()
				}else if(this.TabCur == 2){
					this.showUndone()
				}
			 },
			 mynavigate(path){
			 	if(!path) return
			 	this.navigateTo({
			 		url: `/pages/PersonalCenter/${path}`
			 	})
			 },
			 delOrder(e) { //删除单个订单
				 var orderId = e.currentTarget.dataset.id
				 $req.request({
				 	url:'/api/xcx/myorder/orderDelete',
					method: 'DELETE',
					data:{id:orderId},
				 }).then(res=>{
				 	uni.showToast({
				 		icon:'success',
						title:'删除订单成功'
				 	})
					if(this.TabCur == 0){
						this.showAll()
					}
					else if(this.TabCur == 1){
						this.showOver()
					}else if(this.TabCur == 2){
						this.showUndone()
					}
				 }).catch(err=>{
				 	uni.showToast({
				 		icon:'success',
				 		title:'删除订单失败，请稍后重试'
				 	})
				 })
			 },
			 showAll(){ //显示全部
				 $req.request({
				 	url:'/api/xcx/myorder/paidAllList',
				 }).then(res=>{
				 	this.paidList = res.data.data
				 }).catch(err=>{
					uni.showToast({
					 	icon:'success',
					 	title:'获取订单信息失败，请稍后重试'
					})
				 })
			 },
			 showOver(){
				 $req.request({
				 	url:'/api/xcx/myorder/paidAllList',
				 	data:{state:'paid'}
				 }).then(res=>{
				 	this.paidList = res.data.data
				 }).catch(err=>{
				 	uni.showToast({
				 	 	icon:'success',
				 	 	title:'获取订单信息失败，请稍后重试'
				 	})
				 })
			 },
			 showUndone(){
				 $req.request({
				 	url:'/api/xcx/myorder/unpaidList',
				 }).then(res=>{
				 	this.paidList = res.data.data
				 }).catch(err=>{
				 	uni.showToast({
				 	 	icon:'success',
				 	 	title:'获取订单信息失败，请稍后重试'
				 	})
				 })
			 }
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
	.dd-content {
		width: 100%;
		margin-top: 20upx;
	}
	.dd-item {
		width: 100%;
		font-size: 30rpx;
		color: #656565;
		padding-left: 30upx;
		padding-right: 30upx;
		box-sizing: border-box;
		position: relative;
	}
	.dd-item view {
		line-height: 60rpx;
		text-align: left;
	}
	.dd-wrap {
		border-top: 2upx solid #ccc;
	}
	.delbtn {
		background: #d9534f;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
		text-align: right;
		position: absolute;
		top: 0;
		right: 30upx;
	}
	/* tabs样式 */
	.sjf_content{
		width: 100%;
		height: auto;
		background-color: #fff;
	}
	.content_jsq{
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}
	.text-orange , .line-orange, .lines-orange{
		color: #00a0ea;
	}
</style>
