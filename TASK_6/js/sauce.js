class Sauce{
    name
    cost
    calories
    constructor(name, cost, calories){
        this.name = name;
        this.cost = cost;
        this.calories = calories;
    }

    get name(){return this.name}

    get cost(){return this.cost}

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