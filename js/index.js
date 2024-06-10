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
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                        </div>
                    </div>
            
            
            
            
            `;
            mealContainer.appendChild(mealdiv);
         



     });
 }