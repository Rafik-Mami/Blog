import { createContext,useReducer,useEffect } from "react";
import reducer from "./reducer";

const init_state=
    {
        user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false

}

export const context=createContext(init_state)

export const ContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,init_state)
    useEffect(() => {
        
        localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user])
    return(
        <context.Provider value={
            {
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch
            }

        }>{children}</context.Provider>
    )
}