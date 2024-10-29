import { useSelector, useDispatch } from 'react-redux';
import { updateState } from '../store';

const useModel = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.model.data);


  const setInitialState = (newState) => {
    // 判断 newState 是函数还是直接的状态值
    const updatedState = typeof newState === 'function' ? newState(initialState) : newState;

    dispatch(updateState(updatedState));
  };

  return {initialState, setInitialState};
};

export default useModel;
