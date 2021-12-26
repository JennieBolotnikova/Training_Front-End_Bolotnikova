class Ingredient{
    name
    cost
    calories
    /**
     * @constructor
     * @param {String} name - name of the ingredient
     * @param {Number} cost - count of the ingredient
     * @param {Number} calories -the number of calories of the ingredient
     */
    constructor(name, cost, calories){
        this.name = name;
        this.cost = cost;
        this.calories = calories;
    }
    /**Returns the name of a pizza ingredient
     * @param {String} name - name of the selected ingredient
     */
    get name(){return this.name}
    /**Returns the cost of a pizza ingredient
     * @param {Number} cost - count of the selected ingredient
     */
    get cost(){return this.cost}
    /**Returns the calories of a pizza ingredient
     * @param {Number} calories -the number of calories of the selected ingredient
     */
    get calories(){return this.calories}

    /**Sets the value
     * 
     */
    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect ingredient name')
        }
        this.name = value
    }
    /**Sets the value
     * 
     */
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect ingredient cost ')
        }
        this.cost = value
    }
    /**Sets the value
     * 
     */
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect ingredient calories')
        }
        this.calories = value
    }
}

class Mozzarella extends Ingredient{    
    constructor(){
        super('Mozzarella', 4.5, 280);
    }
}
class Parmesan extends Ingredient{
    constructor(){
        super('Parmesan', 5, 431);
    }
}
class Peperoni extends Ingredient{
    constructor(){
        super('Peperoni', 3.5, 494);
    }
}
class Chicken extends Ingredient{
    constructor(){
        super('Chicken', 3.8, 185);
    }
}
class Bacon extends Ingredient{
    constructor(){
        super('Bacon', 5.2, 541);
    }
}
class Champignon extends Ingredient{
    constructor(){
        super('Champignon', 2.9, 270);
    }
}
class Ham extends Ingredient{
    constructor(){
        super('Ham', 4.4, 145);
    }
}
class Tomatoes extends Ingredient{
    constructor(){
        super('Tomatoes', 2.2, 199);
    }
}
class Pineapple extends Ingredient{
    constructor(){
        super('Pineapple', 3.9, 100);
    }
}
class Onion extends Ingredient{
    constructor(){
        super('Onion', 2, 258);
    }
}
