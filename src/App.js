import React, {useEffect, useState} from 'react';
import {Route, Routes, BrowserRouter, Navigate, NavLink} from 'react-router-dom'
import DisplayData from "./components/displayData";
import DisplayMeal from "./components/displayMeal";



function App() {
  const [fetchedData, setFetchedData] = useState({'meals': []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    let i;
    const newData = {'meals': []};
    for (i = 0; i < 21; i++) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => res.json())
          .then(data => {
            newData.meals.push(data.meals[0]);
          })
          .catch(setError);
    }
    setTimeout(function () {
      if (newData.meals.length > 1) {
        setFetchedData(newData);
        setLoading(false);
      }
    }, 2000)

  }
  if (loading) {
    return (
        <p>loading...</p>);
  }
  if (fetchedData.length < 1) {
    return (<div>empty list</div>);
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/meal/:id" exact element={<DisplayMeal data={fetchedData}/>}/>
          <Route path="*" exact element={<DisplayData data={fetchedData}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
