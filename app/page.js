'use client'
import { useState } from "react";
import "./home.css"

export default function Home() {

  const [carrinho, setcarrinho] = useState(0)

 
  
  







  return (
    <div>
    <h1>mercado</h1>
    <br></br>
    <p className="carrinho" >itens no carrinho : { carrinho }</p> 
    <button onClick= {()=> setcarrinho(carrinho - 1)}  > remover item</button>
    <button onClick= {()=> setcarrinho(carrinho == 0)} >limpar</button>
    <hr/>
    <h2> produtos</h2>

    <div className="produto">
    <img src= "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/01325ea5fd7fd4ecab7e209393bf6188.jpg" height={50}></img>
    <p>  batata  </p>

    <p> r$ 2,50 (kg)</p>

    <button onClick= {()=> setcarrinho(carrinho + 1)} >comprar </button>
    


    </div>
    
    </div>

    
  );
}