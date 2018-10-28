import User from './models/user.js';

export function main() {
  const user = User.new({name: 'otiai20'});
  console.log(user.greet());
  console.log(
    "Is chrome.runtime available here?",
    typeof chrome.runtime.sendMessage == "function",
  );
}
