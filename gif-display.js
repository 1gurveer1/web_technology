// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
//
// See labwork 7 writeup for more hints and details.
class GifDisplay {
  constructor(gifData, notifyFinishedPreload) {
    this.loadGif = this.loadGif.bind(this);
    this.preload = this.preload.bind(this);

    this.gifs = document.querySelectorAll(".gif");
    this.gifIndex = 0;

    this.data = gifData;
    this.images = [];

    this.index = 0;
    this.notifyFinishedPreload = notifyFinishedPreload;
  }

  preload() {
    if (this.index === 2) {
      let randInd = Math.floor(Math.random() * this.images.length);
      this.current = randInd;
      this.gifs[this.gifIndex].style.backgroundImage
        = "url(" + this.images[this.current].src + ")";
      this.loadGif();
      this.notifyFinishedPreload();
    }
    if (this.index < this.data.length) {
      this.images.push(new Image());
      this.images[this.index].src = this.data[this.index].images.downsized.url;
      this.images[this.index].addEventListener('load', this.preload);
      this.index++;
    }
  }

  select() {
    let randInd = Math.floor(Math.random() * this.images.length);
    while (randInd === this.current) {
      randInd = Math.floor(Math.random() * this.images.length);
    }
    this.current = randInd;
  }

  loadGif() {
    this.select();

    this.gifs[this.gifIndex].classList.add("back");
    this.gifs[this.gifIndex].classList.remove("front");
    this.gifs[this.gifIndex].style.backgroundImage
      = "url(" + this.images[this.current].src + ")";

    this.gifIndex = (this.gifIndex + 1) % 2;
    this.gifs[this.gifIndex].classList.add("front");
    this.gifs[this.gifIndex].classList.remove("back");
  }
}