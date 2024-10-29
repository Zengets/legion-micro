import { View, Text, Image, Button } from '@tarojs/components';
import './proteam.less';

export default function AirConditionerControl() {
  return (
    <View className="container">
      <View className="header">
        <Text className="title">卧室的空调</Text>
        <Text className="status">已连接</Text>
      </View>

      <View className="temperature-display">
        <Text className="temperature">27.5</Text>
        <Text className="unit">°C</Text>
        <Text className="mode">❄ 制冷</Text>
      </View>

      <View className="environment-info">
        <Text className="env-title">室内环境信息</Text>
        <Text className="env-temperature">22.1</Text>
        <Text className="env-unit">温度 (°C)</Text>
      </View>

      <View className="power-button">
        <Button className="power-btn">开机</Button>
      </View>

      <View className="mode-buttons">
        <Button className="mode-btn">❄ 制冷</Button>
        <Button className="mode-btn">除湿</Button>
        <Button className="mode-btn">风扇</Button>
        <Button className="mode-btn">制热</Button>
      </View>

      <View className="temperature-control">
        <Text className="control-label">温度调节</Text>
        <View className="control-display">
          <Text className="current-temp">27.5 °C</Text>
          <View className="adjust-buttons">
            <Button className="adjust-btn">-</Button>
            <Button className="adjust-btn">+</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
