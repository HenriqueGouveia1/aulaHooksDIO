import React from 'react';


function Counter() {
    let quantity = 0

    function increment(){
        quantity++
        document.getElementById('show-qtd').innerHTML = quantity
    }

    return (
    <>
      <h1 id='show-qtd'>{quantity}</h1>
      <button onClick={increment}>Aumentar</button>
    </>
  );
}

export default Counter;
