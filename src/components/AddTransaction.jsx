import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function AddTransaction (){

    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {newTransaction} = useContext(GlobalContext)

    function onSubmit(e)
    {
        e.preventDefault()

        const freshTransaction = {
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+amount
        }

        newTransaction(freshTransaction)
        setAmount(0)
        setText('')
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter here" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    (negative - expense, positive - income)</label>
                    <div className="input-button">
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="amount here" />
                        <button className="btn">Add transaction</button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}