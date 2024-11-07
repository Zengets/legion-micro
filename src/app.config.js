export default defineAppConfig({
  darkmode: true,
  lazyCodeLoading: 'requiredComponents',
  themeLocation: "theme.json",
  pages: [
    "pages/home/home",
    // "pages/login/login",
    "pages/proteam/proteam",
    "pages/users/users",
    "pages/mine/mine",
    "pages/map/map",
  ],
  // tabBar: {
  //   custom: true,
  //   color: "@tabFontColor",
  //   selectedColor: "@tabSelectedColor",
  //   backgroundColor: "@tabBgColor",
  //   borderStyle: "@tabBorderStyle",
  //   list: [
  //     {
  //       pagePath: "pages/home/home",
  //       text: "工作台",
  //       iconPath: "assets/home.png",
  //       selectedIconPath: "assets/home_active.png",
  //     },
  //     {
  //       pagePath: "pages/proteam/proteam",
  //       text: "项目",
  //       iconPath: "assets/proteam.png",
  //       selectedIconPath: "assets/proteam_active.png",
  //     },
  //     {
  //       pagePath: "pages/users/users",
  //       text: "成员",
  //       iconPath: "assets/users.png",
  //       selectedIconPath: "assets/users_active.png",
  //     },
  //     {
  //       pagePath: "pages/mine/mine",
  //       text: "我的",
  //       iconPath: "assets/mine.png",
  //       selectedIconPath: "assets/mine_active.png",
  //     },
  //   ],
  // },
  window: {
    navigationBarBackgroundColor: "@navBgColor",
    navigationBarTextStyle: "@navTxtStyle",
    backgroundColor: "@bgColor",
    backgroundTextStyle: "@bgTxtStyle",
    backgroundColorTop: "@bgColorTop",
    backgroundColorBottom: "@bgColorBottom",
  },
});
