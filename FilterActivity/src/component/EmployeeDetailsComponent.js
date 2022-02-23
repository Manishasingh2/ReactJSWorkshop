export default function EmployeeDetailsComponent(props)
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
<img src={props.avatar} className="card-img-top" alt={props.userName}/>
<div className="card-body">
<h5 style={styleObject.headerStyling } className="card-title">{props.userName}</h5>

<p className="card-text">Employee ID:{props.id}</p>
<p className="card-text">Salary:{props.Salary} </p>
   <p className="card-text">Designation:{props.Designation} </p>
</div>
</div>
)
}