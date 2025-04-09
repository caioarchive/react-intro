
const App = () => {
  const nome = "caio"
  const valor1 = 15
  const valor2 = 2

  const h2Styled = {
    color: "blue",
    backgroundColor: "black"
  }
  return (
    <>
    <h1 className={h2Styled}>Olá mundo, meu nome é {nome}</h1>
    <p>{valor1 *valor2}</p>
  
    </>
  )
}

export default App
