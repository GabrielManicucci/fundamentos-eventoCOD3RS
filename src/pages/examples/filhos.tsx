import Box from "@/components/examples/filhos/Caixa";
import Grade from "@/components/examples/filhos/Grade";
import Pagina from "@/components/template/Pagina";


export default function GradePag() {
  return (
    <Pagina>
      <Grade>
        <Box>
          <span>1</span>
          <span>2</span>
        </Box>
        <Box>
          <span>3</span>
          <span>4</span>
        </Box>
        <Box>
          <span>5</span>
          <span>6</span>
        </Box>
        <Box>
          <span>6</span>
          <span>7</span>
        </Box>
        <Box>
          <span>8</span>
          <span>9</span>
        </Box>
        <Box>
          <span>10</span>
          <span>11</span>
        </Box>
      </Grade>
    </Pagina>
   
  )
}