class Sauce{
    name
    cost
    calories
    /**
     *@constructor 
     * @param {String} name - name of the sauce
     * @param {Number} cost - count of the sauce
     * @param {Number} calories -the number of calories of the sauce
     */
    constructor(name, cost, calories){
        this.name = name;
        this.cost = cost;
        this.calories = calories;
    }
    /**Returns the name of a pizza sauce
     * @param {String} name - name of the selected sauce
     */
    get name(){return this.name}
    /** Returns the cost of a pizza ingredient
     * @param {Number} cost - count of the selected sauce
     */
    get cost(){return this.cost}
    /**Returns the calories of a pizza ingredient
     * @param {Number} calories -the number of calories of the selected sauce
     */
    get calories(){return this.calories}

    /**Sets the value
     * @param {String} name - name of the sauce
     */
    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect sauce name')
        }
        this.name = value
    }
    /**Sets the value
     * @param {Number} cost - count of the sauce
     */
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect sauce cost')
        }
        this.cost = value
    }
    /**Sets the value
     * @param {Number} calories -the number of calories of the sauce 
     */
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect sauce calories')
        }
        this.calories = value
    }
}

class TomatoSauce extends Sauce{

    constructor(){
        super('Tomato sauce', 1.0, 112);
    }
}
class BBQ extends Sauce{

    constructor(){
        super('BBQ', 1.5, 172);
    }
}
class CheeseSauce extends Sauce{

    constructor(){
        super('Cheese sauce', 1.4, 141);
    }
}
class SweetAndSourSauce extends Sauce{

    constructor(){
        super('Sweet and sour sauce', 1.2, 150);
    }
}