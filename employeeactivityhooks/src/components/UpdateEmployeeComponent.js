import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function UpdateEmployeeComponent(){
  
    var [eid,setEid]=useState(0);
    var [ename,setEname]=useState("");
    var [salary,setSalary]=useState(0);
    var [designation,setDesignation]=useState("");
    var [empList,setEmpList]=useState([]);
    useEffect(()=>{
        var dataPromise = axios.get("https://localhost:5001/api/Employee")
        dataPromise.then((response) => {
            setEmpList(response.data);
        })
    })
  
    const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put("https://localhost:5001/api/Employee/"+eid, { eid,
    ename,salary,designation}).then(res =>console.log(res)).catch(err => console.log(err))
    };

    return (
      <div>
        <h5 style={{color:"white"}}>UPDATE EMPLOYEE</h5>
        <form className="row g-3" >
          <div className="col-md-4">
            <label className="form-label" style={{color:"white"}}>Employee ID</label>
            <input className="form-control" style={{width:"250px"}}  value={eid} onChange={(event)=>{setEid(event.target.value)}} />
          </div>

          <div>
            <label className="form-label" style={{color:"white"}}>Employee Name</label>
            <input className="form-control" style={{width:"250px"}} value={ename} onChange={(event)=>{setEname(event.target.value)}}/>
          </div>
       
          <div>
            <label className="form-label" style={{color:"white"}}>Salary</label>
            <input className="form-control" style={{width:"250px"}} value={salary} onChange={(event)=>{setSalary(event.target.value)}} />
          </div>

          <div>
            <label className="form-label" style={{color:"white"}}>Designation</label>
            <input className="form-control" style={{width:"250px"}} value={designation} onChange={(event)=>{setDesignation(event.target.value)}} />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" style={{width:"250px"}} onClick={handleSubmit}>Update Employee</button>
          </div>
        </form>
      </div>
    )
  

}
