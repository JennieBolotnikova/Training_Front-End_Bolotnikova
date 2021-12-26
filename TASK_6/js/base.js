class Base{
    name
    cost
    calories
    /**
     * @constructor
     * @param {String} name - name of the base
     * @param {Number} cost - count of the base
     * @param {Number} calories -the number of calories of the base
     */
    constructor(name, cost, calories){
        this.name = name;
        this.cost = cost;
        this.calories = calories;
    }
    /**Return name of the selected base
     * @param {String} name - name 
     */
    get name(){return this.name}
    /**Return count of the selected base
     *  @param {Number} cost - count 
     */
    get cost(){return this.cost}
    /**Return the number of calories of the selected base
     * @param {Number} calories -the number of calories
     */
    get calories(){return this.calories}


    /**
     * Sets the value
     * @param {String} value - name of the base
     */
    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect base name')
        }
        this.name = value
    }
    /**Sets the value
     *  @param {Number} value - count of the base
     */
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base cost')
        }
        this.cost = value
    }
     /**Sets the value
     * @param {Number}  value - the number of calories
     */
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base calories')
        }
        this.calories = value
    }
}

class ThinBase extends Base{

    constructor(){
        super("Thin base", 4, 224);
    }
}

class ThickBase extends Base{

    constructor(){
        super('Thick base', 6, 270);
    }
}

class PuffBase extends Base{

    constructor(){
        super('Puff base', 7, 300);
    }
}

class CalzoneBase extends Base{

    constructor(){
        super("Calzone base", 5, 288);
    }
}

class ItalianBase extends Base{

    constructor(){
        super("Italian base", 4.5, 224);
    }
}
