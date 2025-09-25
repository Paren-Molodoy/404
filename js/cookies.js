let cookies = document.querySelector ('.cookies');
console.log(cookies);
let cookies_button = document.querySelector ('.cookies_button');
console.log(cookies_button);
cookies_button.addEventListener('click', function() {
    console.log('Клик!');
    cookies.classList.add('cookies--hidden');
});
