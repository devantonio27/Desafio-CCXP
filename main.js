const ingressos = [] ;

function highlightCard(selector){
    const element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function selectCard(selector){
    const element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

function showSelectedCards(){
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();