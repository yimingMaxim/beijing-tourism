import request from '@/utils/request';

const QUERY_TOUR_ORDER_URL = '/order/api/showHotelOrders';
const ADD_TOUR_URL = '/order/api/addHotelOrder';

const QUERY_CAR_ORDER_URL = '/order/api/addCarOrder';
const ADD_CAR_URL = '/order/api/showCarOrders';

export default class OrderApi {
  /**
   * @public queryTourOrder
   * @param {string} startTime - 开始时间
   * @param {string} endTime - 开始时间
   * @param {number} startPage - 起始页
   * @param {number} pageSize - 每页条数
   * @description 查询旅游订单
   */
  public static queryTourOrder(params: any = {}) {
    return request.get(QUERY_TOUR_ORDER_URL, {
      params
    });
  }

  /**
   * @public addTourOrder
   * @description 新增旅游订单
   */
  public static addTourOrder(param: any) {
    return request.post(ADD_TOUR_URL, param);
  }

  /**
   * @public queryCarOrder
   * @param {string} startTime - 开始时间
   * @param {string} endTime - 开始时间
   * @param {number} startPage - 起始页
   * @param {number} pageSize - 每页条数
   * @description 查询用车订单
   */
  public static queryCarOrder(params: any = {}) {
    return request.get(QUERY_CAR_ORDER_URL, {
      params
    });
  }

  /**
   * @public addCarOrder
   * @description 新增用车订单
   */
  public static addCarOrder(param: any) {
    return request.post(ADD_CAR_URL, param);
  }

}
