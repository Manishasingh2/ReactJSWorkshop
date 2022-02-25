import Axios from "axios";
import React from "react";
import EmployeeDetailComponent from "../Components/EmployeeDetailComponent"

export default class EmployeeListComponent extends React.Component
{
    constructor(){
        super();
        this.state={
            employeeList:[]
        }
    }
    render(){
        return(
        <div>
            <h1>Employee details</h1>
            {this.state.employeeList.map((employee)=>{
                return <EmployeeDetailComponent key={employee.Eid} {...employee} deleteEmp={this.deleteEmp}></EmployeeDetailComponent>
            })}
        </div>
        )
    }
    deleteEmp = (event) => {
        Axios.delete("http://localhost:5000/api/Employee/"+event.target.id).then(res => {
            var dataPromise = Axios.get("https://localhost:5001/api/Employee")
            dataPromise.then((response) => {
                this.setState({
                    employeeList: response.data
                })
            })
        });
    };
    componentDidMount() {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee")
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })   
    }   
}
