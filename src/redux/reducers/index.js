import { combineReducers } from "redux";
import { reducerUser } from "./reducerUser";
import { reducerPhoto } from "./reducerPhoto";

const rootReducers = combineReducers({
  user: reducerUser,
  photo: reducerPhoto,
});

export default rootReducers;
