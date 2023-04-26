class User {
  private name: string;
  constructor(name: string) { this.name = name; }
  toString(): void { console.log("User: ", this.name); }
}

class Photo {
  private owner: User;
  private name: string;
  constructor(name: string, owner: User) {
    this.name = name;
    this.owner = owner;
  }
  toString(): void { console.log(this.name, this.owner); }
}

let user1: User = new User("Carlos");
user1.toString();
let photo1: Photo = new Photo("Foto Mia", user1);
photo1.toString();

interface IAction<T> {
  execute(cmd: T): IAction<T>; //void
}

class CommentActionParams {
  private photo: Photo;
  private fromUser: User;
  private comment: string;
  constructor(photo: Photo, fromUser: User, comment: string) {
    this.photo = photo;
    this.fromUser = fromUser;
    this.comment = comment;
  }

  toString(): string {
    return this.comment;
  }
}

class CommentAction implements IAction<CommentActionParams> {
  execute(cmd: CommentActionParams): IAction<CommentActionParams> {
    console.log("Ejecutando servicio de comentario", cmd.toString());
    return this;
  }
}

let commentService: CommentAction = new CommentAction();
commentService.execute(new CommentActionParams(photo1, user1, "Hola bella foto"));