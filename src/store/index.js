import { configureStore, createSlice } from '@reduxjs/toolkit';

// 定义初始状态
const initialState = {
  data: {
    count: 0,
    text: '',
    selected:'/pages/home/home'
  },
};

// 使用 createSlice 创建 slice
const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.data = action.payload;
    },
  },
});

// 导出 actions
export const { updateState } = modelSlice.actions;

// 创建并导出 store
const store = configureStore({
  reducer: {
    model: modelSlice.reducer,
  },
});

export default store;
