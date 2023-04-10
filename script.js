var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = '<h1>Ma courte histoire</h1>\n'+
    '<p>Je suis une policière et mon nom est Trish.</p>\n'+
    '<p>Mes jambes sont en carton et je suis mariée avec un poisson.</p>';
var htmlCodeInit = 'Ma courte histoire \nJe suis une policière et mon nom est Trish. \nMes jambes sont en carton et je suis mariée avec un poisson.';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);