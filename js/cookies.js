let cookies = document.querySelector ('.cookies');
console.log(cookies);
if (cookies) {
    let cookiesButton = document.querySelector ('.button--secondary');
    console.log(cookiesButton);
    cookiesButton.addEventListener('click', function() {
        console.log('Клик!');
        cookies.classList.add('cookies--hidden');
    });
}