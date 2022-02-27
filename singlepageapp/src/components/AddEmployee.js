import React from "react";
import axios from "axios";
export default class AddEmployee extends React.Component {
  state = {
    eid: 0,
    ename: "",
    salary: 0,
    designation: ""
  };
  handleIdChange = (event) => {
    this.setState({
      eid: event.target.value
    });
  };
  handleNameChange = (event) => {
    this.setState({
      ename: event.target.value
    });
  };
  handleSalaryChange = (event) => {
    this.setState({
      salary: event.target.value

    });
  };
  handleDesignationChange = (event) => {
    this.setState({
      designation: event.target.value

    });
    
  };
  handleSubmit = event => {
    event.preventDefault();
    axios.post("https://localhost:5001/api/Employee/postemp", {eid:this.state.eid,ename:this.state.ename,salary:this.state.salary,designation:this.state.designation})
      .then(res =>
        console.log(res.data))
      .catch(err => console.log(err))
    alert("New Employee Added!!");
    this.props.history.push('/');
  };
  render() {
    return (
      <>
        <h4 style={{color:"blue"}}>Add A New EMPLOYEE</h4>
        <form className="row g-3" >
          <div className="col-md-2">
            <label className="form-label">Employee ID</label>
            <input className="form-control" style={{width:"250px"}} value={this.state.eid} onChange={this.handleIdChange} />
          </div>

          <div>
            <label className="form-label">Employee Name</label>
            <input className="form-control" style={{width:"250px"}} value={this.state.ename} onChange={this.handleNameChange} />
          </div>
          <div>
            <label className="form-label">Salary</label>
            <input className="form-control" style={{width:"250px"}} value={this.state.salary} onChange={this.handleSalaryChange} />
          </div>

          <div >
            <label className="form-label">Designation</label>
            <input className="form-control" style={{width:"250px"}} value={this.state.designation} onChange={this.handleDesignationChange} />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" style={{width:"250px"}} onClick={this.handleSubmit}>Add Employee</button>
          </div>
        </form>
      </>
    )
  }

}
