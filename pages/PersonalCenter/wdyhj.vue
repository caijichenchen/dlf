<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
		    <block slot="content">我的优惠券</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="sjf_content">
				<!-- 计算器 -->
				<view v-show="TabCur==0" class="content_jsq">
					<view class="duihuan" v-if="this.allList == ''">
						<text class="text-con">您暂时没有可以使用的优惠券哦,快去兑换几张吧</text>
						<text class="textBuuton" @tap="navigate('exchange')">兑换优惠券</text>
					</view>
					<view v-else class="yhj" v-for="(item,index) in allList" :key="index">
						<view class="yhj-lt">
							<view class="iconBLue">￥3满{{item.sum_limit}}减{{item.discount}}</view>
							<view>{{item.type}}</view>
							<view>有限期:{{item.created_at}} - {{item.updated_at }}</view>
						</view>
						<view class="yhj-rt">
							<view>已过期</view>
						</view>
					</view>
					<view class="qqqun">
						获取更多优惠券请加QQ群: 313719561
					</view>
				</view>
				<!-- 取费标准 -->
				<view v-show="TabCur==1" class="content_jsq">
					<view class="duihuan" v-if="this.vipList == ''">
						<text class="text-con">您暂时没有可以使用的优惠券哦,快去兑换几张吧</text>
						<text class="textBuuton" @tap="navigate('exchange')">兑换优惠券</text>
					</view>
					<view class="yhj" v-else v-for="(item,index) in vipList" :key="index">
						<view class="yhj-lt">
							<view class="iconBLue">￥3{{item.sum_limit}}减{{item.discount}}</view>
							<view>{{item.type}}</view>
							<view>有限期:{{item.created_at}} - {{item.updated_at }}</view>
						</view>
						<view class="yhj-rt">
							<view>已过期</view>
						</view>
					</view> 
					<view class="qqqun qqqun1">
						获取更多优惠券请加QQ群: 313719561
					</view>
				</view>
				<view v-show="TabCur==2" class="content_jsq">
					<view class="duihuan" v-if="this.qyvipList == ''">
						<text class="text-con">您暂时没有可以使用的优惠券哦,快去兑换几张吧</text>
						<text class="textBuuton" @tap="navigate('exchange')" >兑换优惠券</text>
					</view>
					<view class="yhj" v-else v-for="(item,index) in qyvipList" :key="index">
						<view class="yhj-lt">
							<view class="iconBLue">￥满{{item.sum_limit}}减{{item.discount}}</view>
							<view>{{item.type}}</view>
							<view>有限期:{{item.created_at}} - {{item.updated_at }}</view>
						</view>
						<view class="yhj-rt">
							<view>已过期</view>
						</view>
					</view>
					<view class="qqqun qqqun1">
						获取更多优惠券请加QQ群: 313719561
					</view>
				</view> 
				<view v-show="TabCur==3" class="content_jsq">
					<view class="duihuan" v-if="this.zxvipList == '' ">
						<text class="text-con">您暂时没有可以使用的优惠券哦,快去兑换几张吧</text>
						<text class="textBuuton" @tap="navigate('exchange')">兑换优惠券</text>
					</view>
					<view v-else class="yhj"  v-for="(item,index) in zxvipList" :key="index">
						<view class="yhj-lt">
							<view class="iconBLue">￥3{{item.sum_limit}}减{{item.discount}}</view>
							<view>{{item.type}}</view>
							<view>有限期:{{item.created_at}} - {{item.updated_at }}</view>
						</view>
						<view class="yhj-rt">
							<view>已过期</view>
						</view>
					</view>
					<view class="qqqun qqqun1">
						获取更多优惠券请加QQ群: 313719561
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
				sjf:['全部','VIP会员','企业会员','自选会员'],
				allList:[],
				zxvipList:[],
				vipList:[],
				qyvipList:[],
			}
		},
		onLoad() {
			this.allhy()
		},
		methods: {
			navigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pages/${path}/${path}`
				})
			},
			 tabSelect(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 0){
					this.allhy()
				}else if(this.TabCur == 1){
					this.vip()
				}else if(this.TabCur == 2){
					this.qyvip()
				}else if(this.TabCur == 3){
					this.zxvip()
				}
			 },
			allhy(){
				$req.request({
					url:'/api/xcx/myvip/getUserAllCoupon',
				}).then(res=>{
					this.allList = res.data.data
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			vip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=1',
				}).then(res=>{
					this.vipList = res.data.data
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			zxvip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=3',
				}).then(res=>{
					this.zxvipList = res.data.data
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			qyvip(){
				$req.request({
					url:'/api/xcx/myvip/getUserCouponByType?type=2',
				}).then(res=>{
					this.qyvipList = res.data.data
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	
	/* tabs样式 */
	.sjf_content{
		width: 100%;
		height: 1250upx;
		background-color: #fff;
	}
	.content_jsq{
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}
	.yhj{
		width: 100%;
		height: 250upx;
		background: #fff;
		margin-top: 20upx;
		border: 3upx solid #ececec;
		border-radius: 10upx;
		box-shadow: 4upx 4upx 8upx  #CCCCCC;
	}
	.yhj .yhj-lt{
		width: 70%;
		height: 230upx;
		float: left;
		margin-top: 10upx;
		border-right: 5upx dotted #ececec;
	}
	.yhj .yhj-lt .iconBLue{
		font-size: 35upx;
	}
	.yhj .yhj-lt view{
		padding: 20upx 30upx;
	}
	.yhj .yhj-rt{
		width: 26%;
		height: 230upx;
		float: right;		
	}
	.yhj .yhj-rt view{
		width: 155upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
		text-align: center;
		border-radius: 50upx;
		border: 5upx solid #ccc;
		color: #CCCCcc;
		margin-top: 85upx;
	}
	.duihuan{
		width: 96%;
		height: 120upx;
		text-align: center;
		margin-left: 2%;
	}
	.duihuan .text-con{
		padding-top: 30upx;
		margin-left: 30upx;
	}
	.duihuan .textBuuton{
		background: #e4393c;
		margin:0   auto;
		margin-top: 38upx;
		padding: 5upx;
	}
	.qqqun{
		width: 100%;
		height: 40upx;
		margin-top: 40upx;
		line-height: 40upx;
		margin-left: 12upx;
	}
	.qqqun1{
		text-align: center;
	}
	.text-orange , .line-orange, .lines-orange{
		color: #00a0ea;
	}
	
	
</style>
