import React from 'react';
import { Map, View } from '@tarojs/components';

const Users = () => {
  return <View style={{width:"100%",height:"100vh"}}>
    <Map style={{width:"100%",height:"100%"}} longitude={118} latitude={32}></Map>
  </View>;
};

export default Users;
