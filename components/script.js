const botaoAbrirModal = document.querySelector('.abrirModal');
botaoAbrirModal.addEventListener('click', abreModal);

function abreModal(){
   const modalON = document.querySelector('.containerModal');
    modalON.classList.add('visivel');
}


const botaoFecharModal = document.querySelector('.fecharModal');
botaoFecharModal.addEventListener('click', fechaModal);

function fechaModal(){
    const modalOFF = document.querySelector('.containerModal');
    modalOFF.classList.remove('visivel');
}