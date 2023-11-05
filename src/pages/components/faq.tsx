import Header1 from "./h1";

const faq = [
    ["Preciso de uma bomba?","Não! É completamente possível estimular a produção de leite apenas com uma ordenha manual, desde que ela seja feita da forma correta (do jeitinho que eu expliquei no vídeo lá em cima)."],
    ['Meu bebê precisa de fórmula, mesmo assim consigo aumentar a produção?','Sim! Você pode aumentar a sua produção de leite até um determinado momento em que a fórmula passa a não ser mais necessária. Eu explico direitinho sobre isso no curso.'],
    ['Meu bebê mama o tempo todo, como vou conseguir extrair mais leite? ','Entendendo como funciona a Fantástica Fábrica de Leite Materno: quanto mais estímulos dermos para o nosso corpo com o bebê mamando ou com uma ordenha, mais o corpo entende que precisa produzir leite e mais leite o corpo produz.'],
    ['Meu peito está sempre murcho, como vou conseguir aumentar a produção?','Peito murcho não significa que não tem leite! Significa apenas que essa produção está regulada de uma forma que não fica leite parado em excesso no peito. Com as estratégias corretas é completamente possível aumentar e muito essa produção.'],
    ['É possível voltar a trabalhar e continuar amamentando?','Sim, e eu explico exatamente como conseguir no módulo 6 do curso.'],
    ['Por onde começar?','Na plataforma temos um módulo chamado Comece por Aqui! Ali explicamos sobre como aproveitar e assistir as aulas da melhor maneira possível.'],
    ['Quanto tempo de acesso eu terei?','Ao adquirir o Método LactoFlow®️, você passa a ter acesso a todo esse conteúdo por 2 anos.'],
    ['Quanto tempo demora para eu ter resultado?','Isso varia caso a caso. Tem mulheres que vão notar um aumento já no primeiro dia e outras depois de 1 mês mais ou menos. Depende de como o seu corpo vai reagir aos estímulos e de como você vai ser fiel ao passo a passo ensinado.'],
    ['Como funciona a garantia?','Você pode cancelar 21 dias a partir da compra. Caso se arrependa, é só pedir o reembolso na própria plataforma da Hotmart sem nenhuma exigência ou burocracia. Ah e o reembolso é integral.'], 
    ['Tenho outras dúvidas, onde posso perguntar sobre elas?','Basta entrar em contato pelo <a class="link decoration-dashed text-blue" href="https://wa.me/5521986388688?text=Oi%2C+tudo+bem%3F+Eu+tenho+uma+pergunta+sobre+o+curso+LactoFlow.">Whatspp</a> que responderemos o mais rápido possível.']

]

const Accordion = ({ question="Q", answer="A"} : {
    question: string,
    answer: string,
}) => (<div className="collapse collapse-arrow bg-green">
<input type="checkbox" /> 
<div className="collapse-title text-xl sm:text-2xl text-blue font-medium">
<h1>{question}</h1>
</div>
<div className="collapse-content text-xl"> 
  <p dangerouslySetInnerHTML={{__html: answer}}></p>
</div>
</div>)


const Faq = () => {
    return (
        <section className="p-2">
            <Header1>
                Perguntas Frequentes - FAQ               
            </Header1>
            <div className="max-w-3xl mx-auto flex flex-col gap-2">

            {faq.map((q,i)=> <Accordion key={i} question={q[0]||""} answer={q[1]||""}/>)}

            </div>
            





   
        </section>
    )
}
export default Faq;