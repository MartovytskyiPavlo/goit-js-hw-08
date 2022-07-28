import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);


onReloadPage();

player.on('timeupdate', throttle(onTimeupdate,1000));


function onTimeupdate(data) {
    localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds));
};


function onReloadPage() {
    const timeline = localStorage.getItem(TIME_KEY);

    if (timeline) {
        player.setCurrentTime(JSON.parse(timeline));
    }
}
