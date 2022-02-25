export default function EmployeeDetailComponent(props)
{
 var styleObject={
    containerStyle:{
      width:"300px",
      margin: "50px" ,
      display:"inline-block"
   },
   headerStyling:{
      color:"aqua"
   },
   buttonStyle:{
      color:"red"
   }

 }
  return(
  <div className="card" style={styleObject.containerStyle } >
    <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.ename}/>
    <div className="card-body">
      <h5 style={styleObject.headerStyling } className="card-title">{props.ename}</h5>
      <p className="card-text">Employee ID:{props.eid} </p>
      <p className="card-text">Salary:{props.salary} </p>
      <p className="card-text">Designation:{props.designation} </p>
    <input type="button" id={props.eid} style={styleObject.buttonStyle } className="btn btn-primary"  onClick={props.deleteEmp} value="Delete"/>
    </div>
  </div>
  )
  
}