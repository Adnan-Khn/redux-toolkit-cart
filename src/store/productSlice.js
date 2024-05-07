/* eslint-disable no-unused-vars */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
}

const productSlice  = createSlice({
    name:'product',
    initialState,
    reducers:{
        fetchProducts(state,actions){
            state.data = actions.payload
        }
    } 
})

export default productSlice.reducer

export const {fetchProducts} = productSlice.actions

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = data.json()
        dispatch(fetchProducts(result))
        
    }
}