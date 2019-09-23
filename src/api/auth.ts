import request from '@/utils/request';
const { JSEncrypt } = require('jsencrypt');

export default class AuthApi {
  /**
   * 登陆
   * @param param - 用户信息对象
   */
  public static login(user: any) {
    return new Promise(resolve => {
      request.get('/user/api/getAuth').then((res: any) => {
        let publicKey = res.data; // 从后台获取公钥，这里省略，直接赋值
        let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey); // 设置公钥
        const param = JSON.stringify({
          name: encryptor.encrypt(user.name), // 对密码进行加密
          password: encryptor.encrypt(user.password) // 对密码进行加密
        });
        request.post('/user/api/checkUserInfo', param).then((res: any) => {
          resolve(res);
        });
      });
    });
  }
}
