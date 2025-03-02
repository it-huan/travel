//公共配置地址接口
//360接口： https://bang.360.cn/aj/getcitycode
//穷游接口
//目的地接口
// https://place.qyer.com/qcross/place/public.php?action=placesearch&keyword=55&client=web
//导出整个对象
const base ={
    host360:'https://bang.360.cn',
    hotcity:'/api/aj/getcitycode',//热门城市
    search:'/foo/qcross/place/public.php?action=placesearch&client=web',//搜索框
    todyInfo:'/foo/qcross/home/index.php?action=recommend',//今日推荐
    homeShop:'/foo/qcross/home/index/recommendbiz',//首页穷游商城 ?page=1
    hotTravel:'/foo/qcross/home/ajax?action=thread',//热门游记\
    destSearch:'/boo/qcross/place/public.php?action=placesearch&client=web',//目的地搜索
}

export default base

//单独导出某个属性
export const host360 ='https://bang.360.cn';

