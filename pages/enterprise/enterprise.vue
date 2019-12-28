<template>
	<view>
		<view class="m-mian">
			<view>
				<p class="m-name">
					1、快速选择省份计算器:
				</p>
				<view class="o-quickprovince" style="background-color: #FFFFFF;">
					<view class="d-c-province">
						<view class="d-c-area">
							<text>华南:</text>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
							<view :class="{titleOn:show==2}" @click="showtab2">广西</view>
							<view :class="{titleOn:show==3}" @click="showtab3">海南</view>
						</view>
						<view class="d-c-area">
							<text>华北:</text>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
							<view :class="{titleOn:show==2}" @click="showtab2">广西</view>
							<view :class="{titleOn:show==3}" @click="showtab3">海南</view>
							<view :class="{titleOn:show==4}" @click="showtab4">广东</view>
						</view>
						<view class="d-c-area">
							<text>华东:</text>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
							<view :class="{titleOn:show==1}" @click="showtab1">广西</view>
							<view :class="{titleOn:show==1}" @click="showtab1">海南</view>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
					<!-- 		<view :class="{titleOn:show==1}" @click="showtab1">广西</view>
							<view :class="{titleOn:show==1}" @click="showtab1">海南</view> -->
						</view>
						<view class="d-c-area">
							<text>华中:</text>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
							<view :class="{titleOn:show==1}" @click="showtab1">广西</view>
							<view :class="{titleOn:show==1}" @click="showtab1">海南</view>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view><!-- 
							<view :class="{titleOn:show==1}" @click="showtab1">广西</view>
							<view :class="{titleOn:show==1}" @click="showtab1">海南</view> -->
						</view>
						<view class="d-c-area">
							<text>西部:</text>
							<view :class="{titleOn:show==1}" @click="showtab1">广东</view>
							<view :class="{titleOn:show==1}" @click="showtab1">广西</view>
							<view :class="{titleOn:show==1}" @click="showtab1">海南</view>
						</view>
					</view>
					<p class="m-name">
						包含的计算器
					</p>
					<!-- <view class="" style="margin-top: 20upx;">
						<p style="text-align: center;padding: 20upx;font-size: 26upx;color: #656565;">
							您还没有选择计算器哦
						</p>
					</view> -->
					<view class="provinceCalList" style="margin-top: 20upx;">
						<p>设计费计算器</p>
						<p>设计费计算器</p>
						<p>设计费计算器设计费计算器设计费计算器</p>
						<p>设计费计算器设计费计算器</p>
						<p>设计费计算器</p>
						<p>设计费计算器</p>
						<p>设计费计算器</p>
						
					</view>
				</view>
			</view>
			<view class="type_main">
				<p class="m-name">
					2、选择的省份：
				</p>
				<view class="customize_member">
					<p class="choiceProvince">
						<span>湖南39元/月</span>
						<span>湖南39元/月</span>
						<span>湖南39元/月</span>
						<span>湖南39元/月</span>
					</p>
				</view>
			</view>
			<view class="type_main">
				<p class="m-name">
					3、选择时长：
				</p>
				<view class="time" style="background: #FFFFFF;">
					<view class="timeOne" :class="{vipon:shows==1}" @click="showqyhy1">
						<text>68元/1月</text>
					</view>
					<view class="timeOne" :class="{vipon:shows==2}" @click="showqyhy2">
						<view>8.5折</view>
						<text class="lineThr">原价:￥204</text>
						<text>179元/3月</text>
					</view>
					<view class="timeOne" :class="{vipon:shows==3}" @click="showqyhy3">
						<view>5.9折</view>
						<text class="lineThr">原价:￥408</text>
						<text>259元/6月</text>
					</view>
					<view class="timeOne" :class="{vipon:shows==4}" @click="showqyhy4">
						<view>4.3折</view>
						<text class="lineThr">原价:￥816</text>
						<text>399元/12月</text>
					</view>
				</view>
				<view class="m-coupon">
					<view class="pn-content">
						<p>优惠码</p>
						<p class="m-get">
							<span>暂无</span>
							>
						</p>
					</view>
					<view class="pn-contents">
						<p>原价</p>
						<p class="m-get">
							<span>￥{{money}}</span>
						</p>
					</view>
				</view>
			</view>
			<radio-group class="uni-flex con-bot" name="gender">
				<view class="wx">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAjVBMVEUAAAAimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEg2MoZLAAAALnRSTlMA+gT16gjlz/Ij7uERP7ehcjjcvYtqKqcxF6sM18iclXlf1GRQS1ZEw7Eehn9bjbVPuAAAA2pJREFUWMOtV+e6qkAMzNJ7kSrSEbu8/+Pdc0Q5gAFhvfPP1W9MZjPJBmag3a+mIQoc2zREEmInuFYyUEC3TFFQJJY0TxBWUoQyyI/reHzPLAW2QcAKpen5i4lsy9mQZhJk41jhwogcjjSzIJyxIDJtHyFECFlUa/NMsoulhqd5nbtOXj8rzWIokc1MMTGe2KxCUkxw8bnarMTG41HBc6lZDc5C4trlpKGAUvHvOrENFZRizLXnGkpw9pApjGmZ2HI/FOpMSUSE7LIbCJUTOiIpsrej9AQ6ptPBb0P54zOpmERLfxq3SF9J6jR1oGY1wzxKWzcVcngqRaG5EBU7pg3pFv8I7bQf7NWas4mn8a1vj470kK0trnS1ifNXAWg39RlHCj/YCiudkvnaawhESpfx7yVW6wrA1Lubr5KeNMXPQbCGyTjI3Ti5DtpbAMCro/hnWvKpN7SOZzIUkAd7bPRsSjvR1Tui7T0ZZ25DPj6qvBK9trTme4Pp/f/yd9MEsE+Qkrxrf0PADhB/mOCMj6QthGd2mLThyb0hUCUNAgdiJFLwTanHnVgh89eQLjd8MMXAvcvL/IrxOmfFq95vbbo54TMO3rMm+mOUbchjnJv74ZPiNGlMQA7TtpYNVVGNajDnZIub9gFGtdm1EViupw3GtzzrDMAyvwMG/lA2s1TYdD+jTK4yb3TAbCIh78OP7yUOROz4NiZiLJH91BDBwI5LfhRS+rk/nvB2TA59om1xWjCTArDQc6eXm52pSwbJFUKChtWZ5eIhIWGogY/xzss8jRIICyfjDiDDq2QPwPB1tvixFP02afyrRN4eXHFKJNwh/IQdIjNe84R4jLRbQwG8m/jc90zs88azhgJ4A/g+LLZbXV3yJZXJdCYTv2NSfehwl75hIt6gQ35DFewGfcSgZ0r80RYvUgt1ZEYdt1Ypt6X3TZW5U60UksdjY44iLsV6Sj7OsVy9CVQ7wHFcu9HXPEwhWCVTqsM0nDWLV76dYWKWC6+mXTmh8MlC06lRpcEsit6vyfSWG5uFzMA8OlOzcWSUCiEIz8ZwjzJ8RPAkErO9H9ZW4MScxJIXJG5zim6HUIMFSFoid98W3sU+WLfMMBzn5BhGerUKXYZlYLgfd4pZPTy9yGFoh/IF1kAmiuja8D9QiO4F6PEPK7CSjTfoBuIAAAAASUVORK5CYII=" alt="微信支付">
					<text>微信支付</text>
					<label><radio value="微信" /></label>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shows:1,
				money:68,
				show:[]
			}
		},
		methods: {
			showqyhy1:function (){
				this.shows = 1
				this.money = 68
			},
			showqyhy2:function (){
				this.shows = 2
				this.money = 179
			
			},
			showqyhy3:function (){
				this.shows = 3
				this.money = 259
			
			},
			showqyhy4:function (){
				this.shows = 4
				this.money = 399
			
			},
			showtab1:function(){
				this.show = 1
			},
			showtab2:function(){
				this.show = 2
			},
			showtab3:function(){
				this.show = 3
			}
		}
	}
