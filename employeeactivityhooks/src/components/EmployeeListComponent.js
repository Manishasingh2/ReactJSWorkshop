import Axios from "axios";
import { useState,useEffect } from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent"


export default function EmployeeListComponent()
{ var [eid,setEid]=useState();
  var [ename,setEname]=useState("");
  var [salary,setSalary]=useState();
  var [designation,setDesignation]=useState("");
  var [empList,setEmpList]=useState([]);
    useEffect(()=>{
        var dataPromise = Axios.get("https://localhost:5001/api/Employee")
        dataPromise.then((response) => {
            setEmpList(response.data);
        })
    })
  
    function deleteEmp(event){
        Axios.delete("http://localhost:5000/api/Employee/"+event.target.id).then(res => {
            var dataPromise = Axios.get("https://localhost:5001/api/Employee")
            dataPromise.then((response) => {
                setEmpList(response.data);
            })
        });            
    };
  
  function updateEmp(event){
        var dataPromise = Axios.get("https://localhost:5001/api/Employee/"+event.target.id)
        dataPromise.then((response) => {
        setEid(response.data.eid);
        setEname(response.data.ename);
        setSalary(response.data.salary);
        setDesignation(response.data.designation);})
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    Axios.put("https://localhost:5001/api/Employee/"+eid, { eid,
    ename,salary,designation}).then(res =>console.log(res)).catch(err => console.log(err))
    };

    return(
      <div >
        <div>
          <h1 style={{color:"white"}}>ALL EMPLOYEES</h1>
          {empList.map((employee)=>{
                return <EmployeeDetailComponent key={employee.eid} {...employee} deleteEmp={deleteEmp} updateEmp={updateEmp}></EmployeeDetailComponent>
          })}
        </div>
        <div  style={{color:"pink"}}>
        <h5 >UPDATE EMPLOYEE</h5>
        <form className="row g-3">
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
      </div>
    )         
}
   

