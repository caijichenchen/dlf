<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">优惠兑换</block>
		</cu-custom>
		<view class="conversion_all">
			<view class="conversion_top ">
				<p>
					兑换优惠码
				</p>
			</view>
			<view class="conversion_word">
				<p>
					<image src="../../static/img/conversion_img.png" mode=""></image>
				</p>
				<input type="text" class="conversion_input" value placeholder="请输入口令，领取会员、积分、优惠卷" />
			</view>
			<view class="get_coupon_all">
				<button>点击领取</button>
			</view>
			<view class="conversion_mess">
				<p>
					兑换须知
				</p>
				<p>
					1、兑换码为用于兑换优惠的数字+英文串码，可通过独立费网官方网站、QQ群、微信公众号不定期活动获得。
				</p>
				<p>
					2、兑换码仅用于兑换会员、积分、优惠券，不提供兑换现金服务。非产品质量问题，将不提供退码、退款服务；
				</p>
				<p>
					3、用户通过输入兑换码兑换相应服务，兑换过程中无需支付额外金额,兑换成功后可立刻享用相应的会员服务。
				</p>
				<p>
					4、兑换码为一次性兑换产品，不可重复兑换，仅可在独立费官方网站进行兑换操作。
				</p>
				<p>
					5、请在兑换码兑换截止日前兑换，以免造成您的损失。如兑换过程发生问题，请联系我们。客服QQ：<span style="color: #060bef;">2862689699</span>
				</p>
			</view>
			<view style="background: #FFFFFF;height: 40upx;">
				
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
	.conversion_all{
		/* height: 1495upx; */
		padding: 0 30upx;
		background-color: #FFFFFF;
	}
	.conversion_top p{
		width: 100%;
		padding: 126upx 0 30upx 0;
		font-size: 36upx;
		text-align: center;
	}
	.conversion_word image{
		width: 100%;
		height: 259upx;
	}
	.conversion_input{
		width: 508upx;
		font-size: 36upx;
		color: #757575;
		position: relative;
		top: -127upx;
		left: 91upx;
	}
	.get_coupon_all button{
		width: 304upx;
		height: 69upx;
		line-height: 69upx;
		text-align: center;
		font-size: 28upx;
		border: 2upx solid #04aefe;
		background: #04aefe;
		color: #FFFFFF;
		position: relative;
		top: -30upx;
	}
	.conversion_mess{
		margin-top: 40upx;
		border: 2upx solid #f5f5f5;
		padding: 7upx;
	}
	.conversion_mess p{
		color: #8c8a8c;
		line-height: 56upx;
		font-size: 28upx;
	}
</style>
