import request from '@/utils/request';

const DELETE_URL = '/price/api/deleteTourPrice/';

export default class PriceApi {

  /**
   * @public deletePrice
   * @description 删除价格
   */
  public static deletePrice(uuid: string) {
    return request.delete(`${DELETE_URL}${uuid}`);
  }
}
