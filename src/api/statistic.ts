import Cookies from 'js-cookie';
import request from '@/utils/request';

export default class Statistic {
  /**
   * @public getZjSummary
   * @description 获取浙江大屏数据
   */
  public static getZjSummary() {
    const morgId = Cookies.get('morgId');
    return request.get(`/statistic/api/v2/zjSummary/${morgId}`, {
      transformResponse: res => {
        return {};
      }
    });
  }
}
