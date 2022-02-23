export default function EmployeeDetailsComponent(props)
{
 
 
  return(
      <>
    <form className="row g-3">
    <div className="col-md-2">
      <label className="form-label">Employee ID</label>
      <input type="text" className="form-control" id="id1" />
    </div>
    
    <div className="col-12">
      <label  className="form-label">Employee Name</label>
      <input type="text" className="form-control" id="inputAddress" />
    </div>
    <div className="col-md-6">
      <label className="form-label">Salary</label>
      <input type="text" className="form-control" id="inputAddress2" />
    </div>
    
    <div className="col-md-6">
      <label className="form-label">Designation</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    
    <div className="col-12">
      <button type="submit"  className="btn btn-primary" >Add Employee</button>
    </div>
  </form>
  </>
  )
  
}