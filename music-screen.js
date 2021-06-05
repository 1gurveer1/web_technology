// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See labwork 7 writeup for more hints and details.
class MusicScreen {
  constructor(notifyFinishedPreload) {
    this.setSong = this.setSong.bind(this);
    this.audioPlayer = new AudioPlayer();
    this.playButton = new PlayButton(this.audioPlayer);
    this.notifyFinishedPreload = notifyFinishedPreload;
  }

  setSong(songURL) {
    this.audioPlayer.setSong(songURL);
    this.audioPlayer.setKickCallback(this.gifDisplay.loadGif);
    this.audioPlayer.play();
  }

  setGifs(gifData) {
    this.gifDisplay = new GifDisplay(gifData, this.notifyFinishedPreload);
    this.gifDisplay.preload();
  }
}