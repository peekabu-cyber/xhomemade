import React from 'react';

const Form = props => (
    <form  onSubmit = {props.Submit}>
        <input className="form_input" type = "text" name="recipeName" placeholder="Enter an ingredient"/>
        <button className="btn btn-outline-secondary">Search</button>
    </form>
);

export default Form;