import ajax from './ajax';

const baseUrl = '/api';
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${baseUrl}/position/${geohash}`);
// 2、获取食品分类列表
export const reqGoodsList = () => ajax(baseUrl + '/index_category');
// 3、根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(baseUrl + '/shops', { latitude, longitude });
// 4、根据经纬度和关键字搜索商铺列表
export const reqMarketList = (geohash, keyword) => ajax(baseUrl + '/search_shops', { geohash, keyword });
// 5、获取一次性验证码
// 6、用户名密码登陆
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(baseUrl + '/login_pwd', { name, pwd, captcha }, 'POST');
// 7、发送短信验证码
export const reqMsgCode = (phone) => ajax(baseUrl + '/sendcode', { phone });
// 8、手机号验证码登陆
export const reqMsgLogin = (phone, code) => ajax(baseUrl + '/login_sms', { phone, code }, 'POST');
// 9、根据会话获取用户信息
export const reqUSerNews = () => ajax(baseUrl + '/userinfo');
// 10、用户退出
export const reqUserLogout = () => ajax(baseUrl + '/logout');

// mock
export const reqShopGoods = () => ajax('/goods');
export const reqShopRatings = () => ajax('/ratings');
export const reqShopInfo = () => ajax('/info');