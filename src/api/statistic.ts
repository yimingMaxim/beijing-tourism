import Cookies from 'js-cookie';
import request from '@/utils/request';

import { ZjSummary } from '../views/zhejiang/zjSummary.model';

export default class Statistic {
  /**
   * @public getZjSummary
   * @description 获取浙江大屏数据
   */
  public static getZjSummary() {
    // const morgId = '9ea8f9b4-628e-11e6-9e1b-e0db55cd9154';
    const morgId = Cookies.get('morgId');
    return request.get(`/statistic/api/v2/zjSummary/${morgId}`, {
      transformResponse: res => {
        const result = JSON.parse(res);
        const cities = result.sort((a: any, b: any) => {
          return a.vregionId - b.vregionId;
        });
        return new ZjSummary({ cities });
      }
    });
  }
}
