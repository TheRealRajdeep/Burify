import { iconSwitch, volumeIconSwitch } from "./mediaPlayerView";
// Selecting buttons
export const audio = document.querySelector("audio");
const currentIcon = document.getElementById("#music-control");
const backward = document.querySelector(".fa-backward-fast");
const forward = document.querySelector(".fa-forward-fast");
const trackLength = document.querySelector("._track-len");
const seekBar = document.getElementById("seek--bar");
const volumeBar = document.getElementById("volume-control");
const volumeControl = document.getElementById("volume-controls");
const loopIcon = document.getElementById("loop-track");
//functionality of the media player
export const mediaPlayer = function () {
  // 1) Play-Pause functionality
  const playPause = function () {
    const audioLength = `${Math.floor(audio.duration / 60)}:${
      Math.floor(audio.duration % 60) < 10 ? 0 : ""
    }${Math.floor(audio.duration % 60)}`;
    // I) Check whether audio is playing or not
    if (audio.paused) {
      trackLength.innerHTML = audioLength; //Display track length on seek bar
      // Display current time of track on seek bar
      const currentTime = setInterval(() => {
        const trackDuration = document.querySelector("._current-time");
        const curTime = `${Math.floor(audio.currentTime / 60)}:${
          audio.currentTime % 60 < 10 ? 0 : ""
        }${Math.floor(audio.currentTime) % 60}`;
        trackDuration.innerHTML = curTime;
      }, 1000);
      audio.play();
      audio.paused = false;
      if (audio.play()) {
        seekBar.max = audio.duration;
        setInterval(() => {
          seekBar.value = audio.currentTime;
        }, 1000);
      }
    } else {
      console.log("pause was pressed");
      audio.pause();
      audio.paused = true;
    }

    iconSwitch();
  };
  currentIcon.addEventListener("click", playPause);
  audio.addEventListener("ended", iconSwitch);
  // Back Button functionality
  const pressedBack = function () {
    audio.currentTime = 0;
    seekBar.value = 0;
    // console.log(audio.currentTime);
  };
  backward.addEventListener("click", pressedBack);

  // Seek functionality
  const seek = function () {
    audio.currentTime = seekBar.value;
  };
  seekBar.addEventListener("click", seek);

  //Volume functionality
  const volume = function () {
    audio.volume = volumeBar.value / 100;
    if (audio.volume === 0) {
      let isMute = true;
      volumeIconSwitch(isMute);
    } else if (audio.volume > 0) {
      isMute = false;
      volumeIconSwitch(isMute);
    }
  };
  volumeBar.addEventListener("click", volume);

  // Toggle volume functionality
  const toggleVolume = function () {
    if (audio.volume === 0) {
      audio.volume = 0.5;
      volumeBar.value = audio.volume * 100;
      volumeIconSwitch(false);
    } else if (audio.volume > 0) {
      audio.volume = 0;
      volumeBar.value = audio.volume;
      volumeIconSwitch(true);
    }
  };
  volumeControl.addEventListener("click", toggleVolume);

  // loop song functionality
  const loopTrack = function () {
    if (audio.loop === false) {
      audio.loop = true;
      loopIcon.style.color = "#1db954";
    } else {
      audio.loop = false;
      loopIcon.style.color = "white";
    }
  };
  loopIcon.addEventListener("click", loopTrack);
};
// Get song from API
export const playSong = function (response) {
  const track = response.youtubeVideo.audio[0].url;
  audio.setAttribute("src", track);
};
