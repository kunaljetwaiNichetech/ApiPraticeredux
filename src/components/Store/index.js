import {configureStore} from '@reduxjs/toolkit'
import  { showD } from '../sclice/Show'

const store=configureStore({
    reducer:{
        showing:showD.reducer
    }
})

export {store}