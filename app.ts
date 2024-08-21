document.addEventListener('DOMContentLoaded', () => {

    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    const body = document.querySelector('body') as HTMLBodyElement;

    checkbox.addEventListener('change', () => {

        if (checkbox.checked) {

            body.classList.add('dark-mode');
            body.classList.remove('light-mode');

        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }

    });
    
});
