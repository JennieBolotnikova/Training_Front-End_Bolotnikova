var base;
var ingredients = [];
var sauses = [];
var totalCoast;
var totalCalories;
var finalyCoast;

window.onclick = function onclickFunction() {
    //Bases
    if(document.querySelector('#thin').checked == true)
    {
        base = new ThinBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#thick').checked == true)
    {
        base = new ThickBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#puff').checked == true)
    {
        base = new PuffBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#italian').checked == true)
    {
        base = new ItalianBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        console.log(base.name, totalCalories, totalCoast)
    }
    if(document.querySelector('#calzone').checked == true)
    {
        base = new CalzoneBase();
        totalCoast = base.cost;
        totalCalories = base.calories;
        console.log(base.name, totalCalories, totalCoast)
    }
    //Ingredients
    if(document.querySelector('#mozzarella').checked)
    {
        let ingredient = new Mozzarella();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#parmesan').checked)
    {
        let ingredient = new Parmesan();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#peperoni').checked)
    {
        let ingredient = new Peperoni();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#chicken').checked)
    {
        let ingredient = new Chicken();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#bacon').checked)
    {
        let ingredient = new Bacon();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#champignon').checked)
    {
        let ingredient = new Champignon();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#ham').checked)
    {
        let ingredient = new Ham();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#tomatoes').checked)
    {
        let ingredient = new Tomatoes();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#pineapple').checked)
    {
        let ingredient = new Pineapple();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    if(document.querySelector('#onion').checked)
    {
        let ingredient = new Onion();
        totalCoast += ingredient.cost;
        totalCalories += ingredient.calories; 
        ingredients.push(ingredient.name);  
        console.log(ingredient.name, ingredient.calories, ingredient.cost)
    }
    //Sauses
    if(document.querySelector('#tomatoSauce').checked)
    {
        let sauce = new TomatoSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#bbq').checked)
    {
        let sauce = new BBQ();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#cheeseSauce').checked)
    {
        let sauce = new CheeseSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        console.log(sauce.name, sauce.calories, sauce.cost );
    }
    if(document.querySelector('#sweetAndSourSauce').checked)
    {
        let sauce = new SweetAndSourSauce();
        totalCoast += sauce.cost;
        totalCalories += sauce.calories;
        sauses.push(sauce.name);
        console.log(sauce.name, sauce.calories, sauce.cost );
    }
    console.log(totalCalories, totalCoast)
}
