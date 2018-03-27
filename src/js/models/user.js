
class User {
  constructor(name) {
    this.name = name;
  }
  static new(props) {
    return new this(props.name);
  }
  greet() {
    return `Hello, I'm ${this.name}!`;
  }
}

export default User;
