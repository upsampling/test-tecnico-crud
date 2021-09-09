import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { crudUpdate } from '../redux/actions/crud';

export const Edit = ({id, desc}) => {
    const dispatch = useDispatch();
    const [ {description}, handleInputChange, reset] = useForm({
        description: desc
    });
    
            // console.log(id, desc)
    const handleSubmit = (e)=>{
        e.preventDefault();
        // if( description.trim().length <= 1){
        //     return;
        // }
        dispatch(crudUpdate(id, description));
        reset();
    }
    return (
        <>
            <form onSubmit={ handleSubmit } className="description">
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Editar tarea..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <div className="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="btn btn-success" 
                    >
                        Editar
                    </button>
                </div>
            </form>                  
        </>
    )
}
