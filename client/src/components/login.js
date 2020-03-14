import React, {Component} from "react";
import Nav from './Nav';
import {Link} from "react-router-dom";

class Login extends Component{
    render(){

        return(
            <div style = {{height:"100%"}}>
                <Nav/>
                <div id = "login-form">
                    <form method="post" action="http://localhost:8000/login.php">
                        <div>
                            <label for="username">Username: </label>
                            <input id="username"className="form_input" type="text" name="client_username" placeholder="Enter a username" required/>
                        </div>
                        <br></br>
                        <div>
                            <label for="password">Password : </label>
                            <input className="form_input" type="password" name="client_password" placeholder="Enter a password" required/>
                        </div>
                        <br></br>
                        <button id="btn-savemeal" type= "submit" className="form_btn rounded mx-auto d-block btn btn-danger">Login</button>
                    </form>
                    <div id = "signup-link">
                        <h5 className="form_btn rounded mx-auto d-block">Dont have an account <Link to="/signup">sign up now</Link></h5>
                    </div>
                </div>
            </div>
        )
    };
}

export default Login;