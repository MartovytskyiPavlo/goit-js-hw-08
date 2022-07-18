import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const options = {
    id: 236203659,
    width: 640,
    height:360,
    frameborder:0,
    allowfullscreen,
    allow:"autoplay; encrypted-media",
    loop: true
    };

const player = new Player(iframe,options);

player.on('play', function() {
        console.log('played the video!');
});


const seconds=player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});

localStorage.setItem("play", seconds);
