function toggle() {
    var trailer = document.querySelector('.trailer');
    var video = document.querySelector('.trailer__video');
    trailer.classList.toggle('trailer--is--active');
    video.currentTime = 0;
    video.pause();
}
