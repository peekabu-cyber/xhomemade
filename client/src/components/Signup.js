import React, {Component} from "react";
import Nav from './Nav';

class Signup extends Component{
    render(){
        return(
            <div>
                <Nav/>

                <div id = "signup-form" >
                    <form method="post" action="http://localhost:8000/signup.php">
                        <div>
                            <label for="user_name">Username: </label>
                            <input id="user_name" className="form_input" type="text" name="client_username" placeholder="paul123" required/>
                        </div>
                        <div>
                            <label for="user_password">Password: </label>
                            <input id="user_password" className="form_input" type="password" name="client_password" placeholder= "*****"required/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input className ="form_input" id="email" type="email" name="client_email" placeholder="you@domain.com" required/>
                        </div>
                        <button id="btn-savemeal" type= "submit" className="form_btn rounded mx-auto d-block btn btn-danger">Signup</button>
                    </form>
                </div>
            </div>
        )
    };
}

export default Signup;