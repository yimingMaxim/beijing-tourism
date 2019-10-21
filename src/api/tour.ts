import request from '@/utils/request';
import ImageApi from './image';
import PriceApi from './price';

const QUERY_LIST_URL = '/tour/api/tourList';
const QUERY_ONE_URL = '/tour/api/getTourLine/';
const ADD_URL = '/tour/api/addtour';
const UPDATE_URL = '/tour/api/updatetour';
const UPDATE_ISSHOW_URL = '/tour/api/updatetourshow/';
const DELETE_URL = '/tour/api/deletetour/';

const QUERY_COMMENT_URL = '/tour/api/selectRemark/'
const ADD_COMMENT_URL = '/tour/api/addTourRemark'
const DELETE_COMMENT_URL = '/tour/api/deleteRemark/'

export default class TourApi {
  /**
   * @public queryTourList
   * @description 查询旅游线路列表
   */
  public static queryTourList(params: any = {}) {
    return request.get(QUERY_LIST_URL, {
      params,
      transformResponse: (res: any) => {
        const object = JSON.parse(res).object;
        object.forEach((tour: any) => {
          sortPrice(tour);
        });
        return { object };
      }
    });
  }

  /**
   * @public queryTourById
   * @description 根据ID查询一条旅游线路
   */
  public static queryTourById(tourId: string) {
    return request.get(`${QUERY_ONE_URL}${tourId}`, {
      transformResponse: (res: any) => {
        const object = JSON.parse(res).object;
        sortPrice(object);
        return { object };
      }
    });
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
    return request.put(UPDATE_URL, param);
  }

  /**
   * @public deleteTour
   * @description 删除图片及价格
   */
  public static deleteTour(uuid: string) {
    return request.delete(`${DELETE_URL}${uuid}`);
  }

  /**
   * @public updateIsShow
   * @description 切换tour是否展示
   */
  public static updateIsShow(tourId: string, param: any) {
    return request.put(`${UPDATE_ISSHOW_URL}${tourId}`, param);
  }

  /**
   * @public queryComment
   * @description 查询评论列表
   */
  public static queryComment(tourId: string) {
    return request.get(`${QUERY_COMMENT_URL}${tourId}`);
  }

  /**
   * @public addComment
   * @description 新增一条评论
   */
  public static addComment(param: any) {
    return request.post(ADD_COMMENT_URL, param);
  }

  /**
   * @public deleteComment
   * @description 删除一条评论
   */
  public static deleteComment(uuid: string) {
    return request.delete(`${DELETE_COMMENT_URL}${uuid}`);
  }

  public static deletePriceAndImg(tourId: string) {
    const imagePromise = new Promise(resolve => {
      ImageApi.deleteImage(tourId).then(res => {
        resolve();
      })
    });
    const pricePromise = new Promise(resolve => {
      PriceApi.deletePrice(tourId).then(res => {
        resolve();
      })
    });
    return Promise.all([imagePromise, pricePromise]);
  }

  public static getUsRate() {
    return request.get('/tour/api/getRatesForward');
  }
}

const sortPrice = (tour: any) => {
  const prices = tour.prices;
  tour.prices = prices.sort((a: any, b: any) => {
    return a.person - b.person;
  });
}
