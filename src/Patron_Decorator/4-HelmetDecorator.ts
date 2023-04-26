import EnemyDecorator from "./3-EnemyDecorator";

export class HelmetDecorator extends EnemyDecorator {
  takeDamage(): number {
    return this.enemy.takeDamage() /3;
  }
}