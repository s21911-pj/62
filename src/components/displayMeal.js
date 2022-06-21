import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Instructions from "./instructions";
import IngredientsList from "./ingredientsList";
import '../style/displayMeal.scss'

export default function DisplayMeal({data}) {
    const {id} = useParams();
    let navigate = useNavigate();
    var index;

    const meal = data.meals.find((meal, i) => {
        if (meal.idMeal === id) {
            index = i;
            return meal;
        }
    });

    const backToHome = () => {
        let path = "/";
        navigate(path);
    }

    const next = () => {
        let nextItem;
        data.meals.length - 1 === index ? nextItem = 0 : nextItem = index + 1;
        let id = data.meals[nextItem].idMeal;
        let path = "/meal/" + id;
        navigate(path);
    }

    const previous = () => {
        let prevItem;
        console.log(index);
        0 === index ? prevItem = data.meals.length - 1 : prevItem = index - 1;
        let id = data.meals[prevItem].idMeal;
        let path = "/meal/" + id;
        navigate(path);
    }


    const prepareIngredientsList = () => {
        const list = [];
        let strIngredient = "strIngredient";
        let strMeasure = "strMeasure";
        for (let i = 1; i < 21; i++) {
            if (meal[strIngredient + i] !== "" &&
                meal[strMeasure + i]) {
                let ingredient = meal[strMeasure + i] + ' ' + meal[strIngredient + i];
                list.push(ingredient);
            }
        }
        return list;
    }


    if (meal === undefined) {
        return <div>404 BAD REQUEST</div>
    }

    const ingredientsList = prepareIngredientsList();

    return (
        <div className="meal details">
            <h4>{meal.strMeal}</h4>
            <div className="button">
                <button className="button" onClick={() => next(index)}>Next</button>
                <button className="button" onClick={() => previous(index)}>Previous</button>
            </div>
            <div className="row">
                <figure><img className="meal image" src={meal.strMealThumb} alt="img"/></figure>
                <IngredientsList list={ingredientsList}/>
            </div>
            <Instructions steps={meal.strInstructions}/>
            <div className="button">
                <button className="button" onClick={() => next(index)}>Next</button>
                <button className="button" onClick={() => previous(index)}>Previous</button>
                <button className="button" onClick={() => backToHome()}>Back to Home</button>
            </div>
        </div>
    )
}