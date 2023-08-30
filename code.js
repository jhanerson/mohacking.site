window.onload = function () {

    $('#onload').fadeOut();
}


window.addEventListener('load', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const randomIndex = Math.floor(Math.random() * carouselItems.length);
    carouselItems.forEach((item, index) => {
        if (index === randomIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});