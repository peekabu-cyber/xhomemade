import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = props => (

    <div className = "row">
        {props.recipes.map(hit => {
            return (
                <div className = "col-10 mx auto col-md-6 col-lg-4 my-4" key = {hit.recipe.url}>
                    <div className = "card" key = {hit.recipe.url}>
                        <img src ={hit.recipe.image} alt = {hit.recipe.label} className = "img-card-top recipe-img"/>
                        <div className="card-body text-capitalize">
                            <h6> {hit.recipe.label.length < 43 ? hit.recipe.label : `${hit.recipe.label.substring(0,39)} ...`}</h6>
                        </div>
                        <h6 className="text-warning">provided by <a href={hit.recipe.url} className="source-link" target ="_blank" rel="noopener noreferrer" >{hit.recipe.source}</a></h6>
                        <div className="card-footer">
                            <button type = "button" className= "btn btn-primary"><Link to = {{pathname: `/recipe/${hit.recipe.label}`, state: {recipe: hit.recipe}}} className = "text-white">Info</Link></button>
                        </div>

                    </div>
                </div>
            );
        }) }
    </div>
);

export default Recipes;