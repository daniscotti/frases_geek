//lista com as citações, em forma de matriz
let frasesEAutores = [
    [
    "Palavras são, na minha nada humilde opinião, nossa fonte inesgotável de magia.",
    "Um mago nunca se atrasa, nem se adianta, ele chega exatamente quando pretende chegar.",
    "Faça ou não faça. Tentativa não há.",
    "Se os seres humanos não moverem seus lábios, seus cérebros começarão a funcionar.",
    "Com grandes poderes, vem grandes responsabilidades.",
    "Sua falta de fé é perturbadora.",
    "Seu futuro não está escrito, o de ninguém está. Você pode fazer o que quiser fazer.",
    "I’m groot.",
    "Existe sempre uma solução.",
    "Não são as nossas qualidades, mas sim as nossas escolhas que revelam quem nós somos.",
    "Nunca nos livramos de nossos demônios. Apenas aprendemos a viver acima deles.",
    "Não deixe os trouxas te colocarem para baixo.",
    "Não entre em pânico!",
    "Eu tenho a força!"
    ],[
        "Albus Dumbledore - Harry Potter",
        "Albus Dumbledore - Harry Potter",
        "Yoda - Star Wars",
        "Ford Prefect - Guia do Mochileiro das Galáxias",
        "Tio Ben - Homem Aranha",
        "Darth Vader - Star Wars",
        "Dr. Emmett Brown - De Volta Para o Futuro",
        "Groot - Guardiões da Galáxia",
        "Doctor - Doctor Who",
        "Albus Dumbledore - Harry Potter",
        "Ancião - Doutor Estanho",
        "Rony Weasley - Harry Potter",
        "Guia do Mochileiro das Galáxias",
        "He-Man"
    ]    
];

//função que escolhe uma citação acima e altera a frase e o autor
function escolheCitação() {
    let número = Math.floor(Math.random()*14);
    document.querySelector(".frase").textContent = frasesEAutores[0][número];
    document.querySelector(".autor").textContent = frasesEAutores[1][número];
}