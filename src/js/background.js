import User from './models/user.js';

const user = User.new({name: 'otiai10'});
console.log(user.greet());
