import Axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            eid: 0,
            ename:"",
            salary: 0,
            designation: ""
        }
    }
    onChangeEid = (event) => {
        debugger;
        this.setState({
          eid: event.target.value
        });
    };
      
    onChangeEname = (event) => {
        this.setState({
          ename: event.target.value
        });
        console.log(this.state.eid)
    };
    onChangeSalary = (event) => {
        this.setState({
          salary: event.target.value
    
        });
    };
    onChangeDestination = (event) => {
        this.setState({
        designation: event.target.value
    
    });
    };
    updateEmployee = (e) => {
        e.preventDefault();
        Axios.put("https://localhost:5001/api/Employee/"+ this.state.eid, { 
        eid : this.state.eid,
        ename:this.state.ename,
        salary : this.state.salary,
        designation : this.state.designation}).then(res =>console.log(res)).catch(err => console.log(err))
    }

    componentDidMount() {
        Axios.get("https://localhost:5001/api/Employee/" + this.props.match.params.eid).then((response) => {
            this.setState({
                eid : response.data.eid,
                ename: response.data.ename,
                salary : response.data.salary,
                designation : response.data.designation
            })
        })
    }

    render() {
        return (
            <div>
                <div  style={{color:"pink"}}>
                    <h5 >UPDATE EMPLOYEE</h5>
                    <form className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label" style={{color:"white"}}>Employee ID</label>
                        <input className="form-control" style={{width:"250px"}}  value={this.state.eid}  onChange={this.onChangeEid}/>
                    </div>

                    <div>
                        <label className="form-label" style={{color:"white"}}>Employee Name</label>
                        <input className="form-control" style={{width:"250px"}} value={this.state.ename} onChange={this.onChangeEname}/>
                    </div>
                
                    <div>
                        <label className="form-label" style={{color:"white"}}>Salary</label>
                        <input className="form-control" style={{width:"250px"}} value={this.state.salary}  onChange={this.onChangeSalary}/>
                    </div>

                    <div>
                        <label className="form-label" style={{color:"white"}}>Designation</label>
                        <input className="form-control" style={{width:"250px"}} value={this.state.designation} onChange={this.onChangeDestination}/>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" style={{width:"250px"}} onClick={this.updateEmployee}>Update Employee</button>
                    </div>
                    </form>
                </div>
            </div>
     
        )
    }

    
}