// src/utils/auth.js
import Taro from '@tarojs/taro';

export const getToken = () => {
  return Taro.getStorageSync('token');
};

export const setToken = (token) => {
  Taro.setStorageSync('token', token);
};

export const removeToken = () => {
  Taro.removeStorageSync('token');
};
