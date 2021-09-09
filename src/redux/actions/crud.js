import { types } from "../types/types";

export const crudCreate = (newItem)=>{
    
    return (dispatch)=>{

        
        dispatch(addItem(newItem))
    }
}

const addItem = (newItem)=>({
    type: types.createItem,
    payload: newItem
})



export const crudDelete = (newItem)=>{
    
    return (dispatch)=>{
        dispatch(deleteItem(newItem))
    }
}
const deleteItem = (newItem)=>({
    type: types.deleteItem,
    payload: newItem
})



export const crudUpdate = (id, desc)=>{
    
    return (dispatch)=>{
        dispatch(updateItem(id, desc))
    }
}

const updateItem = (id, desc)=>({
    type: types.updateItem,
    payload: {
        id,
        desc
    }
})