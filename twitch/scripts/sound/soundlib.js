const audio = document.getElementById("_audio");

const audioClips = [
  "Quack",
  "Fart",
  "Honk",
  "Frog"
]

function playChatAudio(path) {
  audio.pause();
  audio.currentTime = 0;
  audio.setAttribute("src", path);
  audio.muted = false;
  audio.play();
}

function playProfanityAudio() {
  audio.pause();
  audio.currentTime = 0;
  audio.setAttribute("src", "./twitch/audio/" + audioClips[Math.floor(Math.random() * audioClips.length)] + ".mp3");
  audio.muted = false;
  audio.play();
}

