<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">自选会员</block>
		</cu-custom>
		<view>
			<view class="font-bs iconBLue px-4">1、快速选择自选计算器</view>
			<view class="border-bottom py-2">
				<view class="font-bs iconG">丨 选择省份 :</view>
				<view class="row" >
					<view class="sf-item p-1 m-1 font-md" 
						v-for="(item,index) in sfList" 
						:key="index" 
						:class="activeBorde == index ? 'activeBorde' : ''"
						@tap="getVal(item,index)"
					>
						<view >{{item}}</view>
					</view>
				</view>
			</view>
			<view class="border-bottom py-2">
				<view class="font-bs iconG mt-4">丨 选择分类 :</view>
				<view class="row" >
					<view class="sf-item p-1 m-1 font-md"
						v-for="(item,index) in flList" 
						:key="index" 
						:data-sortitem="item.name"
						:data-key="index"
						:class="activeSort == index ? 'activeBorde' : ''"
						@tap="getSortVal"
					>
						<view>{{item.name}}</view>
					</view>
				</view>
			</view>
			<view class="border-bottom py-4">
				<view class="font-bs iconG mt-2">丨 选择计算器 :</view>
				<view class="row text-center px-4 py-3 mt-3" style="background: #f9f9f9;">
					<view v-if="pro == ''&& sortItem == ''"
						style="line-height: 120rpx; margin-left: auto;margin-right: auto;"
					>请选择一个计算器哦~</view>
					<view v-else-if="caList.length == 0"
						style="line-height: 120rpx; margin-left: auto;margin-right: auto;"
					>该分类下暂无计算器,请重新筛选</view>
					<view 
						v-else
						v-for="(item,index) in caList" 
						:key="index" 
						class="c-list"
						:class="{'okitem' : selectList.includes(item.name)}"
						@tap="getResultList(item)"
					>
						<view >
							{{item.name}} 
							<text style="font-size: 32rpx;color: #00A0E0;"> {{item.price}} </text> 元/月
							<text v-if="selectList.includes(item.name)" class="chioceok"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="font-bs iconBLue px-4 mt-4">2、确认要购买的选择好的计算器</view>
			<view class="row py-3">
				<view
					v-for="(item,index) in selectList" 
					:key="index"
					style="padding-left: 1.2rem;"
				>
					<view class="c-item">{{item}}</view>
				</view>
			</view>
			<view class="over-choice">
				<view class="font-bs iconBLue px-4">3、选择时长</view>
				<view class="val-box">
					<view class="val-item" :class="{vipon:shows==1}" :data-show="1" @tap="changeShow">{{money}}元/1月</view>
					<view class="val-item" :class="{vipon:shows==3}" :data-show="3" @tap="changeShow">{{money*3}}元/3月</view>
					<view class="val-item" :class="{vipon:shows==6}" :data-show="6" @tap="changeShow">{{money*6}}元/6月</view>
					<view class="val-item" :class="{vipon:shows==12}" :data-show="12" @tap="changeShow">{{money*12}}元/12月</view>
				</view>
			</view>
			<view class="mt-4 font-md  ">
				<view class="row px-4 border-bottom" @tap="getDiscount" style="height: 80rpx;">
					<view style="line-height: 80rpx;">优惠码</view>
					<view style="line-height: 80rpx;margin-left: auto;" >领取优惠券</view>
					<image class="toimg" src="/static/HM-PersonalCenter/to.png"></image>
				</view>
				<view >
					<view class="row px-4 border-bottom" style="height: 80rpx;">
						<view style="line-height: 80rpx;">原价</view>
						<view style="line-height: 80rpx;margin-left: auto;">¥{{getMoney}}</view>
					</view>
					<view class="tip px-4"
						v-if="userInfo.vipInfo.type == '企业会员' || userInfo.vipInfo.type == '省份会员'"
					>
						您好,尊贵的企业会员,您已享有网站全部特权,无需购买自选会员或VIP会员,若转变会员,请企业会员过期后再来购买
					</view>
				</view>
			</view>
			<radio-group class="uni-flex con-bot" name="gender">
				<!-- <view class="wx">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAjVBMVEUAAAAimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEg2MoZLAAAALnRSTlMA+gT16gjlz/Ij7uERP7ehcjjcvYtqKqcxF6sM18iclXlf1GRQS1ZEw7Eehn9bjbVPuAAAA2pJREFUWMOtV+e6qkAMzNJ7kSrSEbu8/+Pdc0Q5gAFhvfPP1W9MZjPJBmag3a+mIQoc2zREEmInuFYyUEC3TFFQJJY0TxBWUoQyyI/reHzPLAW2QcAKpen5i4lsy9mQZhJk41jhwogcjjSzIJyxIDJtHyFECFlUa/NMsoulhqd5nbtOXj8rzWIokc1MMTGe2KxCUkxw8bnarMTG41HBc6lZDc5C4trlpKGAUvHvOrENFZRizLXnGkpw9pApjGmZ2HI/FOpMSUSE7LIbCJUTOiIpsrej9AQ6ptPBb0P54zOpmERLfxq3SF9J6jR1oGY1wzxKWzcVcngqRaG5EBU7pg3pFv8I7bQf7NWas4mn8a1vj470kK0trnS1ifNXAWg39RlHCj/YCiudkvnaawhESpfx7yVW6wrA1Lubr5KeNMXPQbCGyTjI3Ti5DtpbAMCro/hnWvKpN7SOZzIUkAd7bPRsSjvR1Tui7T0ZZ25DPj6qvBK9trTme4Pp/f/yd9MEsE+Qkrxrf0PADhB/mOCMj6QthGd2mLThyb0hUCUNAgdiJFLwTanHnVgh89eQLjd8MMXAvcvL/IrxOmfFq95vbbo54TMO3rMm+mOUbchjnJv74ZPiNGlMQA7TtpYNVVGNajDnZIub9gFGtdm1EViupw3GtzzrDMAyvwMG/lA2s1TYdD+jTK4yb3TAbCIh78OP7yUOROz4NiZiLJH91BDBwI5LfhRS+rk/nvB2TA59om1xWjCTArDQc6eXm52pSwbJFUKChtWZ5eIhIWGogY/xzss8jRIICyfjDiDDq2QPwPB1tvixFP02afyrRN4eXHFKJNwh/IQdIjNe84R4jLRbQwG8m/jc90zs88azhgJ4A/g+LLZbXV3yJZXJdCYTv2NSfehwl75hIt6gQ35DFewGfcSgZ0r80RYvUgt1ZEYdt1Ypt6X3TZW5U60UksdjY44iLsV6Sj7OsVy9CVQ7wHFcu9HXPEwhWCVTqsM0nDWLV76dYWKWC6+mXTmh8MlC06lRpcEsit6vyfSWG5uFzMA8OlOzcWSUCiEIz8ZwjzJ8RPAkErO9H9ZW4MScxJIXJG5zim6HUIMFSFoid98W3sU+WLfMMBzn5BhGerUKXYZlYLgfd4pZPTy9yGFoh/IF1kAmiuja8D9QiO4F6PEPK7CSjTfoBuIAAAAASUVORK5CYII=" alt="微信支付">
					<text>微信支付</text>
					<label><radio value="微信" checked="true"/></label>
				</view>
				<view class="zfb">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAn1BMVEUAAAABn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+jJZnQ1AAAANHRSTlMA4+nQcGz0gviQRA3DJAbGSN6eCu6VKsipiT4gHObMVtm9rqRnXDOzhWFNLxZ4EQJSOZl0zNrw/wAAAtZJREFUWMPtmNmWojAQQAvRiII2KPuioIAL7p3//7bhCFFkEkMLZ04/zH30hJukqCpLoUBWDUsTPkCzRuocnpyTELcgXAJBtnFL1nJpUnBrlLvrbOMOsM+5aok7IY+XLHSj0mQY444Yg9GVagQLzEUq4L1E0LhBcCcFnE0XwI36DEo46Sf+V/1SlU1Ui5+qvvo1VKJa9utE71UGNMf5Z6rN+BXVhIJpfzusYf0w7OtSNdc7S4a59ptUjwv2PlD1vqocSdiHoyo3iaNqng9po1ONmqiMRiplwCYms4bIUfERpoXJR61VWyj4xm1VyCtVm9YqqzSZqKFKQjkSTbUrVSPcQCXMkqvp+b43Sd1kuApftg/mpIi4KjS7yvDC3HOPkVAPep9bOJEJVOS9fT+GfiprSOSptsBmrq6ERxnEnHImpkN2da+p6cl/n+1ADsVRre+bJyu9fIlC5OzSM1Doc5pM4OeLXKs+6QzVad00tTmq73xRItGWfGc11/nqKAwVqYgLpiOt9lAnizeIobIB5AAziXYy1Jns1jpN1SfRZNDzgIK/NISqikzwK8wGucBATo/hq0oFiN7/VmAzNWNFwiFRjSstiN0QYKAydJPEIao9GSYoSDE8Kya6yMBAeOxrSoyIl6lAsiWMD0wV+e670Rvno124iFTG0Xuj0v08fJRooe2jcFS98vHNZarwEHKXUTfZKRCWtfuvLlOGCt3vsd9UHghmla1jytV3J6oKi0UwzbyhW6JorY/7ykJ5hmloowlNhZXno9Pa2VURM9BnLkWFFylQ8Q0Jv2FzIaqX13Wg5LEjYA7K4ERUT4Jb9nK3QxIh3ADB8YmqQrjqq5nnTzJ1sF7ouCm6wZgZEEL4hyCiak8PtK5UAYhdqTRYd6VawLIrlQMH1JEqIwNqJ39gzRddmHT/XmRCe5OkluOu2PpMKpScHNQuTl61kxyVMOh9QKBZo7LN/QHf5SDCzUz2PQAAAABJRU5ErkJggg==" alt="支付宝">
					<text>支付宝支付</text>
						<label><radio value="支付宝" /></label>
				</view> -->
				<view class="zhifu">
					<view class="zhifu-lf">应付金额:￥{{getMoney}}</view>
					<view class="zhifu-rt">确认购买</view>
				</view>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'	
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				sfList: [
					"全国","安徽","北京","重庆","福建","甘肃","广东","广西","贵州","海南","河南","河北","黑龙江","湖北","湖南","吉林",
					"江苏","江西","辽宁","内蒙古","宁夏","青海","山东","山西","陕西","上海","四川","天津","西藏","新疆","云南","浙江",
				],
				flList:[],
				shows:1,
				activeBorde: -1,
				activeSort:-1,
				pro:'',
				sortItem: '',
				caList:{},
				selectList:[],
				selectPriceList:[],
				money:0
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			}),
			getMoney(){
				return this.money * this.shows
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/getStandard'
			}).then(res=>{
				this.flList = res.data.filter(item=>{
					return item.name != '其他标准'
				})
			}).catch(err=>{
				console.log(err)
			})
		},
		methods: {
			changeShow(e){
				this.shows = e.currentTarget.dataset.show
			},
			getVal(pro,key){
				if(this.pro == pro){
					this.pro = ''
					this.activeBorde = -1
				}else {
					this.pro = pro
					this.activeBorde = key
					this.showCalcultor()
				}
			},
			getSortVal(e){//分类计算器
				if(this.sortItem == e.currentTarget.dataset.sortitem){
					this.sortItem = ''
					this.activeSort = -1
				}else {
					this.sortItem = e.currentTarget.dataset.sortitem
					this.activeSort = e.currentTarget.dataset.key
				}
				this.showCalcultor()
			},
			showCalcultor(){//初始计算器
				var url = '/api/xcx/getCalculatorByProvince?state=1&province='+this.pro
				if(this.pro && this.sortItem){
					url = '/api/xcx/getCalculatorByProvince?state=1&province='+this.pro+'&calculator_type='+this.sortItem
				}else if(!this.pro && this.sortItem){
					url = '/api/xcx/getCalculatorByProvince?state=1&calculator_type='+this.sortItem
				}
				$req.request({
					url:url
				}).then(res=>{
					this.caList = res.data.message
				}).catch(err=>{
					console.log(err)
				})
			},
			getResultList(item){
				const itemName = item.name
				const itemPrice = item.price
				const resultName = this.selectList.indexOf(itemName);
				const resultPrice = this.selectPriceList.indexOf(itemPrice)
				if (resultName > -1) {
					//之前选中取消选中
					this.selectList.splice(resultName, 1);
					this.selectPriceList.splice(resultPrice, 1);
					this.money = 0
					this.selectPriceList.forEach(val=>{
						this.money += (val-0)
					})
					return
				}
				//选中
				this.selectList.push(itemName);
				this.selectPriceList.push(itemPrice);
				this.money = 0
				this.selectPriceList.forEach(val=>{
					this.money += (val-0)
				})
			},
			getDiscount(){
				uni.navigateTo({
					url:'/pages/PersonalCenter/yhj?type=3'
				})
			}
		},
	}
