<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">无人居住岛</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="search">
				<input type="text" class="search-input" v-model="searchResult" >
				<button class="search-btn" @click="inval">搜索</button>
			</view>
			<view class="padding-xl">
				<view class="dlf-group" v-for="(item, index) in fzcdList" :key="index" @tap="assignment" :data-key="index" :data-val="item.name">
					<view class="ml-2 my-1 textblue" v-html="item.name"></view>
					<view class="dlf-li ml-2 font" >
						<view
						v-for="(v, index) in item.data" :key="index"
						>
						<view v-html="v"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script> 
import { uniCollapse, uniCollapseItem } from '@dcloudio/uni-ui';
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
			modalName: 'wrdjzfGuo_yddb',
			fzcd: '',
			searchResult: '',
			fzcdList: [
				{
					name: '一等',
					data: ['上海:宝山区 浦东新区','山东:青岛市(市北区市南区)','福建:厦门市(湖里区思明区)','广东:广州市(黄埔区南沙区)','深圳市(宝安区福田区龙岗区南山区盐田区)']
				},
				{
					name: '二等',
					data: ['上海:金山区','天津:滨海新区','辽宁:大连市(沙河口区西岗区中山区)','山东:青岛市(城阳区黄岛区崂山区)','福建:泉州市丰泽区厦门市(海沧区集美区)','广东:东莞市中山市珠海市( 金湾区香洲区)']
				},
				{
					name: '三等',
					data: ['上海:崇明区','辽宁:大连市甘井子区','山东:即墨市龙口市蓬莱市日照市(东港区岚山区)荣成市威海市环翠区','山东:烟台市(莱山区芝罘区)','浙江:宁波市(北仑区鄞州区镇海区)台州市(椒江区路桥区)舟山市定海区','福建:福清市福州市马尾区晋江市泉州市泉港区石狮市厦门市翔安区','广东:茂名市电白区惠东县惠州市惠阳区清江市(赤坎区麻章区坡头区)','广东:汕头市(澄海区濠江区潮南区潮阳区金平区龙湖区)','海南:海口市美兰区三亚市(吉阳区崖州区天涯区海棠区)']
				},
				{
					name: '四等',
					data: [
						'辽宁:长海县大连市(金州区旅顺口区)瓦房店市葫芦岛市市辖区绥中县兴城市' ,
						'河北:秦皇岛市山海关区' ,
						'山东:莱州市乳山市威海市文登区烟台市牟平区海阳市' ,
						'江苏:连云港市连云区' ,
						'浙江:海盐县平湖市嵊泗县温岭市玉环市乐清市舟山市普陀区' ,
						'福建:福州市长乐区惠安县龙海市南安市' ,
						'广东:恩平市南澳县汕尾市城区台山市阳江市江城区' ,
						'广西:北海市海城区' ,
						'海南:儋州市' ,
					]
				},
				{
					name: '五等',
					data: [
						'辽宁:东港市大连市普兰店区庄河市' ,
						'河北:唐山市曹妃甸区乐亭县' ,
						'山东:东营市(东营区河口区)长岛县莱阳市潍坊市寒亭区' ,
						'江苏:盐城市大丰区东台市如东县' ,
						'浙江:岱山县温州市洞头区宁波市奉化区临海市宁海县瑞安市三门县象山县' ,
						'福建:连江县罗源县平潭县莆田市(荔城区秀屿区)漳浦县' ,
						'广东:海丰县惠来县雷州市廉江市陆丰市饶平县遂溪县吴川市徐闻县阳东县阳西' ,
						'广西:广西:防城港市(防城区港口区)钦州市钦南区' ,
						'海南:澄迈县琼海市文昌市陵水县乐东县万宁市' ,
					]
				},
				{
					name: '六等',
					data: [
						'辽宁:锦州市太和区凌海市盘锦市大洼区盘山县' ,
						'山东:昌邑市广饶县利津县无棣县' ,
						'江苏:连云港市赣榆区' ,
						'浙江:苍南县平阳县' ,
						'福建:东山县福安市福鼎市宁德市蕉城区霞浦县云霄县诏安县' ,
						'广西:东兴市合浦县' ,
						'海南:昌江县东方市临高县三沙市' ,
					]
				},
			]
		};
	},
	methods: {
		inval() {
			const { fzcdList,searchResult } = this
			var regExp = new RegExp(searchResult, 'g');
			for(let i in fzcdList){
				if(fzcdList[i].name.indexOf(searchResult) !== -1){
					console.log(fzcdList[i].name)
					fzcdList[i].name.replace(regExp,'<view style="color:red;background:yellow">'+fzcdList[i].name+"</view>")
					console.log(fzcdList[i].name)
				}
				for(let j in fzcdList[i].data){
					// console.log("111111",fzcdList[i].data[j])
				}
			}
		},
	},
	components: {
		uniCollapse,
		uniCollapseItem,
	},
	computed: {
		// titleList:function() {
		// 	let titleList
		// 	for(let i = 0;i<this.fzcdList.length;i++){
		// 		titleList += i.name
		// 	}
		// 	console.log("11111111",titleList)
		// 	return titleList
		// }
	}
}
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
