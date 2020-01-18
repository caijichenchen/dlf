<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的会员</block>
		</cu-custom>
			<view class="backBlue py-5 px-4">
				<view class="huiyuan">会员等级: {{vipInfo.userType}}</view>
				<view class="jf-wrap">
					<view class="jifen">我的积分: {{vipInfo.integral}}</view>
					<navigator class="jfbtn" url="./jfgm">积分购买</navigator>
					<navigator class="jfbtn" url="/pages/sign/sign">积分签到</navigator>
				</view>
			</view>
			<view style="height: 40rpx;background: #F1F1F1;"></view>
			<view class="con-mid pb-4">
				<view class="vip pl-3">拥有计算权限</view>
				<view v-if="vipInfo.userType == '普通会员'" class="pl-3 font-md">
					当前身份为普通会员,可消耗积分计算
				</view>
				<view class="jsqxqy" v-if="vipInfo.userType == 'VIP会员'">
					<view style="text-align: left;">计算权限: VIP会员</view>
					<view class="qxtime">会员期限: {{time[0]+"   "+time[2]+"   "+time[4]}}</view>
					<text class="textBuuton" @tap="goxf">续费</text>
				</view>
				<view class="jsqxqy" v-else-if="vipInfo.userType == '企业会员'">
					<view style="text-align: left;">计算权限: 企业会员6人</view>
					<view class="qxtime">会员期限: {{time[0]+"   "+time[2]+"   "+time[4]}}</view>
					<text class="textBuuton" @tap="goxf">续费</text>
				</view>
				<view class="jsqxqy" v-else v-for="(item,index) in time" :key="index">
					<view style="text-align: left;">计算权限: {{item[1]}}</view>
					<view class="qxtime">会员期限: {{item[0]+"   "+item[2]}}</view>
					<text class="textBuuton" @tap="goxf">续费</text>
				</view>
			</view>
			<view style="height: 40rpx;background: #F1F1F1;"></view>
			<view class="con-bot pb-4">
				<view class="vip pl-3">{{vipInfo.userType}}特权介绍</view>
				<view v-if="vipInfo.userType == '普通会员'" class="pl-3 font-md">
					您当前的身份为普通会员,可以消耗积分购买计算器,下载标准,如果想享有更多权限,请升级会员			
				</view>
				<view v-else-if="vipInfo.userType.indexOf('省份')!=-1 || vipInfo.userType.indexOf('自选')!=-1">
					<view class="tequan">
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe612;</text>
							<view>对应计算器</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe6d0;</text>
							<view>系统配置</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe646;</text>
							<view>不限类型</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe69e;</text>
							<view>生成报告</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconGreen">&#xe628;</text>
							<view>导出报告</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconGray">&#xe751;</text>
							<view>一键计算</view>
						</view>
					</view>
				</view>
				<view v-else>
					<view class="tequan" >
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe612;</text>
							<view>免费计算</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe6d0;</text>
							<view>免费下载</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe646;</text>
							<view>不限类型</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconBLue">&#xe69e;</text>
							<view>生成报告</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconGreen">&#xe628;</text>
							<view>导出报告</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconGray">&#xe751;</text>
							<view>一键计算</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconGreen">&#xe610;</text>
							<view>新版一键</view>
						</view>
						<view class="showtq" v-if="vipInfo.userType == '企业会员'">
							<text class="iconfont iconYellow">&#xe7f3;</text>
							<view>多人登录</view>
						</view>
						<view class="showtq">
							<text class="iconfont iconYellow">&#xe6d1;</text>
							<view>所有特权</view>
						</view>
						<view class="showtq" >
							<text class="iconfont iconRed">&#xe60f;</text>
							<view>优先解决</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 40rpx;background: #F1F1F1;"></view>
			<view class="footer">
				<view class="vip pl-3">会员推荐</view>
				<view v-if="vipInfo.userType == '企业会员'" class="pl-3 font-md">您现在的身份是尊贵的企业会员,已拥有网站所有权限,没有会员给您推荐了哦,如果有什么需要,可以联系我们。</view>
				<view v-else>
					<view v-if="vipInfo.userType.indexOf('自选') != -1" class="zxvip row p-4 mb-4">
						<view>
							<img :src="imgUrl+'/images/auth/optional.png'" alt="" style="width: 139rpx;height: 104rpx;">
						</view>
						<view class="text-center ct font-md iconWhite">
							<view>
								您还未开通自选会员
							</view>
							<navigator class="g-btn" style="background:rgba(127,207,11,1);" url="./zxhy">立即购买</navigator>
						</view>
					</view>
					<view v-if="vipInfo.userType.indexOf('省份') != -1" class="sfvip row p-4 mb-4">
						<view>
							<img :src="imgUrl+'/images/auth/province.png'" alt="" style="width: 139rpx;height: 104rpx;">
						</view>
						<view class="text-center ct font-md iconWhite">
							<view>
								您还未开通省份会员
							</view>
							<navigator class="g-btn" style="background:rgba(75,172,255,1);" url="./sfhy">立即购买</navigator>
						</view>
					</view>
					<view v-if="vipInfo.userType!= 'VIP会员'" class="hyvip row p-4 mb-4">
						<view>
							<img :src="imgUrl+'/images/auth/vip.png'" alt="" style="width: 139rpx;height: 104rpx;">
						</view>
						<view class="text-center ct font-md iconWhite">
							<view>
								您还未开通VIP会员
							</view>
							<navigator class="g-btn" style="background:rgba(42,195,12,1);" url="./VIPhy">立即购买</navigator>
						</view>
					</view>
					<view v-if="vipInfo.userType != '企业会员'" class="qyvip row p-4 mb-4">
						<view>
							<img :src="imgUrl+'/images/auth/ee.png'" alt="" style="width: 139rpx;height: 104rpx;">
						</view>
						<view class="text-center ct font-md iconWhite">
							<view>
								您还未开通企业会员
							</view>
							<navigator class="g-btn" style="background:rgba(140,97,10,1);" url="./qyhy">立即购买</navigator>
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				vipInfo:{},
				time: [],
				imgUrl:this.$serverimgUrl
			}
		},
		onLoad() {
			$req.request({
				url: '/api/xcx/memberlist',
			})
			.then((res)=>{
				// this.vipInfo = res.data
				this.vipInfo = res.data
				if(Array.isArray(res.data.vipTiem)){
					this.time = res.data.vipTiem
					let data = []
					data = res.data.vipTiem.map(item=>{
						return [
							item[0].split(' ')[0],
							item[1],
							item[3].split('T')[0]
						]
					})
					this.time = data
				}else{
					this.time = res.data.vipTiem.split(' ')
				}
				console.log(res.data)
			})
			.catch((err)=>{
				console.log("获取会员信息失败",err)
			})
		},
		methods: {
			goxf(){
				if(this.vipInfo.userType == 'VIP会员'){
					uni.navigateTo({
					    url: './VIPhy'
					});
				}else if(this.vipInfo.userType == '企业会员'){
					uni.navigateTo({
					    url: './qyhy'
					});
				}else if(this.vipInfo.userType == '自选会员'){
					uni.navigateTo({
					    url: './zxhy'
					});
				}else if(this.vipInfo.userType == '省份会员'){
					uni.navigateTo({
					    url: './sfhy'
					});
				}
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	 .huiyuan{
		width: 100%;
		color: #fff;
		font-size: 30rpx;
		margin-bottom: 20rpx;
		text-align: left;
		box-sizing: border-box;
	}
	 .jf-wrap {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		color: #fff;
		font-size: 30rpx;
	}
	.jifen{
		line-height: 52rpx;
	}
	 .jfbtn{
		display: block;
		text-align: center;
		background: #60c5f3;
		color: #fff;
		padding: 6upx 12upx;
		margin-left: 16upx;
		font-size: 28rpx;
		border-radius: 4rpx;
	}
	/* 计算权限 */
	.con-mid{
		width: 100%;
		color: #656565;
		background:  #fff;
	}
	.jsqx{
		width: 90%;
		height: 50upx;
		line-height: 50upx;
		margin: 0 auto;
		text-align: left;
		font-size: 0.75rem;
		padding-bottom: 10upx;
	}
	.jsqxqy{
		width: 90%;
		height: 100upx;
		margin: 14rpx auto;
		line-height: 50upx;
		font-size: 24upx;
		padding-bottom: 10upx;
		position: relative;
		font-size: 28rpx;
	}
	.jsqxqy .qxtime{
		float: left;
	}
	.jsqxqy .textBuuton{
		font-size: 28rpx;
		border-radius: 4rpx;
		height: 54rpx;
		line-height: 54rpx;
		display: block;
		background-color: #ff8009;
		color: #fff;
		position: absolute;
		top: 4upx;
		right: 10%;
	}
	/* 企业会员 */
	.con-bot{
		width: 100%;
		background: #fff;
		margin-top: 20upx;
	}
	.con-bot .tequan{
		width: 90%;
		height: 360upx;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.tequan .showtq{
		width: 23%;
		height: 90upx;
		margin: 30upx 6upx 0 6upx;
		text-align: center;
		font-size: 24upx;
		color: #656565;
	}
	.footer{
		width: 100%;
		height: 260upx;
		background: #fff;
		margin-top: 20upx;
	}
	.vip{
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		text-align: left;
		font-size: 32rpx;
		font-weight: 600;
	}
	.zxvip {
		background: rgba(199,231,153,1);
	}
	.sfvip {
		background: rgba(143,203,255,1);
	}
	.hyvip {
		background: rgba(109,215,89,1);
	}
	.qyvip {
		background: rgba(160,116,30,1);
	}
	.ct {
		margin-left: auto;
		margin-right: auto;
	}
	.g-btn {
		display: inline-block;
		padding: 12rpx 30rpx;
		margin-top: 8rpx;
	}
</style>
