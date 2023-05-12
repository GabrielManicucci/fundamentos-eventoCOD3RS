import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Evento() {
  const [valor, setValor] = useState(1)

  function soma() {
    setValor(valor + 1)
    console.log('Valor...', valor)
  }

  function subtrair() {
    setValor(valor - 1)
    console.log('Valor...', valor)
  }
  

  return (
    <div className={`
      flex
      flex-col
      items-center
      gap-4
      text-white
    `}>
      <span className="text-2xl"><b>Valor: </b> {valor} </span>
      <div className="flex gap-3">
        <button onClick={soma}>
          <IconPlus />
        </button>
        <button onClick={subtrair}>
          <IconMinus />
        </button>
      </div>
    </div>
  )
}