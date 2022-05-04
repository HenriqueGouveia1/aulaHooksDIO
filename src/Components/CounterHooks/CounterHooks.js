import React, { useState } from 'react';

function CounterHooks() {
    const [qtd, setQtd] = useState(0)
    
    return (
        <>
            <h1>{qtd}</h1>
            <button onClick={()=> setQtd(qtd+1)}>Aumentar</button>
        </>
    );
}

export default CounterHooks;
