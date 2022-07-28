// import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

onReloadPage();

const player = new Vimeo.Player(iframe);

const onTimeupdate = function (data) {
    localStorage.setItem("timeline",JSON.stringify(data.seconds));
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onTimeupdate);



localStorage.setItem("play", JSON.stringify(seconds));

function onReloadPage() {
    const timeline = localStorage.getItem("timeline");

    if (timeline) {
        console.log('Time loaded!');
    } else { 
        console.log('First visit.');
    }
}
