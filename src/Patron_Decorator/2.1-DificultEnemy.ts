import { Enemy } from "./1-Enemy";

export default class DificultEnemy implements Enemy{
  takeDamage(): number {
    return 2;
  }
}