import request from '@/utils/request';

const QUERY_LIST_URL = '/car/api/getCar';
const ADD_URL = '/car/api/addCar';
const UPDATE_URL = '/car/api/updateCar';
const DELETE_URL = '/car/api/deleteCar/';

export default class ChauffeurApi {
  /**
   * @public queryCarList
   * @description 查询旅游线路列表
   */
  public static queryCarList(params: any = {}) {
    return request.get(QUERY_LIST_URL, {
      params
    });
  }

  /**
   * @public addCar
   * @description 新增旅游线路
   */
  public static addCar(param: any) {
    return request.post(ADD_URL, param);
  }

  /**
   * @public updateCar
   * @description 修改旅游线路
   */
  public static updateCar(param: any) {
    return request.put(UPDATE_URL, param);
  }

  /**
   * @public deleteCar
   * @description 删除图片及价格
   */
  public static deleteCar(uuid: string) {
    return request.delete(`${DELETE_URL}${uuid}`);
  }
}
