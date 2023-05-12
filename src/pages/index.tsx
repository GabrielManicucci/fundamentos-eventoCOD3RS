import Linha from "@/components/layouts/Linha"
import Menu from "@/components/template/Menu"
import MenuItem from "@/components/template/MenuItem"
import Pagina from "@/components/template/Pagina"
import { IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconClockHour4, IconComponents, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem 
            className="bg-gradient-to-r from-red-500 to-yellow-500" 
            icone={<IconSourceCode />} 
            url="/hora.html"
          >
            Hora (Estático)
          </MenuItem>
          <MenuItem 
            className="bg-gradient-to-r from-red-500 to-yellow-500" 
            icone={<IconSourceCode />} 
            url='/horaAtual.html'
          >
            Hora com JS (Estático)
          </MenuItem>
          <MenuItem 
            className="bg-gradient-to-r from-red-500 to-yellow-500" 
            icone={<IconClock />} 
            url="/api/hora"
          >
            Hora (Dinâmico)
          </MenuItem>
          <MenuItem 
            className="bg-gradient-to-r from-red-500 to-yellow-500" 
            icone={<IconArrowsDiff />} 
            url="/api/usuarios"
          >
            API de Usuários (Dinâmico)
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconH1 />}
            url="/examples/basico"
          >
            Componente Básico
            </MenuItem>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconComponents />}
            url="/examples/simples"
          >
            Componente Simples
            </MenuItem>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconClick />}
            url="/examples/evento"
          >
            Eventos
            </MenuItem>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconSitemap />}
            url="/examples/filhos"
          >
            Filhos
            </MenuItem>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconArrowMoveDown />}
            url="/examples/direta"
          >
            Comunicação Direta
            </MenuItem>
          <MenuItem
            className="bg-gradient-to-r from-cyan-500 to-red-500"
            icone={<IconArrowMoveUp />}
            url="/examples/indireta"
          >
            Comunicação Indireta
            </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
  )
}
