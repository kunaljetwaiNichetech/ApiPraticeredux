import { createSlice} from "@reduxjs/toolkit";

const showD=createSlice({
    name:"ShowApi",
    initialState:{
        data:[]
    },
    reducers:{
        addData(state,action){
            state.data.push(action.payload)
        }
    }
})

export {showD}
