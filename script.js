const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Muito tem se discutido sobre a susbtituição dos trabalhos humanos pela inteligência artificial. Com o avanço das tecnologias muitos temem perder suas funções para as máquinas e assim acabarem perdendo seus empregos. Você acredita que essa substituição é capaz de acontecer?",
        alternativas: [
            {
                texto: "Sim, muitos empregos podem ser substituidos pela IA e o desemprego aumentará.",
                afirmacao: "Sim",
            },
            {
                texto: "Não, a IA é uma forma de complementar o trabalho humano.",
                afirmacao: "Não",
            }
        ]
    },
    {
        enunciado: "A possibilidade de melhorias significativas em áreas como saúde,transporte e educação através da IA é muito discutida. Porém ainda existe preocupações sobre os impactos econômicos e sociaisq que ela pode gerar. Qual a sua opinião sobre esse impacto da inteligência artificial na sociedade?",
        alternativas: [
            {
                texto: "Sim, ela pode trazer avanços em áreas como a saúde e educação.",
                afirmacao: "Sim",
            },
            {
                texto: "Não, a IA pode aumentar o desemprego e a desigualdade social.",
                afirmacao: "Não",
            }
        ]
    },
    {
        enunciado: "Com o avanço da tecnologia, a IA esta sendo responsável por tomar decisões importantes em situações críticas, como a condução de veículos autônomos. Os sistemas são projetados para decidir rapidamente e de forma precisa para garantir a segurança, porém existe a discussão acerca de considerações sobre ética e confiança que a IA terá. Qual a sua opinião?",
        alternativas: [
            {
                texto: "Sim, a IA pode reagir mais rápido e com precisão maior que a dos humanos em situações de emergência.",
                afirmacao: "Sim",
            },
            {
                texto: "Não, a decisão deve ser tomada por um ser humano, por conta de levar em consideração a ética.",
                afirmacao: "Não",
            }
        ]
    },
    {
        enunciado: "Existem muitas dúvidas atualmente se a IA será capaz de ser uma réplica da mente humana futuramente. Essa ideia de máquinas com consciência levanta questões sobre implicações éticas e filosóficas que as pessoas acabam adquirindo ao longo da vida, será que a IA terá a capacidade de ter um nível de consciência e autoconsciência similar ao nosso?",
        alternativas: [
            {
                texto: "Sim, com os avanços tecnológicos , a IA pode desenvolver formas de consciência e autoconsciência.",
                afirmacao: "Sim",
            },
            {
                texto: "Não, a consciência humana é única e jamais poderá ser replicada em máquinas.",
                afirmacao: "Não",
            }
        ]
    },
        
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Com o rápido avanço tecnológico, é importante que continuemos a discutir e analisar suas implicações para garantir que seu desenvolvimento e uso sejam benéficos para todos de maneira justa e responsável, já que a IA tem potencial para melhorar a qualidade de vida das pessoas, porém também pode acabar sendo prejudicial se mal utilizada. A partir disso, essa discussão reflete a uma ampla gama de opinões e preocupações que exploramos nesse quiz.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
