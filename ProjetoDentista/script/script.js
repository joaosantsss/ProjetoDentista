
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let doutor = document.getElementById("doutor").value;

    let mensagem =
`Olá!

Novo agendamento de consulta.

Nome: ${nome}
Data: ${data}
Horário: ${hora}
Doutor: ${doutor}`;

    let numero = "5551995559935";

    let link =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});

