'use client'
import { useState } from "react";
import './projeto.css';

function App() {

  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(0)
  const [p3, setP3] = useState(0)
  const [p4, setP4] = useState(0)
  const [p5, setP5] = useState(0)
  const [p6, setP6] = useState(0)
  const [p7, setP7] = useState(0)
  const [p8, setP8] = useState(0)
  const [p9, setP9] = useState(0)
  const [p10, setp10] = useState(0)


  const [total, setTotal] = useState(0)


  const [mostrap1, setmostrap1] = useState(true)
  const [mostrap2, setmostrap2] = useState(false)
  const [mostrap3, setmostrap3] = useState(false)
  const [mostrap4, setmostrap4] = useState(false)
  const [mostrap5, setmostrap5] = useState(false)
  const [mostrap6, setmostrap6] = useState(false)
  const [mostrap7, setmostrap7] = useState(false)
  const [mostrap8, setmostrap8] = useState(false)
  const [mostrap9, setmostrap9] = useState(false)
  const [mostrap10, setmostrap10] = useState(false)
  const [mostrapontos, setmostrapontos] = useState(false)


  function calculaTotal() {

    setTotal(p1+p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9)
    if(p10 == 1) { 
      setTotal( p1+p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 +  1)
    }

  }


  return (
    <div>
      {
        mostrap1 == true &&
        <div className="container">
          <div className="question">Qual jogo é este?</div>
          <div className="image">
            <img src="https://play-lh.googleusercontent.com/p7rx-TDw8mSXmnN5oreMbOrC6FTumoRsnz8rDxUHL6-7xYtLlzcyj1GS8UKyBx5eJg" width={200} />
          </div>
          <div className="options">
            <button onClick={() => setP1(1) + setmostrap1(false) + setmostrap2(true)} className="option">mario</button>
            <button onClick={() => setP1(0)+ setmostrap1(false) + setmostrap2(true)} className="option">sonic</button>
            <button onClick={() => setP1(0)+ setmostrap1(false) + setmostrap2(true)} className="option">crash</button>
            <button onClick={() => setP1(0)+ setmostrap1(false) + setmostrap2(true)} className="option">rayman</button>
          </div>
          <br></br>
   
        </div>
      }
      {
        mostrap2 == true &&
        <div className="container">
          <div className="question">No jogo Counter-Strike, qual o objetivo principal dos terroristas</div>
          <div className="image">
            <img src="https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Feditorial%2F2017%2F03%2Fphoenix-terrorist-csgo-update.jpg&width=986&sign=Eh-SFMbu2wH0m5GDA8loaR6ULfEzdUXvRFJpDm5LcLw" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP2(1)+ setmostrap2(false) + setmostrap3(true)} className="option">Colocar uma bomba e detonar</button>
            <button onClick={() => setP2(0) + setmostrap2(false) + setmostrap3(true)} className="option">Resgatar reféns </button>
            <button onClick={() => setP2(0)+ setmostrap2(false) + setmostrap3(true)} className="option">Defender a zona de resgate </button>
            <button onClick={() => setP2(0)+ setmostrap2(false) + setmostrap3(true)} className="option">Destruir um avião</button>
          </div>
          <br></br>
      
        </div>
      }
      {
        mostrap3 == true &&
        <div className="container">
          <div className="question">Qual o nome da protagonista de tomb raider?</div>
          <div className="image">
            <img src="https://sm.ign.com/ign_br/image/t/tomb-raide/tomb-raider-dev-reveals-lara-crofts-official-redesign_7ggr.jpg" width={300} />
          </div>
          <div className="options">
            <button onClick={() => setP3(0)+ setmostrap3(false) + setmostrap4(true)} className="option"> Jill</button>
            <button onClick={() => setP3(0)+ setmostrap3(false) + setmostrap4(true)} className="option">Ellie</button>
            <button onClick={() => setP3(1)+ setmostrap3(false) + setmostrap4(true)} className="option">Lara croft</button>
            <button onClick={() => setP3(0)+ setmostrap3(false) + setmostrap4(true)} className="option">Misty</button>
          </div>
          <br></br>
     
        </div>
      }
      {
        mostrap4 == true &&
        <div className="container">
          <div className="question">Qual jogo é este?</div>
          <div className="image">
            <img src="https://img.redbull.com/images/c_crop,x_301,y_0,h_798,w_638/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/01/23/123820ee-354e-4af9-bd03-b29047d40292/fortnite-battle-royale-characters" width={200} />
          </div>
          <div className="options">
            <button onClick={() => setP4(1) + setmostrap5(true) + setmostrap4(false)} className="option">Fortnite</button>
            <button onClick={() => setP4(0) + setmostrap5(true) + setmostrap4(false)} className="option">Call of Duty</button>
            <button onClick={() => setP4(0) + setmostrap5(true) + setmostrap4(false)} className="option">Pubg</button>
            <button onClick={() => setP4(0) + setmostrap5(true) + setmostrap4(false)} className="option">Skyrim</button>
          </div>
          <br></br>
      
        </div>
      }
      {
        mostrap5 == true &&
        <div className="container">
          <div className="question">Em qual jogo você explora um mundo aberto construindo e minerando em blocos?</div>
          <div className="image">
            <img src="https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2025/01/minecraft.jpg" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP5(0) + setmostrap6(true) + setmostrap5(false)} className="option">Sonic</button>
            <button onClick={() => setP5(0) + setmostrap6(true) + setmostrap5(false)} className="option">Rabidds</button>
            <button onClick={() => setP5(1) + setmostrap6(true) + setmostrap5(false)} className="option">Minecraft</button>
            <button onClick={() => setP5(0)+ setmostrap6(true) + setmostrap5(false)} className="option">The Sims</button>
          </div>
          <br></br>
        
        </div>
      }
      {
        mostrap6 == true &&
        <div className="container">
          <div className="question">Qual o nome do jogo onde você controla um herói chamado Link, que tenta salvar pricesa Zelda</div>
          <div className="image">
            <img src="https://cdn2.iguzzini.com/getmedia/c74d8a53-82d3-4c13-a052-334c4badd958/Zelda_copertina-articolo?width=1800&height=1350&ext=.jpg" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP6(0) + setmostrap6(false) + setmostrap7(true)} className="option">Mario</button>
            <button onClick={() => setP6(1) + setmostrap6(false) + setmostrap7(true)} className="option">The legends of Zelda</button>
            <button onClick={() => setP6(0) + setmostrap6(false) + setmostrap7(true)} className="option">Sonic</button>
            <button onClick={() => setP6(0) + setmostrap6(false) + setmostrap7(true)} className="option">League of Legends</button>
          </div>
          <br></br>
         
        </div>
      }
      {
        mostrap7 == true &&
        <div className="container">
          <div className="question">A cidade fictícia de GTA: Vice City é inspirada em qual cidade real?</div>
          <div className="image">
            <img src="https://tm.ibxk.com.br/2023/12/02/02170737384005.jpg?ims=750x" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP7(0) + setmostrap7(false) + setmostrap8(true)} className="option">Los angeles</button>
            <button onClick={() => setP7(0) + setmostrap7(false) + setmostrap8(true)} className="option">Las Vegas</button>
            <button onClick={() => setP7(1) + setmostrap7(false) + setmostrap8(true)} className="option">Miami</button>
            <button onClick={() => setP7(0) + setmostrap7(false) + setmostrap8(true)} className="option">Orlando</button>
          </div>
          <br></br>
         
        </div>
      }
      {
        mostrap8 == true &&
        <div className="container">
          <div className="question">Em qual jogo você tem que lutar contra zumbis enquanto tenta sobreviver em uma cidade já destruida</div>
          <div className="image">
            <img src="https://th.bing.com/th/id/OIP.R-ipipRzNOpXZJrVg9l4PgHaEK?rs=1&pid=ImgDetMain" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP8(0) + setmostrap8(false) + setmostrap9(true)} className="option">Resident Evil</button>
            <button onClick={() =>  setP8(0) + setmostrap8(false) + setmostrap9(true)} className="option">GTA</button>
            <button onClick={() =>  setP8(1) + setmostrap8(false) + setmostrap9(true)} className="option">The Last of Us</button>
            <button onClick={() =>  setP8(0) + setmostrap8(false) + setmostrap9(true)} className="option">Project Zombid</button>
          </div>
          <br></br>
       
        
        </div>
      }
      {
        mostrap9 == true &&
        <div className="container">
          <div className="question">Qual jogo você controla um ouriço azul que corre muito rápido?</div>
          <div className="image">
            <img src="https://wallpapercave.com/wp/wp2195551.jpg" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setP9(0) + setmostrap9(false)+ setmostrap10(true)} className="option">Lego</button>
            <button onClick={() =>  setP9(1) + setmostrap9(false)+ setmostrap10(true)} className="option">Sonic</button>
            <button onClick={() =>  setP9(0) + setmostrap9(false)+ setmostrap10(true)} className="option">Roblox</button>
            <button onClick={() =>  setP9(0) + setmostrap9(false)+ setmostrap10(true)} className="option">Naruto</button>
          </div>
          <br></br>
        </div>
      }
      {
        mostrap10 == true &&
        <div className="container">
          <div className="question">No jogo Pokémon temo que pegar o que??</div>
          <div className="image">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeqQugmT6eo8Erjx2d7azYItdYye59nDPckVK48lo9T9U8cANBW9WzmSVnYv38lW4Nibtqg4zvqZUOtO4Qg57T3yovztPEUZH4vhZWfujav-vR6OOvTsyTzNEUGDdQ4ieuMOGsHDmiOrE/s1600/Ash_with_his_Pok%25C3%25A9mon.png" width={400} />
          </div>
          <div className="options">
            <button onClick={() => setp10(1)} className="option">Pokémon</button>
            <button onClick={() => setP10(0) } className="option">tesouros</button>
            <button onClick={() => setP10(0)} className="option">Digimons</button>
            <button onClick={() => setP10(0) } className="option">Poderes</button>
            </div>
            <button className="enviar" onClick={() => calculaTotal() + setmostrapontos(true) + setmostrap10(false)}>calcular pontos</button>
        
          <br></br>
        </div>
} 
{
        mostrapontos == true &&
        <div className="container">
        <div className="question1">sua pontuação é {total} </div>
        <div className="image">
          <img src="https://1.bp.blogspot.com/-SGVzJaKoZHQ/XziZ1JszLpI/AAAAAAAAK3M/rIrJnzbYRTUuR3FyPPLAlB25vk7-v3CWACLcBGAsYHQ/s1200/minions.gif "width={400} />
        </div>
        </div>
    
      }
      
      

    </div>
  );
}

export default App;