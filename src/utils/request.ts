import axios from 'axios';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';
const service = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 配置所有request
service.interceptors.request.use(
  config => {
    config.headers.authToken = Cookies.get('authToken'); // 所有请求增加authToken
    return config;
  },
  error => {
    Message({
      message: error,
      type: 'error'
    });
  }
);

// 配置所有response
service.interceptors.response.use(
  (response: any) => {
    // 错误处理
    switch (response.data.code) {
      case 400:
        Message({
          message: response.data.message,
          type: 'error'
        });
        return Promise.reject(response);
      case 412:
        return Promise.reject(response);
      case 401:
        Message({
          message: response.data.message,
          type: 'error'
        });
        break;
      case 403:
        Message({
          message: response.data.message,
          type: 'warning'
        });
        break;
      case 404:
        Message({
          message: response.data.message,
          type: 'error'
        });
        break;
      case 405:
        Message({
          message: response.data.message,
          type: 'error'
        });
        break;
      case 500:
        Message({
          message: response.data.message,
          type: 'error'
        });
        break;
    }
    return response;
  },
  error => {
    const res = error.response.data;
    switch (error.response.status) {
      case 400:
        Message({
          message: res.msg,
          type: 'error'
        });
        break;
      case 401:
        Message({
          message: res.msg,
          type: 'error'
        });
        break;
      case 403:
        Message({
          message: res.msg,
          type: 'warning'
        });
        break;
      case 404:
        Message({
          message: res.msg || error.response.status,
          type: 'error'
        });
        break;
      case 405:
        Message({
          message: res.msg,
          type: 'error'
        });
        break;
      case 500:
        Message({
          message: res.msg || error.response.status,
          type: 'error'
        });
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
