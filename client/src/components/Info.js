import React from 'react';
import $ from "jquery";
import Nav from './Nav';

class Info extends React.Component {
    render(){
        const recipes = this.props.location.state.recipe;
        $(document).ready(function(){
            $('#btn-savemeal').click(function(){
                $('#array_Ingr').val(JSON.stringify(recipes.ingredients));
            });
        });

        return(
            <div>
            <Nav />
            <div className="info text-capitalize">
                <div className="text-center">
                    <h1 className="oleo">{recipes.label}</h1>
                    <h3>Provided by {recipes.source}</h3>
                </div>
                <div className ="info-image-div">
                    <br></br>

                    <img src={recipes.image} className="info-image rounded mx-auto d-block" alt="recipeImage"/>
                </div>
                <div>
                    <ul id = "ingredients">
                        {
                            recipes.ingredients.map(x =>
                                <li className={"rounded mx-auto d-block"}>{x.text}
                                </li>

                            )
                        }
                    </ul>
                </div>
                <form method="post" action="http://localhost:8000/savemeals.php">
                    <button id="btn-savemeal" type= "submit" className="rounded mx-auto d-block btn btn-danger" >Save Meal</button>
                    <input type="hidden" name="meal_name" value={recipes.label}/>
                    <input type="hidden" name="image" value={recipes.image}/>
                    <input type="hidden" name="source" value={recipes.source}/>
                    <input type="hidden" name="sourcelink" value={recipes.url}/>
                    <input type="hidden" id="array_Ingr"name="ingredients" value=""/>
                </form>
            </div>
        </div>
        );

    }

};

export default Info;