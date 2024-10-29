import React, { useState, useEffect } from 'react';
import { Button, Input } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components';
import CProvider from '@/components/CProvider';
import { IconFont } from '@nutui/icons-react-taro';
import Taro from '@tarojs/taro';
import { Button as TButton } from '@tarojs/components';
import doFetch from '@/utils/doFetch';
import './login.less';


const Login = () => {


  useEffect(() => {
    Taro.login({
      success: function (res) {
        console.log('====================================');
        console.log(res?.code);
        console.log('====================================');
        // if (res.code) {
        //   //发起网络请求
        //   Taro.request({
        //     url: 'https://test.com/onLogin',
        //     data: {
        //       code: res.code
        //     }
        //   })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      }
    })


  }, []);


  return (
    <CProvider>
      <View className='login-page'>
        <Text className='title'>
          欢迎使用
        </Text>
        <View className='form-container'>
          <View className="center formbar" >
            <IconFont fontClassName="iconfont" classPrefix="icon" name="user" />
            <Input placeholder='用户名'></Input>
          </View>
          <View className="center formbar" >
            <IconFont fontClassName="iconfont" classPrefix="icon" name="lock" />
            <Input placeholder='密码' style={{ backgroundColor: "transparent" }}></Input>
          </View>
        </View>
        <Button type="primary" size='large' >登录</Button>

        <TButton
          className='fixbottom'
          openType='getPhoneNumber'
          onGetPhoneNumber={(res) => {
            console.log('====================================');
            console.log(res);
            console.log('====================================');

          }}>获取手机号</TButton>
      </View>
    </CProvider>
  )


  // function hanldeLogin(){
  //   Taro.login({
  //     success: function (res) {
  //       console.log('====================================');
  //       console.log(res.code);
  //       console.log('====================================');

  //       // if (res.code) {
  //       //   doFetch({
  //       //     url: 'https://test.com/onLogin',
  //       //     data: {
  //       //       code: res.code
  //       //     }
  //       //   })
  //       // } else {
  //       //   console.log('登录失败！' + res.errMsg)
  //       // }
  //     }
  //   })



  // }
}
export default Login
