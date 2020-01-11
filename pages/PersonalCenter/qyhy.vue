<template>
    <view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">企业会员</block>
		</cu-custom>
		<view class="titelTabs">
			<view  :class="{titleOn:shows==0}" :data-show="0" :data-pre="3" @click="changeShow">3名人员</view>
			<view  :class="{titleOn:shows==1}" :data-show="1" :data-pre="6" @click="changeShow" >6名人员</view>
			<view  :class="{titleOn:shows==2}" :data-show="2" :data-pre="10" @click="changeShow" >10名人员</view>
		</view>
		<view style="height: 40rpx;background: #F1F1F1;"></view>
		<view class="titlecon">
			<view class="time">
				<view class="timeOne" :class="{tabOn:tab==0}" :data-tab="0" @click="getVal">
					<text class="font-md">{{moneyList[shows][0]}}元/1年({{pre}}名成员)</text>
				</view>
				<view class="timeOne" :class="{tabOn:tab==1}" :data-tab="1" @click="getVal">
					<view>8.6折</view>
					<text class="lineThr">原价:￥1398</text>
					<text class="font-md">{{moneyList[shows][1]}}元/2年({{pre}}名成员)</text>
				</view>
				<view class="timeOne" :class="{tabOn:tab==2}" :data-tab="2" @click="getVal">
					<view>7.6折</view>
					<text class="lineThr">原价:￥2097</text>
					<text class="font-md">{{moneyList[shows][2]}}元/3年({{pre}}名成员)</text>
				</view>
				<view class="timeOne" :class="{tabOn:tab==3}" :data-tab="3" @click="getVal">
					<view>4.9折</view>
					<text class="lineThr">原价:￥3495</text>
					<text class="font-md">{{moneyList[shows][3]}}元/5年({{pre}}名成员)</text>
				</view>
			</view>
		</view>
		<view style="height: 40rpx;background: #F1F1F1;"></view>
		<view class="mt-4 font-md  ">
			<view class="row px-4 border-bottom" @tap="getDiscount" style="height: 80rpx;">
				<view style="line-height: 80rpx;">优惠码</view>
				<view style="line-height: 80rpx;margin-left: auto;" >领取优惠券</view>
				<image class="toimg" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view >
				<view class="row px-4 border-bottom" style="height: 80rpx;">
					<view style="line-height: 80rpx;">原价</view>
					<view style="line-height: 80rpx;margin-left: auto;">¥{{money}}</view>
				</view>
				<view class="tip px-4"
					v-if="userInfo.vipInfo.type == '企业会员' || userInfo.vipInfo.type == '省份会员'"
				>
					您好,尊贵的企业会员,您已享有网站全部特权,无需购买自选会员或VIP会员,若转变会员,请企业会员过期后再来购买
				</view>
			</view>
		</view>
		<view style="height: 40rpx;background: #F1F1F1;"></view>
		<radio-group class="uni-flex con-bot" name="gender">
			<!-- <view class="wx">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAjVBMVEUAAAAimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEg2MoZLAAAALnRSTlMA+gT16gjlz/Ij7uERP7ehcjjcvYtqKqcxF6sM18iclXlf1GRQS1ZEw7Eehn9bjbVPuAAAA2pJREFUWMOtV+e6qkAMzNJ7kSrSEbu8/+Pdc0Q5gAFhvfPP1W9MZjPJBmag3a+mIQoc2zREEmInuFYyUEC3TFFQJJY0TxBWUoQyyI/reHzPLAW2QcAKpen5i4lsy9mQZhJk41jhwogcjjSzIJyxIDJtHyFECFlUa/NMsoulhqd5nbtOXj8rzWIokc1MMTGe2KxCUkxw8bnarMTG41HBc6lZDc5C4trlpKGAUvHvOrENFZRizLXnGkpw9pApjGmZ2HI/FOpMSUSE7LIbCJUTOiIpsrej9AQ6ptPBb0P54zOpmERLfxq3SF9J6jR1oGY1wzxKWzcVcngqRaG5EBU7pg3pFv8I7bQf7NWas4mn8a1vj470kK0trnS1ifNXAWg39RlHCj/YCiudkvnaawhESpfx7yVW6wrA1Lubr5KeNMXPQbCGyTjI3Ti5DtpbAMCro/hnWvKpN7SOZzIUkAd7bPRsSjvR1Tui7T0ZZ25DPj6qvBK9trTme4Pp/f/yd9MEsE+Qkrxrf0PADhB/mOCMj6QthGd2mLThyb0hUCUNAgdiJFLwTanHnVgh89eQLjd8MMXAvcvL/IrxOmfFq95vbbo54TMO3rMm+mOUbchjnJv74ZPiNGlMQA7TtpYNVVGNajDnZIub9gFGtdm1EViupw3GtzzrDMAyvwMG/lA2s1TYdD+jTK4yb3TAbCIh78OP7yUOROz4NiZiLJH91BDBwI5LfhRS+rk/nvB2TA59om1xWjCTArDQc6eXm52pSwbJFUKChtWZ5eIhIWGogY/xzss8jRIICyfjDiDDq2QPwPB1tvixFP02afyrRN4eXHFKJNwh/IQdIjNe84R4jLRbQwG8m/jc90zs88azhgJ4A/g+LLZbXV3yJZXJdCYTv2NSfehwl75hIt6gQ35DFewGfcSgZ0r80RYvUgt1ZEYdt1Ypt6X3TZW5U60UksdjY44iLsV6Sj7OsVy9CVQ7wHFcu9HXPEwhWCVTqsM0nDWLV76dYWKWC6+mXTmh8MlC06lRpcEsit6vyfSWG5uFzMA8OlOzcWSUCiEIz8ZwjzJ8RPAkErO9H9ZW4MScxJIXJG5zim6HUIMFSFoid98W3sU+WLfMMBzn5BhGerUKXYZlYLgfd4pZPTy9yGFoh/IF1kAmiuja8D9QiO4F6PEPK7CSjTfoBuIAAAAASUVORK5CYII=" alt="微信支付">
				<text>微信支付</text>
				<label><radio value="微信" /></label>
			</view>
			<view class="zfb">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAn1BMVEUAAAABn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+jJZnQ1AAAANHRSTlMA4+nQcGz0gviQRA3DJAbGSN6eCu6VKsipiT4gHObMVtm9rqRnXDOzhWFNLxZ4EQJSOZl0zNrw/wAAAtZJREFUWMPtmNmWojAQQAvRiII2KPuioIAL7p3//7bhCFFkEkMLZ04/zH30hJukqCpLoUBWDUsTPkCzRuocnpyTELcgXAJBtnFL1nJpUnBrlLvrbOMOsM+5aok7IY+XLHSj0mQY444Yg9GVagQLzEUq4L1E0LhBcCcFnE0XwI36DEo46Sf+V/1SlU1Ui5+qvvo1VKJa9utE71UGNMf5Z6rN+BXVhIJpfzusYf0w7OtSNdc7S4a59ptUjwv2PlD1vqocSdiHoyo3iaNqng9po1ONmqiMRiplwCYms4bIUfERpoXJR61VWyj4xm1VyCtVm9YqqzSZqKFKQjkSTbUrVSPcQCXMkqvp+b43Sd1kuApftg/mpIi4KjS7yvDC3HOPkVAPep9bOJEJVOS9fT+GfiprSOSptsBmrq6ERxnEnHImpkN2da+p6cl/n+1ADsVRre+bJyu9fIlC5OzSM1Doc5pM4OeLXKs+6QzVad00tTmq73xRItGWfGc11/nqKAwVqYgLpiOt9lAnizeIobIB5AAziXYy1Jns1jpN1SfRZNDzgIK/NISqikzwK8wGucBATo/hq0oFiN7/VmAzNWNFwiFRjSstiN0QYKAydJPEIao9GSYoSDE8Kya6yMBAeOxrSoyIl6lAsiWMD0wV+e670Rvno124iFTG0Xuj0v08fJRooe2jcFS98vHNZarwEHKXUTfZKRCWtfuvLlOGCt3vsd9UHghmla1jytV3J6oKi0UwzbyhW6JorY/7ykJ5hmloowlNhZXno9Pa2VURM9BnLkWFFylQ8Q0Jv2FzIaqX13Wg5LEjYA7K4ERUT4Jb9nK3QxIh3ADB8YmqQrjqq5nnTzJ1sF7ouCm6wZgZEEL4hyCiak8PtK5UAYhdqTRYd6VawLIrlQMH1JEqIwNqJ39gzRddmHT/XmRCe5OkluOu2PpMKpScHNQuTl61kxyVMOh9QKBZo7LN/QHf5SDCzUz2PQAAAABJRU5ErkJggg==" alt="支付宝">
				<text>支付宝支付</text>
					<label><radio value="支付宝" /></label>
			</view> -->
			<view class="zhifu">
				<view class="zhifu-lf">应付金额:￥{{money}}</view>
				<view class="zhifu-rt">确认购买</view>
			</view>
		</radio-group>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				shows:0,
				tab:0,
				pre:3,
				moneyList:[[699,1199,1599,1899],[999,1714,2285,2714],[1199,2057,2743,3257]],
				money:0
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			changeShow(e) {
				this.pre = e.currentTarget.dataset.pre
				this.shows = e.currentTarget.dataset.show
				this.money = this.moneyList[this.shows][this.tab]
			},
			getVal(e){
				this.tab = e.currentTarget.dataset.tab
				this.money = this.moneyList[this.shows][this.tab]
			},
			getDiscount(){
				uni.navigateTo({
					url:'/pages/PersonalCenter/yhj?type=2'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
	}
	.titelTabs{
		width: 100%;
		padding-top: 36rpx;
		padding-bottom: 36rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.titelTabs view{
		width: 30%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		color: #656565;
		border: 2upx solid #ECECEC;
		border-radius: 5upx;
	}
	.titelTabs .titleOn{
		border: 2upx solid #00a0ea;
		border-radius: 5upx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAAVFBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv////+36P+m4/9w0v/z+/8pu/+v5v+H2f9t0f/T8f/C7P+U3f9by/8TtP9UK/BiAAAADXRSTlMA/PPjz7JsSzAaDJKR6f8Q7AAAAJRJREFUOMuFz0cSwjAQBVFydMuAA+n+9wSXVfVrEKPpdW/eIq4Jj9OWaDluiJ7DmujZr4ie3ZLoaZirgnJVUK4Kyvkg5YKi54zJBykfpP6D1PCCKgjalMABabmAC9JCCXo+OrtQglK6dWahBI3TNC89eizo+p3e09IyZ0Ca7r0WLEiTFhDoZ9KCQKZxQAnkJ5CfQH4fqXobTT5ErQ0AAAAASUVORK5CYII=") 101% 101% no-repeat;
	}
	.titlecon{
		width: 100%;
		margin-top: 0.8rem;
		padding-top: 0.8rem;
		background-color: #fff;
	}
	.time{
		font-size: 36rpx;
		color: #656565;
		width: 96%;
		display: flex;
		margin-left: 2%;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.time .timeOne{
		width: 48%;
		text-align: center;
		line-height: 165rpx;
		height: 165rpx;
		position: relative;
		border: 2upx solid #ececec;
		margin-bottom: 40rpx;
	}
	.time .timeOne .lineThr{
		font-size: 24upx;
		position: absolute;
		line-height: 50upx;
		top: 6upx;
		left: 112upx;
		text-decoration: line-through;
	}
	.time .timeOne view{
		padding: 4rpx 8rpx;
		text-align: center;
		line-height: 50upx;
		font-size: 28upx;
		color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		font-weight: 550;
		border-top-left-radius: 10upx;
		border-bottom-right-radius: 20upx;
		background-color: #e4393c;
	}
	.time .tabOn{
		border: 1upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	.vipon{
		border: 2upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	.toimg {
		height: 40rpx;
		width: 40rpx;
		margin-top: 20rpx;
	}
	.tip{
		width: 100%;
		font-size: 24rpx;
		color: #e4393c;
	} 
	.con-top .time .vipon{
		border: 2upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	.con-bot{
		width: 100%;
		height: 310upx;
		margin-top: 40upx;
		background: #fff;
		position: relative;
	}
	.con-bot .wx,.con-bot .zfb{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1upx solid #ccc;
	}
	.con-bot img{width: 60upx;height: 54upx;margin-top: 10upx;float: left;margin-left: 30upx;padding-right: 10upx}
	.con-bot .wx label,.con-bot .zfb label{float: right;margin-right: 30upx}
	.zhifu{
		text-align: center;
		line-height: 100upx;
		position: fixed;
		width: 100%;
		height: 100upx;
		bottom: 0
	}
	.zhifu .zhifu-lf{
		width: 80%;height: 100%;float: left;
		background: #00a0ea;color: #fff; 
	}
	.zhifu .zhifu-rt{
		width: 20%;height: 100%;float: left;
		background: #f8b551;color: #fff; 
	}
</style>
