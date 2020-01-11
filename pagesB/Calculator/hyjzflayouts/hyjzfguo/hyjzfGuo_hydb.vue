<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:' + CustomBar + 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">海域金征费等级</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<!-- <view class="search">
				<input type="text" class="search-input" v-model="searchResult" >
				<button class="search-btn" @click="inval">搜索</button>
			</view> -->
			<view class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in dataList" :key="index" @tap="assignment" data-index="index3" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 textblue" v-html="item.name"></view>
					<view class="dlf-li ml-2 font">
						<view v-for="(v, index) in item.data" :key="index"><view v-html="v"></view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { modalMixin } from '@/common/base/modalMixin';
export default {
	mixins: [modalMixin],
	props: {
		showModalName: {
			type: String,
			default: null
		} // 弹框可见标志
	},
	data() {
		return {
			modalName: 'hyjzfGuo_hydb',
			fzcd: '',
			searchResult: '',
			dataList: [],
			fzcdList: [
				{
					name: '一等',
					data: [
						'上海:宝山区 浦东新区',
						'山东:青岛市(市北区市南区)',
						'福建:厦门市(湖里区思明区)',
						'广东:广州市(黄埔区番禺区南沙区增城区)',
						'深圳市(福田区南山区宝安区龙岗区盐田区)'
					]
				},
				{
					name: '二等',
					data: [
						'上海:金山区奉贤区',
						'天津:滨海新区',
						'辽宁:大连市(中山区西岗区沙河口区)',
						'山东:青岛市(黄岛区崂山区李沧区城阳区)',
						'福建:泉州市丰泽区厦门市(海沧区集美区)',
						'广东:东莞市汕头市(龙湖区金平区潮阳区)中山市珠海市(香洲区斗门区金湾区)'
					]
				},
				{
					name: '三等',
					data: [
						'上海:崇明区',
						'辽宁:大连市甘井子区 营口市鲅鱼圈区',
						' 河北:秦皇岛市(海港区北戴河区)',
						'山东:青岛市即墨区胶州市烟台市(芝罘区福山区莱山区)龙口市蓬莱市',
						'山东:威海市环翠区荣成市日照市(东港区岚山区)',
						' 浙江:宁波市(北仑区镇海区鄞州区)台州市(椒江区路桥区)舟山市定海区',
						'福建:福州市马尾区福清市厦门市(同安区翔安区)',
						'福建:泉州市(洛江区泉港区)石狮市晋江市',
						'广东:汕头市(濠江区潮南区澄海区)江门市新会区',
						'广东:湛江市(赤坎区霞山区坡头区麻章区)茂名市电白区惠州市惠阳区惠东县',
						'海南:海口市(秀英区龙华区美兰区)三亚市(海棠区吉阳区天涯区崖州区)'
					]
				},
				{
					name: '四等',
					data: [
						'辽宁:大连市(旅顺口区金州区)瓦房店市长海县营口市(西市区老边区)',
						'辽宁:盖州市葫芦岛市(连山区龙港区)绥中县兴城市',
						'河北:秦皇岛市山海关区',
						'山东:烟台市牟平区莱州市招远市海阳市威海市文登区乳山市',
						'江苏:连云港市连云区',
						'浙江:慈溪市余姚市乐清市海盐县平湖市玉环市温岭市舟山市普陀区嵊泗县',
						'福建:福州市长乐区惠安县龙海市南安市',
						'广东:南澳县台山市恩平市汕尾市城区阳江市江城区',
						'广西:北海市(海城区银海区)',
						'海南:儋州市'
					]
				},
				{
					name: '五等',
					data: [
						'辽宁:大连市普兰店区庄河市东港市',
						'河北:秦皇岛市抚宁区唐山市(丰南区曹妃甸区)滦南县乐亭县黄骅市',
						'山东:东营市(东营区河口区)长岛县莱阳市潍坊市寒亭区',
						'江苏:南通市通州区海安县如东县启东市海门市盐城市大丰区东台市',
						'浙江:宁波市奉化区象山县宁海县温州市洞头区瑞安市岱山县三门县临海市',
						'福建:连江县罗源县平潭县莆田市(城厢区涵江区荔城区秀屿区)漳浦县',
						'广东:遂溪县徐闻县廉江市雷州市吴川市海丰县陆丰市阳东县',
						'广东:阳西县饶平县揭阳市榕城区惠来县',
						'广西:北海市铁山港区防城港市(港口区防城区)钦州市钦南区',
						'海南:琼海市文昌市万宁市澄迈县乐东县陵水县'
					]
				},
				{
					name: '六等',
					data: [
						'辽宁:锦州市太和区凌海市盘锦市大洼区盘山县',
						'河北:昌黎县海兴县',
						'山东:东营市垦利区利津县广饶县寿光市昌邑市滨州市沾化区无棣县',
						'江苏:连云港市赣榆区灌云县灌南县盐城市亭湖区响水县滨海县射阳县',
						'浙江:平阳县苍南县',
						'福建:仙游县云霄县诏安县东山县宁德市蕉城区霞浦县福安市福鼎市',
						'广西:合浦县东兴市',
						'海南:三沙市东方市临高县昌江县'
					]
				}
			]
		};
	},
	mounted() {
		this.dataList = this.fzcdList;
	},
	methods: {
		inval() {
			const { fzcdList, searchResult, dataList } = this;
			const regExp = new RegExp(searchResult, 'g');
			// let dataList = fzcdList
			// for(let i in fzcdList){
			// 	if(fzcdList[i].name.indexOf(searchResult) !== -1){
			// 		fzcdList[i].name.replace(regExp,'<view style="color:red;background:yellow">'+fzcdList[i].name+"</view>")
			// 	}
			// }
			// dataList.forEach(item=>{
			// 	item.data.forEach(val=>{
			// 		if(val.search(searchResult) != -1){
			// 			const index = val.indexOf(searchResult)
			// 			val = val.replace(regExp,'<view style="color:red;background:yellow">'+searchResult+"</view>")
			// 		}
			// 	})
			// })
		}
	},
};
</script>

<style scoped>
.textblue {
	color: #00a0ea;
}
.highlight {
	color: red !important;
}
.search {
	display: flex;
	width: 100%;
	height: 2rem;
	padding-left: 1rem;
}
.search-input {
	width: 60%;
	height: 80%;
	border: 2upx solid #ccc;
}
.search-btn {
	height: 80%;
	width: 15%;
	font-size: 0.6rem;
}
</style>
