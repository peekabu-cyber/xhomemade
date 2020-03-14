// MAIN

import React, {Component} from "react";
import Nav from "./components/Nav";
import "./App.css";
import Recipes from "./components/Main/Recipes";
import Form from "./components/Main/Form";
// const express = require('express');
// const  app = express();
//
// app.use((req , res , next ) => {
//
//   res.status(200).json({
//     message:'its working'
//   });
//
// });
//
// module.exports = app;

// const APP_ID = "ea1a3b30";
// const APP_Key = "cbf9370e3b5e70a8e3fb311dec40a811";
const APP_ID = "5ec3e753";
const APP_Key = "2605f4903c4011803cb9af51507c7097";
export var count = 0;
let from = 0;
let to = 12;


class App extends Component {

  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_Key}&from=${from}&to=${to}`;
    let h = new Headers({
          'Accept': 'application/json'
        }
    );

    let req = new Request(url, {
      mode: 'cors',
      method: 'GET',
      headers: h
    });

    const response = await fetch(req);
    const data = await response.json();
    this.setState({ recipes: data.hits});
    count = data.count;
    console.log(data);
  }

  render(){
    return (
        <div className="App">
          <Nav/>
          <Form Submit ={this.getRecipe}/>
          <Recipes recipes = {this.state.recipes} />
        </div>
    );
  }

}

export default App;