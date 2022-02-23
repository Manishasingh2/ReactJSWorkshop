import React from "react";
import axios from "axios";
export default class AddEmployee extends React.Component {
  state = {
    eid: 0,
    ename: "",
    salary: 0,
    designation: ""
  };
  handleChange = (event) => {

    this.setState({
      eid: event.target.value
    });
  };
  handleChange2 = (event) => {
    this.setState({
      ename: event.target.value
    });
  };
  handleChange3 = (event) => {
    this.setState({
      salary: event.target.value

    });
  };
  handleChange4 = (event) => {

    this.setState({
      designation: event.target.value

    });
    
  };
  handleSubmit = event => {
    event.preventDefault();
    const user = {
        eid: this.state.eid,
        ename: this.state.ename,
        salary: this.state.salary,
        designation: this.state.designation
    };
   axios.post("https://localhost:5001/api/Employee", {user})
      .then(res =>
        console.log(res.data))
      .catch(err => console.log(err))

  };
  render() {
    return (
      <>
        <form className="row g-3" onSubmit={this.handleSubmit} >
          <div className="col-md-2">
            <label className="form-label">Employee ID</label>
            <input className="form-control" value={this.state.eid} onChange={this.handleChange} />
          </div>

          <div className="col-12">
            <label className="form-label">Employee Name</label>
            <input className="form-control" value={this.state.ename} onChange={this.handleChange2} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Salary</label>
            <input className="form-control" value={this.state.salary} onChange={this.handleChange3} />
          </div>

          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input className="form-control" value={this.state.designation} onChange={this.handleChange4} />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" >Add Employee</button>
          </div>
        </form>
      </>
    )
  }

}
