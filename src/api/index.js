//封装的请求方法
import base, { host360 } from "./base";
// console.log(base,host360);
//二次封装的axios  (自己封装  1.项目中封装好了 请使用项目中 2. 未封装-可以封装 -百度一个 )
import axios from "@/utils/request";

//定义方法
export default {
  /* 
        热门城市
    */
  getHotCity() {
    return axios.get(base.hotcity);
  },
  /*
    搜索框内容
    get  keyword=''
   */
  getSearch(params) {
    return axios.get(base.search, { params });
  },
  /* 
    今日推荐
  */
  getTodyInfo() {
    return axios.get(base.todyInfo);
  },
  /* 
  穷游商城
  ?page=1
*/
  getHomeShop(params) {
    return axios.get(base.homeShop, { params });
  },
  /* 
    热门游记与话题
  */
  getHotTravel() {
    return axios.get(base.hotTravel);
  },
  /* 
  目的地搜索接口
  destSearch
  &keyword=55
 */
  getDestSearch(params) {
    return axios.get(base.destSearch, { params });
  },
};

export function demo() {
  console.log("测试单个导出-");
}
