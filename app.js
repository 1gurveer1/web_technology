// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played.
//
// See labwork 7 writeup for more hints and details.
class App {
  constructor() {

    this.song = {};

    this.submitMenu = this.submitMenu.bind(this);
    this.notifyFinishedPreload = this.notifyFinishedPreload.bind(this);
    this.menuScreen = new MenuScreen(this.submitMenu);
    this.musicScreen = new MusicScreen(this.notifyFinishedPreload);
  }

  submitMenu(songURL, gifData) {
    document.querySelector("#menu").classList.add("inactive");
    document.querySelector("#load").classList.remove("inactive");
    this.songURL = songURL;
    this.musicScreen.setGifs(gifData);
  }

  notifyFinishedPreload() {
    document.querySelector("#music").classList.remove("inactive");
    document.querySelector("#load").classList.add("inactive");
    this.musicScreen.setSong(this.songURL);
  }
}