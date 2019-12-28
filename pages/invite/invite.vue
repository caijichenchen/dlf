<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">邀请有奖</block>
		</cu-custom>
		<view class="m-cal-header">
			<view class="m-spread-top">
				<view class="green-bg">
					<view class="m-spread-title">
						新老用户同获VIP、新用户首次消费老用户得红包
					</view>
					<view class="m-spread-tag">
						当好友通过您分享的链接注册独立费，他将获得3天VIP会员；当他成功注册登录后，您将获得独立费3天VIP会员
					</view>
				</view>
				<view class="m-spread-main">
					<view class="shared-links">
						<view class="links-title">
							邀请链接：
						</view>
						<view class="shared-input">
							<input type="text" id="tag" data-link="1" value="独立费|工程建设其他费用计算器-快速计算设计费,监理费等!免费领3天VIP:https://www.dulifei.com/newuser?spread_path=270261374778" />
						</view>
						<p class="copy-link">
							<navigator url="javascript:;" id="clickL">复制链接</navigator>
						</p>
					</view>
					<view class="m-spread-award">
						<p class="qt-btn">我的VIP奖励</p>
						<p class="qt-btn">我的红包</p>
						<p class="qt-btn">活动规则</p>
					</view>
				</view>
			</view>
			<view class="m-spread-awards">
				<p class="award-title">最新用户奖励</p>
				<view class="roll-wrap">
					
				</view>
			</view>
			<view class="m-spread-awards">
				<p class="award-title">最新用户奖励</p>
				<view class="roll-wraps">
					<p>
						<span style="color:#02C8E6;">泡泡冰麟:</span>
						<span>累计获得佣金：</span>
						<span> 940.8元</span>
					</p>
					<p>
						<span style="color:#02C8E6;">泡泡冰麟:</span>
						<span>累计获得佣金：</span>
						<span> 940.8元</span>
					</p>
					<p>
						<span style="color:#02C8E6;">泡泡冰麟:</span>
						<span>累计获得佣金：</span>
						<span> 940.8元</span>
					</p>
				</view>
			</view>
			<view class="m-spread-bottom" style="padding: 4%;background-color: #00a0e0;">
				<p>
					<image src="../../static/img/m_activitytitle.png" style="width: 100%;height: 166upx;"></image>
				</p>
				<view class="m-deblocking">
					<view class="m-deblocking-cash">
						<p>
							<image src="../../static/img/mm.png" style="width: 100%;height: 762upx;"></image>
						</p>
					</view>
					<view>
						<p class="m-activity-title">
							活动须知
						</p>
						<view class="m-activitycontent">
							<view>
								<p>
									一、活动对象
								</p>
								<p>
									1、在独立费官网成功注册的用户均可参与老带新得VIP+红包返现的活动
								</p>
							</view>
							<view>
								<p>
									 二、活动时间
								</p>
								<p>
									长期有效
								</p>
							</view>
							<view>
								<p>
									 三、活动规则
								</p>
								<p>
									1、老用户成功推荐（具体看后附说明）新用户可参与此活动，推荐成功后具体规则如下： 
								</p>
								<p>
									①新用户成功注册并登录，新老用户各得3天VIP； 
								</p>
								<p>
									②新用户成功注册并登录后购买独立费网站会员等产品，推荐者获得3天VIP会员+新用户首次在独立费网（www.dulifei.com）实际消费金额的10%,新用户在独立费网二次及以后的消费不计入红包范围；
								</p>
								<p>
									③红包兑换须知说明：
								</p>
								<p>
									a、红包满整数即可提现(50、100、150...)，即50的整数倍才可体现，同时红包可以购买独立费网站相关会员产品;
								</p>
								<p>
									b、提现须知：独立费目前只支持支付宝提现、提现需要填写支付宝账户和真实姓名（三个工作日到账）。
								</p>
								<p>
									2、奖励推荐者的会员时长将以活动期间最终累计成功推荐的参与者数量为准，推荐越多，所赠送的会员时长越长，最高获赠30天VIP会员。具体赠送规则如下：
								</p>
								<p>
									成功推荐，各送3天VIP+新用户首次消费老用户再获10%红包;老用户推荐新用户、VIP会员最高可获取30天，红包不封顶。
								</p>
								<p>
									3、如用户存在作弊、欺诈或通过其他非正常手段获取利益的行为，独立费将有权收回相关权益并不赔偿用户损失。 
								</p>
								<p>
									4、“成功推荐”，推荐者分享老带新本活动页面的分享链接推荐给新用户，新用户必须通过老用户分享的链接进入网站成功注册并登录，算推荐成功；
								</p>
								<p>
									5、未付费订单不计入红包范围、会员一旦购买不予退款。
								</p>
								<p>
									6、本网站具有活动最终解释权。
								</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	/*头部提示*/
	.green-bg{
		width: 100%;
		background-color: #00a0e0;
		padding: 0 30upx;
	}
	.m-spread-title{
		color: #FFFFFF;
		font-size: 30upx;
		margin: 26upx 0;
		font-weight: 500;
	}
	.m-spread-tag{
		color: #FFFFFF;
		font-size: 24upx;
		padding-bottom: 30upx;
	}
	/*链接邀请部分*/
	.m-spread-main{
		width: 100%;
		background-color: #00a0e0;
	}
	.shared-links{
		width: 100%;
		background-color: #00eaff;
	}
	.links-title{
		padding: 19upx 0 13upx 22upx;
		color: #038f3d;
		font-size: 26upx;
	}
	#tag{
		height: 76upx;
		line-height: 76upx;
		background-color: #FFFFFF;
		padding: 2upx 0;
		margin: 0 20upx;
		color: #999;
	}
	.copy-link{
		padding: 20upx 30upx 30upx 20upx;
	}
	.copy-link navigator{
		display: block;
		width: 100%;
		height: 90upx;
		background-color: #fb5d4b;
		border-radius: 4upx;
		line-height: 90upx;
		text-align: center;
		color: #FFFFFF;
	}
	.m-spread-award{
		display: flex;
	}
	.qt-btn{
		width: 33.33333%;
		color: #FFFFFF;
		padding: 30upx;
		text-align: center;
	}
	/*最新用户奖励*/
	.m-spread-awards{
		width: 100%;
		background-color: #fdf6e5;
	}
	.award-title{
		font-size: 32upx;
		color: #656565;
		padding: 30upx 0;
		border-bottom: 2upx solid #ddd;
		text-align: center;
	}
	.roll-wrap{
		width: 100%;
		height: 180upx;
		padding: 30px 0;
	}
	.roll-wraps{
		width: 100%;
		height: 220upx;
	}
	.roll-wraps p{
		padding: 25upx 30upx 8upx 30upx;
	}
	/*邀请解锁送豪礼*/
	.m-deblocking{
		/* background: url(../../static/img/mm.png) no-repeat; */
	}
	/*底部活动须知*/
	.m-activity-title{
		padding: 20upx 0;
		text-align: center;
		color: #FFFFFF;
		font-size: 30upx;
	}
	.m-activitycontent{
		width: 100%;
		padding: 7upx 20upx;
		color: #FFFFFF;
		font-size: 26upx;
	}
</style>
