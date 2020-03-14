import React, {Component} from "react";
import Nav from './Nav';
import {Link} from "react-router-dom";

class Signout extends Component{
    render(){

        return(
            <div style = {{height:"100%"}}>
                <Nav/>
                <div id = "login-form">
                    <form method="post" action="http://localhost:8000/signout.php">
                        <button id="" type= "submit" className="form_btn rounded mx-auto d-block btn btn-danger">Logout</button>
                    </form>
                </div>
            </div>
        )
    };
}

export default Signout;