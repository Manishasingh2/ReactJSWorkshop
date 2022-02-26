import Axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
export default function Stockexchange()
{   debugger;
    var [price,setPrice]=useState(0);
    useEffect(()=>{
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            debugger;
        setPrice(response.data.data);
        })
    },[])
    return(
        <div>
            <h1>Current Price:{price.pricecurrent}</h1>   
        </div>
    )   
}
