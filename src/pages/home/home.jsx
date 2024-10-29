import React, { useState, useEffect } from 'react';

import { View, Text, Image } from '@tarojs/components';
import { IconFont } from '@nutui/icons-react-taro';
import { Button } from '@nutui/nutui-react-taro'
import { Scan, Plus, Link, Unlink } from '@nutui/icons-react-taro'
import { ActionSheet, Avatar } from '@nutui/nutui-react-taro'
import './home.less';
import { useRequest } from 'ahooks';
import doFetch from '@/utils/doFetch';

const options = [
  {
    name: '扫码绑定',
  },
  {
    name: '输入编码绑定',
  },
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  const { data } = useRequest(async () => {
    let res = [
      {
        "name": "灯光",
        "status": "2个灯开着",
        "location": "门厅",

      },
      {
        "name": "大门",
        "status": "20:24 已关闭",
        "location": "门厅"
      },
      {
        "name": "人体传感器",
        "status": "09:51 有人移动",
        "location": "门厅"
      },
      {
        "name": "卧室墙壁插座",
        "status": "",
        "location": "卧室",
        "action": "⏻"
      },
      {
        "name": "扫地机器人",
        "status": "",
        "location": "餐厅",
        "action": "🔔"
      },
      {
        "name": "董家大门",
        "status": "",
        "location": "门厅"
      },
      {
        "name": "自定义",
        "status": "",
        "location": "客厅"
      },
      {
        "name": "展示柜",
        "status": "",
        "location": "客厅",
        "action": "⏻"
      }
    ]// await doFetch({url:"",params:{}})
    return res

  })

  const handleSelect = (item) => {
    console.log('====================================');
    console.log(item.name)
    console.log('====================================');
    setIsVisible(false)
  }

  return (
    <View className="container">
      <ActionSheet
        title="添加设备"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
      {/* 标题 */}
      <View className="header">
        <View className="left gap-12">
          <Avatar
          size='small'
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Text className="header-title">你好，朱辰</Text>
        </View>
        <Button
          type='success'
          //icon={<Scan width={16} height={16} />}
          onClick={() => setIsVisible(true)}
        >
          添加设备
        </Button>
      </View>



      {/* 设备卡片 */}
      <View className="devices-grid">
        {
          data?.map((it, i) => {
            return (
              <View key={i} className="device-card">
                <div className="left gap-12" style={{ color: it?.link ? "#000" : "#999" }}>
                  {
                    it?.link ? <Link /> : <Unlink />
                  }
                  <Text className="device-name"> {it.name}</Text>
                </div>
                <Text className="device-status">{it.status || "-"}</Text>
                <View className='right'>
                  <Button
                    fill={"none"}
                    icon={<IconFont fontClassName="iconfont" classPrefix="icon" name="kaiguan" style={{ fontSize: 18 }} />}
                    style={it?.action ? {
                      backgroundColor: `#13c2c2`,
                      color: `#fff`
                    } : {
                      backgroundColor: `#f0f0f0`,
                      color: `#999`
                    }}
                  />
                </View>

              </View>
            )
          })
        }
      </View>

    </View>
  );
}
