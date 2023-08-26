export const iconSwitch = function () {
  const currentIcon = document.getElementById("#music-control");
  if (currentIcon.classList.contains("fa-play")) {
    currentIcon.classList.remove("fa-play");
    currentIcon.classList.add("fa-pause");
  } else if (currentIcon.classList.contains("fa-pause")) {
    currentIcon.classList.remove("fa-pause");
    currentIcon.classList.add("fa-play");
  }
};
export const volumeIconSwitch = function (isMute) {
  const volumeControl = document.getElementById("volume-controls");
  if (isMute) {
    if (volumeControl.classList.contains("fa-volume-high")) {
      volumeControl.classList.remove("fa-volume-high");
      volumeControl.classList.add("fa-volume-xmark");
    }
  } else {
    volumeControl.classList.remove("fa-volume-xmark");
    volumeControl.classList.add("fa-volume-high");
  }
};
