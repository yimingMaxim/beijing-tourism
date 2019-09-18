import request from '@/utils/request';

// const QUERY_URL = '/tour/api/tourList';
// const ADD_URL = '/tour/api/addtour';
// const UPDATE_URL = '/tour/api/updatetour';
const DELETE_URL = '/image/api/deleteTourImage/';

export default class ImageApi {

  /**
   * @public deleteImage
   * @description 删除图片
   */
  public static deleteImage(uuid: string) {
    return request.delete(`${DELETE_URL}${uuid}`);
  }
}
