import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { crudCreate } from '../redux/actions/crud';

export const Add = () => {

    const dispatch = useDispatch();

    const [ {description}, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e)=>{
        e.preventDefault();
        if( description.trim().length <= 1){
            return;
        }
        const newTodo ={
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        // handleAdd(newTodo);

        dispatch(crudCreate(newTodo));
        reset();
    }

    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Agregar tarea..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <div className="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="btn btn-outline-primary mt-1" 
                    >
                        Agregar Tarea
                    </button>
                </div>
            </form>                  
        </>
    )
}
