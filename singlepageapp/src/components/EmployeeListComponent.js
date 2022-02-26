import Axios from "axios";
import React from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent"

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
            {this.state.employeeList.map((employee)=>{
                return <EmployeeDetailComponent key={employee.Eid} {...employee} deleteEmp={this.deleteEmp} updateEmployee={this.updateEmployee}></EmployeeDetailComponent>
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
    updateEmployee = (event) => {
        var employeeId = event.target.id;
        this.props.history.push("/update/" + employeeId);
    }
    componentDidMount() {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee")
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })  
    }
   
}
