document.addEventListener('DOMContentLoaded', function () {
    let toggler = document.getElementById('toggler');

    toggler.addEventListener('change', function () {
        let barsIcon = document.querySelector('.fas.fa-bars');

        if (toggler.checked) {
            barsIcon.classList.add('active');
        } else {
            barsIcon.classList.remove('active');
        }
    });
});