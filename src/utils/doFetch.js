import Taro from "@tarojs/taro";
const handleError = (code) => {
  switch (code) {
    case 400:
      console.error('请求错误');
      break;
    case 401:
      console.error('未授权，请重新登录');
      break;
    case 403:
      console.error('拒绝访问');
      break;
    case 404:
      console.error('请求地址出错');
      break;
    case 500:
      console.error('服务器内部错误');
      break;
    default:
      console.error(`其他错误，状态码：${code}`);
  }
};

const doFetch = async (options) => {
  const { url, method = 'GET', params } = options;

  //获取 token
  var token = Taro.getStorageSync('TOKEN');
  const headers = {
    token: token,
  };

  return await Taro.request({
    url: `${APPURL}${url}`,
    method,
    data: { ...params },
    header: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => {
    if (response.code >= 200 && response.code < 300) {
      return response.data;
    } else {
      handleError(response.code);
      return Promise.reject(response);
    }
  }).catch((error) => {
    console.error('网络请求错误:', error);
    return Promise.reject(error);
  });
};

export default doFetch;
