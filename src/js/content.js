import User from './models/user.js';

const user = User.new({name: 'otiai20'});
console.log(user.greet());
