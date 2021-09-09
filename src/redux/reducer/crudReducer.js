import { types } from "../types/types";
const initialState =[
    {
        id: 1234,
        desc: "Aprender Python",
        done: false
    },
    {
        id: 12346,
        desc: "Aprender Vue",
        done: false
    }
]

export const crudReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.createItem:
            return [...state, action.payload];
        
        case types.deleteItem:
            return state.filter( todo => todo.id !== action.payload);
        
        case types.updateItem:
            console.log(action.payload)
            return state.map(todo =>
                (todo.id === action.payload.id)
                    ? {...todo, done: !todo.done, desc: action.payload.desc}
                    : todo
            );
        case types.readItem:
            return state;

        default:
            return state;
    }
    
}