import request from '@/utils/request';
import ImageApi from './image';
import PriceApi from './price';

const QUERY_URL = '/tour/api/tourList';
const ADD_URL = '/tour/api/addtour';
const UPDATE_URL = '/tour/api/updatetour';
const DELETE_URL = '/tour/api/deletetour/';

export default class TourApi {
  /**
   * @public queryTour
   * @description 查询旅游线路
   */
  public static queryTour() {
    return request.get(QUERY_URL);
  }

  /**
   * @public addTour
   * @description 新增旅游线路
   */
  public static addTour(param: any) {
    return request.post(ADD_URL, param);
  }

  /**
   * @public updateTour
   * @description 修改旅游线路
   */
  public static updateTour(param: any) {
    return request.post(UPDATE_URL, param);
  }

  /**
   * @public deleteTour
   * @description 删除旅游线路
   */
  public static deleteTour(uuid: string) {
    return request.delete(`${DELETE_URL}${uuid}`);
  }
}
