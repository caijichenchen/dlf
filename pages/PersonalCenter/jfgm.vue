<template>
    <view class="contain">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">积分购买</block>
		</cu-custom>
		<view class="jifen">
			<view :class="{jifenact:shows==1}" :data-show="1" :data-num="10" @click="getVal">10积分</view>
			<view :class="{jifenact:shows==2}" :data-show="2" :data-num="20" @click="getVal">20积分</view>
			<view :class="{jifenact:shows==3}" :data-show="3" :data-num="50" @click="getVal">50积分</view>
			<view :class="{jifenact:shows==4}" :data-show="4" :data-num="100" @click="getVal">100积分</view>
			<view :class="{jifenact:shows==5}" :data-show="5" :data-num="200" @click="getVal">200积分</view>
			<view >
				<input type="text" style="height: 100%;" @blur="setVal" placeholder="其他金额">
			</view>
		</view>
		<view class="text-wrap">
			<view class="list" @tap="showyhj" >
				<view >优惠码</view>
				<view class="text-right">领取优惠券</view>
				<image class="toimg" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view style="width: 100%;">
				<view class="list">
					<view>原价</view>
					<view class="text-right">¥{{money}}</view>
				</view>
				<view class="tip"
					v-if="userInfo.vipInfo.type == '企业会员' || userInfo.vipInfo.type == '省份会员'"
				>
					您好,尊贵的企业会员,您已享有网站全部特权,无需购买自选会员或VIP会员,若转变会员,请企业会员过期后再来购买
				</view>
			</view>
		</view>
		<radio-group class="uni-flex con-bot" name="gender">
			<view class="wx">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAjVBMVEUAAAAimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEg2MoZLAAAALnRSTlMA+gT16gjlz/Ij7uERP7ehcjjcvYtqKqcxF6sM18iclXlf1GRQS1ZEw7Eehn9bjbVPuAAAA2pJREFUWMOtV+e6qkAMzNJ7kSrSEbu8/+Pdc0Q5gAFhvfPP1W9MZjPJBmag3a+mIQoc2zREEmInuFYyUEC3TFFQJJY0TxBWUoQyyI/reHzPLAW2QcAKpen5i4lsy9mQZhJk41jhwogcjjSzIJyxIDJtHyFECFlUa/NMsoulhqd5nbtOXj8rzWIokc1MMTGe2KxCUkxw8bnarMTG41HBc6lZDc5C4trlpKGAUvHvOrENFZRizLXnGkpw9pApjGmZ2HI/FOpMSUSE7LIbCJUTOiIpsrej9AQ6ptPBb0P54zOpmERLfxq3SF9J6jR1oGY1wzxKWzcVcngqRaG5EBU7pg3pFv8I7bQf7NWas4mn8a1vj470kK0trnS1ifNXAWg39RlHCj/YCiudkvnaawhESpfx7yVW6wrA1Lubr5KeNMXPQbCGyTjI3Ti5DtpbAMCro/hnWvKpN7SOZzIUkAd7bPRsSjvR1Tui7T0ZZ25DPj6qvBK9trTme4Pp/f/yd9MEsE+Qkrxrf0PADhB/mOCMj6QthGd2mLThyb0hUCUNAgdiJFLwTanHnVgh89eQLjd8MMXAvcvL/IrxOmfFq95vbbo54TMO3rMm+mOUbchjnJv74ZPiNGlMQA7TtpYNVVGNajDnZIub9gFGtdm1EViupw3GtzzrDMAyvwMG/lA2s1TYdD+jTK4yb3TAbCIh78OP7yUOROz4NiZiLJH91BDBwI5LfhRS+rk/nvB2TA59om1xWjCTArDQc6eXm52pSwbJFUKChtWZ5eIhIWGogY/xzss8jRIICyfjDiDDq2QPwPB1tvixFP02afyrRN4eXHFKJNwh/IQdIjNe84R4jLRbQwG8m/jc90zs88azhgJ4A/g+LLZbXV3yJZXJdCYTv2NSfehwl75hIt6gQ35DFewGfcSgZ0r80RYvUgt1ZEYdt1Ypt6X3TZW5U60UksdjY44iLsV6Sj7OsVy9CVQ7wHFcu9HXPEwhWCVTqsM0nDWLV76dYWKWC6+mXTmh8MlC06lRpcEsit6vyfSWG5uFzMA8OlOzcWSUCiEIz8ZwjzJ8RPAkErO9H9ZW4MScxJIXJG5zim6HUIMFSFoid98W3sU+WLfMMBzn5BhGerUKXYZlYLgfd4pZPTy9yGFoh/IF1kAmiuja8D9QiO4F6PEPK7CSjTfoBuIAAAAASUVORK5CYII=" alt="微信支付">
				<text>微信支付</text>
				<label><radio value="微信" checked="true"/></label>
			</view>
			<view class="zfb">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAn1BMVEUAAAABn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+jJZnQ1AAAANHRSTlMA4+nQcGz0gviQRA3DJAbGSN6eCu6VKsipiT4gHObMVtm9rqRnXDOzhWFNLxZ4EQJSOZl0zNrw/wAAAtZJREFUWMPtmNmWojAQQAvRiII2KPuioIAL7p3//7bhCFFkEkMLZ04/zH30hJukqCpLoUBWDUsTPkCzRuocnpyTELcgXAJBtnFL1nJpUnBrlLvrbOMOsM+5aok7IY+XLHSj0mQY444Yg9GVagQLzEUq4L1E0LhBcCcFnE0XwI36DEo46Sf+V/1SlU1Ui5+qvvo1VKJa9utE71UGNMf5Z6rN+BXVhIJpfzusYf0w7OtSNdc7S4a59ptUjwv2PlD1vqocSdiHoyo3iaNqng9po1ONmqiMRiplwCYms4bIUfERpoXJR61VWyj4xm1VyCtVm9YqqzSZqKFKQjkSTbUrVSPcQCXMkqvp+b43Sd1kuApftg/mpIi4KjS7yvDC3HOPkVAPep9bOJEJVOS9fT+GfiprSOSptsBmrq6ERxnEnHImpkN2da+p6cl/n+1ADsVRre+bJyu9fIlC5OzSM1Doc5pM4OeLXKs+6QzVad00tTmq73xRItGWfGc11/nqKAwVqYgLpiOt9lAnizeIobIB5AAziXYy1Jns1jpN1SfRZNDzgIK/NISqikzwK8wGucBATo/hq0oFiN7/VmAzNWNFwiFRjSstiN0QYKAydJPEIao9GSYoSDE8Kya6yMBAeOxrSoyIl6lAsiWMD0wV+e670Rvno124iFTG0Xuj0v08fJRooe2jcFS98vHNZarwEHKXUTfZKRCWtfuvLlOGCt3vsd9UHghmla1jytV3J6oKi0UwzbyhW6JorY/7ykJ5hmloowlNhZXno9Pa2VURM9BnLkWFFylQ8Q0Jv2FzIaqX13Wg5LEjYA7K4ERUT4Jb9nK3QxIh3ADB8YmqQrjqq5nnTzJ1sF7ouCm6wZgZEEL4hyCiak8PtK5UAYhdqTRYd6VawLIrlQMH1JEqIwNqJ39gzRddmHT/XmRCe5OkluOu2PpMKpScHNQuTl61kxyVMOh9QKBZo7LN/QHf5SDCzUz2PQAAAABJRU5ErkJggg==" alt="支付宝">
				<text>支付宝支付</text>
				<label><radio value="支付宝" /></label>
			</view>
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
	  data () {
		return {
				money:10,
				shows:'1'
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods:{
			showyhj(){
				uni.navigateTo({
					url:'yhj'
				})
			},
			getVal(e) {
				this.shows = e.currentTarget.dataset.show
				this.money = e.currentTarget.dataset.num
			},
			setVal(e){
				this.money = e.target.value
			}
		}
	}
</script>

<style scoped>
	page{
		background: #fff;
	}
	.jifen{
		width: 100%;
		background: #fff;
		display: flex;
		justify-content: space-around;
		padding-bottom: 40rpx;
		flex-wrap: wrap;
		text-align: center;
		font-size: 32rpx;
	}
	.jifen view{
		width: 30%;
		height: 90rpx;
		line-height: 90rpx;
		color: #656565;
		border: 2upx solid #ccc;
		margin-top: 40rpx;
	}
	.jifen .jifenact{
		border: 1upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAAVFBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv////+36P+m4/9w0v/z+/8pu/+v5v+H2f9t0f/T8f/C7P+U3f9by/8TtP9UK/BiAAAADXRSTlMA/PPjz7JsSzAaDJKR6f8Q7AAAAJRJREFUOMuFz0cSwjAQBVFydMuAA+n+9wSXVfVrEKPpdW/eIq4Jj9OWaDluiJ7DmujZr4ie3ZLoaZirgnJVUK4Kyvkg5YKi54zJBykfpP6D1PCCKgjalMABabmAC9JCCXo+OrtQglK6dWahBI3TNC89eizo+p3e09IyZ0Ca7r0WLEiTFhDoZ9KCQKZxQAnkJ5CfQH4fqXobTT5ErQ0AAAAASUVORK5CYII=") 101% 100% no-repeat;
	}
	.text-wrap {
		margin-top: 0.7rem;
		background: #fff;
		font-size: 0.82rem;
	}
	.text-wrap .list {
		height: 2.4rem;
		display: flex;
		line-height: 2.4rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		border-bottom: 2upx solid #ccc;
	}
	.toimg {
		height: 1.2rem;
		width: 1.2rem;
		margin-top: 0.6rem;
	}
	.text-right {
		margin-left: auto;
	}
	.tip{
		width: 95%;
		margin-left: 2.5%;
		color: #e4393c;
	} 
	.con-bot{
		width: 100%;
		height: 310upx;
		margin-top: 40upx;
		background: #fff;
		position: relative;
		font-size: 0.82rem;
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
