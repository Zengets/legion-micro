import React, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import CProvider from '@/components/CProvider';
import { ArrowLeft, Image, Edit, Location } from '@nutui/icons-react-taro'
import { Button, Grid, Avatar, ActionSheet } from '@nutui/nutui-react-taro'
import { navigateBack, navigateTo, onThemeChange, getSystemInfo } from '@tarojs/taro';
import { IconFont } from '@nutui/icons-react-taro';
import './proteam.less';


const options = [
  {
    name: '指定为管理员',
  },
]

export default function AirConditionerControl() {
  const [isVisible, setIsVisible] = useState(false)


  const handleSelect = (item) => {
    console.log('====================================');
    console.log(item.name)
    console.log('====================================');
    setIsVisible(false)
  }
  return (
    <CProvider>
      <View className="containers">
        <ActionSheet
          title="指定负责人"
          cancelText='取消'
          visible={isVisible}
          options={options}
          onSelect={handleSelect}
          onCancel={() => setIsVisible(false)}
        />

        <View className='back'>
          <Button icon={<ArrowLeft width={20} height={20} />} fill='none' style={{ width: 48, height: 48 }} onClick={() => {
            navigateBack()
          }}></Button>
        </View>

        <View className="header">
          <Text className="title">卧室的空调</Text>
          <Text className="status">已连接</Text>
        </View>

        <View className="temperature-display">
          <Text className="temperature">27.5<Text className="unit">°C</Text></Text>
        </View>

        <View className="environment-info">
          <Text className="env-title">位置信息</Text>
          <View className="center gap-12" style={{padding:"0 12px"}} onClick={()=>{
            navigateTo({
              url: '/pages/map/map'
            })
          }}>
            <Location />
            <Text className="env-temperature" > 南京市江宁区天印大道 102 号 103 室</Text>
          </View>
          <Text className="env-unit">电动自行车车棚分区 &gt; </Text>
        </View>

        <View className="power-button">
          <Button
            style={{
              borderRadius: "10px",
              backgroundColor: `#ccc`,
              color: `#fff`
            }}
            size='large'
            block
            fill='none'
            icon={<IconFont fontClassName="iconfont" classPrefix="icon" name="kaiguan" style={{ fontSize: 18 }} />}>
            启动
          </Button>
        </View>

        <View className="mode-buttons">
          <Grid gap={10} >
            <Grid.Item text="除湿">
              <Button icon={<Image />} fill='none'
                style={{
                  backgroundColor: `#999`,
                  color: `#fff`
                }} />

            </Grid.Item>
            <Grid.Item text="风扇">
              <Button
                icon={<Image />}
                fill='none'
                style={{
                  backgroundColor: `#999`,
                  color: `#fff`
                }} />
            </Grid.Item>
            <Grid.Item text="修改">
              <Button icon={<Edit />} fill='none' />
            </Grid.Item>
            <Grid.Item text={<Text style={{ color: "red" }}>解绑</Text>}>
              <Button icon={<Image style={{ color: "red" }} />} type="danger"
                fill='none'
              />
            </Grid.Item>
          </Grid>
        </View>

        <Text style={{ fontSize: 14, color: "#999", marginBottom: 12 }}>设备已关联人员</Text>

        <View className="mode-buttons">
          <Grid gap={10} >
            <Grid.Item text="朱辰" onClick={() => {
              setIsVisible(true)
            }}>
              <Avatar
                size="small"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
              />
            </Grid.Item>
          </Grid>
        </View>

      </View>
    </CProvider>
  );
}
