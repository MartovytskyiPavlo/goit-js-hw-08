import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIMELINE = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);


onReloadPage();

player.on('timeupdate', throttle(onTimeupdate,1000));


const onTimeupdate = function (data) {
    localStorage.setItem(TIMELINE, JSON.stringify(data.seconds));
};

function onReloadPage() {
    const timeline = localStorage.getItem(TIMELINE);

    if (timeline) {
        player.setCurrentTime(JSON.parse(timeline)).then(function(seconds) {
            }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;
                default:
                    // some other error occurred
                    break;
            }
        });
    }
}
