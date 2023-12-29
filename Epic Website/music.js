document.addEventListener('DOMContentLoaded', function () {

    var playButton = document.getElementById('play');
    var audio = document.getElementById('music');

    playButton.addEventListener('click', function () {
        // window.open('https://example.com', '_blank')
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});