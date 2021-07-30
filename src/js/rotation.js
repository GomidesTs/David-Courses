let cite = ["O homem é o mundo em miniatura.", "As oportunidades multiplicam-se à medida que são agarradas", "Conhece-te a ti mesmo e conhecerás o universo e os deuses", "Não espere por uma crise para descobrir o que é importante em sua vida", "A alegria de fazer o bem é a única felicidade verdadeira", "É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso", "É melhor conquistar a si mesmo do que vencer mil batalhas", "A maior caridade é habilitar o pobre a ganhar a sua vida"];
let author = ["Textos Judaicos", "A Arte da Guerra", "Sócrates", "Platão", "Leon Tolstói", "Elbert Hubbard", "Buda", "Textos Judaicos"];
let recommendations_1=["Ungido Para os Negócios | Ed Silvoso","O homem mais rico da Babilônia | George S Clason","Pensar bem nos faz bem | Mario Sergio Cortella","Ansiedade Vol 1 - Como Enfrentar O Mal Do Século | Augusto Cury","Pai herói: Aproveite ao máximo as alegrias e o privilégio da paternidade | Max Lucado","Do Mil ao Milhão. Sem Cortar o Cafezinho | Thiago Nigro"]
let recommendations_2=["Go Pro – 7 Passos para se tornar um profissional de Marketing de Rede | Eric Worre","Como Motivar Sua Equipe - Coleção Você S/A | Anne Bruce","O dilema do porco-espinho: Como encarar a solidão | Leandro Karnal","Liderança acima da média | Danilo Figueira","Pai rico, pai pobre | Robert T. Kiyosaki","Bíblia Sagrada Sociedade Bíblica do Brasil"]
function change(cites) {
    document.querySelector(".cites").innerText = cite[cites];
    document.querySelector(".author").innerText = author[cites];
}

let current = 0;

change(current);

setInterval(function () {
    current++;
    if (current == cite.length) {
        current = 0;
    }
    change(current)
}, 120000);


function change(recommendation) {
    document.querySelector(".recommendation_1").innerText = recommendations_1[recommendation];
    document.querySelector(".recommendation_2").innerText = recommendations_2[recommendation];
}

let counter = 0;

change(counter);

setInterval(function () {
    counter++;
    if (counter == recommendations_1.length) {
        counter = 0;
    }
    change(counter)
}, 10000);