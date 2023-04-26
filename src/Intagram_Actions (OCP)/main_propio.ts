class User1 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  toString(): void {
    console.log("User: ", this.name);
  }
}

class Photo1 {
  private owner: User1;
  private name: string;
  constructor(name: string, owner: User1){
    this.name = name;
    this.owner = owner;
  }
  toString(): void {
    console.log(this.name, this.owner);
  }
}

interface IAction1<T> {
  execute(cmd: T): IAction1<T>;
}

class CommentAction1 implements IAction1<CommentActionParams1> {
  execute(cmd: CommentActionParams1): IAction1<CommentActionParams1> {
    console.log("Ejecutando servicio de comentario", cmd.toString());
    return this;
  }
}


class CommentActionParams1{
  private photo : Photo1;
  private fromUser: User1;
  private comment : string;
  constructor(photo: Photo1, fromUser: User1, comment: string){
    this.photo = photo;
    this.fromUser = fromUser;
    this.comment = comment;
  }
  toString(): string {
    return this.comment;
  }
}

const angel = new User1('Angel');
angel.toString();
const photoAngel = new Photo1('PhotoSimba', angel);
photoAngel.toString();
const commentService1 = new CommentAction1();
commentService1.execute(new CommentActionParams1(photoAngel, angel, 'Simba es un loco'));
