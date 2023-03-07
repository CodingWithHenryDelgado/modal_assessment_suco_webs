
const modalButton = document.getElementById('modal-button');

const popUp = document.getElementById('popup');

const exitModal = document.getElementById('close-modal');

// Once the Modal Button is clicked it will make the modal display into block

modalButton.addEventListener('click', function () { popUp.style.display = "block" });


// Once the Exit Button is clicked it will make the modal disappear

exitModal.addEventListener('click', function () { popUp.style.display = "none" });