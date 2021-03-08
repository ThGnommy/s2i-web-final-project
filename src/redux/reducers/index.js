import { combineReducers } from "redux";
import { reducerUser } from "./reducerUser";
import { reducerMedia } from "./reducerMedia";
import { reducerSearch } from "./reducerSearch";
import { reducerSwitch } from "./reducerSwitch";

const rootReducers = combineReducers({
  user: reducerUser,
  media: reducerMedia,
  search: reducerSearch,
  switchSelector: reducerSwitch,
});

export default rootReducers;
