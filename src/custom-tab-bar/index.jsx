import Taro from '@tarojs/taro'
import { useState } from 'react'
import { CoverView, CoverImage, Text } from '@tarojs/components'
import useModel from '@/hooks/useModel'
import './index.less'

const Index = () => {
  const { initialState, setInitialState } = useModel();
  const selected = initialState?.selected;
  const list = [
    {
      pagePath: "/pages/home/home",
      text: "工作台",
      iconPath: "../assets/home.png",
      selectedIconPath: "../assets/home_active.png",
    },
    {
      pagePath: "/pages/proteam/proteam",
      text: "项目",
      iconPath: "../assets/proteam.png",
      selectedIconPath: "../assets/proteam_active.png",
    },
    {
      pagePath: "/pages/users/users",
      text: "成员",
      iconPath: "../assets/users.png",
      selectedIconPath: "../assets/users_active.png",
    },
    {
      pagePath: "/pages/mine/mine",
      text: "我的",
      iconPath: "../assets/mine.png",
      selectedIconPath: "../assets/mine_active.png",
    },
  ]

  const switchTab = (url) => {
    console.log('====================================');
    console.log(url);
    console.log('====================================');
    setInitialState(s => ({
      ...s,
      selected: url,
    }))
    Taro.switchTab({ url })
  }

  return (
    <CoverView className='tab-bar'>
      {list.map((item, index) => (
        <CoverView key={index} className='tab-bar-item' onClick={() => switchTab( item.pagePath)}>
          <CoverImage src={selected === item.pagePath ? item.selectedIconPath : item.iconPath} />
          <CoverView className={selected === item.pagePath ? 'tab-bar-text-checked' : 'tab-bar-text'}>
            {item.text}
          </CoverView>
        </CoverView>
      ))}
    </CoverView>
  )
}

export default Index
