import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [creatername, setName] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {creatername, description})
        .then(res =>{
            navigate('/');
        }).catch (err => console.log(err))
    }
    return ( 
        <div className="appcreate">
        <h1 className='company-name'>Welcome to Experts Cloud</h1> 
        <div className="create-form">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label for="usr"><strong>Task Creater:</strong></label>
        <input required type="text" class="form-control" id="usr"
        onChange={e=> setName(e.target.value)}/>
        </div>
        <div className="form-group">
        <label for="td"><strong>Task Description:</strong></label>
        <textarea class="form-control" rows="5" id="td" required
        onChange={e=>setDescription(e.target.value)}/>
        </div>
        <button id="createtask" type="submit" className="btn btn-primary">Create Task</button>
        </form>
        </div>
        </div>
     );
}
 
export default Create;