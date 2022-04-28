const formSelector = document.querySelector('#form');
console.log(formSelector);

formSelector.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const formObject = new FormData(formSelector);

    const atracoesArray = formObject.get('atracoes-input').split(', ');

    const body = {
        "name": formObject.get('nome-input'),
        "poster": "N/D",
        "attractions": atracoesArray,
        "description": formObject.get('descricao-input'),
        "scheduled": formObject.get('data-input'),
        "number_tickets": formObject.get('lotacao-input')
    }


    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
        "method": "POST",
        "headers": {"content-type": "application/json"},
        "body": JSON.stringify(body)
    }).then((response) => console.log(response)
    ).then(() =>{
        alert("Seu evento foi criado com sucesso");

        setTimeout(function (){
            window.location.href = '/admin.html';
        }, 1000);
    }
    ).catch((error) => console.error(error));

})