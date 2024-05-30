const profile = {
	username: "Jacob",
  playTime: 300,

  changeUsername(newName)
  {
this.username = newName;
  },
  updatePlayTime(hours)
  {
    this.playTime += hours ;
  },

  getInfo()
  {

  return `${this.username} ma ${this.playTime} aktywnych godzin!`

  }


};
console.log(profile.getInfo());
profile.changeUsername("Marco");
console.log(profile.getInfo());
profile.updatePlayTime(20);
console.log(profile.getInfo());