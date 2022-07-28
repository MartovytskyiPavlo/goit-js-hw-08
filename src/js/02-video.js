import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);

const player = new Player(iframe);


onReloadPage();


const onTimeupdate = function (data) {
    localStorage.setItem("timeline",JSON.stringify(data.seconds));
};

player.on('timeupdate', onTimeupdate);

function onReloadPage() {
    const timeline = localStorage.getItem("timeline");

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
