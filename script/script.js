let closeButton = document.querySelector('.cta__group-close');
let textDiv = document.querySelector('.cta__group-text');
let hidden = document.querySelector('.hidden');



closeButton.addEventListener("click",removeClass);


function removeClass(){

    textDiv.classList.remove('hidden');

}