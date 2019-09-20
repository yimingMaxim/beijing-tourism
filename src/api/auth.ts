import request from '@/utils/request';
const { JSEncrypt } = require('jsencrypt');

export default class AuthApi {
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  public static login(params: any) {
    return new Promise(resolve => {
      debugger;
      request.get('/user/api/getAuth').then((res: any) => {
        let publicKey = res.data; // 从后台获取公钥，这里省略，直接赋值
        let encryptor = new JSEncrypt()  // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey)  // 设置公钥
        const name = encryptor.encrypt(params.name)  // 对密码进行加密
        const password = encryptor.encrypt(params.password)  // 对密码进行加密
        request.get('/user/api/checkUserInfo', {
          params: {
            name,
            password
          }
        }).then((res: any) => {
          resolve(res);
        })
      });
    })
  }

}
