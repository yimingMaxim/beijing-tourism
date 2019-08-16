/**
 * @class Wang
 * @description 工具类
 * @author ymwang 2019-01-04
 */

export default class Wang {
  /**
   * @function merge 深度合并
   * @param a 被合并对象
   * @param b 合并对象
   */
  public static merge(a: any, b: any) {
    if (a === undefined || b === undefined) {
      return;
    } else {
      for (const key of Object.keys(b)) {
        a[key] = a[key] && a[key].toString() === '[object Object]' ?
          this.merge(a[key], b[key]) : a[key] = b[key];
      }
      return a;
    }
  }

  /**
   * @function getRawType 获取数据类型
   * @param value any
   */
  public static getRawType(value: any): string {
    return Object.prototype.toString.call(value).slice(8, -1);
  }

  public static flatten(arr: Array<any>): Array<any> {
    return [].concat(...arr.map(x => (Array.isArray(x) ? this.flatten(x) : x)));
  }
}
