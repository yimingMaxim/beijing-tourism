import request from '@/utils/request';

const QUERY_URL = '/tour/api/tourList';
const ADD_URL = '/tour/api/addtour';
const UPDATE_URL = '';
const DELETE_URL = '';

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
  public static deleteTour(param: any) {
    return request.post(DELETE_URL, param);
  }
}
