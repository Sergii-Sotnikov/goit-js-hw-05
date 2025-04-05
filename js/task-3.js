console.log("<<<<<<<<<<<<<<<<TASK 3>>>>>>>>>>>>>>>");
const profile = {
  username: "Jacob",
  playTime: 300,
  getInfo() {
    return `${profile.username} has ${profile.playTime} active hours!`;
  },
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime = this.playTime + hours;
  },
};
console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());

console.log("");
console.log("");
console.log("");
