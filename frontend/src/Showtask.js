import React, {useEffect, useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

function Showdata(){
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  })
  const navigate = useNavigate();
  const handleDelete = (id) =>{
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res=>navigate('/'))
    .catch(err=>console.log(err));
  }
  // const numbers = Array.from({ length: data.length }, (_, index) => index);
  return (
    <div className="App">
      <h1 className='company-name'>Welcome to Experts Cloud</h1> 
    <div className="table-responsive">
      <Link to='/create' className="btn btn-primary a-btn-slide-text">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    <span><strong>Add</strong></span>        
                </Link>
                <strong>Total Objects in Database ::{data.length}</strong>    
    <table className="table m-0">
        <thead>
        <tr>
        <th scope="col">ID</th>
         <th scope="col">Task Creater</th>
         <th scope="col">Task Name</th>
       </tr>
        </thead>
        <tbody>
        {data.map((d,i)=>(
            <tr>
                <th scope="row">{d.id}</th>
                <td>{d.taskassigner}</td>
                <td>{d.taskname}</td>
                <Link to={`/update/${d.id}`} className="btn btn-primary a-btn-slide-text">
                    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    <span><strong>Edit</strong></span>            
                </Link>
                <button onClick={e=>handleDelete(d.id)} className="btn btn-primary a-btn-slide-text">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    <span><strong>Delete</strong></span>            
                </button>
            </tr>
               ))}
        </tbody>
    </table>

    </div>
    </div>
)}
 
export default Showdata;