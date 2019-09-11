import request from '@/utils/request';
import { Md5 } from 'md5-typescript';

export default class AuthApi {
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  public static login(param: any) {
    const psw = Md5.init(param.password);
    param.password = psw;
    return request.post('/auth/api/v2/menu/role', param);
  }
}
