import {useNavigate} from "react-router-dom";
import '../style/displayMeals.scss'

export default function DisplayMeals({meal}) {

    let navigate = useNavigate();

    const showDetails = (id) => {
        let path = "/meal/" + id;
        navigate(path);
    }

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="meal">
                <h4>{meal.strMeal}</h4>
                <figure><img src={meal.strMealThumb} alt="img"/></figure>
                <button className="button" onClick={()=> showDetails(meal.idMeal)}>Details</button>
            </div>
        </div>
    );
}