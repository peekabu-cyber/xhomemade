import React, {Component} from "react";
import {Link} from 'react-router-dom';
import $ from "jquery";

class Nav extends Component{
    render(){
            $.ajax({
                url: 'http://localhost:8000/iflogin.php',
            }).done(function(data){
                if(data == "true"){
                    $("#login").hide();
                } else {
                    $("#sign-out").hide();
                }
            });

        return(

            <nav id="onclick" className = "navbar sticky-top App-header">
                <header><Link to={{pathname: "/"}}>
                    <h1 className="App-title">Homemade</h1>
                </Link>
                </header>
                <div id="navbarText">
                    <ul className="nav justify-content-center mr-auto">
                        <li className="nav-item"><Link className="nav-link" to ={{pathname: "/mymeals"}} >Meals</Link></li>
                        <li className="nav-item"><Link className="nav-link" to ={{pathname: "/contact"}}>Contact</Link></li>
                        <li id = "login" className="nav-item"><Link className="nav-link" to ={{pathname: "/login"}}>Login</Link></li>
                        <li id = "sign-out" className="nav-item" ><Link className="nav-link" to ={{pathname: "/signout"}}>Sign Out</Link></li>
                    </ul>
                </div>
            </nav>
        )
    };
}

export default Nav;