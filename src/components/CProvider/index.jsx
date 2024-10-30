import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import { ConfigProvider } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import theme from "@/theme.json";
import { useAsyncEffect } from "ahooks";


// 应用内置主题
const config = {
  sizeXl: '48px',
  sizeLg: "27px",
  sizeMd: "24px",
  sizeSm: "16px",
  size:'12px',
  borderRadiusLg: "12px",
  borderRadiusMd: "8px",
  borderRadiusSm: "4px",
  fontSizeLg: "24px",
  fontSizeMd: "18px",
  fontSizeSm: "14px",
  lineHeightLg: "1.5",
  lineHeightMd: "1.4",
  lineHeightSm: "1.3",
  cardShadowLg: "0 4px 8px rgba(0, 0, 0, 0.1)",
  cardShadowMd: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cardShadowSm: "0 1px 2px rgba(0, 0, 0, 0.1)",
};

const CProvider = ({ children, full = false }) => {
  const [themeProvider, setThemeProvider] = useState(theme?.light);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useAsyncEffect(async () => {
    //动态主题
    let res = await Taro.getSystemInfo({
      success: (res) => console.log(res),
    });
    setThemeProvider({
      theme: res.theme,
      provide: theme[res?.theme],
    });
    setStatusBarHeight(full ? 0 : res?.statusBarHeight);
    //切换主题
    Taro.onThemeChange((res) => {
      setThemeProvider(theme[res]);
    });
  }, []);

  return (
    <ConfigProvider
      theme={{ ...config, ...themeProvider.provide }}
      style={{
        height: `calc(100% - ${statusBarHeight}px)`,
        background:
          themeProvider.theme === "dark"
            ? "linear-gradient(135deg,#414345,#232526)"
            : "linear-gradient(135deg,#f5f5f5,#ffffff)",
        paddingTop: statusBarHeight,
        overflow: "hidden",
      }}
    >
      {cloneElement(children, { ...themeProvider })}
    </ConfigProvider>
  );
};

CProvider.propTypes = {
  children: PropTypes.node.isRequired, // 确保传递的子元素存在
  full: PropTypes.bool, // 传递布尔值，默认为 false
};

export default CProvider;
