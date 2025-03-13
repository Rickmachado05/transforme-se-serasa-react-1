'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz() {

    const [p1, alteraP1] = useState(0)
    const [p2, alteraP2] = useState(0)
    const [p3, alteraP3] = useState(0)
    const [p4, alteraP4] = useState(0)
    const [total, alteraTotal] = useState(0)
    const [mostrap1, setp1] = useState(true)
    const [mostrap2, setp2] = useState(false)
    const [mostrap3, setp3] = useState(false)
    const [mostrap4, setp4] = useState(false)

    const [selecionado, alteraSelecionado] = useState(["", "", "", ""])

    function calculaTotal() {


        let totalatualizado = 0

        if (p4 == "Tropa de Elite") {
            totalatualizado = p1 + p2 + p3 + 1
            alteraTotal(totalatualizado)
        } else {
            totalatualizado = p1 + p2 + p3
            alteraTotal(totalatualizado)
        }
    
    let banco = parseInt(localStorage.getItem("total"))
    localStorage.setItem("total",totalatualizado + banco) 
}


    return (
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>

            <hr />

            {
                mostrap1 == true &&
                <div>

                    <h2>Qual a cor do cavalo branco de Napoleãum?</h2>
                    <label> <input name="p1" type="radio" onChange={() => alteraP1(0) + setp1(false) + setp2(true)} /> Preto </label>
                    <br />
                    <label> <input name="p1" type="radio" onChange={() => alteraP1(0)+ setp1(false) + setp2(true)} /> Azul </label>
                    <br />
                    <label> <input name="p1" type="radio" onChange={() => alteraP1(0)+ setp1(false) + setp2(true)} /> Branco </label>
                    <br />
                    <label> <input name="p1" type="radio" onChange={() => alteraP1(1)+ setp1(false) + setp2(true)} /> Transparente </label>
                </div>

            }



            {
                mostrap2 == true &&
                <div>

                    <h2>Qual a melhor letra?</h2>
                    <label> <input name="p2" type="radio" onChange={() => alteraP2(1) + setp2(false) + setp3(true)} /> A </label>
                    <br />
                    <label> <input name="p2" type="radio" onChange={() => alteraP2(0) + setp2(false) + setp3(true)} /> B </label>
                    <br />
                    <label> <input name="p2" type="radio" onChange={() => alteraP2(0) + setp2(false) + setp3(true)} /> C </label>
                    <br />
                    <label> <input name="p2" type="radio" onChange={() => alteraP2(0)+ setp2(false) + setp3(true)} /> X </label>

                </div>

            }

            <hr />



            {
                mostrap3 == true &&
                <div>
                    <h2> Qual é a fruta vermelha? </h2>
                    <p className={selecionado[0]} onClick={() => { alteraP3(0); alteraSelecionado(["selecionado", "", "", ""]) + setp3(false) + setp4(true)}} > Melancia </p>
                    <p className={selecionado[1]} onClick={() => { alteraP3(0); alteraSelecionado(["", "selecionado", "", ""])+ setp3(false) + setp4(true) }} > Abacate </p>
                    <p className={selecionado[2]} onClick={() => { alteraP3(1); alteraSelecionado(["", "", "selecionado", ""]) + setp3(false) + setp4(true)}} > Maçã </p>
                    <p className={selecionado[3]} onClick={() => { alteraP3(0); alteraSelecionado(["", "", "", "selecionado"])+ setp3(false) + setp4(true) }} > Kiwi </p>


                </div>

            }

            {
                mostrap4 == true &&
                <div>

                    <h2>Qual é o melhor filme do mundo?</h2>
                    <input onChange={(e) => alteraP4(e.target.value)} />
                </div>

            }



            <button onClick={() => calculaTotal()} >Enviar respostas</button>

            <p> total de pontos todas as tentantivas: {localStorage.getItem("total")}</p>
            <p>Total de pontos: {total}</p>



















           
        </div>
    );
}

export default Quiz;