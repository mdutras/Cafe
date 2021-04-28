import {Coffee, Condiment} from "./cafe";

function chooseSep(ind:number, val:string, qtd:number,tam:number){
    let multiples:any = {1:"", 2:"Double ", 3:"Triple "};
    let ans:string = "";
    switch(ind){
        case 0:
            ans = multiples[qtd] + val + " with";
            break;
        case 1:
            ans = " " + multiples[qtd] + val;
            break;
        case tam - 1:
            ans = " and " + multiples[qtd] + val;
            break;
        default:
            ans = ", " + multiples[qtd] + val;
            break;
    }
    return ans;
}

function prettyDescription(raw:string):string{
    let elems:string[] = raw.split(" ");
    let conds:any = {}
    elems.forEach((val)=>{
        if(conds[val]){
            conds[val] += 1
        }else{
            conds[val] = 1
        }
    });
    let betterDescription:string = "";
    elems = Object.keys(conds);
    elems.forEach((val, ind)=>{
        betterDescription += chooseSep(ind, val, conds[val], elems.length)
    })
    return betterDescription;
}

let options = {
    coffee: "Expresso",
    condiments:["Milk","Soy","Whip", "Milk"]
}

let coffee = new Coffee(options.coffee);
options.condiments.forEach(condiment => {
    coffee = new Condiment(condiment, coffee);
});

// console.log(coffee)
console.log("Custo final será $" + coffee.cost())
console.log("A descrição será "+ prettyDescription(coffee.getDescription()));