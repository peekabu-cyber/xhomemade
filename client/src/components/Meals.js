import React from 'react';
import Nav from "./Nav";
import $ from "jquery";

class Meals extends React.Component {
    render(){
    $('#recipes').load('http://localhost:8000/mymeals.php');

        return(
            <div>
                <Nav/>
                <div id="addOwnMeal"></div>
                <div id="recipes" style={{width:"100%"}}></div>
            </div>
        )
    }
};

export default Meals;