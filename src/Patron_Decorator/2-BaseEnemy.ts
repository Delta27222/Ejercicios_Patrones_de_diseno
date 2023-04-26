import { Enemy } from "./1-Enemy";

export default class BaseEnemy implements Enemy {
  takeDamage(): number {
    return 10;
  }
}