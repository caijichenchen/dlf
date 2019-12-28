<template>
	<view >
		<uni-collapse animation="outer" >
			<uni-collapse-item title="点击选择计算器,再次点击折叠" style="color: #3071d1;background: #fff;" >
				<view style="color: #000000;">
					<view class="c-header mx-3">
						<view class="border-bottom my-2">
							<view class="iconBLue font-mb">| 选择推荐模板</view>
							<view class="py-2"></view>
						</view>
						<view class="border-bottom my-2">
							<view class="iconBLue font-mb">| 选择自定义模板</view>
							<view class="py-2">
								<view v-if="!loginState" class="cbox-wrap" style="text-align: center;">
									<view class="iconBLue " style="font-size: 26rpx;">您还没有登录,登陆后轻松配置常用模板</view>
									<view class="go-login-btn" @tap="goLogin">去登陆</view>
								</view>
							</view>
						</view>
						<view class="border-bottom my-2">
							<view class="iconBLue font-mb">| 选择省份</view>
							<view class="py-2 pro-wrap">
								<view class="pro-item" 
									v-for="(item,index) in provinceLists" 
									:key="index" 
									:data-name="item" 
									:class="{'choose':clickPro == item}"
									@tap="getProCal"
									>
									{{item}}
								</view>
							</view>
						</view>
						<view class="border-bottom my-2">
							<view class="iconBLue font-mb">| 选择分类</view>
							<view class="py-2 pro-wrap">
								<view class="pro-item" 
									v-for="(item,index) in filterList" 
									:key="index" 
									:class="{'choose':clickFilter == item}"
									:data-category="item"
									@tap="getCateCal"
								>
									<view :class="someCalList.includes(item)?'iconBLue':''">{{item}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="c-content mx-3 my-2">
						<view>
							<text class="iconGreen">(绿色表示拥有该计算器权限可免费计算、<text class="iconBLue">蓝色表示无权限可消耗积分计算)</text></text>
						</view>
						<view class="cbox-wrap">
							<view v-if="proCalList.length == 0" class="nocal">该分类下暂无计算器哦</view>
							<view class="cbox-wrap cal-flex" v-else>
								<view class="login all-btn" @tap="getAll">全选<text :class="allStatus?'bg-i':''"></text></view>
								<view v-for="(item,index) in proCalList" 
									:key="index" class="c-item" 
									:class="loginState ? 'login' : 'nologin'"
									:data-item="JSON.stringify(item)"
									@tap="changeCal"
								>
									{{item.name}}
									<text v-if="loginState" :class="item.check ? 'bg-i' : ''"></text>
									<text v-else :class="item.check ? 'bl-bg-i' : ''"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem
	} from "@dcloudio/uni-ui"
	import $req from '@/common/req/request.js'
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		data() {
			return {
				provinceLists: ['全国','海南','广东','广西','北京','天津','河北','山西','辽宁','吉林','黑龙江','内蒙古','上海','浙江','江苏','山东','安徽','福建','湖南','湖北','河南','江西','四川','重庆','贵州','云南','陕西','甘肃','宁夏','青海','新疆'],
				filterList: [],
				someCalList:['设计费','造价咨询费','监理费','招标代理费','环境影响评价费','建设项目前期工作咨询费','勘察费','建设单位管理费','工程保险费','水土保持费','场地准备及临时设施费','地质灾害危险性评估收费','劳动安全卫生评审费','施工图审查费','预备费','建设期利息','铺底流动资金'],
				clickPro: '',
				clickFilter: '',
				proCalList: []
			}
		},
		mounted() {
			$req.request({
				url:'/api/xcx/getAll'
			}).then(res=>{
				this.filterList = res.data.data.filter(item=>{
						return item != '其他标准'
					})
			}).catch(err=>{
				console.log(err)
			})
		},
		methods: {
			...mapMutations(['chooseCal','chooseAllCal',]),
			goLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			getProCal(e){//点击省份
				if(this.clickPro == e.currentTarget.dataset.name){
					this.clickPro = ''
					return
				}
				this.clickPro = e.currentTarget.dataset.name
				let url = '/api/xcx/getCalculatorByProvince' 
				let data = {
					state: 1,
					province:this.clickPro 
				}
				if(this.clickFilter){
					data = {
						state: 1,
						province:this.clickPro,
						calculator_type: this.clickFilter
					}
				}
				$req.request({
					url:url,
					data:data
				}).then(res=>{
					this.proCalList = []
					let data = res.data.message
					for(let key in data){
						data[key].check = false
						this.proCalList.push(data[key])
					}
					this.calList.forEach(item=>{
						this.proCalList.forEach(list=>{
							if(item.name == list.name){
								list.check = true
							}
						})
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			getCateCal(e) {//点击分类
				if(this.clickFilter == e.currentTarget.dataset.category){
					this.clickFilter = ''
					return
				}
				this.clickFilter = e.currentTarget.dataset.category
				let url = '/api/xcx/getCalculatorByProvince'
				let data = {
					state:1,
					calculator_type:this.clickFilter
				}
				if(this.clickPro){
					data = {
						state: 1,
						province:this.clickPro,
						calculator_type: this.clickFilter
					}
				}
				$req.request({
					url: url,
					data:data
				}).then(res=>{
					this.proCalList = []
					let data = res.data.message
					for(let key in data){
						data[key].check = false
						this.proCalList.push(data[key])
					}
					this.calList.forEach(item=>{
						this.proCalList.forEach(list=>{
							if(item.name == list.name){
								list.check = true
							}
						})
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			getAll(){ //全选
				this.chooseAllCal({select:this.selectList,unselect:this.unselectList})
				if(this.allStatus){
					this.proCalList.forEach(item=>{
						item.check = false
					})
				}else{
					this.proCalList.forEach(item=>{
						item.check = true
					})
				}
				
			},
			changeCal(e){  //单个计算器
				const data = JSON.parse(e.currentTarget.dataset.item) 
				this.proCalList.forEach(item=>{
					if(item.name == data.name){
						item.check = !item.check
						this.chooseCal(item)
						return
					}
				})
			}
		},
		computed:{
			allStatus(){
				return this.proCalList.every(item=>{
					return item.check == true
				})
			},
			selectList(){
				return this.proCalList.filter(val=>{
					return val.check
				})
			},
			unselectList(){
				return this.proCalList.filter(val=>{
					return !val.check
				})
			},
			...mapState({
				loginState:state=>state.user.loginState,
				calList:state=>state.oneClick.calList,
			}),
		},
		components:{
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style scoped>
	.go-login-btn {
		display: inline-block;
		padding: 8rpx 20rpx;
		background: #00a0e0;
		color: #fff;
		margin-top: 10rpx;
	}
	.choose{
		border: 2rpx solid #00a0e0;
		color: #00a0e0;
		padding: 6rpx 10rpx;
		box-sizing: border-box;
	}
	.cbox-wrap{
		width: 100%;
		background: #f9f9f9;
		padding: 14rpx;
		box-sizing: border-box;
	}
	.cal-flex {
		display: flex;
		flex-wrap: wrap;
	}
	.c-item {
		padding: 8rpx 12rpx;
		margin-bottom: 14rpx;
		margin-left: 24rpx;
		font-size: 30rpx;
		margin-right: 24rpx;
		position: relative;
	}
	.login{
		border: 2rpx solid #00a65a;
		color: #00a65a;
	}
	.nologin {
		border: 2rpx solid #00a0e0;
		color: #00A0E0;
	}
	.bg-i {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40rpx;
		height: 28rpx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAyzicyzicyzicyzicyzif///9S1kj1/fWv7Kvp+ujZ9tfI8sWm6qGj6Z6b55WS5Yxn219f2VZA0TY0zyqNqQT5AAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCERROSySnNP9z2rNVmiW30DxBlLQPCZtGhBAAAFsCWQCmUAm8Fsq4OCTAbyltOHgaTeyrWj5i7sdtnHrXl9WwQglQukHVNoDZyCTMMAAAAAASUVORK5CYII=") no-repeat;
	}
	.bl-bg-i {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40rpx;
		height: 28rpx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAAoOoAoOoAoOoAoOoAoOr///8nr+7z+/6c2veP1vbk9f3Q7fu65fmC0PV3zPRCue84te8Sp+sDoeoBoOpVGAzAAAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCAVROSwKzuH+Z7WGSp6vbaB4A6HTPAZtGuhAoANrAj2BnkBP4LNkaOAVgTulOhq420m09QXai8WKbb79Xh+W8RxKDqUPVvADbKCslAcAAAAASUVORK5CYII=") no-repeat;
	}
	.all-btn {
		margin-bottom: 14rpx;
		font-size: 30rpx;
		margin-right: 24rpx;
		position: relative;
		padding: 8rpx 28rpx;
		margin-left: 24rpx;
	}
	.login{
		border: 2rpx solid #00a65a;
		color: #00a65a;
	}
	.nocal {
		color: #007bff;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		line-height: 80rpx;
		height: 80rpx;
	}
	.pro-wrap{
		display: flex;
		flex-wrap: wrap;
	}
	.pro-item {
		margin:14rpx 70rpx 12rpx 0;
		font-size: 30rpx;
	}
</style>
