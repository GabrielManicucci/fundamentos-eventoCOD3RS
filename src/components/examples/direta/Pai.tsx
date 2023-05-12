import Filho from "./Filho"


export interface PaiProps {
  nome: string
  sobrenome: string
}

export default function Pai(props: PaiProps) {
  return (
    <div className="flex flex-col gap-4 ">
      <h1>
        <b>{props.nome} {props.sobrenome}</b>
      </h1>
      <ul>
        <Filho nome='Quico' sobrenome={props.sobrenome} />
        <Filho nome='Gabriel' sobrenome={props.sobrenome} />
        <Filho nome='Fernando' sobrenome={props.sobrenome} />
        <Filho nome='Débora' sobrenome={props.sobrenome} />
      </ul>
    </div>
  )
}