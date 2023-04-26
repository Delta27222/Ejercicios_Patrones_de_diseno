import EnemyDecorator from "./3-EnemyDecorator";

export class ArmourDecorator extends EnemyDecorator {
  takeDamage(): number {
    return this.enemy.takeDamage() / 2;
  }
}