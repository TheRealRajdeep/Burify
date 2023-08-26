import * as model from "./model";
import { getData } from "./config";
const controlMediaPlayer = function () {
  // 1) MediaPlayer functions
  model.mediaPlayer();
};

const init = function () {
  controlMediaPlayer();
  // getData();
};
init();
