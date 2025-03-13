'use client'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';



    export default function Contato (){

        const notify = () => toast("mensagem com problema");

        const notifycorrect = () => toast("mensagem enviada com sucesso");

    const [ name, setname] = useState("")
    const [ mensage, setmensage] = useState("")

    function enviarmensagem(e){

        e.preventDefault()
        
        if (mensage == "" || name == "")
        {
            notify()
        }
        else{
            notifycorrect()
        }

    }


    return (
        <div>
            <h1>Contato</h1>
        <p> entre em contato conosco</p>
    <hr/>

    <form onSubmit={(e) => enviarmensagem (e)}>
    <ToastContainer />
        <label>
            digite seu nome: {name}
            <input onChange={(e)=>setname(e.target.value)}></input>
        </label>


        <br/>

        <label>
            digite sua mensagem {mensage}
            <input onChange={(e)=>setmensage(e.target.value)}></input>
        </label>
        <br/>   
        <button> enviar </button>
        
    </form>
    
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    
            </div>

) }       

           