</script>

<style>
	page{
		background: #fff;
	}
	.activeBorde {
		margin: 8rpx;
		border: 2rpx solid #00A0E0;
		color: #00A0E0;
	}
	.sf-item {
		display: inline-block;
	}
	.c-list{
		font-size: 28rpx;
		border: 2upx solid #ddd;
		display: inline-block;
		padding: 20rpx;
		margin-top: 16rpx;
		margin-left: auto;
		margin-right: auto;
		position: relative;
	}
	.c-item {
		font-size: 28rpx;
		border: 2upx solid #3788e4;
		color: #3788e4;
		display: inline-block;
		padding: 16rpx;
		margin-top: 16rpx;
	}
	.val-box{
		margin-top: 30rpx;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.val-item {
		height: 90rpx;
		line-height: 90rpx;
		width: 45%;
		border: 2upx solid #dee2e6;
		text-align: center;
		font-size: 32rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.vipon {
		border: 2upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	.okitem {
		border: 2upx solid #00a0ea;
	}
	.chioceok {
		width: 42rpx;
		height: 28rpx;
		position: absolute;
		right: 0;
		bottom: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAAoOoAoOoAoOoAoOoAoOr///8nr+7z+/6c2veP1vbk9f3Q7fu65fmC0PV3zPRCue84te8Sp+sDoeoBoOpVGAzAAAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCAVROSwKzuH+Z7WGSp6vbaB4A6HTPAZtGuhAoANrAj2BnkBP4LNkaOAVgTulOhq420m09QXai8WKbb79Xh+W8RxKDqUPVvADbKCslAcAAAAASUVORK5CYII=") no-repeat;
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
