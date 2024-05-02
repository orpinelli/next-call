'use client'
import { useState } from "react"

export default function AddCar(){
    const [caut, setCaut] = useState(0)

    function AddCardButton(){
        setCaut((state) => state + 1)
    }
    return(
        <button onClick={AddCardButton}>Add ao carrinho {caut}</button>
    )
}