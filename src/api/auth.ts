import request from '@/utils/request';

export class Auth {
  /**
   * 获取菜单详情
   *
   * @param params 参数 { isdesc, ordercol, menu_parentUuid, role_uuid_List }
   *
   */
  public static getMenu(roles: object, parentMenu?: any) {
    const params: any = {
      role_uuid_List: roles,
      ordercol: 'sequence',
      isdesc: 'false'
    };
    if (parentMenu) {
      params.menu_parentUuid = parentMenu.uuid;
    }
    return request.post('/auth/api/v2/menu/role', params);
  }

  /**
   * 根据userId获取管理岗位
   *
   * @param param 参数 { user_uuid, morg_uuid }
   *
   */
  public static manageRoles(param: object) {
    return request.get('/auth/api/v2/manageRole/user', {
      params: {
        param
      }
    });
  }

  /**
   * 根据userId获取客户角色
   *
   * @param param 参数 { user_uuid, id }
   *
   */
  public static tenantRoles(param: object) {
    return request.get('/auth/api/v2/tenantRole/user', {
      params: {
        param
      }
    });
  }

  /**
   * 根据userId获取客户角色
   *
   * @param userId 用户id
   * @param morgId 域id
   *
   */
  public static tenantsByUser(userId: any, morgId: any) {
    return request.get(`/auth/api/v2/tenants/uorg/user/${userId}`, {
      params: {
        morgId
      }
    });
  }

  /**
   * 根据userId获取客户角色
   *
   * @param param 参数 { userId, morgId }
   *
   */
  public static projects(param: object) {
    return request.get('/auth/api/v2/project/user/projects', {
      params: {
        param
      }
    });
  }

  /**
   * 根据userId获取项目角色
   *
   * @param param 参数 { user_uuid, id }
   *
   */
  public static projectRoles(param: object) {
    return request.get('/auth/api/v2/projectRole/user', {
      params: {
        param
      }
    });
  }

  /**
   * 获取顶部导航产品分类
   *
   * @param param 参数 {projectId }
   *
   */
  public static getProductGroup(projectId: string) {
    return request.get(`/auth/api/v2/project/${projectId}`, {
      params: {
        projectId
      }
    }).then((project: any) => {
      return request.get(`/auth/api/v2/tenants/${project.data.tenantId}`).then((tenant: any) => {
        return request.get('/product/api/v2/productCatalogies/', {
          params: {
            orderCol: 'catalogPosition',
            orderType: 'asc',
            morgId: tenant.data.morgId
          }
        }).then((res: any) => {
          const subMenus: object[] = [];
          res.data.map((ssm: any) => {
            const orderform = {
              entity: ssm.catalogId,
              controlName: 'orderform',
              hasChild: 1,
              displayName: ssm.catalogName,
              modeName: 'service',
              uuid: ssm.catalogId,
              icon: ssm.catalogIconUrl
            };
            subMenus.push(orderform);
          });
          return subMenus;
        });
      });
    });
  }
  /**
   * 查找产品
   *
   * @param param 参数 {catalogId,productStatus }
   *
   */
  public static products(param: object) {
    return request.get('/product/api/v2/products/', {
      params: param,
    });
  }
  /**
   * 根据uuid获取用户
   *
   * @param uuid 用户id
   *
   */
  public static getUser(uuid: any) {
    return request.get(`/auth/api/v2/user/${uuid}`);
  }

  /**
   * 根据uuid获取用户
   *
   * @param uuid  用户id
   * @param param 个人信息
   *
   */
  public static saveUser(uuid: any, param: object) {
    return request.put(`/auth/api/v2/user/${uuid}`, param);
  }

  /**
   * 根据uuid修改密码
   *
   * @param uuid  用户id
   * @param param 个人信息
   *
   */
  public static userPassword(uuid: any, param: object) {
    return request.put(`/auth/api/v2/user/user/${uuid}/changepassword`, param);
  }

  /**
   * 退出登录
   *
   * @param param 参数{uuid}
   *
   */
  public static logout() {
    return request.get('/auth/api/v2/logout');
  }

  /**
   * 字典查询
   *
   * @param param 参数{uuid}
   *
   */
  public static dict(param: object) {
    return request.get('/auth/api/v2/dict/dictList', {
      params: {
        param
      }
    });
  }
  /**
   * 维护管理机构树
   *
   * @param param 参数{uuid}
   *
   */
  public static modTree(uuid: any) {
    return request.get(`/auth/api/v2/morg/${uuid}`);
  }
}
