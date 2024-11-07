import React from 'react';
import { Map, View } from '@tarojs/components';

const Users = () => {
  return <View style={{width:"100%",height:"100vh"}}>
    <Map style={{width:"100%",height:"100%"}} longitude={118} latitude={32}
    markers={[
      {
        id: '1',
        latitude: 32,
        longitude: 118,
        title: '我的位置',
        iconPath: '/images/location.png',
        width: 30,
        height: 30,
      },
    ]}

    ></Map>
  </View>;
};

export default Users;
