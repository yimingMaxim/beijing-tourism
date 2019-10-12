import request from '@/utils/request';
import Cookies from 'js-cookie';
import md5 from 'md5';

export default class AuthApi {
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  public static login(user: any) {
    const password = md5(user.password);
    const param = {
      name: user.name,
      password
    };
    return request.post('/user/api/checkUserInfo', param);
  }

  /**
   * 登出
   */
  public static logout(callback = () => {}) {
    Cookies.remove('auth');
    Cookies.remove('authToken');
    callback();
  }

  public static getUsRate() {
    return request.get('https://www.mycurrency.net/US.json');
  }
}
