document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');
    var body = document.querySelector('body');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        }
        else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    });
});
