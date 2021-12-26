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
    /**
     * @param {String} name - name of the selected base
     */
    get name(){return this.name}
    /**
     *  @param {Number} cost - count of the selected base
     */
    get cost(){return this.cost}
    /**
     * @param {Number} calories -the number of calories of the selected base
     */
    get calories(){return this.calories}
    
    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect name base pizza')
        }
        this.name = value
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect cost base pizza')
        }
        this.cost = value
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect calories base pizza')
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
