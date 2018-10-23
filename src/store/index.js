import { createStore } from "redux"
import rootReducer from "../reducers/index"
//import { dispatch } from "rxjs/internal/observable/range";

const store = createStore(rootReducer)

export default store