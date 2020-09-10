import axios from 'axios';
//  封装请求
var api = {
    // 最近搜索历史
    getHotPlaceList() {
        return axios.get("/api/meituan/header/searchHotWords.json")
    },
    // 搜索下拉框
    getSearchList() {
        return axios.get("/api/meituan/header/search.json")
    },
    // 左侧导航列表展示
    getmenuList() {
        return axios.get("/api/meituan/index/nav.json")
    },
    // 热门城市
    getCityList() {
        return axios.get('/api/meituan/city/hot.json')
    },
    // 最近访问城市
    getHitList() {
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json')
    },
    // 获取地理位置信息
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json')
    },

    // 获取城市列表
    getcityData() {
        return axios.get('/api/meituan/city/cityList.json')
    },
    getLogin(params) {
        return axios.get('/api/meituan/login', params)
    },
    getregisiter(params) {
        return axios.get('/api/meituan/register', params)
    }
}

export default api;