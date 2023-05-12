export interface FIlhoProps {
  nome: string
  sobrenome: string
}

export default function Filho(props: FIlhoProps) {
  return (
    <div className="flex flex-col items-center">
      <li>
        {props.nome} {props.sobrenome}
      </li>
    </div>
  )
}