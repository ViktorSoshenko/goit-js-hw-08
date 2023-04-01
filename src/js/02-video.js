import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';
const currentTime = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function (event) {
  localStorage.setItem(currentTime, event.seconds);
  // data is an object containing properties specific to that event
};

player.on('timeupdate', _throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(currentTime));
