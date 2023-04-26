import BaseEnemy from "./2-BaseEnemy";
import { HelmetDecorator } from "./4-HelmetDecorator";
import { ArmourDecorator } from "./5-ArmourDecorator";
import DificultEnemy from "./2.1-DificultEnemy";

let enemy = new BaseEnemy();
console.log('Enemigo Base---------');
console.log('Daño recibido ->' +enemy.takeDamage());
console.log('---------------------');

let enemyWithHelmet = new HelmetDecorator(new BaseEnemy());
console.log('Enemigo con casco---------');
console.log('Daño recibido ->' +enemyWithHelmet.takeDamage());
console.log('--------------------------');

let enemyWithArmour = new ArmourDecorator(enemyWithHelmet);
console.log('Enemigo con armadura y casco---------');
console.log('Daño recibido ->' +enemyWithArmour.takeDamage());
console.log('--------------------------');


let enemyDificult  = new DificultEnemy();
console.log('Enemigo Con mayor resistencia---------');
console.log('Daño recibido ->' +enemyDificult.takeDamage());
console.log('---------------------');

let enemyWithHelmetDificult = new HelmetDecorator(new DificultEnemy());
console.log('Enemigo con casco---------');
console.log('Daño recibido ->' +enemyWithHelmetDificult.takeDamage());
console.log('--------------------------');

let enemyWithArmourDificult = new ArmourDecorator(enemyWithHelmetDificult);
console.log('Enemigo con armadura y casco---------');
console.log('Daño recibido ->' +enemyWithArmourDificult.takeDamage());
console.log('--------------------------');
