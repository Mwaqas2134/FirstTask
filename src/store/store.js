
import { createStore } from "redux";
import todoReducer from "../reducers/todoreducer";
 import { Provider } from "react-redux";


const store=createStore(todoReducer);
export function ReduxProvider({children}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}