const loadMeals = () => {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then ( data => displayMeals(data.meals))
}

loadMeals();

 const displayMeals =(meals)=>{

     const mealContainer = document.getElementById('meal-container');
     meals.forEach(meal => {
         console.log(meal)
         const mealdiv = document.createElement('div');
            mealdiv.classList.add('col');
            mealdiv.innerHTML=`
            
                      <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0,220)}</p>
                        </div>
                    </div>
            
            
            
            
            `;
            mealContainer.appendChild(mealdiv);
         



     });
 }