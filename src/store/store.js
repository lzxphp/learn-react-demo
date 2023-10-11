// 创建 Redux store，并将 reducer 注入到 store 中

import { createStore } from "redux";
import { counterReducer } from "./reducers";

const store = createStore(counterReducer);

export default store;
