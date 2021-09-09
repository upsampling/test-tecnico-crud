import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crudDelete, crudUpdate } from '../redux/actions/crud';
import { Edit } from './Edit';


export const List = () => {

    const crud = useSelector(state => state.crud);
    
    const dispatch = useDispatch();

    const handleDelete = (elementId)=>{
        dispatch(crudDelete(elementId));
    }

    const handleEdit = (id, desc)=>{
        dispatch(crudUpdate(id, desc));
    }

    return (
        <>
            <h4>Listas de tareas</h4>
            <hr/>
            <ul className="list-group list-group-flush">
            {
                crud.map((element, index)=>(
                    <li 
                        key={element.id}
                        className="list-group-item " 
                    >   
                        <div className="marco rounded animate__animated animate__backInRight">
                            {
                                (!element.done)
                                    ?
                                    <>
                                        <p 
                                            className={`description ${ element.done && 'complete'}`}
                                            onClick={()=>handleEdit(element.id, element.desc)}
                                        > 
                                            {index +1}. {element.desc} 
                                        </p>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={()=>handleDelete(element.id)}
                                        >
                                            eliminar
                                        </button>
                                    </>
                                    :
                                    <Edit id={element.id} desc={element.desc} />
                            }
                        </div>
                    </li>
                ))
            }
            </ul>
        </>
    )
}
