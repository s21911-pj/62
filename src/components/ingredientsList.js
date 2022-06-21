import React from "react";

export default function IngredientsList({list}) {
    return (
        <div>
            <h3>Ingredients list :</h3>
            <div className="ingredients">
                {list.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                ))}
            </div>
        </div>
    );
}
