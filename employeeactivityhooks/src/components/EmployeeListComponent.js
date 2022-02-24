import Axios from "axios";
import { useState,useEffect } from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent"

export default function EmployeeListComponent()
{
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
        Axios.put("http://localhost:5000/api/Employee/"+event.target.id).then(res => {
            var dataPromise = Axios.get("https://localhost:5001/api/Employee")
            dataPromise.then((response) => {
                setEmpList(response.data);
            })
        });            
    };
    return(
        <div>
            <h1 style={{color:"white"}}>ALL EMPLOYEES</h1>
            {empList.map((employee)=>{
                return <EmployeeDetailComponent key={employee.eid} {...employee} deleteEmp={deleteEmp} updateEmp={updateEmp}></EmployeeDetailComponent>
            })}
        </div>
    )    
       
       
}
   

