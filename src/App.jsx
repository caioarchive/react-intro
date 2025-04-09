const App = () => {

  const luana = {
    cliente: "luana",
    idade: 27,
    compras: [
      { nome: "notebok", preço: "$ 2000" },
      { nome: "geladeira", preço: "$ 9000" },
      { nome: "smartphone", preço: "$ 23000" },
      { nome: "pc gamer da tropa", preço: "$ 1300" },
    ],
    ativa: true
  }
const Mario = {
  cliente: "Mario",
  compras: [
  {nome: "notebok", preço:"$ 2500"},
  {nome: "geladeira", preço:"$ 3000"},
  {nome: "smartphone", preço:"$ 1500"},
  {nome: "pc gamer da tropa", preço:"$ 3500"},
  ],
  ativa: false
   
}

  const dados = luana;
  const preços = dados.compras.map((dado) => Number(dado.preço.replace('$', '').trim()));
  
  // Corrigindo a função de soma para garantir que o valor seja retornado corretamente
  const somaTotal = preços.reduce((a, b) => a + b, 0); // O "0" é o valor inicial da soma

  console.log(somaTotal);

  return (
    <>
      <p>Olá mundo, meu nome é <strong>{luana.cliente}</strong> </p>
      <p>Minha idade é <strong>{luana.idade}</strong></p>
      <p className={luana.ativa ? "ativo" : "inativo"}>{luana.ativa ? "Situação ativa" : "Situação inativa"}</p>
      <p>
        {somaTotal > 1000 ? "Esta gastando demais" : null}
      </p>

      <hr />

      {/* <p>Olá mundo, meu nome é <strong>{Mario.cliente}</strong> </p>
      <p>Minha idade é <strong>{Mario.idade}</strong></p>
      <p className={Mario.ativa ? "ativo" : "inativo"}>{Mario.ativa ? "Situação ativo" : "Situação inativo"}</p>
       */}
    </>
  );
}

export default App;
