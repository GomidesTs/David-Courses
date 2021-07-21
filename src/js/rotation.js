let cite = ["O homem é o mundo em miniatura.", "As oportunidades multiplicam-se à medida que são agarradas", "Conhece-te a ti mesmo e conhecerás o universo e os deuses", "Não espere por uma crise para descobrir o que é importante em sua vida", "A alegria de fazer o bem é a única felicidade verdadeira", "É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso", "É melhor conquistar a si mesmo do que vencer mil batalhas", "A maior caridade é habilitar o pobre a ganhar a sua vida"];
let author = ["Textos Judaicos", "A Arte da Guerra", "Sócrates", "Platão", "Leon Tolstói", "Elbert Hubbard", "Buda", "Textos Judaicos"];

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
}, 3000);