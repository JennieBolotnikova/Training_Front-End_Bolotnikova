class Pizza{
    base
    ingredients = []
    souses = []
    /**
     * @constructor
     * @param {Base} base - pizza base 
     * @param {Ingredient} ingredients - toppings
     * @param {Sauce} sauces - sauce
     */
    constructor(base, ingredients, souses){
        this.base = base;
        this.ingredients = ingredients;
        this.souses = souses;
    }
    /**
     * @param {Base} - selected type of pizza base
     */
    get base(){return this.base}
    /**
     * @param {Ingredient} - selected toppings
     */
    get ingredients(){return this.ingredients}
    /**
     * @param {Sauce} - selected sauce
     */
    get sauces(){return this.sauces}

    /**Sets the value
     * @param {Base} value 
     */
    set base(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base for pizza')
        }
        this.base = value
    }
    /**Sets the value
     * @param {Ingredient} value 
     */
    set ingredients(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect ingredient for pizza')
        }
        this.ingredients.push(value)
    }
    /**Sets the value
     * @param {Sauce}value 
     */
    set sauces(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect sauce for pizza')
        }
        this.sauces.push(value)
    }
}