</script>

<style>
	.m-mian{
		background-color: #FFFFFF;
	}
	.d-c-area{
		width: 100%;
		height: 130upx;
		background: #fff;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.d-c-area view{
		height: 54upx;
		padding: 5upx 38upx 5upx 28upx;
		font-size: 28upx;
		color: #656565;
		margin-right: 10upx;
	}
	.d-c-area .titleOn{
		border: 1upx solid #00a0ea;
		border-radius: 5upx;
		background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAAoOoAoOoAoOoAoOoAoOr///8nr+7z+/6c2veP1vbk9f3Q7fu65fmC0PV3zPRCue84te8Sp+sDoeoBoOpVGAzAAAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCAVROSwKzuH+Z7WGSp6vbaB4A6HTPAZtGuhAoANrAj2BnkBP4LNkaOAVgTulOhq420m09QXai8WKbb79Xh+W8RxKDqUPVvADbKCslAcAAAAASUVORK5CYII=") 100% 100% no-repeat;
	}
	/*公共样式*/
	.m-name{
		margin:0; 
		padding: 30upx 0 20upx 45upx;
		color: #00a0ea;
		font-size: 36upx;
		background-color: #FFFFFF;
	}
	/*价格*/
	.time{
		width: 150%;
		height: 188upx;
		padding-left: 2%;
		display: flex;
		white-space: nowrap;
		overflow-x: scroll;
	}
	.time .timeOne{
		width: 350upx;
		height: 154upx;
		text-align: center;
		line-height: 154upx;
		position: relative;
		border: 1upx solid #ececec;
		display: inline-block;
	}
	.timeOne view{
		width: 88upx;
		height: 50upx;
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
	.timeOne .lineThr{
		font-size: 24upx;
		position: absolute;
		line-height: 50upx;
		top: 6upx;
		left: 112upx;
		text-decoration: line-through;
	}
	.time .vipon{
		border: 1upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	/*头部*/
	.d-c-area{
		width: 100%;
		padding: 30upx 0;
	}
	.d-c-area text{
		padding: 0 15upx;
		font-size: 28upx;
		color: #0b8ed2;
	}
	.d-c-area view{
		height: 54upx;
		border: 1px solid transparent;
		padding: 5upx 38upx 5upx 28upx;
		font-size: 28upx;
		color: #656565;
	}
	.d-c-province{
		margin-left: 10upx;
	}
	/*优惠码部分*/
	.m-coupon{
		width: 100%;
		background-color: #FFFFFF;
		padding-top: 40upx;
		padding-left: 26upx;
	}
	.pn-content{
		width: 100%;
		height: 75upx;
		line-height: 75upx;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #CCCCCC;
	}
	.pn-contents{
		width: 100%;
		height: 75upx;
		line-height: 75upx;
		display: flex;
		flex-wrap: wrap;
	}
	.pn-content p{
		width: 48%;
		font-size: 32upx;
	}
	.pn-contents p{
		width: 48%;
		font-size: 32upx;
	}
	.m-get{
		width: 80%;
		text-align: right;
	}
	/*省份计算器部分*/
	.provinceCalList{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 40upx 0 20upx 40upx;
		background-color: #f9f9f9;
	}
	.provinceCalList p{
		border: 2upx solid #CCCCCC;
		padding: 10upx;
		margin: 0 20upx 20upx 0;
		font-size: 22upx;
	}
	/*省份价格部分*/
	.customize_member{
		background-color: #FFFFFF;
		margin-left: 10upx;
	}
	.choiceProvince{
		display: flex;
		flex-wrap: wrap;
	}
	.choiceProvince span{
		width: 25%;
		border: 1px solid #00a0ea;
		color: #00a0ea;
		margin: 0 20upx 20upx 0;
		padding: 10upx 20upx;
		font-size: 22upx;
	}
	/*底部*/
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
