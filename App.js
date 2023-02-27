import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { AddToCounter } from './AddToCounter';
import { useCounter } from './UseCounter';
import CommentsCount from './CommentsCount';
import FromHoc from './CommentsCount';
import GoogleTranslate from './googleTranslate';
function App() {
    let counter = useCounter(1, 1)

    return (
        <div style={{ textAlign: 'center', color: 'darkcyan' }}>
            {/* <h1>exc 1</h1>
            <h2>add 10</h2>
            <AddToCounter />
            <h2>add 1</h2> 
            {<h3>total: {counter.count}</h3>}
            <button onClick={counter.handleClick}>add</button>
            <div style={{color:"pink"}}>
                <h1>exc 2</h1>
                
                <FromHoc/>
               
            </div> */}
            <GoogleTranslate/>
        </div>)
}

export default App;
