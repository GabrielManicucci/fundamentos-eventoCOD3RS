export interface BotoesProps {
  mudarValor: (novo: string) => void
}

export default function Botoes(props: BotoesProps) {
  return (
    <div className="flex gap-5">
      <button className="botao" onClick={() => props.mudarValor('Quico')} >Quico</button>
      <button className="botao" onClick={() => props.mudarValor('Gabriel')}>Gabriel</button>
      <button className="botao" onClick={() => props.mudarValor('Fernando')}>Fernando</button>
      <button className="botao" onClick={() => props.mudarValor('Débora')}>Débora</button>
    </div>
  )
}