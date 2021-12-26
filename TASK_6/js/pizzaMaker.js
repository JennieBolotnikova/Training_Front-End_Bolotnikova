var base;
var ingredients = [];
var sauses = [];
var totalCoast;
var totalCalories;
var finalyCoast;
var pizzaArray = [];
/**
 * a function that helps the user to collect the desired pizza
 */
window.onclick = function onclickFunction() {
    //Bases
    if(document.querySelector('#thin').checked == true)
    {
        base = new ThinBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        //console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#thick').checked == true)
    {
        base = new ThickBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        //console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#puff').checked == true)
    {
        base = new PuffBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        //console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#italian').checked == true)
    {
        base = new ItalianBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        //console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#calzone').checked == true)
    {
        base = new CalzoneBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        //console.log(base.name, totalCalories, totalCoast)
    }
    
    //Ingredients
    if(document.querySelector('#mozzarella').checked)
    {
        let ingredient = new Mozzarella();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#parmesan').checked)
    {
        let ingredient = new Parmesan();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#peperoni').checked)
    {
        let ingredient = new Peperoni();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#chicken').checked)
    {
        let ingredient = new Chicken();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#bacon').checked)
    {
        let ingredient = new Bacon();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#champignon').checked)
    {
        let ingredient = new Champignon();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#ham').checked)
    {
        let ingredient = new Ham();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#tomatoes').checked)
    {
        let ingredient = new Tomatoes();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#pineapple').checked)
    {
        let ingredient = new Pineapple();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#onion').checked)
    {
        let ingredient = new Onion();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        //console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    //Sauses
    if(document.querySelector('#tomatoSauce').checked)
    {
        let sauce = new TomatoSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
       //console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#bbq').checked)
    {
        let sauce = new BBQ();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        //console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#cheeseSauce').checked)
    {
        let sauce = new CheeseSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        //console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#sweetAndSourSauce').checked)
    {
        let sauce = new SweetAndSourSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
    //console.log(sauce.name, sauce.calories, sauce.cost );
    }
    // Price calculation including taxes (rounding to the nearest hundredth)
    if(totalCoast <= 10){
        finalyCoast = Math.round(totalCoast * 100 * 1.2) / 100;
    }
    else if( 10 < totalCoast <= 18){
        finalyCoast = Math.round(totalCoast * 100 * 1.15) / 100;
    }
    else if(totalCoast > 18){
        finalyCoast = Math.round(totalCoast * 100 * 1.1) / 100;
    } 
    // data output to HTML
    document.querySelector('#coastFinaly').innerHTML = finalyCoast + ' $';
    document.querySelector('#coastCalories').innerHTML = totalCalories;

   
}
/**
 * generates a pizza order and sends data to the server in json format
 * (the server address specified in the method is used as a test one)
 */
function makePizza(){
    if(!base){
        alert(`Please choose base`)
    }
    else if(!ingredients[0]){
        alert(`Please select at least one topping`)
    }
    else if(!sauses[0]){
        alert(`Please select at least one sauce`)
    }
    else{
        pizzaArray.push(new Pizza(base, ingredients, souses));
        (async () => {
            const rawResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(pizzaArray)
            }).then(result => result.json())
            .then(result => {
                alert('Order is accepted')
            })
            .catch(error => {
                console.log(`Error: ${error.message}`)
                alert(`Error: ${error.message}`)
            })
          })(); 
    }    
}
