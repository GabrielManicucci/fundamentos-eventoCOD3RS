import { NextApiRequest, NextApiResponse } from 'next';


export default function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {nome: "Gabriel", email: "manicucciguedes@gmail.com"},
    {nome: "Débora", email: "manicucciDebora@gmail.com"}
  ])
}
  
