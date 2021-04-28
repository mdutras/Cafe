const { readFileSync } = require("fs");

let coffees = JSON.parse(readFileSync("coffees.json", "utf-8"));
let condiments = JSON.parse(readFileSync("condiments.json", "utf-8"));

interface Beverage{
    getDescription:Function,
    cost:Function
}

class Coffee  implements Beverage{
    description:string;
    price:number;
    constructor(flavor:string){
        let {Description, Cost} = coffees[flavor];
        this.description = Description;
        this.price = Cost;
    }

    getDescription(){
        return this.description;
    }

    cost(){
        return this.price;
    }
}

class Condiment implements Beverage{
    description:string;
    price:number;
    beverage:Beverage;
    constructor(type:string, coffee:Beverage){
        let {Description, Cost} = condiments[type];
        this.description = Description;
        this.price = Cost;
        this.beverage = coffee;
    }

    getDescription(){
        return this.beverage.getDescription() + " " + this.description;
    }

    cost(){
        return this.beverage.cost()  + this.price;
    }
}

export {Coffee, Condiment}