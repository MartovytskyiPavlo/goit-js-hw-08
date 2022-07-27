import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function() {
        console.log('played the video!');
});


// const seconds=player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

// console.log(seconds);

localStorage.setItem("play", "12");
