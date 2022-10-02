import './App.css';
import {phraseChanger} from "./phraseChanger";
import {useState} from "react";

export const phrase = "l'ottimismo é il profumo della vita"
export const altPhrase = "la vita é un biscotto, ma se piove si scioglie"

function App() {
    // const stateAndStateSetter =  useState(phrase); // useState ti fornisce lo stato inizializzato (con il valore che gli hai passato tra parentesi) ED una funzione che ti permette di: cambiare lo state e triggerare il rerendering allo stesso tempo
    // const statoAttuale = stateAndStateSetter[0]
    // const funzioneCheCambiaLoStato = stateAndStateSetter[1]

    const [currentPhrase, setCurrentPhrase] = useState(phrase)

    const onClickHandler = ()=> {
        const newPhrase = phraseChanger(currentPhrase)
        setCurrentPhrase(newPhrase);
    }

    return (
        <div className="App">
            <button onClick={onClickHandler} style={{color: "red"}}>
                magic button
            </button>
            <h3>
                {currentPhrase}
            </h3>
        </div>
    );
}

export default App;
