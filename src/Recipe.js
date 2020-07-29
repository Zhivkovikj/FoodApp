import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="card">
            <div className="card-header">
                <h1 className="proba">{title}</h1>
            </div>
            <div className="card-body">
                <ol className="proba">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className="proba">{calories}</p>
            </div>
            <div className="card-footer">
                <img className="slika" src={image} alt =""/>
            </div>
        </div>
    );
}
export default Recipe;