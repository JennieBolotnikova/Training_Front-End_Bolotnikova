class Pizza{

    ingredients = []
    souses = []
    constructor(base, ingredients, souses){
        this.base = base;
        this.ingredients = ingredients;
        this.souses = souses;
    }

    get base(){return this.base}

    get ingredients(){return this.ingredients}

    get sauces(){return this.sauces}

    set base(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect base for pizza')
        }
        this.base = value
    }

    set ingredients(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect ingredient for pizza')
        }
        this.ingredients.push(value)
    }

    set sauces(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect sauce for pizza')
        }
        this.sauces.push(value)
    }
}