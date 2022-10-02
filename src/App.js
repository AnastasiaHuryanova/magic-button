import './App.css';
import {phraseChanger} from "./phraseChanger";
import {useState} from "react";

export const phrase = "l'ottimismo é il profumo della vita"
export const altPhrase = "la vita é un biscotto, ma se piove si scioglie"

function App() {
    const [currentPhrase, setCurrentPhrase] = useState(phrase)

    const onClickHandler = ()=> {
        setCurrentPhrase(phraseChanger(currentPhrase))
    }

    return (
        <div className="App">
            <button onClick={onClickHandler} style={{color: "red"}}>magic button</button>
            <h3>{currentPhrase}</h3>
        </div>
    );
}

export default App;
