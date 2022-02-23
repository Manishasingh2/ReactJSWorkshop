import {  useState } from "react"
import Data from "./Data";
import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
export default function FilterComponent()
{ 
  const [searchname,setName]=useState("");
  return( 
    <>  
    <div className="input-group mb-3" style={{margin:"50px"}}>
      <span className="input-group-text" id="basic-addon3">FILTER DATA:</span>
      <input type="text" className="form-control"  name="name" onChange={(event)=>{setName(event.target.value)}} /></div><br></br>
    <div>
    { Data.filter((val)=>{
        if(searchname === "")
        { return val
        }
        else if(val.userName.toLowerCase().includes(searchname.toLowerCase()))
        {
          return <EmployeeDetailsComponent {...val}></EmployeeDetailsComponent>
        }
        }).map(function(val){
            return(
                  <EmployeeDetailsComponent {...val}></EmployeeDetailsComponent>
                )
          })
    }
    </div>
  </>
  )   
}