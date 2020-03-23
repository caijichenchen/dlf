/*
 ** 传入结果显示页数据
 **
*/
//防雷检测费
export const fljcData = {
	fljcf_jj: { title:'防雷设施检测费基价:', fljcf_jj:"" },
	fljcf_zq: { title:'折前防雷设施检测费:', fljcf_zq:'' },
	fljcf_zh: { title:'折后防雷设施检测费:', fljcf_zh:"" }
}
//工程定额标准编制管理费(光伏发电工程)
export const gcdebzbzglfgfData = {
	gcdebzbzglfgfGuo_fl: { title:'基价费率:', gcdebzbzglfgfGuo_fl:'' },
	gcdebzbzglfgfGuo_sjf:{ title:'折前建设管理费:', gcdebzbzglfgfGuo_sjf:'' },
	gcdebzbzglfgfGuo_zh:{ title:'折后建设管理费:', gcdebzbzglfgfGuo_zh:'' }
}
//施工图审查费
export const sgtscfData = (city)=>{
	return `{
		"sgtscf${city}_jj": { "title":"施工图审查费基价", "sgtscf${city}_jj":"" },
		"sgtscf${city}_zq":{ "title":"折前施工图审查费", "sgtscf${city}_zq":"" },
		"sgtscf${city}_zh":{ "title":"折后施工图审查费", "sgtscf${city}_zh":"" }
	}`
}
//监理费
export const jlfData = (city)=>{
	if(city == 'szh' || city == 'Guo'){
		return `{
			"jlf_jj": { "title":"监理费基价", "jlf_jj":"" },
			"jlf_jlf":{ "title":"监理费", "jlf_jlf":"" },
			"jlf_zhjlf":{ "title":"折后监理费", "jlf_zhjlf":"" }
		}`
	}
	return `{
		"jlf${city}_zhfl": { "title":"综合费率", "jlf${city}_zhfl":"" },
		"jlf${city}_jlf":{ "title":"监理费", "jlf${city}_jlf":"" },
		"jlf${city}_zhjlf":{ "title":"折后监理费", "jlf${city}_zhjlf":"" }
	}`
}
//水土补偿保持费
export const stbcbcfData = {
	stbcbcf_zq:{ title:'折前水土保持补偿费:', stbcbcf_zq:'' },
	stbcbcf_zh:{ title:'折后水土保持补偿费:', stbcbcf_zh:'' }
}
//水土保持费
export const stbcfData = {
	stbcf_zqstbc:{ title:'折前水土保持费:', stbcf_zqstbc:'' },
	stbcf_zhstbc:{ title:'折后水土保持费:', stbcf_zhstbc:'' }
}
//项目技术经济评审费(光伏发电工程)
export const xmjsjjpsfgfData = {
	xmjsjjpsfgfGuo_fl:{ title:'基价费率:', xmjsjjpsfgfGuo_fl:'' },
	xmjsjjpsfgfGuo_sjf:{ title:'折前建设管理费:', xmjsjjpsfgfGuo_sjf:'' },
	xmjsjjpsfgfGuo_zh:{ title:'折后建设管理费:', xmjsjjpsfgfGuo_zh:'' }
}
//项目咨询服务费(光伏发电工程)
export const xmzxfwfgfData = {
	xmzxfwfgfGuo_fl:{ title:'基价费率:', xmzxfwfgfGuo_fl:'' },
	xmzxfwfgfGuo_sjf:{ title:'折前建设管理费:', xmzxfwfgfGuo_sjf:'' },
	xmzxfwfgfGuo_zh:{ title:'折后建设管理费:', xmzxfwfgfGuo_zh:'' }
}
//招标代理费
export const zbdlfData = {
	zbdlf_zqzbdlf:{ title:'折前招标代理费:', zbdlf_zqzbdlf:'' },
	zbdlf_zhzbdlf:{ title:'折后招标代理费:', zbdlf_zhzbdlf:'' }
}
//资产评估收费
export const zcpgsfData = {
	zcpgsf_zq:{ title:'折前资产评估收费:', zcpgsf_zq:'' },
	zcpgsf_zh:{ title:'折后资产评估收费:', zcpgsf_zh:'' }
}
//造价咨询费
export const zjzxfData = {
	zjzxf_zqzjzxf:{ title:'折前造价咨询费:', zjzxf_zqzjzxf:'' },
	zjzxf_zhzjzxf:{ title:'折后造价咨询费:', zjzxf_zhzjzxf:'' }
}
//城市基础设施配套费
export const csjcssptData = {
	csjcsspt_zqcsjcsspt:{ title:'折前城市基础设施配套费:', csjcsspt_zqcsjcsspt:'' },
	csjcsspt_zhcsjcsspt:{ title:'折后城市基础设施配套费:', csjcsspt_zhcsjcsspt:'' }
}
//地震安全评价费
export const dzaqpjfData = {
	dzaqpjf_jj:{ title:'地震安全评价费基价:', dzaqpjf_jj:'' },
	dzaqpjf_zq:{ title:'折前地震安全评价费:', dzaqpjf_zq:'' },
	dzaqpjf_zh:{ title:'折后地震安全评价费:', dzaqpjf_zh:'' }
}
//防空地下室易地建设费
export const fkdxyjjsfData = {
	fkdxyjjsf_sfjj:{ title:'收费基价:', fkdxyjjsf_sfjj:'' },
	fkdxyjjsf_zqfkdxyjjsf:{ title:'折前防空地下室易地建设费:', fkdxyjjsf_zqfkdxyjjsf:'' },
	fkdxyjjsf_zhfkdxyjjsf:{ title:'折后防空地下室易地建设费:', fkdxyjjsf_zhfkdxyjjsf:'' }
}
//建设交易服务费
export const jsjyfwfData = {
	jsjyfwf_zq:{ title:'折前环评费:', jsjyfwf_zq:'' },
	jsjyfwf_zh:{ title:'折后环评费:', jsjyfwf_zh:'' }
}
//建设项目前期工作咨询费
export const jsxmqqgzzxfData = {
	jsxmqqgzzxf_zq:{ title:'折前环评费:', jsxmqqgzzxf_zq:'' },
	jsxmqqgzzxf_zh:{ title:'折后环评费:', jsxmqqgzzxf_zh:'' }
}
//白蚁防治费
export const byfzfData = {
	byfzf_jj:{ title:'基价:', byfzf_jj:'' },
	byfzf_zq:{ title:'折前白蚁防治费:', byfzf_zq:'' },
	byfzf_zh:{ title:'折后白蚁防治费:', byfzf_zh:'' }
}
//初步设计评审收费
export const cbsjpssfData = {
	cbsjpssf_sfjj:{ title:'收费基价:', cbsjpssf_sfjj:'' },
	cbsjpssf_jbsf:{ title:'基本收费:', cbsjpssf_jbsf:'' },
	cbsjpssf_zqsjpsqf:{ title:'折前设计评审收费:', cbsjpssf_zqsjpsqf:'' },
	cbsjpssf_zhsjpsqf:{ title:'折后设计评审收费:', cbsjpssf_zhsjpsqf:'' }
}
//场地准备及临时设施费
export const cdzbData = {
	cdzb_zqcdcb:{ title:'折前场地准备费:', cdzb_zqcdcb:'' },
	cdzb_zhcdcb:{ title:'折后场地准备费:', cdzb_zhcdcb:'' }
}
//测绘费
export const chfData = {
	chf_jj:{ title:'测绘费基准价:', chf_jj:'' },
	chf_zq:{ title:'折前测绘费:', chf_zq:'' },
	chf_zh:{ title:'折后测绘费:', chf_zh:'' }
}
//长输管道工程勘察收费
export const csgdgckcfData = {
	csgdgckcf_gckcsfjj:{ title:'工程勘察收费基价:', csgdgckcf_gckcsfjj:'' },
	csgdgckcf_gckcsf:{ title:'工程勘察收费:', csgdgckcf_gckcsf:'' },
	csgdgckcf_zqkcsf:{ title:'折前勘察收费:', csgdgckcf_zqkcsf:'' },
	csgdgckcf_zhkcsf:{ title:'折后勘察收费:', csgdgckcf_zhkcsf:'' }
}
//城市规划设计收费
export const csghData = {
	csghf_ghfjj:{ title:'规划费基价:', csghf_ghfjj:'' },
	csghf_ghf:{ title:'规划费:', csghf_ghf:'' },
	csghf_ztyjf:{ title:'专题研究费:', csghf_ztyjf:'' },
	csghf_zqghf:{ title:'折前规划费:', csghf_zqghf:'' },
	csghf_zhghf:{ title:'折后规划费:', csghf_zhghf:'' }
}
//上海市财务监理费
export const cwjlfData = {
	cwjlf_zq:{ title:'财务监理费:', cwjlf_zq:'' },
	cwjlf_zh:{ title:'折后财务监理费:', cwjlf_zh:'' }
}
//上海市代建管理费
export const djglfData = {
	djglf_zq:{ title:'代建管理费:', djglf_zq:'' },
	djglf_zh:{ title:'折后代建管理费:', djglf_zh:'' }
}
//电力工程勘察费
export const dlgckcData = {
	dlgckc_sfjj:{ title:'收费基价:', dlgckc_sfjj:'' },
	dlgckc_jbsf:{ title:'基本收费:', dlgckc_jbsf:'' },
	dlgckc_jzj:{ title:'基准价:', dlgckc_jzj:'' },
	dlgckc_gckczyzbf:{ title:'工程勘察作业准备费:', dlgckc_gckczyzbf:'' },
	dlgckc_kcf:{ title:'勘察费:', dlgckc_kcf:'' },
	dlgckc_zhkcf:{ title:'折后勘察费:', dlgckc_zhkcf:'' }
}
//电力工程建设项目前期工作勘察费
export const dlgcqqgzkcfData = {
	dlgcqqgzkcf_sfjj:{ title:'收费基价:', dlgcqqgzkcf_sfjj:'' },
	dlgcqqgzkcf_jbsf:{ title:'基本收费:', dlgcqqgzkcf_jbsf:'' },
	dlgcqqgzkcf_jzj:{ title:'基准价:', dlgcqqgzkcf_jzj:'' },
	dlgcqqgzkcf_kcf:{ title:'勘察费:', dlgcqqgzkcf_kcf:'' },
	dlgcqqgzkcf_zhkcf:{ title:'折后勘察费:', dlgcqqgzkcf_zhkcf:'' }
}
//洞室测量收费
export const dsclsfData = {
	dsclsf_swgzsfjj:{ title:'勘察实物工作收费基价:', dsclsf_swgzsfjj:'' },
	dsclsf_swgzsf:{ title:'勘察实物工作收费:', dsclsf_swgzsf:'' },
	dsclsf_jsgzsf:{ title:'勘察技术工作收费:', dsclsf_jsgzsf:'' },
	dsclsf_sfjzj:{ title:'勘察收费基准价:', dsclsf_sfjzj:'' },
	dsclsf_zqkcsf:{ title:'折前勘察收费:', dsclsf_zqkcsf:'' },
	dsclsf_zhkcsf:{ title:'折后勘察收费:', dsclsf_zhkcsf:'' }
}
//地下管线勘察费
export const dxgxclsfData = {
	dxgxclsf_swgzsfjj:{ title:'勘察实物工作收费基价:', dxgxclsf_swgzsfjj:'' },
	dxgxclsf_swgzsf:{ title:'勘察实物工作收费:', dxgxclsf_swgzsf:'' },
	dxgxclsf_jsgzsf:{ title:'勘察技术工作收费:', dxgxclsf_jsgzsf:'' },
	dxgxclsf_sfjzj:{ title:'勘察收费基准价:', dxgxclsf_sfjzj:'' },
	dxgxclsf_zqkcsf:{ title:'折前勘察收费:', dxgxclsf_zqkcsf:'' },
	dxgxclsf_zhkcsf:{ title:'折后勘察收费:', dxgxclsf_zhkcsf:'' }
}
//地质灾害危险性评估收费
export const dzzhData = {
	dzzh_jbsf:{ title:'基本收费:', dzzh_jbsf:'' },
	dzzh_jzj:{ title:'基准价:', dzzh_jzj:'' },
	dzzh_pgsf:{ title:'地质灾害评估收费:', dzzh_pgsf:'' },
	dzzh_zhpgsf:{ title:'折后地质灾害评估收费:', dzzh_zhpgsf:'' }
}
//房屋面积测绘费
export const fwmjchfData = {
	fwmjchf_sfjj:{ title:'收费基价:', fwmjchf_sfjj:'' },
	fwmjchf_zqchf:{ title:'折前测绘费:', fwmjchf_zqchf:'' },
	fwmjchf_zhchf:{ title:'折后测绘费:', fwmjchf_zhchf:'' }
}
//工程保险费(光伏发电工程)
export const gcbxfgfGuoData = {
	gcbxfgfGuo_fl:{ title:'基价费率:', gcbxfgfGuo_fl:'' },
	gcbxfgfGuo_sjf:{ title:'折前建设管理费:', gcbxfgfGuo_sjf:'' },
	gcbxfgfGuo_zh:{ title:'折后建设管理费:', gcbxfgfGuo_zh:'' }
}
//工程保险费
export const gcbxfData = {
	gcbxf_zqcdcb:{ title:'折前工程保险费:', gcbxf_zqcdcb:'' },
	gcbxf_zhcdcb:{ title:'折后工程保险费:', gcbxf_zhcdcb:'' }
}
//工程地面测量收费
export const gcdmclsfData = {
	gcdmclsf_swgzsfjj:{ title:'勘察实物工作收费基价:', gcdmclsf_swgzsfjj:'' },
	gcdmclsf_swgzsf:{ title:'勘察实物工作收费:', gcdmclsf_swgzsf:'' },
	gcdmclsf_jsgzsf:{ title:'勘察技术工作收费:', gcdmclsf_jsgzsf:'' },
	gcdmclsf_sfjzj:{ title:'勘察收费基准价:', gcdmclsf_sfjzj:'' },
	gcdmclsf_zqkcsf:{ title:'折前勘察收费:', gcdmclsf_zqkcsf:'' },
	gcdmclsf_zhkcsf:{ title:'折后勘察收费:', gcdmclsf_zhkcsf:'' }
}
//建设管理费(光伏发电工程)
export const gcjsglgfData = {
	gcjsglgf_jjfl:{ title:'基价费率:', gcjsglgf_jjfl:'' },
	gcjsglgf_zqglf:{ title:'折前建设管理费:', gcjsglgf_zqglf:'' },
	gcjsglgf_zhglf:{ title:'折后建设管理费:', gcjsglgf_zhglf:'' }
}
//工程建设监理费
export const gcjsjlfgfData = {
	gcjsjlfgf_jjfl:{ title:'基价费率:', gcjsjlfgf_jjfl:'' },
	gcjsjlfgf_zqglf:{ title:'折前建设管理费:', gcjsjlfgf_zqglf:'' },
	gcjsjlfgf_zhglf:{ title:'折后建设管理费:', gcjsjlfgf_zhglf:'' }
}
//工程勘察费
export const gckcfData = {
	gckcf_zqgckcf:{ title:'折前工程勘察费:', gckcf_zqgckcf:'' },
	gckcf_zhgckcf:{ title:'折后工程勘察费:', gckcf_zhgckcf:'' }
}
//工程其他测量收费
export const gcqtclsfData = {
	gcqtclsf_swgzsfjj:{ title:'勘察实物工作收费基价:', gcqtclsf_swgzsfjj:'' },
	gcqtclsf_swgzsf:{ title:'勘察实物工作收费:', gcqtclsf_swgzsf:'' },
	gcqtclsf_jsgzsf:{ title:'勘察技术工作收费:', gcqtclsf_jsgzsf:'' },
	gcqtclsf_sfjzj:{ title:'勘察收费基准价:', gcqtclsf_sfjzj:'' },
	gcqtclsf_zqkcsf:{ title:'折前勘察收费:', gcqtclsf_zqkcsf:'' },
	gcqtclsf_zhkcsf:{ title:'折后勘察收费:', gcqtclsf_zhkcsf:'' }
}
//工程水域测量收费
export const gcsyclsfData = {
	gcsyclsf_swgzsfjj:{ title:'勘察实物工作收费基价:', gcsyclsf_swgzsfjj:'' },
	gcsyclsf_swgzsf:{ title:'勘察实物工作收费:', gcsyclsf_swgzsf:'' },
	gcsyclsf_jsgzsf:{ title:'勘察技术工作收费:', gcsyclsf_jsgzsf:'' },
	gcsyclsf_sfjzj:{ title:'勘察收费基准价:', gcsyclsf_sfjzj:'' },
	gcsyclsf_zqkcsf:{ title:'折前勘察收费:', gcsyclsf_zqkcsf:'' },
	gcsyclsf_zhkcsf:{ title:'折后勘察收费:', gcsyclsf_zhkcsf:'' }
}
//工程质量检查检测费(光伏发电工程)
export const gczljcjcfgfGuoData = {
	gczljcjcfgfGuo_fl:{ title:'基价费率:', gczljcjcfgfGuo_fl:'' },
	gczljcjcfgfGuo_sjf:{ title:'折前建设管理费:', gczljcjcfgfGuo_sjf:'' },
	gczljcjcfgfGuo_zh:{ title:'折后建设管理费:', gczljcjcfgfGuo_zh:'' }
}
//公路工程勘察费
export const glgckcfData = {
	glgckcf_gckcsfjj:{ title:'工程勘察收费基价:', glgckcf_gckcsfjj:'' },
	glgckcf_gckcsf:{ title:'工程勘察收费:', glgckcf_gckcsf:'' },
	glgckcf_zqkcsf:{ title:'折前勘察收费:', glgckcf_zqkcsf:'' },
	glgckcf_zhkcsf:{ title:'折后勘察收费:', glgckcf_zhkcsf:'' }
}
//环境监测费
export const hjjcfData = {
	hjjcf_zq:{ title:'折前环境监测费:', hjjcf_zq:'' },
	hjjcf_zh:{ title:'折后环境监测费:', hjjcf_zh:'' }
}
//环境影响评价费
export const hjyxpjData = {
	hjyxpj_zqhpf:{ title:'折前环评费:', hjyxpj_zqhpf:'' },
	hjyxpj_zhhpf:{ title:'折后环评费:', hjyxpj_zhhpf:'' }
}
//海域使用金征收标准
export const hyjzfGuoData = {
	hyjzfGuo_sfjj:{ title:'收费基价:', hyjzfGuo_sfjj:'' },
	hyjzfGuo_zq:{ title:'折前收费:', hyjzfGuo_zq:'' },
	hyjzfGuo_zh:{ title:'折后收费:', hyjzfGuo_zh:'' }
}
//节能评估费
export const jnpgfData = {
	jnpgf_zqjnpgf:{ title:'折前节能评估费:', jnpgf_zqjnpgf:'' },
	jnpgf_zhjnpgf:{ title:'折后节能评估费:', jnpgf_zhjnpgf:'' }
}
//建设单位管理费
export const jsdwglData = {
	jsdwgl_zqjsdwglf:{ title:'折前建设单位管理费:', jsdwgl_zqjsdwglf:'' },
	jsdwgl_zhjsdwglf:{ title:'折后建设单位管理费:', jsdwgl_zhjsdwglf:'' }
}
//全国建设期利息
export const jsqlxData = {
	jsqlx_dkze:{ title:'贷款总额:', jsqlx_dkze:'' },
	jsqlx_hkze:{ title:'还款总额:', jsqlx_hkze:'' },
	jsqlx_lxzh:{ title:'利息总和:', jsqlx_lxzh:'' },
	jsqlx_njhk:{ title:'年均还款:', jsqlx_njhk:'' },
	jsqlx_hkmx:{ title:'还款明细:', jsqlx_hkmx:'' }
}
//建设项目报建费
export const jsxmbjfData = {
	jsxmbjf_jj:{ title:'基价:', jsxmbjf_jj:'' },
	jsxmbjf_zqfy:{ title:'折前费用:', jsxmbjf_zqfy:'' },
	jsxmbjf_zhfy:{ title:'折后费用:', jsxmbjf_zhfy:'' }
}
//建筑幕墙和门窗检测费
export const jzmqmcjcfData = {
	jzmqmcjcf_jj:{ title:'建筑幕墙和门窗检测费基价:', jzmqmcjcf_jj:'' },
	jzmqmcjcf_zq:{ title:'折前建筑幕墙和门窗检测费:', jzmqmcjcf_zq:'' },
	jzmqmcjcf_zh:{ title:'折后建筑幕墙和门窗检测费:', jzmqmcjcf_zh:'' }
}
//全国建筑装饰设计收费
export const sjfData = {
	sjf_jzj:{ title:'基本设计收费基价:', sjf_jzj:'' },
	sjf_jbsf:{ title:'基本设计收费:', sjf_jbsf:'' },
	sjf_sfjj:{ title:'工程设计收费:', sjf_sfjj:'' },
	sjf_zhsjf:{ title:'折后设计费:', sjf_zhsjf:'' }
}
//劳动安全卫生评审费
export const ldaqwspsData = {
	ldaqwsps_zqcdcb:{ title:'折前劳动安全卫生评审费:', ldaqwsps_zqcdcb:'' },
	ldaqwsps_zhcdcb:{ title:'折后劳动安全卫生评审费:', ldaqwsps_zhcdcb:'' }
}
//铺底流动资金
export const pdldzjData = {
	pdldzj_pdldzj:{ title:'铺底流动资金:', pdldzj_pdldzj:'' }
}
//PPP项目咨询服务收费
export const pppxmzxData = {
	pppxmzx_zqzxf:{ title:'折前PPP咨询费:', pppxmzx_zqzxf:'' },
	pppxmzx_zhzxf:{ title:'折后PPP咨询费:', pppxmzx_zhzxf:'' }
}
//取土、水、石试样收费
export const qtsssysfData = {
	qtsssysf_sfjj:{ title:'勘察实物工作收费基价:', qtsssysf_sfjj:'' },
	qtsssysf_kcswzzsf:{ title:'勘察实物工作收费:', qtsssysf_kcswzzsf:'' },
	qtsssysf_kcjszzsf:{ title:'勘察技术工作收费:', qtsssysf_kcjszzsf:'' },
	qtsssysf_sfjzj:{ title:'勘察收费基准价:', qtsssysf_sfjzj:'' },
	qtsssysf_zqkcsf:{ title:'折前勘察收费:', qtsssysf_zqkcsf:'' },
	qtsssysf_zhkcsf:{ title:'折后勘察收费:', qtsssysf_zhkcsf:'' }
}
//生产准备费(光伏发电工程)
export const sczbfgfGuoData = {
	sczbfgfGuo_fl:{ title:'基价费率:', sczbfgfGuo_fl:'' },
	sczbfgfGuo_sjf:{ title:'折前建设管理费:', sczbfgfGuo_sjf:'' },
	sczbfgfGuo_zh:{ title:'折后建设管理费:', sczbfgfGuo_zh:'' }
}
//社会稳定风险评估报告收费
export const shwdfxpgData = {
	shwdfxpg_zqfpf:{ title:'折前社会稳定风险评估费:', shwdfxpg_zqfpf:'' },
	shwdfxpg_zhfpf:{ title:'折后社会稳定风险评估费:', shwdfxpg_zhfpf:'' }
}
//水利水电工程勘察收费
export const slsdgckcData = {
	slsdgckc_sfjj:{ title:'收费基价:', slsdgckc_sfjj:'' },
	slsdgckc_jbsf:{ title:'基本收费:', slsdgckc_jbsf:'' },
	slsdgckc_jzj:{ title:'基准价:', slsdgckc_jzj:'' },
	slsdgckc_zyzbf:{ title:'作业准备费:', slsdgckc_zyzbf:'' },
	slsdgckc_kcf:{ title:'勘察费:', slsdgckc_kcf:'' },
	slsdgckc_zhkcf:{ title:'折后勘察费:', slsdgckc_zhkcf:'' }
}
//水利水电建设项目前期工作勘察费
export const slsdqqgckcData = {
	slsdgckc_sfjj:{ title:'收费基价:', slsdgckc_sfjj:'' },
	slsdgckc_jbsf:{ title:'基本收费:', slsdgckc_jbsf:'' },
	slsdgckc_jzj:{ title:'基准价:', slsdgckc_jzj:'' },
	slsdgckc_zyzbf:{ title:'作业准备费:', slsdgckc_zyzbf:'' },
	slsdgckc_kcf:{ title:'勘察费:', slsdgckc_kcf:'' },
	slsdgckc_zhkcf:{ title:'折后勘察费:', slsdgckc_zhkcf:'' }
}
//水土保持费
export const stbcfGuoData = {
	stbcf_zqstbc:{ title:'折前水土保持费:', stbcf_zqstbc:'' },
	stbcf_zhstbc:{ title:'折后水土保持费:', stbcf_zhstbc:'' }
}
//水文地质测绘费
export const swdzchfData = {
	swdzchf_sw:{ title:'勘察实物工作收费:', swdzchf_sw:'' },
	swdzchf_jssf:{ title:'勘察技术工作收费:', swdzchf_jssf:'' },
	swdzchf_jj:{ title:'水文地质测绘费基价:', swdzchf_jj:'' },
	swdzchf_zq:{ title:'折前水文地质测绘费:', swdzchf_zq:'' },
	swdzchf_zh:{ title:'折后水文地质测绘费:', swdzchf_zh:'' }
}
//铁路勘察费
export const tlkcfData = {
	tlkcf_gckcsfjj:{ title:'工程勘察收费基价:', tlkcf_gckcsfjj:'' },
	tlkcf_gckcsf:{ title:'工程勘察收费:', tlkcf_gckcsf:'' },
	tlkcf_zqkcsf:{ title:'折前勘察收费:', tlkcf_zqkcsf:'' },
	tlkcf_zhkcsf:{ title:'折后勘察收费:', tlkcf_zhkcsf:'' }
}
//铁建设函[2002]86号
export const tlkcsjsfGuoData = {
	tlkcsjsfGuo_sfjj:{ title:'收费基价:', tlkcsjsfGuo_sfjj:'' },
	tlkcsjsfGuo_zq:{ title:'折前收费:', tlkcsjsfGuo_zq:'' },
	tlkcsjsfGuo_zh:{ title:'折后收费:', tlkcsjsfGuo_zh:'' }
}
//铁路设计费
export const tlsjfData = {
	tlsjf:{ title:'铁路设计费:', tlsjf:'' },
	tlsjf_zh:{ title:'折后铁路设计费:', tlsjf_zh:'' }
}
//工程勘察收费
export const txgckcfData = {
	txgckcf_gckcsfjj:{ title:'工程勘察收费基价:', txgckcf_gckcsfjj:'' },
	txgckcf_gckcsf:{ title:'工程勘察收费:', txgckcf_gckcsf:'' },
	txgckcf_zqkcsf:{ title:'折前勘察收费:', txgckcf_zqkcsf:'' },
	txgckcf_zhkcsf:{ title:'折后勘察收费:', txgckcf_zhkcsf:'' }
}
//无居民海岛使用金征收标准
export const wrdjzfGuoData = {
	wrdjzfGuo_sfjj:{ title:'收费基价:', wrdjzfGuo_sfjj:'' },
	wrdjzfGuo_zq:{ title:'折前收费:', wrdjzfGuo_zq:'' },
	wrdjzfGuo_zh:{ title:'折后收费:', wrdjzfGuo_zh:'' }
}
//现场检测和材料试验收费
export const xcjchclsyData = {
	xcjchclsy_zq:{ title:'折前现场检测和材料试验收费:', xcjchclsy_zq:'' },
	xcjchclsy_zh:{ title:'折后现场检测和材料试验收费:', xcjchclsy_zh:'' }
}
//项目代建费
export const xmdjfData = {
	xmdjf_jj:{ title:'基价:', xmdjf_jj:'' },
	xmdjf_zqfy:{ title:'折前代建服务费:', xmdjf_zqfy:'' },
	xmdjf_zhfy:{ title:'折后代建服务费:', xmdjf_zhfy:'' }
}
//项目验收费(光伏发电工程)
export const xmysfgfGuoData = {
	xmysfgfGuo_fl:{ title:'基价费率:', xmysfgfGuo_fl:'' },
	xmysfgfGuo_sjf:{ title:'折前建设管理费:', xmysfgfGuo_sjf:'' },
	xmysfgfGuo_zh:{ title:'折后建设管理费:', xmysfgfGuo_zh:'' }
}
//预备费
export const ybfData = {
	ybf_zq:{ title:'预备费:', ybf_zq:'' }
}
//岩土工程地质测绘费
export const ytgcdzchfData = {
	ytgcdzchf_sw:{ title:'勘察实物工作收费:', ytgcdzchf_sw:'' },
	ytgcdzchf_jssf:{ title:'勘察技术工作收费:', ytgcdzchf_jssf:'' },
	ytgcdzchf_jj:{ title:'岩土工程地质测绘费基价:', ytgcdzchf_jj:'' },
	ytgcdzchf_zq:{ title:'折前岩土工程地质测绘费:', ytgcdzchf_zq:'' },
	ytgcdzchf_zh:{ title:'折后岩土工程地质测绘费:', ytgcdzchf_zh:'' }
}
//全国岩土工程检测费
export const ytgcjcData = {
	ytgcjc_swgzsfjj:{ title:'勘察实物工作收费基价:', ytgcjc_swgzsfjj:'' },
	ytgcjc_swgzsf:{ title:'勘察实物工作收费:', ytgcjc_swgzsf:'' },
	ytgcjc_jsgzsf:{ title:'勘察技术工作收费:', ytgcjc_jsgzsf:'' },
	ytgcjc_sfjzj:{ title:'勘察收费基准价:', ytgcjc_sfjzj:'' },
	ytgcjc_zqkcsf:{ title:'折前勘察收费:', ytgcjc_zqkcsf:'' },
	ytgcjc_zhkcsf:{ title:'折后勘察收费:', ytgcjc_zhkcsf:'' }
}
//全国岩土工程监测费
export const ytgcjianceData = {
	ytgcjiance_swgzsfjj:{ title:'勘察实物工作收费基价:', ytgcjiance_swgzsfjj:'' },
	ytgcjiance_swgzsf:{ title:'勘察实物工作收费:', ytgcjiance_swgzsf:'' },
	ytgcjiance_jsgzsf:{ title:'勘察技术工作收费:', ytgcjiance_jsgzsf:'' },
	ytgcjiance_sfjzj:{ title:'勘察收费基准价:', ytgcjiance_sfjzj:'' },
	ytgcjiance_zqkcsf:{ title:'折前勘察收费:', ytgcjiance_zqkcsf:'' },
	ytgcjiance_zhkcsf:{ title:'折后勘察收费:', ytgcjiance_zhkcsf:'' }
}
//辽宁省岩土工程勘察收费
export const ytgckcsfData = {
	ytgckcsf_kcswgzsf:{ title:'勘察实物工作收费:', ytgckcsf_kcswgzsf:'' },
	ytgckcsf_kcjsgzsf:{ title:'勘察技术工作收费:', ytgckcsf_kcjsgzsf:'' },
	ytgckcsf_kcsfjzj:{ title:'勘察收费基准价:', ytgckcsf_kcsfjzj:'' },
	ytgckcsf_zqkcsf:{ title:'折前勘察收费:', ytgckcsf_zqkcsf:'' },
	ytgckcsf_zhkcsf:{ title:'折后勘察收费:', ytgckcsf_zhkcsf:'' }
}
//岩土工程勘探费
export const ytgcktData = {
	ytgckt_kcswgzsf:{ title:'勘察实物工作收费:', ytgckt_kcswgzsf:'' },
	ytgckt_kcjsgzsf:{ title:'勘察技术工作收费:', ytgckt_kcjsgzsf:'' },
	ytgckt_kcsfjzj:{ title:'勘察收费基准价:', ytgckt_kcsfjzj:'' },
	ytgckt_zqkcsf:{ title:'折前勘察收费:', ytgckt_zqkcsf:'' },
	ytgckt_zhkcsf:{ title:'折后勘察收费:', ytgckt_zhkcsf:'' }
}
//岩土工程设计收费
export const ytgcsjData = {
	ytgcsj_sfjj:{ title:'收费基价:', ytgcsj_sfjj:'' },
	ytgcsj_jbsf:{ title:'基本收费:', ytgcsj_jbsf:'' },
	ytgcsj_zqgzsj:{ title:'折前工程设计:', ytgcsj_zqgzsj:'' },
	ytgcsj_zhgzsj:{ title:'折后工程设计:', ytgcsj_zhgzsj:'' }
}
//中设协字[2016]89号设计费
export const zsxzData = {
	zsxz_sjfjs:{ title:'设计费基数:', zsxz_sjfjs:'' },
	zsxz_zqsjf:{ title:'折前设计费:', zsxz_zqsjf:'' },
	zsxz_zhsjf:{ title:'折后设计费:', zsxz_zhsjf:'' }
}
//中设协字[2019]7号设计费
export const zsxzsjfszGuoData = {
	zsxzsjfszGuo_sfjj:{ title:'设计费基数:', zsxzsjfszGuo_sfjj:'' },
	zsxzsjfszGuo_sjf:{ title:'折前设计费:', zsxzsjfszGuo_sjf:'' },
	zsxzsjfszGuo_zhsjf:{ title:'折后设计费:', zsxzsjfszGuo_zhsjf:'' }
}
//园林景观
export const zsxzsjfylGuoData = {
	zsxzsjfylGuo_sfjj:{ title:'设计费基数:', zsxzsjfylGuo_sfjj:'' },
	zsxzsjfylGuo_zq:{ title:'折前设计费:', zsxzsjfylGuo_zq:'' },
	zsxzsjfylGuo_zh:{ title:'折后设计费:', zsxzsjfylGuo_zh:'' }
}
//设计费
export const sjfGuoData = {
	sjf_sfjj:{ title:'收费基价:', sjf_sfjj:'' },
	sjf_jbsf:{ title:'基本收费:', sjf_jbsf:'' },
	sjf_jzj:{ title:'基准价:', sjf_jzj:'' },
	sjf_sjf:{ title:'设计费:', sjf_sjf:'' },
	sjf_zhsjf:{ title:'折后设计费:', sjf_zhsjf:'' }
}
//广西工程勘察设计费
export const sjfGuiData = {
	sjfGui_sfjj:{ title:'基本数据:', sjfGui_sfjj:'' },
	sjfGui_jbsf:{ title:'基本收费:', sjfGui_jbsf:'' },
	sjfGui_jzj:{ title:'基准价:', sjfGui_jzj:'' },
	sjfGui_gckcsjf:{ title:'设计费:', sjfGui_gckcsjf:'' },
	sjfGui_zhgckcsjf:{ title:'折后设计费:', sjfGui_zhgckcsjf:'' }
}
//全国地质灾害治理工程监理费
export const dzzhzlgcData = {
	dzzhzlgc_jj:{ title:'监理费基价:', dzzhzlgc_jj:'' },
	dzzhzlgc_jljzj:{ title:'监理基准价:', dzzhzlgc_jljzj:'' },
	dzzhzlgc_dzzhzlgc:{ title:'监理基:', dzzhzlgc_dzzhzlgc:'' },
	dzzhzlgc_zhdzzhzlgc:{ title:'折后监理费:', dzzhzlgc_zhdzzhzlgc:'' },
}