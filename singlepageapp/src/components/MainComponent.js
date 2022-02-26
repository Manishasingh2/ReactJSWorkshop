import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AddEmployee from "./AddEmployee"
import EmployeeListComponents from "./EmployeeListComponent"
import UpdateComponent from './UpdateComponent';


export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        <div >
            <Route exact path="/" component={EmployeeListComponents}></Route>
            <Route exact path="/add" component={AddEmployee}></Route>
            <Route exact path="/update/:eid" component={UpdateComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
        </div>
    )
};

function HeaderComponent() {
    return (
        <div>
            <h1 style={{color:"white",backgroundColor:"black"}}>EMPLOYEE DETAILS</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="/add">Add Employee</Link>
                <Link style={{margin: "10px"}} to="/about">About</Link>  
            </nav>
        </div>
    )

}
function FooterComponent() {
    return <h3 style={{color:"white",backgroundColor:"black"}} >This is Footer Component</h3>
}

function AboutComponent() {
    return <h3>This is a an Application for Employee</h3>
}



