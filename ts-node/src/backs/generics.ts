import { Hero as SuperHero } from "../classes/Hero";
//No es necesaria destructuración debido a exportación por default
import powers from "../data/powers";
import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
//Se puede importar debido a que se exportan desde index.ts
import { Villain,Hero } from "../interfaces";

console.log("Hola Mundo!");

const ironman = new SuperHero("Ironman", 1, 55);
console.log(ironman);

console.log(powers);

console.log(ironman.power);

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6]);
printObject("Hola mundo");

console.log(genericFunction(12.265415).toFixed(2));
console.log(genericFunctionArrow('Hola').toUpperCase());
console.log(genericFunction(new Date()).getDay());

const deadpool = {
    name:'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Hero>(deadpool).realName);
console.log(genericFunction<Villain>(deadpool).dangerLevel);