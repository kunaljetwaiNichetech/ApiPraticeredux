import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showD } from '../sclice/Show'

export default function TiyingApi() {
    const dispatch=useDispatch()
    
    let [comingData,SetcomingData]=useState([])
        useEffect(()=>{
            axios
              .get("https://jsonplaceholder.typicode.com/photos")
              .then((res) => SetcomingData(res.data));
        },[])
        const handelclick =(()=>{
            console.log("data is sent")
            dispatch(showD.actions.addData(comingData))
        })
  return (
    <div>TiyingApi
        <br/>

        <button onClick={handelclick} >
            set the data
        </button>
    </div>
  )
}
