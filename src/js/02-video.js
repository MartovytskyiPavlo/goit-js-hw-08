// import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

onReloadPage();

const player = new Vimeo.Player(iframe);

localStorage.setItem("play", JSON.stringify(seconds));

function onReloadPage() {
    const timeline = localStorage.getItem("timeline");

    if (timeline) {
        console.log('Time loaded!');
    } else { 
        console.log('First visit.');
    }
}
