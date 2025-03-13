'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./painel.css"



function Painel() {

    function login() {
        if (usuario == "rick" && senha == "1234") {
            notify()
            seterro(["erro1"])
        }
        else {
            notifycorrect()
            seterro(["erro2"])
        }
    }

    const [erro, seterro] = useState(["erro2", "erro1"])

    const notify = () => toast.success("login correto");

    const notifycorrect = () => toast.error("login incorreto");

    const [usuario, setusuario] = useState("")
    const [senha, setsenha] = useState("")


    return (



        <div>
            <h1> Painel admnistrativo</h1>

            <label>
                digite o usuário:
                <input onChange={(e) => setusuario(e.target.value)} />
            </label>
            <br />

            <label>
                digite a senha:
                <input type="password" onChange={(e) => setsenha(e.target.value)} />
            </label>

            <br />
            <button onClick={login}>Entrar</button>
            <ToastContainer />


            <div className={erro[0]} >
                erro usuário ou senha incorretos
            </div>



        </div>

    );
}

export default Painel;