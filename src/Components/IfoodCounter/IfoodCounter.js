import React, { useState } from 'react'
import '../IfoodCounter/IfoodCounter.css'

function IfoodCounter() {

    

    return (
        <div>
            <button>-</button>
            <p>{value}</p>
            <button>+</button>
        </div>
    )
}

export default IfoodCounter