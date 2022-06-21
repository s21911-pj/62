import DisplayMeals from "./displayMeals";

export default function DisplayData({data}) {
    return (
        <div>
            <div className="meals section ">
                <h1>Meal Data Base</h1>
                <div className="container">
                    <div className="row">
                        {data.meals.map((meal, i) => (
                            <DisplayMeals key={i} meal={meal}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}