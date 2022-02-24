import Axios from "axios";
import React from "react";


export default class PriceComponent extends React.Component
{
    constructor(){
        super();
        this.state={
            priceList:{}
        }
    }
    render() {  
        return (
            <div className="card" style={{width:"200px",margin: "50px",display:"inline-block", border: "1px solid blue", padding: "5px" }} >
                <img src="https://tse3.mm.bing.net/th/id/OIP.mDfOQNstyTiLl0pvPppemgHaEX?pid=ImgDet&rs=1" className="card-img-top" style={{width:"200px" }}></img>
                <div className="card-body">
                <h5 style={{color:"red"} } className="card-title">{this.state.priceList.HN}</h5>
                <h4 className="card-text" style={{color:"green"}}>Current Price:{this.state.priceList.pricecurrent} </h4>
                <p className="card-text" style={{color:"blue"}}>Current Price:{this.state.priceList.company} </p>
                <p className="card-text" style={{color:"blue"}}>Current Price:{this.state.priceList.pricepercentchange} </p>
                </div>
            </div>
        )
    }
    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.apiUrl).then((response) => {
                this.setState({ priceList: response.data.data })  
            });
        }, 1000);   
    }
   
}

