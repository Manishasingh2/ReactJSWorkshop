import Axios from "axios";
import React from "react";
import PriceDetailComponent from "../Component/PriceDetailComponent";

export default class PriceComponent extends React.Component
{
    constructor(){
        super();
        this.state={
            'priceList':[]
        }
    }
    render(){
        return(
            <div>
        <div>
        
   <PriceDetailComponent detail = {this.state.priceList.data} detail2={ this.state.priceList}></PriceDetailComponent>
        </div>
        </div>
        )
    }
   
      
    componentDidMount() {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            this.setState({
                priceList : response.data
               
            })
        })
       
        
    }
   
}
