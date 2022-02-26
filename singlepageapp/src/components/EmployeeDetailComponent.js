export default function EmployeeDetailComponent(props)
{
  var styleObject={
    containerStyle:{
      width:"300px",
      margin: "50px" ,
      display:"inline-block",
      border: "1px solid red"
    },
    headerStyling:{
      color:"green"  
    },
    buttonStyle:{
      color:"white",
      margin:"10px",
      width:"250px"
    },
    headerstyle:{
      color:"purple", 
    }
  }
  return( 
    <div className="card" style={styleObject.containerStyle } >
      <img src="https://smallbusinessify.com/wp-content/uploads/2019/09/Managing-remote-team-mistakes-768x563.jpg" className="card-img-top" alt={props.ename}/>
      <div className="card-body">
        <h5 style={styleObject.headerStyling } className="card-title">Employee Name:{props.ename}</h5>
        <h6 className="card-text" style={styleObject.headerstyle} >Employee ID:{props.eid} </h6>
        <h6 className="card-text" style={styleObject.headerstyle} >Salary:{props.salary} </h6>
        <h6 className="card-text" style={styleObject.headerstyle} >Designation:{props.designation} </h6>
        <div>
          <input type="button" id={props.eid} style={styleObject.buttonStyle } className="btn btn-primary"  onClick={props.deleteEmp} value="Delete"/>
        </div>
        <div>
          <input type="button" id={props.eid} style={styleObject.buttonStyle } className="btn btn-primary"  onClick={props.updateEmployee} value="Update"/>
        </div>
      </div>
    </div>
  )
}


