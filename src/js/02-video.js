import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);

onReloadPage();

const player = new Player(iframe);

const onTimeupdate = function (data) {
    localStorage.setItem("timeline",JSON.stringify(data.seconds));
};

player.on('timeupdate', onTimeupdate);

function onReloadPage() {
    const timeline = localStorage.getItem("timeline");

    if (timeline) {
        console.log('Time loaded!');
    } else { 
        console.log('First visit.');
    }
}
