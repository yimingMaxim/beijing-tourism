import request from '@/utils/request';
import Wang from '@/utils/wang';
import md5 from 'md5';

export default class AuthApi {
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  // public static login(user: any) {
  //   return new Promise(resolve => {
  //     const md5Psw = '161ebd7d45089b3446ee4e0d86dbcf92';
  //     const password = md5(user.password);
  //     if (password === md5Psw && user.name === 'harrison') {
  //       resolve({
  //         data: {
  //           code: 200,
  //           object: {
  //             auth: 'admin',
  //             authToken: Wang.randomString(32)
  //           }
  //         }
  //       })
  //     } else {
  //       resolve({
  //         data: {
  //           code: 500
  //         }
  //       })
  //     }
  //   })
  // }
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  public static login(user: any) {
    const password = md5(user.password);
    const param = {
      name: user.name,
      password
    }
    return request.post('/user/api/checkUserInfo', param)
  }
}
