import { Home } from "./pages/Home"
import { Cabecalho } from "./components/Header"
import { useState } from "react"
import { Promocao } from "./pages/Promocao"

function App() {
  const [paginaAtual, setPaginaAtual] = useState("home")

  return (
    <>
      <Cabecalho />
      {paginaAtual === "home" && (
        <Home irParaPromocao={() => setPaginaAtual("promocao")} />
      )}
      {paginaAtual === "promocao" && (
        <Promocao voltarParaHome={() => setPaginaAtual("home")} />
      )}
  </>
  )
}

export default App
