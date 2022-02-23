export default function PriceDetailComponent(props)
{
    var styleObject={
        containerStyle:{
          width:"300px",
          margin: "50px" ,
          display:"inline-block"
          
        },
      
        pStyle:{
         color:"red"
        }
     
      }
       return(
        <div className="card" style={styleObject.containerStyle } >
           <img src="https://s3.tradingview.com/6/6yuvok61_mid.png" className="card-img-top"/>
        <div className="card-body">
        <h5>{props.detail2 && <p className="card-text">code:{props.detail2.code} </p>}</h5>
        <h5>{props.detail && <p className="card-text">HN:{props.detail.HN} </p>}</h5>
        {props.detail && <p className="card-text" style={styleObject.pStyle}>AVGP:{props.detail.AVGP} </p>}
        {props.detail && <p className="card-text" style={styleObject.pStyle}>SC_FULLNM:{props.detail.SC_FULLNM} </p>}
        
        </div>
        </div>
     
       )
       
}