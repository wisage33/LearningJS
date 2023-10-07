let watchLater = document.querySelector('.watch_later');
let leftBtn = document.querySelector('#left-btn');

leftBtn.addEventListener('click', function watchLaterBtn() {
    let goLeft = watchLater.offsetLeft;
    watchLater.style.left = `${goLeft - 40}px`;
})