import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update= () => {
    const [creatername, setName] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {creatername, description})
        .then(res =>{
            navigate('/');
        }).catch (err => console.log(err))
    }
    return ( 
        <div className="appcreate">
        <h1 className='company-name'>Update User</h1> 
        <div className="create-form">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label for="usr"><strong>Task Creater:</strong></label>
        <input required type="text" class="form-control" id="usr"
        onChange={e=> setName(e.target.value)}>
        </input>
        </div>
        <div className="form-group">
        <label for="td"><strong>Task Description:</strong></label>
        <textarea required className="form-control" rows="5" id="td"
        onChange={e=>setDescription(e.target.value)}>          
        </textarea>
        </div>
        <button id="createtask" type="submit" class="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
     );
}
 
export default Update;